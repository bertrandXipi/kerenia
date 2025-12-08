import React from 'react';
import { ACTIVITIES } from '../constants';
import { motion } from 'framer-motion';
import { ExternalLink, MapPin } from 'lucide-react';

const Surroundings: React.FC = () => {
  return (
    <div className="pb-20">
      <div className="bg-stone-50 py-16 mb-16 border-b border-stone-200">
        <div className="container mx-auto px-6 text-center">
            <h3 className="font-condensed text-brick-600 uppercase tracking-widest text-sm font-bold mb-2">Le Pays Basque</h3>
            <h1 className="font-script text-5xl md:text-6xl text-brick-800 mb-6">S'offre à vous</h1>
            <div className="w-16 h-1 bg-brick-600 mx-auto mb-8"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">
            Peu de destinations ont le privilège d’offrir autant de possibilités.
            Retrouvez ici les coups de cœur de Ker Enia autour de Cambo-les-Bains.
            </p>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-16">
          {ACTIVITIES.map((activity, index) => (
            <motion.div 
              key={activity.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col md:flex-row h-full md:h-[400px] group"
            >
              <div className="md:w-1/2 h-64 md:h-full relative overflow-hidden">
                <img 
                  src={activity.imageUrl} 
                  alt={activity.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white border border-stone-100 border-l-0">
                <h2 className="font-condensed font-bold text-3xl text-brick-800 mb-4 uppercase">{activity.title}</h2>
                <div className="w-12 h-1 bg-brick-400 mb-6"></div>
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

        {/* Local Map / Location Context */}
        <div className="mt-20 bg-brick-800 rounded-sm p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
                <MapPin className="w-12 h-12 mx-auto text-brick-400 mb-6" />
                <h2 className="font-condensed font-bold text-3xl md:text-4xl mb-6 uppercase tracking-wide">Un emplacement idéal</h2>
                <p className="max-w-2xl mx-auto text-brick-100 text-lg mb-8 font-light">
                    Située à 5 minutes à pied du centre de Cambo-les-Bains et à proximité immédiate des navettes thermales.
                    Vous êtes à 20 minutes de Bayonne et 30 minutes des plages de Biarritz.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Surroundings;