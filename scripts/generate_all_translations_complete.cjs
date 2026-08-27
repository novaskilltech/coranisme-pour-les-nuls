/**
 * Générateur Complet et Exhaustif des Traductions (11 Langues)
 * Produit des fichiers de traduction riches, complets et fidèles pour :
 * FR, AR, EN, ES, DE, IT, PT, UR, TA, PS, ARY
 */

const fs = require('fs');
const path = require('path');

const TRANSLATIONS_DIR = path.join(__dirname, '..', 'js', 'translations');
if (!fs.existsSync(TRANSLATIONS_DIR)) {
  fs.mkdirSync(TRANSLATIONS_DIR, { recursive: true });
}

// 1. Charger FR comme référence
const frRaw = fs.readFileSync(path.join(TRANSLATIONS_DIR, 'fr.js'), 'utf8');
const frSandbox = {};
new Function('window', frRaw + '\nwindow.FR_DATA = window.I18N_DATA["fr"];')(frSandbox);
const FR = frSandbox.FR_DATA;

console.log('✅ Base FR chargée avec 10 arguments complets.');

// Configuration des langues
const LANGUAGES = [
  { code: 'ar', name: 'Arabe', native: 'العربية', flag: '🇸🇦', dir: 'rtl' },
  { code: 'ary', name: 'Darija', native: 'الدارجة المغربية', flag: '🇲🇦', dir: 'rtl' },
  { code: 'en', name: 'English', native: 'English', flag: '🇬🇧', dir: 'ltr' },
  { code: 'es', name: 'Espagnol', native: 'Español', flag: '🇪🇸', dir: 'ltr' },
  { code: 'de', name: 'Allemand', native: 'Deutsch', flag: '🇩🇪', dir: 'ltr' },
  { code: 'it', name: 'Italien', native: 'Italiano', flag: '🇮🇹', dir: 'ltr' },
  { code: 'pt', name: 'Portugais', native: 'Português', flag: '🇵🇹', dir: 'ltr' },
  { code: 'ur', name: 'Ourdou', native: 'اردو', flag: '🇵🇰', dir: 'rtl' },
  { code: 'ta', name: 'Tamoul', native: 'தமிழ்', flag: '🇮🇳', dir: 'ltr' },
  { code: 'ps', name: 'Pachto', native: 'پښتو', flag: '🇦🇫', dir: 'rtl' }
];

// Importer le générateur
require('./build_languages_full.cjs');
