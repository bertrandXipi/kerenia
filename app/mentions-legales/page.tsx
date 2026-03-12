import React from 'react';
import { Metadata } from 'next';
import Layout from '@/components/Layout';

export const metadata: Metadata = {
  title: 'Mentions Légales | Résidence Ker Enia',
  description: 'Mentions légales de la Résidence Ker Enia, résidence de tourisme à Cambo-les-Bains.',
  alternates: {
    canonical: 'https://www.kerenia.fr/mentions-legales',
  },
  robots: {
    index: false,
  },
};

export default function MentionsLegalesPage() {
    return (
        <Layout>
            <div className="pt-28 pb-24 bg-cream-50 min-h-screen">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h1 className="font-script text-5xl md:text-6xl text-brick-600 mb-8 text-center">
                        Mentions Légales
                    </h1>

                    <div className="prose prose-brick max-w-none text-slate-700 font-light leading-relaxed space-y-8">
                        <section className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-brick-100">
                            <p className="mb-6">
                                Vous êtes actuellement connecté au site kerenia.fr, édité par la résidence Ker Enia
                            </p>
                            <ul className="space-y-2 mb-6 list-none p-0">
                                <li><strong>Dénomination sociale :</strong> Ker Enia</li>
                                <li><strong>Adresse :</strong> 9 Rue de la Bergerie 64250 Cambo-les-Bains</li>
                                <li><strong>Direction de la publication :</strong> Stéphanie Bergeret</li>
                                <li><strong>Tel :</strong> +33 (0) 559 647 200</li>
                                <li><strong>Siret :</strong> </li>
                                <li><strong>Capital social :</strong> </li>
                            </ul>
                            <p>
                                L’éditeur s’engage à respecter l’ensemble des lois concernant la mise en place et l’activité d’un site Internet.
                            </p>
                        </section>

                        <section className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-brick-100">
                            <h2 className="font-condensed font-bold text-xl uppercase tracking-wider text-brick-800 mb-4">Création & développement</h2>
                            <p>
                                <a href="https://www.xipirons.com" target="_blank" rel="noopener noreferrer" className="text-brick-600 hover:text-brick-800 transition-colors font-medium">
                                    www.xipirons.com
                                </a>
                            </p>
                        </section>

                        <section className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-brick-100">
                            <h2 className="font-condensed font-bold text-xl uppercase tracking-wider text-brick-800 mb-4">Hébergeur</h2>
                            <p className="mb-4">
                                <strong>Google Cloud Platform</strong><br />
                                Google Ireland Limited<br />
                                Gordon House, Barrow Street, Dublin 4, Irlande
                            </p>
                        </section>

                        <section className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-brick-100">
                            <h2 className="font-condensed font-bold text-xl uppercase tracking-wider text-brick-800 mb-4">Propriété Intellectuelle</h2>
                            <p>
                                La structure, la mise en page, la charte graphique, les textes, la base de données, les logos, les images, les éléments graphiques,
                                les photos et tout autre élément composant ce site sont protégés par le droit d’auteur et sont la propriété exclusive de KER ENIA.
                                Toute représentation totale ou partielle de ce site, par quelque procédé que ce soit sans autorisation est interdite et constituerait un délit.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
