import { Locale } from './i18n';
import { Apartment, Review, Activity } from './types';
import { Wifi, Thermometer, Coffee, Tv, Car, Waves } from 'lucide-react';

// Apartments data by locale
export const APARTMENTS_DATA: Record<Locale, Apartment[]> = {
  fr: [
    {
      id: 'studio',
      title: 'Le Studio',
      size: '29 m²',
      capacity: '2 personnes',
      description: 'Situé en rez-de-chaussée, ce studio cosy offre une séparation intelligente entre l\'espace nuit et la pièce à vivre par un rideau élégant. Idéal pour les couples ou les curistes.',
      features: ['Lit double 140cm', 'Rez-de-chaussée', 'Climatisation', 'Wifi gratuit', 'Cuisine équipée'],
      imageUrl: 'https://www.kerenia.fr/wp-content/uploads/2021/04/DSC_7223.jpg',
      priceFrom: '65€ / nuit'
    },
    {
      id: 'standard',
      title: 'Appartement Standard',
      size: '28 - 30 m²',
      capacity: '2 personnes',
      description: 'Un espace lumineux avec une chambre séparée pour plus d\'intimité. Décoration soignée et équipements modernes pour un séjour comme à la maison.',
      features: ['Chambre séparée (Lit 140cm)', 'Climatisation', 'Wifi gratuit', 'Terrasse', 'Lave-vaisselle'],
      imageUrl: 'https://www.kerenia.fr/wp-content/uploads/2021/04/DSC_7309.jpg',
      priceFrom: '75€ / nuit'
    },
    {
      id: 'comfort',
      title: 'Appartement Confort',
      size: '35 - 45 m²',
      capacity: '2 à 3 personnes',
      description: 'Nos plus grands appartements. Spacieux, avec un grand lit et un canapé convertible. Parfait pour les longs séjours ou les petites familles.',
      features: ['Grand lit (140 ou 160cm)', 'Canapé convertible', 'Espace salon spacieux', 'Grande terrasse', 'Cuisine complète'],
      imageUrl: 'https://www.kerenia.fr/wp-content/uploads/2021/04/DSC_7357.jpg',
      priceFrom: '90€ / nuit'
    }
  ],
  en: [
    {
      id: 'studio',
      title: 'The Studio',
      size: '29 m²',
      capacity: '2 guests',
      description: 'Located on the ground floor, this cozy studio offers a smart separation between the sleeping area and the living space with an elegant curtain. Ideal for couples or spa guests.',
      features: ['Double bed 140cm', 'Ground floor', 'Air conditioning', 'Free wifi', 'Equipped kitchen'],
      imageUrl: 'https://www.kerenia.fr/wp-content/uploads/2021/04/DSC_7223.jpg',
      priceFrom: '€65 / night'
    },
    {
      id: 'standard',
      title: 'Standard Apartment',
      size: '28 - 30 m²',
      capacity: '2 guests',
      description: 'A bright space with a separate bedroom for more privacy. Careful decoration and modern equipment for a stay like home.',
      features: ['Separate bedroom (140cm bed)', 'Air conditioning', 'Free wifi', 'Terrace', 'Dishwasher'],
      imageUrl: 'https://www.kerenia.fr/wp-content/uploads/2021/04/DSC_7309.jpg',
      priceFrom: '€75 / night'
    },
    {
      id: 'comfort',
      title: 'Comfort Apartment',
      size: '35 - 45 m²',
      capacity: '2 to 3 guests',
      description: 'Our largest apartments. Spacious, with a large bed and a sofa bed. Perfect for long stays or small families.',
      features: ['Large bed (140 or 160cm)', 'Sofa bed', 'Spacious living area', 'Large terrace', 'Full kitchen'],
      imageUrl: 'https://www.kerenia.fr/wp-content/uploads/2021/04/DSC_7357.jpg',
      priceFrom: '€90 / night'
    }
  ],
  es: [
    {
      id: 'studio',
      title: 'El Estudio',
      size: '29 m²',
      capacity: '2 huéspedes',
      description: 'Situado en planta baja, este acogedor estudio ofrece una separación inteligente entre el área de dormir y el espacio de estar con una elegante cortina. Ideal para parejas o curistas.',
      features: ['Cama doble 140cm', 'Planta baja', 'Aire acondicionado', 'Wifi gratis', 'Cocina equipada'],
      imageUrl: 'https://www.kerenia.fr/wp-content/uploads/2021/04/DSC_7223.jpg',
      priceFrom: '65€ / noche'
    },
    {
      id: 'standard',
      title: 'Apartamento Estándar',
      size: '28 - 30 m²',
      capacity: '2 huéspedes',
      description: 'Un espacio luminoso con un dormitorio separado para más privacidad. Decoración cuidada y equipamiento moderno para una estancia como en casa.',
      features: ['Dormitorio separado (cama 140cm)', 'Aire acondicionado', 'Wifi gratis', 'Terraza', 'Lavavajillas'],
      imageUrl: 'https://www.kerenia.fr/wp-content/uploads/2021/04/DSC_7309.jpg',
      priceFrom: '75€ / noche'
    },
    {
      id: 'comfort',
      title: 'Apartamento Confort',
      size: '35 - 45 m²',
      capacity: '2 a 3 huéspedes',
      description: 'Nuestros apartamentos más grandes. Espaciosos, con una cama grande y un sofá cama. Perfecto para estancias largas o familias pequeñas.',
      features: ['Cama grande (140 o 160cm)', 'Sofá cama', 'Sala de estar espaciosa', 'Terraza grande', 'Cocina completa'],
      imageUrl: 'https://www.kerenia.fr/wp-content/uploads/2021/04/DSC_7357.jpg',
      priceFrom: '90€ / noche'
    }
  ]
};

