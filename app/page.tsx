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
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    name: 'Résidence Ker Enia',
    description: 'Résidence de tourisme 3 étoiles à Cambo-les-Bains. Appartements tout confort avec piscine chauffée au cœur du Pays Basque.',
    url: 'https://www.kerenia.fr',
    telephone: '+33559647200',
    email: 'contact@kerenia.fr',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '9 Rue de la Bergerie',
      addressLocality: 'Cambo-les-Bains',
      postalCode: '64250',
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 43.3583,
      longitude: -1.4026,
    },
    starRating: {
      '@type': 'Rating',
      ratingValue: '3',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
      bestRating: '5',
    },
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Piscine chauffée', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'WiFi gratuit', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Parking privé', value: true },
    ],
    image: 'https://www.kerenia.fr/images/remote/piscine-kerenia.webp',
  };

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeContent />
    </Layout>
  );
}
