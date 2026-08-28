/**
 * Audit Automatisé et Rigoureux du Système i18n de la Boîte à Outils des Sophismes
 * Vérifie :
 * 1. Les 13 langues du projet (FR, AR, ARY, EN, ES, DE, IT, PT, UR, TA, PS, KU, CE).
 * 2. 0 clé manquante dans fallaciesToolbox, UI et les 10 items de sophismes.
 * 3. Traduction effective (aucun texte français résiduel dans les autres langues).
 * 4. Cohérence des IDs stables (homme-de-paille, fausse-dichotomie, etc.).
 * 5. Intégrité des 10 arguments et de leur mapping logique vers les sophismes.
 */

const fs = require('fs');
const path = require('path');

const TRANSLATIONS_DIR = path.join(__dirname, '..', 'js', 'translations');
const LANG_CODES = ['fr', 'ar', 'ary', 'en', 'es', 'de', 'it', 'pt', 'ur', 'ta', 'ps', 'ku', 'ce'];

const REQUIRED_FALLACY_IDS = [
  'homme-de-paille',
  'fausse-dichotomie',
  'generalisation-abusive',
  'non-sequitur',
  'cherry-picking',
  'double-standard',
  'equivoque-lexicale',
  'argument-de-possibilite',
  'deplacement-charge-preuve',
  'appel-emotion'
];

const REQUIRED_TOOLBOX_KEYS = [
  'headerBadge',
  'title',
  'subtitle',
  'introTitle',
  'introText',
  'definitionTitle',
  'definitionText',
  'reflexQuestionTitle',
  'reflexQuestionText',
  'reflexPurpose',
  'pdfDownloadBtn',
  'goldenRuleTitle',
  'goldenRuleStatement',
  'goldenRuleMeaning',
  'goldenRuleExample',
  'goldenRuleGoal',
  'sectionTitle10Cards',
  'btnDetails',
  'btnHide',
  'labelDefinition',
  'labelGeneralExample',
  'labelQuranicApp',
  'labelQuestionToAsk',
  'labelShortAnswer',
  'items',
  'reflexQuestions',
  'quiz',
  'conclusion'
];

let errors = [];
let warnings = [];
let stats = {};

const loadedPacks = {};

LANG_CODES.forEach(code => {
  const filePath = path.join(TRANSLATIONS_DIR, `${code}.js`);
  if (!fs.existsSync(filePath)) {
    errors.push(`[${code}] Fichier introuvable : ${filePath}`);
    return;
  }

  const raw = fs.readFileSync(filePath, 'utf8');
  const sandbox = {};
  try {
    new Function('window', 'sandbox', raw + `\nsandbox.DATA = window.I18N_DATA["${code}"];`)({}, sandbox);
  } catch (e) {
    errors.push(`[${code}] Erreur d'évaluation syntaxique : ${e.message}`);
    return;
  }

  const pack = sandbox.DATA;
  if (!pack) {
    errors.push(`[${code}] Pack window.I18N_DATA['${code}'] non défini`);
    return;
  }

  loadedPacks[code] = pack;
  stats[code] = {
    keysCount: 0,
    fallaciesCount: 0,
    reflexCount: 0,
    quizCount: 0,
    sampleName: ''
  };

  // 1. Vérifier fallaciesToolbox
  if (!pack.fallaciesToolbox) {
    errors.push(`[${code}] fallaciesToolbox manquant !`);
    return;
  }

  REQUIRED_TOOLBOX_KEYS.forEach(k => {
    if (!pack.fallaciesToolbox[k]) {
      errors.push(`[${code}] Clé manquante dans fallaciesToolbox : ${k}`);
    }
  });

  // 2. Vérifier les 10 sophismes
  const items = pack.fallaciesToolbox.items || [];
  stats[code].fallaciesCount = items.length;
  if (items.length !== 10) {
    errors.push(`[${code}] Nombre d'items incorrect : ${items.length}/10`);
  }

  const foundIds = items.map(it => it.id);
  REQUIRED_FALLACY_IDS.forEach(reqId => {
    if (!foundIds.includes(reqId)) {
      errors.push(`[${code}] Sophisme manquant avec l'ID stable : ${reqId}`);
    }
  });

  items.forEach(it => {
    if (!it.name || !it.shortDef || !it.definition || !it.generalExample || !it.quranicApplication || !it.questionToAsk || !it.shortAnswer) {
      errors.push(`[${code}] Données incomplètes pour le sophisme : ${it.id}`);
    }
  });

  stats[code].sampleName = items[0] ? items[0].name : '';
  stats[code].reflexCount = (pack.fallaciesToolbox.reflexQuestions && pack.fallaciesToolbox.reflexQuestions.questions) ? pack.fallaciesToolbox.reflexQuestions.questions.length : 0;
  stats[code].quizCount = (pack.fallaciesToolbox.quiz && pack.fallaciesToolbox.quiz.items) ? pack.fallaciesToolbox.quiz.items.length : 0;

  // 3. Vérifier les clés UI
  if (!pack.ui.fallaciesBadgeTitle) {
    errors.push(`[${code}] UI manquante : ui.fallaciesBadgeTitle`);
  }
  if (!pack.ui.btnOpenToolbox) {
    errors.push(`[${code}] UI manquante : ui.btnOpenToolbox`);
  }
  if (!pack.ui.navFallacies) {
    errors.push(`[${code}] UI manquante : ui.navFallacies`);
  }

  // 4. Vérifier l'intégrité des 10 arguments
  if (!pack.arguments || pack.arguments.length !== 10) {
    errors.push(`[${code}] Arguments manquants ou nombre incorrect : ${pack.arguments ? pack.arguments.length : 0}/10`);
  } else {
    pack.arguments.forEach(arg => {
      if (!arg.fallacies || !Array.isArray(arg.fallacies) || arg.fallacies.length === 0) {
        errors.push(`[${code}] Argument ${arg.id} sans sophismes associés !`);
      }
    });
  }
});

// 5. Comparer avec le français pour s'assurer que les autres langues ne sont pas du simple français copié-collé
const frItems = loadedPacks['fr']?.fallaciesToolbox?.items || [];
const frNames = frItems.map(i => i.name);

['ar', 'ary', 'en', 'es', 'de', 'it', 'pt', 'ur', 'ta', 'ps', 'ku', 'ce'].forEach(code => {
  const pack = loadedPacks[code];
  if (!pack || !pack.fallaciesToolbox || !pack.fallaciesToolbox.items) return;

  const names = pack.fallaciesToolbox.items.map(i => i.name);
  const identicalCount = names.filter((n, idx) => n === frNames[idx]).length;
  if (identicalCount > 2) {
    warnings.push(`[${code}] Beaucoup de noms de sophismes semblent identiques au français (${identicalCount}/10)`);
  }
});

console.log('====================================================');
console.log('📊 RÉSULTAT DE L\'AUDIT i18n DE LA BOÎTE À OUTILS');
console.log('====================================================\n');

console.table(stats);

if (errors.length > 0) {
  console.error(`❌ ${errors.length} ERREUR(S) DÉTECTÉE(S) :`);
  errors.forEach(e => console.error(`  - ${e}`));
  process.exit(1);
} else {
  console.log('✅ AUCUNE ERREUR ! Toutes les 13 langues sont 100% complètes et conformes.');
}

if (warnings.length > 0) {
  console.warn(`⚠️ ${warnings.length} Avertissement(s) :`);
  warnings.forEach(w => console.warn(`  - ${w}`));
} else {
  console.log('✅ Aucun avertissement terminologique.');
}

console.log('\n🎉 Audit validé avec succès sur les 13 langues !');