// Activities data by locale
export const ACTIVITIES_DATA: Record<Locale, Activity[]> = {
  fr: [
    {
      id: 'arnaga',
      title: 'Villa Arnaga',
      description: 'Demeure exceptionnelle d\'Edmond Rostand. Musée de France entouré d\'un magnifique parc et jardin à la française.',
      imageUrl: 'https://www.kerenia.fr/wp-content/uploads/2017/05/Villa_Arnaga.jpg',
      link: 'http://www.arnaga.com/'
    },
    {
      id: 'pas-de-roland',
      title: 'Le Pas de Roland',
      description: 'Une jolie promenade facile le long de la Nive à Itxassou. Une gorge creusée par la rivière, lieu de légendes basques.',
      imageUrl: 'https://www.kerenia.fr/wp-content/uploads/2020/02/5191788684_a9edc8110e_c.jpg',
      link: '#'
    },
    {
      id: 'rhune',
      title: 'La Rhune',
      description: 'Le sommet mythique du Pays Basque. Accessible à pied ou via le petit train à crémaillère pour un panorama à 360°.',
      imageUrl: 'https://www.kerenia.fr/wp-content/uploads/2020/02/2948014906_ca81a12c2d_z.jpg',
      link: 'https://www.rhune.com/fr/'
    }
  ],
  en: [
    {
      id: 'arnaga',
      title: 'Villa Arnaga',
      description: 'Exceptional residence of Edmond Rostand. Museum of France surrounded by a magnificent park and French garden.',
      imageUrl: 'https://www.kerenia.fr/wp-content/uploads/2017/05/Villa_Arnaga.jpg',
      link: 'http://www.arnaga.com/'
    },
    {
      id: 'pas-de-roland',
      title: 'Pas de Roland',
      description: 'A nice easy walk along the Nive in Itxassou. A gorge carved by the river, place of Basque legends.',
      imageUrl: 'https://www.kerenia.fr/wp-content/uploads/2020/02/5191788684_a9edc8110e_c.jpg',
      link: '#'
    },
    {
      id: 'rhune',
      title: 'La Rhune',
      description: 'The mythical summit of the Basque Country. Accessible on foot or via the small rack railway for a 360° panorama.',
      imageUrl: 'https://www.kerenia.fr/wp-content/uploads/2020/02/2948014906_ca81a12c2d_z.jpg',
      link: 'https://www.rhune.com/en/'
    }
  ],
  es: [
    {
      id: 'arnaga',
      title: 'Villa Arnaga',
      description: 'Residencia excepcional de Edmond Rostand. Museo de Francia rodeado de un magnífico parque y jardín francés.',
      imageUrl: 'https://www.kerenia.fr/wp-content/uploads/2017/05/Villa_Arnaga.jpg',
      link: 'http://www.arnaga.com/'
    },
    {
      id: 'pas-de-roland',
      title: 'Pas de Roland',
      description: 'Un bonito paseo fácil a lo largo del Nive en Itxassou. Una garganta excavada por el río, lugar de leyendas vascas.',
      imageUrl: 'https://www.kerenia.fr/wp-content/uploads/2020/02/5191788684_a9edc8110e_c.jpg',
      link: '#'
    },
    {
      id: 'rhune',
      title: 'La Rhune',
      description: 'La cumbre mítica del País Vasco. Accesible a pie o mediante el pequeño tren de cremallera para un panorama de 360°.',
      imageUrl: 'https://www.kerenia.fr/wp-content/uploads/2020/02/2948014906_ca81a12c2d_z.jpg',
      link: 'https://www.rhune.com/es/'
    }
  ]
};

