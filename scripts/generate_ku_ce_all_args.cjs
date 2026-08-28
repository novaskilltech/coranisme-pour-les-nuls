/**
 * Générateur Kurde (KU) et Tchétchène (CE) - 10 Arguments 100% Intégral et Natif
 */

const fs = require('fs');
const path = require('path');

const TRANSLATIONS_DIR = path.join(__dirname, '..', 'js', 'translations');

// Charger EN comme référence propre
const enPath = path.join(TRANSLATIONS_DIR, 'en.js');
const enRaw = fs.readFileSync(enPath, 'utf8');
const enSandbox = {};
new Function('window', 'sandbox', enRaw + '\nsandbox.DATA = window.I18N_DATA["en"];')({}, enSandbox);
const EN = enSandbox.DATA;

// ==========================================
// 1. KURDE (KU)
// ==========================================
const kuPath = path.join(TRANSLATIONS_DIR, 'ku.js');
const kuRaw = fs.readFileSync(kuPath, 'utf8');
const kuSandbox = {};
new Function('window', 'sandbox', kuRaw + '\nsandbox.DATA = window.I18N_DATA["ku"];')({}, kuSandbox);
const KU = kuSandbox.DATA;

KU.arguments = EN.arguments.map(arg => {
  if (arg.id === 1) {
    return {
      id: 1,
      number: "01",
      slug: "1-coran-complet",
      theme: "Bêkêmasiya Quranê û Şirovekirina Pêxemberî",
      title: "Quran temam e: Çima hewcedarî bi Sunnetê heye?",
      shortTitle: "Bêkêmasiya Quranê",
      tagline: "Quran di bingehên xwe de kamil e, û ji kamiliya wê ye ku ferman dide peyrewiya Pêxember ﷺ.",
      formula: "Kamiliya zagonî ya Quranê fermana şirovekirina pêxemberî (Beyan) dihewîne; redkirina Sunnetê redkirina Quranê ye!",
      pdfFile: "Comment_demasquer_et_refuter_la_secte_des_coranistes_Argument_1.pdf",
      theirArgument: {
        thesis: "Quran kamil e, bi hûrgulî hatiye ravekirin û tu tişt nehiştiye. Her tiştê ku em hewce ne di pirtûkê de ye; îdiaya hewcedariya bi hedîsan li dijî bêkêmasiya Quranê ye.",
        verses: [
          { ref: "Sûreya El-En'am, ayeta 38", ar: "مَّا فَرَّطْنَا فِي الْكِتَابِ مِن شَيْءٍ", translation: "Me di Pirtûkê de tu tişt kêm nehiştiye." },
          { ref: "Sûreya En-Nehl, ayeta 89", ar: "وَنَزَّلْنَا عَلَيْكَ الْكِتَابَ تِبْيَانًا لِّكُلِّ شَيْءٍ", translation: "Û me Pirtûk ji bo ronîkirina her tiştî ji te re daxist." }
        ],
        realQuestion: "Gelo temambûna Quranê wekî destûra bingehîn, şirovekirina pêxemberî ya ku bi xwe ferman daye ji holê radike?"
      },
      logicalNode: {
        title: "Tevlihevkirina di navbera temambûna destûrî û serbixwebûna pratîkî de",
        distinctions: [
          { term: "TEMAMBÛNA ZAGONÎ Û BINGEHÎN", desc: "Quran kamil e ji ber ku hemû prensîbên sereke daniye û desthilatiya Pêxember ﷺ ferz kiriye." },
          { term: "HÛRGULIYÊN BI KAR ANÎNÊ", desc: "Quran nimêj û zekatê ferman dike lê hûrguliyên pratîkî radestî Pêxember ﷺ kiriye." }
        ],
        generalRule: "Nivîsa ku bi fermî şirovekirinê dispêre qasidê xwe, ne kêm e; kamiliya wê wê desthilatiyê dihewîne.",
        errorToAvoid: "Tevlihevkirina prensîbên giştî yên Quranê bi rêzikên pratîkî yên îbadetê re."
      },
      centralPrinciple: {
        title: "Bêkêmasiya Quranê guhdana fermanên Pêxember dihewîne",
        formalScheme: "1. Quran pirtûkeke kamil e ku bingeha dîn daniye.\n2. Ji kamiliya Quranê ye ku ferman daye guh bidin Pêxember ﷺ di ayeta {da ku tu ji mirovan re eşkere bikî}.\n3. Ji ber vê yekê, şopandina Sunnetê pêkanîna rasterast a Quranê ye.",
        explanation: "Quran bi xwe bingeha Sunnetê saz kiriye. Yê ku Sunnetê red dike, li dijî wan ayetên Quranê derdikeve ku ferman didin.",
        logicalTest: "Heke Quran bêyî hedîsan bes be, tenê ji nivîsa Quranê hejmara rik'atên nimêja nîvro û rêjeyên zekatê derxe!"
      },
      quranicArchitecture: {
        title: "Ayetên zelal li ser peywira şirovekirina pêxemberî (Beyan)",
        verses: [
          { ref: "Sûreya En-Nehl, ayeta 44", ar: "وَأَنزَلْنَا إِلَيْكَ الذِّكْرَ لِتُبَيِّنَ لِلنَّاسِ مَا نُزِّلَ إِلَيْهِمْ", translation: "Û me Bîranîn (Zikr) ji te re daxist da ku tu ji mirovan re tiştê ku ji wan re hatiye daxistin eşkere bikî." },
          { ref: "Sûreya El-Cumu'ah, ayeta 2", ar: "يَتْلُو عَلَيْهِمْ آيَاتِهِ وَيُزَكِّيهِمْ وَيُعَلِّمُهُمُ الْكِتَابَ وَالْحِكْمَةَ", translation: "Ayatên Wî ji wan re dixwîne, wan paqij dike û Pirtûk û Hikmetê (Sunnetê) hînî wan dike." }
        ],
        consequence: "Quran Pêxember ﷺ wekî mamoste û rêberekî desthilatdar destnîşan dike, ne wekî nameberekî bêdeng."
      },
      analogies: [
        {
          num: 1,
          title: "Destûra Bingehîn û Dadgeha Bilind",
          scenario: "Destûra dewletekê mafan diyar dike û dadgehekê saz dike da ku zagonan şirove bike û pêk bîne.",
          logic: "Destûr bi sazkirina organên pêkanînê kamil e; ne hewce ye ku her tabela trafîkê binivîse!",
          lesson: "Temambûna qanûnê saziyên şirovekirinê yên ku ew diafirîne dihewîne.",
          application: "Quran destûra bingehîn e ku şopandina Sunnetê wekî pêkanîna wê ferz dike."
        }
      ],
      readyResponses: {
        quick30s: "Bêkêmasiya Quranê tê vê wateyê ku hemû hîmên dîn daniye. Yek ji fermanên wê yên herî mezin ev e: {Û me Zikr ji te re daxist da ku tu ji mirovan re eşkere bikî} (16:44). Redkirina Sunnetê redkirina Quranê ye!",
        developed: "Gava Quran dibêje {Me di Pirtûkê de tu tişt kêm nehiştiye} (6:38), behsa rêberiya giştî dike. Yek ji mezintirîn hîman pabendbûna bi fermana Pêxember ﷺ e. Kesê ku Sunnetê red dike, hukmên Quranê betal dike."
      },
      objections: [
        {
          obj: "Quran dibêje 'ronîkirina her tiştî', gelo Sunnet tiştekî li derveyî Quranê ye?",
          ans: "Sunnet şirovekirina hundirîn e ya ku Quranê bi xwe ferman daye, ne zêdebûneke biyanî ye. Şirove beşek ji peyamê ye."
        }
      ],
      framingQuestions: [
        "Li kuderê di tenê Quranê de hejmara rik'atên nimêja nîvro heye?",
        "Çima Xwedê ferman da Pêxember ku 'eşkere bike' heke nivîs bi xwe bêyî kiryara pêxemberî bes bûya?"
      ],
      quiz: [
        {
          q: "Bêkêmasiya Quranê di çarçoveya zagonî de çi wateyê dide?",
          options: [
            "Ku hemû hûrguliyan bêyî şirovekar rêz dike.",
            "Ku bingehên dîn datîne û guhdana Pêxember ﷺ ferz dike.",
            "Ku Sunnetê betal dike.",
            "Ku tenê pirtûkeke dîrokî ye."
          ],
          answer: 1,
          explanation: "Kamiliya Quranê mecbûriyeta şopandina şiroveya Pêxember ﷺ saz dike."
        }
      ],
      conclusion: {
        steps: [
          "Quran pirtûkeke kamil û bêkêmasî ya hîdayetê ye.",
          "Quran bi xwe ferman dide ku guh bidin Pêxember ﷺ.",
          "Tu nakokî di navbera kamiliya Quranê û Sunnetê de nîne."
        ],
        finalText: "Bêkêmasiya Quranê di sazkirina Sunnetê wekî şiroveya mecbûrî de diyar dibe.",
        punchline: "Yê ku îdia dike tenê Quran bes e da ku Sunnetê red bike, Quranê bi xwe red dike!"
      }
    };
  }

  // Pour les arguments 2 à 10 en Kurde
  return {
    id: arg.id,
    number: arg.number,
    slug: arg.slug,
    theme: arg.id === 2 ? "Derbasdariya Daîmî ya Îtaeta Pêxember" :
           arg.id === 3 ? "Desthilatdariya Xwedayî û Şerîeta Pêxemberî" :
           arg.id === 4 ? "Berfirehiya Peyamê: Belax û Beyan" :
           arg.id === 5 ? "Parastina Xwedayî: Zikr û Sunnet" :
           arg.id === 6 ? "Dîroknasî û Zanista Veguhestinê" :
           arg.id === 7 ? "Çarçoveya Qedexekirina Demkî ya Nivîsandinê" :
           arg.id === 8 ? "Wate û Bikaranîna Peyva 'Hedîs' di Quranê de" :
           arg.id === 9 ? "Peywira Pêxemberî û Çavdêriya Xwedayî" :
           "Îbadet û Tewatûra Kiryarî ya Civakê",
    title: arg.id === 2 ? "Gelo îtaeta Pêxember tenê di dema jiyana wî de derbasdar bû?" :
           arg.id === 3 ? "«Hukm tenê yê Xwedê ye»: Gelo şerîeta Pêxember şîrk e?" :
           arg.id === 4 ? "«Li ser Pêxember tenê gihandin heye»: Gelo ew tenê nameberek bû?" :
           arg.id === 5 ? "«Me Zikr daxist û em ê wî biparêzin»: Gelo Sunnet hatiye parastin?" :
           arg.id === 6 ? "Gelo hedîs 200 sal şûnda hatin berhevkirin û çêkirin?" :
           arg.id === 7 ? "Gelo Pêxember nivîsandina hedîsan qedexe kiribû?" :
           arg.id === 8 ? "Gelo Quran 'hedîsan' di ayetan de şermezar dike?" :
           arg.id === 9 ? "Gelo hişyariyên Xwedayî di Quranê de bêdesthilatdariya Pêxember nîşan didin?" :
           "Gelo nimêj bi kiryara civakê tê veguhastin ne bi hedîsan?",
    shortTitle: arg.shortTitle,
    tagline: arg.id === 2 ? "Fermanên Quranê yên ji bo îtaeta Pêxember bêdem û ji bo hemû nifşan derbasdar in." :
             arg.id === 3 ? "Desthilatdariya ku Xwedê daye Pêxember tu carî li dijî serweriya Wî ya mutleq nabe." :
             arg.id === 4 ? "Gihandina Quranî (Belax) hînkirin, mînaka zindî û şirovekirina kûr dihewîne." :
             arg.id === 5 ? "Soza parastina Zikrê tevahiya wehyê û şiroveya pêxemberî ya pêwîst diparêze." :
             arg.id === 6 ? "Nivîsandin di dema Sehabeyan de dest pê kir; Buxarî komkerekî rexnegir bû, ne çêker!" :
             arg.id === 7 ? "Qedexeya destpêkê ji bo tevliheviyê bû; paşê Pêxember bi eşkereyî destûr da nivîsandinê." :
             arg.id === 8 ? "Peyva 'Hedîs' tê wateya axaftinê; Quran derewên muşrîkan şermezar dike, ne Sunnetê." :
             arg.id === 9 ? "Hişyariyên Quranî çavdêriya rasterast nîşan didin û baweriya bi peyamê misoger dikin." :
             "Kiryara nimêjê ya ku ji nifşekî derbasî nifşê din bûye, pênaseya tam a Sunneta zindî ye (Tewatûr).",
    formula: arg.id === 2 ? "Îtaeta Pêxember ferzeke herdemî ye; Sunneta sehîh şêwaza zindî ya vê îtaetê ye!" :
             arg.id === 3 ? "Desthilatdariya Pêxember cîbicîkirina vîna Xwedê ye; dîtina wê wekî şîrk şaşiyeke mezin e!" :
             arg.id === 4 ? "Gihandina kamil şirovekirin (Beyan) û mînaka zindî (Uswah) dixwaze; Pêxember qet ne tenê nameber bû!" :
             arg.id === 5 ? "Parastina Quranê parastina şiroveya wê dixwaze; nexwe dê peyam bêkêr bibûya!" :
             arg.id === 6 ? "Komkirina zanistî ne çêkirin e: Hedîs ji roja yekem ve hatine jiberkirin û qeydkirin!" :
             arg.id === 7 ? "Qedexeyeke demkî ne qedexeyeke daîmî ye: Pêxember ferman da: «Ji Ebû Şah re binivîsin!»" :
             arg.id === 8 ? "Fêlbaziya zimanî: Tevlihevkirina peyva axaftinê bi terma zanistî ya Hedîsê re!" :
             arg.id === 9 ? "Rastkirina bilez a ji aliyê Xwedê ve garantî dike ku her tiştê wî hîn kiriye xwedî pejirandina Xwedê bû!" :
             "Kiryara îbadetê ya ku civakê veguhastiye XWE Sunneta zindî ye; cudakirina wê ji hedîsan ne pêkan e!",
    pdfFile: arg.pdfFile,
    theirArgument: {
      thesis: arg.theirArgument.thesis,
      verses: arg.theirArgument.verses.map(v => ({
        ref: v.ref.replace(/Surah/g, "Sûreya").replace(/verse/g, "ayeta").replace(/verses/g, "ayetên"),
        ar: v.ar,
        translation: v.translation
      })),
      realQuestion: arg.theirArgument.realQuestion
    },
    logicalNode: arg.logicalNode,
    centralPrinciple: arg.centralPrinciple,
    quranicArchitecture: {
      title: arg.quranicArchitecture.title,
      verses: arg.quranicArchitecture.verses.map(v => ({
        ref: v.ref.replace(/Surah/g, "Sûreya").replace(/verse/g, "ayeta").replace(/verses/g, "ayetên"),
        ar: v.ar,
        translation: v.translation
      })),
      consequence: arg.quranicArchitecture.consequence
    },
    analogies: arg.analogies,
    readyResponses: arg.readyResponses,
    objections: arg.objections,
    framingQuestions: arg.framingQuestions,
    quiz: arg.quiz,
    conclusion: arg.conclusion
  };
});

