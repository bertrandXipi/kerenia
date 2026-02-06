'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, Calendar, Users, Search } from 'lucide-react';
import { REVIEWS, APARTMENTS, BOOKING_URL } from '@/lib/constants';
import CustomCalendar from '@/components/CustomCalendar';
import { KenBurnsImage } from '@/components/PremiumEffects';

const HomeContent: React.FC = () => {
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [adults, setAdults] = useState(2);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  
  const calendarRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
        setIsCalendarOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const formatDateForDisplay = (date: Date | null) => {
    if (!date) return null;
    return new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'short' }).format(date);
  };

  const formatDateForUrl = (date: Date | null) => {
    if (!date) return '';
    return date.toISOString().split('T')[0];
  };

  const handleSearch = (e: React.MouseEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (checkIn) params.append('checkin', formatDateForUrl(checkIn));
    if (checkOut) params.append('checkout', formatDateForUrl(checkOut));
    params.append('adults', adults.toString());
    const separator = BOOKING_URL.includes('?') ? '&' : '?';
    window.open(`${BOOKING_URL}${separator}${params.toString()}`, '_blank');
  };

  return (
    <>
      {/* Hero Section */}
      <section ref={targetRef} className="relative h-screen flex flex-col justify-center items-center pt-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div style={{ y }} className="w-full h-full">
            <KenBurnsImage
              src="https://www.kerenia.fr/wp-content/uploads/2020/07/piscine-kerenia.jpg"
              alt="Résidence Ker Enia Piscine"
              className="w-full h-full"
              duration={25}
              direction="in"
              overlay={false}
            />
            <div className="absolute inset-0 bg-black/20 bg-gradient-to-b from-black/50 via-transparent to-black/40"></div>
          </motion.div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center mt-8 md:mt-0">
          <motion.div style={{ opacity }}>
            <div className="inline-block relative mb-12">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="absolute inset-0 bg-brick-900/90 shadow-2xl"
              />
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="relative z-10 px-8 py-6 md:px-16 md:py-8"
              >
                <h1 className="font-condensed font-light text-3xl md:text-6xl text-white uppercase tracking-[0.2em] leading-tight">
                  Résidence Ker Enia <span className="text-gold-500 text-2xl md:text-4xl align-top ml-2">***</span>
                </h1>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="text-white drop-shadow-lg"
            >
              <p className="font-script text-4xl md:text-6xl mb-6 text-white font-light">
                L&apos;expérience bien-être,
              </p>
              <div className="flex items-center justify-center gap-6">
                <div className="h-px w-12 bg-white/80"></div>
                <p className="font-sans font-light text-xs md:text-sm tracking-[0.3em] uppercase text-white/90">
                  un séjour qui vous ressemble
                </p>
                <div className="h-px w-12 bg-white/80"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Booking Bar */}
        <motion.div 
          initial={{ opacity: 0, y: "100%", x: "-50%" }}
          animate={{ opacity: 1, y: "50%", x: "-50%" }}
          transition={{ delay: 1.5, duration: 0.8, type: "spring", stiffness: 40 }}
          className="absolute bottom-0 left-1/2 z-30 w-[95%] max-w-5xl"
        >
          <div className="glass bg-white/80 rounded-[2rem] shadow-2xl p-2 md:p-3 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4 border border-white/60 relative ring-1 ring-black/5">
            <div 
              ref={calendarRef}
              onClick={() => setIsCalendarOpen(!isCalendarOpen)}
              className="relative flex items-center gap-4 flex-[1.5] w-full md:w-auto p-4 hover:bg-stone-50 rounded-2xl transition-colors cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-full bg-brick-50 flex items-center justify-center text-brick-600 group-hover:bg-brick-600 group-hover:text-white transition-all duration-300 shrink-0 border border-brick-100 group-hover:border-brick-600">
                <Calendar size={18} />
              </div>
              <div className="text-left w-full">
                <p className="font-condensed font-bold uppercase text-brick-800 text-[10px] tracking-[0.2em] mb-1">Arrivée - Départ</p>
                <div className="flex items-center gap-2 text-slate-600 text-sm font-light uppercase tracking-widest w-full min-h-[24px]">
                  {checkIn ? (
                    <span className="text-brick-700 font-medium border-b border-brick-300">{formatDateForDisplay(checkIn)}</span>
                  ) : (
                    <span className="opacity-50 border-b border-transparent text-xs">Sélectionner</span>
                  )}
                  <span className="text-stone-300 mx-1">-</span>
                  {checkOut ? (
                    <span className="text-brick-700 font-medium border-b border-brick-300">{formatDateForDisplay(checkOut)}</span>
                  ) : (
                    <span className="opacity-50 border-b border-transparent text-xs">...</span>
                  )}
                </div>
              </div>
              
              {isCalendarOpen && (
                <div onClick={(e) => e.stopPropagation()}>
                  <CustomCalendar 
                    checkIn={checkIn}
                    checkOut={checkOut}
                    onSelect={(start: Date | null, end: Date | null) => {
                      setCheckIn(start);
                      setCheckOut(end);
                    }}
                    onClose={() => setIsCalendarOpen(false)}
                  />
                </div>
              )}
            </div>

            <div className="hidden md:block w-px h-8 bg-stone-200"></div>

            <div className="flex items-center gap-4 flex-1 w-full md:w-auto p-4 hover:bg-stone-50 rounded-2xl transition-colors cursor-pointer group">
              <div className="w-10 h-10 rounded-full bg-brick-50 flex items-center justify-center text-brick-600 group-hover:bg-brick-600 group-hover:text-white transition-all duration-300 shrink-0 border border-brick-100 group-hover:border-brick-600">
                <Users size={18} />
              </div>
              <div className="text-left w-full">
                <p className="font-condensed font-bold uppercase text-brick-800 text-[10px] tracking-[0.2em] mb-1">Voyageurs</p>
                <select 
                  value={adults}
                  onChange={(e) => setAdults(Number(e.target.value))}
                  className="bg-transparent w-full text-brick-700 font-medium text-sm border-none focus:ring-0 p-0 cursor-pointer appearance-none outline-none tracking-wider"
                >
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <option key={num} value={num}>{num} Adulte{num > 1 ? 's' : ''}</option>
                  ))}
                </select>
              </div>
            </div>

            <motion.button 
              onClick={handleSearch}
              className="relative overflow-hidden bg-brick-700 hover:bg-brick-800 text-white rounded-full px-8 py-4 flex items-center gap-3 transition-all shadow-lg hover:shadow-brick-700/30 w-full md:w-auto justify-center group"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
              <Search size={18} className="group-hover:scale-110 transition-transform relative z-10" />
              <span className="font-condensed font-bold uppercase tracking-[0.15em] text-xs whitespace-nowrap relative z-10">Disponibilités</span>
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="pt-32 pb-20 md:pb-28 bg-white text-center relative z-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-condensed font-medium text-3xl md:text-5xl text-brick-800 mb-2 uppercase leading-tight tracking-[0.1em]">
              Ker Enia à Cambo-les-Bains, un lieu confortable<br/>
              pour ceux qui veulent se sentir comme à la maison.
            </h2>
            
            <h3 className="font-script text-4xl md:text-5xl text-brick-600 mb-12 mt-6 transform -rotate-1">
              Réveillez-vous au pied des montagnes basques
            </h3>

            <div className="w-24 h-px bg-brick-300 mx-auto mb-10"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-left">
              <div className="text-slate-600 space-y-6 text-lg font-light leading-relaxed">
                <p>
                  Ici, nous célébrons la générosité et l&apos;authenticité, nous accueillons autour de l&apos;esprit convivial, chaleureux et festif du Pays basque.
                </p>
                <p>
                  Installez-vous confortablement, <strong className="font-medium text-brick-800">vous êtes chez vous.</strong>
                </p>
                <p>
                  Faîtes l&apos;expérience d&apos;un séjour qui vous ressemble – une plus grande liberté qu&apos;à l&apos;hôtel tout en conservant vos habitudes, <strong className="font-medium text-brick-800">comme à la maison !</strong>
                </p>
              </div>
              <div className="relative group">
                <motion.img 
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                  src="https://www.kerenia.fr/wp-content/uploads/2020/07/appartement3-kerenia.jpg" 
                  alt="Appartement Ker Enia Interior" 
                  className="shadow-2xl w-full rounded-sm"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 shadow-xl border border-stone-100 hidden md:block z-20">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="bg-[#0F9D58] rounded-full p-1"><Star size={14} className="text-white" fill="white"/></div>
                    <span className="font-bold text-slate-800 text-xl">4.9 / 5</span>
                  </div>
                  <span className="text-xs text-slate-500 font-bold uppercase tracking-widest">Excellent sur Google</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Apartments Preview */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-condensed font-light text-4xl md:text-5xl text-brick-800 mb-4 uppercase tracking-[0.15em]">Nos Appartements</h2>
            <div className="w-16 h-px bg-brick-400 mx-auto mb-6"></div>
            <p className="text-slate-600 max-w-2xl mx-auto font-light text-lg">
              Notre résidence dispose de 16 appartements de 25m² à 45m² avec terrasses, entièrement rénovés, une décoration soignée dans une atmosphère chaleureuse.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {APARTMENTS.map((apt, index) => (
              <motion.div
                key={apt.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white shadow-lg group hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="h-64 overflow-hidden relative">
                  <img src={apt.imageUrl} alt={apt.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-0 right-0 bg-brick-700 text-white px-5 py-2 text-xs font-condensed font-bold uppercase tracking-widest">
                    Dès {apt.priceFrom}
                  </div>
                </div>
                <div className="p-8 text-center">
                  <h3 className="font-condensed font-medium text-2xl text-brick-800 mb-4 uppercase tracking-wide">{apt.title}</h3>
                  <p className="text-slate-600 mb-6 font-light line-clamp-3 text-sm leading-relaxed">{apt.description}</p>
                  <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
                    <Link href="/appartements" className="inline-block relative overflow-hidden group/btn px-8 py-3 border border-brick-700 text-brick-800 font-condensed font-bold text-xs uppercase tracking-[0.2em]">
                      <span className="relative z-10 group-hover/btn:text-white transition-colors duration-300">Découvrir</span>
                      <div className="absolute inset-0 bg-brick-700 transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300 ease-in-out"></div>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-white border-t border-stone-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <div className="mb-6 md:mb-0">
              <h2 className="font-condensed font-light text-3xl text-brick-800 uppercase tracking-[0.15em]">Avis Clients</h2>
              <div className="flex items-center gap-2 mt-3">
                <div className="flex text-gold-500">
                  {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={18} />)}
                </div>
                <span className="font-bold text-slate-700 tracking-wide text-sm">4.9/5</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review, index) => (
              <motion.div 
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="bg-stone-50 p-8 border-l-2 border-brick-400 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center font-bold text-brick-700 font-condensed text-lg mr-3">
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase text-slate-800 tracking-wider">{review.author}</h4>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wide">{review.date}</span>
                  </div>
                </div>
                <div className="flex text-gold-500 mb-4 text-xs">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} fill="currentColor" size={12} />)}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed font-light italic">&quot;{review.text}&quot;</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Split Section */}
      <section className="py-0">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative h-[450px] group overflow-hidden cursor-pointer">
            <KenBurnsImage
              src="https://www.kerenia.fr/wp-content/uploads/2020/07/piscine-kerenia.jpg"
              alt="Piscine Ker Enia"
              className="w-full h-full"
              duration={20}
              direction="left"
              overlay={false}
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500 flex flex-col items-center justify-center text-center p-8">
              <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
                <h3 className="text-white font-condensed font-light text-4xl uppercase mb-4 drop-shadow-md tracking-[0.2em]">Piscine</h3>
                <p className="text-white mb-8 max-w-sm font-light drop-shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">Venez vous détendre autour de notre piscine chauffée.</p>
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
                  <Link href="/appartements" className="relative overflow-hidden bg-white text-brick-900 px-8 py-3 font-condensed font-bold uppercase tracking-[0.2em] text-xs hover:bg-brick-700 hover:text-white transition-colors shadow-lg inline-block">
                    RESERVER
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
          <div className="relative h-[450px] group overflow-hidden cursor-pointer">
            <KenBurnsImage
              src="https://www.kerenia.fr/wp-content/uploads/2017/05/Villa_Arnaga.jpg"
              alt="Villa Arnaga Cambo"
              className="w-full h-full"
              duration={22}
              direction="right"
              overlay={false}
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500 flex flex-col items-center justify-center text-center p-8">
              <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}>
                <h3 className="text-white font-condensed font-light text-4xl uppercase mb-4 drop-shadow-md tracking-[0.2em]">Autour de nous</h3>
                <p className="text-white mb-8 max-w-sm font-light drop-shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">Le Pays basque s&apos;offre à vous.</p>
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
                  <Link href="/autour-de-nous" className="relative overflow-hidden glass-dark border border-white text-white px-8 py-3 font-condensed font-bold uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-brick-800 transition-colors inline-block">
                    DÉCOUVRIR
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeContent;