// Amenities data by locale
export const AMENITIES_DATA: Record<Locale, Array<{ icon: any; label: string }>> = {
  fr: [
    { icon: Wifi, label: 'Wifi Gratuit' },
    { icon: Thermometer, label: 'Climatisation' },
    { icon: Coffee, label: 'Cuisine Équipée' },
    { icon: Tv, label: 'TV Écran Plat' },
    { icon: Car, label: 'Parking Privé' },
    { icon: Waves, label: 'Piscine Chauffée' },
  ],
  en: [
    { icon: Wifi, label: 'Free Wifi' },
    { icon: Thermometer, label: 'Air Conditioning' },
    { icon: Coffee, label: 'Equipped Kitchen' },
    { icon: Tv, label: 'Flat Screen TV' },
    { icon: Car, label: 'Private Parking' },
    { icon: Waves, label: 'Heated Pool' },
  ],
  es: [
    { icon: Wifi, label: 'Wifi Gratis' },
    { icon: Thermometer, label: 'Aire Acondicionado' },
    { icon: Coffee, label: 'Cocina Equipada' },
    { icon: Tv, label: 'TV Pantalla Plana' },
    { icon: Car, label: 'Parking Privado' },
    { icon: Waves, label: 'Piscina Climatizada' },
  ]
};

// Gallery categories by locale
export const GALLERY_CATEGORIES: Record<Locale, Record<string, string>> = {
  fr: {
    'Intérieur': 'Intérieur',
    'Extérieur': 'Extérieur',
    'Alentours': 'Alentours'
  },
  en: {
    'Intérieur': 'Interior',
    'Extérieur': 'Exterior',
    'Alentours': 'Surroundings'
  },
  es: {
    'Intérieur': 'Interior',
    'Extérieur': 'Exterior',
    'Alentours': 'Alrededores'
  }
};

// Reviews stay in French (real Google reviews)
export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Valerie Flauder',
    rating: 5,
    text: 'Magnifique bâtisse de style basque. Calme absolu tout proche du centre. Studio très cosy, très bien équipé et très propre. Un gros plus, la piscine chauffée très agréable.',
    source: 'Google',
    date: 'Il y a 3 mois'
  },
  {
    id: '2',
    author: 'Laurent Fouchard',
    rating: 5,
    text: 'Résidence bien située, au calme. Appartement très spacieux bien agencé, équipé avec goût et des matériaux de qualité. Piscine chauffée centrale dans la résidence.',
    source: 'Google',
    date: 'Il y a 2 mois'
  },
  {
    id: '3',
    author: 'Maéva Izquierdo',
    rating: 5,
    text: 'Magnifique résidence. Accueil chaleureux, personnel discret et disponible. Proche du centre ville et calme à la fois. Nous recommandons vivement !',
    source: 'Google',
    date: 'Il y a 1 mois'
  },
  {
    id: '4',
    author: 'Philippe Martin',
    rating: 5,
    text: 'Séjour parfait pour notre cure thermale. L\'appartement est impeccable, la literie excellente. La piscine chauffée est un vrai bonheur après les soins. On reviendra !',
    source: 'Google',
    date: 'Il y a 3 semaines'
  },
  {
    id: '5',
    author: 'Sophie Durand',
    rating: 5,
    text: 'Cadre idyllique au pied des montagnes basques. Appartement décoré avec beaucoup de goût, cuisine parfaitement équipée. Les enfants ont adoré la piscine.',
    source: 'Google',
    date: 'Il y a 2 semaines'
  },
  {
    id: '6',
    author: 'Jean-Pierre Etcheverry',
    rating: 5,
    text: 'En tant que Basque, je suis fier de recommander cette résidence. L\'authenticité du lieu, le calme, la propreté irréprochable. Un vrai havre de paix.',
    source: 'Google',
    date: 'Il y a 1 semaine'
  },
  {
    id: '7',
    author: 'Catherine Blanc',
    rating: 4,
    text: 'Très bel endroit, bien situé entre mer et montagne. L\'appartement confort est spacieux et lumineux. Seul petit bémol : le parking un peu juste en haute saison.',
    source: 'Google',
    date: 'Il y a 5 jours'
  },
  {
    id: '8',
    author: 'Marc Lefebvre',
    rating: 5,
    text: 'Troisième séjour à Ker Enia et toujours aussi enchanté. La résidence est magnifiquement entretenue, le personnel aux petits soins. Notre adresse incontournable au Pays Basque.',
    source: 'Google',
    date: 'Il y a 2 jours'
  }
];
