const https = require('https');
const url = "https://www.google.com/maps/place/R%C3%A9sidence+Ker+Enia+Meubl%C3%A9s+de+Tourisme/@43.3583076,-1.4034587,17z/data=!4m11!3m10!1s0xd513bde8e105d53:0xd49a1d40c1fa8fda!5m2!4m1!1i2!8m2!3d43.3583076!4d-1.4034587!9m1!1b1!16s%2Fg%2F11j53cl1c9?hl=fr";

https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
    let body = '';
    res.on('data', chunk => body += chunk);
    res.on('end', () => {
        // Regex to match anything that looks like a french review or name in the JSON blobs
        const strings = body.match(/"([^"\\]{40,300}?)"/g) || [];
        const valid = strings.filter(s =>
            s.toLowerCase().includes('piscine') ||
            s.toLowerCase().includes('calme') ||
            s.toLowerCase().includes('appartement') ||
            s.toLowerCase().includes('séjour') ||
            s.toLowerCase().includes('séjourné') ||
            s.toLowerCase().includes('idéale') ||
            s.toLowerCase().includes('très') ||
            s.toLowerCase().includes('merci') ||
            s.toLowerCase().includes('excellent')
        );

        // Also try to find authors by looking at short strings around them (heuristics)
        const authors = body.match(/"([A-Z][a-z]+ [A-Z][a-z]+)"/g) || [];

        console.log("Possible Reviews:");
        [...new Set(valid)].slice(0, 50).forEach(m => console.log(m));

        console.log("\nPossible Authors:");
        [...new Set(authors)].slice(0, 50).forEach(m => console.log(m));
    });
}).on('error', (e) => {
    console.error(e);
});
