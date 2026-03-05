export type Locale = 'fr' | 'en' | 'es' | 'eu';

export const locales: Locale[] = ['fr', 'en', 'es', 'eu'];

export const localeNames: Record<Locale, string> = {
  fr: 'Français',
  en: 'English',
  es: 'Español',
  eu: 'Euskara',
};

export const defaultLocale: Locale = 'fr';
