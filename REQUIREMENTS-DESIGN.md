# Requirements & Design — Site Résidence Ker Enia

Document de référence pour reproduire ce site sur un autre projet de résidence/hébergement touristique.

---

## 1. Stack Technique

| Élément | Technologie | Version |
|---------|-------------|---------|
| Framework | Next.js (App Router) | 14.2+ |
| Langage | TypeScript | 5.x |
| Styling | Tailwind CSS | 3.4+ |
| Animations | Framer Motion | 11.x |
| Icônes | Lucide React | 0.344+ |
| Formulaire email | Resend (server action) | 6.x |
| Validation | Zod | 4.x |
| Déploiement | Docker → Google Cloud Run | - |
| Images | WebP + thumbnails 400px | - |

---

## 2. Architecture des fichiers

```
app/
  layout.tsx              # Layout racine (fonts, metadata, providers)
  page.tsx                # Page d'accueil
  globals.css             # Styles globaux + variables CSS
  sitemap.ts              # Sitemap auto Next.js
  actions/
    contact.ts            # Server action envoi email (Resend)
    cookie.ts             # Server actions cookies RGPD
  appartements/page.tsx   # Page appartements
  galerie/page.tsx        # Page galerie photos
  autour-de-nous/page.tsx # Page activités/environs
  contact/page.tsx        # Page contact
  mentions-legales/page.tsx

components/
  Layout.tsx              # Header (nav) + Footer + structure globale
  HomeContent.tsx         # Contenu page accueil (hero, intro, stats, apparts, avis)
  AppartementsContent.tsx # Listings appartements + livret d'accueil
  GalerieContent.tsx      # Galerie photos avec filtres + lightbox
  AutourContent.tsx       # Activités touristiques
  ContactContent.tsx      # Formulaire de contact + coordonnées + carte
  ReviewsSection.tsx      # Carrousel d'avis Google (défilement auto)
  InstagramFeed.tsx       # Widget Instagram (Behold.so)
  PremiumEffects.tsx      # Effet Ken Burns sur images
  AnimatedCounter.tsx     # Compteurs animés au scroll
  GoldSeparator.tsx       # Séparateur décoratif (losange + lignes)
  CustomCalendar.tsx      # Calendrier de réservation
  CookieBanner.tsx        # Bandeau cookies RGPD
  CookieManager.tsx       # Gestion consentement + injection GA
  AccessibilityWidget.tsx # Widget accessibilité (taille texte, contraste, etc.)
  LanguageSwitcher.tsx    # Sélecteur de langue (dropdown)
  LocaleProvider.tsx      # Context React pour i18n
  ThemeManager.tsx        # Injection dynamique des couleurs CSS
  PageTransition.tsx      # Transition de page (framer-motion)
  TransitionProvider.tsx  # Provider de transition
  LivretContent.tsx       # Accordéons livret d'accueil

lib/
  constants.ts            # Données statiques (nav, contact, galerie, booking URL)
  data.ts                 # Données localisées (appartements, activités, avis, livret)
  translations.ts         # Traductions UI complètes (fr/en/es/eu)
  i18n.ts                 # Config i18n (locales, noms)
  types.ts                # Types TypeScript
  site-config.ts          # Config multi-site (couleurs, fonts, contact)

public/
  favicon-96x96.png
  robots.txt
  images/
    logo-kerenia.svg
    logo-kerenia-white-text.svg
    galerie/{studio,standard,confort,parties-communes}/
    galerie/{...}/thumbs/     # Miniatures 400px
    remote/                   # Images hébergées localement
```

---

## 3. Design System

### 3.1 Palette de couleurs

Toutes les couleurs sont définies en CSS variables (`--color-*`) et consommées via Tailwind. Cela permet le theming dynamique.

| Palette | Usage | Couleur principale |
|---------|-------|--------------------|
| **cream** (50→400) | Fonds de page, sections alternées | `#fdfcfa` → `#ddd2c3` |
| **brick** (50→900) | Couleur primaire, CTA, texte fort, header, footer | `#fbf5f3` → `#421a0f` (accent: `#7d2914`) |
| **gold** (100→800) | Séparateurs, accents décoratifs | `#faf6f0` → `#9a6a2f` (accent: `#D4A574`) |
| **sage** (50→900) | Couleur secondaire (non utilisée sur Ker Enia, dispo pour variantes) | Verts doux |

### 3.2 Typographies (Google Fonts)

| Variable | Font | Usage |
|----------|------|-------|
| `--font-sans` (font-sans) | Inter | Corps de texte, UI |
| `--font-condensed` (font-condensed) | Oswald | Titres, boutons, labels (uppercase, tracking large) |
| `--font-script` (font-script) | Dancing Script | Titres décoratifs, taglines (style manuscrit) |
| `--font-serif` (font-serif) | Cormorant Garamond | Titres élégants, compteurs |

### 3.3 Composants de style récurrents

