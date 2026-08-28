/**
 * FINAL COMPREHENSIVE AUDIT - 13 LANGUAGES & FULL UI VERIFICATION
 */

const fs = require('fs');
const path = require('path');

const TRANSLATIONS_DIR = path.join(__dirname, '..', 'js', 'translations');
const LANG_CODES = ['fr', 'ar', 'ary', 'en', 'es', 'de', 'it', 'pt', 'ur', 'ta', 'ps', 'ku', 'ce'];

console.log('================================================================');
console.log('         AUDIT DE CONFORMITÉ FINALE - 13 LANGUES                ');
console.log('================================================================\n');

let allValid = true;

LANG_CODES.forEach(code => {
  const filePath = path.join(TRANSLATIONS_DIR, `${code}.js`);
  if (!fs.existsSync(filePath)) {
    console.error(`❌ Fichier manquant : ${code}.js`);
    allValid = false;
    return;
  }

  const raw = fs.readFileSync(filePath, 'utf8');
  const sandbox = {};
  try {
    new Function('window', 'sandbox', raw + `\nsandbox.DATA = window.I18N_DATA["${code}"];`)({}, sandbox);
  } catch (err) {
    console.error(`❌ Erreur de syntaxe JS dans ${code}.js :`, err.message);
    allValid = false;
    return;
  }

  const data = sandbox.DATA;
  if (!data) {
    console.error(`❌ Aucune donnée I18N_DATA trouvée pour ${code}`);
    allValid = false;
    return;
  }

  // 1. Vérification des 10 arguments
  const argsCount = data.arguments ? data.arguments.length : 0;
  let completeArgs = 0;
  let totalVerses = 0;
  let validVerses = 0;

  if (data.arguments) {
    data.arguments.forEach(arg => {
      const hasSections = arg.theirArgument && arg.logicalNode && arg.centralPrinciple &&
                          arg.quranicArchitecture && arg.analogies && arg.readyResponses &&
                          arg.objections && arg.framingQuestions && arg.quiz && arg.conclusion;
      if (hasSections) completeArgs++;

      // Versets adverse
      if (arg.theirArgument && arg.theirArgument.verses) {
        arg.theirArgument.verses.forEach(v => {
          totalVerses++;
          if (v.ar && (v.translation || v.fr)) validVerses++;
        });
      }
      // Versets architecture
      if (arg.quranicArchitecture && arg.quranicArchitecture.verses) {
        arg.quranicArchitecture.verses.forEach(v => {
          totalVerses++;
          if (v.ar && (v.translation || v.fr)) validVerses++;
        });
      }
    });
  }

  // 2. Vérification UI
  const uiKeys = data.ui ? Object.keys(data.ui).length : 0;
  const hasPortalQuote = !!(data.ui && data.ui.portalQuoteText);
  const hasLegalModal = !!(data.ui && data.ui.legalSharingMainText);
  const hasContactModal = !!(data.ui && data.ui.contactAuthorBio);

  // 3. Préface & Intro
  const hasPreface = !!(data.preface && data.preface.sections);
  const hasIntro = !!(data.intro && data.intro.sections);

  const status = (argsCount === 10 && completeArgs === 10 && totalVerses === validVerses && uiKeys >= 70 && hasPreface && hasIntro && hasPortalQuote && hasLegalModal && hasContactModal);

  console.log(`[${code.toUpperCase()}] ${data.name || code} (${data.native || ''}) :`);
  console.log(`   - Arguments : ${completeArgs}/10 complets`);
  console.log(`   - Versets : ${validVerses}/${totalVerses} avec texte arabe + traduction`);
  console.log(`   - Clés UI : ${uiKeys} clés (Portal: ${hasPortalQuote ? 'OK' : 'KO'}, Légal: ${hasLegalModal ? 'OK' : 'KO'}, Contact: ${hasContactModal ? 'OK' : 'KO'})`);
  console.log(`   - Préface & Intro : ${hasPreface ? 'OK' : 'KO'} / ${hasIntro ? 'OK' : 'KO'}`);
  console.log(`   - Statut : ${status ? '✅ CONFORME À 100%' : '❌ INCOMPLET'}\n`);

  if (!status) allValid = false;
});

console.log('================================================================');
if (allValid) {
  console.log('🎉 TOUS LES TESTS SONT AU VERT : 13/13 LANGUES 100% OPÉRATIONNELLES !');
} else {
  console.log('⚠️ DES ANOMALIES DOIVENT ÊTRE CORRIGÉES.');
}
console.log('================================================================');
