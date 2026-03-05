'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useLocale } from './LocaleProvider';
import { locales, localeNames } from '@/lib/i18n';
import { Globe, ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

interface LanguageSwitcherProps {
  isTransparent?: boolean;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ isTransparent = false }) => {
  const { locale, setLocale } = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 font-condensed font-bold uppercase text-sm tracking-wider px-3 py-2 rounded transition-all outline-none ${isTransparent
            ? 'text-white hover:bg-white/10'
            : 'text-brick-800 hover:bg-brick-50'
          }`}
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <Globe size={18} />
        <span>{locale.toUpperCase()}</span>
        <ChevronDown size={14} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-cream-100 overflow-hidden z-[100]"
          >
            <div className="py-2 flex flex-col">
              {locales.map((loc) => (
                <button
                  key={loc}
                  onClick={() => {
                    setLocale(loc);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-sans transition-colors group ${locale === loc
                      ? 'bg-brick-50 text-brick-600 font-bold'
                      : 'text-gray-700 hover:bg-cream-50 hover:text-brick-800'
                    }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${locale === loc ? 'bg-brick-600' : 'bg-transparent group-hover:bg-brick-300'}`} />
                  {localeNames[loc]}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;
