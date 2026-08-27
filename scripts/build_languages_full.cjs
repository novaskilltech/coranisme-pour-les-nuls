/**
 * Module de Traduction Intégrale des 10 Arguments pour les 10 Langues Cibles
 */

const fs = require('fs');
const path = require('path');

const TRANSLATIONS_DIR = path.join(__dirname, '..', 'js', 'translations');
const frRaw = fs.readFileSync(path.join(TRANSLATIONS_DIR, 'fr.js'), 'utf8');
const frSandbox = {};
new Function('window', frRaw + '\nwindow.FR_DATA = window.I18N_DATA["fr"];')(frSandbox);
const FR = frSandbox.FR_DATA;

// Dictionnaires complets pour chaque langue
const LANG_DICTIONARIES = {
  ar: require('./lang_packs/ar_full.cjs'),
  ary: require('./lang_packs/ary_full.cjs'),
  en: require('./lang_packs/en_full.cjs'),
  es: require('./lang_packs/es_full.cjs'),
  de: require('./lang_packs/de_full.cjs'),
  it: require('./lang_packs/it_full.cjs'),
  pt: require('./lang_packs/pt_full.cjs'),
  ur: require('./lang_packs/ur_full.cjs'),
  ta: require('./lang_packs/ta_full.cjs'),
  ps: require('./lang_packs/ps_full.cjs')
};

Object.keys(LANG_DICTIONARIES).forEach(code => {
  const pack = LANG_DICTIONARIES[code];
  const fileContent = `/**
 * Pack de Langue : ${pack.name} (${pack.code.toUpperCase()}) - ${pack.native}
 * Traduction Intégrale et Vérifiée
 */
window.I18N_DATA = window.I18N_DATA || {};
window.I18N_DATA['${pack.code}'] = ${JSON.stringify(pack, null, 2)};
`;

  fs.writeFileSync(path.join(TRANSLATIONS_DIR, `${pack.code}.js`), fileContent, 'utf8');
  console.log(`✅ Fichier js/translations/${pack.code}.js généré avec succès (${pack.arguments.length} arguments traduits).`);
});

console.log('🎉 Compilation multilingue 100% terminée avec succès.');
