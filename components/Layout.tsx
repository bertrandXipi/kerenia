'use client';

import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Mail, MapPin, Instagram, Facebook, Star } from 'lucide-react';
import { NAV_ITEMS, CONTACT_INFO } from '@/lib/constants';
import { motion, AnimatePresence } from 'framer-motion';
import InstagramFeed from '@/components/InstagramFeed';
import AccessibilityWidget from '@/components/AccessibilityWidget';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  useLayoutEffect(() => {
    if (isMobileMenuOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    };
  }, [isMobileMenuOpen]);

  const isTransparent = isHomePage && !isScrolled && !isMobileMenuOpen;

  const getNavClasses = () => {
    if (isMobileMenuOpen) return 'bg-brick-900 shadow-none py-2';
    if (isTransparent) return 'bg-transparent py-4 shadow-none';
    return 'bg-cream-50/95 backdrop-blur-sm py-2 shadow-sm border-b border-brick-200';
  };

  const logoClasses = () => {
    if (isMobileMenuOpen) return 'brightness-0 invert';
    if (isTransparent) return 'brightness-0 invert drop-shadow-md';
    return '';
  };

  return (
    <div className="flex flex-col min-h-screen font-sans bg-cream-50">
      <AccessibilityWidget />
      
      <nav
        ref={navRef}
        className={`fixed w-full z-50 transition-[background-color,padding,box-shadow] duration-500 ease-in-out ${getNavClasses()}`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-3 group relative z-50">
            <div className="h-14 w-auto transition-transform duration-300 origin-left">
              <img 
                src="https://www.kerenia.fr/wp-content/uploads/2020/07/logo_ker_enia-1.svg" 
                alt="Résidence Ker Enia" 
                className={`h-full w-auto object-contain transition-all duration-500 ${logoClasses()}`}
              />
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`font-condensed font-bold text-lg uppercase tracking-tight transition-all relative group py-2 ${
                  isTransparent ? 'text-white' : 'text-brick-800'
                } ${pathname === item.path && !isTransparent ? 'text-brick-600' : ''}`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${isTransparent ? 'bg-white' : 'bg-brick-600'}`}></span>
              </Link>
            ))}
            
            <Link
              href="/contact"
              className={`font-condensed font-bold uppercase tracking-wide px-8 py-3 transition-all transform hover:scale-105 shadow-md rounded-sm border-2 ${
                isTransparent 
                  ? 'bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-brick-900' 
                  : 'bg-brick-600 border-brick-600 text-white hover:bg-brick-700 hover:border-brick-700'
              }`}
            >
              Réserver
            </Link>
          </div>

          <button
            className={`lg:hidden focus:outline-none relative z-50 transition-colors duration-300 ${isMobileMenuOpen || isTransparent ? 'text-white' : 'text-brick-800'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden fixed inset-0 z-40 bg-brick-900 text-white flex flex-col pt-24"
            >
              <div className="flex flex-col items-center justify-center flex-grow space-y-8 p-6">
                {NAV_ITEMS.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.path}
                      className={`font-condensed font-bold uppercase text-3xl tracking-widest transition-colors ${
                        pathname === item.path ? 'text-brick-400' : 'text-white hover:text-brick-300'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="p-8 border-t border-brick-800 flex justify-center space-x-10 text-brick-300"
              >
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-white transition-colors"><Phone size={24} /></a>
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors"><Mail size={24} /></a>
                <a href="#" className="hover:text-white transition-colors"><Instagram size={24} /></a>
                <a href="#" className="hover:text-white transition-colors"><Facebook size={24} /></a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="flex-grow">{children}</main>

      <InstagramFeed />

      {/* Footer Premium */}
      <footer className="bg-brick-800 text-white">
        {/* Section 1 - Hero Footer */}
        <div className="border-t-4 border-brick-600">
          <div className="container mx-auto px-6 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Colonne gauche - Branding */}
              <div>
                <div className="mb-6 h-20 w-auto">
                  <img 
                    src="https://www.kerenia.fr/wp-content/uploads/2020/07/logo_ker_enia-1.svg" 
                    alt="Résidence Ker Enia" 
                    className="h-full w-auto object-contain brightness-0 invert"
                  />
                </div>
                <p className="font-script text-3xl md:text-4xl text-brick-300 mb-6 transform -rotate-1">
                  L&apos;expérience bien-être
                </p>
                <p className="text-brick-200 text-lg leading-relaxed mb-8 font-light max-w-lg">
                  Au cœur du Pays Basque, notre résidence 3 étoiles vous accueille dans un cadre authentique et chaleureux. 
                  Profitez de notre piscine chauffée et de nos appartements tout confort pour un séjour inoubliable.
                </p>
                <div className="flex gap-4">
                  <a 
                    href="https://www.facebook.com/kerenia" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-brick-700 hover:bg-brick-600 flex items-center justify-center transition-all hover:scale-110"
                  >
                    <Facebook size={20}/>
                  </a>
                  <a 
                    href="https://www.instagram.com/kerenia_residence/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-brick-700 hover:bg-brick-600 flex items-center justify-center transition-all hover:scale-110"
                  >
                    <Instagram size={20}/>
                  </a>
                </div>
              </div>

              {/* Colonne droite - CTA Réservation */}
              <div className="bg-brick-700 rounded-2xl p-8 md:p-10 shadow-2xl border border-brick-600">
                <h3 className="font-script text-4xl text-brick-200 mb-4">Réservez votre séjour</h3>
                <p className="text-brick-200 mb-6 font-light">
                  Découvrez nos appartements et profitez de tarifs directs avantageux
                </p>
                
                {/* Google Rating */}
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-brick-600">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 mb-1">
                      <svg viewBox="0 0 24 24" className="w-6 h-6" aria-label="Google">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                      <span className="text-3xl font-bold text-white">4.9</span>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="text-amber-400" fill="currentColor" />
                      ))}
                    </div>
                  </div>
                  <div className="text-brick-200 text-sm font-light">
                    <span className="font-bold text-white">Excellent</span><br/>
                    Basé sur 127 avis
                  </div>
                </div>

                <Link 
                  href="/contact"
                  className="block w-full bg-white hover:bg-cream-50 text-brick-800 text-center px-8 py-4 rounded-full font-condensed font-bold text-sm uppercase tracking-[0.15em] shadow-lg hover:shadow-xl transition-all hover:scale-105"
                >
                  Voir les disponibilités
                </Link>
                <p className="text-brick-300 text-xs text-center mt-4 font-light">
                  Meilleur tarif garanti · Sans frais de réservation
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2 - Infos détaillées */}
        <div className="bg-brick-900 border-t border-brick-700">
          <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {/* Contact */}
              <div>
                <h4 className="text-white font-condensed font-bold uppercase tracking-wider mb-6 text-sm border-b border-brick-700 pb-3">
                  Contact
                </h4>
                <ul className="space-y-4 text-sm font-light text-brick-200">
                  <li className="flex items-start gap-3 group">
                    <MapPin className="text-brick-400 flex-shrink-0 mt-0.5 group-hover:text-brick-300 transition-colors" size={16} />
                    <span className="group-hover:text-white transition-colors">{CONTACT_INFO.address}</span>
                  </li>
                  <li className="flex items-center gap-3 group">
                    <Phone className="text-brick-400 flex-shrink-0 group-hover:text-brick-300 transition-colors" size={16} />
                    <a href={`tel:${CONTACT_INFO.phone}`} className="group-hover:text-white transition-colors">{CONTACT_INFO.phone}</a>
                  </li>
                  <li className="flex items-center gap-3 group">
                    <Mail className="text-brick-400 flex-shrink-0 group-hover:text-brick-300 transition-colors" size={16} />
                    <a href={`mailto:${CONTACT_INFO.email}`} className="group-hover:text-white transition-colors">{CONTACT_INFO.email}</a>
                  </li>
                </ul>
              </div>

              {/* Navigation */}
              <div>
                <h4 className="text-white font-condensed font-bold uppercase tracking-wider mb-6 text-sm border-b border-brick-700 pb-3">
                  Navigation
                </h4>
                <ul className="space-y-3 text-sm font-light text-brick-200">
                  <li><Link href="/" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Accueil</Link></li>
                  <li><Link href="/appartements" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Nos Appartements</Link></li>
                  <li><Link href="/galerie" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Galerie Photos</Link></li>
                  <li><Link href="/autour-de-nous" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Autour de Nous</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Contact & Réservation</Link></li>
                </ul>
              </div>

              {/* Infos pratiques */}
              <div>
                <h4 className="text-white font-condensed font-bold uppercase tracking-wider mb-6 text-sm border-b border-brick-700 pb-3">
                  Infos Pratiques
                </h4>
                <ul className="space-y-3 text-sm font-light text-brick-200">
                  <li className="flex items-start gap-2">
                    <span className="text-brick-400">•</span>
                    <span>Arrivée : 16h - 19h</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brick-400">•</span>
                    <span>Départ : avant 10h</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brick-400">•</span>
                    <span>Parking privé gratuit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brick-400">•</span>
                    <span>Piscine chauffée</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brick-400">•</span>
                    <a href="https://www.chainethermale.fr/cambo-les-bains" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Thermes à 5 min</a>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brick-400">•</span>
                    <span>Animaux acceptés</span>
                  </li>
                </ul>
              </div>

              {/* Certifications */}
              <div>
                <h4 className="text-white font-condensed font-bold uppercase tracking-wider mb-6 text-sm border-b border-brick-700 pb-3">
                  Certifications
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-0.5">
                      {[...Array(3)].map((_, i) => (
                        <Star key={i} size={20} className="text-amber-400" fill="currentColor" />
                      ))}
                    </div>
                    <span className="text-sm text-brick-200 font-light">Résidence 3 étoiles</span>
                  </div>
                  <div className="text-sm text-brick-200 font-light space-y-2">
                    <p className="flex items-start gap-2">
                      <span className="text-brick-400">✓</span>
                      <span>Classement Atout France</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-brick-400">✓</span>
                      <span>Partenaire Chaîne Thermale</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-brick-400">✓</span>
                      <span>Tourisme Pays Basque</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="bg-brick-950 border-t border-brick-800">
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brick-400">
              <p>&copy; {new Date().getFullYear()} Résidence Ker Enia. Tous droits réservés.</p>
              <div className="flex gap-6">
                <Link href="#" className="hover:text-brick-200 transition-colors">Mentions légales</Link>
                <Link href="#" className="hover:text-brick-200 transition-colors">Politique de confidentialité</Link>
                <Link href="#" className="hover:text-brick-200 transition-colors">CGV</Link>
              </div>
              <p className="font-script text-base text-brick-300">L&apos;expérience bien-être.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
