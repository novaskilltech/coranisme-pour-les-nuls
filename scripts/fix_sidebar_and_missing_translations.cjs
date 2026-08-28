/**
 * Audit et synchronisation des clés de navigation et de la sidebar pour les 13 langues
 */

const fs = require('fs');
const path = require('path');

const TRANSLATIONS_DIR = path.join(__dirname, '..', 'js', 'translations');

const SIDEBAR_TRANSLATIONS = {
  fr: {
    navPreface: "Préface de l'Auteur",
    sidebarPreface: "Préface de l'Auteur",
    navIntro: "Qui sont les coranistes ?",
    sidebarIntro: "Qui sont les coranistes ?",
    navFallacies: "Boîte à outils — Reconnaître les sophismes avant de débattre",
    summaryTitle: "Sommaire",
    rubriquesCount: "12 rubriques",
    sidebarSadaqaHeader: "Diffusion Pédagogique Ouverte",
    sidebarSadaqaText: "Ce manuel est mis à disposition librement pour l'étude et la défense de la Sunna.",
    labelAuthor: "Auteur :",
    authorName: "Salah Eddine Ahmed (Abou Soulaymane)",
    btnSidebarHome: "Accueil",
    btnSidebarContact: "Contacter l'auteur"
  },
  ar: {
    navPreface: "مقدمة المؤلف",
    sidebarPreface: "مقدمة المؤلف",
    navIntro: "من هم القرآنيون ؟",
    sidebarIntro: "من هم القرآنيون ؟",
    navFallacies: "صندوق الأدوات — كشف المغالطات قبل النقاش",
    summaryTitle: "الفهرس",
    rubriquesCount: "12 فقرة",
    sidebarSadaqaHeader: "نشر علمي مجاني",
    sidebarSadaqaText: "هذا الدليل متاح مجاناً لمدارسة السنة النبوية والدفاع عنها.",
    labelAuthor: "المؤلف :",
    authorName: "صلاح الدين أحمد (أبو سليمان)",
    btnSidebarHome: "الرئيسية",
    btnSidebarContact: "مراسلة المؤلف"
  },
  ary: {
    navPreface: "مقدمة د الكاتب",
    sidebarPreface: "مقدمة د الكاتب",
    navIntro: "شكون هوما القرآنيين ؟",
    sidebarIntro: "شكون هوما القرآنيين ؟",
    navFallacies: "بواط د الأدوات — كشف المغالطات قبل النقاش",
    summaryTitle: "الفهرس",
    rubriquesCount: "12 فقرة",
    sidebarSadaqaHeader: "نشر علمي فابور",
    sidebarSadaqaText: "هاد الدليل متاح مجاناً لمدارسة السنة النبوية والدفاع عليها.",
    labelAuthor: "المؤلف :",
    authorName: "صلاح الدين أحمد (أبو سليمان)",
    btnSidebarHome: "الرئيسية",
    btnSidebarContact: "مراسلة الكاتب"
  },
  en: {
    navPreface: "Author's Preface",
    sidebarPreface: "Author's Preface",
    navIntro: "Who are the Quranists?",
    sidebarIntro: "Who are the Quranists?",
    navFallacies: "Toolbox — Identify Fallacies Before Debating",
    summaryTitle: "Table of Contents",
    rubriquesCount: "12 sections",
    sidebarSadaqaHeader: "Open Educational Resource",
    sidebarSadaqaText: "This manual is freely available for study and defense of the Sunnah.",
    labelAuthor: "Author:",
    authorName: "Salah Eddine Ahmed (Abu Sulayman)",
    btnSidebarHome: "Home",
    btnSidebarContact: "Contact Author"
  },
  es: {
    navPreface: "Prefacio del Autor",
    sidebarPreface: "Prefacio del Autor",
    navIntro: "¿Quiénes son los coranistas?",
    sidebarIntro: "¿Quiénes son los coranistas?",
    navFallacies: "Caja de herramientas — Identificar falacias antes de debatir",
    summaryTitle: "Índice",
    rubriquesCount: "12 secciones",
    sidebarSadaqaHeader: "Recurso Educativo Abierto",
    sidebarSadaqaText: "Este manual se ofrece libremente para el estudio y defensa de la Sunnah.",
    labelAuthor: "Autor:",
    authorName: "Salah Eddine Ahmed (Abu Sulayman)",
    btnSidebarHome: "Inicio",
    btnSidebarContact: "Contactar al Autor"
  },
  de: {
    navPreface: "Vorwort des Autors",
    sidebarPreface: "Vorwort des Autors",
    navIntro: "Wer sind die Koranisten?",
    sidebarIntro: "Wer sind die Koranisten?",
    navFallacies: "Werkzeugkasten — Trugschlüsse vor der Debatte erkennen",
    summaryTitle: "Inhaltsverzeichnis",
    rubriquesCount: "12 Abschnitte",
    sidebarSadaqaHeader: "Freie Bildungsressource",
    sidebarSadaqaText: "Dieses Handbuch steht für das Studium und die Verteidigung der Sunnah frei zur Verfügung.",
    labelAuthor: "Autor:",
    authorName: "Salah Eddine Ahmed (Abu Sulayman)",
    btnSidebarHome: "Startseite",
    btnSidebarContact: "Autor kontaktieren"
  },
  it: {
    navPreface: "Prefazione dell'Autore",
    sidebarPreface: "Prefazione dell'Autore",
    navIntro: "Chi sono i coranisti?",
    sidebarIntro: "Chi sono i coranisti?",
    navFallacies: "Cassetta degli attrezzi — Riconoscere le fallacie prima di dibattere",
    summaryTitle: "Indice",
    rubriquesCount: "12 sezioni",
    sidebarSadaqaHeader: "Risorsa Educativa Aperta",
    sidebarSadaqaText: "Questo manuale è disponibile liberamente per lo studio e la difesa della Sunnah.",
    labelAuthor: "Autore:",
    authorName: "Salah Eddine Ahmed (Abu Sulayman)",
    btnSidebarHome: "Home",
    btnSidebarContact: "Contatta l'Autore"
  },
  pt: {
    navPreface: "Prefácio do Autor",
    sidebarPreface: "Prefácio do Autor",
    navIntro: "Quem são os coranistas?",
    sidebarIntro: "Quem são os coranistas?",
    navFallacies: "Caixa de ferramentas — Reconhecer falácias antes de debater",
    summaryTitle: "Índice",
    rubriquesCount: "12 seções",
    sidebarSadaqaHeader: "Recurso Educacional Aberto",
    sidebarSadaqaText: "Este manual está disponível livremente para estudo e defesa da Sunnah.",
    labelAuthor: "Autor:",
    authorName: "Salah Eddine Ahmed (Abu Sulayman)",
    btnSidebarHome: "Início",
    btnSidebarContact: "Contatar o Autor"
  },
  ur: {
    navPreface: "مصنف کا دیباچہ",
    sidebarPreface: "مصنف کا دیباچہ",
    navIntro: "قرآنی کون ہیں؟",
    sidebarIntro: "قرآنی کون ہیں؟",
    navFallacies: "ٹول باکس — مناظرے سے پہلے مغالطوں کی شناخت",
    summaryTitle: "فہرست مضامین",
    rubriquesCount: "12 ابواب",
    sidebarSadaqaHeader: "مفت علمی اشاعت",
    sidebarSadaqaText: "یہ رہنما کتاب سنت نبوی کے مطالعہ اور دفاع کے لیے مفت دستیاب ہے۔",
    labelAuthor: "مصنف :",
    authorName: "صلاح الدین احمد (ابو سلیمان)",
    btnSidebarHome: "صفحہ اول",
    btnSidebarContact: "مصنف سے رابطہ"
  },
  ta: {
    navPreface: "ஆசிரியரின் முன்னுரை",
    sidebarPreface: "ஆசிரியரின் முன்னுரை",
    navIntro: "குர்ஆனிஸ்ட்டுகள் யார்?",
    sidebarIntro: "குர்ஆனிஸ்ட்டுகள் யார்?",
    navFallacies: "கருவிப்பெட்டி — விவாதத்திற்கு முன் போலிகளை அறிதல்",
    summaryTitle: "பொருளடக்கம்",
    rubriquesCount: "12 பிரிவுகள்",
    sidebarSadaqaHeader: "இலவச கல்வி வெளியீடு",
    sidebarSadaqaText: "சுன்னாவைக் கற்பதற்கும் பாதுகாப்பதற்கும் இந்த கையேடு இலவசமாகக் கிடைக்கிறது.",
    labelAuthor: "ஆசிரியர்:",
    authorName: "சலாஹ் எத்தீன் அஹ்மத் (அபூ சுலைமான்)",
    btnSidebarHome: "முகப்பு",
    btnSidebarContact: "ஆசிரியரைத் தொடர்பு கொள்ள"
  },
  ps: {
    navPreface: "د لیکوال سریزه",
    sidebarPreface: "د لیکوال سریزه",
    navIntro: "قرآنیان څوک دي؟",
    sidebarIntro: "قرآنیان څوک دي؟",
    navFallacies: "لارښود — له مناظرې وړاندې د مغالطو پېژندنه",
    summaryTitle: "فهرست",
    rubriquesCount: "12 برخې",
    sidebarSadaqaHeader: "وړیا علمي نشر",
    sidebarSadaqaText: "دا لارښود د نبوي سنتو د مطالعې او دفاع لپاره وړیا چمتو شوی دی.",
    labelAuthor: "لیکوال :",
    authorName: "صلاح الدین احمد (ابو سلیمان)",
    btnSidebarHome: "کورپاڼه",
    btnSidebarContact: "له لیکوال سره اړیکه"
  },
  ku: {
    navPreface: "Pêşgotina Nivîskar",
    sidebarPreface: "Pêşgotina Nivîskar",
    navIntro: "Qur'anî kî ne?",
    sidebarIntro: "Qur'anî kî ne?",
    navFallacies: "Qutiya Amûran — Berî nîqaşê heletiyan nas bike",
    summaryTitle: "Pêrist",
    rubriquesCount: "12 beş",
    sidebarSadaqaHeader: "Çavkaniya Perwerdehiyê ya Vekirî",
    sidebarSadaqaText: "Ev pirtûk ji bo lêkolîn û parastina Sunnetê belaş li ber dest e.",
    labelAuthor: "Nivîskar:",
    authorName: "Salah Eddine Ahmed (Abû Sulaymân)",
    btnSidebarHome: "Serûpel",
    btnSidebarContact: "Bi Nivîskar re Têkilî"
  },
  ce: {
    navPreface: "Авторан дешхьалхе",
    sidebarPreface: "Авторан дешхьалхе",
    navIntro: "Хьуьн бу къуръананхой?",
    sidebarIntro: "Хьуьн бу къуръананхой?",
    navFallacies: "ГӀирсан бокс — Дийцаре валале гӀалаташ довзар",
    summaryTitle: "Чулацам",
    rubriquesCount: "12 дакъа",
    sidebarSadaqaHeader: "Маьхза Ӏилманан зорба",
    sidebarSadaqaText: "ХӀара куьйгалла паргӀат кепехь ду Суннат Ӏамо а, лардан а.",
    labelAuthor: "Автор:",
    authorName: "Салахь Эддин Ахьмад (Абу Сулайман)",
    btnSidebarHome: "Коьрта агӀо",
    btnSidebarContact: "Авторга яздан"
  }
};

