const fs = require('fs');
const path = require('path');

const frFile = path.join(__dirname, '..', 'js', 'translations', 'fr.js');
const rawFr = fs.readFileSync(frFile, 'utf8');
const sb = {};
new Function('window', 'sandbox', rawFr + `\nsandbox.DATA = window.I18N_DATA["fr"];`)({}, sb);
const frData = sb.DATA;

console.log('UI Keys in FR pack:', Object.keys(frData.ui));

// Inspect index.html modals and elements
const indexHtml = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');

// Check what elements in index.html have hardcoded French that isn't updated by i18n.js
const i18nJs = fs.readFileSync(path.join(__dirname, '..', 'js', 'i18n.js'), 'utf8');

console.log('\n--- Checking dynamic DOM coverage in updateStaticDOM ---');
const elementsToCheck = [
  'portal-fr-quote',
  'portal-author-badge',
  'portal-source-ref',
  'portal-disclaimer',
  'btn-enter-site',
  'sidebar-sadaqa-box',
  'footer-btn-link',
  'contact-modal',
  'legal-modal',
  'search-modal',
  'brand-badge',
  'brand-title',
  'brand-subtitle'
];

elementsToCheck.forEach(el => {
  const inI18n = i18nJs.includes(el);
  console.log(`Element "${el}" referenced in i18n.js: ${inI18n ? '✅' : '❌'}`);
});
