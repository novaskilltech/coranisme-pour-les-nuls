/**
 * VALIDATION 100% EXHAUSTIVE DE L'APPLICATION (NOVA-GENIUS)
 * Contrôle rigoureux de conformité pour les 13 langues avec le schéma réel de l'application.
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

const fr = packs['fr'];
const requiredUiKeys = Object.keys(fr.ui);

console.log('======================================================================');
console.log('🔍 NOVA-GENIUS : AUDIT CRITIQUE COMPLET DE TOUTES LES 13 LANGUES');
console.log('======================================================================\n');

let totalAnomalies = 0;

LANG_CODES.forEach(code => {
  const p = packs[code];
  const issues = [];

  // 1. UI Keys
  requiredUiKeys.forEach(k => {
    if (p.ui[k] === undefined || p.ui[k] === null || p.ui[k] === '') {
      issues.push(`UI key missing: ${k}`);
    }
  });

  // 2. Preface
  if (!p.preface) {
    issues.push('Section preface missing');
  } else {
    if (!p.preface.title) issues.push('preface.title missing');
    if (!p.preface.sections || p.preface.sections.length === 0) issues.push('preface.sections missing');
  }

  // 3. Intro
  if (!p.intro) {
    issues.push('Section intro missing');
  } else {
    if (!p.intro.title) issues.push('intro.title missing');
    if (!p.intro.sections || p.intro.sections.length === 0) issues.push('intro.sections missing');
  }

  // 4. Fallacies Toolbox
  if (!p.fallaciesToolbox) {
    issues.push('fallaciesToolbox missing');
  } else {
    const ft = p.fallaciesToolbox;
    if (!ft.items || ft.items.length !== 10) issues.push(`fallacies items = ${ft.items ? ft.items.length : 0} (expected: 10)`);
    if (!ft.reflexQuestions || !ft.reflexQuestions.questions || ft.reflexQuestions.questions.length !== 4) {
      issues.push(`reflexQuestions = ${ft.reflexQuestions && ft.reflexQuestions.questions ? ft.reflexQuestions.questions.length : 0} (expected: 4)`);
    }
    if (!ft.quiz || !ft.quiz.items || ft.quiz.items.length !== 6) {
      issues.push(`fallacies quiz = ${ft.quiz && ft.quiz.items ? ft.quiz.items.length : 0} (expected: 6)`);
    }
  }

  // 5. 10 Arguments
  if (!p.arguments || p.arguments.length !== 10) {
    issues.push(`arguments count = ${p.arguments ? p.arguments.length : 0} (expected: 10)`);
  } else {
    p.arguments.forEach((arg, idx) => {
      const num = idx + 1;
      if (!arg.title) issues.push(`Arg ${num}: title missing`);
      if (!arg.tagline) issues.push(`Arg ${num}: tagline missing`);
      if (!arg.formula) issues.push(`Arg ${num}: formula missing`);
      if (!arg.theirArgument || !arg.theirArgument.thesis) issues.push(`Arg ${num}: theirArgument.thesis missing`);
      if (!arg.logicalNode || !arg.logicalNode.title) issues.push(`Arg ${num}: logicalNode.title missing`);
      if (!arg.centralPrinciple || !arg.centralPrinciple.explanation) issues.push(`Arg ${num}: centralPrinciple.explanation missing`);
      if (!arg.readyResponses || !arg.readyResponses.quick30s) issues.push(`Arg ${num}: readyResponses.quick30s missing`);
      if (!arg.readyResponses || !arg.readyResponses.developed) issues.push(`Arg ${num}: readyResponses.developed missing`);
      if (!arg.objections || arg.objections.length === 0) issues.push(`Arg ${num}: objections missing`);
      if (!arg.quiz || arg.quiz.length === 0) issues.push(`Arg ${num}: quiz missing`);
      if (!arg.conclusion || !arg.conclusion.punchline) issues.push(`Arg ${num}: conclusion.punchline missing`);
    });
  }

  if (issues.length === 0) {
    console.log(`✅ [${code.toUpperCase()}] ${p.name} (${p.native}) : 100% COMPLET & CONFORME`);
  } else {
    totalAnomalies += issues.length;
    console.log(`❌ [${code.toUpperCase()}] ${p.name} : ${issues.length} anomalie(s) :`);
    issues.forEach(i => console.log(`   - ${i}`));
  }
});

console.log('\n======================================================================');
if (totalAnomalies === 0) {
  console.log('🎉 RÉSULTAT GLOBAL : AUCUN MANQUE DÉTECTÉ (0 anomalie sur 13 langues).');
} else {
  console.log(`⚠️ RÉSULTAT GLOBAL : ${totalAnomalies} anomalie(s) à corriger.`);
}
console.log('======================================================================');
