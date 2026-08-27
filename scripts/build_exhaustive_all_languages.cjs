/**
 * Générateur Exhaustif et Intégral de Traduction (13 Langues)
 * Assure la traduction totale de tous les 10 arguments sans aucune omission.
 */

const fs = require('fs');
const path = require('path');

const TRANSLATIONS_DIR = path.join(__dirname, '..', 'js', 'translations');

// Charger FR
const frRaw = fs.readFileSync(path.join(TRANSLATIONS_DIR, 'fr.js'), 'utf8');
const frSandbox = {};
new Function('window', 'sandbox', frRaw + '\nsandbox.DATA = window.I18N_DATA["fr"];')({}, frSandbox);
const FR = frSandbox.DATA;

console.log('✅ Base FR chargée.');

// Dictionnaires de labels d'interface enrichis
const UI_LABELS = {
  fr: {
    labelSituation: "Situation :",
    labelLogic: "Mécanisme logique :",
    labelLesson: "Enseignement :",
    labelApplication: "Application au débat :",
    labelObjection: "Objection",
    labelMethodicAnswer: "Réponse méthodique :"
  },
  ar: {
    labelSituation: "الواقعة والتمثيل :",
    labelLogic: "الآلية المنطقية :",
    labelLesson: "العبرة المستفادة :",
    labelApplication: "التطبيق في المناظرة :",
    labelObjection: "الشبهة",
    labelMethodicAnswer: "الرد المنهجي المفصل :"
  },
  ary: {
    labelSituation: "الواقعة والمثال :",
    labelLogic: "التحليل المنطقي :",
    labelLesson: "الدرس والعبرة :",
    labelApplication: "التطبيق فالنقاش :",
    labelObjection: "الشبهة",
    labelMethodicAnswer: "الجواب المنهجي :"
  },
  en: {
    labelSituation: "Scenario:",
    labelLogic: "Logical mechanism:",
    labelLesson: "Lesson:",
    labelApplication: "Debate application:",
    labelObjection: "Objection",
    labelMethodicAnswer: "Methodical response:"
  },
  es: {
    labelSituation: "Situación:",
    labelLogic: "Mecanismo lógico:",
    labelLesson: "Enseñanza:",
    labelApplication: "Aplicación al debate:",
    labelObjection: "Objeción",
    labelMethodicAnswer: "Respuesta metódica:"
  },
  de: {
    labelSituation: "Situation:",
    labelLogic: "Logischer Mechanismus:",
    labelLesson: "Lehre:",
    labelApplication: "Anwendung auf die Debatte:",
    labelObjection: "Einwand",
    labelMethodicAnswer: "Methodische Antwort:"
  },
  it: {
    labelSituation: "Situazione:",
    labelLogic: "Meccanismo logico:",
    labelLesson: "Insegnamento:",
    labelApplication: "Applicazione al dibattito:",
    labelObjection: "Obiezione",
    labelMethodicAnswer: "Risposta metodica:"
  },
  pt: {
    labelSituation: "Situação:",
    labelLogic: "Mecanismo lógico:",
    labelLesson: "Ensinamento:",
    labelApplication: "Aplicação ao debate:",
    labelObjection: "Objeção",
    labelMethodicAnswer: "Resposta metódica:"
  },
  ur: {
    labelSituation: "مثالی صورتحال :",
    labelLogic: "منطقی طریقہ کار :",
    labelLesson: "حاصل کلام و سبق :",
    labelApplication: "مناظرے میں اطلاق :",
    labelObjection: "اعتراض",
    labelMethodicAnswer: "منہجی و مدلل جواب :"
  },
  ta: {
    labelSituation: "சூழ்நிலை விளக்கம்:",
    labelLogic: "தருக்க வழிமுறை:",
    labelLesson: "படிப்பிணை:",
    labelApplication: "விவாதத்தில் பயன்பாடு:",
    labelObjection: "ஆட்சேபனை",
    labelMethodicAnswer: "முறையான பதில்:"
  },
  ps: {
    labelSituation: "تمثیلي حالت :",
    labelLogic: "منطقي ميکانيزم :",
    labelLesson: "ترلاسه شوی درس :",
    labelApplication: "په مناظره کې تطبیق :",
    labelObjection: "اعتراض",
    labelMethodicAnswer: "منهجي او روښانه ځواب :"
  },
  ku: {
    labelSituation: "Rewş û Mînak:",
    labelLogic: "Mekanîzmaya mentiqî:",
    labelLesson: "Ders û Wane:",
    labelApplication: "Bikaranîna di nîqaşê de:",
    labelObjection: "Şubhe / Dijberî",
    labelMethodicAnswer: "Bersiva rêbazî:"
  },
  ce: {
    labelSituation: "Масал:",
    labelLogic: "Логикан некъ:",
    labelLesson: "Ӏамо дезарг:",
    labelApplication: "Къийсамехь пайден дерг:",
    labelObjection: "Къийсам",
    labelMethodicAnswer: "Ӏилманан бух болу жоп:"
  }
};

// Importer et exécuter la compilation exhaustive
require('./compile_exhaustive_13_langs.cjs');
