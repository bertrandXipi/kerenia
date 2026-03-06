import { cookies } from 'next/headers';
import CookieBanner from './CookieBanner';

// Placeholder pour les ID de tracking si nécessaires (Google Analytics / GTM)
const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function CookieManager() {
    const cookieStore = cookies();
    const consentCookie = cookieStore.get('user-consent');

    const hasConsented = consentCookie?.value === 'accepted';
    const hasRejected = consentCookie?.value === 'rejected';

    // Si l'utilisateur n'a fait aucun choix, on affiche le bandeau (Client Component interactif).
    if (!consentCookie) {
        return <CookieBanner />;
    }

    // Si l'utilisateur a accepté, on injecte ici (coté serveur!) les scripts tiers.
    if (hasConsented && GA_TRACKING_ID) {
        return (
            <>
                {/* Scripts d'analytics injectés uniquement après consentement explicite */}
                <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
                    }}
                />
            </>
        );
    }

    // Si refusé, ne rien afficher (et aucune injection de script).
    return null;
}
