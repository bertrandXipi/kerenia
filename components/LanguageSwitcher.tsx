'use client';

import React from 'react';
import { useLocale } from './LocaleProvider';
import { locales, Locale } from '@/lib/i18n';

interface LanguageSwitcherProps {
  isTransparent?: boolean;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ isTransparent = false }) => {
  const { locale, setLocale } = useLocale();

  return (
    <div className="flex items-center gap-1">
      {locales.map((loc, index) => (
        <React.Fragment key={loc}>
          <button
            onClick={() => setLocale(loc)}
            className={`font-condensed font-bold uppercase text-sm tracking-wider px-2 py-1 rounded transition-all ${
              locale === loc
                ? isTransparent
                  ? 'text-white underline underline-offset-4'
                  : 'text-brick-600 underline underline-offset-4'
                : isTransparent
                ? 'text-white/70 hover:text-white'
                : 'text-brick-400 hover:text-brick-800'
            }`}
            aria-label={`Switch to ${loc}`}
          >
            {loc.toUpperCase()}
          </button>
          {index < locales.length - 1 && (
            <span className={isTransparent ? 'text-white/50' : 'text-brick-300'}>|</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
