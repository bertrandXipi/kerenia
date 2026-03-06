import type { Metadata } from 'next';
import { Inter, Oswald, Dancing_Script, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import TransitionProvider from '@/components/TransitionProvider';
import { LocaleProvider } from '@/components/LocaleProvider';
import CookieManager from '@/components/CookieManager';
import ThemeManager from '@/components/ThemeManager';
import { getSiteConfig } from '@/lib/site-config';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
});

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

export async function generateMetadata(): Promise<Metadata> {
  const config = getSiteConfig();

  return {
    metadataBase: new URL('https://www.kerenia.fr'),
    title: config.name,
    description: config.description,
    keywords: config.keywords,
    openGraph: {
      title: config.name,
      description: config.description,
      url: 'https://www.kerenia.fr',
      siteName: config.name,
      locale: 'fr_FR',
      type: 'website',
      images: [
        {
          url: '/images/remote/piscine-kerenia.webp',
          width: 1200,
          height: 630,
          alt: config.name,
        },
      ],
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${oswald.variable} ${dancingScript.variable} ${cormorant.variable}`}>
      <head>
      </head>
      <body className="bg-cream-50 text-slate-700 font-sans antialiased">
        <ThemeManager />
        <LocaleProvider>
          <TransitionProvider>
            {children}
          </TransitionProvider>
          <CookieManager />
        </LocaleProvider>
      </body>
    </html>
  );
}
