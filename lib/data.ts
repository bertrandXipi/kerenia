import { Locale } from './i18n';
import { Apartment, Review, Activity } from './types';
import { Wifi, Thermometer, Coffee, Tv, Car, Waves, BellRing, WashingMachine, Bath, BedDouble, Store, Utensils } from 'lucide-react';

// Apartments data by locale
export const APARTMENTS_DATA: Record<Locale, Apartment[]> = {
  fr: [
    {
      id: 'studio',
      title: 'Le Studio',
      size: '29 m²',
      capacity: '2 personnes',
      description: 'Situé en rez-de-chaussée, ce studio cosy offre une séparation intelligente entre l\'espace nuit et la pièce à vivre par un rideau élégant. Idéal pour les couples ou les curistes.',
      features: ['Lit double 140cm', 'Climatisation', 'Wifi gratuit', 'Cuisine équipée', 'Terrasse'],
      imageUrl: 'https://www.kerenia.fr/wp-content/uploads/2021/04/DSC_7223.jpg',
      priceFrom: '65€ / nuit'
    },
    {
      id: 'standard',
      title: 'Appartement Standard',
      size: '28 - 30 m²',
      capacity: '2 personnes',
      description: 'Un espace lumineux avec une chambre séparée pour plus d\'intimité. Décoration soignée et équipements modernes pour un séjour comme à la maison.',
      features: ['Chambre séparée (lit en 140)', 'Climatisation', 'Wifi gratuit', 'Terrasse ou balcon', 'Lave-vaisselle'],
      imageUrl: 'https://www.kerenia.fr/wp-content/uploads/2021/04/DSC_7309.jpg',
      priceFrom: '75€ / nuit'
    },
    {
      id: 'comfort',
      title: 'Appartement Confort',
      size: '35 - 45 m²',
      capacity: '2 à 3 personnes',
      description: 'Nos plus grands appartements. Spacieux, avec un grand lit et un canapé convertible. Parfait pour les longs séjours ou les petites familles.',
      features: ['Grand lit (140 ou 160cm)', 'Canapé convertible (dans certains appartements)', 'Espace salon spacieux', 'Terrasse ou balcon'],
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
      features: ['Double bed 140cm', 'Air conditioning', 'Free wifi', 'Equipped kitchen', 'Terrace'],
      imageUrl: 'https://www.kerenia.fr/wp-content/uploads/2021/04/DSC_7223.jpg',
      priceFrom: '€65 / night'
    },
    {
      id: 'standard',
      title: 'Standard Apartment',
      size: '28 - 30 m²',
      capacity: '2 guests',
      description: 'A bright space with a separate bedroom for more privacy. Careful decoration and modern equipment for a stay like home.',
      features: ['Separate bedroom (140cm bed)', 'Air conditioning', 'Free wifi', 'Terrace or balcony', 'Dishwasher'],
      imageUrl: 'https://www.kerenia.fr/wp-content/uploads/2021/04/DSC_7309.jpg',
      priceFrom: '€75 / night'
    },
    {
      id: 'comfort',
      title: 'Comfort Apartment',
      size: '35 - 45 m²',
      capacity: '2 to 3 guests',
      description: 'Our largest apartments. Spacious, with a large bed and a sofa bed. Perfect for long stays or small families.',
      features: ['Large bed (140 or 160cm)', 'Sofa bed (in some apts)', 'Spacious living area', 'Terrace or balcony'],
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
      features: ['Cama doble 140cm', 'Aire acondicionado', 'Wifi gratis', 'Cocina equipada', 'Terraza'],
      imageUrl: 'https://www.kerenia.fr/wp-content/uploads/2021/04/DSC_7223.jpg',
      priceFrom: '65€ / noche'
    },
    {
      id: 'standard',
      title: 'Apartamento Estándar',
      size: '28 - 30 m²',
      capacity: '2 huéspedes',
      description: 'Un espacio luminoso con un dormitorio separado para más privacidad. Decoración cuidada y equipamiento moderno para una estancia como en casa.',
      features: ['Dormitorio separado (cama en 140)', 'Aire acondicionado', 'Wifi gratis', 'Terraza o balcón', 'Lavavajillas'],
      imageUrl: 'https://www.kerenia.fr/wp-content/uploads/2021/04/DSC_7309.jpg',
      priceFrom: '75€ / noche'
    },
    {
      id: 'comfort',
      title: 'Apartamento Confort',
      size: '35 - 45 m²',
      capacity: '2 a 3 huéspedes',
      description: 'Nuestros apartamentos más grandes. Espaciosos, con una cama grande y un sofá cama. Perfecto para estancias largas o familias pequeñas.',
      features: ['Cama grande (140 o 160cm)', 'Sofá cama (en algunos aptos)', 'Sala de estar espaciosa', 'Terraza o balcón'],
      imageUrl: '/images/confort-kerenia.jpg',
      priceFrom: '90€ / noche'
    }
  ],
  eu: [
    {
      id: 'studio',
      title: 'Estudioa',
      size: '29 m²',
      capacity: '2 pertsona',
      description: 'Beheko solairuan kokatua, estudio eroso honek lo egiteko eremua eta egongela banatzen ditu gortina dotore baten bidez. Bikoteentzat edo bainuetxeko bezeroentzat aproposa.',
      features: ['Ohe bikoitza 140cm', 'Aire girotua', 'Dohainikako Wifi-a', 'Sukalde hornitua', 'Terraza'],
      imageUrl: 'https://www.kerenia.fr/wp-content/uploads/2021/04/DSC_7223.jpg',
      priceFrom: '65€ / gaua'
    },
    {
      id: 'standard',
      title: 'Apartamentu Estandarra',
      size: '28 - 30 m²',
      capacity: '2 pertsona',
      description: 'Gune argitsua logela bereizi batekin pribatutasun handiagoa izateko. Dekorazio zaindua eta ekipamendu modernoa etxean bezala egoteko.',
      features: ['Logela bereizia (140cm-ko ohea)', 'Aire girotua', 'Dohainikako Wifi-a', 'Terraza edo balkoia', 'Ontzi-garbigailua'],
      imageUrl: 'https://www.kerenia.fr/wp-content/uploads/2021/04/DSC_7309.jpg',
      priceFrom: '75€ / gaua'
    },
    {
      id: 'comfort',
      title: 'Apartamentu Erosoa',
      size: '35 - 45 m²',
      capacity: '2 - 3 pertsona',
      description: 'Gure apartamenturik handienak. Zabala, ohe handi batekin eta sofa ohe batekin. Ezin hobea egonaldi luzeetarako edo familia txikientzat.',
      features: ['Ohe handia (140 edo 160cm)', 'Sofa ohea (apartamentu batzuetan)', 'Egongela zabala', 'Terraza edo balkoia'],
      imageUrl: 'https://www.kerenia.fr/wp-content/uploads/2021/04/DSC_7357.jpg',
      priceFrom: '90€ / gaua'
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
      imageUrl: '/images/la-rhune.jpg',
      link: 'https://www.rhune.com/es/'
    }
  ],
  eu: [
    {
      id: 'arnaga',
      title: 'Arnaga Etxea',
      description: 'Edmond Rostanden ohiz kanpoko egoitza. Frantziako Museoa, parke miresgarri eta frantziar lorategi batez inguratua.',
      imageUrl: 'https://www.kerenia.fr/wp-content/uploads/2017/05/Villa_Arnaga.jpg',
      link: 'http://www.arnaga.com/'
    },
    {
      id: 'pas-de-roland',
      title: 'Errolanen Urratsa',
      description: 'Ibilaldi polit eta erraza Errobi ibaian zehar, Itsasun. Ibaiak zulatutako haitzartea, euskal kondairen lekua.',
      imageUrl: 'https://www.kerenia.fr/wp-content/uploads/2020/02/5191788684_a9edc8110e_c.jpg',
      link: '#'
    },
    {
      id: 'rhune',
      title: 'Larrun',
      description: 'Euskal Herriko gailur mitikoa. Oinez ala kremailera-tren txikian irits daiteke 360°-ko ikuspegiaz gozatzeko.',
      imageUrl: 'https://www.kerenia.fr/wp-content/uploads/2020/02/2948014906_ca81a12c2d_z.jpg',
      link: 'https://www.rhune.com/eu/'
    }
  ]
};

