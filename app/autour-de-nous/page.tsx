import { Metadata } from 'next';
import Layout from '@/components/Layout';
import AutourContent from '@/components/AutourContent';

export const metadata: Metadata = {
  title: 'Autour de nous | Résidence Ker Enia - Activités Pays Basque',
  description: 'Découvrez les activités et sites touristiques autour de Cambo-les-Bains : Villa Arnaga, La Rhune, Pas de Roland, thermes et bien plus.',
};

export default function AutourDeNous() {
  return (
    <Layout>
      <AutourContent />
    </Layout>
  );
}
