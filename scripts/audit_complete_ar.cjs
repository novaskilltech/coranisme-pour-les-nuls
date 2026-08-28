/**
 * Audit approfondi du pack Arabe (AR) et des 12 autres langues
 */

const fs = require('fs');
const path = require('path');

const TRANSLATIONS_DIR = path.join(__dirname, '..', 'js', 'translations');

const codes = ['fr', 'ar', 'ary', 'en', 'es', 'de', 'it', 'pt', 'ur', 'ta', 'ps', 'ku', 'ce'];

codes.forEach(code => {
  const filePath = path.join(TRANSLATIONS_DIR, `${code}.js`);
  const raw = fs.readFileSync(filePath, 'utf8');
  const sandbox = {};
  new Function('window', 'sandbox', raw + `\nsandbox.DATA = window.I18N_DATA["${code}"];`)({}, sandbox);
  const pack = sandbox.DATA;

  console.log(`\n--- LANGUE: ${code.toUpperCase()} ---`);
  console.log(`navPreface: "${pack.ui.navPreface}"`);
  console.log(`navIntro: "${pack.ui.navIntro}"`);
  console.log(`navFallacies: "${pack.ui.navFallacies}"`);
  console.log(`summaryTitle: "${pack.ui.summaryTitle}"`);
  console.log(`rubriquesCount: "${pack.ui.rubriquesCount}"`);
  console.log(`preface title: "${pack.preface ? pack.preface.title : 'N/A'}"`);
  console.log(`intro title: "${pack.intro ? pack.intro.title : 'N/A'}"`);
  console.log(`arguments count: ${pack.arguments ? pack.arguments.length : 0}`);
  if (pack.arguments && pack.arguments.length > 0) {
    console.log(`arg 1 title: "${pack.arguments[0].title}"`);
    console.log(`arg 10 title: "${pack.arguments[9].title}"`);
  }
});
