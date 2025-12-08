import { Metadata } from 'next';
import Layout from '@/components/Layout';
import AppartementsContent from '@/components/AppartementsContent';

export const metadata: Metadata = {
  title: 'Nos Appartements | Résidence Ker Enia - Cambo-les-Bains',
  description: 'Découvrez nos 16 appartements tout confort de 25 à 45m² avec terrasses. Studio, Standard et Confort disponibles. Piscine chauffée, WiFi gratuit, parking privé.',
  alternates: {
    canonical: 'https://www.kerenia.fr/appartements',
  },
};

export default function Appartements() {
  return (
    <Layout>
      <AppartementsContent />
    </Layout>
  );
}
