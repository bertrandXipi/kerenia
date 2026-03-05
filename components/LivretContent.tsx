'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, Tv, Coffee, Map, ChevronDown, Phone, Wind } from 'lucide-react';
import { useLocale } from './LocaleProvider';
import { LIVRET_DATA } from '@/lib/data';

interface AccordionItemProps {
    title: string;
    icon: React.ReactNode;
    isOpen: boolean;
    onToggle: () => void;
    children: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, icon, isOpen, onToggle, children }) => (
    <div className="border border-brick-200 rounded-xl overflow-hidden bg-white">
        <button
            onClick={onToggle}
            className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-cream-50 transition-colors"
        >
            <div className="flex items-center gap-3">
                <span className="text-brick-600">{icon}</span>
                <span className="font-condensed font-bold text-lg uppercase tracking-wide text-brick-800">{title}</span>
            </div>
            <ChevronDown
                size={20}
                className={`text-brick-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            />
        </button>
        <AnimatePresence initial={false}>
            {isOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                >
                    <div className="px-6 pb-6 pt-2 border-t border-brick-100">
                        {children}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
);

const LivretAccordions: React.FC = () => {
    const { t, locale } = useLocale();
    const data = LIVRET_DATA[locale] || LIVRET_DATA['fr'];
    const [openSection, setOpenSection] = useState<string | null>(null);

    const toggle = (id: string) => setOpenSection(prev => prev === id ? null : id);

    return (
        <div className="space-y-4">
            {/* Nos Valeurs */}
            <AccordionItem
                title={t.livret.tabs.values}
                icon={<Leaf size={22} />}
                isOpen={openSection === 'values'}
                onToggle={() => toggle('values')}
            >
                <p className="text-brick-600 mb-6 leading-relaxed font-light">
                    {data.valeurs.engagement_environnemental}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {data.valeurs.consignes_eco.map((c, i) => (
                        <div key={i} className="flex items-start gap-3 p-3 bg-cream-50 rounded-lg">
                            <Leaf className="text-brick-500 shrink-0 mt-0.5" size={16} />
                            <p className="text-brick-700 text-sm font-light">{c}</p>
                        </div>
                    ))}
                </div>
                <p className="mt-6 text-center font-script text-xl text-brick-500">{data.valeurs.biodiversite}</p>
            </AccordionItem>

            {/* La Résidence */}
            <AccordionItem
                title={t.livret.tabs.residence}
                icon={<Tv size={22} />}
                isOpen={openSection === 'residence'}
                onToggle={() => toggle('residence')}
            >
                <div className="space-y-6">
                    {/* Règles */}
                    <div>
                        <h4 className="font-condensed font-bold text-sm uppercase tracking-wider text-brick-600 mb-3">{t.livret.sections.rules}</h4>
                        <ul className="space-y-2">
                            {data.la_residence.regles.map((r, i) => (
                                <li key={i} className="flex items-center gap-2 text-brick-700 text-sm font-light">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brick-400 shrink-0"></span>{r}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Climatisation */}
                    <div>
                        <h4 className="font-condensed font-bold text-sm uppercase tracking-wider text-brick-600 mb-3 flex items-center gap-2">
                            <Wind size={16} /> {t.livret.sections.ac}
                        </h4>
                        <p className="text-brick-600 text-sm font-light mb-3">{data.la_residence.climatisation_chauffage.type}</p>
                        <div className="bg-cream-50 p-3 rounded-lg space-y-1">
                            {Object.entries(data.la_residence.climatisation_chauffage.mode_emploi).map(([k, v]) => (
                                <div key={k} className="flex justify-between text-sm border-b border-brick-100 last:border-0 pb-1 last:pb-0">
                                    <span className="font-bold text-brick-800">{k}</span>
                                    <span className="text-brick-500 font-light">{v}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contacts */}
                    <div>
                        <h4 className="font-condensed font-bold text-sm uppercase tracking-wider text-brick-600 mb-3 flex items-center gap-2">
                            <Phone size={16} /> {t.livret.sections.usefulContacts}
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                            {Object.entries(data.la_residence.contacts_utiles).map(([name, phone]) => (
                                <div key={name} className="p-3 bg-brick-50 rounded-lg">
                                    <span className="text-brick-500 text-xs uppercase tracking-wider block mb-1">{name.replace(/_/g, ' ')}</span>
                                    <span className="font-bold text-sm text-brick-800">{Array.isArray(phone) ? phone.join(' / ') : phone}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* TV */}
                    <div>
                        <h4 className="font-condensed font-bold text-sm uppercase tracking-wider text-brick-600 mb-3 flex items-center gap-2">
                            <Tv size={16} /> {t.livret.sections.tv}
                        </h4>
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
                            {Object.entries(data.la_residence.chaines_tv).map(([num, name]) => (
                                <div key={num} className="flex items-center gap-2 p-1.5 border border-brick-100 rounded text-xs">
                                    <span className="bg-brick-800 text-white w-6 h-6 rounded shrink-0 flex items-center justify-center font-bold">{num}</span>
                                    <span className="text-brick-700 truncate" title={name}>{name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </AccordionItem>

            {/* Services */}
            <AccordionItem
                title={t.livret.tabs.services}
                icon={<Coffee size={22} />}
                isOpen={openSection === 'services'}
                onToggle={() => toggle('services')}
            >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                        <h4 className="font-bold text-brick-800 mb-3">Restauration</h4>
                        <div className="space-y-3 text-sm">
                            <div>
                                <p className="font-bold text-brick-700">Petit-déjeuner</p>
                                <p className="text-brick-500 font-light">{data.les_services.restauration.petit_dejeuner.description} — {data.les_services.restauration.petit_dejeuner.prix}</p>
                            </div>
                            <div>
                                <p className="font-bold text-brick-700">Point Boulangerie</p>
                                <p className="text-brick-500 font-light">{data.les_services.restauration.point_boulangerie.lieu} · {data.les_services.restauration.point_boulangerie.commande}</p>
                                <p className="text-brick-400 font-light text-xs">Dès {data.les_services.restauration.point_boulangerie.disponible_a_partir_de}</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold text-brick-800 mb-3">Buanderie</h4>
                        <p className="text-brick-400 text-xs italic mb-3">{data.les_services.buanderie_libre_service.localisation}</p>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between"><span className="text-brick-600 font-light">Lave-linge</span><span className="font-bold text-brick-800">{data.les_services.buanderie_libre_service.lave_linge.prix}</span></div>
                            <div className="flex justify-between"><span className="text-brick-600 font-light">Sèche-linge</span><span className="font-bold text-brick-800">{data.les_services.buanderie_libre_service.seche_linge.prix}</span></div>
                            <div className="flex justify-between"><span className="text-brick-600 font-light">Dosette lessive</span><span className="font-bold text-brick-800">{data.les_services.buanderie_libre_service.dosette_lessive.prix}</span></div>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold text-brick-800 mb-3">Nettoyage & Linge</h4>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between"><span className="text-brick-600 font-light">Draps ({data.les_services.nettoyage_a_la_demande.renouvellement_draps.pour})</span><span className="font-bold text-brick-800">{data.les_services.nettoyage_a_la_demande.renouvellement_draps.prix}</span></div>
                            <div className="flex justify-between"><span className="text-brick-600 font-light">Linge de toilette</span><span className="font-bold text-brick-800">{data.les_services.nettoyage_a_la_demande.renouvellement_linge_toilette.prix}</span></div>
                            <div className="flex justify-between"><span className="text-brick-600 font-light">Ménage</span><span className="font-bold text-brick-800">{data.les_services.nettoyage_a_la_demande.menage_appartement}</span></div>
                        </div>
                    </div>
                </div>
            </AccordionItem>

            {/* Escapades */}
            <AccordionItem
                title={t.livret.tabs.getaways}
                icon={<Map size={22} />}
                isOpen={openSection === 'getaways'}
                onToggle={() => toggle('getaways')}
            >
                <div className="space-y-6">
                    <div>
                        <h4 className="font-condensed font-bold text-sm uppercase tracking-wider text-brick-600 mb-3">À Cambo-les-Bains</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {data.les_escapades.a_cambo_les_bains.map((l) => (
                                <div key={l.id} className="p-4 bg-cream-50 rounded-lg">
                                    <p className="font-bold text-brick-800 mb-1">{l.nom}</p>
                                    <p className="text-brick-600 text-sm font-light leading-relaxed">{l.description}</p>
                                    {l.avantage_ker_enia && <span className="inline-block mt-2 px-2 py-0.5 bg-brick-100 text-brick-700 text-xs rounded-full font-bold">{l.avantage_ker_enia}</span>}
                                    {l.tel && <p className="text-brick-400 text-xs mt-2 flex items-center gap-1"><Phone size={10} />{l.tel}</p>}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-condensed font-bold text-sm uppercase tracking-wider text-brick-600 mb-3">Restaurants Coups de ❤️</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {data.les_escapades.restaurants.map((r, i) => (
                                <div key={i} className="flex justify-between items-center p-3 bg-cream-50 rounded-lg">
                                    <div><p className="font-bold text-brick-800 text-sm">{r.nom}</p><p className="text-brick-400 text-xs">{r.type}</p></div>
                                    <a href={`tel:${r.tel}`} className="text-brick-600 text-xs bg-white px-2 py-1 rounded-full font-bold hover:bg-brick-50 transition-colors">{r.tel}</a>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-condensed font-bold text-sm uppercase tracking-wider text-brick-600 mb-3">Jours de Marchés</h4>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                            {data.les_escapades.marches.map((m, i) => (
                                <div key={i} className="border-l-2 border-brick-200 pl-3 py-1">
                                    <span className="font-bold text-brick-800 text-sm block">{m.lieu}</span>
                                    <span className="text-brick-500 font-light text-xs">{m.jour}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </AccordionItem>
        </div>
    );
};

export default LivretAccordions;
