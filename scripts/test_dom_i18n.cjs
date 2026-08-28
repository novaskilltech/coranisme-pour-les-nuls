/**
 * Test de Simulation DOM Multi-Langues pour la Boîte à Outils et les Badges
 */

const fs = require('fs');
const path = require('path');

// Charger tous les fichiers de traduction
const I18N_DATA = {};
const LANG_CODES = ['fr', 'ar', 'ary', 'en', 'es', 'de', 'it', 'pt', 'ur', 'ta', 'ps', 'ku', 'ce'];

LANG_CODES.forEach(code => {
  const filePath = path.join(__dirname, '..', 'js', 'translations', `${code}.js`);
  const raw = fs.readFileSync(filePath, 'utf8');
  const sandbox = {};
  new Function('window', 'sandbox', raw + `\nsandbox.DATA = window.I18N_DATA["${code}"];`)({ I18N_DATA }, sandbox);
  I18N_DATA[code] = sandbox.DATA;
});

// Charger app.js dans un environnement de test
const appJs = fs.readFileSync(path.join(__dirname, '..', 'js', 'app.js'), 'utf8');

console.log('🧪 Début des tests de rendu pour les 13 langues...\n');

let passCount = 0;
let failCount = 0;

LANG_CODES.forEach(lang => {
  const pack = I18N_DATA[lang];
  const items = pack.fallaciesToolbox.items;

  // 1. Tester la présence de 10 sophismes traduits
  if (items.length === 10) {
    passCount++;
  } else {
    console.error(`❌ [${lang}] Items != 10 (${items.length})`);
    failCount++;
  }

  // 2. Vérifier les badges des arguments
  const arg1 = pack.arguments[0];
  const fallaciesArg1 = arg1.fallacies; // ['non-sequitur', 'fausse-dichotomie']
  const badge1 = items.find(i => i.id === fallaciesArg1[0]);
  const badge2 = items.find(i => i.id === fallaciesArg1[1]);

  if (badge1 && badge2 && badge1.name && badge2.name) {
    passCount++;
  } else {
    console.error(`❌ [${lang}] Badges d'arguments non résolus pour l'argument 1`);
    failCount++;
  }

  // 3. Vérifier que la Règle d'or est traduite
  if (pack.fallaciesToolbox.goldenRuleStatement && pack.fallaciesToolbox.goldenRuleStatement.length > 5) {
    passCount++;
  } else {
    console.error(`❌ [${lang}] Règle d'or vide`);
    failCount++;
  }

  // 4. Vérifier les 4 questions réflexes
  if (pack.fallaciesToolbox.reflexQuestions.questions.length === 4) {
    passCount++;
  } else {
    console.error(`❌ [${lang}] Questions réflexes != 4`);
    failCount++;
  }

  // 5. Vérifier les 6 questions de quiz
  if (pack.fallaciesToolbox.quiz.items.length === 6) {
    passCount++;
  } else {
    console.error(`❌ [${lang}] Questions de quiz != 6`);
    failCount++;
  }

  console.log(`✅ [${lang.toUpperCase()}] ${pack.native.padEnd(20)} | Sophisme 1: "${items[0].name}" | Badge Title: "${pack.ui.fallaciesBadgeTitle}"`);
});

console.log(`\n====================================================`);
console.log(`🎯 TOTAL TESTS : ${passCount} réussis, ${failCount} échoués.`);
console.log(`====================================================\n`);

if (failCount === 0) {
  console.log('🎉 TOUS LES TESTS SONT AU VERT !');
} else {
  process.exit(1);
}
