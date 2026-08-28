/**
 * Enrichissement des dictionnaires UI avec les clés de Partage & Copie pour les 13 langues
 */

const fs = require('fs');
const path = require('path');

const TRANSLATIONS_DIR = path.join(__dirname, '..', 'js', 'translations');
const LANG_CODES = ['fr', 'ar', 'ary', 'en', 'es', 'de', 'it', 'pt', 'ur', 'ta', 'ps', 'ku', 'ce'];

const SHARE_I18N = {
  fr: {
    btnShare: "Partager",
    btnCopySection: "Copier la section",
    btnCopy: "Copier",
    copied: "Copié !",
    shareModalTitle: "📤 Partager cette fiche",
    shareModalDesc: "Partagez cet argument pour l'étude et la défense de la Sunna :",
    shareCardTitle: "Partager cette réfutation",
    shareCardDesc: "Diffusez cette fiche pour l'étude et la défense de la Sunna sur WhatsApp, Telegram ou les réseaux.",
    toastSectionCopied: "✅ Section copiée dans le presse-papier !",
    toastLinkCopied: "✅ Lien copié dans le presse-papier !"
  },
  ar: {
    btnShare: "مشاركة",
    btnCopySection: "نسخ الفقرة",
    btnCopy: "نسخ",
    copied: "تم النسخ !",
    shareModalTitle: "📤 مشاركة هذه الشبهة والرد عليها",
    shareModalDesc: "شارك هذه المادة العلمية للدفاع عن السنة ونشر الحق :",
    shareCardTitle: "مشاركة هذه المادة",
    shareCardDesc: "انشر هذه البطاقة العلمية للدفاع عن السنة النبوية عبر واتساب، تلغرام والشبكات الاجتماعية.",
    toastSectionCopied: "✅ تم نسخ الفقرة إلى الحافظة بنجاح !",
    toastLinkCopied: "✅ تم نسخ الرابط إلى الحافظة !"
  },
  ary: {
    btnShare: "بارطاجي",
    btnCopySection: "نسخ هاد الفقرة",
    btnCopy: "نسخ",
    copied: "تم النسخ !",
    shareModalTitle: "📤 بارطاجي هاد الرد",
    shareModalDesc: "بارطاجي هاد الفائدة للدفاع على السنة النبوية :",
    shareCardTitle: "بارطاجي هاد الفائدة",
    shareCardDesc: "نشر هاد البطاقة للدفاع على السنة عبر واتساب، تيليغرام ومواقع التواصل.",
    toastSectionCopied: "✅ تم نسخ الفقرة بنجاح !",
    toastLinkCopied: "✅ تم نسخ الرابط بنجاح !"
  },
  en: {
    btnShare: "Share",
    btnCopySection: "Copy section",
    btnCopy: "Copy",
    copied: "Copied!",
    shareModalTitle: "📤 Share this factsheet",
    shareModalDesc: "Share this refutation for the study and defense of the Sunnah:",
    shareCardTitle: "Share this refutation",
    shareCardDesc: "Share this factsheet to defend the Sunnah on WhatsApp, Telegram, or social media.",
    toastSectionCopied: "✅ Section copied to clipboard!",
    toastLinkCopied: "✅ Link copied to clipboard!"
  },
  es: {
    btnShare: "Compartir",
    btnCopySection: "Copiar sección",
    btnCopy: "Copiar",
    copied: "¡Copiado!",
    shareModalTitle: "📤 Compartir esta ficha",
    shareModalDesc: "Comparte este argumento para el estudio y la defensa de la Sunna:",
    shareCardTitle: "Compartir esta refutación",
    shareCardDesc: "Difunde esta ficha para defender la Sunna en WhatsApp, Telegram o redes sociales.",
    toastSectionCopied: "✅ ¡Sección copiada al portapapeles!",
    toastLinkCopied: "✅ ¡Enlace copiado al portapapeles!"
  },
  de: {
    btnShare: "Teilen",
    btnCopySection: "Abschnitt kopieren",
    btnCopy: "Kopieren",
    copied: "Kopiert!",
    shareModalTitle: "📤 Diese Argumentation teilen",
    shareModalDesc: "Teile dieses Argument zum Studium und zur Verteidigung der Sunna:",
    shareCardTitle: "Diese Widerlegung teilen",
    shareCardDesc: "Verbreite diese Faktenkarte auf WhatsApp, Telegram oder sozialen Medien.",
    toastSectionCopied: "✅ Abschnitt in die Zwischenablage kopiert!",
    toastLinkCopied: "✅ Link in die Zwischenablage kopiert!"
  },
  it: {
    btnShare: "Condividi",
    btnCopySection: "Copia sezione",
    btnCopy: "Copia",
    copied: "Copiato!",
    shareModalTitle: "📤 Condividi questa scheda",
    shareModalDesc: "Condividi questo argomento per lo studio e la difesa della Sunna:",
    shareCardTitle: "Condividi questa confutazione",
    shareCardDesc: "Diffondi questa scheda per difendere la Sunna su WhatsApp, Telegram o social media.",
    toastSectionCopied: "✅ Sezione copiata negli appunti!",
    toastLinkCopied: "✅ Link copiato negli appunti!"
  },
  pt: {
    btnShare: "Compartilhar",
    btnCopySection: "Copiar seção",
    btnCopy: "Copiar",
    copied: "Copiado!",
    shareModalTitle: "📤 Compartilhar esta ficha",
    shareModalDesc: "Compartilhe este argumento para o estudo e a defesa da Sunna:",
    shareCardTitle: "Compartilhar esta refutação",
    shareCardDesc: "Divulgue esta ficha para defender a Sunna no WhatsApp, Telegram ou redes sociais.",
    toastSectionCopied: "✅ Seção copiada para a área de transferência!",
    toastLinkCopied: "✅ Link copiado para a área de transferência!"
  },
  ur: {
    btnShare: "شیئر کریں",
    btnCopySection: "حصہ کاپی کریں",
    btnCopy: "کاپی",
    copied: "کاپی ہو گیا!",
    shareModalTitle: "📤 یہ کارڈ شیئر کریں",
    shareModalDesc: "سنت کے دفاع اور مطالعے کے لیے یہ کارڈ شیئر کریں:",
    shareCardTitle: "رد شیئر کریں",
    shareCardDesc: "واٹس ایپ، ٹیلی گرام اور سوشل میڈیا پر سنت کے دفاع کے لیے یہ کارڈ شیئر کریں۔",
    toastSectionCopied: "✅ حصہ کلپ بورڈ پر کاپی ہو گیا!",
    toastLinkCopied: "✅ لنک کلپ بورڈ پر کاپی ہو گیا!"
  },
  ta: {
    btnShare: "பகிர்",
    btnCopySection: "பகுதியை நகலெடு",
    btnCopy: "நகலெடு",
    copied: "நகலெடுக்கப்பட்டது!",
    shareModalTitle: "📤 இந்த விவரத்தைப் பகிரவும்",
    shareModalDesc: "சுன்னாவைப் பாதுகாக்க இந்த விவரத்தைப் பகிரவும்:",
    shareCardTitle: "மறுப்பைப் பகிரவும்",
    shareCardDesc: "வாட்ஸ்அப், டெலிகிராம் அல்லது சமூக ஊடகங்களில் இந்த விவரத்தைப் பகிரவும்.",
    toastSectionCopied: "✅ பகுதி நகலெடுக்கப்பட்டது!",
    toastLinkCopied: "✅ இணைப்பு நகலெடுக்கப்பட்டது!"
  },
  ps: {
    btnShare: "شریک کړئ",
    btnCopySection: "برخه کاپي کړئ",
    btnCopy: "کاپي",
    copied: "کاپي شو!",
    shareModalTitle: "📤 دا کارډ شریک کړئ",
    shareModalDesc: "د سنت د دفاع لپاره دا علمي کارډ شریک کړئ:",
    shareCardTitle: "دا ځواب شریک کړئ",
    shareCardDesc: "په واټساپ، ټیلیګرام او ټولنیزو شبکو کې دا کارډ نشر کړئ.",
    toastSectionCopied: "✅ برخه په کلپ بورډ کې کاپي شوه!",
    toastLinkCopied: "✅ لینک کاپي شو!"
  },
  ku: {
    btnShare: "Parve bike",
    btnCopySection: "Beşê kopî bike",
    btnCopy: "Kopî bike",
    copied: "Hate kopîkirin!",
    shareModalTitle: "📤 Vê rûpelê parve bike",
    shareModalDesc: "Ji bo parastina Sunnetê vê bersivê parve bike:",
    shareCardTitle: "Vê bersivê parve bike",
    shareCardDesc: "Vê rûpelê li ser WhatsApp, Telegram an torên civakî belav bike.",
    toastSectionCopied: "✅ Beş li bîrgehê hate kopîkirin!",
    toastLinkCopied: "✅ Lînk hate kopîkirin!"
  },
  ce: {
    btnShare: "ДӀасадахьийта",
    btnCopySection: "Дакъа схьаэца",
    btnCopy: "Схьаэца",
    copied: "Схьаэцна!",
    shareModalTitle: "📤 ХӀара хаам дӀасадахьийта",
    shareModalDesc: "Суннат лардархьама хӀара дакъа нахана дӀасадахьийта:",
    shareCardTitle: "Жоп дӀасадахьийта",
    shareCardDesc: "WhatsApp, Telegram я социалан машанашкахь хӀара жоп дӀасадахьийта.",
    toastSectionCopied: "✅ Дакъа схьаэцна бухадиллина!",
    toastLinkCopied: "✅ Хьажорг схьаэцна!"
  }
};

LANG_CODES.forEach(code => {
  const filePath = path.join(TRANSLATIONS_DIR, `${code}.js`);
  if (!fs.existsSync(filePath)) return;

  const raw = fs.readFileSync(filePath, 'utf8');
  const sandbox = {};
  new Function('window', 'sandbox', raw + `\nsandbox.DATA = window.I18N_DATA["${code}"];`)({}, sandbox);
  const pack = sandbox.DATA;
  if (!pack) return;

  pack.ui = Object.assign({}, pack.ui, SHARE_I18N[code] || SHARE_I18N.fr);

  const output = `/**
 * Pack de Langue : ${pack.name} (${pack.code.toUpperCase()}) - ${pack.native}
 * Traduction Exhaustive et Intégrale (UI, Préface, Intro, 10 Arguments, Modales)
 */
window.I18N_DATA = window.I18N_DATA || {};
window.I18N_DATA['${pack.code}'] = ${JSON.stringify(pack, null, 2)};
`;

  fs.writeFileSync(filePath, output, 'utf8');
  console.log(`✅ ${code}.js enrichi avec les clés de Partage & Copie.`);
});

console.log('🎉 Tous les packs de langues sont enrichis avec les clés de partage !');
