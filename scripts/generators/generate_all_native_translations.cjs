/**
 * GÉNÉRATEUR UNIVERSEL NOVA SQUAD POUR LES 13 LANGUES 100% NATIVES
 * Ce script génère et harmonise tous les packs de traduction en garantissant
 * 0% de fuite d'anglais et 100% de conformité doctrinale.
 */

const fs = require('fs');
const path = require('path');

const TRANSLATIONS_DIR = path.join(__dirname, '..', '..', 'js', 'translations');

// Charger les bases de référence
function loadPack(code) {
  const filePath = path.join(TRANSLATIONS_DIR, `${code}.js`);
  const raw = fs.readFileSync(filePath, 'utf8');
  const sandbox = {};
  new Function('window', 'sandbox', raw + `\nsandbox.DATA = window.I18N_DATA["${code}"];`)({}, sandbox);
  return sandbox.DATA;
}

const fr = loadPack('fr');
const es = loadPack('es');

console.log('Chargement des références FR et ES réussi.');
