const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'js', 'translations');
const codes = ['fr', 'ar', 'ary', 'en', 'es', 'de', 'it', 'pt', 'ur', 'ta', 'ps', 'ku', 'ce'];

const frenchStopWords = [
  ' et ', ' le ', ' la ', ' les ', ' un ', ' une ', ' des ', ' du ', ' de ', ' dans ',
  ' pour ', ' avec ', ' par ', ' sur ', ' sous ', ' cette ', ' ces ', ' cet ',
  ' nous ', ' vous ', ' ils ', ' elles ', ' est ', ' sont ', ' était ', ' étaient ',
  ' être ', ' avoir ', ' fait ', ' faire ', ' sans ', ' selon ', ' contre ', ' parce que '
];

const results = {};

function countFrenchWords(text) {
  if (typeof text !== 'string') return 0;
  const lower = ' ' + text.toLowerCase() + ' ';
  let count = 0;
  for (const sw of frenchStopWords) {
    let pos = 0;
    while ((pos = lower.indexOf(sw, pos)) !== -1) {
      count++;
      pos += sw.length;
    }
  }
  return count;
}

function traverseObject(obj, currentPath, langCode, report) {
  if (!obj) return;
  if (typeof obj === 'string') {
    // Exclure les textes en arabe (caractères arabes) ou les champs arabes 'ar', 'basmala', 'ref'
    const isArabicScript = /[\u0600-\u06FF]/.test(obj);
    const lastKey = currentPath.split('.').pop();
    
    if (lastKey === 'ar' || lastKey === 'basmala' || lastKey === 'flag' || lastKey === 'code' || lastKey === 'pdfFile' || lastKey === 'slug') {
      return;
    }

    if (langCode !== 'fr') {
      const frWordCount = countFrenchWords(obj);
      // Si la chaîne est longue et contient plusieurs mots français typiques
      if (frWordCount >= 3) {
        report.frenchSuspects.push({
          path: currentPath,
          preview: obj.slice(0, 80) + '...',
          frWordCount
        });
      }
    }
    return;
  }
  if (Array.isArray(obj)) {
    obj.forEach((item, index) => {
      traverseObject(item, `${currentPath}[${index}]`, langCode, report);
    });
    return;
  }
  if (typeof obj === 'object') {
    for (const key of Object.keys(obj)) {
      traverseObject(obj[key], currentPath ? `${currentPath}.${key}` : key, langCode, report);
    }
  }
}

console.log('=== AUDIT EXHAUSTIF DES 13 LANGUES ===\n');

codes.forEach(c => {
  const p = path.join(dir, c + '.js');
  const raw = fs.readFileSync(p, 'utf8');
  const sb = {};
  new Function('window', 'sandbox', raw + `\nsandbox.DATA = window.I18N_DATA["${c}"];`)({}, sb);
  const data = sb.DATA;

  const report = {
    code: c,
    name: data.name,
    native: data.native,
    argsCount: data.arguments ? data.arguments.length : 0,
    uiKeys: data.ui ? Object.keys(data.ui).length : 0,
    hasPreface: !!data.preface,
    hasIntro: !!data.intro,
    frenchSuspects: [],
    versesWithoutTranslation: 0,
    versesWithArabicOnly: 0,
    totalVerses: 0
  };

  // Traverse data
  traverseObject(data, '', c, report);

  // Check verses
  if (data.arguments) {
    data.arguments.forEach((arg, aIdx) => {
      // theirArgument verses
      if (arg.theirArgument && arg.theirArgument.verses) {
        arg.theirArgument.verses.forEach((v, vIdx) => {
          report.totalVerses++;
          const tr = v.translation || v.fr;
          if (!tr || tr.trim() === '') {
            report.versesWithoutTranslation++;
          } else if (c !== 'fr' && countFrenchWords(tr) >= 3) {
            // Verse translation is still in French!
            report.frenchSuspects.push({
              path: `arguments[${aIdx}].theirArgument.verses[${vIdx}].translation`,
              preview: tr.slice(0, 80) + '...',
              frWordCount: countFrenchWords(tr)
            });
          }
        });
      }
      // quranicArchitecture verses
      if (arg.quranicArchitecture && arg.quranicArchitecture.verses) {
        arg.quranicArchitecture.verses.forEach((v, vIdx) => {
          report.totalVerses++;
          const tr = v.translation || v.fr;
          if (!tr || tr.trim() === '') {
            report.versesWithoutTranslation++;
          } else if (c !== 'fr' && countFrenchWords(tr) >= 3) {
            // Verse translation is still in French!
            report.frenchSuspects.push({
              path: `arguments[${aIdx}].quranicArchitecture.verses[${vIdx}].translation`,
              preview: tr.slice(0, 80) + '...',
              frWordCount: countFrenchWords(tr)
            });
          }
        });
      }
    });
  }

  results[c] = report;
  console.log(`Langue [${c.toUpperCase()}] : ${report.frenchSuspects.length} fragments suspects de texte français restant, ${report.totalVerses} versets audités, ${report.versesWithoutTranslation} sans traduction.`);
});

console.log('\n=== DÉTAIL DES FRAGMENTS FRANÇAIS RESTANTS PAR LANGUE ===\n');
for (const c of codes) {
  if (c === 'fr') continue;
  const rep = results[c];
  if (rep.frenchSuspects.length > 0) {
    console.log(`\n--- [${c.toUpperCase()}] (${rep.frenchSuspects.length} éléments en français) ---`);
    rep.frenchSuspects.slice(0, 15).forEach(s => {
      console.log(`  - ${s.path} (${s.frWordCount} mots FR) : "${s.preview}"`);
    });
    if (rep.frenchSuspects.length > 15) {
      console.log(`  ... et ${rep.frenchSuspects.length - 15} autres éléments.`);
    }
  }
}
