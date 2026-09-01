/**
 * Ajout des traductions du compteur de téléchargements du livre pour les 13 langues
 */

const fs = require('fs');
const path = require('path');

const TRANSLATIONS_DIR = path.join(__dirname, '..', 'js', 'translations');

const DOWNLOADS_I18N = {
  fr: {
    footerDownloadsLabel: "Téléchargements du livre :",
    footerDownloadsBookTag: "Livre Offert (PDF)",
    footerDownloadsTooltip: "Compteur de téléchargements du livre 'Le Coraniste Repenti' (Édition PDF HD)"
  },
  ar: {
    footerDownloadsLabel: "تحميلات الكتاب :",
    footerDownloadsBookTag: "كتاب مجاني (PDF)",
    footerDownloadsTooltip: "إجمالي مرات تحميل كتاب «القرآني التائب» بصيغة PDF"
  },
  ary: {
    footerDownloadsLabel: "تيليشارجومون د الكتاب :",
    footerDownloadsBookTag: "كتاب مجاني (PDF)",
    footerDownloadsTooltip: "عدد مرات تحميل كتاب «القرآني التائب» PDF"
  },
  en: {
    footerDownloadsLabel: "Book Downloads:",
    footerDownloadsBookTag: "Free Book (PDF)",
    footerDownloadsTooltip: "Total downloads of the book 'The Repentant Quranist' (HD PDF Edition)"
  },
  es: {
    footerDownloadsLabel: "Descargas del libro:",
    footerDownloadsBookTag: "Libro Gratuito (PDF)",
    footerDownloadsTooltip: "Contador de descargas del libro 'El Coranista Arrepentido' (Edición PDF HD)"
  },
  de: {
    footerDownloadsLabel: "Buch-Downloads:",
    footerDownloadsBookTag: "Kostenloses Buch (PDF)",
    footerDownloadsTooltip: "Gesamte Downloads des Buches 'Der reuevolle Koranist' (HD PDF-Ausgabe)"
  },
  it: {
    footerDownloadsLabel: "Download del libro:",
    footerDownloadsBookTag: "Libro Gratuito (PDF)",
    footerDownloadsTooltip: "Totale download del libro 'Il Coranista Pentito' (Edizione PDF HD)"
  },
  pt: {
    footerDownloadsLabel: "Downloads do livro:",
    footerDownloadsBookTag: "Livro Gratuito (PDF)",
    footerDownloadsTooltip: "Total de downloads do livro 'O Coranista Arrependido' (Edição PDF HD)"
  },
  ur: {
    footerDownloadsLabel: "کتاب کی ڈاؤن لوڈز :",
    footerDownloadsBookTag: "مفت کتاب (PDF)",
    footerDownloadsTooltip: "کتاب «تائب قرآنی» کے کل پی ڈی ایف ڈاؤن لوڈز"
  },
  ta: {
    footerDownloadsLabel: "நூல் பதிவிறக்கங்கள்:",
    footerDownloadsBookTag: "இலவச நூல் (PDF)",
    footerDownloadsTooltip: "'மனந்திரும்பிய குர்ஆனிஸ்ட்' நூல் பதிவிறக்கங்களின் எண்ணிக்கை"
  },
  ps: {
    footerDownloadsLabel: "د کتاب ډاونلوډونه :",
    footerDownloadsBookTag: "وړیا کتاب (PDF)",
    footerDownloadsTooltip: "د «توبه ګار قرآني» کتاب د ډاونلوډونو شمېرونکی"
  },
  ku: {
    footerDownloadsLabel: "Daxistinên pirtûkê:",
    footerDownloadsBookTag: "Pirtûka Belaş (PDF)",
    footerDownloadsTooltip: "Hejmara daxistina pirtûka 'Quraniyê Tolvebûyî' PDF"
  },
  ce: {
    footerDownloadsLabel: "Книга схьаэцарш:",
    footerDownloadsBookTag: "Маьхза книга (PDF)",
    footerDownloadsTooltip: "«Тоба дина къуръанхо» книга схьаэцначийн лорург"
  }
};

const LANG_CODES = Object.keys(DOWNLOADS_I18N);

LANG_CODES.forEach(code => {
  const filePath = path.join(TRANSLATIONS_DIR, `${code}.js`);
  if (!fs.existsSync(filePath)) return;

  const raw = fs.readFileSync(filePath, 'utf8');
  const sandbox = {};
  new Function('window', 'sandbox', raw + `\nsandbox.DATA = window.I18N_DATA["${code}"];`)({}, sandbox);
  const pack = sandbox.DATA;
  if (!pack) return;

  const dlTrans = DOWNLOADS_I18N[code] || DOWNLOADS_I18N.en;
  pack.ui.footerDownloadsLabel = dlTrans.footerDownloadsLabel;
  pack.ui.footerDownloadsBookTag = dlTrans.footerDownloadsBookTag;
  pack.ui.footerDownloadsTooltip = dlTrans.footerDownloadsTooltip;

  const output = `/**
 * Pack de Langue : ${pack.name} (${pack.code.toUpperCase()}) - ${pack.native}
 * Traduction Exhaustive et Intégrale (UI, Préface, Intro, 10 Arguments, Boîte à Outils des Sophismes, Modales)
 */
window.I18N_DATA = window.I18N_DATA || {};
window.I18N_DATA['${pack.code}'] = ${JSON.stringify(pack, null, 2)};
`;

  fs.writeFileSync(filePath, output, 'utf8');
  console.log(`[OK] Pack ${code.toUpperCase()} mis à jour avec les clés de compteur de téléchargements.`);
});

console.log("Terminé avec succès pour les 13 langues !");
