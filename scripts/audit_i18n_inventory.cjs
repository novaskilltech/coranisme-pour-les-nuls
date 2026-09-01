/* Produces a reviewable inventory; it never mutates translation packs. */
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const locales = ['fr', 'ar', 'ary', 'en', 'es', 'de', 'it', 'pt', 'ur', 'ta', 'ps', 'ku', 'ce'];
const directory = path.join(root, 'js', 'translations');
const load = code => {
  const sandbox = {};
  new Function('window', 'sandbox', `${fs.readFileSync(path.join(directory, `${code}.js`), 'utf8')}\nsandbox.pack = window.I18N_DATA[${JSON.stringify(code)}];`)({}, sandbox);
  return sandbox.pack;
};
const flatten = (value, base = '', result = new Map()) => {
  if (Array.isArray(value)) value.forEach((child, index) => flatten(child, `${base}[${index}]`, result));
  else if (value && typeof value === 'object') Object.entries(value).forEach(([key, child]) => flatten(child, base ? `${base}.${key}` : key, result));
  else result.set(base, { type: value === null ? 'null' : typeof value, value });
  return result;
};

const packs = Object.fromEntries(locales.map(code => [code, load(code)]));
const french = packs.fr;
const inventory = {};
for (const code of locales.filter(code => code !== 'fr')) {
  const verseLeaks = [];
  for (const [argumentIndex, argument] of packs[code].arguments.entries()) {
    for (const sectionName of ['theirArgument', 'quranicArchitecture']) {
      const verses = argument[sectionName]?.verses || [];
      verses.forEach((verse, verseIndex) => {
        const reference = french.arguments[argumentIndex]?.[sectionName]?.verses?.[verseIndex];
        if (reference && verse.translation && verse.translation === reference.translation) {
          verseLeaks.push({
            path: `arguments[${argumentIndex}].${sectionName}.verses[${verseIndex}].translation`,
            argument: argumentIndex + 1,
            section: sectionName,
            ref: verse.ref,
            arabic: verse.ar,
            currentFrench: verse.translation
          });
        }
      });
    }
  }
  const current = flatten(packs[code]);
  const reference = flatten(french);
  const missing = [...reference.keys()].filter(key => !current.has(key));
  const typeMismatches = [...reference.keys()].filter(key => current.has(key) && reference.get(key).type !== current.get(key).type);
  inventory[code] = { verseLeaks, structural: { missingLeaves: missing.length, typeMismatches: typeMismatches.length } };
}
fs.writeFileSync(path.join(root, 'scripts', 'i18n-audit-report.json'), JSON.stringify(inventory, null, 2) + '\n', 'utf8');
for (const code of locales.filter(code => code !== 'fr')) {
  const report = inventory[code];
  console.log(`${code.toUpperCase()}: verseFrench=${report.verseLeaks.length}; missingLeaves=${report.structural.missingLeaves}; typeMismatches=${report.structural.typeMismatches}`);
}
