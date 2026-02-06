import { Apartment, Review, Activity, NavItem } from '@/lib/types';
import { Wifi, Thermometer, Coffee, Tv, Car, Waves } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Accueil', path: '/' },
  { label: 'Appartements', path: '/appartements' },
  { label: 'Galerie', path: '/galerie' },
  { label: 'Autour de nous', path: '/autour-de-nous' },
  { label: 'Contact', path: '/contact' },
];

export const BOOKING_URL = "https://www.secure-hotel-booking.com/d-edge/Residence-Ker-Enia/JJT7/fr-FR";

export const APARTMENTS: Apartment[] = [
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
];

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

export const ACTIVITIES: Activity[] = [
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
];

export const AMENITIES = [
  { icon: Wifi, label: 'Wifi Gratuit' },
  { icon: Thermometer, label: 'Climatisation' },
  { icon: Coffee, label: 'Cuisine Équipée' },
  { icon: Tv, label: 'TV Écran Plat' },
  { icon: Car, label: 'Parking Privé' },
  { icon: Waves, label: 'Piscine Chauffée' },
];

export const CONTACT_INFO = {
  address: '9 Rue de la Bergerie, 64250 Cambo-les-Bains',
  phone: '+33 (0) 559 647 200',
  email: 'contact@kerenia.fr',
  mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2903.097034237142!2d-1.402636684293992!3d43.35985877913253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd511674338e530b%3A0xd49b2915832a8e1a!2sR%C3%A9sidence%20Ker%20Enia!5e0!3m2!1sfr!2sfr!4v1620000000000!5m2!1sfr!2sfr'
};

export const GALLERY_IMAGES = [
  {
    id: 1,
    src: 'https://www.kerenia.fr/wp-content/uploads/2021/04/DSC_7223.jpg',
    category: 'Intérieur',
    alt: 'Studio cosy avec lit double',
  },
  {
    id: 2,
    src: 'https://www.kerenia.fr/wp-content/uploads/2021/04/DSC_7309.jpg',
    category: 'Intérieur',
    alt: 'Appartement standard spacieux',
  },
  {
    id: 3,
    src: 'https://www.kerenia.fr/wp-content/uploads/2021/04/DSC_7357.jpg',
    category: 'Intérieur',
    alt: 'Appartement confort avec salon',
  },
  {
    id: 4,
    src: 'https://www.kerenia.fr/wp-content/uploads/2020/07/piscine-kerenia.jpg',
    category: 'Extérieur',
    alt: 'Piscine chauffée de la résidence',
  },
  {
    id: 5,
    src: 'https://www.kerenia.fr/wp-content/uploads/2020/07/appartement3-kerenia.jpg',
    category: 'Intérieur',
    alt: 'Détail décoration intérieure',
  },
  {
    id: 6,
    src: 'https://www.kerenia.fr/wp-content/uploads/2020/07/piscine-kerenia.jpg',
    category: 'Extérieur',
    alt: 'Détente au bord de la piscine',
  },
  {
    id: 7,
    src: 'https://www.kerenia.fr/wp-content/uploads/2021/04/DSC_7357.jpg',
    category: 'Intérieur',
    alt: 'Espace repas lumineux',
  },
  {
    id: 8,
    src: 'https://www.kerenia.fr/wp-content/uploads/2017/05/Villa_Arnaga.jpg',
    category: 'Alentours',
    alt: 'Villa Arnaga à proximité',
  },
];