- **Séparateur doré** : ligne dégradée + losange central (`GoldSeparator`)
- **Glassmorphism** : `.glass` — fond blanc semi-transparent + blur (booking bar, cartes)
- **Scrollbar custom** : dégradé brick sur fond cream
- **Sélection texte** : fond brick semi-transparent
- **Transitions** : `cubic-bezier(0.22, 1, 0.36, 1)` sur tous les éléments interactifs

---

## 4. Pages & Sections

### 4.1 Page d'accueil

1. **Hero plein écran**
   - Image de fond avec effet Ken Burns (zoom lent infini)
   - Parallaxe au scroll (image descend, contenu disparaît)
   - Overlay gradient noir semi-transparent
   - Titre dans un bloc coloré (brick 85% opacité) avec animation slide horizontal
   - Tagline en font script + sous-titre en uppercase tracking large
   - **Barre de réservation** flottante en bas du hero :
     - Glassmorphism, coins arrondis 2rem
     - Champs : Arrivée (calendrier), Départ, Voyageurs (select)
     - Bouton recherche brick avec effet shine au hover
     - Redirige vers plateforme de réservation externe

2. **Section intro**
   - Fond cream-100
   - Titre serif + sous-titre script (légèrement incliné -1deg)
   - Grille 2 colonnes : texte à gauche, image avec badge Google "4.9/5" en overlay
   - Animation fade-in au scroll