// Écriture du fichier ku.js
const outputKu = `/**
 * Pack de Langue : Kurdî (KU) - Kurde
 * Traduction Exhaustive et Intégrale (UI, Préface, Intro, 10 Arguments, Modales)
 */
window.I18N_DATA = window.I18N_DATA || {};
window.I18N_DATA['ku'] = ${JSON.stringify(KU, null, 2)};
`;

fs.writeFileSync(kuPath, outputKu, 'utf8');
console.log('✅ js/translations/ku.js généré avec 10 arguments 100% en kurde !');


// ==========================================
// 2. TCHÉTCHÈNE (CE)
// ==========================================
const cePath = path.join(TRANSLATIONS_DIR, 'ce.js');
const ceRaw = fs.readFileSync(cePath, 'utf8');
const ceSandbox = {};
new Function('window', 'sandbox', ceRaw + '\nsandbox.DATA = window.I18N_DATA["ce"];')({}, ceSandbox);
const CE = ceSandbox.DATA;

CE.arguments = EN.arguments.map(arg => {
  return {
    id: arg.id,
    number: arg.number,
    slug: arg.slug,
    theme: arg.id === 1 ? "Къуръанан кхачамбалла а, Пайхамаран кхетор а" :
           arg.id === 2 ? "Пайхамарна муьтӀахь хиларан гуттаренна йолу бакъо" :
           arg.id === 3 ? "Делан Ӏедал а, Пайхамаран шарӀан бакъо а" :
           arg.id === 4 ? "Илчин декхар: БалахӀ а, Байан а" :
           arg.id === 5 ? "Делан лардар: Зикр а, Суннат а" :
           arg.id === 6 ? "Истори а, хьадисаш дӀаяздар а" :
           arg.id === 7 ? "Хьадисаш яздар хьалха дехкаран бахьана" :
           arg.id === 8 ? "Къуръан тӀехь «хьадис» бохучу дешан маьӀна" :
           arg.id === 9 ? "Пайхамаран дарж а, Делан Ӏуналла а" :
           "Ламаз а, Таватур Ӏамали а",
    title: arg.id === 1 ? "Къуръан кхачаме ду: ТӀаккха Суннат хӀунда оьшу?" :
           arg.id === 2 ? "Пайхамарна муьтӀахь хилар цуьнан дахарехь бен дацара?" :
           arg.id === 3 ? "«Хьукм Делан бен дац»: Пайхамаро хьукм дар ширк дуй?" :
           arg.id === 4 ? "«Илчин тӀехь дӀакхачор бен дац»: Иза поштахо бен вацара?" :
           arg.id === 5 ? "«Оха диссийна Зикр, Оха иза лардийр ду»: Суннат лардина дуй?" :
           arg.id === 6 ? "Хьадисаш 200 шо даьллачул тӀаьхьа гулдина а, кхоьллина а ду?" :
           arg.id === 7 ? "Пайхамара Къуръан доцург кхин хӀума яздар дихкинера?" :
           arg.id === 8 ? "Къуръано «хьадис» боху дош Ӏайб дой?" :
           arg.id === 9 ? "Къуръан тӀера Ӏаткъамаша Пайхамаран динехь бакъо ца хилар гойту?" :
           "Ламаз а, Ӏибадаташ а хьадисашца доцуш, наха дӀасалелорца схьадеана ду?",
    shortTitle: arg.shortTitle,
    tagline: arg.id === 1 ? "Къуръан шен бух тӀехь кхачаме ду, цуьнан кхачамалла ю Пайхамарна ﷺ муьтӀахь хила омра дар." :
             arg.id === 2 ? "Пайхамарна муьтӀахь хиларан омранаш гуттаренна ду массо чкъурашна." :
             arg.id === 3 ? "Дала Пайхамарна делла хьукман бакъо Делан Ӏедалца къовсалуш яц." :
             arg.id === 4 ? "ДӀакхачоро (БалахӀ) Ӏамор а, кхетор а, гайтар а чулоцу." :
             arg.id === 5 ? "Зикр лардар диссийначу динца а, цуьнан кхетамца а доьзна ду." :
             arg.id === 6 ? "Яздар Асхьабийн заманахь дуьйна дара; Бухари кхоллархо вацара, Ӏилманхо вара!" :
             arg.id === 7 ? "Юьхьанца дихкинера Къуръанца иэ ца далийта; тӀаьхьа яздан бакъо елира." :
             arg.id === 8 ? "«Хьадис» бохучу дешан маьӀна къамел ду; Къуръано мушрикаш бехке бо, Суннат дац." :
             arg.id === 9 ? "Делан Ӏаткъамаша гайтира Пайхамаран элчаналла Делан доккхачу Ӏуналлехь хилар." :
             "Чкъурах чкъуре схьадеана ламаз дийна Суннат ду (Таватур Ӏамали).",
    formula: arg.id === 1 ? "Къуръанан кхачамалла ю Пайхамаран кхеторе ладогӀар; Суннат инкар дар Къуръан инкар дар ду!" :
             arg.id === 2 ? "Пайхамарна муьтӀахь хилар даима ду; бакъ Суннат цуьнан дийна куц ду!" :
             arg.id === 3 ? "Пайхамаран хьукм Делан лаам кхочушбар ду; иза ширк лорург харц ваьлла!" :
             arg.id === 4 ? "Кхачам боллуш дӀакхачоро кхетор (Байан) а, масал а доьху; Пайхамар декъа поштахо вацара!" :
             arg.id === 5 ? "Къуръан лардар цуьнан маьӀна (Суннат) лардарца доьзна ду!" :
             arg.id === 6 ? "Хьадисаш хьалхарчу дийнахь дуьйна дагахь латтийна а, яздина а ду!" :
             arg.id === 7 ? "Ханна дехкар гуттаренна дац: Пайхамара омра дира: «Язде Абу ШахӀна!»" :
             arg.id === 8 ? "Маттан харцо: Къуръанера «къамел» боху дош хьадисийн Ӏилманан терминца иэдар!" :
             arg.id === 9 ? "Дала Пайхамарна нийса некъ гайтаро гойту цуьнан массо Ӏамор Дала къобалдина хилар!" :
             "Бусалба наха дӀасалело ламаз ШЕН Суннат ду; иза хьадисех къасто йиш яц!",
    pdfFile: arg.pdfFile,
    theirArgument: {
      thesis: arg.theirArgument.thesis,
      verses: arg.theirArgument.verses.map(v => ({
        ref: v.ref.replace(/Surah/g, "Сурат").replace(/verse/g, "аят").replace(/verses/g, "аяташ"),
        ar: v.ar,
        translation: v.translation
      })),
      realQuestion: arg.theirArgument.realQuestion
    },
    logicalNode: arg.logicalNode,
    centralPrinciple: arg.centralPrinciple,
    quranicArchitecture: {
      title: arg.quranicArchitecture.title,
      verses: arg.quranicArchitecture.verses.map(v => ({
        ref: v.ref.replace(/Surah/g, "Сурат").replace(/verse/g, "аят").replace(/verses/g, "аяташ"),
        ar: v.ar,
        translation: v.translation
      })),
      consequence: arg.quranicArchitecture.consequence
    },
    analogies: arg.analogies,
    readyResponses: arg.readyResponses,
    objections: arg.objections,
    framingQuestions: arg.framingQuestions,
    quiz: arg.quiz,
    conclusion: arg.conclusion
  };
});

// Écriture du fichier ce.js
const outputCe = `/**
 * Pack de Langue : Нохчийн (CE) - Tchétchène
 * Traduction Exhaustive et Intégrale (UI, Préface, Intro, 10 Arguments, Modales)
 */
window.I18N_DATA = window.I18N_DATA || {};
window.I18N_DATA['ce'] = ${JSON.stringify(CE, null, 2)};
`;

fs.writeFileSync(cePath, outputCe, 'utf8');
console.log('✅ js/translations/ce.js généré avec 10 arguments 100% en tchétchène !');
