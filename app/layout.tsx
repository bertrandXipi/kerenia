import type { Metadata } from 'next';
import { Inter, Oswald, Dancing_Script } from 'next/font/google';
import './globals.css';
import TransitionProvider from '@/components/TransitionProvider';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const oswald = Oswald({ 
  subsets: ['latin'],
  variable: '--font-oswald',
});

const dancingScript = Dancing_Script({ 
  subsets: ['latin'],
  variable: '--font-dancing',
});

export const metadata: Metadata = {
  title: 'Résidence Ker Enia - Cambo-les-Bains | Appartements de tourisme au Pays Basque',
  description: 'Résidence de tourisme 3 étoiles à Cambo-les-Bains. Appartements tout confort avec piscine chauffée au cœur du Pays Basque. Idéal pour cure thermale et tourisme.',
  keywords: 'résidence tourisme, Cambo-les-Bains, Pays Basque, appartement vacances, piscine chauffée, cure thermale',
  openGraph: {
    title: 'Résidence Ker Enia - Cambo-les-Bains',
    description: 'L\'expérience bien-être au Pays Basque. Appartements tout confort avec piscine chauffée.',
    images: ['https://www.kerenia.fr/wp-content/uploads/2020/07/piscine-kerenia.jpg'],
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${oswald.variable} ${dancingScript.variable}`}>
      <body className="bg-white text-slate-700 font-sans antialiased">
        <TransitionProvider>
          {children}
        </TransitionProvider>
      </body>
    </html>
  );
}
