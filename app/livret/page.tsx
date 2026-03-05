'use client';

import React from 'react';
import { motion } from 'framer-motion';
import LivretContent from '@/components/LivretContent';
import { useLocale } from '@/components/LocaleProvider';

export default function LivretPage() {
    const { t } = useLocale();

    return (
        <div className="min-h-screen bg-cream-50 pt-20">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-brick-900">
                    {/* Fallback pattern since we don't have a specific hero image yet */}
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
                </div>

                <div className="relative z-10 text-center px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-5xl md:text-7xl font-condensed font-bold text-white uppercase tracking-tight mb-6 drop-shadow-lg">
                            {t.livret.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-cream-50 font-script max-w-2xl mx-auto drop-shadow-md">
                            {t.livret.subtitle}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content Component Tabs */}
            <LivretContent />
        </div>
    );
}
