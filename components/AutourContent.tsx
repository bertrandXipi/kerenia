'use client';

import React from 'react';
import { ACTIVITIES } from '@/lib/constants';
import { motion } from 'framer-motion';
import { ExternalLink, MapPin } from 'lucide-react';

const AutourContent: React.FC = () => {
  return (
    <div className="pb-20 pt-24 bg-cream-50">
      <div className="bg-cream-100 py-16 mb-16 border-b border-brick-200">
        <div className="container mx-auto px-6 text-center">
          <h3 className="font-condensed text-brick-600 uppercase tracking-widest text-sm font-bold mb-2">Le Pays Basque</h3>
          <h1 className="font-script text-5xl md:text-6xl text-brick-600 mb-6">S&apos;offre à vous</h1>
          <div className="w-16 h-1 bg-brick-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">
            Peu de destinations ont le privilège d&apos;offrir autant de possibilités.
            Retrouvez ici les coups de cœur de Ker Enia autour de Cambo-les-Bains.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-16">
          {ACTIVITIES.map((activity, index) => (
            <motion.div 
              key={activity.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col md:flex-row h-full md:h-[400px] group"
            >
              <div className="md:w-1/2 h-64 md:h-full relative overflow-hidden">
                <img 
                  src={activity.imageUrl} 
                  alt={activity.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-cream-50 border border-brick-200 border-l-0">
                <h2 className="font-script text-4xl text-brick-600 mb-4">{activity.title}</h2>
                <div className="w-12 h-1 bg-brick-500 mb-6"></div>
                <p className="text-slate-600 text-lg leading-relaxed mb-8 font-light">
                  {activity.description}
                </p>
                {activity.link && activity.link !== '#' && (
                  <a 
                    href={activity.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-brick-600 font-bold hover:text-brick-800 transition-colors font-condensed uppercase tracking-wider text-sm border-b border-brick-600 pb-1 self-start"
                  >
                    DÉCOUVRIR <ExternalLink size={16} className="ml-2" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 bg-brick-800 rounded-sm text-white relative overflow-hidden shadow-2xl border-t-4 border-brick-500">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image des thermes */}
            <div className="relative h-72 lg:h-auto overflow-hidden">
              <img 
                src="https://www.kerenia.fr/wp-content/uploads/2017/05/thermes-de-cambo_chaine-thermale-du-soleil_13.jpg?id=1329"
                alt="Thermes de Cambo-les-Bains"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-brick-800/40 hidden lg:block"></div>
            </div>

            {/* Contenu */}
            <div className="p-10 md:p-16 flex flex-col justify-center text-center lg:text-left">
              <MapPin className="w-12 h-12 text-brick-400 mb-6 mx-auto lg:mx-0" />
              <h2 className="font-script text-4xl md:text-5xl mb-6 text-brick-300">Un emplacement idéal</h2>
              <p className="max-w-2xl text-brick-100 text-lg mb-8 font-light">
                Située à 5 minutes à pied du centre de Cambo-les-Bains et à proximité immédiate des navettes thermales.
                Vous êtes à 20 minutes de Bayonne et 30 minutes des plages de Biarritz.
              </p>

              {/* Logo Thermes partenaire */}
              <div className="flex items-center gap-4 pt-6 border-t border-brick-700 justify-center lg:justify-start">
                <img 
                  src="https://www.kerenia.fr/wp-content/uploads/2020/05/LOGO-THERMES.jpg"
                  alt="Logo Thermes de Cambo-les-Bains"
                  className="h-16 w-auto rounded bg-white p-1"
                />
                <div className="text-left">
                  <p className="text-brick-200 font-condensed font-bold uppercase tracking-wider text-xs">Partenaire</p>
                  <p className="text-white font-medium">Thermes de Cambo-les-Bains</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutourContent;
