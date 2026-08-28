/**
 * Traduction Complète de l'Encart Sidebar (Diffusion Pédagogique) et des Boutons
 */

const fs = require('fs');
const path = require('path');

const TRANSLATIONS_DIR = path.join(__dirname, '..', 'js', 'translations');

const SIDEBAR_I18N = {
  fr: {
    sidebarSadaqaHeader: "DIFFUSION PÉDAGOGIQUE",
    sidebarSadaqaText: "Ce contenu peut être partagé gratuitement et reproduit à des fins personnelles et pédagogiques en mentionnant l'auteur.",
    labelAuthor: "Auteur :",
    authorName: "Salah Eddine Ahmed",
    btnSidebarHome: "Sommaire",
    btnSidebarContact: "Contact"
  },
  ar: {
    sidebarSadaqaHeader: "نشر تعليمي دعوي",
    sidebarSadaqaText: "يجوز مشاركة هذا المحتوى مجانًا وإعادة إنتاجه للأغراض الشخصية والتعليمية والدعوية بشرط عزو الفضل للمؤلف.",
    labelAuthor: "المؤلف :",
    authorName: "صلاح الدين أحمد",
    btnSidebarHome: "الفهرس",
    btnSidebarContact: "اتصل بنا"
  },
  ary: {
    sidebarSadaqaHeader: "نشر تعليمي مجاني",
    sidebarSadaqaText: "هاد المحتوى يمكن تبارطاجيه فابور وتعاود تنشرو لأغراض شخصية وتعليمية مع ذكر الكاتب.",
    labelAuthor: "الكاتب :",
    authorName: "صلاح الدين أحمد",
    btnSidebarHome: "الفهرس",
    btnSidebarContact: "تواصل معنا"
  },
  en: {
    sidebarSadaqaHeader: "EDUCATIONAL DISTRIBUTION",
    sidebarSadaqaText: "This content may be freely shared and reproduced for personal and educational purposes provided the author is cited.",
    labelAuthor: "Author:",
    authorName: "Salah Eddine Ahmed",
    btnSidebarHome: "Table of Contents",
    btnSidebarContact: "Contact"
  },
  es: {
    sidebarSadaqaHeader: "DIFUSIÓN PEDAGÓGICA",
    sidebarSadaqaText: "Este contenido puede ser compartido gratuitamente y reproducido para fines personales y pedagógicos mencionando al autor.",
    labelAuthor: "Autor:",
    authorName: "Salah Eddine Ahmed",
    btnSidebarHome: "Sumario",
    btnSidebarContact: "Contacto"
  },
  de: {
    sidebarSadaqaHeader: "PÄDAGOGISCHE VERBREITUNG",
    sidebarSadaqaText: "Dieser Inhalt kann für persönliche und pädagogische Zwecke unter Nennung des Autors kostenlos geteilt und vervielfältigt werden.",
    labelAuthor: "Autor:",
    authorName: "Salah Eddine Ahmed",
    btnSidebarHome: "Inhaltsverzeichnis",
    btnSidebarContact: "Kontakt"
  },
  it: {
    sidebarSadaqaHeader: "DIFFUSIONE PEDAGOGICA",
    sidebarSadaqaText: "Questo contenuto può essere condiviso gratuitamente e riprodotto per scopi personali ed educativi menzionando l'autore.",
    labelAuthor: "Autore:",
    authorName: "Salah Eddine Ahmed",
    btnSidebarHome: "Sommario",
    btnSidebarContact: "Contatto"
  },
  pt: {
    sidebarSadaqaHeader: "DIFUSÃO PEDAGÓGICA",
    sidebarSadaqaText: "Este conteúdo pode ser compartilhado gratuitamente e reproduzido para fins pessoais e pedagógicos mediante citação do autor.",
    labelAuthor: "Autor:",
    authorName: "Salah Eddine Ahmed",
    btnSidebarHome: "Sumário",
    btnSidebarContact: "Contato"
  },
  ur: {
    sidebarSadaqaHeader: "تعلیمی و دعوتی اشاعت",
    sidebarSadaqaText: "یہ مواد ذاتی اور تعلیمی مقاصد کے لیے مصنف کا نام ذکر کرتے ہوئے مفت شیئر اور دوبارہ شائع کیا جا سکتا ہے۔",
    labelAuthor: "مصنف:",
    authorName: "صلاح الدین احمد",
    btnSidebarHome: "فہرست",
    btnSidebarContact: "رابطہ"
  },
  ta: {
    sidebarSadaqaHeader: "கல்விப் பகிர்வு",
    sidebarSadaqaText: "ஆசிரியரைக் குறிப்பிட்டு தனிப்பட்ட மற்றும் கல்வி நோக்கங்களுக்காக இந்த உள்ளடக்கத்தை இலவசமாகப் பகிரலாம்.",
    labelAuthor: "ஆசிரியர்:",
    authorName: "ஸலாஹ் எத்தீன் அஹ்மத்",
    btnSidebarHome: "பொருளடக்கம்",
    btnSidebarContact: "தொடர்பு"
  },
  ps: {
    sidebarSadaqaHeader: "ښوونیز خپرول",
    sidebarSadaqaText: "دا منځپانګه د لیکوال په یادولو سره د شخصي او ښوونیزو موخو لپاره په وړیا توګه شریک کیدی شي.",
    labelAuthor: "لیکوال:",
    authorName: "صلاح الدین احمد",
    btnSidebarHome: "فهرست",
    btnSidebarContact: "اړیکه"
  },
  ku: {
    sidebarSadaqaHeader: "BELAVKIRINA PERWERDEYÎ",
    sidebarSadaqaText: "Ev naverok dikare ji bo armancên kesane û perwerdeyî bi nîşandana nivîskar bêpere were parvekirin.",
    labelAuthor: "Nivîskar:",
    authorName: "Salah Eddine Ahmed",
    btnSidebarHome: "Naverok",
    btnSidebarContact: "Têkilî"
  },
  ce: {
    sidebarSadaqaHeader: "ХЬЕХАРАН ДАРЖОР",
    sidebarSadaqaText: "ХӀара чулацам авторан цӀе хьахош, шайн Ӏалашонна а, хьехаран Ӏалашонна а маьхза дӀасабаржо йиш йу.",
    labelAuthor: "Автор:",
    authorName: "Салахь Эддин Ахьмад",
    btnSidebarHome: "Чулацам",
    btnSidebarContact: "ЗӀе"
  }
};

