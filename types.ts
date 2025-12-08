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