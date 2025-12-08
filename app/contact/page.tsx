import { Metadata } from 'next';
import Layout from '@/components/Layout';
import ContactContent from '@/components/ContactContent';

export const metadata: Metadata = {
  title: 'Contact & Réservation | Résidence Ker Enia - Cambo-les-Bains',
  description: 'Contactez-nous pour réserver votre séjour à la Résidence Ker Enia. Adresse : 9 Rue de la Bergerie, 64250 Cambo-les-Bains. Tél : +33 (0) 559 647 200',
};

export default function Contact() {
  return (
    <Layout>
      <ContactContent />
    </Layout>
  );
}
