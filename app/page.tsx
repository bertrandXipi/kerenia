import { Metadata } from 'next';
import Layout from '@/components/Layout';
import HomeContent from '@/components/HomeContent';

export const metadata: Metadata = {
  title: 'Résidence Ker Enia - Appartements de tourisme à Cambo-les-Bains, Pays Basque',
  description: 'Résidence de tourisme 3 étoiles à Cambo-les-Bains. Appartements tout confort de 25 à 45m² avec piscine chauffée. Idéal pour cure thermale et découverte du Pays Basque.',
  alternates: {
    canonical: 'https://www.kerenia.fr',
  },
};

export default function Home() {
  return (
    <Layout>
      <HomeContent />
    </Layout>
  );
}
