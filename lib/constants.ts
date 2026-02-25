import { Apartment, Review, Activity, NavItem } from '@/lib/types';
import { Locale } from './i18n';
import { APARTMENTS_DATA, ACTIVITIES_DATA, AMENITIES_DATA, REVIEWS } from './data';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Accueil', path: '/' },
  { label: 'Appartements', path: '/appartements' },
  { label: 'Galerie', path: '/galerie' },
  { label: 'Autour de nous', path: '/autour-de-nous' },
  { label: 'Contact', path: '/contact' },
];

export const BOOKING_URL = "https://www.secure-hotel-booking.com/d-edge/Residence-Ker-Enia/JJT7/fr-FR";

// Helper functions to get localized data
export const getApartments = (locale: Locale): Apartment[] => APARTMENTS_DATA[locale] || APARTMENTS_DATA.fr;
export const getActivities = (locale: Locale): Activity[] => ACTIVITIES_DATA[locale] || ACTIVITIES_DATA.fr;
export const getAmenities = (locale: Locale) => AMENITIES_DATA[locale] || AMENITIES_DATA.fr;

// Keep for backward compatibility
export const APARTMENTS = APARTMENTS_DATA.fr;
export const ACTIVITIES = ACTIVITIES_DATA.fr;
export const AMENITIES = AMENITIES_DATA.fr;
export { REVIEWS };

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