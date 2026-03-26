const https = require('https');

// Chercher les vraies pages EN et ES
const urls = [
  '/en/location-apartment-cambo/',
  '/en/location-apartment-cambo-les-bains/',
  '/en/rental-apartment-cambo/',
  '/en/apartment-rental-cambo-les-bains/',
  '/en/gallery-cambo/',
  '/en/around-cambo/',
  '/en/around-us-what-to-do-cambo-les-bains/',
  '/en/legal-notice-ker-enia/',
  '/es/alquiler-apartamento-cambo/',
  '/es/galeria-fotos/',
  '/es/alrededor-de-nosotros/',
  '/es/menciones-legales/',
  // FR mentions légales
  '/fr/mentions-legales-residence-ker-enia/',
  '/fr/mentions-legales-ker-enia-cambo-les-bains/',
  '/fr/informations-pratiques/',
  '/fr/livret-accueil/',
];

function get(path) {
  return new Promise((resolve) => {
    const req = https.get('https://www.kerenia.fr' + path, {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    }, (res) => {
      resolve({ path, status: res.statusCode, location: res.headers.location });
    });
    req.on('error', () => resolve({ path, status: 0 }));
    req.setTimeout(8000, () => { req.destroy(); resolve({ path, status: 0 }); });
  });
}

Promise.all(urls.map(get)).then(results => {
  results.filter(r => r.status === 200).forEach(r => console.log(`✓ 200 ${r.path}`));
  results.filter(r => r.status !== 200 && r.status !== 0).forEach(r => {
    const loc = r.location ? ` -> ${r.location}` : '';
    console.log(`  ${r.status} ${r.path}${loc}`);
  });
});
