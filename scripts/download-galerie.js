const https = require('https');
const fs = require('fs');
const path = require('path');

const images = {
  'studio': [
    ['DSC_7223.jpg', 'terrasse-exterieure.jpg'],
    ['DSC_7383.jpg', 'vue-ensemble-studio-1.jpg'],
    ['DSC_7390.jpg', 'partie-nuit-rideau.jpg'],
    ['DSC_7397.jpg', 'cuisine-equipee.jpg'],
    ['DSC_7399.jpg', 'vue-ensemble-studio-2.jpg'],
  ],
  'standart': [ // typo on source site
    ['DSC_7305.jpg', 'vue-ensemble-balcon.jpg'],
    ['DSC_7309.jpg', 'coin-cuisine.jpg'],
    ['DSC_7315.jpg', 'chambre-coucher.jpg'],
    ['DSC_7330.jpg', 'balcon.jpg'],
  ],
  'confort': [
    ['DSC_7333.jpg', 'salon-1.jpg'],
    ['DSC_7336.jpg', 'salon-cuisine-equipee.jpg'],
    ['DSC_7338.jpg', 'salon-2.jpg'],
    ['DSC_7348.jpg', 'chambre-lit-double.jpg'],
    ['DSC_7353.jpg', 'salon-balcon-1.jpg'],
    ['DSC_7357.jpg', 'salon-balcon-2.jpg'],
    ['DSC_7360.jpg', 'vue-generale.jpg'],
    ['DSC_7362.jpg', 'cuisine-equipee.jpg'],
    ['DSC_7364.jpg', 'chambre-coucher.jpg'],
    ['DSC_7232.jpg', 'DSC_7232.jpg'],
    ['DSC_7233.jpg', 'DSC_7233.jpg'],
    ['DSC_7238.jpg', 'DSC_7238.jpg'],
    ['1_DSC_7247-HDR.jpg', 'balcon-appartement-1.jpg'],
    ['1_DSC_7250-HDR.jpg', 'balcon-appartement-2.jpg'],
    ['DSC_7372.jpg', 'balcon-appartements.jpg'],
  ],
  'parties-communes': [
    ['DSC_7286.jpg', 'escalier-residence.jpg'],
    ['vue-facades.jpg', 'vue-facades.jpg'],
    ['kerenia-home.jpg', 'kerenia-home.jpg'],
    ['facade-proche.jpg', 'facade-proche.jpg'],
    ['DSC_7374.jpg', 'reception.jpg'],
    ['DSC_7303.jpg', 'signaletiques.jpg'],
    ['DSC_7301.jpg', 'piscine-1.jpg'],
    ['DSC_7298.jpg', 'piscine-2.jpg'],
    ['DSC_7295.jpg', 'piscine-3.jpg'],
    ['DSC_7290.jpg', 'couloir-1.jpg'],
    ['DSC_4530.jpg', 'vue-maison.jpg'],
    ['DSC_7281.jpg', 'couloir-2.jpg'],
    ['DSC_7280.jpg', 'terrasse-appartement.jpg'],
    ['DSC_7253.jpg', 'vue-cambo-balcons.jpg'],
    ['DSC_7214-HDR.jpg', 'vue-arriere-maison.jpg'],
    ['DSC_7208.jpg', 'facade-entree.jpg'],
    ['DSC_4565.jpg', 'DSC_4565.jpg'],
    ['DSC_4552.jpg', 'vue-generale-maison.jpg'],
    ['DSC_4546.jpg', 'escalier.jpg'],
  ],
};

const destMap = {
  'studio': 'public/images/galerie/studio',
  'standart': 'public/images/galerie/standard',
  'confort': 'public/images/galerie/confort',
  'parties-communes': 'public/images/galerie/parties-communes',
};

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36' }
    }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close();
        fs.unlinkSync(dest);
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        file.close();
        fs.unlinkSync(dest);
        reject(new Error(`${res.statusCode} for ${url}`));
        return;
      }
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
    }).on('error', (e) => {
      file.close();
      try { fs.unlinkSync(dest); } catch(_) {}
      reject(e);
    });
  });
}

async function main() {
  let total = 0, ok = 0, fail = 0;
  for (const [gallery, files] of Object.entries(images)) {
    const destDir = destMap[gallery];
    fs.mkdirSync(destDir, { recursive: true });
    console.log(`\n=== ${gallery} (${files.length} photos) ===`);
    for (const [src, destName] of files) {
      total++;
      const url = `https://www.kerenia.fr/wp-content/gallery/${gallery}/${src}`;
      const dest = path.join(destDir, destName);
      try {
        await download(url, dest);
        const size = fs.statSync(dest).size;
        console.log(`  OK: ${destName} (${(size/1024).toFixed(0)} KB)`);
        ok++;
      } catch (e) {
        console.log(`  FAIL: ${destName} - ${e.message}`);
        fail++;
      }
    }
  }
  console.log(`\nDone: ${ok}/${total} OK, ${fail} failed`);
}

main();
