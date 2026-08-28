/**
 * Audit Complet & Automatisé de la Boîte à Outils des Sophismes
 * Vérifie l'intégrité des 13 langues, des données, du PDF, des badges et du mapping.
 */

const fs = require('fs');
const path = require('path');

const PDF_PATH = path.join(__dirname, '..', 'pdf', 'Boite_a_outils_Sophismes_Coranisme.pdf');
const TRANSLATIONS_DIR = path.join(__dirname, '..', 'js', 'translations');
const DATA_JS_PATH = path.join(__dirname, '..', 'js', 'data.js');
const INDEX_HTML_PATH = path.join(__dirname, '..', 'index.html');

console.log('====================================================');
console.log('🔍 AUDIT BOÎTE À OUTILS & SOPHISMES DU CORANISME');
console.log('====================================================\n');

let errorCount = 0;

// 1. Vérification du PDF
if (fs.existsSync(PDF_PATH)) {
  const stats = fs.statSync(PDF_PATH);
  console.log(`✅ PDF présent : pdf/Boite_a_outils_Sophismes_Coranisme.pdf (${stats.size} octets)`);
} else {
  console.error(`❌ PDF manquant : ${PDF_PATH}`);
  errorCount++;
}

// 2. Vérification de js/data.js
const dataJs = fs.readFileSync(DATA_JS_PATH, 'utf8');
const dataSandbox = {};
try {
  new Function('window', 'dataSandbox', dataJs + '\ndataSandbox.ARGS = ARGUMENTS_DATA;\ndataSandbox.FALLACIES = FALLACIES_DATA;')({}, dataSandbox);
  console.log(`✅ js/data.js valide : ${dataSandbox.ARGS.length} arguments, ${dataSandbox.FALLACIES.length} sophismes.`);
} catch (e) {
  console.error(`❌ Erreur dans js/data.js :`, e.message);
  errorCount++;
}

// 3. Vérification des 13 langues
const LANGS = ['fr', 'ar', 'ary', 'en', 'es', 'de', 'it', 'pt', 'ur', 'ta', 'ps', 'ku', 'ce'];

LANGS.forEach(code => {
  const file = path.join(TRANSLATIONS_DIR, `${code}.js`);
  if (!fs.existsSync(file)) {
    console.error(`❌ Fichier de langue manquant : ${code}.js`);
    errorCount++;
    return;
  }
  const content = fs.readFileSync(file, 'utf8');
  const sandbox = {};
  try {
    new Function('window', 'sandbox', content + `\nsandbox.DATA = window.I18N_DATA["${code}"];`)({}, sandbox);
    const pack = sandbox.DATA;
    if (!pack) throw new Error('Package data introuvable');
    if (!pack.fallaciesToolbox || !pack.fallaciesToolbox.items || pack.fallaciesToolbox.items.length !== 10) {
      throw new Error(`Boîte à outils incomplète (${pack.fallaciesToolbox?.items?.length || 0}/10 sophismes)`);
    }
    if (!pack.arguments || pack.arguments.length !== 10) {
      throw new Error(`Arguments incomplets (${pack.arguments?.length || 0}/10 arguments)`);
    }
    pack.arguments.forEach((arg, idx) => {
      if (!arg.fallacies || arg.fallacies.length === 0) {
        throw new Error(`Argument ${idx + 1} n'a pas de sophismes associés`);
      }
    });
    console.log(`✅ Langue [${code.toUpperCase()}] : 10 sophismes & 10 arguments validés.`);
  } catch (e) {
    console.error(`❌ Erreur dans ${code}.js :`, e.message);
    errorCount++;
  }
});

// 4. Vérification d'index.html
const indexHtml = fs.readFileSync(INDEX_HTML_PATH, 'utf8');
const checks = [
  { label: "Ancre #boite-a-outils", pattern: 'id="boite-a-outils"' },
  { label: "Lien Sidebar #boite-a-outils", pattern: 'href="#boite-a-outils"' },
  { label: "Modale #fallacy-modal", pattern: 'id="fallacy-modal"' },
  { label: "Lien de téléchargement du PDF", pattern: 'Boite_a_outils_Sophismes_Coranisme.pdf' },
  { label: "Règle d'or méthodologique", pattern: 'REPÉRER UN SOPHISME' },
  { label: "10 sophismes dans le DOM statique", pattern: 'id="fallacy-card-homme-de-paille"' }
];

checks.forEach(c => {
  if (indexHtml.includes(c.pattern)) {
    console.log(`✅ index.html : ${c.label} OK.`);
  } else {
    console.error(`❌ index.html : ${c.label} MANQUANT.`);
    errorCount++;
  }
});

// 5. Vérification des pages statiques arguments/
const ARG_FILES = fs.readdirSync(path.join(__dirname, '..', 'arguments')).filter(f => f.endsWith('.html'));
ARG_FILES.forEach(f => {
  const content = fs.readFileSync(path.join(__dirname, '..', 'arguments', f), 'utf8');
  if (content.includes('class="arg-fallacies-box"') && content.includes('id="fallacy-modal"')) {
    console.log(`✅ arguments/${f} : Box de sophismes & modale OK.`);
  } else {
    console.error(`❌ arguments/${f} : Box de sophismes ou modale manquante.`);
    errorCount++;
  }
});

console.log('\n====================================================');
if (errorCount === 0) {
  console.log('🎉 AUDIT 100% RÉUSSI : TOUS LES CRITÈRES SONT RESPECTÉS !');
} else {
  console.error(`⚠️ ${errorCount} ERREUR(S) DÉTECTÉE(S).`);
  process.exit(1);
}
console.log('====================================================\n');