// Amenities data by locale
export const AMENITIES_DATA: Record<Locale, Array<{ icon: any; label: string; description?: string }>> = {
  fr: [
    { icon: Wifi, label: 'Wifi Gratuit' },
    { icon: Thermometer, label: 'Climatisation' },
    { icon: Car, label: 'Parking Privé' },
    { icon: Waves, label: 'Piscine Chauffée' },
    { icon: BellRing, label: 'Réception' },
    { icon: WashingMachine, label: 'Buanderie Commune', description: 'Lave-linge et sèche-linge' },
    { icon: Bath, label: 'Linge Fourni', description: 'Linge de toilette et draps' },
    { icon: BedDouble, label: 'Lits Faits', description: 'À votre arrivée' },
    { icon: Coffee, label: 'Petit-déjeuner' },
    { icon: Store, label: 'Point Boulangerie' },
    { icon: Utensils, label: 'Cuisine Équipée', description: 'Plaques à induction, four, réfrigérateur, micro-ondes, mini lave-vaisselle, Nespresso, grille-pain et bouilloire' }
  ],
  en: [
    { icon: Wifi, label: 'Free Wifi' },
    { icon: Thermometer, label: 'Air Conditioning' },
    { icon: Car, label: 'Private Parking' },
    { icon: Waves, label: 'Heated Pool' },
    { icon: BellRing, label: 'Reception' },
    { icon: WashingMachine, label: 'Shared Laundry', description: 'Washer and dryer' },
    { icon: Bath, label: 'Linens Provided', description: 'Towels and bed sheets' },
    { icon: BedDouble, label: 'Beds Made', description: 'Upon arrival' },
    { icon: Coffee, label: 'Breakfast' },
    { icon: Store, label: 'Bakery Point' },
    { icon: Utensils, label: 'Equipped Kitchen', description: 'Induction hob, oven, fridge, microwave, mini dishwasher, Nespresso, toaster and kettle' }
  ],
  es: [
    { icon: Wifi, label: 'Wifi Gratis' },
    { icon: Thermometer, label: 'Aire Acondicionado' },
    { icon: Car, label: 'Parking Privado' },
    { icon: Waves, label: 'Piscina Climatizada' },
    { icon: BellRing, label: 'Recepción' },
    { icon: WashingMachine, label: 'Lavandería Común', description: 'Lavadora y secadora' },
    { icon: Bath, label: 'Ropa Blanca', description: 'Toallas y sábanas proporcionadas' },
    { icon: BedDouble, label: 'Camas Hechas', description: 'A su llegada' },
    { icon: Coffee, label: 'Desayuno' },
    { icon: Store, label: 'Punto Panadería' },
    { icon: Utensils, label: 'Cocina Equipada', description: 'Placa de inducción, horno, nevera, microondas, mini lavavajillas, Nespresso, tostadora y hervidor' }
  ],
  eu: [
    { icon: Wifi, label: 'Dohainikako Wifi-a' },
    { icon: Thermometer, label: 'Aire Girotua' },
    { icon: Car, label: 'Aparkaleku Pribatua' },
    { icon: Waves, label: 'Igerileku Berotua' },
    { icon: BellRing, label: 'Harrera' },
    { icon: WashingMachine, label: 'Garbitegi Komuna', description: 'Garbigailua eta lehorgailua' },
    { icon: Bath, label: 'Etxeko Arropa', description: 'Eskuoihalak eta izarak barne' },
    { icon: BedDouble, label: 'Oheak Eginda', description: 'Iristean' },
    { icon: Coffee, label: 'Gosaria' },
    { icon: Store, label: 'Okindegia' },
    { icon: Utensils, label: 'Sukalde Hornitua', description: 'Indukzio plaka, labea, hozkailua, mikrouhin labea, ontzi-garbigailu txikia, Nespresso, txigorgailua eta irakurgailua' }
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
  },
  eu: {
    'Intérieur': 'Barrualdea',
    'Extérieur': 'Kanpoaldea',
    'Alentours': 'Inguruak'
  }
};

// Reviews stay in French (real Google reviews)
export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Jean-Luc REMY',
    rating: 5,
    text: 'Appartement propre, bien équipé et très calme. Accueil irréprochable.',
    source: 'Google',
    date: 'sept. 2025' // Note: Kept date exactly as provided in user's prompt
  },
  {
    id: '2',
    author: 'wonderbasque',
    rating: 5,
    text: 'Qualité de l\'appartement et réactivité du personnel excellentes.',
    source: 'Tripadvisor', // Note: Using source from prompt
    date: 'il y a 4 mois'
  },
  {
    id: '3',
    author: 'LUCIE',
    rating: 5,
    text: 'Résidence très confortable. Le calme a permis de bien récupérer.',
    source: 'Google',
    date: 'août 2025'
  },
  {
    id: '4',
    author: 'Véronique Ls',
    rating: 5,
    text: 'Accueil exceptionval par une personne souriante et délicate.',
    source: 'Google',
    date: 'juil. 2025'
  },
  {
    id: '5',
    author: 'Titouan FEVRE',
    rating: 5,
    text: 'Une expérience parfaite du début à la fin !',
    source: 'Google',
    date: 'sept. 2024'
  },
  {
    id: '6',
    author: 'Marta',
    rating: 5,
    text: 'Lieu parfait pour se reposer. Gentillesse du personnel excellente.',
    source: 'Google',
    date: 'janv. 2025'
  },
  {
    id: '7',
    author: 'Rémy Legeay',
    rating: 5,
    text: 'Logements spacieux, très propres et parfaitement aménagés.',
    source: 'Google',
    date: 'août 2025'
  },
  {
    id: '8',
    author: 'Isa',
    rating: 5,
    text: 'Très bien située proche du centre. La responsable est adorable.',
    source: 'Google',
    date: 'sept. 2025'
  }
];

