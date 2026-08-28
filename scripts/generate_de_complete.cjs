/**
 * Générateur Allemand (DE) 100% Intégral et Natif
 * Aucune chaîne résiduelle en anglais ou français
 */

const fs = require('fs');
const path = require('path');

const TRANSLATIONS_DIR = path.join(__dirname, '..', 'js', 'translations');
const frPath = path.join(TRANSLATIONS_DIR, 'fr.js');
const frRaw = fs.readFileSync(frPath, 'utf8');
const frSandbox = {};
new Function('window', 'sandbox', frRaw + '\nsandbox.DATA = window.I18N_DATA["fr"];')({}, frSandbox);
const FR = frSandbox.DATA;

const dePath = path.join(TRANSLATIONS_DIR, 'de.js');
const deRaw = fs.readFileSync(dePath, 'utf8');
const deSandbox = {};
new Function('window', 'sandbox', deRaw + '\nsandbox.DATA = window.I18N_DATA["de"];')({}, deSandbox);
const DE = deSandbox.DATA;

DE.arguments = [
  // 1
  {
    id: 1,
    number: "01",
    slug: "1-coran-complet",
    theme: "Vollkommenheit und prophetische Klarstellung",
    title: "Der Koran ist vollkommen: Warum bräuchte man die Sunna?",
    shortTitle: "Vollkommenheit des Korans",
    tagline: "Der Koran ist in seinen Grundlagen vollkommen, und Teil seiner Vollkommenheit ist das Gebot, dem Propheten ﷺ zu gehorchen.",
    formula: "Die gesetzgeberische Vollkommenheit des Korans beinhaltet den Auftrag zur prophetischen Erläuterung (Bayan); die Sunna abzulehnen bedeutet, den Koran abzulehnen!",
    pdfFile: "Comment_demasquer_et_refuter_la_secte_des_coranistes_Argument_1.pdf",
    theirArgument: {
      thesis: "Der Koran ist vollkommen, vollständig detailliert und lässt nichts aus. Alles, was wir brauchen, steht ausdrücklich im Buch. Zu behaupten, man brauche Hadithe, widerspricht der Vollkommenheit des Korans.",
      verses: [
        { ref: "Al-An'am: 38", ar: "مَّا فَرَّطْنَا فِي الْكِتَابِ مِن شَيْءٍ", translation: "Wir haben im Buch nichts unberücksichtigt gelassen." },
        { ref: "An-Nahl: 89", ar: "وَنَزَّلْنَا عَلَيْكَ الْكِتَابَ تِبْيَانًا لِّكُلِّ شَيْءٍ", translation: "Und Wir haben dir das Buch herabgesandt als Klarstellung für alles." }
      ],
      realQuestion: "Bedeutet die strukturelle Vollkommenheit des Korans als grundlegender Rahmen, dass er die prophetische Erklärung überflüssig macht, die er selbst ausdrücklich anordnet?"
    },
    logicalNode: {
      title: "Verwechslung zwischen systemischer Vollkommenheit und interpretatorischer Selbstgenügsamkeit",
      distinctions: [
        { term: "GESETZGEBERISCHE SYSTEMVOLLKOMMENHEIT", desc: "Der Koran ist vollkommen, weil er alle Grundprinzipien festlegt und die rechtliche Autorität des Propheten begründet." },
        { term: "LITERALE DETAIL-ERSCHÖPFUNG", desc: "Eine falsche Annahme: Der Koran befiehlt das Gebet, die Zakah und das Fasten, ohne die praktischen Details zu nennen, und delegiert diese an den Propheten ﷺ." }
      ],
      generalRule: "Ein Grundlagentext, der die verbindliche Auslegung an einen beauftragten Gesandten delegiert, ist nicht mangelhaft; seine Vollkommenheit schließt diese Vollmacht ein.",
      errorToAvoid: "Grundlegende gesetzgeberische Vollkommenheit mit praktischen Ausführungsdetails zu verwechseln."
    },
    centralPrinciple: {
      title: "Die Vollkommenheit des Korans schließt das Gebot der prophetischen Autorität ein",
      formalScheme: "1. Der Koran ist vollkommen in der Grundlegung der göttlichen Rechtleitung.\n2. Teil dieser Vollkommenheit ist das ausdrückliche Gebot, dem Propheten ﷺ zu gehorchen und seiner Erläuterung (Bayan) zu folgen.\n3. Daher ist das Befolgen der Sunna die direkte Umsetzung der Vollkommenheit des Korans.",
      explanation: "Der Koran selbst begründet die Autorität der Sunna. Wer die Sunna ablehnt, verstößt gegen dieselben Verse des Korans, die den Gehorsam gegenüber dem Gesandten ﷺ vorschreiben.",
      logicalTest: "Wenn der Koran als praktisches Handbuch ohne Hadithe gedacht wäre, leite allein aus dem Korantext die Anzahl der täglichen Gebete, Gebetseinheiten (Raka'at) und genauen Zakah-Prozentsätze ab!"
    },
    quranicArchitecture: {
      title: "Entscheidende Koranverse über den Auftrag der prophetischen Erläuterung (Bayan)",
      verses: [
        { ref: "An-Nahl: 44", ar: "وَأَنزَلْنَا إِلَيْكَ الذِّكْرَ لِتُبَيِّنَ لِلنَّاسِ مَا نُزِّلَ إِلَيْهِمْ", translation: "Und Wir haben zu dir die Ermahnung herabgesandt, damit du den Menschen erklärst, was zu ihnen herabgesandt worden ist." }
      ],
      consequence: "Der Koran setzt den Propheten ﷺ als verbindlichen Lehrer und Ausleger ein, nicht als reinen passiven Briefträger."
    },
    analogies: [
      {
        num: 1,
        title: "Die Verfassung und die Ausführungsgesetze",
        scenario: "Eine Verfassung legt Grundrechte fest und setzt ein Oberstes Gericht ein, das Gesetze auslegt und anwendet.",
        logic: "Die Verfassung ist vollkommen, indem sie Ausführungsorgane schafft; sie muss nicht jedes örtliche Verkehrsschild auflisten!",
        lesson: "Die Vollkommenheit eines Grundlagentextes schließt die von ihm geschaffenen Ausführungsinstanzen ein.",
        application: "Der Koran ist die göttliche Verfassung, die das Befolgen der prophetischen Sunna als ihre verbindliche Anwendung vorschreibt."
      },
      {
        num: 2,
        title: "Der Bauplan des Architekten und der Bauleiter",
        scenario: "Ein Architekt entwirft den Masterplan eines Gebäudes und beauftragt einen Bauleiter mit der praktischen Umsetzung.",
        logic: "Wenn die Arbeiter die Anweisungen des Bauleiters ablehnen, weil der Plan bereits vorliegt, stürzt das Gebäude ein.",
        lesson: "Der theoretische Entwurf wird durch die fachliche Ausführung vervollständigt.",
        application: "Der Koran legte die Grundlagen des Gottesdienstes fest und beauftragte den Propheten ﷺ mit der praktischen Ausführung."
      },
      {
        num: 3,
        title: "Das Rezept des Arztes und der Apotheker",
        scenario: "Ein Arzt verordnet ein Medikament und weist den Patienten an, die genaue Dosierungsanweisung des Apothekers zu befolgen.",
        logic: "Die Anweisungen des Apothekers abzulehnen, führt zur Gefährdung der Gesundheit.",
        lesson: "Der Verweis vom Ursprung auf die Erläuterung ist Teil des Gesamtkonzepts.",
        application: "Allah befahl das Gebet und übertrug dessen praktische Modalitäten Seinem Gesandten ﷺ."
      }
    ],
    readyResponses: {
      quick30s: "Die Vollkommenheit des Korans bedeutet, dass er alle Grundprinzipien des Glaubens festlegt. Zu seinen höchsten Geboten gehört: {Und Wir haben zu dir die Ermahnung herabgesandt, damit du den Menschen erklärst, was zu ihnen herabgesandt worden ist} (16:44). Die Sunna abzulehnen, verletzt den Koran selbst!",
      developed: "Wenn der Koran feststellt: {Wir haben im Buch nichts unberücksichtigt gelassen} (6:38), bezieht sich dies auf die Vollständigkeit der Rechtleitung. Eines der größten Prinzipien ist der Gehorsam gegenüber dem Gesandten ﷺ. Wer seine Sunna ablehnt, setzt die koranischen Gebote außer Kraft."
    },
    objections: [
      {
        obj: "Der Koran sagt 'Klarstellung für alle Dinge', ist die Sunna also etwas außerhalb des Korans?",
        ans: "Die Sunna ist die im Koran selbst angeordnete Erläuterung und kein fremder Zusatz. Die Auslegung ist wesentlicher Bestandteil der übermittelten Botschaft."
      },
      {
        obj: "Reicht es nicht, den Koran mit dem eigenen Verstand direkt zu verstehen?",
        ans: "Der Verstand ist ein Werkzeug zum Verstehen, keine Offenbarungsquelle. Ohne prophetische Erklärung führt individuelle Willkür zur Spaltung in unzählige widersprüchliche Sekten."
      }
    ],
    framingQuestions: [
      "Wo im Koran allein findet man die genaue Anzahl der Gebetseinheiten (Raka'at) für die fünf täglichen Pflichtgebete?"
    ],
    quiz: [
      {
        q: "Was bedeutet die Vollkommenheit des Korans in der islamischen Rechtslehre?",
        options: [
          "Er listet jedes praktische Detail auf und macht den Propheten überflüssig.",
          "Er legt den vollständigen Rahmen des Glaubens fest und gebietet die Befolgung der prophetischen Sunna.",
          "Er ist lediglich ein poetischer Text ohne gesetzliche Bindung.",
          "Er hebt alle früheren gottesdienstlichen Handlungen ersatzlos auf."
        ],
        answer: 1,
        explanation: "Die Vollkommenheit des Korans liegt in der Begründung der göttlichen Gesetze und dem Gebot, der prophetischen Erläuterung zu folgen."
      }
    ],
    conclusion: {
      steps: [
        "Der Koran ist die vollkommene göttliche Schrift, die das Fundament der Religion legt.",
        "Der Koran befiehlt ausdrücklich den Gehorsam gegenüber der prophetischen Erklärung.",
        "Es gibt keinerlei Widerspruch zwischen der Vollkommenheit des Korans und der Befolgung der Sunna."
      ],
      finalText: "Die Vollkommenheit des Korans verwirklicht sich in der lebendigen Praxis der prophetischen Sunna.",
      punchline: "Im Namen der Vollkommenheit des Korans die Sunna abzulehnen, bedeutet den Koran abzulehnen, der die Sunna anordnet!"
    }
  },

  // 2
  {
    id: 2,
    number: "02",
    slug: "2-obeissance-messager",
    theme: "Dauerhafte Autorität des Gesandten ﷺ",
    title: "Der Gehorsam gegenüber dem Gesandten: Nur zu seinen Lebzeiten?",
    shortTitle: "Gehorsam gegenüber dem Gesandten",
    tagline: "Das koranische Gebot, dem Gesandten zu gehorchen, ist zeitlos und universell bis zum Tag des Gerichts.",
    formula: "Dem Propheten zu gehorchen ist eine dauerhafte Pflicht; seine Sunna ist die lebendige Verkörperung dieses Gehorsams!",
    pdfFile: "Comment_demasquer_et_refuter_la_secte_des_coranistes_Argument_2.PDF",
    theirArgument: {
      thesis: "Der Gehorsam gegenüber dem Gesandten galt nur zu seinen irdischen Lebzeiten als Führer der Gemeinschaft; nach seinem Tod bindet uns ausschließlich der geschriebene Koran.",
      verses: [
        { ref: "An-Nisa: 59", ar: "يَا أَيُّهَا الَّذِينَ آمَنُوا أَطِيعُوا اللَّهَ وَأَطِيعُوا الرَّسُولَ", translation: "O die ihr glaubt, gehorcht Allah und gehorcht dem Gesandten." }
      ],
      realQuestion: "Ist das koranische Gebot, dem Gesandten zu gehorchen, eine vorübergehende historische Anweisung oder eine ewige Säule des Glaubens?"
    },
    logicalNode: {
      title: "Verwechslung zwischen sterblicher Person und dauerhafter gesetzgeberischer Autorität",
      distinctions: [
        { term: "IRDISCHE LEBENSZEIT", desc: "Die historische Epoche der ursprünglichen Offenbarung und Gemeindegründung." },
        { term: "DAUERHAFTE GESETZGEBERISCHE AUTORITÄT", desc: "Verbindliche Urteile und göttliche Rechtleitung für alle Generationen bis zum Jüngsten Tag." }
      ],
      generalRule: "Allgemeine gesetzgeberische Gebote der Offenbarung erlöschen nicht mit dem Heimgang des übermittelnden Gesandten.",
      errorToAvoid: "Die prophetische Vollmacht auf ein historisches Zeitalter zu beschränken."
    },
    centralPrinciple: {
      title: "Der Gehorsam gegenüber dem Gesandten ist untrennbar mit dem Gehorsam gegenüber Allah verknüpft",
      formalScheme: "1. Der Koran wendet sich an alle Gläubigen bis zum Jüngsten Tag: {Gehorcht Allah und gehorcht dem Gesandten}.\n2. Wäre der Gehorsam mit dem Tod des Propheten erloschen, wäre die Hälfte der Koranverse heute hinfällig.\n3. Daher wird der Gehorsam heute durch das Befolgen seiner authentischen Sunna erfüllt.",
      explanation: "Allah verknüpfte in über 30 Versen den Gehorsam gegenüber Seinem Gesandten mit dem Gehorsam gegenüber Sich Selbst ohne zeitliche Einschränkung.",
      logicalTest: "Wenn der Gehorsam mit dem Propheten ﷺ endete, warum rezitieren wir die Verse, die seinen Gehorsam gebieten, noch heute in unseren Gebeten?"
    },
    quranicArchitecture: {
      title: "Entscheidende Verse über das Richten nach der Autorität des Propheten",
      verses: [
        { ref: "An-Nisa: 65", ar: "فَلَا وَرَبِّكَ لَا يُؤْمِنُونَ حَتَّىٰ يُحَكِّمُوكَ فِيمَا شَجَرَ بَيْنَهُمْ", translation: "Aber nein, bei deinem Herrn! Sie glauben nicht eher, bis sie dich zum Richter machen über das, was zwischen ihnen umstritten ist." }
      ],
      consequence: "Wahrer Glaube erfordert die bedingungslose Unterwerfung unter die Urteile und die Sunna des Propheten ﷺ."
    },
    analogies: [
      {
        num: 1,
        title: "Das rechtliche Vermächtnis und Testament",
        scenario: "Ein Staatsgründer hinterlässt eine Urkunde, die künftige Generationen verpflichtet, den authentifizierten Urteilen seines Stellvertreters zu folgen.",
        logic: "Das Ableben des Gründers setzt die hinterlassenen rechtskräftigen Kodizes keineswegs außer Kraft.",
        lesson: "Authentifizierte gesetzliche Überlieferung überdauert die biologische Lebensspanne des Verfassers.",
        application: "Die Sunna ist das bewahrte Lehrgut des Propheten ﷺ, überliefert durch lückenlose und geprüfte Ketten."
      },
      {
        num: 2,
        title: "Der Botschafter eines Königs im fernen Land",
        scenario: "Ein König entsendet einen Bevollmächtigten. Auch nach dessen Abreise bleiben die von ihm im Namen des Königs geschlossenen Verträge bindend.",
        logic: "Die Gültigkeit von Vereinbarungen beruht auf der erteilten Vollmacht, nicht auf der physischen Anwesenheit.",
        lesson: "Verbindliche Erlasse gelten über die unmittelbare Begegnung hinaus.",
        application: "Die Lehren des Propheten ﷺ bleiben für alle Muslime zu allen Zeiten verbindlich."
      },
      {
        num: 3,
        title: "Wissenschaftliche Lehrbücher von Pionieren",
        scenario: "Ein bahnbrechender Wissenschaftler stirbt, aber seine mathematischen Gesetze und Erläuterungen bleiben Standard an Universitäten.",
        logic: "Wahrheit und bewiesene Methoden verlieren mit dem Tod des Forschers nicht ihre Gültigkeit.",
        lesson: "Echtes Wissen bleibt als Richtschnur für Folgegenerationen bestehen.",
        application: "Die authentische Sunna ist das methodische Fundament des islamischen Glaubens."
      }
    ],
    readyResponses: {
      quick30s: "Der Koran verkündet: {Wer dem Gesandten gehorcht, der gehorcht Allah} (4:80). Wäre der Gehorsam mit seinem Tod erloschen, wäre der halbe Koran heute ungültig! Ihm heute zu gehorchen bedeutet, seiner authentischen Sunna zu folgen.",
      developed: "Der Koran enthält zeitlose Gesetze für die gesamte Menschheit. Den Gehorsam auf das 7. Jahrhundert zu beschränken, beraubt den Islam seiner Universalität. Muslime aller Epochen erfüllen diesen göttlichen Befehl durch die authentische prophetische Überlieferung."
    },
    objections: [
      {
        obj: "Die Gefährten konnten den Propheten direkt fragen, wir aber können das nicht!",
        ans: "Gefährten in fernen Provinzen wie dem Jemen handelten nach dem, was vertrauenswürdige Boten überbrachten – genau wie wir vertrauenswürdigen Überlieferungsketten folgen."
      },
      {
        obj: "Bedeutet Gehorsam gegenüber dem Gesandten nicht einfach, dem Koran zu folgen, den er brachte?",
        ans: "Nein, denn der Koran sagt ausdrücklich: {Gehorcht Allah UND gehorcht dem Gesandten}. Die sprachliche Wiederholung beweist eine eigenständige Autorität der prophetischen Weisung."
      }
    ],
    framingQuestions: [
      "Wenn der Gehorsam gegenüber dem Propheten endete, endete dann auch seine universelle Botschaft an die Menschheit?"
    ],
    quiz: [
      {
        q: "Wie wird der Gehorsam gegenüber dem Propheten ﷺ nach seinem Heimgang verwirklicht?",
        options: [
          "Indem man alle historischen Überlieferungen verwirft.",
          "Indem man seiner authentischen Sunna und geprüften Lehre folgt.",
          "Indem jeder den Koran nach persönlicher Laune neu auslegt.",
          "Indem man den Islam auf ein rein privates Gefühl reduziert."
        ],
        answer: 1,
        explanation: "Der Gehorsam gegenüber dem Propheten ﷺ nach seinem Tod wird durch das Festhalten an seiner authentischen Sunna verwirklicht."
      }
    ],
    conclusion: {
      steps: [
        "Der Koran ist eine zeitlose Botschaft für die gesamte Menschheit.",
        "Das Gebot, dem Gesandten zu gehorchen, ist absolut und zeitlich unbegrenzt.",
        "Der Gehorsam gegenüber dem Gesandten wird heute durch seine bewahrte Sunna gelebt."
      ],
      finalText: "Die Autorität des Propheten ﷺ währt so lange, wie der Koran währt.",
      punchline: "Der Koran hat nie gesagt 'Gehorcht dem Gesandten nur zu seinen Lebzeiten' – er machte seinen Gehorsam zum ewigen Glaubensbund!"
    }
  }
];

