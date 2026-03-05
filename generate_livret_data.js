const fs = require('fs');
const path = require('path');

const livretPath = path.join(__dirname, 'livret.json');
const dataPath = path.join(__dirname, 'lib/data.ts');

const livretJson = fs.readFileSync(livretPath, 'utf8');
const livretData = JSON.parse(livretJson).livret;

const dataFileContent = fs.readFileSync(dataPath, 'utf8');

const outputTs = `
// Livret d'Accueil Data (Currently in French for all locales, structural translation only at UI level if needed)
export const LIVRET_DATA: Record<Locale, import('./types').Livret> = {
  fr: ${JSON.stringify(livretData, null, 2)},
  en: ${JSON.stringify(livretData, null, 2)},
  es: ${JSON.stringify(livretData, null, 2)},
  eu: ${JSON.stringify(livretData, null, 2)}
};
`;

if (!dataFileContent.includes('export const LIVRET_DATA')) {
  fs.appendFileSync(dataPath, outputTs);
  console.log("Successfully appended LIVRET_DATA to lib/data.ts");
} else {
  console.log("LIVRET_DATA already exists in lib/data.ts");
}
