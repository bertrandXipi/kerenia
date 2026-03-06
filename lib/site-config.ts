export interface SiteConfig {
    id: string;
    name: string;
    tagline: string;
    description: string;
    keywords: string;
    logo: {
        dark: string;
        light: string;
    };
    contact: {
        address: string;
        phone: string;
        email: string;
        hours: string;
    };
    theme: {
        colors: {
            cream: Record<number, string>;
            sage: Record<number, string>;
            brick: Record<number, string>;
            gold: Record<number, string>;
        };
        fonts: {
            sans: string;
            serif: string;
            condensed: string;
            script: string;
        };
    };
}

export const kereniaConfig: SiteConfig = {
    id: 'kerenia',
    name: 'Résidence Ker Enia - Cambo-les-Bains',
    tagline: 'Ker Enia a Cambo les Bains',
    description: 'Résidence de tourisme 3 étoiles à Cambo-les-Bains. Appartements tout confort avec piscine chauffée au cœur du Pays Basque. Idéal pour cure thermale et tourisme.',
    keywords: 'résidence tourisme, Cambo-les-Bains, Pays Basque, appartement vacances, piscine chauffée, cure thermale',
    logo: {
        dark: '/images/logo-dark.svg',
        light: '/images/logo-white.svg',
    },
    contact: {
        address: '123 Route des Thermes, 64250 Cambo-les-Bains',
        phone: '05 59 00 00 00',
        email: 'contact@kerenia.fr',
        hours: 'Lun - Dim : 8h - 20h',
    },
    theme: {
        colors: {
            cream: {
                50: '#fdfcfa',
                100: '#faf8f5',
                200: '#f5f1eb',
                300: '#ebe4da',
                400: '#ddd2c3',
            },
            sage: {
                50: '#f2f7f4',
                100: '#e1ede6',
                200: '#c5dccf',
                300: '#9dc2b0',
                400: '#74a28d',
                500: '#548670',
                600: '#416b58',
                700: '#365648',
                800: '#2d463b',
                900: '#263a32',
            },
            brick: {
                50: '#fbf5f3',
                100: '#f5e8e4',
                200: '#edd2c9',
                300: '#e0b2a3',
                400: '#ce856f',
                500: '#9f341a',
                600: '#7d2914',
                700: '#632110',
                800: '#521d0f',
                900: '#421a0f',
            },
            gold: {
                100: '#faf6f0',
                200: '#f0e6d2',
                300: '#e8d7b8',
                400: '#dcc89a',
                500: '#D4A574',
                600: '#c89555',
                700: '#b8803d',
                800: '#9a6a2f',
            },
        },
        fonts: {
            sans: 'var(--font-inter)',
            serif: 'var(--font-cormorant)',
            condensed: 'var(--font-oswald)',
            script: 'var(--font-dancing)',
        },
    },
};

export const oceanConfig: SiteConfig = {
    id: 'ocean',
    name: 'Ocean Residency',
    tagline: 'Stay by the waves',
    description: 'Experience the premium oceanfront living with our modern apartments.',
    keywords: 'ocean residency, biarritz, luxury apartments, beach vibes',
    logo: {
        dark: '/images/logo-dark.svg', // Reuse existing for demo
        light: '/images/logo-white.svg',
    },
    contact: {
        address: '45 Blue Coast, 64200 Biarritz',
        phone: '05 59 11 11 11',
        email: 'contact@ocean.fr',
        hours: '24/7',
    },
    theme: {
        colors: {
            cream: {
                50: '#f0f9ff',
                100: '#e0f2fe',
                200: '#bae6fd',
                300: '#7dd3fc',
                400: '#38bdf8',
            },
            sage: {
                50: '#f1f5f9',
                100: '#f1f5f9',
                200: '#e2e8f0',
                300: '#cbd5e1',
                400: '#94a3b8',
                500: '#64748b',
                600: '#475569',
                700: '#334155',
                800: '#1e293b',
                900: '#0f172a',
            },
            brick: {
                50: '#f0fdf4',
                100: '#dcfce7',
                200: '#bbf7d0',
                300: '#86efac',
                400: '#4ade80',
                500: '#22c55e',
                600: '#16a34a',
                700: '#15803d',
                800: '#166534',
                900: '#14532d',
            },
            gold: {
                100: '#fefce8',
                200: '#fef9c3',
                300: '#fef08a',
                400: '#facc15',
                500: '#eab308',
                600: '#ca8a04',
                700: '#a16207',
                800: '#854d0e',
            },
        },
        fonts: {
            sans: 'var(--font-inter)',
            serif: 'var(--font-serif)',
            condensed: 'var(--font-sans)',
            script: 'var(--font-sans)',
        },
    },
};

export const sites: Record<string, SiteConfig> = {
    kerenia: kereniaConfig,
    ocean: oceanConfig,
};

export function getSiteConfig(): SiteConfig {
    const siteId = process.env.NEXT_PUBLIC_SITE_ID || 'kerenia';
    return sites[siteId] || kereniaConfig;
}
