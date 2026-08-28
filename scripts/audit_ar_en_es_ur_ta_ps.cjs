const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'js', 'translations');
const codes = ['ar', 'ary', 'en', 'es', 'ur', 'ta', 'ps'];

codes.forEach(c => {
  const p = path.join(dir, c + '.js');
  const raw = fs.readFileSync(p, 'utf8');
  const sb = {};
  new Function('window', 'sandbox', raw + `\nsandbox.DATA = window.I18N_DATA["${c}"];`)({}, sb);
  const data = sb.DATA;

  console.log(`\n================== LANGUE : ${c.toUpperCase()} (${data.name}) ==================`);
  
  // Vérifier la préface
  if (data.preface) {
    let prefFr = 0;
    JSON.stringify(data.preface, (k, v) => {
      if (typeof v === 'string' && k !== 'basmala' && k !== 'ar') {
        if (/\b(pourquoi|cette|nous|dans|avec|notre|manuel|ouvrage|salah)\b/i.test(v)) prefFr++;
      }
      return v;
    });
    console.log(`  Préface : ${prefFr > 0 ? `⚠️ ${prefFr} mentions françaises` : '✅ 100% traduite'}`);
  }

  // Vérifier l'intro
  if (data.intro) {
    let introFr = 0;
    JSON.stringify(data.intro, (k, v) => {
      if (typeof v === 'string' && k !== 'basmala' && k !== 'ar') {
        if (/\b(qui sont|contexte|définition|repères|courant|hadiths)\b/i.test(v)) introFr++;
      }
      return v;
    });
    console.log(`  Intro : ${introFr > 0 ? `⚠️ ${introFr} mentions françaises` : '✅ 100% traduite'}`);
  }

  // Vérifier les versets
  let verseUntranslatedCount = 0;
  let verseTotal = 0;
  if (data.arguments) {
    data.arguments.forEach((arg, aIdx) => {
      const checkV = (vList, context) => {
        if (!vList) return;
        vList.forEach((v, vIdx) => {
          verseTotal++;
          const tr = v.translation || v.fr;
          if (!tr || (c !== 'ar' && c !== 'ary' && /\b(dans|avec|pour|cette|seigneur|croyants|obéissez|messager)\b/i.test(tr))) {
            verseUntranslatedCount++;
            console.log(`  ⚠️ Arg ${arg.id} ${context} verset [${v.ref}] : traduction manquante ou en français : "${tr ? tr.slice(0, 60) : 'VIDE'}..."`);
          }
        });
      };
      checkV(arg.theirArgument?.verses, 'Thèse adverse');
      checkV(arg.quranicArchitecture?.verses, 'Archi coranique');
    });
  }
  console.log(`  Versets : ${verseTotal} au total, ${verseUntranslatedCount} en français / non traduits.`);
});
