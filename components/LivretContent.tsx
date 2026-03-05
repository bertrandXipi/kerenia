'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, Info, Coffee, Map, Tv, Wind, Phone, Car } from 'lucide-react';
import { useLocale } from './LocaleProvider';
import { LIVRET_DATA } from '@/lib/data';

const LivretContent: React.FC = () => {
    const { t, locale } = useLocale();
    const data = LIVRET_DATA[locale] || LIVRET_DATA['fr'];
    const [activeTab, setActiveTab] = useState<'welcome' | 'values' | 'residence' | 'services' | 'getaways'>('welcome');

    const tabs = [
        { id: 'welcome', label: t.livret.tabs.welcome, icon: <Info size={20} /> },
        { id: 'values', label: t.livret.tabs.values, icon: <Leaf size={20} /> },
        { id: 'residence', label: t.livret.tabs.residence, icon: <Tv size={20} /> },
        { id: 'services', label: t.livret.tabs.services, icon: <Coffee size={20} /> },
        { id: 'getaways', label: t.livret.tabs.getaways, icon: <Map size={20} /> },
    ] as const;

    const renderWelcome = () => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
        >
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-brick-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brick-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
                <h2 className="text-3xl font-script text-brick-600 mb-6">{data.mot_de_bienvenue.salutation_basque}</h2>
                <p className="text-brick-800 leading-relaxed text-lg mb-8 relative z-10">
                    {data.mot_de_bienvenue.texte}
                </p>
                <div className="text-right">
                    <p className="font-condensed font-bold uppercase tracking-widest text-brick-400 text-sm">
                        {data.mot_de_bienvenue.signataire}
                    </p>
                    <p className="text-brick-300 text-sm italic">{data.residence} - {data.localisation}</p>
                </div>
            </div>
        </motion.div>
    );

    const renderValues = () => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-8"
        >
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-brick-100">
                <h3 className="text-2xl font-condensed font-bold text-brick-800 uppercase tracking-wide mb-4">
                    {t.livret.sections.eco}
                </h3>
                <p className="text-brick-600 mb-8 leading-relaxed">
                    {data.valeurs.engagement_environnemental}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {data.valeurs.consignes_eco.map((consigne, idx) => (
                        <div key={idx} className="flex items-start gap-4 p-4 bg-cream-50 rounded-xl">
                            <Leaf className="text-brick-500 shrink-0 mt-1" size={20} />
                            <p className="text-brick-800 font-light">{consigne}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-8 p-6 bg-brick-50 rounded-xl text-center">
                    <p className="font-script text-2xl text-brick-600">{data.valeurs.biodiversite}</p>
                </div>
            </div>
        </motion.div>
    );

    const renderResidence = () => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Règles */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-brick-100">
                    <h3 className="text-xl font-condensed font-bold text-brick-800 uppercase tracking-wide mb-6">
                        {t.livret.sections.rules}
                    </h3>
                    <ul className="space-y-4">
                        {data.la_residence.regles.map((regle, idx) => (
                            <li key={idx} className="flex items-center gap-3 text-brick-700 font-light">
                                <span className="w-1.5 h-1.5 rounded-full bg-brick-400 shrink-0"></span>
                                {regle}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* CVC */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-brick-100">
                    <h3 className="text-xl font-condensed font-bold text-brick-800 uppercase tracking-wide mb-6 flex items-center gap-3">
                        <Wind className="text-brick-400" size={24} />
                        {t.livret.sections.ac}
                    </h3>
                    <p className="text-brick-600 font-light mb-4">{data.la_residence.climatisation_chauffage.type}</p>
                    <div className="bg-cream-50 p-4 rounded-xl space-y-2">
                        {Object.entries(data.la_residence.climatisation_chauffage.mode_emploi).map(([key, val]) => (
                            <div key={key} className="flex justify-between items-center border-b border-brick-100 last:border-0 pb-2 last:pb-0">
                                <span className="font-condensed font-bold text-brick-800">{key}</span>
                                <span className="text-brick-600 text-sm font-light text-right">{val}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contacts */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-brick-100 md:col-span-2">
                    <h3 className="text-xl font-condensed font-bold text-brick-800 uppercase tracking-wide mb-6 flex items-center gap-3">
                        <Phone className="text-brick-400" size={24} />
                        {t.livret.sections.usefulContacts}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {Object.entries(data.la_residence.contacts_utiles).map(([name, phone]) => (
                            <div key={name} className="flex flex-col p-4 bg-brick-50 rounded-xl">
                                <span className="text-brick-500 text-sm uppercase tracking-wider mb-2">{name.replace(/_/g, ' ')}</span>
                                <span className="font-condensed font-bold text-lg text-brick-800">
                                    {Array.isArray(phone) ? phone.join(' / ') : phone}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* TV */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-brick-100 md:col-span-2">
                    <h3 className="text-xl font-condensed font-bold text-brick-800 uppercase tracking-wide mb-6 flex items-center gap-3">
                        <Tv className="text-brick-400" size={24} />
                        {t.livret.sections.tv}
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                        {Object.entries(data.la_residence.chaines_tv).map(([num, name]) => (
                            <div key={num} className="flex items-center gap-3 p-2 border border-brick-100 rounded-lg hover:border-brick-300 transition-colors">
                                <span className="bg-brick-800 text-white w-8 h-8 rounded shrink-0 flex items-center justify-center font-bold text-sm">
                                    {num}
                                </span>
                                <span className="text-brick-700 text-sm truncate" title={name}>{name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );

    const renderServices = () => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
        >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Restauration */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-brick-100 flex flex-col h-full">
                    <div className="w-12 h-12 bg-brick-50 rounded-full flex items-center justify-center mb-6 text-brick-600">
                        <Coffee size={24} />
                    </div>
                    <h3 className="text-xl font-condensed font-bold text-brick-800 uppercase tracking-wide mb-6">Restauration</h3>

                    <div className="space-y-6 flex-grow">
                        <div>
                            <p className="font-bold text-brick-800 mb-1">Petit-déjeuner</p>
                            <p className="text-brick-600 font-light text-sm">{data.les_services.restauration.petit_dejeuner.description}</p>
                            <p className="text-brick-500 font-bold mt-1">{data.les_services.restauration.petit_dejeuner.prix}</p>
                        </div>
                        <div className="h-px w-full bg-brick-100"></div>
                        <div>
                            <p className="font-bold text-brick-800 mb-1">Point Boulangerie</p>
                            <p className="text-brick-600 font-light text-sm">{data.les_services.restauration.point_boulangerie.lieu} - {data.les_services.restauration.point_boulangerie.commande}</p>
                            <p className="text-brick-500 font-light text-sm mt-1">Dès {data.les_services.restauration.point_boulangerie.disponible_a_partir_de}</p>
                        </div>
                    </div>
                </div>

                {/* Buanderie */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-brick-100 flex flex-col h-full">
                    <div className="w-12 h-12 bg-brick-50 rounded-full flex items-center justify-center mb-6 text-brick-600">
                        <Car size={24} /> {/* Placeholder icon */}
                    </div>
                    <h3 className="text-xl font-condensed font-bold text-brick-800 uppercase tracking-wide mb-6">Buanderie</h3>
                    <p className="text-brick-500 text-sm mb-6 italic">{data.les_services.buanderie_libre_service.localisation}</p>

                    <div className="space-y-4 flex-grow">
                        <div className="flex justify-between items-center">
                            <span className="text-brick-700 font-light">Lave-linge</span>
                            <span className="font-bold text-brick-800">{data.les_services.buanderie_libre_service.lave_linge.prix}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-brick-700 font-light">Sèche-linge</span>
                            <span className="font-bold text-brick-800">{data.les_services.buanderie_libre_service.seche_linge.prix}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-brick-700 font-light">Dosette lessive</span>
                            <span className="font-bold text-brick-800">{data.les_services.buanderie_libre_service.dosette_lessive.prix}</span>
                        </div>
                    </div>
                </div>

                {/* Nettoyage */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-brick-100 flex flex-col h-full">
                    <div className="w-12 h-12 bg-brick-50 rounded-full flex items-center justify-center mb-6 text-brick-600">
                        <Leaf size={24} />
                    </div>
                    <h3 className="text-xl font-condensed font-bold text-brick-800 uppercase tracking-wide mb-6">Nettoyage & Linge</h3>

                    <div className="space-y-4 flex-grow">
                        <div className="flex flex-col">
                            <span className="text-brick-700 font-bold text-sm">Renouvellement Draps</span>
                            <span className="text-brick-500 font-light text-xs mb-1">{data.les_services.nettoyage_a_la_demande.renouvellement_draps.pour}</span>
                            <span className="font-condensed text-brick-800">{data.les_services.nettoyage_a_la_demande.renouvellement_draps.prix}</span>
                        </div>
                        <div className="h-px w-full bg-brick-100"></div>
                        <div className="flex flex-col">
                            <span className="text-brick-700 font-bold text-sm">Draps de Bain</span>
                            <span className="text-brick-500 font-light text-xs mb-1">{data.les_services.nettoyage_a_la_demande.renouvellement_linge_toilette.pour}</span>
                            <span className="font-condensed text-brick-800">{data.les_services.nettoyage_a_la_demande.renouvellement_linge_toilette.prix}</span>
                        </div>
                        <div className="h-px w-full bg-brick-100"></div>
                        <div className="flex justify-between items-center">
                            <span className="text-brick-700 font-light text-sm">Ménage Appartement</span>
                            <span className="font-bold text-brick-800">{data.les_services.nettoyage_a_la_demande.menage_appartement}</span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );

    const renderGetaways = () => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-8"
        >
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-brick-100">
                <h3 className="text-2xl font-condensed font-bold text-brick-800 uppercase tracking-wide mb-8">À Cambo-les-Bains</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.les_escapades.a_cambo_les_bains.map((lieu) => (
                        <div key={lieu.id} className="p-6 border border-brick-100 rounded-xl hover:shadow-md transition-shadow bg-cream-50/50">
                            <h4 className="font-bold text-brick-800 mb-3">{lieu.nom}</h4>
                            <p className="text-brick-600 font-light text-sm mb-4 leading-relaxed">{lieu.description}</p>
                            {lieu.avantage_ker_enia && (
                                <div className="mt-auto inline-block px-3 py-1 bg-brick-100 text-brick-700 text-xs rounded-full font-bold mb-2">
                                    {lieu.avantage_ker_enia}
                                </div>
                            )}
                            {lieu.tel && <p className="text-brick-500 text-xs mt-auto flex items-center gap-2"><Phone size={12} />{lieu.tel}</p>}
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-brick-100">
                <h3 className="text-2xl font-condensed font-bold text-brick-800 uppercase tracking-wide mb-8">Un peu plus loin...</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {data.les_escapades.plus_loin.map((lieu) => (
                        <div key={lieu.id} className="p-6 border border-brick-100 rounded-xl hover:shadow-md transition-shadow">
                            <h4 className="font-bold text-brick-800 mb-3">{lieu.nom}</h4>
                            <p className="text-brick-600 font-light text-sm mb-4 leading-relaxed">{lieu.description}</p>
                            <div className="text-brick-400 text-xs mt-auto space-y-1">
                                {lieu.adresse && <p>{lieu.adresse}</p>}
                                {lieu.tel && <p className="flex items-center gap-2 mt-2"><Phone size={12} />{lieu.tel}</p>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-brick-100">
                    <h3 className="text-xl font-condensed font-bold text-brick-800 uppercase tracking-wide mb-6">Nos Restaurants Coups de ❤️</h3>
                    <div className="space-y-4">
                        {data.les_escapades.restaurants.map((resto, idx) => (
                            <div key={idx} className="flex justify-between items-center border-b border-brick-50 pb-3 last:border-0 last:pb-0">
                                <div>
                                    <p className="font-bold text-brick-800">{resto.nom}</p>
                                    <p className="text-brick-400 text-xs">{resto.type}</p>
                                </div>
                                <a href={`tel:${resto.tel}`} className="text-brick-600 hover:text-brick-800 bg-cream-50 px-3 py-1.5 rounded-full text-sm font-condensed font-bold transition-colors">
                                    {resto.tel}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-brick-100">
                    <h3 className="text-xl font-condensed font-bold text-brick-800 uppercase tracking-wide mb-6">Jours de Marchés</h3>
                    <div className="space-y-4">
                        {data.les_escapades.marches.map((marche, idx) => (
                            <div key={idx} className="flex flex-col border-l-2 border-brick-200 pl-4 py-1">
                                <span className="font-bold text-brick-800">{marche.lieu}</span>
                                <span className="text-brick-600 font-light text-sm">{marche.jour}</span>
                                {marche.adresse && <span className="text-brick-400 text-xs italic mt-1">{marche.adresse}</span>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );

    return (
        <div className="max-w-6xl mx-auto px-6 py-16 lg:py-24">
            {/* Tabs Navigation */}
            <div className="flex flex-wrapjustify-center gap-2 md:gap-4 mb-12">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as typeof activeTab)}
                        className={`flex items-center gap-2 px-6 py-3 rounded-full font-condensed font-bold text-sm uppercase tracking-wider transition-all duration-300 ${activeTab === tab.id
                                ? 'bg-brick-800 text-white shadow-md'
                                : 'bg-white text-brick-600 border border-brick-200 hover:border-brick-400 hover:bg-brick-50'
                            }`}
                    >
                        {tab.icon}
                        <span className="hidden sm:inline">{tab.label}</span>
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
                <div key={activeTab}>
                    {activeTab === 'welcome' && renderWelcome()}
                    {activeTab === 'values' && renderValues()}
                    {activeTab === 'residence' && renderResidence()}
                    {activeTab === 'services' && renderServices()}
                    {activeTab === 'getaways' && renderGetaways()}
                </div>
            </AnimatePresence>
        </div>
    );
};

export default LivretContent;
