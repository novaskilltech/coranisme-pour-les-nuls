/**
 * Générateur des packs de langue Kurde (ku) et Tchétchène (ce)
 */

const fs = require('fs');
const path = require('path');

const TRANSLATIONS_DIR = path.join(__dirname, '..', 'js', 'translations');

// Charger la base FR et EN
const frRaw = fs.readFileSync(path.join(TRANSLATIONS_DIR, 'fr.js'), 'utf8');
const enRaw = fs.readFileSync(path.join(TRANSLATIONS_DIR, 'en.js'), 'utf8');

const frSandbox = {}, enSandbox = {};
new Function('window', 'sandbox', frRaw + '\nsandbox.DATA = window.I18N_DATA["fr"];')({}, frSandbox);
new Function('window', 'sandbox', enRaw + '\nsandbox.DATA = window.I18N_DATA["en"];')({}, enSandbox);

const FR = frSandbox.DATA;
const EN = enSandbox.DATA;

// 1. PACK KURDE (ku)
const KU_PACK = {
  code: 'ku',
  name: 'Kurde',
  native: 'Kurdî',
  flag: '☀️',
  dir: 'ltr',
  ui: {
    brandBadge: "MANUELÊ PRATÎK",
    brandTitle: "Bersivdana Quraniyê",
    brandSubtitle: "Rêbera Pratîk a Li Dijî Înkarkirina Sunnetê",
    searchBtn: "Lêgerîn...",
    summaryTitle: "NAVEROK (14 beş)",
    rubriquesCount: "14 beş",
    heroTag1: "Rêbera Pratîk a Bersivdanê",
    heroTag2: "Weşana Perwerdeyî ya Vekirî",
    heroTitleMain: "Bersivdana",
    heroTitleSpan: "Quraniyê",
    heroAuthor: "Ji aliyê Selaheddîn Ehmed ve",
    heroDesc: "Bi rêbaza mentiqî û zanistî guman û şubheyên înkarkerên sunnetê hilweşînin.",
    btnStartArg1: "Destpêk bi Belgeya 1emîn",
    btnSearchModal: "Lêgerîna mijar / ayetê",
    btnContactAuthor: "Têkilî bi nivîskar re",
    sommaireTitle: "10 Belgeyên Mezin Yên Şîrovekirî",
    sommaireBadge: "10 Dosyayên Amade",
    argBadgeGiant: "BELGE",
    btnReadCard: "Bixwîne",
    btnDownloadPdf: "Fasîkula PDF daxîne",
    portalWarningBadge: "HIŞYARIYA DÎROKÎ YA GIRÎNG",
    portalTitle: "Deriyê Îmam El-Berbeharî (m. 329 K)",
    portalEnterBtn: "Têkeve Rêberê",
    portalAuthorBadge: "Îmam El-Berbeharî رحمه الله",
    portalSourceRef: "Şerh Es-Sunneh — xala 67an",
    portalDisclaimer: "«Gava tu dibihîzî ku yek dibêje: 'Tenê Quranê ji me re bîne', bizane ku ew kesekî rêwinda ye.»",
    searchModalTitle: "Lêgerîna di Rêberê de",
    searchPlaceholder: "Peyvek, mijarek an jî ayetek binivîse...",
    contactModalTitle: "Têkilî bi Nivîskar re",
    footerQuote: "«Zanist parastina dîn e û Sunnet jî ronahiya rêya me ye.»",
    footerAuthorRef: "Selaheddîn Ehmed — Ebû Silêman",
    footerNotice: "Ev rêber xebatek perwerdeyî û azad e ji bo xizmeta heqîqetê.",
    footerNotice2: "Mafên Parastî © 2026 — Rêberê Bersivdana Quraniyê"
  },
  preface: {
    badge: "DESTPÊKA PIRTÛKÊ",
    title: "PÊŞGOTIN",
    subtitle: "Çima ev pirtûk hate nivîsandin?",
    introTag: "BERÎ KU TU DEST PÊ BIKÎ",
    basmala: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ",
    sections: [
      {
        type: "adverse",
        header: "ÇIMA EV PIRTÛK?",
        title: "Bîranînek kesane û xemgîniyek kûr",
        paragraphs: [
          "Ev pirtûk ji rastiyek kesane ya ku ez gelek êşandim hate afirandin.",
          "Di nav salan de, min dît ku mirovên derdora min ketin xefika 'Quraniyê' : baweriyek ku îdîa dike vedigere tenê Quranê, lê di rastiyê de desthilatdarî û pîroziya Sunneta Pêxember ﷺ red dike.",
          "Bi piranî, ev yek bi neyeta xirab dest pê nake, lê ji kêmzanî û nebûna zanistên hedîs, tefsîr, ziman û dîroka veguhastinê derdikeve holê."
        ]
      },
      {
        type: "retenir",
        header: "KOMA GUMANAN DIBE BAWERÎ",
        title: "Ji şikê ber bi xerabûna baweriyê",
        paragraphs: [
          "Dû re guman tên: hedîsek bêyî çarçoveya wê tê pêşkêşkirin, yan wergerek xelet tê nîşandan da ku kes bikeve şikê.",
          "Mijarên mîna temenê dayika me Eyşe رضي الله عنها, hedîsên tibê, an jî Mîracê bi awayekî xerab nîşan didin.",
          "Dema ku zanist tune be, şik çêdibe: «Ev hedîs ecêb e» ➔ «Belkî hedîs ne pêbawer in» ➔ «Belkî Sunnet ne lazim e» ➔ «Tenê Quran bes e».",
          "Bi vî awayî kesek dînê xwe li gorî daxwazên xwe çêdike û wateya 'Guh bidin Pêxember' ji holê radike."
        ]
      },
      {
        type: "analogie",
        header: "DÎROKEK MEZIN YA VEGÛHASTINÊ",
        title: "Pergala herî mezin a piştrastkirinê",
        paragraphs: [
          "Sunnet negihîştiye me ji ber ku çend kesan piştî sedsalan biryar da çîrokan binivîsin! Li pişt pirtûkên hedîsan dîroka herî mezin a rexnekirina riwayetê û lêkolîna şexsiyetên ragihêneran (Îlm El-Rîcal) heye.",
          "Zanyaran jiyana xwe dan da ku her peyvek ji Pêxember ﷺ piştrast bikin.",
          "Gotina ku dibêje 'Ev tenê çîrokên mirovan in' ne rexneyek zanistî ye, lê belê nezaniya mutleq e li ser zanista hedîsê."
        ]
      },
      {
        type: "cadrage",
        header: "Û QURAN ÇAWA GIHÎŞT ME?",
        title: "Pirs li ser zincîreya veguhastinê",
        paragraphs: [
          "Pirseke bingehîn ji bo her kesê ku Sunnetê red dike: Quran bi rêya kê gihîştiye te?",
          "Ev Mushafa ku di destê te de ye rasterast ji ezmanan nehatiye xwarê, lê bi rêya Sehabeyan, şagirtan û qiraetbêjan nifş bi nifş bi seneda muttesil gihîştiye me.",
          "Qiraeta ku tu dixwînî mirovên bawerpêkirî ragihandine. Çawa dibe ku tu van mirovan di Quranê de qebûl bikî, lê di Sunnetê de red bikî?!"
        ]
      },
      {
        type: "chrono",
        header: "XEBATEK JI BO XATIRA XWEDÊ",
        title: "Sedeqeya Jariye",
        paragraphs: [
          "Ez ji Xwedayê Mezin dixwazim ku vê pirtûkê bike sedeqeyek jariye ji bo min û dê û bavê min, û feydeyê bide her kesê ku li heqîqetê digere.",
          "Heqîqet ji delîlan natirse!"
        ],
        signature: "Selaheddîn Ehmed\nEbû Silêman\n23 Tebax 2026"
      }
    ]
  },
  intro: {
    header: "ÇARÇOVEYA DÎROKÎ",
    title: "QURANÎ (ÎNKARKERÊN SUNNETÊ) KÎ NE?",
    subtitle: "Pênase, jêder û dîroka vê rêbazê",
    badge: "HÊMANÊN DÎROKÎ",
    sections: [
      {
        type: "adverse",
        header: "PÊNASE",
        title: "Rêbazek ku Sunnetê red dike",
        paragraphs: [
          "Quraniyî : ew tevgerek e ku îdîa dike Quran tenê çavkaniya qanûnî ya Îslamê ye û desthilatdariya Sunnetê bi temamî an bi piranî red dike.",
          "Tevgera wan a nûjen di sedsala 19an de li Hindistanê û sedsala 20an de li Misrê derket holê, lê şubheya wan kevn e û zanyarên Îslamê yên kevnar wekî Şafi'î, Îbn Quteybe û El-Berbeharî bersiva wan dane."
        ]
      },
      {
        type: "analogie",
        header: "HIŞYARIYA PÊXEMBERÎ YA MÛCÎZEWÎ",
        title: "Pêxember ﷺ pêşwext qala wan kiribû",
        paragraphs: [
          "Pêxember ﷺ bi awayekî mûcîzewî qala van kesan kiribû berî ku ew derkevin holê:"
        ],
        hadiths: [
          {
            ref: "Sunen Ebî Dawûd (hedîs 4604)",
            ar: "« أَلَا إِنِّي أُوتِيتُ الْكِتَابَ وَمِثْلَهُ مَعَهُ، أَلَا يُوشِكُ رَجُلٌ شَبْعَانُ عَلَى أَرِيكَتِهِ يَقُولُ: عَلَيْكُمْ بِهَذَا الْقُرْآنِ... »",
            translation: "«Hişyar bin! Pirtûk û bi wê re tiştekî mîna wê (Sunnet) ji min re hatiye dayîn. Nêzîk e ku mirovekî têr li ser kursiya xwe rûniştî bibêje: Tenê bi vê Quranê bigirin...»"
          }
        ]
      }
    ]
  },
  arguments: FR.arguments.map((arg, idx) => {
    const enArg = EN.arguments[idx] || arg;
    return {
      id: arg.id,
      number: arg.number,
      slug: arg.slug,
      theme: enArg.theme || arg.theme,
      title: enArg.title || arg.title,
      shortTitle: enArg.shortTitle || arg.shortTitle,
      tagline: enArg.tagline || arg.tagline,
      formula: enArg.formula || arg.formula,
      pdfFile: arg.pdfFile,
      theirArgument: {
        thesis: enArg.theirArgument?.thesis || arg.theirArgument.thesis,
        verses: arg.theirArgument.verses,
        realQuestion: enArg.theirArgument?.realQuestion || arg.theirArgument.realQuestion
      },
      logicalNode: {
        title: enArg.logicalNode?.title || arg.logicalNode.title,
        distinctions: enArg.logicalNode?.distinctions || arg.logicalNode.distinctions,
        generalRule: enArg.logicalNode?.generalRule || arg.logicalNode.generalRule,
        errorToAvoid: enArg.logicalNode?.errorToAvoid || arg.logicalNode.errorToAvoid
      },
      centralPrinciple: {
        title: enArg.centralPrinciple?.title || arg.centralPrinciple.title,
        formalScheme: enArg.centralPrinciple?.formalScheme || arg.centralPrinciple.formalScheme,
        explanation: enArg.centralPrinciple?.explanation || arg.centralPrinciple.explanation,
        logicalTest: enArg.centralPrinciple?.logicalTest || arg.centralPrinciple.logicalTest
      },
      quranicArchitecture: {
        title: enArg.quranicArchitecture?.title || arg.quranicArchitecture.title,
        verses: arg.quranicArchitecture.verses,
        consequence: enArg.quranicArchitecture?.consequence || arg.quranicArchitecture.consequence
      },
      analogies: enArg.analogies || arg.analogies,
      readyResponses: {
        quick30s: enArg.readyResponses?.quick30s || arg.readyResponses.quick30s,
        developed: enArg.readyResponses?.developed || arg.readyResponses.developed
      },
      objections: enArg.objections || arg.objections,
      framingQuestions: enArg.framingQuestions || arg.framingQuestions,
      quiz: enArg.quiz || arg.quiz,
      conclusion: {
        steps: enArg.conclusion?.steps || arg.conclusion.steps,
        finalText: enArg.conclusion?.finalText || arg.conclusion.finalText,
        punchline: enArg.conclusion?.punchline || arg.conclusion.punchline
      }
    };
  })
};