3. **Section statistiques**
   - 3 compteurs animés (nombre d'appartements, note Google, distance)
   - Icônes dans cercles brick-100
   - Animation compteur avec easing quart

4. **Aperçu appartements**
   - Grille 3 colonnes
   - Cartes avec image (zoom au hover), badge prix, titre script, description, bouton "Découvrir" avec effet slide de fond

5. **Bannière parallaxe**
   - Image pleine largeur fixe (thermes)
   - Overlay gradient

6. **Section avis Google**
   - Carrousel horizontal auto-scroll (pause au hover)
   - Cartes avec avatar initiale, étoiles, texte, icône Google
   - Badge récapitulatif note moyenne + lien vers Google

### 4.2 Page Appartements

1. **Header** : sous-titre condensed + titre script + séparateur + description
2. **Listings alternés** : image à gauche/droite en alternance, cadre décalé en desktop, features en grille 2 colonnes avec check icons, bouton réservation
3. **Note PMR** : encart avec bordure gauche brick
4. **Grille équipements** : icônes + labels dans cartes bordurées
5. **Livret d'accueil** : 4 accordéons (Valeurs, Résidence, Services, Escapades) avec icônes, animation hauteur

### 4.3 Page Galerie

1. **Filtres par catégorie** : boutons pill avec compteur, état actif brick plein
2. **Grille responsive** : 2/3/4 colonnes, aspect 4:3, miniatures (thumbs), overlay zoom au hover
3. **Lightbox** :
   - Fond noir 95% + blur
   - Navigation flèches + clavier (←→ Escape)
   - Thumbnail flou en fallback pendant chargement de l'image full
   - Spinner de chargement
   - Compteur position
   - Préchargement : 3 images adjacentes dans chaque direction
   - Préchargement au hover dans la grille

### 4.4 Page Autour de nous

1. **Listings activités** : alternance image/texte, liens externes
2. **Encart partenaire thermes** : fond brick-800, grille 2 colonnes avec image + contenu + logo partenaire

### 4.5 Page Contact

1. **Formulaire** : champs nom, email, téléphone, sujet (select), message
   - Validation Zod côté serveur (server action)
   - Envoi via Resend API
   - États : loading (spinner), succès (message + bouton "envoyer un autre"), erreur
2. **Coordonnées** : encart avec bordure gauche brick, icônes lucide
3. **Carte Google Maps** : iframe embed

### 4.6 Page Mentions légales

- Sections en cartes blanches arrondies avec bordure brick-100
- Pas d'indexation (`robots: noindex`)

---

## 5. Header & Navigation

- **Position fixed**, z-50, transition background/padding/shadow 500ms
- **Sur la page d'accueil en haut** (`isOverHero`) : transparent, logo blanc, texte blanc, bouton réservation bordure blanche
- **Sur les autres pages en haut** (`isTransparent` mais pas `isOverHero`) : transparent, logo couleur, texte brick
- **Au scroll** (toutes pages) : fond cream-50/95 + backdrop-blur, ombre, padding réduit
- **Menu mobile** : plein écran brick-900, liens centrés en 3xl, animation staggered, icônes sociales en bas
- **Bouton réservation** : lien externe vers plateforme de booking
- **Sélecteur de langue** : dropdown avec globe icon

---

## 6. Footer

3 sections empilées :

1. **Hero footer** (brick-800) : logo blanc + tagline script + description + réseaux sociaux | Encart réservation avec note Google + bouton CTA + mention "meilleur tarif"
2. **Infos détaillées** (brick-900) : 4 colonnes — Contact, Navigation, Infos pratiques, Certifications
3. **Copyright** (brick-950) : copyright + liens légaux + bouton gérer cookies + crédit agence

---

## 7. Fonctionnalités transverses

### 7.1 Internationalisation (i18n)
- 4 langues : Français, English, Español, Euskara
- Stockage locale dans localStorage
- Context React (`LocaleProvider`) avec hook `useLocale()`
- Toutes les chaînes UI dans `lib/translations.ts`
- Données localisées (appartements, activités, équipements) dans `lib/data.ts`

### 7.2 Cookies RGPD
- Bandeau en bas de page (framer-motion slide up)
- 2 boutons : Refuser / Accepter tout
- Cookie `user-consent` = `accepted` | `rejected`
- Si accepté : injection Google Analytics (si `NEXT_PUBLIC_GA_ID` défini)
- Bouton "Gérer les cookies" dans le footer pour révoquer

### 7.3 Widget accessibilité
- Bouton sticky à droite (milieu de page)
- Panneau latéral avec :
  - Sliders : taille texte, hauteur de ligne, espacement lettres (50-200%)
  - Toggles : contraste élevé, niveaux de gris, inversion couleurs, masquer images, police lisible
  - Bouton réinitialiser
- Persistance localStorage

### 7.4 SEO
- Metadata par page (title, description, canonical)
- Open Graph (image, locale, type)
- JSON-LD structured data (LodgingBusiness) sur la page d'accueil
- `robots.txt` + `sitemap.xml` auto-généré
- Favicon PNG

### 7.5 Sécurité (headers HTTP)
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Strict-Transport-Security` (HSTS preload)
- `Permissions-Policy` (caméra, micro, géoloc désactivés)

### 7.6 Performance
- Images WebP optimisées + thumbnails 400px pour la galerie
- Lazy loading natif sur les images de galerie
- Préchargement intelligent (hover + adjacentes dans lightbox)
- `next/image` avec `minimumCacheTTL: 31536000` (1 an)
- Output `standalone` pour Docker minimal
- Instagram widget en `lazyOnload`

---

## 8. Theming / Multi-site

Le site supporte un système de theming via `lib/site-config.ts` :

- Chaque "site" est un objet `SiteConfig` avec : nom, description, keywords, couleurs, fonts, contact
- Les couleurs sont injectées en CSS variables au runtime par `ThemeManager`
- Tailwind consomme ces variables → changer la config suffit à rethemer tout le site
- Variable d'environnement `NEXT_PUBLIC_SITE_ID` pour sélectionner le thème

Pour reproduire le site pour un autre établissement :
1. Créer une nouvelle entrée dans `sites` (site-config.ts) avec les couleurs/fonts souhaitées
2. Remplacer les données dans `lib/data.ts` et `lib/constants.ts`
3. Remplacer les traductions dans `lib/translations.ts`
4. Remplacer les images dans `public/images/`
5. Mettre à jour `NEXT_PUBLIC_SITE_ID`

---

## 9. Déploiement

```dockerfile
FROM node:18-alpine
# 3 stages : deps → builder → runner
# Output standalone Next.js
# Port 8080
# User non-root (nextjs:nodejs)
```

Build & deploy :
```bash
gcloud builds submit --tag europe-west1-docker.pkg.dev/{PROJECT}/cloud-run-source-deploy/{SERVICE} --region europe-west1
gcloud run deploy {SERVICE} --image {IMAGE} --region europe-west1 --platform managed --allow-unauthenticated --set-env-vars RESEND_API_KEY=xxx
```

---

## 10. Variables d'environnement

| Variable | Usage | Obligatoire |
|----------|-------|-------------|
| `RESEND_API_KEY` | Clé API Resend pour le formulaire de contact | Oui |
| `NEXT_PUBLIC_GA_ID` | Google Analytics tracking ID | Non |
| `NEXT_PUBLIC_SITE_ID` | ID du thème à utiliser (défaut: `kerenia`) | Non |

---

## 11. Animations & Micro-interactions

| Élément | Animation |
|---------|-----------|
| Hero image | Ken Burns (zoom in/out infini, 25s) |
| Hero contenu | Parallaxe Y + fade opacity au scroll |
| Bloc titre hero | `scaleX: 0→1` (1s) puis fade texte (0.8s delay) |
| Sections au scroll | `opacity: 0→1, y: 30→0` (viewport once, margin -100px) |
| Cartes appartements | Staggered fade-in (delay 0.15s × index) |
| Images galerie | `scale: 1→1.1` au hover (500ms) |
| Compteurs | Animation numérique avec easing quart (2s) |
| Avis | Auto-scroll horizontal 0.5px/frame, pause au hover |
| Menu mobile | Fade-in + staggered slide-up des liens |
| Boutons CTA | `scale: 1.02, y: -2` au hover, `scale: 0.98` au tap |
| Bouton recherche | Effet shine (gradient blanc translate) au hover |
| Lightbox | Fade-in backdrop + navigation instantanée |
| Accordéons | Height auto animation (300ms ease-in-out) |
| Cookie banner | Spring slide-up depuis le bas |
| Language dropdown | Scale + fade (150ms) |
