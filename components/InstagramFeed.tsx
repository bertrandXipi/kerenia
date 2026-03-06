'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Script from 'next/script';
import { Instagram } from 'lucide-react';
import { useLocale } from '@/components/LocaleProvider';

const INSTAGRAM_URL = 'https://www.instagram.com/residence.ker.enia/';

// Le widget Behold gère maintenant l'affichage
// On garde INSTAGRAM_URL pour le bouton CTA


const InstagramFeed: React.FC = () => {
  const { t } = useLocale();

  useEffect(() => {
    // Tentative de masquage via JS (utile si dans Shadow DOM)
    const hideBranding = () => {
      const widget = document.querySelector('behold-widget');
      if (widget) {
        // Recherche classique
        const branding = widget.querySelector('behold-branding') as HTMLElement;
        if (branding) branding.style.display = 'none';

        // Recherche dans le Shadow DOM
        if (widget.shadowRoot) {
          const shadowBranding = widget.shadowRoot.querySelector('behold-branding') as HTMLElement;
          if (shadowBranding) shadowBranding.style.display = 'none';
        }
      }
    };

    const interval = setInterval(hideBranding, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-cream-100 overflow-hidden">
      {/* Header */}
      <div className="container mx-auto px-6 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 mb-4 group"
          >
            <Instagram size={28} className="text-brick-600 group-hover:scale-110 transition-transform" />
            <span className="font-condensed font-bold text-sm uppercase tracking-[0.2em] text-brick-600 group-hover:text-brick-800 transition-colors">
              @residence.ker.enia
            </span>
          </a>
          <h2 className="font-script text-5xl md:text-6xl text-brick-600 mb-3">
            {t.instagram.title}
          </h2>
          <p className="text-slate-500 font-light text-lg max-w-lg mx-auto">
            {t.instagram.subtitle}
          </p>
        </motion.div>
      </div>

      {/* Marquee remplacé par Behold Widget */}
      <div className="container mx-auto px-6">
        <Script
          src="https://w.behold.so/widget.js"
          type="module"
          strategy="lazyOnload"
        />
        <div className="rounded-sm overflow-hidden shadow-sm border border-brick-100 bg-white p-2">
          {/* @ts-ignore - behold-widget est un custom element */}
          <behold-widget feed-id="qHoHMzpglKs9yWHM1uJf"></behold-widget>
        </div>
      </div>

      {/* CTA */}
      <div className="container mx-auto px-6 mt-10 text-center">
        <motion.a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-brick-700 hover:bg-brick-800 text-white px-8 py-4 rounded-full font-condensed font-bold text-xs uppercase tracking-[0.15em] shadow-lg hover:shadow-xl transition-all"
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <Instagram size={18} />
          {t.instagram.cta}
        </motion.a>
      </div>
    </section>
  );
};

export default InstagramFeed;
