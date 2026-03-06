'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { acceptCookies, rejectCookies } from '@/app/actions/cookie';
import { useLocale } from '@/components/LocaleProvider';

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(true);
    const { t } = useLocale();

    if (!t || !t.cookieConsent) return null;

    const handleAccept = async () => {
        setIsVisible(false);
        await acceptCookies();
        // Rafraîchit l'application coté client pour relire les cookies et potentiellement injecter les scripts GA si présents.
        window.location.reload();
    };

    const handleReject = async () => {
        setIsVisible(false);
        await rejectCookies();
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: 'spring', bounce: 0, duration: 0.6 }}
                    className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
                >
                    <div className="container mx-auto max-w-5xl">
                        <div className="bg-brick-900 border border-brick-700 shadow-2xl rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
                            <div className="flex-1 text-center lg:text-left">
                                <h3 className="font-condensed font-bold text-white uppercase tracking-wider mb-2">
                                    {t.cookieConsent.title}
                                </h3>
                                <p className="text-brick-200 font-light text-sm md:text-base leading-relaxed">
                                    {t.cookieConsent.description}
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
                                <button
                                    onClick={handleReject}
                                    className="px-6 py-3 rounded-full font-condensed font-bold text-xs uppercase tracking-wider border border-brick-600 text-brick-200 hover:bg-brick-800 hover:text-white transition-all w-full sm:w-auto text-center"
                                >
                                    {t.cookieConsent.reject}
                                </button>
                                <button
                                    onClick={handleAccept}
                                    className="px-6 py-3 rounded-full font-condensed font-bold text-xs uppercase tracking-wider bg-cream-100 hover:bg-white text-brick-900 shadow-md hover:shadow-lg transition-all w-full sm:w-auto text-center"
                                >
                                    {t.cookieConsent.acceptAll}
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
