# Guide Sécurité Production — Next.js

> Document de référence pour sécuriser un projet Next.js avant mise en ligne.
> À fournir tel quel à une IA ou à suivre étape par étape.
> Basé sur un audit réel d'un projet en production (Next.js 14, App Router, Docker).

---

## Table des matières

1. [Headers HTTP de sécurité](#1-headers-http-de-sécurité)
2. [Validation des entrées côté serveur (Zod)](#2-validation-des-entrées-côté-serveur-zod)
3. [Protection anti-spam triple couche](#3-protection-anti-spam-triple-couche)
4. [Conformité RGPD — Cookies et consentement](#4-conformité-rgpd--cookies-et-consentement)
5. [Sécurité Docker multi-stage](#5-sécurité-docker-multi-stage)
6. [Sécurité des liens externes](#6-sécurité-des-liens-externes)
7. [Server Actions (pas d'API routes exposées)](#7-server-actions-pas-dapi-routes-exposées)
8. [Gestion des secrets et variables d'environnement](#8-gestion-des-secrets-et-variables-denvironnement)
9. [Redirections 301 (migration / anciennes URLs)](#9-redirections-301-migration--anciennes-urls)
10. [Whitelist des domaines d'images](#10-whitelist-des-domaines-dimages)
11. [Fichiers d'exclusion (.dockerignore, .gitignore)](#11-fichiers-dexclusion)
12. [Checklist finale](#12-checklist-finale)

---

## 1. Headers HTTP de sécurité

### Pourquoi
Chaque réponse HTTP du serveur doit inclure des headers qui protègent contre le clickjacking, le MIME sniffing, les attaques man-in-the-middle, et l'accès non autorisé aux APIs du navigateur.

### Implémentation

Dans `next.config.js`, ajouter la section `headers()` :

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... autres configs
  async headers() {
    return [
      {
        source: '/(.*)',  // Appliqué sur TOUTES les routes
        headers: [
          // Anti-clickjacking : empêche l'intégration du site dans une iframe
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          // Empêche le navigateur de deviner le type MIME (évite les attaques XSS via upload)
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          // Contrôle les informations envoyées dans le header Referer
          // "strict-origin-when-cross-origin" = envoie l'origin complète en same-origin,
          // seulement le domaine en cross-origin, rien en HTTP→HTTPS
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          // Force HTTPS pendant 1 an, incluant les sous-domaines
          // "preload" permet l'inscription dans la liste HSTS des navigateurs
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          // Bloque l'accès à la caméra, au micro et à la géolocalisation
          // Ajouter d'autres permissions si nécessaire : payment=(), usb=(), etc.
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
};
```

### Header optionnel avancé : Content-Security-Policy (CSP)

Si le projet n'utilise pas de scripts tiers complexes, ajouter aussi :

```js
{
  key: 'Content-Security-Policy',
  value: [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: https:",
    "font-src 'self' https://fonts.gstatic.com",
    "connect-src 'self' https://www.google-analytics.com",
    "frame-src 'none'",
  ].join('; '),
}
```

> ⚠️ Le CSP doit être adapté aux scripts tiers utilisés (GA, widgets, etc.).
> Tester en mode `Content-Security-Policy-Report-Only` d'abord.

---

## 2. Validation des entrées côté serveur (Zod)

### Pourquoi
Ne JAMAIS faire confiance aux données venant du client. Même avec une validation côté front, un attaquant peut envoyer n'importe quoi directement au serveur.

### Installation

```bash
npm install zod
```

### Implémentation

Créer un schéma Zod pour chaque formulaire. Exemple pour un formulaire de contact :

```ts
// app/actions/contact.ts
'use server';

import { z } from 'zod';

// Schéma de validation strict
const contactSchema = z.object({
  name: z.string()
    .min(2, 'Le nom doit contenir au moins 2 caractères')
    .max(100, 'Le nom est trop long'),
  email: z.string()
    .email('Email invalide'),
  phone: z.string().optional(),
  subject: z.string()
    .min(1, 'Veuillez sélectionner un sujet'),
  message: z.string()
    .min(10, 'Le message doit contenir au moins 10 caractères')
    .max(5000, 'Le message est trop long'),
});

export async function sendContactEmail(formData: FormData) {
  try {
    const rawData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    };

    // safeParse ne throw pas, retourne un objet avec success/error
    const validatedData = contactSchema.safeParse(rawData);

    if (!validatedData.success) {
      const errorMsg = validatedData.error.issues[0].message;
      return { success: false, error: errorMsg };
    }

    const { name, email, phone, subject, message } = validatedData.data;

    // ... envoi email avec les données validées
  } catch (err: any) {
    console.error('Erreur serveur:', err);
    // Message générique côté client (ne pas exposer les détails de l'erreur)
    return { success: false, error: 'Une erreur est survenue.' };
  }
}
```

### Règles importantes
- Utiliser `safeParse()` (pas `parse()`) pour éviter les exceptions non gérées
- Toujours définir des `min` ET des `max` sur les strings
- Ne jamais renvoyer les détails techniques d'une erreur au client
- Valider côté serveur même si le front valide aussi

---

## 3. Protection anti-spam multi-couches

### Pourquoi
Un formulaire de contact sans protection sera spammé en quelques jours. Six couches complémentaires couvrent différents types de bots et attaques automatisées.

### Couche 1 : Double Honeypot (champs cachés)

Deux champs invisibles pour les humains mais remplis par les bots. Utiliser deux techniques de masquage différentes pour piéger plus de bots.

**Côté formulaire (Client Component) :**

```tsx
{/* Honeypot 1 : display: none */}
<div style={{ display: 'none' }} aria-hidden="true">
  <label htmlFor="website">Ne pas remplir</label>
  <input
    type="text"
    id="website"
    name="website"
    tabIndex={-1}
    autoComplete="off"
  />
</div>

{/* Honeypot 2 : position absolute hors écran */}
<div style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true">
  <label htmlFor="url">Website</label>
  <input
    type="text"
    id="url"
    name="url"
    tabIndex={-1}
    autoComplete="off"
  />
</div>
```

**Côté serveur (Server Action) :**

```ts
// Si un des honeypots est rempli → c'est un bot
// On retourne success: true pour ne PAS révéler la détection
const honeypot = formData.get('website') as string;
const honeypot2 = formData.get('url') as string;
if ((honeypot && honeypot.trim() !== '') || (honeypot2 && honeypot2.trim() !== '')) {
  return { success: true }; // Réponse silencieuse, le bot croit avoir réussi
}
```

### Couche 2 : Time Gate (contrôle du temps)

Les bots soumettent les formulaires instantanément ou réutilisent des jetons périmés. Vérifier les deux extrêmes.

**Côté formulaire :**

```tsx
// Timestamp enregistré au montage du composant
const [formLoadedAt] = useState(() => Date.now());

// Champ caché dans le formulaire
<input type="hidden" name="_t" value={formLoadedAt} />
```

**Côté serveur :**

```ts
const formLoadedAt = parseInt(formData.get('_t') as string || '0', 10);
const elapsed = Date.now() - formLoadedAt;
const ONE_HOUR_MS = 60 * 60 * 1000;

// Rejet si soumission trop rapide (< 3 secondes)
if (formLoadedAt === 0 || elapsed < 3000) {
  return { success: false, error: 'Soumission trop rapide. Veuillez réessayer.' };
}

// Rejet si formulaire trop ancien (> 1 heure)
if (elapsed > ONE_HOUR_MS) {
  return { success: false, error: 'Le formulaire a expiré. Veuillez recharger la page.' };
}
```

### Couche 3 : Rate Limiting par IP

Limite le nombre de soumissions par IP sur une fenêtre de temps.

```ts
// Rate limiter en mémoire (se réinitialise au redémarrage du serveur)
const rateLimitMap = new Map<string, { count: number; firstRequest: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 heure
const RATE_LIMIT_MAX = 5; // max 5 soumissions par IP par heure

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  // Première requête ou fenêtre expirée → reset
  if (!entry || now - entry.firstRequest > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, firstRequest: now });
    return true;
  }

  // Limite atteinte
  if (entry.count >= RATE_LIMIT_MAX) {
    return false;
  }

  entry.count++;
  return true;
}

// Dans la Server Action :
const { headers } = await import('next/headers');
const headersList = headers();
const ip =
  headersList.get('x-forwarded-for')?.split(',')[0]?.trim() ||
  headersList.get('x-real-ip') ||
  'unknown';

if (!checkRateLimit(ip)) {
  return { success: false, error: 'Trop de messages envoyés. Réessayez dans une heure.' };
}
```

> 💡 Pour un rate limiting persistant (multi-instance), utiliser Redis ou Upstash.

### Couche 4 : Détection de patterns de spam

Bloquer les messages contenant des patterns typiques de spam.

```ts
// Patterns de spam courants
const SPAM_PATTERNS = [
  /\b(viagra|cialis|casino|lottery|winner|prize|click here|buy now)\b/i,
  /https?:\/\/[^\s]{50,}/i, // URLs trop longues
  /<script|<iframe|javascript:/i, // Tentatives XSS
  /\b[A-Z]{20,}\b/, // Trop de majuscules consécutives
];

function containsSpamPatterns(text: string): boolean {
  return SPAM_PATTERNS.some(pattern => pattern.test(text));
}

// Dans la Server Action, après extraction des données :
if (containsSpamPatterns(rawData.name) || 
    containsSpamPatterns(rawData.message) ||
    containsSpamPatterns(rawData.email)) {
  // Retourner succès silencieux pour ne pas alerter le spammeur
  return { success: true };
}
```

### Couche 5 : Validation stricte avec Zod

Limites strictes sur tous les champs, y compris validation de la liste prédéfinie pour le sujet.

```ts
const contactSchema = z.object({
  name: z.string()
    .min(2, 'Le nom doit contenir au moins 2 caractères')
    .max(100, 'Le nom ne peut pas dépasser 100 caractères'),
  email: z.string()
    .email('Email invalide')
    .max(254, 'Email trop long'),
  phone: z.string().optional(),
  subject: z.enum(['reservation', 'info', 'other'], {
    errorMap: () => ({ message: 'Sujet invalide' })
  }),
  message: z.string()
    .min(10, 'Le message doit contenir au moins 10 caractères')
    .max(5000, 'Le message ne peut pas dépasser 5000 caractères'),
});
```

### Couche 6 : Transport sécurisé SMTP

```ts
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 465,
  secure: true, // TLS/SSL
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});
```

### Résumé des 6 couches

| Couche | Protection contre | Réponse si détecté |
|--------|-------------------|-------------------|
| 1. Double Honeypot | Bots qui remplissent tous les champs | Succès silencieux |
| 2. Time Gate | Soumissions instantanées ou jetons périmés | Erreur explicite |
| 3. Rate Limiting | Attaques par volume | Erreur explicite |
| 4. Spam Patterns | Contenu spam typique | Succès silencieux |
| 5. Validation Zod | Données invalides ou hors limites | Erreur explicite |
| 6. SMTP sécurisé | Interception en transit | N/A (prévention) |

---

## 4. Conformité RGPD — Cookies et consentement

### Pourquoi
La loi européenne (RGPD + directive ePrivacy) impose :
- Aucun cookie non essentiel sans consentement explicite
- Possibilité de refuser
- Possibilité de révoquer son choix à tout moment

### Architecture

```
CookieManager (Server Component)
  ├── Pas de cookie → affiche CookieBanner (Client Component)
  ├── Accepté → injecte les scripts analytics côté serveur
  └── Refusé → rien du tout
```

### Fichier 1 : Server Actions pour les cookies

```ts
// app/actions/cookie.ts
'use server';

import { cookies } from 'next/headers';

export async function acceptCookies() {
  cookies().set('user-consent', 'accepted', {
    maxAge: 60 * 60 * 24 * 365, // 1 an
    path: '/',
    sameSite: 'lax',                              // Protection CSRF
    secure: process.env.NODE_ENV === 'production', // HTTPS only en prod
  });
}

export async function rejectCookies() {
  cookies().set('user-consent', 'rejected', {
    maxAge: 60 * 60 * 24 * 365,
    path: '/',
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
  });
}

export async function revokeCookies() {
  cookies().delete('user-consent');
}
```

### Fichier 2 : CookieManager (Server Component)

```tsx
// components/CookieManager.tsx
import { cookies } from 'next/headers';
import CookieBanner from './CookieBanner';

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function CookieManager() {
  const cookieStore = cookies();
  const consentCookie = cookieStore.get('user-consent');
  const hasConsented = consentCookie?.value === 'accepted';

  // Pas de choix → bandeau
  if (!consentCookie) {
    return <CookieBanner />;
  }

  // Accepté + GA configuré → injection des scripts
  if (hasConsented && GA_TRACKING_ID) {
    return (
      <>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
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

  // Refusé → aucun script
  return null;
}
```

### Fichier 3 : CookieBanner (Client Component)

```tsx
// components/CookieBanner.tsx
'use client';

import React, { useState } from 'react';
import { acceptCookies, rejectCookies } from '@/app/actions/cookie';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(true);

  const handleAccept = async () => {
    setIsVisible(false);
    await acceptCookies();
    window.location.reload(); // Recharge pour injecter les scripts
  };

  const handleReject = async () => {
    setIsVisible(false);
    await rejectCookies();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="container mx-auto max-w-5xl">
        <div className="bg-gray-900 rounded-2xl p-6 flex flex-col lg:flex-row items-center gap-6">
          <div className="flex-1">
            <h3 className="font-bold text-white mb-2">Cookies</h3>
            <p className="text-gray-300 text-sm">
              Nous utilisons des cookies pour améliorer votre expérience.
              Vous pouvez accepter ou refuser les cookies non essentiels.
            </p>
          </div>
          <div className="flex gap-3">
            <button onClick={handleReject} className="px-6 py-3 border border-gray-600 text-gray-200 rounded-full">
              Refuser
            </button>
            <button onClick={handleAccept} className="px-6 py-3 bg-white text-gray-900 rounded-full font-bold">
              Tout accepter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Fichier 4 : Intégration dans le layout

```tsx
// app/layout.tsx
import CookieManager from '@/components/CookieManager';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        {children}
        <CookieManager />
      </body>
    </html>
  );
}
```

### Bouton de révocation dans le footer

```tsx
// Dans le footer du Layout
import { revokeCookies } from '@/app/actions/cookie';

<button
  onClick={async () => {
    await revokeCookies();
    window.location.reload();
  }}
>
  Gérer les cookies
</button>
```

---

## 5. Sécurité Docker multi-stage

### Pourquoi
- Multi-stage build = image finale sans code source ni devDependencies
- Utilisateur non-root = si le conteneur est compromis, l'attaquant n'a pas les droits root
- Alpine = surface d'attaque minimale

### Prérequis Next.js

Dans `next.config.js` :

```js
const nextConfig = {
  output: 'standalone', // Génère un dossier autonome minimal
};
```

### Dockerfile complet

```dockerfile
# ── Étape 1 : Base ──────────────────────────────────
FROM node:18-alpine AS base

# ── Étape 2 : Installation des dépendances ──────────
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --legacy-peer-deps
# npm ci = installation déterministe depuis le lockfile
# Pas de npm install (non déterministe)

# ── Étape 3 : Build ─────────────────────────────────
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# ── Étape 4 : Production ────────────────────────────
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=8080

# Créer un utilisateur non-root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copier uniquement le nécessaire depuis le build
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Exécuter en tant qu'utilisateur non-root
USER nextjs
EXPOSE 8080

CMD ["node", "server.js"]
```

### .dockerignore

```
node_modules
.next
.git
.gitignore
.env*
README.md
*.md
.vscode
.idea
```

---

## 6. Sécurité des liens externes

### Pourquoi
Sans `rel="noopener noreferrer"`, une page ouverte via `target="_blank"` peut accéder à `window.opener` et rediriger la page d'origine (attaque tab-nabbing).

### Règle

**TOUS les liens avec `target="_blank"` doivent avoir `rel="noopener noreferrer"` :**

```tsx
// ✅ Correct
<a
  href="https://example.com"
  target="_blank"
  rel="noopener noreferrer"
>
  Lien externe
</a>

// ❌ Dangereux
<a href="https://example.com" target="_blank">
  Lien externe
</a>
```

### Vérification

Rechercher dans tout le projet les `target="_blank"` sans `rel` :

```bash
grep -rn 'target="_blank"' --include="*.tsx" --include="*.jsx" | grep -v "noopener"
```

Si cette commande retourne des résultats, corriger chaque occurrence.

---

## 7. Server Actions (pas d'API routes exposées)

### Pourquoi
Les Server Actions Next.js (`'use server'`) offrent des avantages de sécurité par rapport aux API routes classiques :
- Pas d'endpoint REST public visible dans le réseau
- Protection CSRF intégrée automatiquement par Next.js
- Les données ne transitent pas par une URL exposée

### Règle

Pour tout traitement de formulaire ou mutation de données, utiliser des Server Actions :

```ts
// app/actions/monAction.ts
'use server';

export async function monAction(formData: FormData) {
  // Validation Zod
  // Traitement
  // Retour
}
```

```tsx
// Dans le composant
import { monAction } from '@/app/actions/monAction';

<form action={monAction}>
  {/* ou onSubmit avec appel manuel */}
</form>
```

### Ne PAS faire

```ts
// ❌ Éviter les API routes pour les formulaires
// app/api/contact/route.ts
export async function POST(request: Request) { ... }
```

---

## 8. Gestion des secrets et variables d'environnement

### Règles

1. **Jamais de secrets dans le code source** — tout dans `.env.local`
2. **`.env.local` dans le `.gitignore`** — ne jamais commiter
3. **Préfixe `NEXT_PUBLIC_`** = exposé côté client. Ne JAMAIS préfixer un secret avec `NEXT_PUBLIC_`
4. **Messages d'erreur génériques** côté client — ne pas exposer les détails serveur

### Structure type

```env
# .env.local

# ── Secrets serveur (JAMAIS de NEXT_PUBLIC_) ─────────
SMTP_HOST=ssl0.ovh.net
SMTP_PORT=465
SMTP_USER=info@monsite.fr
SMTP_PASSWORD=motDePasseComplexe
CONTACT_EMAIL=contact@monsite.fr

# ── Variables publiques (OK côté client) ─────────────
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://www.monsite.fr
```

### .gitignore

```gitignore
# Secrets
.env
.env.local
.env.production
.env*.local
```

---

## 9. Redirections 301 (migration / anciennes URLs)

### Pourquoi
Après une migration (WordPress → Next.js, changement de structure d'URLs), les anciennes URLs doivent rediriger en 301 pour :
- Éviter les erreurs 404 pour les utilisateurs et les moteurs de recherche
- Transférer le "jus SEO" des anciennes pages vers les nouvelles
- Éviter le duplicate content

### Implémentation

```js
// next.config.js
const nextConfig = {
  async redirects() {
    return [
      // Anciennes URLs avec préfixe de langue
      { source: '/fr', destination: '/', permanent: true },
      { source: '/en', destination: '/', permanent: true },
      { source: '/fr/ancienne-page', destination: '/nouvelle-page', permanent: true },

      // Pages 404 connues → redirection temporaire vers l'accueil
      { source: '/fr/erreur-404', destination: '/', permanent: false },

      // Wildcard catch-all pour les préfixes de langue
      { source: '/fr/:path*', destination: '/:path*', permanent: true },
      { source: '/en/:path*', destination: '/:path*', permanent: true },
    ];
  },
};
```

### Règles
- `permanent: true` = 301 (SEO, mise en cache par les navigateurs)
- `permanent: false` = 302 (temporaire, pages d'erreur)
- Toujours mettre les règles spécifiques AVANT les wildcards

---

## 10. Whitelist des domaines d'images

### Pourquoi
`next/image` optimise les images mais peut être abusé comme proxy si on autorise n'importe quel domaine. Limiter aux domaines nécessaires.

### Implémentation

```js
// next.config.js
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.monsite.fr',
      },
      // Ajouter uniquement les domaines nécessaires
      // {
      //   protocol: 'https',
      //   hostname: 'cdn.monsite.fr',
      // },
    ],
    minimumCacheTTL: 31536000, // Cache images 1 an
    formats: ['image/avif', 'image/webp'], // Formats modernes
  },
};
```

---

## 11. Fichiers d'exclusion

### .gitignore

```gitignore
# Dépendances
node_modules

# Build
.next/
out/
dist/

# Secrets
.env
.env.local
.env.production
.env*.local

# IDE
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.sw?

# Logs
*.log
npm-debug.log*
```

### .dockerignore

```
node_modules
.next
.git
.gitignore
.env*
*.md
.vscode
.idea
.DS_Store
```

---

## 12. Checklist finale

Avant chaque mise en production, vérifier :

### Headers & Transport
- [ ] `X-Frame-Options: DENY` configuré
- [ ] `X-Content-Type-Options: nosniff` configuré
- [ ] `Referrer-Policy: strict-origin-when-cross-origin` configuré
- [ ] `Strict-Transport-Security` avec `max-age=31536000; includeSubDomains; preload`
- [ ] `Permissions-Policy` bloque caméra, micro, géoloc
- [ ] (Optionnel) `Content-Security-Policy` configuré et testé

### Formulaires
- [ ] Validation Zod côté serveur sur TOUS les formulaires
- [ ] Honeypot (champ caché) sur chaque formulaire public
- [ ] Vérification de timing (anti-soumission instantanée)
- [ ] Rate limiting par IP
- [ ] Messages d'erreur génériques (pas de stack trace côté client)

### RGPD / Cookies
- [ ] Bandeau cookie avec choix Accepter / Refuser
- [ ] Aucun script tiers chargé avant consentement explicite
- [ ] Cookies avec flags `sameSite: 'lax'` et `secure: true` en prod
- [ ] Bouton de révocation du consentement accessible (footer)
- [ ] Page mentions légales présente

### Infrastructure
- [ ] Dockerfile multi-stage (deps → build → runner)
- [ ] Utilisateur non-root dans le conteneur Docker
- [ ] `output: 'standalone'` dans next.config.js
- [ ] `.dockerignore` exclut node_modules, .git, .env*, .next
- [ ] `.gitignore` exclut .env.local et les secrets

### Code
- [ ] Tous les `target="_blank"` ont `rel="noopener noreferrer"`
- [ ] Server Actions utilisées (pas d'API routes pour les formulaires)
- [ ] Aucun secret avec préfixe `NEXT_PUBLIC_`
- [ ] Aucun secret hardcodé dans le code source
- [ ] Domaines d'images whitelistés dans `remotePatterns`
- [ ] Redirections 301 configurées pour les anciennes URLs

### Vérification post-déploiement
- [ ] Tester les headers avec https://securityheaders.com
- [ ] Tester le SSL avec https://www.ssllabs.com/ssltest/
- [ ] Vérifier qu'aucun script tiers ne se charge sans consentement (onglet Network)
- [ ] Tester le formulaire de contact (honeypot, timing, rate limit)
- [ ] Vérifier les redirections 301 avec `curl -I https://monsite.fr/ancienne-url`