const LANGS = ['fr', 'ar', 'ary', 'en', 'es', 'de', 'it', 'pt', 'ur', 'ta', 'ps', 'ku', 'ce'];

LANGS.forEach(code => {
  const filePath = path.join(TRANSLATIONS_DIR, `${code}.js`);
  if (!fs.existsSync(filePath)) return;

  const raw = fs.readFileSync(filePath, 'utf8');
  const sandbox = {};
  new Function('window', 'sandbox', raw + `\nsandbox.DATA = window.I18N_DATA["${code}"];`)({}, sandbox);
  const pack = sandbox.DATA;
  if (!pack) return;

  const extra = SIDEBAR_I18N[code] || SIDEBAR_I18N.fr;
  pack.ui = { ...pack.ui, ...extra };

  const output = `/**
 * Pack de Langue : ${pack.name || code} (${code.toUpperCase()}) - ${pack.native || code}
 * Traduction Complète et Exhaustive (UI, Préface, Intro, 10 Arguments, Modales)
 */
window.I18N_DATA = window.I18N_DATA || {};
window.I18N_DATA['${code}'] = ${JSON.stringify(pack, null, 2)};
`;

  fs.writeFileSync(filePath, output, 'utf8');
  console.log(`✅ ${code}.js enrichi avec les libellés de la sidebar.`);
});

console.log('🎉 Tous les fichiers de langue ont reçu les libellés de la sidebar.');
