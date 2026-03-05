export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  source: string;
  date: string;
}

export interface Apartment {
  id: string;
  title: string;
  size: string;
  capacity: string;
  description: string;
  features: string[];
  imageUrl: string;
  priceFrom: string;
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link?: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface Livret {
  titre: string;
  residence: string;
  localisation: string;
  mot_de_bienvenue: {
    texte: string;
    salutation_basque: string;
    signataire: string;
  };
  valeurs: {
    engagement_environnemental: string;
    consignes_eco: string[];
    biodiversite: string;
  };
  la_residence: {
    description: {
      nombre_appartements: number;
      superficie: string;
      terrasses: boolean;
      renovation: string;
      decoration: string;
      climatises: boolean;
      insonorises: boolean;
    };
    equipements_appartements: string[];
    wifi: {
      reseau: string;
      code: string;
      disponible: string;
    };
    reception: { horaires: string };
    check_in_out: { arrivee: string; depart: string };
    parking: { type: string; reservation: string };
    regles: string[];
    accessibilite: { appartements_pmr: number; description: string };
    services_disponibles_reception: string[];
    piscine: { surveillance: string; acces: string };
    moyens_de_paiement: string[];
    contacts_utiles: Record<string, string | string[]>;
    climatisation_chauffage: {
      type: string;
      mode_emploi: Record<string, string>;
    };
    chaines_tv: Record<string, string>;
  };
  les_services: {
    restauration: {
      petit_dejeuner: { description: string; prix: string };
      point_boulangerie: {
        disponible_a_partir_de: string;
        lieu: string;
        commande: string;
        service: string;
      };
      reservation_restaurant: string;
    };
    buanderie_libre_service: {
      lave_linge: { disponible: boolean; prix: string };
      seche_linge: { disponible: boolean; prix: string };
      dosette_lessive: { disponible: boolean; prix: string };
      localisation: string;
    };
    nettoyage_a_la_demande: {
      renouvellement_draps: { prix: string; pour: string };
      renouvellement_linge_toilette: { prix: string; pour: string };
      menage_appartement: string;
      menage_fin_sejour: string;
    };
  };
  les_escapades: {
    a_cambo_les_bains: Array<{ id: number; nom: string; description: string; avantage_ker_enia?: string; tel?: string }>;
    plus_loin: Array<{ id: number; nom: string; description: string; adresse?: string; tel?: string }>;
    autres_produits_du_terroir: string[];
    marches: Array<{ lieu: string; jour: string; adresse?: string }>;
    villes_voisines: string[];
    restaurants: Array<{ nom: string; type: string; tel: string }>;
  };
}