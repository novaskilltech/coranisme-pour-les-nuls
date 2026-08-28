/**
 * Mise à jour universelle du nom de l'auteur :
 * "Salah Eddine Ahmed (Abou Soulaymane)" / "صلاح الدين أحمد (أبو سليمان)"
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.join(__dirname, '..');
const TRANSLATIONS_DIR = path.join(ROOT_DIR, 'js', 'translations');

// 1. Mise à jour de index.html
const indexPath = path.join(ROOT_DIR, 'index.html');
let indexContent = fs.readFileSync(indexPath, 'utf8');

indexContent = indexContent
  .replace(/Salah Eddine Ahmed(?! \(Abou Soulaymane\))/g, "Salah Eddine Ahmed (Abou Soulaymane)")
  .replace(/Salah Eddine Ahmed \(Abou Soulaymane\) \(Abou Soulaymane\)/g, "Salah Eddine Ahmed (Abou Soulaymane)");

fs.writeFileSync(indexPath, indexContent, 'utf8');
console.log('✅ index.html mis à jour.');

// 2. Mise à jour de js/i18n.js
const i18nPath = path.join(ROOT_DIR, 'js', 'i18n.js');
let i18nContent = fs.readFileSync(i18nPath, 'utf8');

i18nContent = i18nContent
  .replace(/Salah Eddine Ahmed(?! \(Abou Soulaymane\))/g, "Salah Eddine Ahmed (Abou Soulaymane)")
  .replace(/Salah Eddine Ahmed \(Abou Soulaymane\) \(Abou Soulaymane\)/g, "Salah Eddine Ahmed (Abou Soulaymane)");

fs.writeFileSync(i18nPath, i18nContent, 'utf8');
console.log('✅ js/i18n.js mis à jour.');

// 3. Mise à jour de js/data.js
const dataPath = path.join(ROOT_DIR, 'js', 'data.js');
let dataContent = fs.readFileSync(dataPath, 'utf8');

dataContent = dataContent
  .replace(/Salah Eddine Ahmed(?! \(Abou Soulaymane\))/g, "Salah Eddine Ahmed (Abou Soulaymane)")
  .replace(/Salah Eddine Ahmed \(Abou Soulaymane\) \(Abou Soulaymane\)/g, "Salah Eddine Ahmed (Abou Soulaymane)");

fs.writeFileSync(dataPath, dataContent, 'utf8');
console.log('✅ js/data.js mis à jour.');

// 4. Mise à jour des 13 fichiers de traduction
const LANG_FILES = fs.readdirSync(TRANSLATIONS_DIR).filter(f => f.endsWith('.js'));

LANG_FILES.forEach(file => {
  const filePath = path.join(TRANSLATIONS_DIR, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Remplacement pour les langues arabes/orientales
  content = content
    .replace(/صلاح الدين أحمد(?! \(أبو سليمان\))/g, "صلاح الدين أحمد (أبو سليمان)")
    .replace(/صلاح الدين أحمد \(أبو سليمان\) \(أبو سليمان\)/g, "صلاح الدين أحمد (أبو سليمان)")
    .replace(/Salah Eddine Ahmed(?! \(Abou Soulaymane\))/g, "Salah Eddine Ahmed (Abou Soulaymane)")
    .replace(/Salah Eddine Ahmed \(Abou Soulaymane\) \(Abou Soulaymane\)/g, "Salah Eddine Ahmed (Abou Soulaymane)");

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✅ js/translations/${file} mis à jour.`);
});

console.log('🎉 Nom de l\'auteur harmonisé avec succès partout !');
