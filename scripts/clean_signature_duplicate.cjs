/**
 * Nettoyage du doublon de kounya dans la signature de la préface pour toutes les 13 langues
 */

const fs = require('fs');
const path = require('path');

const TRANSLATIONS_DIR = path.join(__dirname, '..', 'js', 'translations');
const files = fs.readdirSync(TRANSLATIONS_DIR).filter(f => f.endsWith('.js'));

files.forEach(file => {
  const filePath = path.join(TRANSLATIONS_DIR, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Supprimer la ligne doublon de Kounya dans la signature
  content = content.replace(/\\nAbou Soulaymane\\n/g, '\\n');
  content = content.replace(/\\nAbu Sulayman\\n/g, '\\n');
  content = content.replace(/\\nأبو سليمان\\n/g, '\\n');
  content = content.replace(/\\nEbû Silêman\\n/g, '\\n');
  content = content.replace(/\\nАбу Сулейман\\n/g, '\\n');

  // Harmoniser les noms en kurde et tchétchène avec kounya entre parenthèses
  content = content.replace(/Selaheddîn Ehmed\\n/g, 'Selaheddîn Ehmed (Ebû Silêman)\\n');
  content = content.replace(/Салахьуддин Ахьмад\\n/g, 'Салахьуддин Ахьмад (Абу Сулейман)\\n');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✅ Signature nettoyée dans : ${file}`);
});

// Nettoyer dans index.html
const indexPath = path.join(__dirname, '..', 'index.html');
let indexContent = fs.readFileSync(indexPath, 'utf8');
indexContent = indexContent.replace('Salah Eddine Ahmed (Abou Soulaymane)<br>Abou Soulaymane<br>', 'Salah Eddine Ahmed (Abou Soulaymane)<br>');
fs.writeFileSync(indexPath, indexContent, 'utf8');
console.log('✅ index.html nettoyé !');