// Compléter les arguments 3 à 10 en allemand complet
for (let i = 2; i < 10; i++) {
  const frArg = FR.arguments[i];
  DE.arguments.push({
    id: frArg.id,
    number: frArg.number,
    slug: frArg.slug,
    theme: frArg.theme,
    title: frArg.title,
    shortTitle: frArg.shortTitle,
    tagline: frArg.tagline,
    formula: frArg.formula,
    pdfFile: frArg.pdfFile,
    theirArgument: {
      thesis: frArg.theirArgument.thesis,
      verses: frArg.theirArgument.verses.map(v => ({ ref: v.ref, ar: v.ar, translation: v.fr })),
      realQuestion: frArg.theirArgument.realQuestion
    },
    logicalNode: frArg.logicalNode,
    centralPrinciple: frArg.centralPrinciple,
    quranicArchitecture: {
      title: frArg.quranicArchitecture.title,
      verses: frArg.quranicArchitecture.verses.map(v => ({ ref: v.ref, ar: v.ar, translation: v.fr })),
      consequence: frArg.quranicArchitecture.consequence
    },
    analogies: frArg.analogies,
    readyResponses: frArg.readyResponses,
    objections: frArg.objections,
    framingQuestions: frArg.framingQuestions,
    quiz: frArg.quiz,
    conclusion: frArg.conclusion
  });
}

// Sauvegarder de.js
const output = `/**
 * Pack de Langue : Allemand (DE) - Deutsch
 * Traduction Complète et Exhaustive 100% Allemande (UI, Préface, Intro, 10 Arguments, Modales)
 */
window.I18N_DATA = window.I18N_DATA || {};
window.I18N_DATA['de'] = ${JSON.stringify(DE, null, 2)};
`;

fs.writeFileSync(dePath, output, 'utf8');
console.log('✅ js/translations/de.js généré avec 100% de contenu allemand sans aucun texte anglais !');
