/**
 * Mise à jour du titre complet et engageant de la Boîte à Outils dans la sidebar et la navigation
 * Titre FR : "Boîte à outils — Reconnaître les sophismes avant de débattre"
 */

const fs = require('fs');
const path = require('path');

const TRANSLATIONS_DIR = path.join(__dirname, '..', 'js', 'translations');
const ARGUMENTS_DIR = path.join(__dirname, '..', 'arguments');
const INDEX_PATH = path.join(__dirname, '..', 'index.html');
const APP_JS_PATH = path.join(__dirname, '..', 'js', 'app.js');

const NAV_TITLES = {
  fr: "Boîte à outils — Reconnaître les sophismes avant de débattre",
  ar: "صندوق الأدوات — كشف المغالطات قبل النقاش",
  ary: "بواط د الأدوات — كشف المغالطات قبل النقاش",
  en: "Toolbox — Identify Fallacies Before Debating",
  es: "Caja de herramientas — Identificar falacias antes de debatir",
  de: "Werkzeugkasten — Trugschlüsse vor der Debatte erkennen",
  it: "Cassetta degli attrezzi — Riconoscere le fallacie prima di dibattere",
  pt: "Caixa de ferramentas — Reconhecer falácias antes de debater",
  ur: "ٹول باکس — مناظرے سے پہلے مغالطوں کی شناخت",
  ta: "கருவிப்பெட்டி — விவாதத்திற்கு முன் போலிகளை அறிதல்",
  ps: "لارښود — له مناظرې وړاندې د مغالطو پېژندنه",
  ku: "Qutiya Amûran — Berî nîqaşê heletiyan nas bike",
  ce: "ГӀирсан бокс — Дийцаре валале гӀалаташ довзар"
};

// 1. Mettre à jour les 13 fichiers de traduction
Object.keys(NAV_TITLES).forEach(code => {
  const filePath = path.join(TRANSLATIONS_DIR, `${code}.js`);
  if (!fs.existsSync(filePath)) return;

  const raw = fs.readFileSync(filePath, 'utf8');
  const sandbox = {};
  new Function('window', 'sandbox', raw + `\nsandbox.DATA = window.I18N_DATA["${code}"];`)({}, sandbox);
  const pack = sandbox.DATA;
  if (!pack) return;

  pack.ui.navFallacies = NAV_TITLES[code];

  const output = `/**
 * Pack de Langue : ${pack.name} (${pack.code.toUpperCase()}) - ${pack.native}
 * Traduction Exhaustive et Intégrale (UI, Préface, Intro, 10 Arguments, Boîte à Outils des Sophismes, Modales)
 */
window.I18N_DATA = window.I18N_DATA || {};
window.I18N_DATA['${pack.code}'] = ${JSON.stringify(pack, null, 2)};
`;
  fs.writeFileSync(filePath, output, 'utf8');
  console.log(`✅ Fichier js/translations/${code}.js mis à jour avec le titre complet.`);
});

// 2. Mettre à jour index.html
let indexContent = fs.readFileSync(INDEX_PATH, 'utf8');
indexContent = indexContent.replace(
  /<span class="sidebar-nav-title">Boîte à outils[^<]*<\/span>/g,
  `<span class="sidebar-nav-title">Boîte à outils — Reconnaître les sophismes avant de débattre</span>`
);
fs.writeFileSync(INDEX_PATH, indexContent, 'utf8');
console.log(`✅ index.html mis à jour.`);

// 3. Mettre à jour arguments/*.html
const argFiles = fs.readdirSync(ARGUMENTS_DIR).filter(f => f.endsWith('.html'));
argFiles.forEach(f => {
  const p = path.join(ARGUMENTS_DIR, f);
  let c = fs.readFileSync(p, 'utf8');
  c = c.replace(
    /<span class="sidebar-nav-title">Boîte à outils[^<]*<\/span>/g,
    `<span class="sidebar-nav-title">Boîte à outils — Reconnaître les sophismes avant de débattre</span>`
  );
  fs.writeFileSync(p, c, 'utf8');
  console.log(`✅ arguments/${f} mis à jour.`);
});

// 4. Mettre à jour js/app.js fallback
let appJsContent = fs.readFileSync(APP_JS_PATH, 'utf8');
appJsContent = appJsContent.replace(
  /\${ui\.navFallacies \|\| [^}]+}/g,
  `\${ui.navFallacies || "Boîte à outils — Reconnaître les sophismes avant de débattre"}`
);
fs.writeFileSync(APP_JS_PATH, appJsContent, 'utf8');
console.log(`✅ js/app.js mis à jour.`);

console.log('\n🎉 Titre du bouton de la Boîte à Outils mis à jour sur tout le projet !');
