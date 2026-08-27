const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '..', 'js', 'translations');
const codes = ['fr', 'ar', 'ary', 'en', 'es', 'de', 'it', 'pt', 'ur', 'ta', 'ps', 'ku', 'ce'];

// Charger EN comme référence anglaise complète
const enRaw = fs.readFileSync(path.join(dir, 'en.js'), 'utf8');
const enSandbox = {};
new Function('window', 'sandbox', enRaw + '\nsandbox.DATA = window.I18N_DATA["en"];')({}, enSandbox);
const EN_UI = enSandbox.DATA.ui;

codes.forEach(c => {
  const p = path.join(dir, c + '.js');
  const raw = fs.readFileSync(p, 'utf8');
  const sb = {};
  new Function('window', 'sandbox', raw + `\nsandbox.DATA = window.I18N_DATA["${c}"];`)({}, sb);
  const data = sb.DATA;
  
  if (data && data.ui) {
    // Remplir les clés manquantes par rapport à EN_UI
    Object.keys(EN_UI).forEach(k => {
      if (!data.ui[k]) {
        data.ui[k] = EN_UI[k];
      }
    });

    const output = `/**
 * Pack de Langue : ${data.name || c} (${c.toUpperCase()}) - ${data.native || c}
 * Traduction Complète et Exhaustive
 */
window.I18N_DATA = window.I18N_DATA || {};
window.I18N_DATA['${c}'] = ${JSON.stringify(data, null, 2)};
`;
    fs.writeFileSync(p, output, 'utf8');
  }
});

console.log('✅ Synchronisation de toutes les clés UI terminée.');
