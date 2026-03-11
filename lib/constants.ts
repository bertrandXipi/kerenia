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
  mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11603.579849702171!2d-1.4125996802687515!3d43.35830767545562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd513bde8e105d53%3A0xd49a1d40c1fa8fda!2sR%C3%A9sidence%20Ker%20Enia%20Meubl%C3%A9s%20de%20Tourisme!5e0!3m2!1sfr!2sfr!4v1772799419105!5m2!1sfr!2sfr'
};

export const GALLERY_IMAGES = [
  // Studio (5)
  { id: 1, src: '/images/galerie/studio/terrasse-exterieure.webp', category: 'Studio', alt: 'Terrasse extérieure du studio' },
  { id: 2, src: '/images/galerie/studio/vue-ensemble-studio-1.webp', category: 'Studio', alt: 'Vue d\'ensemble du studio' },
  { id: 3, src: '/images/galerie/studio/partie-nuit-rideau.webp', category: 'Studio', alt: 'Partie nuit séparée par un rideau' },
  { id: 4, src: '/images/galerie/studio/cuisine-equipee.webp', category: 'Studio', alt: 'Cuisine équipée du studio' },
  { id: 5, src: '/images/galerie/studio/vue-ensemble-studio-2.webp', category: 'Studio', alt: 'Vue d\'ensemble du studio' },
  // Standard (4)
  { id: 6, src: '/images/galerie/standard/vue-ensemble-balcon.webp', category: 'Standard', alt: 'Vue d\'ensemble avec balcon d\'un appartement standard' },
  { id: 7, src: '/images/galerie/standard/coin-cuisine.webp', category: 'Standard', alt: 'Coin cuisine d\'un appartement standard' },
  { id: 8, src: '/images/galerie/standard/chambre-coucher.webp', category: 'Standard', alt: 'Chambre à coucher d\'un appartement standard' },
  { id: 9, src: '/images/galerie/standard/balcon.webp', category: 'Standard', alt: 'Balcon des appartements' },
  // Confort (15)
  { id: 10, src: '/images/galerie/confort/salon-1.webp', category: 'Confort', alt: 'Salon d\'un appartement confort' },
  { id: 11, src: '/images/galerie/confort/salon-cuisine-equipee.webp', category: 'Confort', alt: 'Salon et cuisine équipée' },
  { id: 12, src: '/images/galerie/confort/salon-2.webp', category: 'Confort', alt: 'Salon d\'un appartement confort' },
  { id: 13, src: '/images/galerie/confort/chambre-lit-double.webp', category: 'Confort', alt: 'Chambre séparée avec lit double' },
  { id: 14, src: '/images/galerie/confort/salon-balcon-1.webp', category: 'Confort', alt: 'Salon avec balcon' },
  { id: 15, src: '/images/galerie/confort/salon-balcon-2.webp', category: 'Confort', alt: 'Salon avec balcon' },
  { id: 16, src: '/images/galerie/confort/vue-generale.webp', category: 'Confort', alt: 'Vue générale d\'un appartement confort' },
  { id: 17, src: '/images/galerie/confort/cuisine-equipee.webp', category: 'Confort', alt: 'Cuisine équipée d\'un appartement confort' },
  { id: 18, src: '/images/galerie/confort/chambre-coucher.webp', category: 'Confort', alt: 'Chambre à coucher avec lit double' },
  { id: 19, src: '/images/galerie/confort/DSC_7232.webp', category: 'Confort', alt: 'Appartement confort' },
  { id: 20, src: '/images/galerie/confort/DSC_7233.webp', category: 'Confort', alt: 'Appartement confort' },
  { id: 21, src: '/images/galerie/confort/DSC_7238.webp', category: 'Confort', alt: 'Appartement confort' },
  { id: 22, src: '/images/galerie/confort/balcon-appartement-1.webp', category: 'Confort', alt: 'Balcon d\'un appartement' },
  { id: 23, src: '/images/galerie/confort/balcon-appartement-2.webp', category: 'Confort', alt: 'Balcon d\'un appartement' },
  { id: 24, src: '/images/galerie/confort/balcon-appartements.webp', category: 'Confort', alt: 'Balcon des appartements' },
  // Parties Communes (19)
  { id: 25, src: '/images/galerie/parties-communes/escalier-residence.webp', category: 'Résidence', alt: 'Escalier de la résidence' },
  { id: 26, src: '/images/galerie/parties-communes/vue-facades.webp', category: 'Résidence', alt: 'Vue des façades' },
  { id: 27, src: '/images/galerie/parties-communes/kerenia-home.webp', category: 'Résidence', alt: 'Résidence Ker Enia' },
  { id: 28, src: '/images/galerie/parties-communes/facade-proche.webp', category: 'Résidence', alt: 'Façade de la résidence' },
  { id: 29, src: '/images/galerie/parties-communes/reception.webp', category: 'Résidence', alt: 'Réception de la résidence' },
  { id: 30, src: '/images/galerie/parties-communes/signaletiques.webp', category: 'Résidence', alt: 'Signalétiques de la résidence' },
  { id: 31, src: '/images/galerie/parties-communes/piscine-1.webp', category: 'Résidence', alt: 'Piscine chauffée de la résidence' },
  { id: 32, src: '/images/galerie/parties-communes/piscine-2.webp', category: 'Résidence', alt: 'Piscine chauffée de la résidence' },
  { id: 33, src: '/images/galerie/parties-communes/piscine-3.webp', category: 'Résidence', alt: 'Piscine chauffée de la résidence' },
  { id: 34, src: '/images/galerie/parties-communes/couloir-1.webp', category: 'Résidence', alt: 'Couloir de la résidence' },
  { id: 35, src: '/images/galerie/parties-communes/vue-maison.webp', category: 'Résidence', alt: 'Vue de la maison' },
  { id: 36, src: '/images/galerie/parties-communes/couloir-2.webp', category: 'Résidence', alt: 'Couloir de la résidence' },
  { id: 37, src: '/images/galerie/parties-communes/terrasse-appartement.webp', category: 'Résidence', alt: 'Terrasse d\'un appartement' },
  { id: 38, src: '/images/galerie/parties-communes/vue-cambo-balcons.webp', category: 'Résidence', alt: 'Vue sur Cambo depuis les balcons' },
  { id: 39, src: '/images/galerie/parties-communes/vue-arriere-maison.webp', category: 'Résidence', alt: 'Vue arrière de la maison' },
  { id: 40, src: '/images/galerie/parties-communes/facade-entree.webp', category: 'Résidence', alt: 'Façade et entrée' },
  { id: 41, src: '/images/galerie/parties-communes/DSC_4565.webp', category: 'Résidence', alt: 'Résidence Ker Enia' },
  { id: 42, src: '/images/galerie/parties-communes/vue-generale-maison.webp', category: 'Résidence', alt: 'Vue générale de la maison' },
  { id: 43, src: '/images/galerie/parties-communes/escalier.webp', category: 'Résidence', alt: 'Escalier' },
];