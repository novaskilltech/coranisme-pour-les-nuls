const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'js', 'translations');
const codes = ['fr', 'ar', 'ary', 'en', 'es', 'de', 'it', 'pt', 'ur', 'ta', 'ps', 'ku', 'ce'];

function isFrenchText(text) {
  if (typeof text !== 'string') return false;
  // Détecter des mots exclusivement ou très typiquement français
  const frenchPatterns = [
    /\b(dans|avec|pour|cette|notre|votre|leur|leurs|nous|vous|ils|elles|sont|était|étaient|avoir|être|faire|selon|contre|parce que|lorsque|puisque|cependant|néanmoins|ainsi|toutefois|aucun|aucune|chaque|plusieurs|tous|toutes|règle|obéissance|prophète|messager|sourate|verset|versets|analogie|situation|enseignement|objection|réponse)\b/i
  ];
  return frenchPatterns.some(p => p.test(text));
}

const breakdown = {};

codes.forEach(c => {
  const p = path.join(dir, c + '.js');
  const raw = fs.readFileSync(p, 'utf8');
  const sb = {};
  new Function('window', 'sandbox', raw + `\nsandbox.DATA = window.I18N_DATA["${c}"];`)({}, sb);
  const data = sb.DATA;

  breakdown[c] = {
    name: data.name,
    native: data.native,
    argumentsBreakdown: []
  };

  if (data.arguments) {
    data.arguments.forEach((arg, idx) => {
      let frenchFields = 0;
      let totalFields = 0;
      const fieldList = [];

      function checkField(val, keyName) {
        if (typeof val === 'string') {
          totalFields++;
          if (c !== 'fr' && isFrenchText(val)) {
            frenchFields++;
            fieldList.push(keyName);
          }
        } else if (Array.isArray(val)) {
          val.forEach((item, i) => checkField(item, `${keyName}[${i}]`));
        } else if (typeof val === 'object' && val !== null) {
          Object.keys(val).forEach(k => {
            if (k === 'ar' || k === 'basmala' || k === 'code' || k === 'flag' || k === 'pdfFile' || k === 'slug' || k === 'number' || k === 'id') return;
            checkField(val[k], `${keyName}.${k}`);
          });
        }
      }

      checkField(arg, `arg${arg.id}`);
      breakdown[c].argumentsBreakdown.push({
        id: arg.id,
        title: arg.title,
        frenchFields,
        totalFields,
        isFullyTranslated: frenchFields === 0,
        sampleFrench: fieldList.slice(0, 3)
      });
    });
  }
});

console.log('=== BILAN PAR ARGUMENT ET PAR LANGUE ===\n');
codes.forEach(c => {
  if (c === 'fr') return;
  console.log(`\n================== LANGUE : ${c.toUpperCase()} (${breakdown[c].name}) ==================`);
  let untranslatedCount = 0;
  breakdown[c].argumentsBreakdown.forEach(a => {
    if (a.frenchFields > 0) {
      untranslatedCount++;
      console.log(`  ❌ Arg ${a.id} : ${a.frenchFields}/${a.totalFields} champs en français (ex: ${a.sampleFrench.join(', ')})`);
    } else {
      console.log(`  ✅ Arg ${a.id} : 100% traduit (${a.totalFields} champs)`);
    }
  });
  console.log(`-> Total arguments nécessitant une traduction pour ${c.toUpperCase()} : ${untranslatedCount} / 10`);
});
