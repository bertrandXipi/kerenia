const https = require('https');

const urls = [
  // EN pages
  '/en/apartment/',
  '/en/apartments-cambo/',
  '/en/our-apartments/',
  '/en/accommodation/',
  '/en/gallery-photos/',
  '/en/photo-gallery/',
  '/en/around-us-cambo/',
  '/en/surroundings/',
  '/en/legal/',
  '/en/legal-notice/',
  '/en/mentions-legales/',
  // ES pages
  '/es/apartamentos/',
  '/es/galeria/',
  '/es/alrededor/',
  '/es/contacto/',
  '/es/contact/',
  // FR - chercher mentions légales
  '/fr/mentions-legales-ker-enia/',
  '/fr/politique-confidentialite/',
  '/fr/reservation/',
  '/fr/reserver/',
  '/fr/tarifs/',
  '/fr/services/',
  '/fr/piscine/',
  '/fr/cure-thermale/',
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
  results.filter(r => r.status === 200).forEach(r => {
    console.log(`✓ 200 ${r.path}`);
  });
  results.filter(r => r.status !== 200 && r.status !== 0).forEach(r => {
    const loc = r.location ? ` -> ${r.location}` : '';
    console.log(`  ${r.status} ${r.path}${loc}`);
  });
});
