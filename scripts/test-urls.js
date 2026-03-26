const https = require('https');

const urls = [
  '/fr/',
  '/fr/location-appartement-cambo-les-bains/',
  '/fr/appartements/',
  '/fr/nos-appartements/',
  '/fr/logements/',
  '/fr/galerie/',
  '/fr/galerie-photos/',
  '/fr/autour-de-nous/',
  '/fr/autour-de-nous-quoi-faire-cambo-les-bains/',
  '/fr/activites/',
  '/fr/contact/',
  '/fr/mentions-legales/',
  '/fr/mentions-legales-residence-ker-enia-cambo-les-bains/',
  '/fr/informations/',
  '/fr/residence/',
  '/fr/la-residence/',
  '/fr/accueil/',
  '/en/',
  '/en/apartments/',
  '/en/gallery/',
  '/en/around-us/',
  '/en/contact/',
  '/es/',
  '/eu/',
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
  results.forEach(r => {
    const loc = r.location ? ` -> ${r.location}` : '';
    console.log(`${r.status} ${r.path}${loc}`);
  });
});
