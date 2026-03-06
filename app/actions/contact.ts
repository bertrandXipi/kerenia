'use server';

import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
    name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
    email: z.string().email('Email invalide'),
    phone: z.string().optional(),
    subject: z.string().min(1, 'Veuillez sélectionner un sujet'),
    message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
});

export async function sendContactEmail(formData: FormData) {
    try {
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

        const { data, error } = await resend.emails.send({
            from: 'Résidence Ker Enia <onboarding@resend.dev>',
            to: 'henrihenro33@gmail.com',
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
        });

        if (error) {
            console.error('Erreur API Resend:', error);
            return { success: false, error: error.message };
        }

        return { success: true, data };
    } catch (err) {
        console.error('Erreur serveur inattendue (Contact Form):', err);
        return { success: false, error: 'Une erreur est survenue lors de l\'envoi du message.' };
    }
}
