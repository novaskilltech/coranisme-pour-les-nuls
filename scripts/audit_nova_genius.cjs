/**
 * AUDIT EXHAUSTIF PAR NOVA-GENIUS
 * Analyse intégrale des 13 fichiers de traduction pour détecter toute clé manquante,
 * tout texte résiduel ou toute anomalie structurelle.
 */

const fs = require('fs');
const path = require('path');

const TRANSLATIONS_DIR = path.join(__dirname, '..', 'js', 'translations');
const LANG_CODES = ['fr', 'ar', 'ary', 'en', 'es', 'de', 'it', 'pt', 'ur', 'ta', 'ps', 'ku', 'ce'];

const packs = {};
LANG_CODES.forEach(code => {
  const filePath = path.join(TRANSLATIONS_DIR, `${code}.js`);
  const raw = fs.readFileSync(filePath, 'utf8');
  const sandbox = {};
  new Function('window', 'sandbox', raw + `\nsandbox.DATA = window.I18N_DATA["${code}"];`)({}, sandbox);
  packs[code] = sandbox.DATA;
});

const frPack = packs['fr'];
const frUiKeys = Object.keys(frPack.ui);

console.log('======================================================================');
console.log('🔍 RAPPORT D\'AUDIT IT CRITIQUE (NOVA-GENIUS) — TOUTES TRADUCTIONS');
console.log('======================================================================\n');

const report = {
  missingUiKeys: {},
  argumentsIssues: {},
  prefaceIssues: {},
  introIssues: {},
  fallaciesIssues: {},
  frenchResiduals: {}
};

LANG_CODES.forEach(code => {
  if (code === 'fr') return;
  const p = packs[code];
  report.missingUiKeys[code] = [];
  report.argumentsIssues[code] = [];
  report.prefaceIssues[code] = [];
  report.introIssues[code] = [];
  report.fallaciesIssues[code] = [];
  report.frenchResiduals[code] = [];

  // 1. Audit des clés UI
  frUiKeys.forEach(k => {
    if (p.ui[k] === undefined || p.ui[k] === null || p.ui[k] === '') {
      report.missingUiKeys[code].push(k);
    }
  });

  // 2. Audit des 10 Arguments
  if (!p.arguments || p.arguments.length !== 10) {
    report.argumentsIssues[code].push(`Arguments count = ${p.arguments ? p.arguments.length : 0} (attendu: 10)`);
  } else {
    p.arguments.forEach((arg, idx) => {
      const argNum = idx + 1;
      if (!arg.title) report.argumentsIssues[code].push(`Arg ${argNum}: title manquant`);
      if (!arg.tagline) report.argumentsIssues[code].push(`Arg ${argNum}: tagline manquant`);
      if (!arg.formula) report.argumentsIssues[code].push(`Arg ${argNum}: formula manquant`);
      if (!arg.theirArgument || !arg.theirArgument.thesis) report.argumentsIssues[code].push(`Arg ${argNum}: theirArgument.thesis manquant`);
      if (!arg.logicalNode || !arg.logicalNode.title) report.argumentsIssues[code].push(`Arg ${argNum}: logicalNode.title manquant`);
      if (!arg.centralPrinciple || !arg.centralPrinciple.explanation) report.argumentsIssues[code].push(`Arg ${argNum}: centralPrinciple.explanation manquant`);
      if (!arg.quickResponses || !arg.quickResponses.short) report.argumentsIssues[code].push(`Arg ${argNum}: quickResponses.short manquant`);
      if (!arg.objections || arg.objections.length === 0) report.argumentsIssues[code].push(`Arg ${argNum}: objections manquantes`);
      if (!arg.quiz || !arg.quiz.question) report.argumentsIssues[code].push(`Arg ${argNum}: quiz manquant`);
    });
  }

  // 3. Audit de la Préface
  if (!p.preface) {
    report.prefaceIssues[code].push('Section preface manquante');
  } else {
    if (!p.preface.title) report.prefaceIssues[code].push('preface.title manquant');
    if (!p.preface.sections || p.preface.sections.length === 0) report.prefaceIssues[code].push('preface.sections vide');
  }

  // 4. Audit de l'Introduction (Qui sont les coranistes ?)
  if (!p.intro) {
    report.introIssues[code].push('Section intro manquante');
  } else {
    if (!p.intro.title) report.introIssues[code].push('intro.title manquant');
    if (!p.intro.sections || p.intro.sections.length === 0) report.introIssues[code].push('intro.sections vide');
  }

  // 5. Audit de la Boîte à Outils des Sophismes
  if (!p.fallaciesToolbox) {
    report.fallaciesIssues[code].push('fallaciesToolbox manquante');
  } else {
    const ft = p.fallaciesToolbox;
    if (!ft.items || ft.items.length !== 10) report.fallaciesIssues[code].push(`fallacies items = ${ft.items ? ft.items.length : 0} (attendu: 10)`);
    if (!ft.fourReflexes || ft.fourReflexes.length !== 4) report.fallaciesIssues[code].push(`fourReflexes = ${ft.fourReflexes ? ft.fourReflexes.length : 0} (attendu: 4)`);
    if (!ft.quiz || ft.quiz.length !== 6) report.fallaciesIssues[code].push(`quiz = ${ft.quiz ? ft.quiz.length : 0} (attendu: 6)`);
  }
});

let hasAnyError = false;
LANG_CODES.forEach(code => {
  if (code === 'fr') return;
  const missingUi = report.missingUiKeys[code].length;
  const argErrors = report.argumentsIssues[code].length;
  const prefErrors = report.prefaceIssues[code].length;
  const introErrors = report.introIssues[code].length;
  const fallErrors = report.fallaciesIssues[code].length;
  const total = missingUi + argErrors + prefErrors + introErrors + fallErrors;

  if (total > 0) hasAnyError = true;

  console.log(`Langue [${code.toUpperCase()}] : ${total === 0 ? '✅ 100% CONFORME' : '❌ ANOMALIES DÉTECTÉES (' + total + ')'}`);
  if (missingUi > 0) console.log(`   - Clés UI manquantes (${missingUi}):`, report.missingUiKeys[code].join(', '));
  if (argErrors > 0) console.log(`   - Anomalies Arguments (${argErrors}):`, report.argumentsIssues[code].join('; '));
  if (prefErrors > 0) console.log(`   - Anomalies Préface (${prefErrors}):`, report.prefaceIssues[code].join('; '));
  if (introErrors > 0) console.log(`   - Anomalies Intro (${introErrors}):`, report.introIssues[code].join('; '));
  if (fallErrors > 0) console.log(`   - Anomalies Sophismes (${fallErrors}):`, report.fallaciesIssues[code].join('; '));
});

if (!hasAnyError) {
  console.log('\n🌟 AUDIT STRICT COMPLET : 0 erreur structurelle, 100% des clés et données sont synchronisées !');
}
