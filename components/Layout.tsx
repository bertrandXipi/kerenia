'use client';

import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import { NAV_ITEMS, CONTACT_INFO } from '@/lib/constants';
import { motion, AnimatePresence } from 'framer-motion';
import InstagramFeed from '@/components/InstagramFeed';

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

      <footer className="bg-slate-850 text-stone-300 pt-16 pb-8 border-t-4 border-brick-600">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="mb-6 h-16 w-auto">
                <img 
                  src="https://www.kerenia.fr/wp-content/uploads/2020/07/logo_ker_enia-1.svg" 
                  alt="Résidence Ker Enia" 
                  className="h-full w-auto object-contain brightness-0 invert"
                />
              </div>
              <p className="text-sm leading-relaxed mb-6 opacity-80 font-light">
                L&apos;expérience bien-être, un séjour qui vous ressemble au cœur du Pays Basque.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-brick-400 transition-colors"><Facebook size={20}/></a>
                <a href="#" className="text-white hover:text-brick-400 transition-colors"><Instagram size={20}/></a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-condensed font-bold uppercase tracking-wider mb-6 text-lg">Contact</h4>
              <ul className="space-y-4 text-sm font-light">
                <li className="flex items-start gap-3">
                  <MapPin className="text-white flex-shrink-0" size={18} />
                  <span>{CONTACT_INFO.address}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="text-white flex-shrink-0" size={18} />
                  <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-white transition-colors">{CONTACT_INFO.phone}</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="text-white flex-shrink-0" size={18} />
                  <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors">{CONTACT_INFO.email}</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-condensed font-bold uppercase tracking-wider mb-6 text-lg">Liens Utiles</h4>
              <ul className="space-y-2 text-sm font-light">
                <li><Link href="/appartements" className="hover:text-brick-400 transition-colors uppercase">Nos Appartements</Link></li>
                <li><Link href="/autour-de-nous" className="hover:text-brick-400 transition-colors uppercase">Activités & Tourisme</Link></li>
                <li><a href="https://www.chainethermale.fr/cambo-les-bains" target="_blank" rel="noreferrer" className="hover:text-brick-400 transition-colors uppercase">Station Thermale</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center text-xs opacity-60">
            <p>&copy; {new Date().getFullYear()} Ker Enia. Tous droits réservés.</p>
            <p className="mt-2 md:mt-0 font-script text-lg">L&apos;expérience bien-être.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