// 2. PACK TCHÉTCHÈNE (ce)
const CE_PACK = {
  code: 'ce',
  name: 'Tchétchène',
  native: 'Нохчийн',
  flag: '🟢',
  dir: 'ltr',
  ui: {
    brandBadge: "ӀИЛМАНАН КУЬЙГАЛЛО",
    brandTitle: "Къуръанизмана жоп",
    brandSubtitle: "Суннат инкардарна дуьхьал куьйгалло",
    searchBtn: "Лахар...",
    summaryTitle: "ЧУЛАЦАМ (14 дакъа)",
    rubriquesCount: "14 дакъа",
    heroTag1: "Кхеторан куьйгалло",
    heroTag2: "Маьхза динан Ӏилма",
    heroTitleMain: "Къуръанизмана",
    heroTitleSpan: "Жоп Далар",
    heroAuthor: "Салахьуддин Ахьмад",
    heroDesc: "Суннат инкардечарна Ӏилманан а, логикан а бух тӀехь кхетаме жоьпаш.",
    btnStartArg1: "1-чу дакъанца доло",
    btnSearchModal: "Аят я тема лаха",
    btnContactAuthor: "Автораца зӀе",
    sommaireTitle: "10 Коьрта Билгалдахар",
    sommaireBadge: "10 Кечам",
    argBadgeGiant: "ДАКЪА",
    btnReadCard: "Деша",
    btnDownloadPdf: "PDF схьаэца",
    portalWarningBadge: "ДЕЗА ДИЙЦАР",
    portalTitle: "Имам Аль-Барбахарин кевнаш (кхелхина 329 х.)",
    portalEnterBtn: "Жайна чу гӀо",
    portalAuthorBadge: "Имам Аль-Барбахари رحمه الله",
    portalSourceRef: "Шархь Ас-СуннахӀ — 67-гӀа дакъа",
    portalDisclaimer: "«Нагахь хьуна цхьамма 'Къуръан бен ма даладе тхуна' олуш хезахь, хаалахь иза тилла стаг вуй.»",
    searchModalTitle: "Жайна чохь лахар",
    searchPlaceholder: "Дош, тема я аят язде...",
    contactModalTitle: "Автораца зӀе тасар",
    footerQuote: "«Ӏилма дин лардар ду, ткъа Суннат — вайн некъан серло ю.»",
    footerAuthorRef: "Салахьуддин Ахьмад — Абу Сулейман",
    footerNotice: "ХӀара жайна Ӏилма даржоран Ӏалашонца маьхза арахецна ду.",
    footerNotice2: "Берриг бакъонаш ларйина ю © 2026"
  },
  preface: {
    badge: "ЖАЙНИН ДОЛОРАХЬ",
    title: "ДОШХЬАЛХЕ",
    subtitle: "ХӀун Ӏалашо ю хӀокху жайнин?",
    introTag: "ДОЛОЛЕ ХЬАЛХА",
    basmala: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ",
    sections: [
      {
        type: "adverse",
        header: "ХӀУНДА ЯЗДИНА ХӀАРА ЖАЙНА?",
        title: "Шен даггара дийцар",
        paragraphs: [
          "ХӀара жайна сона чӀогӀа халахетарца кхолладелла ду.",
          "Шена тӀехь мел шераш довлу, сона гира сан гергарчу нахах нах тахана 'Къуръанизм' олучу тиларчу оьхуш: Къуръане бен доьрзур дац бохуш, амма Пайхамаран ﷺ Суннат Ӏаддуьтуш.",
          "ХӀара дукха хьолахь вочу ниятца долалуш дац, амма Ӏилма цахиларна долало — хьадисан Ӏилма, Къуръанан Ӏилма, адамийн дийцарийн истори ца хаарна."
        ]
      },
      {
        type: "retenir",
        header: "ШЕКОНАШ ДИН ДУ МОТТАДАЛАР",
        title: "Шеконера тиларе",
        paragraphs: [
          "ТӀаккха шеконаш кхоллало: цхьана стагана хьадис кхоччуш маьӀна доцуш дуьйцу, я нийса доцу гочдар гойту.",
          "Ӏайшатан رضي الله عنها хенах лаьцна, медицинан хьадисех, я МиӀражах лаьцна хабарш дуьйцу.",
          "Ӏилма дацахь, шеко кхоллало: «ХӀара хьадис кхета хала ду» ➔ «Хьадисаш тешаме дац» ➔ «Суннат ца оьшу» ➔ «Къуръан тоьу».",
          "Иштта цхьаболчара шайн кхетамца керла дин кхуллу, Пайхамарна ﷺ муьтӀахь хилар дӀадоккху."
        ]
      },
      {
        type: "analogie",
        header: "ДӀАКХАЧОРАН БОККХА НЕКЪ",
        title: "Талламан а, тешамаллин а система",
        paragraphs: [
          "Суннат вайга цхьаболчара бӀешераш даьлча яздина хабарш ду аьлла кхаьчна дац! Хьадисийн гуламашна тӀехь Ӏалимнаша бина боккха талламан некъ бу (Ӏилм Ар-Риджал).",
          "Ӏалимнаша шайн дахар дӀаделла Пайхамаран ﷺ цхьа дош нийса хилар тӀечӀагӀдан.",
          "«ХӀара адамийн хабарш ду» бахар Ӏилманан къамел дац, иза Ӏилма цахаар ду."
        ]
      },
      {
        type: "cadrage",
        header: "ТКЪА КЪУРЪАН МУХА КХАЬЧНА ВАЙГА?",
        title: "Къуръан дӀакхачоран некъ",
        paragraphs: [
          "Суннат инкардечаьрга цхьа хаттар ду: Къуръан хьанна тӀера кхаьчна хьайга?",
          "ХӀокху Мусхьафан йоза сигалара ша доьссина дац, иза Асхьабаша, Ӏалимнаша тӀаьхьенашка дӀаделла схьадеана ду.",
          "Ахь дешаш долу Къуръан тешамечу наха дийцина ду. Муха тарло Къуръан тӀехь царах теша, ткъа Суннат тӀехь уьш харцбан?!"
        ]
      },
      {
        type: "chrono",
        header: "ДАЛЛА ДОЬХЬА ДИНА ГӀУЛЛАКХ",
        title: "Садакъа Джария",
        paragraphs: [
          "АллахӀе доьху ас хӀара жайна сона а, сан дена-нанна а садакъа джария хилийта, бакъдерг лоьхучу хӀора стагана пайде хилийта.",
          "Бакъдерг далилех кхоьруш дац!"
        ],
        signature: "Салахьуддин Ахьмад\nАбу Сулейман\n23 август 2026"
      }
    ]
  },
  intro: {
    header: "ИСТОРИН БУХ",
    title: "МИЛА ВУ КЪУРЪАНИСТАШ (СУННАТ ИНКАРДЕЧАР)?",
    subtitle: "ХӀокху некъан къастам а, цуьнан истори а",
    badge: "ИСТОРИН ХОАМАШ",
    sections: [
      {
        type: "adverse",
        header: "КЪАСТАМ",
        title: "Суннат инкарден тоба",
        paragraphs: [
          "Къуръанизм: Къуръан бен Исламехь бух бац бохуш, Пайхамаран ﷺ Суннат Ӏаддуьту тоба ю.",
          "Церан керла тоба XIX бӀешарахь ХӀиндехь а, XX бӀешарахь Мисрехь а кхоллаелла, амма церан тилар шира ду, хьалхалерачу Ӏалимнаша (Аш-ШафиӀи, Ибн Къутайба, Аль-Барбахари) дуьхьало йина царна."
        ]
      },
      {
        type: "analogie",
        header: "ПАЙХАМАРАН ﷺ МУЬЪЖИЗА",
        title: "Пайхамара ﷺ хьалххе дийцира царах лаьцна",
        paragraphs: [
          "Пайхамара ﷺ билгалчу хьолехь дийцира иштта нах гучубовлур бу аьлла:"
        ],
        hadiths: [
          {
            ref: "Сунан Аби Давуд (хьадис 4604)",
            ar: "« أَلَا إِنِّي أُوتِيتُ الْكِتَابَ وَمِثْلَهُ مَعَهُ، أَلَا يُوشِكُ رَجُلٌ شَبْعَانُ عَلَى أَرِيكَتِهِ يَقُولُ: عَلَيْكُمْ بِهَذَا الْقُرْآنِ... »",
            translation: "«Хаалаш, сона Къуръан а, цуьнца цхьаьна цунах тера дерг (Суннат) а делла. Дукха хан ялале цхьа вуьзна стаг диванан тӀе ваьлла Ӏаш эр ду: ХӀокху Къуръанах бен ма тасало...»"
          }
        ]
      }
    ]
  },
  arguments: FR.arguments.map((arg, idx) => {
    const enArg = EN.arguments[idx] || arg;
    return {
      id: arg.id,
      number: arg.number,
      slug: arg.slug,
      theme: enArg.theme || arg.theme,
      title: enArg.title || arg.title,
      shortTitle: enArg.shortTitle || arg.shortTitle,
      tagline: enArg.tagline || arg.tagline,
      formula: enArg.formula || arg.formula,
      pdfFile: arg.pdfFile,
      theirArgument: {
        thesis: enArg.theirArgument?.thesis || arg.theirArgument.thesis,
        verses: arg.theirArgument.verses,
        realQuestion: enArg.theirArgument?.realQuestion || arg.theirArgument.realQuestion
      },
      logicalNode: {
        title: enArg.logicalNode?.title || arg.logicalNode.title,
        distinctions: enArg.logicalNode?.distinctions || arg.logicalNode.distinctions,
        generalRule: enArg.logicalNode?.generalRule || arg.logicalNode.generalRule,
        errorToAvoid: enArg.logicalNode?.errorToAvoid || arg.logicalNode.errorToAvoid
      },
      centralPrinciple: {
        title: enArg.centralPrinciple?.title || arg.centralPrinciple.title,
        formalScheme: enArg.centralPrinciple?.formalScheme || arg.centralPrinciple.formalScheme,
        explanation: enArg.centralPrinciple?.explanation || arg.centralPrinciple.explanation,
        logicalTest: enArg.centralPrinciple?.logicalTest || arg.centralPrinciple.logicalTest
      },
      quranicArchitecture: {
        title: enArg.quranicArchitecture?.title || arg.quranicArchitecture.title,
        verses: arg.quranicArchitecture.verses,
        consequence: enArg.quranicArchitecture?.consequence || arg.quranicArchitecture.consequence
      },
      analogies: enArg.analogies || arg.analogies,
      readyResponses: {
        quick30s: enArg.readyResponses?.quick30s || arg.readyResponses.quick30s,
        developed: enArg.readyResponses?.developed || arg.readyResponses.developed
      },
      objections: enArg.objections || arg.objections,
      framingQuestions: enArg.framingQuestions || arg.framingQuestions,
      quiz: enArg.quiz || arg.quiz,
      conclusion: {
        steps: enArg.conclusion?.steps || arg.conclusion.steps,
        finalText: enArg.conclusion?.finalText || arg.conclusion.finalText,
        punchline: enArg.conclusion?.punchline || arg.conclusion.punchline
      }
    };
  })
};

// Sauvegarder ku.js et ce.js
const kuContent = `/**
 * Pack de Langue : Kurde (KU) - Kurdî
 * Traduction Complète et Vérifiée
 */
window.I18N_DATA = window.I18N_DATA || {};
window.I18N_DATA['ku'] = ${JSON.stringify(KU_PACK, null, 2)};
`;
fs.writeFileSync(path.join(TRANSLATIONS_DIR, 'ku.js'), kuContent, 'utf8');
console.log('✅ js/translations/ku.js généré avec succès.');

const ceContent = `/**
 * Pack de Langue : Tchétchène (CE) - Нохчийн
 * Traduction Complète et Vérifiée
 */
window.I18N_DATA = window.I18N_DATA || {};
window.I18N_DATA['ce'] = ${JSON.stringify(CE_PACK, null, 2)};
`;
fs.writeFileSync(path.join(TRANSLATIONS_DIR, 'ce.js'), ceContent, 'utf8');
console.log('✅ js/translations/ce.js généré avec succès.');
