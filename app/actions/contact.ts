'use server';

import nodemailer from 'nodemailer';
import { z } from 'zod';

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '465'),
    secure: true, // Use SSL
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
    },
});

const contactSchema = z.object({
    name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
    email: z.string().email('Email invalide'),
    phone: z.string().optional(),
    subject: z.string().min(1, 'Veuillez sélectionner un sujet'),
    message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
});

// Simple in-memory rate limiter (resets on server restart)
const rateLimitMap = new Map<string, { count: number; firstRequest: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX = 3; // max 3 submissions per IP per hour

function checkRateLimit(ip: string): boolean {
    const now = Date.now();
    const entry = rateLimitMap.get(ip);

    if (!entry || now - entry.firstRequest > RATE_LIMIT_WINDOW_MS) {
        rateLimitMap.set(ip, { count: 1, firstRequest: now });
        return true;
    }

    if (entry.count >= RATE_LIMIT_MAX) {
        return false;
    }

    entry.count++;
    return true;
}

export async function sendContactEmail(formData: FormData) {
    try {
        // --- Anti-spam: honeypot field (must be empty) ---
        const honeypot = formData.get('website') as string;
        if (honeypot && honeypot.trim() !== '') {
            // Bot filled the hidden field — silently succeed to not reveal detection
            return { success: true };
        }

        // --- Anti-spam: minimum time check (bots submit instantly) ---
        const formLoadedAt = parseInt(formData.get('_t') as string || '0', 10);
        const elapsed = Date.now() - formLoadedAt;
        if (formLoadedAt === 0 || elapsed < 3000) {
            return { success: false, error: 'Soumission trop rapide. Veuillez réessayer.' };
        }

        // --- Anti-spam: rate limiting by IP ---
        const { headers } = await import('next/headers');
        const headersList = headers();
        const ip =
            headersList.get('x-forwarded-for')?.split(',')[0]?.trim() ||
            headersList.get('x-real-ip') ||
            'unknown';

        if (!checkRateLimit(ip)) {
            return { success: false, error: 'Trop de messages envoyés. Veuillez réessayer dans une heure.' };
        }

        const rawData = {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            phone: formData.get('phone') as string,
            subject: formData.get('subject') as string,
            message: formData.get('message') as string,
        };

        // Validation avec Zod
        const validatedData = contactSchema.safeParse(rawData);

        if (!validatedData.success) {
            const errorMsg = validatedData.error.issues[0].message;
            return { success: false, error: errorMsg };
        }

        const { name, email, phone, subject, message } = validatedData.data;

        const mailOptions = {
            from: `"${name}" <${process.env.SMTP_USER}>`, // The 'from' must usually be the auth user or a valid alias on OVH
            to: process.env.CONTACT_EMAIL || 'contact@kerenia.fr',
            bcc: process.env.BCC_EMAIL || 'henrihenro33@gmail.com',
            replyTo: email,
            subject: `Nouveau message de ${name} : ${subject}`,
            html: `
        <h2>Nouveau message depuis le formulaire de contact Ker Enia</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${phone || 'Non renseigné'}</p>
        <p><strong>Sujet :</strong> ${subject}</p>
        <hr />
        <p><strong>Message :</strong></p>
        <p>${message.replace(/\n/g, '<br />')}</p>
      `,
        };

        const result = await transporter.sendMail(mailOptions);

        return { success: true, data: result };
    } catch (err: any) {
        console.error('Erreur SMTP (Contact Form):', err);
        return { success: false, error: 'Une erreur est survenue lors de l\'envoi du message.' };
    }
}
