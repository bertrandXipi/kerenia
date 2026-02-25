export type Locale = 'fr' | 'en' | 'es';

export const locales: Locale[] = ['fr', 'en', 'es'];

export const localeNames: Record<Locale, string> = {
  fr: 'Français',
  en: 'English',
  es: 'Español',
};

export const defaultLocale: Locale = 'fr';