const LANG_CODES = Object.keys(SIDEBAR_TRANSLATIONS);

LANG_CODES.forEach(code => {
  const filePath = path.join(TRANSLATIONS_DIR, `${code}.js`);
  if (!fs.existsSync(filePath)) return;

  const raw = fs.readFileSync(filePath, 'utf8');
  const sandbox = {};
  new Function('window', 'sandbox', raw + `\nsandbox.DATA = window.I18N_DATA["${code}"];`)({}, sandbox);
  const pack = sandbox.DATA;
  if (!pack) return;

  const st = SIDEBAR_TRANSLATIONS[code];
  Object.assign(pack.ui, st);

  const output = `/**
 * Pack de Langue : ${pack.name} (${pack.code.toUpperCase()}) - ${pack.native}
 * Traduction Exhaustive et Intégrale (UI, Préface, Intro, 10 Arguments, Boîte à Outils des Sophismes, Modales)
 */
window.I18N_DATA = window.I18N_DATA || {};
window.I18N_DATA['${pack.code}'] = ${JSON.stringify(pack, null, 2)};
`;
  fs.writeFileSync(filePath, output, 'utf8');
  console.log(`✅ Fichier js/translations/${code}.js synchronisé avec toutes les clés de navigation.`);
});

console.log('\n🎉 Les 13 fichiers de traduction intègrent les clés de navigation exactes.');