// Livret d'Accueil Data (Currently in French for all locales, structural translation only at UI level if needed)
export const LIVRET_DATA: Record<Locale, import('./types').Livret> = {
  fr: {
    "titre": "Livret d'accueil & d'expériences",
    "residence": "KER ENIA",
    "localisation": "Cambo Les Bains",
    "mot_de_bienvenue": {
      "texte": "Du fonctionnement de la Résidence, aux services que nous vous proposons en passant par nos suggestions d'escapades et nos coups de coeur sur Cambo Les Bains et ses environs, vous trouverez dans ce livret toutes les informations utiles pour vous guider lors de votre séjour.",
      "salutation_basque": "Ongi Etorri",
      "signataire": "Stéphanie Bergeret"
    },
    "valeurs": {
      "engagement_environnemental": "L'établissement a décidé d'agir pour les générations futures en limitant son impact sur l'environnement grâce à un fonctionnement et une gestion durable.",
      "consignes_eco": [
        "Éteindre les lumières et la veille du téléviseur en quittant l'appartement",
        "Fermer les fenêtres lors de l'utilisation de la climatisation ou du chauffage",
        "Consommer l'eau avec modération",
        "Ne pas jeter dans les toilettes : produits toxiques, médicaments, huiles, coton-tiges, protections hygiéniques",
        "Respecter la nature lors des sorties",
        "Participer au tri sélectif (documentation disponible à l'entrée, contenant devant la résidence)"
      ],
      "biodiversite": "Vive la biodiversité au Pays Basque !"
    },
    "la_residence": {
      "description": {
        "nombre_appartements": 16,
        "superficie": "28m² à 40m²",
        "terrasses": true,
        "renovation": "Entièrement rénovés",
        "decoration": "Soignée dans une atmosphère chaleureuse",
        "climatises": true,
        "insonorises": true
      },
      "equipements_appartements": [
        "Accès Wi-Fi",
        "Literie de qualité",
        "Cuisine équipée",
        "Lave-vaisselle",
        "Four",
        "Micro-ondes",
        "TV écran plat",
        "Nécessaire de repassage",
        "Interrupteur pour applique dans la chambre"
      ],
      "wifi": {
        "reseau": "KER ENIA",
        "code": "kerenia2022",
        "disponible": "à la réception"
      },
      "reception": {
        "horaires": "Du lundi au dimanche, de 8h30 à 12h"
      },
      "check_in_out": {
        "arrivee": "À partir de 15h",
        "depart": "À 10h"
      },
      "parking": {
        "type": "Privé et gratuit",
        "reservation": "Sur réservation"
      },
      "regles": [
        "Ne pas laisser ses objets de valeur dans l'appartement",
        "Les animaux ne sont pas acceptés",
        "Les appartements sont non-fumeur",
        "Consignes incendie affichées derrière la porte de l'appartement"
      ],
      "accessibilite": {
        "appartements_pmr": 2,
        "description": "Deux appartements aménagés pour les personnes à mobilité réduite"
      },
      "services_disponibles_reception": [
        "Dépôt de bagages possible",
        "Oreillers disponibles",
        "Adaptateurs électriques",
        "Lit pliant, chaise haute et baignoire pour bébé",
        "Suivi de courrier",
        "Réservation de restaurants"
      ],
      "piscine": {
        "surveillance": "Non surveillée",
        "acces": "Réservée aux clients"
      },
      "moyens_de_paiement": [
        "Cartes Visa",
        "Eurocard/Mastercard",
        "Chèques",
        "Chèques vacances"
      ],
      "contacts_utiles": {
        "office_du_tourisme_cambo": "05 59 29 70 25",
        "taxis": [
          "05 59 29 71 59",
          "06 71 40 55 58"
        ],
        "police_municipale": "05 59 93 74 35",
        "sos_medecin_bayonne": "05 59 03 30 00",
        "hopital_bayonne_urgences": [
          "15",
          "18"
        ]
      },
      "climatisation_chauffage": {
        "type": "Individuel (froid en été, chaud en hiver)",
        "mode_emploi": {
          "ON_OFF": "Allumer/Éteindre",
          "TEMP": "Ajuster la température avec les flèches",
          "FAN": "Puissance de la ventilation"
        }
      },
      "chaines_tv": {
        "1": "TF1",
        "2": "FRANCE 2",
        "3": "FRANCE 3",
        "5": "FRANCE 5",
        "6": "M6",
        "7": "ARTE",
        "8": "C8",
        "9": "W9",
        "10": "TMC",
        "11": "TFX",
        "12": "NRJ12",
        "13": "LCP",
        "14": "FRANCE 4",
        "15": "BFM TV",
        "16": "CNEWS",
        "17": "CSTAR",
        "18": "GULLI",
        "19": "France Ô",
        "20": "TF1 SÉRIES FILMS",
        "21": "L'ÉQUIPE 21",
        "22": "6TER",
        "23": "RMC STORY",
        "24": "RMC DÉCOUVERTE",
        "25": "CHÉRIE 25",
        "26": "LCI",
        "27": "FRANCE INFO",
        "28": "CANAL+ CINÉMA",
        "30": "TVPI",
        "31": "CANAL+ SPORT360",
        "32": "DISNEY CHANNEL",
        "33": "CANAL+",
        "34": "CANAL+ CINÉMA (VO)",
        "36": "CANAL+ SPORT360 (VO)",
        "37": "CHAÎNE À LA UNE",
        "53": "DISNEY CHANNEL (VO)",
        "57": "ETB 1",
        "58": "ETB 2",
        "59": "ETB 3",
        "60": "ETB 4"
      }
    },
    "les_services": {
      "restauration": {
        "petit_dejeuner": {
          "description": "Service dans votre appartement",
          "prix": "10€"
        },
        "point_boulangerie": {
          "disponible_a_partir_de": "8h30",
          "lieu": "À la réception",
          "commande": "À commander la veille",
          "service": "Payant"
        },
        "reservation_restaurant": "Possible à la réception"
      },
      "buanderie_libre_service": {
        "lave_linge": {
          "disponible": true,
          "prix": "5€ (jeton)"
        },
        "seche_linge": {
          "disponible": true,
          "prix": "3€ (jeton)"
        },
        "dosette_lessive": {
          "disponible": true,
          "prix": "1€"
        },
        "localisation": "À côté de la réception"
      },
      "nettoyage_a_la_demande": {
        "renouvellement_draps": {
          "prix": "10€ le pack",
          "pour": "1 ou 2 personnes"
        },
        "renouvellement_linge_toilette": {
          "prix": "10€ le pack",
          "pour": "1 personne"
        },
        "menage_appartement": "40€",
        "menage_fin_sejour": "50€"
      }
    },
    "les_escapades": {
      "a_cambo_les_bains": [
        {
          "id": 1,
          "nom": "Villa Arnaga",
          "description": "Petit 'Versailles du Pays Basque', visite incontournable retraçant la vie d'Edmond Rostand."
        },
        {
          "id": 2,
          "nom": "Institut de beauté / Spa des Thermes",
          "description": "Parenthèse détente, idéal pour se ressourcer.",
          "avantage_ker_enia": "-15% pour toute réservation d'un Spa pour les clients de Ker Enia",
          "tel": "05 59 29 39 02"
        },
        {
          "id": 3,
          "nom": "Colline de la Bergerie",
          "description": "Belvédère offrant une vue imprenable sur Cambo les Bains. Possibilité de visiter la chapelle peinte par l'artiste basque Albert Proux."
        }
      ],
      "plus_loin": [
        {
          "id": 4,
          "nom": "Chocolaterie-Musée Puyodebat",
          "description": "Histoire de l'artisanat du chocolat au Pays Basque. Machines à broyer, pierres à chocolat, dégustation de grands crus.",
          "adresse": "Av. de Navarre à Cambo les Bains",
          "tel": "05 59 59 48 42"
        },
        {
          "id": 5,
          "nom": "Ferme Harizkazuia",
          "description": "Apiculteur passionné produisant un miel bio de qualité. Dégustation des produits de la ferme, également productrice de piment d'Espelette AOP.",
          "adresse": "Chemin Harizkazuia",
          "tel": "06 63 79 43 54"
        },
        {
          "id": 6,
          "nom": "Grottes d'Isturitz et d'Oxocelhaya",
          "description": "Classées aux Monuments Historiques. Grottes ornées de la chaîne Pyrénéo-cantabrique et joyau minéral.",
          "adresse": "64640 Saint Martin d'Arberoue",
          "tel": "05 59 29 64 72"
        },
        {
          "id": 7,
          "nom": "Vallée de Saint-Étienne de Baïgorry et des Aldudes",
          "description": "Cinq communes : Ossès, Saint-Étienne-de-Baïgorry, les Aldudes, Banca et Urepel. Idéale pour randonnées et découverte de la gastronomie locale."
        },
        {
          "id": 8,
          "nom": "Pont suspendu d'Holzarte",
          "description": "Construit en 1920 par des ouvriers italiens employés de l'aciérie de Tardets, pour passer d'une rive à l'autre.",
          "adresse": "Larrau 64560",
          "tel": "05 59 28 62 80"
        }
      ],
      "autres_produits_du_terroir": [
        "L'atelier du Piment à Espelette",
        "Le vignoble d'Irouleguy",
        "L'atelier de Makila à Larressore",
        "La Poterie Goicoechea à Ossès"
      ],
      "marches": [
        {
          "lieu": "Cambo Les Bains",
          "jour": "Vendredi matin",
          "adresse": "Rue Chiquito"
        },
        {
          "lieu": "Espelette",
          "jour": "Mercredi matin",
          "adresse": "Place du marché"
        },
        {
          "lieu": "Saint Jean Pied de Port",
          "jour": "Lundi toute la journée"
        },
        {
          "lieu": "Bayonne",
          "jour": "Non précisé"
        },
        {
          "lieu": "Donostia",
          "jour": "Non précisé"
        }
      ],
      "villes_voisines": [
        "Espelette",
        "Saint Jean Pied de Port",
        "Bayonne",
        "Saint Jean de Luz",
        "Hondarribia",
        "Donostia"
      ],
      "restaurants": [
        {
          "nom": "Mendi Berdea",
          "type": "Cuisine traditionnelle",
          "tel": "05 59 29 86 30"
        },
        {
          "nom": "Le Central",
          "type": "Brasserie",
          "tel": "05 59 08 66 63"
        },
        {
          "nom": "Ama",
          "type": "Cuisine gastronomique locale",
          "tel": "05 59 29 22 29"
        },
        {
          "nom": "Le Pavillon Bleu",
          "type": "Cuisine bistronomique",
          "tel": "05 59 29 38 38"
        },
        {
          "nom": "Le Bellevue",
          "type": "Cuisine régionale",
          "tel": "05 59 93 75 75"
        },
        {
          "nom": "Auberge chez tante Ursule",
          "type": "Cuisine traditionnelle régionale",
          "tel": "05 59 29 78 23"
        },
        {
          "nom": "Salon Cyrano",
          "type": "Salon de thé, salades, tartes salées",
          "tel": "05 59 52 32 07"
        }
      ]
    }
  },
  en: {
    "titre": "Welcome & Experiences Booklet",
    "residence": "KER ENIA",
    "localisation": "Cambo Les Bains",
    "mot_de_bienvenue": {
      "texte": "From the Residence's operation to the services we offer, including our getaway suggestions and favorites in Cambo Les Bains and its surroundings, you will find in this booklet all the useful information to guide you during your stay.",
      "salutation_basque": "Ongi Etorri",
      "signataire": "Stéphanie Bergeret"
    },
    "valeurs": {
      "engagement_environnemental": "The establishment has decided to act for future generations by limiting its environmental impact through sustainable operation and management.",
      "consignes_eco": [
        "Turn off lights and TV standby when leaving the apartment",
        "Close windows when using air conditioning or heating",
        "Consume water in moderation",
        "Do not throw in the toilet: toxic products, medicines, oils, cotton swabs, sanitary products",
        "Respect nature during outings",
        "Participate in recycling (documentation available at the entrance, bin in front of the residence)"
      ],
      "biodiversite": "Long live biodiversity in the Basque Country!"
    },
    "la_residence": {
      "description": {
        "nombre_appartements": 16,
        "superficie": "28m² to 40m²",
        "terrasses": true,
        "renovation": "Fully renovated",
        "decoration": "Careful decoration in a warm atmosphere",
        "climatises": true,
        "insonorises": true
      },
      "equipements_appartements": [
        "Wi-Fi access",
        "Quality bedding",
        "Equipped kitchen",
        "Dishwasher",
        "Oven",
        "Microwave",
        "Flat screen TV",
        "Ironing facilities",
        "Wall switch in the bedroom"
      ],
      "wifi": {
        "reseau": "KER ENIA",
        "code": "kerenia2022",
        "disponible": "at the reception"
      },
      "reception": {
        "horaires": "Monday to Sunday, from 8:30 AM to 12 PM"
      },
      "check_in_out": {
        "arrivee": "From 3:00 PM",
        "depart": "At 10:00 AM"
      },
      "parking": {
        "type": "Private and free",
        "reservation": "Upon reservation"
      },
      "regles": [
        "Do not leave valuables in the apartment",
        "Pets are not allowed",
        "The apartments are non-smoking",
        "Fire safety instructions displayed behind the apartment door"
      ],
      "accessibilite": {
        "appartements_pmr": 2,
        "description": "Two apartments equipped for people with reduced mobility"
      },
      "services_disponibles_reception": [
        "Luggage storage available",
        "Pillows available",
        "Electrical adapters",
        "Folding bed, high chair, and baby bath",
        "Mail forwarding",
        "Restaurant reservations"
      ],
      "piscine": {
        "surveillance": "Unsupervised",
        "acces": "Reserved for guests"
      },
      "moyens_de_paiement": [
        "Visa Cards",
        "Eurocard/Mastercard",
        "Checks",
        "Holiday Checks"
      ],
      "contacts_utiles": {
        "office_du_tourisme_cambo": "05 59 29 70 25",
        "taxis": [
          "05 59 29 71 59",
          "06 71 40 55 58"
        ],
        "police_municipale": "05 59 93 74 35",
        "sos_medecin_bayonne": "05 59 03 30 00",
        "hopital_bayonne_urgences": [
          "15",
          "18"
        ]
      },
      "climatisation_chauffage": {
        "type": "Individual (cooling in summer, heating in winter)",
        "mode_emploi": {
          "ON_OFF": "Turn On/Off",
          "TEMP": "Adjust temperature with arrows",
          "FAN": "Fan speed"
        }
      },
      "chaines_tv": {
        "1": "TF1",
        "2": "FRANCE 2",
        "3": "FRANCE 3",
        "5": "FRANCE 5",
        "6": "M6",
        "7": "ARTE",
        "8": "C8",
        "9": "W9",
        "10": "TMC",
        "11": "TFX",
        "12": "NRJ12",
        "13": "LCP",
        "14": "FRANCE 4",
        "15": "BFM TV",
        "16": "CNEWS",
        "17": "CSTAR",
        "18": "GULLI",
        "19": "France Ô",
        "20": "TF1 SÉRIES FILMS",
        "21": "L'ÉQUIPE 21",
        "22": "6TER",
        "23": "RMC STORY",
        "24": "RMC DÉCOUVERTE",
        "25": "CHÉRIE 25",
        "26": "LCI",
        "27": "FRANCE INFO",
        "28": "CANAL+ CINÉMA",
        "30": "TVPI",
        "31": "CANAL+ SPORT360",
        "32": "DISNEY CHANNEL",
        "33": "CANAL+",
        "34": "CANAL+ CINÉMA (VO)",
        "36": "CANAL+ SPORT360 (VO)",
        "37": "CHAÎNE À LA UNE",
        "53": "DISNEY CHANNEL (VO)",
        "57": "ETB 1",
        "58": "ETB 2",
        "59": "ETB 3",
        "60": "ETB 4"
      }
    },
    "les_services": {
      "restauration": {
        "petit_dejeuner": {
          "description": "Service in your apartment",
          "prix": "10€"
        },
        "point_boulangerie": {
          "disponible_a_partir_de": "8:30 AM",
          "lieu": "At the reception",
          "commande": "To be ordered the day before",
          "service": "Paid service"
        },
        "reservation_restaurant": "Possible at the reception"
      },
      "buanderie_libre_service": {
        "lave_linge": {
          "disponible": true,
          "prix": "5€ (token)"
        },
        "seche_linge": {
          "disponible": true,
          "prix": "3€ (token)"
        },
        "dosette_lessive": {
          "disponible": true,
          "prix": "1€"
        },
        "localisation": "Next to the reception"
      },
      "nettoyage_a_la_demande": {
        "renouvellement_draps": {
          "prix": "10€ per pack",
          "pour": "1 or 2 people"
        },
        "renouvellement_linge_toilette": {
          "prix": "10€ per pack",
          "pour": "1 person"
        },
        "menage_appartement": "40€",
        "menage_fin_sejour": "50€"
      }
    },
    "les_escapades": {
      "a_cambo_les_bains": [
        {
          "id": 1,
          "nom": "Villa Arnaga",
          "description": "Little 'Versailles of the Basque Country', an unmissable visit tracing the life of Edmond Rostand."
        },
        {
          "id": 2,
          "nom": "Beauty Institute / Thermal Spa",
          "description": "A relaxing break, ideal for recharging your batteries.",
          "avantage_ker_enia": "-15% for any Spa reservation for Ker Enia guests",
          "tel": "05 59 29 39 02"
        },
        {
          "id": 3,
          "nom": "Bergerie Hill",
          "description": "Belvedere offering breathtaking views of Cambo les Bains. Possibility to visit the chapel painted by Basque artist Albert Proux."
        }
      ],
      "plus_loin": [
        {
          "id": 4,
          "nom": "Puyodebat Chocolate Museum",
          "description": "History of chocolate craftsmanship in the Basque Country. Grinding machines, chocolate stones, tasting of fine varieties.",
          "adresse": "Av. de Navarre in Cambo les Bains",
          "tel": "05 59 59 48 42"
        },
        {
          "id": 5,
          "nom": "Harizkazuia Farm",
          "description": "Passionate beekeeper producing quality organic honey. Tasting of farm products, also a producer of Espelette PDO pepper.",
          "adresse": "Chemin Harizkazuia",
          "tel": "06 63 79 43 54"
        },
        {
          "id": 6,
          "nom": "Isturitz and Oxocelhaya Caves",
          "description": "Classified as Historical Monuments. Ornate caves of the Pyrenean-Cantabrian chain and a mineral jewel.",
          "adresse": "64640 Saint Martin d'Arberoue",
          "tel": "05 59 29 64 72"
        },
        {
          "id": 7,
          "nom": "Valley of Saint-Étienne de Baïgorry and Aldudes",
          "description": "Five towns: Ossès, Saint-Étienne-de-Baïgorry, Aldudes, Banca and Urepel. Ideal for hiking and discovering local gastronomy."
        },
        {
          "id": 8,
          "nom": "Holzarte Suspension Bridge",
          "description": "Built in 1920 by Italian workers employed by the Tardets steelworks, to cross from one bank to the other.",
          "adresse": "Larrau 64560",
          "tel": "05 59 28 62 80"
        }
      ],
      "autres_produits_du_terroir": [
        "The Pepper Workshop in Espelette",
        "The Irouleguy Vineyard",
        "The Makila Workshop in Larressore",
        "The Goicoechea Pottery in Ossès"
      ],
      "marches": [
        {
          "lieu": "Cambo Les Bains",
          "jour": "Friday morning",
          "adresse": "Rue Chiquito"
        },
        {
          "lieu": "Espelette",
          "jour": "Wednesday morning",
          "adresse": "Market Square"
        },
        {
          "lieu": "Saint Jean Pied de Port",
          "jour": "Monday all day"
        },
        {
          "lieu": "Bayonne",
          "jour": "Not specified"
        },
        {
          "lieu": "Donostia",
          "jour": "Not specified"
        }
      ],
      "villes_voisines": [
        "Espelette",
        "Saint Jean Pied de Port",
        "Bayonne",
        "Saint Jean de Luz",
        "Hondarribia",
        "Donostia"
      ],
      "restaurants": [
        {
          "nom": "Mendi Berdea",
          "type": "Traditional cuisine",
          "tel": "05 59 29 86 30"
        },
        {
          "nom": "Le Central",
          "type": "Brasserie",
          "tel": "05 59 08 66 63"
        },
        {
          "nom": "Ama",
          "type": "Local gourmet cuisine",
          "tel": "05 59 29 22 29"
        },
        {
          "nom": "Le Pavillon Bleu",
          "type": "Bistronomic cuisine",
          "tel": "05 59 29 38 38"
        },
        {
          "nom": "Le Bellevue",
          "type": "Regional cuisine",
          "tel": "05 59 93 75 75"
        },
        {
          "nom": "Auberge chez tante Ursule",
          "type": "Regional traditional cuisine",
          "tel": "05 59 29 78 23"
        },
        {
          "nom": "Salon Cyrano",
          "type": "Tea room, salads, savory tarts",
          "tel": "05 59 52 32 07"
        }
      ]
    }
  },
  es: {
    "titre": "Folleto de Bienvenida y Experiencias",
    "residence": "KER ENIA",
    "localisation": "Cambo Les Bains",
    "mot_de_bienvenue": {
      "texte": "Desde el funcionamiento de la Residencia, a los servicios que ofrecemos pasando por nuestras sugerencias de escapadas y nuestros lugares favoritos en Cambo Les Bains y sus alrededores, encontrará en este folleto toda la información útil para guiarle durante su estancia.",
      "salutation_basque": "Ongi Etorri",
      "signataire": "Stéphanie Bergeret"
    },
    "valeurs": {
      "engagement_environnemental": "El establecimiento ha decidido actuar para las futuras generaciones limitando su impacto en el medio ambiente a través de un funcionamiento y gestión sostenibles.",
      "consignes_eco": [
        "Apague las luces y el televisor en reposo al salir del apartamento",
        "Cierre las ventanas al usar el aire acondicionado o calefacción",
        "Consuma agua con moderación",
        "No tire al inodoro: productos tóxicos, medicamentos, aceites, bastoncillos, productos higiénicos",
        "Respete la naturaleza durante sus salidas",
        "Participe en el reciclaje (documentación disponible en la entrada, contenedor frente a la residencia)"
      ],
      "biodiversite": "¡Viva la biodiversidad en el País Vasco!"
    },
    "la_residence": {
      "description": {
        "nombre_appartements": 16,
        "superficie": "28m² a 40m²",
        "terrasses": true,
        "renovation": "Totalmente renovados",
        "decoration": "Decoración cuidada en un ambiente cálido",
        "climatises": true,
        "insonorises": true
      },
      "equipements_appartements": [
        "Acceso Wi-Fi",
        "Ropa de cama de calidad",
        "Cocina equipada",
        "Lavavajillas",
        "Horno",
        "Microondas",
        "TV de pantalla plana",
        "Kit de planchado",
        "Interruptor de pared en el dormitorio"
      ],
      "wifi": {
        "reseau": "KER ENIA",
        "code": "kerenia2022",
        "disponible": "en recepción"
      },
      "reception": {
        "horaires": "De lunes a domingo, de 8:30 a 12:00"
      },
      "check_in_out": {
        "arrivee": "A partir de las 15:00",
        "depart": "A las 10:00"
      },
      "parking": {
        "type": "Privado y gratuito",
        "reservation": "Con reserva"
      },
      "regles": [
        "No dejar objetos de valor en el apartamento",
        "No se admiten animales",
        "Los apartamentos son para no fumadores",
        "Instrucciones de seguridad contra incendios detrás de la puerta"
      ],
      "accessibilite": {
        "appartements_pmr": 2,
        "description": "Dos apartamentos equipados para personas con movilidad reducida"
      },
      "services_disponibles_reception": [
        "Servicio de consigna disponible",
        "Almohadas disponibles",
        "Adaptadores eléctricos",
        "Cama plegable, trona y bañera para bebés",
        "Reenvío de correo",
        "Reserva de restaurantes"
      ],
      "piscine": {
        "surveillance": "No vigilada",
        "acces": "Reservada a los clientes"
      },
      "moyens_de_paiement": [
        "Tarjetas Visa",
        "Eurocard/Mastercard",
        "Cheques",
        "Cheques de vacaciones"
      ],
      "contacts_utiles": {
        "office_du_tourisme_cambo": "05 59 29 70 25",
        "taxis": [
          "05 59 29 71 59",
          "06 71 40 55 58"
        ],
        "police_municipale": "05 59 93 74 35",
        "sos_medecin_bayonne": "05 59 03 30 00",
        "hopital_bayonne_urgences": [
          "15",
          "18"
        ]
      },
      "climatisation_chauffage": {
        "type": "Individual (frío en verano, calor en invierno)",
        "mode_emploi": {
          "ON_OFF": "Encender/Apagar",
          "TEMP": "Ajustar la temperatura con las flechas",
          "FAN": "Velocidad de ventilación"
        }
      },
      "chaines_tv": {
        "1": "TF1",
        "2": "FRANCE 2",
        "3": "FRANCE 3",
        "5": "FRANCE 5",
        "6": "M6",
        "7": "ARTE",
        "8": "C8",
        "9": "W9",
        "10": "TMC",
        "11": "TFX",
        "12": "NRJ12",
        "13": "LCP",
        "14": "FRANCE 4",
        "15": "BFM TV",
        "16": "CNEWS",
        "17": "CSTAR",
        "18": "GULLI",
        "19": "France Ô",
        "20": "TF1 SÉRIES FILMS",
        "21": "L'ÉQUIPE 21",
        "22": "6TER",
        "23": "RMC STORY",
        "24": "RMC DÉCOUVERTE",
        "25": "CHÉRIE 25",
        "26": "LCI",
        "27": "FRANCE INFO",
        "28": "CANAL+ CINÉMA",
        "30": "TVPI",
        "31": "CANAL+ SPORT360",
        "32": "DISNEY CHANNEL",
        "33": "CANAL+",
        "34": "CANAL+ CINÉMA (VO)",
        "36": "CANAL+ SPORT360 (VO)",
        "37": "CHAÎNE À LA UNE",
        "53": "DISNEY CHANNEL (VO)",
        "57": "ETB 1",
        "58": "ETB 2",
        "59": "ETB 3",
        "60": "ETB 4"
      }
    },
    "les_services": {
      "restauration": {
        "petit_dejeuner": {
          "description": "Servicio en su apartamento",
          "prix": "10€"
        },
        "point_boulangerie": {
          "disponible_a_partir_de": "8:30",
          "lieu": "En la recepción",
          "commande": "Para pedir el día anterior",
          "service": "Servicio de pago"
        },
        "reservation_restaurant": "Posible en la recepción"
      },
      "buanderie_libre_service": {
        "lave_linge": {
          "disponible": true,
          "prix": "5€ (ficha)"
        },
        "seche_linge": {
          "disponible": true,
          "prix": "3€ (ficha)"
        },
        "dosette_lessive": {
          "disponible": true,
          "prix": "1€"
        },
        "localisation": "Junto a la recepción"
      },
      "nettoyage_a_la_demande": {
        "renouvellement_draps": {
          "prix": "10€ por pack",
          "pour": "1 o 2 personas"
        },
        "renouvellement_linge_toilette": {
          "prix": "10€ por pack",
          "pour": "1 persona"
        },
        "menage_appartement": "40€",
        "menage_fin_sejour": "50€"
      }
    },
    "les_escapades": {
      "a_cambo_les_bains": [
        {
          "id": 1,
          "nom": "Villa Arnaga",
          "description": "Pequeño 'Versalles del País Vasco', una visita obligada que recorre la vida de Edmond Rostand."
        },
        {
          "id": 2,
          "nom": "Instituto de Belleza / Spa Termal",
          "description": "Un descanso relajante, ideal para recargar las pilas.",
          "avantage_ker_enia": "-15% para cualquier reserva de Spa para los huéspedes de Ker Enia",
          "tel": "05 59 29 39 02"
        },
        {
          "id": 3,
          "nom": "Colina de la Bergerie",
          "description": "Mirador que ofrece impresionantes vistas de Cambo les Bains. Posibilidad de visitar la capilla pintada por el artista vasco Albert Proux."
        }
      ],
      "plus_loin": [
        {
          "id": 4,
          "nom": "Museo del Chocolate Puyodebat",
          "description": "Historia de la elaboración artesanal del chocolate en el País Vasco. Máquinas de molienda, piedras de chocolate, degustación de grandes añadas.",
          "adresse": "Av. de Navarra en Cambo les Bains",
          "tel": "05 59 59 48 42"
        },
        {
          "id": 5,
          "nom": "Granja Harizkazuia",
          "description": "Apicultor apasionado que produce miel orgánica de calidad. Degustación de productos de la granja, también productor de pimienta de Espelette con DOP.",
          "adresse": "Chemin Harizkazuia",
          "tel": "06 63 79 43 54"
        },
        {
          "id": 6,
          "nom": "Cuevas de Isturitz y Oxocelhaya",
          "description": "Clasificadas como Monumentos Históricos. Cuevas ornamentadas de la cadena pirenaico-cantábrica y una joya mineral.",
          "adresse": "64640 Saint Martin d'Arberoue",
          "tel": "05 59 29 64 72"
        },
        {
          "id": 7,
          "nom": "Valle de Saint-Étienne de Baïgorry y las Aldudes",
          "description": "Cinco pueblos: Ossès, Saint-Étienne-de-Baïgorry, las Aldudes, Banca y Urepel. Ideal para practicar senderismo y descubrir la gastronomía local."
        },
        {
          "id": 8,
          "nom": "Puente colgante de Holzarte",
          "description": "Construido en 1920 por trabajadores italianos de la acería de Tardets, para cruzar de una orilla a la otra.",
          "adresse": "Larrau 64560",
          "tel": "05 59 28 62 80"
        }
      ],
      "autres_produits_du_terroir": [
        "El Taller de Pimientos en Espelette",
        "El Viñedo de Irouleguy",
        "El Taller de Makila en Larressore",
        "La Alfarería Goicoechea en Ossès"
      ],
      "marches": [
        {
          "lieu": "Cambo Les Bains",
          "jour": "Viernes por la mañana",
          "adresse": "Rue Chiquito"
        },
        {
          "lieu": "Espelette",
          "jour": "Miércoles por la mañana",
          "adresse": "Plaza del Mercado"
        },
        {
          "lieu": "Saint Jean Pied de Port",
          "jour": "Lunes todo el día"
        },
        {
          "lieu": "Bayonne",
          "jour": "No especificado"
        },
        {
          "lieu": "Donostia",
          "jour": "No especificado"
        }
      ],
      "villes_voisines": [
        "Espelette",
        "Saint Jean Pied de Port",
        "Bayonne",
        "Saint Jean de Luz",
        "Hondarribia",
        "Donostia"
      ],
      "restaurants": [
        {
          "nom": "Mendi Berdea",
          "type": "Cocina tradicional",
          "tel": "05 59 29 86 30"
        },
        {
          "nom": "Le Central",
          "type": "Brasserie",
          "tel": "05 59 08 66 63"
        },
        {
          "nom": "Ama",
          "type": "Cocina gastronómica local",
          "tel": "05 59 29 22 29"
        },
        {
          "nom": "Le Pavillon Bleu",
          "type": "Cocina bistronómica",
          "tel": "05 59 29 38 38"
        },
        {
          "nom": "Le Bellevue",
          "type": "Cocina regional",
          "tel": "05 59 93 75 75"
        },
        {
          "nom": "Auberge chez tante Ursule",
          "type": "Cocina tradicional regional",
          "tel": "05 59 29 78 23"
        },
        {
          "nom": "Salon Cyrano",
          "type": "Salón de té, ensaladas, tartas saladas",
          "tel": "05 59 52 32 07"
        }
      ]
    }
  },
  eu: {
    "titre": "Ongietorri eta Esperientzien Liburuxka",
    "residence": "KER ENIA",
    "localisation": "Kanbo (Cambo Les Bains)",
    "mot_de_bienvenue": {
      "texte": "Egoitzaren funtzionamendutik hasita eskaintzen dizkizuegun zerbitzuetara, bidean gure ihesaldi proposamenak eta Kanbo eta inguruetako gogokoenak dituzula, liburuxka honetan zure egonaldian gidatzeko informazio erabilgarri guztia aurkituko duzu.",
      "salutation_basque": "Ongi Etorri",
      "signataire": "Stéphanie Bergeret"
    },
    "valeurs": {
      "engagement_environnemental": "Establezimenduak etorkizuneko belaunaldientzat jokatzea erabaki du, bere ingurumen-inpaktua mugatuz, funtzionamendu eta kudeaketa iraunkorraren bidez.",
      "consignes_eco": [
        "Itzali argiak eta telebista egonean apartamentutik irtetean",
        "Itxi leihoak aire girotua edo berogailua erabiltzean",
        "Kontsumitu ura neurriz",
        "Ez bota komunera: produktu toxikoak, sendagaiak, olioak, kotoi-txotxak, produktu higienikoak",
        "Zaindu natura txangoetan",
        "Parte hartu gaikako bilketan (informazioa sarreran, edukiontzia egoitzaren aurrean)"
      ],
      "biodiversite": "Gora biodibertsitatea Euskal Herrian!"
    },
    "la_residence": {
      "description": {
        "nombre_appartements": 16,
        "superficie": "28m²-tik 40m²-ra",
        "terrasses": true,
        "renovation": "Guztiz berrituta",
        "decoration": "Dekorazio zaindua giro epel batean",
        "climatises": true,
        "insonorises": true
      },
      "equipements_appartements": [
        "Wi-Fi sarbidea",
        "Kalitatezko oheko arropa",
        "Sukalde hornitua",
        "Ontzi-garbigailua",
        "Labea",
        "Mikrouhin labea",
        "Pantaila lameko telebista",
        "Lisatzeko tresnak",
        "Hormako etengailua logelan"
      ],
      "wifi": {
        "reseau": "KER ENIA",
        "code": "kerenia2022",
        "disponible": "harreran"
      },
      "reception": {
        "horaires": "Astelehenetik igandera, 8:30etik 12:00etara"
      },
      "check_in_out": {
        "arrivee": "15:00etatik aurrera",
        "depart": "10:00etan"
      },
      "parking": {
        "type": "Pribatua eta doakoa",
        "reservation": "Erreserbarekin"
      },
      "regles": [
        "Ez utzi baliozko gauzarik apartamentuan",
        "Animaliak ez dira onartzen",
        "Apartamentuak ez erretzaileentzat dira",
        "Suteen aurkako segurtasun argibideak atearen atzean"
      ],
      "accessibilite": {
        "appartements_pmr": 2,
        "description": "Mugikortasun murriztua duten pertsonentzat egokitutako bi apartamentu"
      },
      "services_disponibles_reception": [
        "Ekipajea uzteko aukera",
        "Burkoak eskuragarri",
        "Egokitzaile elektrikoak",
        "Ohe tolesgarria, aulki altua eta haurtxoentzako bainuontzia",
        "Posta birbidaltzea",
        "Jatetxeen erreserbak"
      ],
      "piscine": {
        "surveillance": "Zaindu gabea",
        "acces": "Bezeroentzat soilik"
      },
      "moyens_de_paiement": [
        "Visa Txartelak",
        "Eurocard/Mastercard",
        "Txekeak",
        "Oporretako Txekeak"
      ],
      "contacts_utiles": {
        "office_du_tourisme_cambo": "05 59 29 70 25",
        "taxis": [
          "05 59 29 71 59",
          "06 71 40 55 58"
        ],
        "police_municipale": "05 59 93 74 35",
        "sos_medecin_bayonne": "05 59 03 30 00",
        "hopital_bayonne_urgences": [
          "15",
          "18"
        ]
      },
      "climatisation_chauffage": {
        "type": "Banakakoa (hotza udan, beroa neguan)",
        "mode_emploi": {
          "ON_OFF": "Piztu/Itzali",
          "TEMP": "Egokitu tenperatura geziekin",
          "FAN": "Aireztatze abiadura"
        }
      },
      "chaines_tv": {
        "1": "TF1",
        "2": "FRANCE 2",
        "3": "FRANCE 3",
        "5": "FRANCE 5",
        "6": "M6",
        "7": "ARTE",
        "8": "C8",
        "9": "W9",
        "10": "TMC",
        "11": "TFX",
        "12": "NRJ12",
        "13": "LCP",
        "14": "FRANCE 4",
        "15": "BFM TV",
        "16": "CNEWS",
        "17": "CSTAR",
        "18": "GULLI",
        "19": "France Ô",
        "20": "TF1 SÉRIES FILMS",
        "21": "L'ÉQUIPE 21",
        "22": "6TER",
        "23": "RMC STORY",
        "24": "RMC DÉCOUVERTE",
        "25": "CHÉRIE 25",
        "26": "LCI",
        "27": "FRANCE INFO",
        "28": "CANAL+ CINÉMA",
        "30": "TVPI",
        "31": "CANAL+ SPORT360",
        "32": "DISNEY CHANNEL",
        "33": "CANAL+",
        "34": "CANAL+ CINÉMA (JB)",
        "36": "CANAL+ SPORT360 (JB)",
        "37": "CHAÎNE À LA UNE",
        "53": "DISNEY CHANNEL (JB)",
        "57": "ETB 1",
        "58": "ETB 2",
        "59": "ETB 3",
        "60": "ETB 4"
      }
    },
    "les_services": {
      "restauration": {
        "petit_dejeuner": {
          "description": "Zerbitzua zure apartamentuan",
          "prix": "10€"
        },
        "point_boulangerie": {
          "disponible_a_partir_de": "8:30",
          "lieu": "Harreran",
          "commande": "Aurreko egunean eskatzeko",
          "service": "Ordainpekoa"
        },
        "reservation_restaurant": "Harreran posible"
      },
      "buanderie_libre_service": {
        "lave_linge": {
          "disponible": true,
          "prix": "5€ (fitxa)"
        },
        "seche_linge": {
          "disponible": true,
          "prix": "3€ (fitxa)"
        },
        "dosette_lessive": {
          "disponible": true,
          "prix": "1€"
        },
        "localisation": "Harreraren ondoan"
      },
      "nettoyage_a_la_demande": {
        "renouvellement_draps": {
          "prix": "10€ sorta bakoitzeko",
          "pour": "Pertsona 1 edo 2"
        },
        "renouvellement_linge_toilette": {
          "prix": "10€ sorta bakoitzeko",
          "pour": "Pertsona 1"
        },
        "menage_appartement": "40€",
        "menage_fin_sejour": "50€"
      }
    },
    "les_escapades": {
      "a_cambo_les_bains": [
        {
          "id": 1,
          "nom": "Arnaga Etxea",
          "description": "Euskal Herriko 'Versalles' txikia, Edmond Rostanden bizitza azaltzen duen ezinbesteko bisita."
        },
        {
          "id": 2,
          "nom": "Edertasun Zentroa / Spa Termala",
          "description": "Atseden ezin hobea, indarrak berritzeko ideala.",
          "avantage_ker_enia": "-%15 Spa erreserbetan Ker Eniako bezeroentzat",
          "tel": "05 59 29 39 02"
        },
        {
          "id": 3,
          "nom": "Bergerie Muinoa",
          "description": "Kanbo-ren ikuspegi paregabeak eskaintzen dituen begiratokia. Albert Proux artista euskaldunak margotutako kapera bisitatzeko aukera."
        }
      ],
      "plus_loin": [
        {
          "id": 4,
          "nom": "Puyodebat Txokolate Museoa",
          "description": "Euskal Herriko txokolate artisautzaren historia. Ehotzeko makinak, txokolate harriak, jatorri onenetakoen dastatzea.",
          "adresse": "Nafarroako etorbidea, Kanbo",
          "tel": "05 59 59 48 42"
        },
        {
          "id": 5,
          "nom": "Harizkazuia Baserria",
          "description": "Kalitatezko ezti ekologikoa ekoizten duen erlezain sutsua. Baserriko produktuen dastatzea, Espeletako piper JDB ekoizlea ere bada.",
          "adresse": "Harizkazuia bidea",
          "tel": "06 63 79 43 54"
        },
        {
          "id": 6,
          "nom": "Izturitze eta Otsozelaiko Harpeak",
          "description": "Monumentu Historiko izendatuak. Pirinioetako eta Kantauriko kateko apaindutako kobazuloak eta harribitxi minerala.",
          "adresse": "64640 Arberoa Donamartiri",
          "tel": "05 59 29 64 72"
        },
        {
          "id": 7,
          "nom": "Baigorri eta Aldudeko Ibarra",
          "description": "Bost herri: Ortzaize, Baigorri, Aldude, Banka eta Urepele. Ibilaldiak egiteko eta bertako gastronomia ezagutzeko paregabea."
        },
        {
          "id": 8,
          "nom": "Holtzarteko Zubi Esekia",
          "description": "1920an Tardetseko altzairutegiko langile italiarrek eraikia, ertz batetik bestera pasatzeko.",
          "adresse": "Larraine 64560",
          "tel": "05 59 28 62 80"
        }
      ],
      "autres_produits_du_terroir": [
        "Espeletako Piper tailerra",
        "Irulegiko Mahastiak",
        "Larresoroko Makila Tailerra",
        "Ortzaizeko Goicoechea Eltzegintza"
      ],
      "marches": [
        {
          "lieu": "Kanbo",
          "jour": "Ostiral goiza",
          "adresse": "Chiquito kalea"
        },
        {
          "lieu": "Espeleta",
          "jour": "Asteazken goiza",
          "adresse": "Merkatuko Plaza"
        },
        {
          "lieu": "Donibane Garazi",
          "jour": "Astelehena egun osoa"
        },
        {
          "lieu": "Baiona",
          "jour": "Zehaztu gabe"
        },
        {
          "lieu": "Donostia",
          "jour": "Zehaztu gabe"
        }
      ],
      "villes_voisines": [
        "Espeleta",
        "Donibane Garazi",
        "Baiona",
        "Donibane Lohitzune",
        "Hondarribia",
        "Donostia"
      ],
      "restaurants": [
        {
          "nom": "Mendi Berdea",
          "type": "Sukaldaritza tradizionala",
          "tel": "05 59 29 86 30"
        },
        {
          "nom": "Le Central",
          "type": "Brasserie-a",
          "tel": "05 59 08 66 63"
        },
        {
          "nom": "Ama",
          "type": "Bertako sukaldaritza gastronomikoa",
          "tel": "05 59 29 22 29"
        },
        {
          "nom": "Le Pavillon Bleu",
          "type": "Sukaldaritza bistronomikoa",
          "tel": "05 59 29 38 38"
        },
        {
          "nom": "Le Bellevue",
          "type": "Eskualdeko sukaldaritza",
          "tel": "05 59 93 75 75"
        },
        {
          "nom": "Auberge chez tante Ursule",
          "type": "Eskualdeko sukaldaritza tradizionala",
          "tel": "05 59 29 78 23"
        },
        {
          "nom": "Salon Cyrano",
          "type": "Te-aretoa, entsaladak, tarta gaziak",
          "tel": "05 59 52 32 07"
        }
      ]
    }
  }
};
