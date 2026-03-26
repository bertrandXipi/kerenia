const https = require('https');

function get(url) {
  return new Promise((resolve) => {
    const req = https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36' } }, (res) => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => resolve({ status: res.statusCode, body: d, location: res.headers.location }));
    });
    req.on('error', (e) => resolve({ status: 0, body: '', error: e.message }));
    req.setTimeout(10000, () => { req.destroy(); resolve({ status: 0, body: '', error: 'timeout' }); });
  });
}

async function crawl() {
  const base = 'https://www.kerenia.fr';
  const visited = new Set();
  const toVisit = ['/'];
  const found = [];

  while (toVisit.length > 0) {
    const path = toVisit.shift();
    if (visited.has(path)) continue;
    visited.add(path);

    const url = base + path;
    console.error('Fetching:', url);
    const res = await get(url);

    if (res.status >= 300 && res.status < 400 && res.location) {
      console.log(`REDIRECT ${path} -> ${res.location}`);
      found.push({ from: path, to: res.location, status: res.status });
      continue;
    }

    found.push({ from: path, status: res.status });

    // Extract internal links
    const links = [...res.body.matchAll(/href=["']((?:https?:\/\/www\.kerenia\.fr)?\/[^"'#?<\s]*)/g)]
      .map(m => {
        let l = m[1];
        if (l.startsWith('https://www.kerenia.fr')) l = l.replace('https://www.kerenia.fr', '');
        return l;
      })
      .filter(l => l && l.startsWith('/') && !l.match(/\.(jpg|jpeg|png|gif|webp|svg|css|js|ico|pdf|xml|txt)$/i));

    for (const link of links) {
      if (!visited.has(link) && !toVisit.includes(link)) {
        toVisit.push(link);
      }
    }
  }

  console.log('\n=== ALL URLS FOUND ===');
  found.forEach(f => console.log(JSON.stringify(f)));
}

crawl();
