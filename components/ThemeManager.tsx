'use client';

import { useEffect } from 'react';
import { getSiteConfig, SiteConfig } from '@/lib/site-config';

export default function ThemeManager() {
    const config = getSiteConfig();

    useEffect(() => {
        const root = document.documentElement;
        const { theme } = config;

        // Set colors
        Object.entries(theme.colors).forEach(([paletteName, palette]) => {
            Object.entries(palette).forEach(([shade, value]) => {
                root.style.setProperty(`--color-${paletteName}-${shade}`, value);
            });
        });

        // Set fonts
        Object.entries(theme.fonts).forEach(([fontName, value]) => {
            root.style.setProperty(`--font-${fontName}`, value);
        });

    }, [config]);

    return null;
}
