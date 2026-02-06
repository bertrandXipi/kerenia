'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { APARTMENTS, AMENITIES } from '@/lib/constants';
import { Check } from 'lucide-react';

const AppartementsContent: React.FC = () => {
  return (
    <div className="pb-20 pt-24">
      {/* Header */}
      <div className="bg-stone-50 py-16 mb-16 border-b border-stone-200">
        <div className="container mx-auto px-6 text-center">
          <h3 className="font-condensed text-brick-600 uppercase tracking-widest text-sm font-bold mb-2">Le confort d&apos;un appartement</h3>
          <h1 className="font-script text-5xl md:text-6xl text-brick-800 mb-6">Comme à la maison</h1>
          <div className="w-16 h-1 bg-brick-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">
            16 appartements de 25m² à 45m² avec terrasses, entièrement rénovés. Une décoration soignée dans une atmosphère chaleureuse.
          </p>
        </div>
      </div>

      {/* Global Amenities */}
      <div className="container mx-auto px-6 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {AMENITIES.map((amenity, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-6 border border-stone-100 rounded-lg hover:shadow-md transition-shadow">
              <amenity.icon className="w-8 h-8 text-brick-500 mb-3" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700">{amenity.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Listings */}
      <div className="container mx-auto px-6 space-y-24">
        {APARTMENTS.map((apt, index) => (
          <motion.div 
            key={apt.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-10 items-center`}
          >
            <div className="w-full md:w-1/2">
              <div className="relative shadow-xl">
                <img 
                  src={apt.imageUrl} 
                  alt={apt.title} 
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute top-4 left-4 w-full h-full border-2 border-brick-600 -z-10 hidden md:block"></div>
              </div>
            </div>

            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="font-condensed font-bold text-3xl md:text-4xl text-brick-800 uppercase">{apt.title}</h2>
              <div className="flex gap-4 text-sm font-bold text-brick-500 uppercase tracking-wider border-b border-stone-200 pb-4">
                <span>{apt.size}</span>
                <span className="text-stone-300">|</span>
                <span>{apt.capacity}</span>
                <span className="text-stone-300">|</span>
                <span>Dès {apt.priceFrom}</span>
              </div>
              <p className="text-slate-600 leading-relaxed text-lg font-light">
                {apt.description}
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {apt.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-700 text-sm">
                    <Check size={14} className="text-brick-500" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="pt-6">
                <Link 
                  href="/contact" 
                  className="inline-block bg-brick-600 text-white px-8 py-4 font-condensed font-bold uppercase tracking-wider hover:bg-brick-700 transition-colors shadow-lg rounded-sm"
                >
                  RÉSERVER CE SÉJOUR
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* PMR Note */}
      <div className="container mx-auto px-6 mt-24">
        <div className="bg-stone-100 p-8 text-center border-l-4 border-brick-600">
          <h3 className="font-condensed font-bold text-2xl text-brick-800 mb-2 uppercase">Accessibilité</h3>
          <p className="text-slate-600 font-light">
            Nous disposons de deux appartements en rez-de-chaussée spécialement aménagés pour accueillir les personnes à mobilité réduite (PMR).
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppartementsContent;
