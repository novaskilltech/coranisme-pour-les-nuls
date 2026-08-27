/**
 * Script de Génération Haute Fidélité pour les 10 Packs de Langue
 */

const fs = require('fs');
const path = require('path');

const LANG_PACKS_DIR = path.join(__dirname, 'lang_packs');
if (!fs.existsSync(LANG_PACKS_DIR)) {
  fs.mkdirSync(LANG_PACKS_DIR, { recursive: true });
}

// Charger FR
const frRaw = fs.readFileSync(path.join(__dirname, '..', 'js', 'translations', 'fr.js'), 'utf8');
const frSandbox = {};
new Function('window', frRaw + '\nwindow.FR_DATA = window.I18N_DATA["fr"];')(frSandbox);
const FR = frSandbox.FR_DATA;

console.log('✅ Base FR chargée avec 10 arguments.');

// Configuration globale des langues
const LANG_METAS = {
  ar: { code: 'ar', name: 'Arabe', native: 'العربية', flag: '🇸🇦', dir: 'rtl' },
  ary: { code: 'ary', name: 'Darija', native: 'الدارجة المغربية', flag: '🇲🇦', dir: 'rtl' },
  en: { code: 'en', name: 'English', native: 'English', flag: '🇬🇧', dir: 'ltr' },
  es: { code: 'es', name: 'Espagnol', native: 'Español', flag: '🇪🇸', dir: 'ltr' },
  de: { code: 'de', name: 'Allemand', native: 'Deutsch', flag: '🇩🇪', dir: 'ltr' },
  it: { code: 'it', name: 'Italien', native: 'Italiano', flag: '🇮🇹', dir: 'ltr' },
  pt: { code: 'pt', name: 'Portugais', native: 'Português', flag: '🇵🇹', dir: 'ltr' },
  ur: { code: 'ur', name: 'Ourdou', native: 'اردو', flag: '🇵🇰', dir: 'rtl' },
  ta: { code: 'ta', name: 'Tamoul', native: 'தமிழ்', flag: '🇮🇳', dir: 'ltr' },
  ps: { code: 'ps', name: 'Pachto', native: 'پښتو', flag: '🇦🇫', dir: 'rtl' }
};

// Modèle de traduction par langue
// ...
