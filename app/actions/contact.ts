'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
    try {
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const phone = formData.get('phone') as string;
        const subject = formData.get('subject') as string;
        const message = formData.get('message') as string;

        if (!name || !email || !message) {
            return { success: false, error: 'Veuillez remplir les champs obligatoires.' };
        }

        const { data, error } = await resend.emails.send({
            from: 'Résidence Ker Enia <onboarding@resend.dev>', // resend sandbox domain for testing, replace with verified domain in production
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
