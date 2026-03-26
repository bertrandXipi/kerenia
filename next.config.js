const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  async redirects() {
    return [
      // ── Racine ──────────────────────────────────────────────
      { source: '/fr', destination: '/', permanent: true },
      { source: '/fr/', destination: '/', permanent: true },
      { source: '/en', destination: '/', permanent: true },
      { source: '/en/', destination: '/', permanent: true },
      { source: '/es', destination: '/', permanent: true },
      { source: '/es/', destination: '/', permanent: true },
      { source: '/eu', destination: '/', permanent: true },
      { source: '/eu/', destination: '/', permanent: true },

      // ── Appartements ────────────────────────────────────────
      { source: '/fr/location-appartement-cambo-les-bains', destination: '/appartements', permanent: true },
      { source: '/fr/location-appartement-cambo-les-bains/', destination: '/appartements', permanent: true },
      { source: '/fr/appartements', destination: '/appartements', permanent: true },
      { source: '/fr/appartements/', destination: '/appartements', permanent: true },
      { source: '/en/apartments', destination: '/appartements', permanent: true },
      { source: '/en/apartments/', destination: '/appartements', permanent: true },
      { source: '/es/apartamentos', destination: '/appartements', permanent: true },
      { source: '/es/apartamentos/', destination: '/appartements', permanent: true },

      // ── Galerie ─────────────────────────────────────────────
      { source: '/fr/galerie', destination: '/galerie', permanent: true },
      { source: '/fr/galerie/', destination: '/galerie', permanent: true },
      { source: '/en/gallery', destination: '/galerie', permanent: true },
      { source: '/en/gallery/', destination: '/galerie', permanent: true },
      { source: '/es/galeria', destination: '/galerie', permanent: true },
      { source: '/es/galeria/', destination: '/galerie', permanent: true },

      // ── Autour de nous ──────────────────────────────────────
      { source: '/fr/autour-de-nous-quoi-faire-cambo-les-bains', destination: '/autour-de-nous', permanent: true },
      { source: '/fr/autour-de-nous-quoi-faire-cambo-les-bains/', destination: '/autour-de-nous', permanent: true },
      { source: '/fr/autour-de-nous', destination: '/autour-de-nous', permanent: true },
      { source: '/fr/autour-de-nous/', destination: '/autour-de-nous', permanent: true },
      { source: '/en/around-us', destination: '/autour-de-nous', permanent: true },
      { source: '/en/around-us/', destination: '/autour-de-nous', permanent: true },
      { source: '/en/around-us-what-to-do-cambo-les-bains', destination: '/autour-de-nous', permanent: true },
      { source: '/en/around-us-what-to-do-cambo-les-bains/', destination: '/autour-de-nous', permanent: true },
      { source: '/es/alrededor-de-nosotros', destination: '/autour-de-nous', permanent: true },
      { source: '/es/alrededor-de-nosotros/', destination: '/autour-de-nous', permanent: true },

      // ── Contact ─────────────────────────────────────────────
      { source: '/fr/contact', destination: '/contact', permanent: true },
      { source: '/fr/contact/', destination: '/contact', permanent: true },
      { source: '/en/contact', destination: '/contact', permanent: true },
      { source: '/en/contact/', destination: '/contact', permanent: true },
      { source: '/es/contacto', destination: '/contact', permanent: true },
      { source: '/es/contacto/', destination: '/contact', permanent: true },

      // ── Mentions légales ────────────────────────────────────
      { source: '/fr/mentions-legales', destination: '/mentions-legales', permanent: true },
      { source: '/fr/mentions-legales/', destination: '/mentions-legales', permanent: true },
      { source: '/fr/mentions-legales-residence-ker-enia-cambo-les-bains', destination: '/mentions-legales', permanent: true },
      { source: '/fr/mentions-legales-residence-ker-enia-cambo-les-bains/', destination: '/mentions-legales', permanent: true },
      { source: '/en/legal-notice', destination: '/mentions-legales', permanent: true },
      { source: '/en/legal-notice/', destination: '/mentions-legales', permanent: true },

      // ── Pages 404 WordPress ─────────────────────────────────
      { source: '/fr/erreur-404', destination: '/', permanent: false },
      { source: '/en/room-404', destination: '/', permanent: false },
      { source: '/es/habitaciones-404', destination: '/', permanent: false },

      // ── Wildcard langues (catch-all) ────────────────────────
      { source: '/fr/:path*', destination: '/:path*', permanent: true },
      { source: '/en/:path*', destination: '/:path*', permanent: true },
      { source: '/es/:path*', destination: '/:path*', permanent: true },
      { source: '/eu/:path*', destination: '/:path*', permanent: true },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.kerenia.fr',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
    ],
    minimumCacheTTL: 31536000,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ]
  },
}

module.exports = withBundleAnalyzer(nextConfig)
