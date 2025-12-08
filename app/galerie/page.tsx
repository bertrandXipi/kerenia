import { Metadata } from 'next';
import Layout from '@/components/Layout';
import GalerieContent from '@/components/GalerieContent';

export const metadata: Metadata = {
  title: 'Galerie Photos | Résidence Ker Enia - Cambo-les-Bains',
  description: 'Découvrez en images notre résidence de tourisme, nos appartements, notre piscine chauffée et les environs du Pays Basque.',
};

export default function Galerie() {
  return (
    <Layout>
      <GalerieContent />
    </Layout>
  );
}
