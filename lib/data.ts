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
      features: ['Ohe bikoitza 140cm', 'Beheko solairua', 'Aire girotua', 'Dohainikako Wifi-a', 'Sukalde hornitua'],
      imageUrl: 'https://www.kerenia.fr/wp-content/uploads/2021/04/DSC_7223.jpg',
      priceFrom: '65€ / gaua'
    },
    {
      id: 'standard',
      title: 'Apartamentu Estandarra',
      size: '28 - 30 m²',
      capacity: '2 pertsona',
      description: 'Gune argitsua logela bereizi batekin pribatutasun handiagoa izateko. Dekorazio zaindua eta ekipamendu modernoa etxean bezala egoteko.',
      features: ['Logela bereizia (140cm-ko ohea)', 'Aire girotua', 'Dohainikako Wifi-a', 'Terraza', 'Ontzi-garbigailua'],
      imageUrl: 'https://www.kerenia.fr/wp-content/uploads/2021/04/DSC_7309.jpg',
      priceFrom: '75€ / gaua'
    },
    {
      id: 'comfort',
      title: 'Apartamentu Erosoa',
      size: '35 - 45 m²',
      capacity: '2 - 3 pertsona',
      description: 'Gure apartamenturik handienak. Zabala, ohe handi batekin eta sofa ohe batekin. Ezin hobea egonaldi luzeetarako edo familia txikientzat.',
      features: ['Ohe handia (140 edo 160cm)', 'Sofa ohea', 'Egongela zabala', 'Terraza handia', 'Sukalde osoa'],
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
  ],
  eu: [
    { icon: Wifi, label: 'Dohainikako Wifi-a' },
    { icon: Thermometer, label: 'Aire Girotua' },
    { icon: Coffee, label: 'Sukalde Hornitua' },
    { icon: Tv, label: 'Pantaila Lameko Telebista' },
    { icon: Car, label: 'Aparkaleku Pribatua' },
    { icon: Waves, label: 'Igerileku Berotua' },
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
  es: {
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
  eu: {
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
}
};
