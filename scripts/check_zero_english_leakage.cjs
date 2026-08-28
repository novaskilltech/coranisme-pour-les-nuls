/**
 * AUDIT GLOBAL NOVA-GENIUS DE CONFORMITÉ LINGUISTIQUE (13 LANGUES)
 * Vérifie l'absence totale de phrases ou fragments d'anglais dans les 12 autres langues.
 */

const fs = require('fs');
const path = require('path');

const TRANSLATIONS_DIR = path.join(__dirname, '..', 'js', 'translations');
const allLangs = ['fr', 'ar', 'en', 'es', 'it', 'pt', 'de', 'ur', 'ta', 'ary', 'ps', 'ku', 'ce'];

console.log('====================================================');
console.log('🔍 AUDIT GLOBAL DE FUITE ANGLAISE SUR LES 13 LANGUES');
console.log('====================================================');

const forbiddenEnglishPatterns = [
  'In the Name of Allah',
  'A Personal Observation',
  'Why This Book',
  'This work was born',
  'Quranism',
  'Hadith sciences',
  'transmission methodology',
  'clarify to the people',
  'teaching them the Book',
  'without need for explanation',
  'establishes the foundations',
  'abrogates the Sunnah',
  'lists every',
  'with your own eyes',
  'is the internal clarification',
  'Translation of the meaning:',
  'Author of the Manual',
  'Downloading, printing, reading',
  'Use in study circles',
  'Any commercial exploitation',
  'FALLACIES DETECTED IN THIS ARGUMENT:',
  'Open in Fallacy Toolbox',
  'Straw Man',
  'False Dilemma',
  'Hasty Generalization',
  'Double Standard',
  'Equivocation',
  'Possibility Fallacy',
  'Shifting Burden of Proof',
  'Appeal to Emotion'
];

let globalErrors = 0;

allLangs.forEach(lang => {
  if (lang === 'en') {
    console.log(`🇬🇧 EN (English) : Langue de référence anglaise [Exemptée]`);
    return;
  }
  
  const filePath = path.join(TRANSLATIONS_DIR, `${lang}.js`);
  const content = fs.readFileSync(filePath, 'utf8');
  let langErrors = 0;

  forbiddenEnglishPatterns.forEach(pattern => {
    const matches = content.split(pattern).length - 1;
    if (matches > 0) {
      console.error(`❌ [${lang.toUpperCase()}] Fuite détectée : "${pattern}" (${matches} occurrence(s))`);
      langErrors += matches;
      globalErrors += matches;
    }
  });

  if (langErrors === 0) {
    console.log(`✅ [${lang.toUpperCase()}] 100% Natif et Conforme (0 fuite anglaise)`);
  }
});

console.log('====================================================');
if (globalErrors === 0) {
  console.log('🎉 AUDIT RÉUSSI AVEC SUCCÈS : 100% DES LANGUES SONT NATIVES ET PURS !');
} else {
  console.error(`⚠️ ÉCHEC DE L'AUDIT : ${globalErrors} fuite(s) anglaise(s) restante(s).`);
  process.exit(1);
}
