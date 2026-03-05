const fs = require('fs');

try {
    const html = fs.readFileSync('map.html', 'utf-8');

    // Find all JSON arrays in the document
    const matches = html.match(/\["(.*?)","/g) || [];

    console.log("Extracting potential reviews:");
    const revs = html.match(/"([^"\\]{40,800}?)"/g) || [];

    let count = 0;
    let seen = new Set();

    for (let rev of revs) {
        let clean = rev.slice(1, -1);
        // Filter for french reviews characteristics
        if ((clean.includes('appartement') || clean.includes('séjour') || clean.includes('piscine') || clean.includes('très') || clean.includes('accueil') || clean.includes('emplacement'))
            && clean.length > 50 && !clean.includes('<') && !clean.includes('function') && !clean.includes('{')) {
            if (!seen.has(clean)) {
                console.log(`- ${clean}`);
                seen.add(clean);
                count++;
            }
        }
    }
} catch (err) {
    console.error(err);
}
