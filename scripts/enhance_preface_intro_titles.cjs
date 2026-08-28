/**
 * Perfectionnement des titres de préface et d'intro dans les 13 langues
 */

const fs = require('fs');
const path = require('path');

const TRANSLATIONS_DIR = path.join(__dirname, '..', 'js', 'translations');

const PREFACE_INTRO_I18N = {
  fr: {
    prefaceTitle: "PRÉFACE DE L'AUTEUR",
    prefaceSubtitle: "Pourquoi cet ouvrage de réfutation méthodique ?",
    introTitle: "QUI SONT LES CORANISTES ?",
    introSubtitle: "Définition, émergence et repères historiques indispensables"
  },
  ar: {
    prefaceTitle: "مقدمة المؤلف",
    prefaceSubtitle: "لماذا هذا الدليل المنهجي لتفنيد شبهات منكري السنة ؟",
    introTitle: "من هم القرآنيون (منكرو السنة) ؟",
    introSubtitle: "التعريف والنشأة والمعالم التاريخية والمنهجية"
  },
  ary: {
    prefaceTitle: "مقدمة د الكاتب",
    prefaceSubtitle: "علاش هاد الدليل المنهجي لتفنيد شبهات منكري السنة ؟",
    introTitle: "شكون هوما القرآنيين (منكري السنة) ؟",
    introSubtitle: "التعريف والنشأة والمعالم التاريخية والمنهجية"
  },
  en: {
    prefaceTitle: "AUTHOR'S PREFACE",
    prefaceSubtitle: "Why this methodical refutation manual?",
    introTitle: "WHO ARE THE QURANISTS?",
    introSubtitle: "Definition, historical emergence, and core methodology"
  },
  es: {
    prefaceTitle: "PREFACIO DEL AUTOR",
    prefaceSubtitle: "¿Por qué este manual metódico de refutación?",
    introTitle: "¿QUIÉNES SON LOS CORANISTAS?",
    introSubtitle: "Definición, surgimiento histórico y puntos de referencia"
  },
  de: {
    prefaceTitle: "VORWORT DES AUTORS",
    prefaceSubtitle: "Warum dieses methodische Widerlegungshandbuch?",
    introTitle: "WER SIND DIE KORANISTEN?",
    introSubtitle: "Definition, historische Entstehung und Kernmethodik"
  },
  it: {
    prefaceTitle: "PREFAZIONE DELL'AUTORE",
    prefaceSubtitle: "Perché questo manuale di confutazione metodica?",
    introTitle: "CHI SONO I CORANISTI?",
    introSubtitle: "Definizione, origine storica e punti di riferimento"
  },
  pt: {
    prefaceTitle: "PREFÁCIO DO AUTOR",
    prefaceSubtitle: "Por que este manual de refutação metódica?",
    introTitle: "QUEM SÃO OS CORANISTAS?",
    introSubtitle: "Definição, surgimento histórico e metodologia central"
  },
  ur: {
    prefaceTitle: "مصنف کا دیباچہ",
    prefaceSubtitle: "منکرین حدیث کے رد پر یہ منہجی رہنما کتاب کیوں؟",
    introTitle: "منکرِ حدیث (قرآنی) کون ہیں؟",
    introSubtitle: "تعریف، تاریخی پس منظر اور بنیادی فکری مغالطے"
  },
  ta: {
    prefaceTitle: "ஆசிரியரின் முன்னுரை",
    prefaceSubtitle: "இந்த முறையான மறுப்பு கையேடு ஏன்?",
    introTitle: "குர்ஆனிஸ்ட்டுகள் (சுன்னாவை மறுப்பவர்கள்) யார்?",
    introSubtitle: "வரையறை, வரலாற்று தோற்றம் மற்றும் அடிப்படை கோட்பாடுகள்"
  },
  ps: {
    prefaceTitle: "د لیکوال سریزه",
    prefaceSubtitle: "ولې دا منظم رد لارښود؟",
    introTitle: "قرآنیان (د سنتو منکران) څوک دي؟",
    introSubtitle: "پېژندنه، تاریخي شالید او فکري مغالطې"
  },
  ku: {
    prefaceTitle: "PÊŞGOTINA NIVÎSKAR",
    prefaceSubtitle: "Çima ev pirtûka redkirina rêbazî?",
    introTitle: "QUR'ANÎ (ÎNKARKERÊN SUNNETÊ) KÎ NE?",
    introSubtitle: "Pênase, derketina dîrokî û xalên bingehîn"
  },
  ce: {
    prefaceTitle: "АВТОРАН ДЕШХЬАЛХЕ",
    prefaceSubtitle: "ХӀун Ӏалашо ю хӀокху методологин куьйгаллан?",
    introTitle: "ХЬУЬН БУ КЪУРЪАNANХОЙ (СУННАТ ИНКАРДЕЧАР)?",
    introSubtitle: "Билгалдаккхар, историн схьадалар а, коьрта Ӏалашо а"
  }
};

const LANG_CODES = Object.keys(PREFACE_INTRO_I18N);

LANG_CODES.forEach(code => {
  const filePath = path.join(TRANSLATIONS_DIR, `${code}.js`);
  if (!fs.existsSync(filePath)) return;

  const raw = fs.readFileSync(filePath, 'utf8');
  const sandbox = {};
  new Function('window', 'sandbox', raw + `\nsandbox.DATA = window.I18N_DATA["${code}"];`)({}, sandbox);
  const pack = sandbox.DATA;
  if (!pack) return;

  const pi = PREFACE_INTRO_I18N[code];
  if (pack.preface) {
    pack.preface.title = pi.prefaceTitle;
    pack.preface.subtitle = pi.prefaceSubtitle;
  }
  if (pack.intro) {
    pack.intro.title = pi.introTitle;
    pack.intro.subtitle = pi.introSubtitle;
  }

  const output = `/**
 * Pack de Langue : ${pack.name} (${pack.code.toUpperCase()}) - ${pack.native}
 * Traduction Exhaustive et Intégrale (UI, Préface, Intro, 10 Arguments, Boîte à Outils des Sophismes, Modales)
 */
window.I18N_DATA = window.I18N_DATA || {};
window.I18N_DATA['${pack.code}'] = ${JSON.stringify(pack, null, 2)};
`;
  fs.writeFileSync(filePath, output, 'utf8');
  console.log(`✅ Fichier js/translations/${code}.js mis à jour (titres préface & intro).`);
});

console.log('\n🎉 Les titres de Préface et d\'Intro sont parfaitement localisés.');
