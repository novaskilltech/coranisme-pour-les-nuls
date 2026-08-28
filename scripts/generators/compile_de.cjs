/**
 * COMPILATEUR ALLEMAND INTÉGRAL (100% NATIVE DEUTSCH)
 */

const fs = require('fs');
const path = require('path');

const TRANSLATIONS_DIR = path.join(__dirname, '..', '..', 'js', 'translations');
const frRaw = fs.readFileSync(path.join(TRANSLATIONS_DIR, 'fr.js'), 'utf8');
const frSandbox = {};
new Function('window', 'sandbox', frRaw + `\nsandbox.DATA = window.I18N_DATA["fr"];`)({}, frSandbox);
const frPack = frSandbox.DATA;

const deData = {
  code: "de",
  name: "Allemand",
  native: "Deutsch",
  flagSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 3" class="flag-icon"><rect id="black_stripe" width="5" height="3" y="0" x="0" fill="#000"/><rect id="red_stripe" width="5" height="2" y="1" x="0" fill="#D00"/><rect id="gold_stripe" width="5" height="1" y="2" x="0" fill="#FFCE00"/></svg>`,
  dir: "ltr",
  fontFamily: "var(--font-main)",
  ui: {
    brandBadge: "PRAXISHANDBUCH",
    brandTitle: "WIDERLEGUNG DES KORANISMUS",
    brandSubtitle: "Wie man die Sekte der Koranisten entlarvt und widerlegt",
    searchBtn: "Suchen",
    searchPlaceholder: "Nach Thema, Vers, Einwand, Analogie suchen...",
    searchModalTitle: "Schnellsuche im Handbuch",
    searchNoResults: "Keine Ergebnisse für diese Suche gefunden.",
    searchShortcutHint: "ESC drücken zum Schließen",
    topbarContact: "Kontakt",
    topbarLegal: "Lizenz und Weitergabe",
    topbarBarbahari: "Al-Barbahârî",
    sidebarTitle: "📚 Inhaltsübersicht",
    sidebarCount: "12 Themen",
    sidebarHome: "🏠 Startseite / Hub",
    sidebarContact: "✉️ Autor kontaktieren",
    heroTag1: "📖 Praktisches Widerlegungshandbuch",
    heroTag2: "🌿 Freie pädagogische Verbreitung",
    heroTitleMain: "Widerlegung",
    heroTitleSpan: "des Koranismus",
    heroAuthor: "Von Salah Eddine Ahmed (Abou Soulaymane)",
    heroDesc: "Entkräften Sie die Trugschlüsse des Koranismus Schritt für Schritt durch rigorose logische Argumentation, Alltagsbeispiele, entscheidende Verse und vorbereitete 30-Sekunden-Antworten.",
    btnStartArg1: "Mit Argument 1 beginnen",
    btnSearchModal: "Im Handbuch suchen",
    sommaireTitle: "Die 10 Großen Analysierten Argumente",
    sommaireBadge: "10 Gebrauchsfertige Datenblätter",
    cardAdverseThesisPrefix: "These der Koranisten:",
    btnReadCard: "Datenblatt lesen",
    btnDownloadPdf: "Original-PDF-Broschüre herunterladen",
    btnPrintCard: "Drucken / Als PDF speichern",
    methodTag: "DEBATTENMETHODIK",
    methodTitle: "Die Methode der 3 Unausweichlichen Schritte",
    methodStep1Title: "1. Den Trugschluss entschärfen",
    methodStep1Desc: "Erkennen Sie, ob der Gegner eine falsche Dichotomie, eine voreilige Verallgemeinerung oder eine Beweislastumkehr verwendet.",
    methodStep2Title: "2. Die Alltagsanalogie",
    methodStep2Desc: "Nutzen Sie eine Alltagssituation (Gesetze, Medizin, Baupläne), um die logische Absurdität seiner Argumentation zu verdeutlichen.",
    methodStep3Title: "3. Die Absurde Konsequenz",
    methodStep3Desc: "Zeigen Sie auf, in welches theologische und praktische Chaos seine These führt, wenn sie konsequent angewendet wird.",
    quoteBoxText: "«Die Autorität, die der Text selbst bestimmt, im Namen der Vollständigkeit des Textes abzulehnen, bedeutet, die Vollständigkeit in ein Prinzip zu verwandeln, das der Text nie formuliert hat.»",
    quoteBoxAuthor: "— Salah Eddine Ahmed (Abou Soulaymane)",
    sec1Header: "1. DOKTRINÄRER RAHMEN UND KONTEXT",
    sec2Header: "2. DIE GEGNERISCHE THESE UND IHRE TEXTE",
    sec2ThesisLabel: "Von den Koranisten vertretene These :",
    sec2VersesLabel: "Zitierte Verse (aus dem Kontext gerissen) :",
    sec2RealQuestionLabel: "Die eigentliche Kernfrage :",
    sec3Header: "3. DER LOGISCHE KNOTEN UND DIE SCHLÜSSELUNTERSCHEIDUNGEN",
    sec3GeneralRuleLabel: "Allgemeine Denkregel :",
    sec3ErrorLabel: "Der zu vermeidende logische Fehler :",
    sec4Header: "4. DAS ZENTRALE PRINZIP",
    sec4FormalSchemeLabel: "Formales Beweisschema :",
    sec4ExplanationLabel: "Doktrinäre Erklärung :",
    sec4TestLabel: "Entscheidender logischer Test :",
    sec5Header: "5. KORANISCHE ARCHITEKTUR",
    sec5ConsequenceLabel: "Zwingende doktrinäre Konsequenz :",
    sec6Header: "6. PÄDAGOGISCHE ALLTAGSANALOGIEN",
    sec6ScenarioLabel: "Konkrete Situation :",
    sec6LogicBoxLabel: "Logische Parallele :",
    sec6LessonLabel: "Zu ziehende Lehre :",
    sec7Header: "7. FERTIGE ANTWORTEN FÜR DEN DIALOG",
    sec7QuickResponseLabel: "⚡ 30-Sekunden-Antwort (prägnant und treffend) :",
    sec7DevelopedResponseLabel: "🗣️ Ausführliche Antwort (zur Vertiefung) :",
    sec8Header: "8. KLASSISCHE EINWÄNDE UND ANTWORTEN",
    sec8DirectQuestionsLabel: "Direkte Leitfragen :",
    sec9Header: "9. SCHLUSSFOLGERUNG IN LOGISCHER KETTE",
    quizTitle: "8. ÜBERPRÜFEN SIE IHR VERSTÄNDNIS",
    quizBadge: "Interaktives Quiz",
    btnCheckAnswer: "Antwort überprüfen",
    btnNextQuestion: "Nächste Frage ➔",
    btnRestartQuiz: "Quiz neu starten",
    quizFeedbackCorrect: "✅ Exakt! Ausgezeichnete Schlussfolgerung.",
    quizFeedbackIncorrect: "❌ Falsche Antwort. Lesen Sie die Erklärung unten :",
    portalWarningBadge: "WARNUNG DER KLASSISCHEN GELEHRTEN VOR DER ABLEHNUNG DER ÜBERLIEFERUNG",
    portalTitle: "Worte von Imam Al-Barbahârî (رحمه الله)",
    portalQuoteTransLabel: "Bedeutungsübersetzung :",
    portalQuoteText: "Wenn du einen Mann hörst, dem eine Überlieferung zitiert wird, und er sie mit den Worten ablehnt: \"Lass das und bring uns nur den Koran\", dann zweifle keineswegs daran, dass er von Ketzerei durchdrungen ist. Steh auf aus seiner Versammlung und wende dich von ihm ab!",
    portalAuthorBadge: "✍️ Imam Al-Barbahârî (gest. 329 H)",
    portalSourceRef: "Quelle : Sharḥ As-Sunnah (Punkt 135)",
    portalEnterBtn: "ZUM WIDERLEGUNGSHANDBUCH",
    portalDisclaimer: "Wie man die Sekte der Koranisten entlarvt und widerlegt • Von Salah Eddine Ahmed (Abou Soulaymane) • Freie pädagogische Nutzung unter Quellenangabe",
    argBadgeGiant: "ARGUMENT",
    btnDownloadFascicule: "Original-Broschüre herunterladen (PDF)",
    btnOpenPrint: "Drucken / Als PDF speichern",
    tocSummary: "Inhaltsverzeichnis des Datenblatts :",
    tocCadrage: "1. Rahmen",
    tocAdverse: "2. Gegnerische These",
    tocNoeud: "3. Logischer Knoten",
    tocPrincipe: "4. Zentrales Prinzip",
    tocArchi: "5. Koranische Architektur",
    tocAnalogies: "6. Analogien",
    tocReponses: "7. Fertige Antworten",
    tocObjections: "8. Einwände",
    tocConclusion: "9. Schlussfolgerung",
    tocQuiz: "10. Quiz",
    navPrevArg: "Vorheriges Argument",
    navNextArg: "Nächstes Argument",
    navBackSummary: "Zurück zur Übersicht",
    navEndManual: "Ende des Handbuchs",
    contactModalTitle: "Autor kontaktieren",
    contactAuthorHeader: "Autor des Werks",
    authorName: "Salah Eddine Ahmed (Abou Soulaymane)",
    contactAuthorBio: "Forscher und Pädagoge für islamische Wissenschaften, engagiert in der methodischen Verteidigung der prophetischen Sunnah und der pädagogischen Widerlegung zeitgenössischer doktrinärer Abweichungen.",
    contactBookTitleLabel: "Titel des Referenzwerks :",
    contactBookTitleValue: "Comment démasquer et réfuter la secte des coranistes — Méthode, arguments, objections et réponses.",
    contactEmailNotice: "Für doktrinären Austausch, pädagogische Anregungen, Vortragsanfragen oder Übersetzungen :",
    legalModalTitle: "⚖️ Nutzungsbedingungen, Autor und Datenschutz",
    legalSharingHeader: "Bedingungen für Verbreitung und Pädagogische Weitergabe",
    legalSharingMain: "Freie Pädagogische Weitergabe",
    legalSharingP1: "Dieser Inhalt darf für persönliche, pädagogische und nicht-kommerzielle Zwecke kostenlos geteilt und vervielfältigt werden, unter der unverzichtbaren Bedingung, dass Autorschaft und Quelle gewahrt bleiben.",
    legalAllowedTitle: "✅ Ausdrücklich gestattete Nutzungen :",
    legalAllowedBullet1: "Kostenloses Herunterladen, Drucken, Lesen und Weitergeben der Studienblätter.",
    legalAllowedBullet2: "Verwendung im Unterricht, in Studienkreisen, Debatten und sozialen Medien.",
    legalAllowedBullet3: "Jegliche kommerzielle Verwertung oder verfälschende Änderung des Textes ohne vorherige Genehmigung ist strengstens untersagt.",
    legalPrivacyHeader: "Technische Daten und Datenschutz",
    legalPrivacyMain: "Transparente und Konforme Datenschutzerklärung",
    legalPrivacyP1: "Die Website erfordert keine Kontoerstellung und sammelt über Formulare keine personenbezogenen Daten. Die vom Server verarbeiteten technischen Daten unterliegen den europäischen Datenschutzstandards.",
    legalPrivacyBullet1: "Keine Werbe-Cookies von Drittanbietern : Null kommerzielle Tracking-Pixel.",
    legalPrivacyBullet2: "Schriftarten und Ressourcen : Sicheres Laden von Google Fonts (Inter, Outfit, Amiri).",
    legalCreditsHeader: "Buchdetails :",
    legalCreditsBookTitle: "Wie man die Sekte der Koranisten entlarvt und widerlegt — Methode, Argumente, Einwände und Antworten",
    footerSubtitle: "10 große Argumente methodisch untersucht und widerlegt",
    footerBtnLegal: "⚖️ Lizenz, Weitergabe und Datenschutz",
    footerBtnContact: "✉️ Autor kontaktieren",
    footerBtnPortal: "📜 Worte von Al-Barbahârî",
    footerContactLabel: "Kontakt :",
    btnShare: "Teilen",
    btnCopySection: "Diesen Abschnitt kopieren",
    btnCopy: "Kopieren",
    copied: "Kopiert!",
    shareModalTitle: "📤 Dieses Datenblatt teilen",
    shareModalDesc: "Teilen Sie dieses Argument für das Studium und die Verteidigung der Sunnah :",
    shareCardTitle: "Diese Widerlegung teilen",
    shareCardDesc: "Verbreiten Sie dieses Blatt zur Verteidigung der Sunnah auf WhatsApp, Telegram oder in sozialen Netzwerken.",
    toastSectionCopied: "✅ Abschnitt in die Zwischenablage kopiert!",
    toastLinkCopied: "✅ Link in die Zwischenablage kopiert!",
    navFallacies: "Werkzeugkasten — Trugschlüsse vor der Debatte erkennen",
    fallaciesTitle: "WERKZEUGKASTEN",
    fallaciesBadgeTitle: "IN DIESEM ARGUMENT ERFASSTE TRUGSCHLÜSSE :",
    viewFallacyDetail: "Detaillierte Analyse anzeigen ▼",
    hideFallacyDetail: "Analyse verbergen ▲",
    btnOpenToolbox: "Im Werkzeugkasten nachschlagen",
    footerVisitsLabel: "Gesamte Besuche :",
    footerVisitsPrivacy: "100% Anonym • DSGVO",
    footerVisitsTooltip: "Anonymer und datenschutzkonformer Besucherzähler (DSGVO - 0 Cookies)",
    navPreface: "Vorwort des Autors",
    navIntro: "Wer sind die Koranisten?"
  },
  preface: {
    badge: "BUCHERÖFFNUNG",
    title: "VORWORT DES AUTORS",
    subtitle: "Warum dieses methodische Widerlegungshandbuch?",
    introTag: "VOR DEM BEGINN",
    basmala: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ (Im Namen Allahs, des Allerbarmers, des Barmherzigen)",
    sections: [
      {
        type: "adverse",
        header: "WARUM DIESES BUCH?",
        title: "Eine persönliche und methodologische Beobachtung",
        paragraphs: [
          "Dieses Werk entstand aus einer persönlichen Feststellung, die mich tief betrübt hat.",
          "Im Laufe der Jahre habe ich Bekannte in das verfallen sehen, was man heute als 'Koranismus' (nur der Koran) bezeichnet: eine Strömung, die vorgibt, zum Koran zurückzukehren, in der Praxis jedoch die normative Autorität der prophetischen Sunnah demontiert und verwirft.",
          "Oft rührt dies nicht von einem bewussten Willen her, den Propheten ﷺ abzulehnen. Es beginnt mit einem Mangel an elementarem Grundwissen: in den Hadith-Wissenschaften, den Koran-Wissenschaften, der Überlieferungsmethodik, der arabischen Linguistik und der Textgeschichte."
        ]
      },
      {
        type: "retenir",
        header: "WENN ZWEIFEL ZU DOGMEN WERDEN",
        title: "Von der Ratlosigkeit zur methodischen Abweichung",
        paragraphs: [
          "Dann kommen polemische Unklarheiten hinzu: Einer Person wird eine aus dem Zusammenhang gerissene Überlieferung vorgelegt, ein Text, dessen Authentizitätsgrad sie nicht kennt, eine verzerrte Übersetzung oder eine emotionale Kontroverse, die darauf ausgelegt ist, Ablehnung hervorzurufen.",
          "Ihr werden Themen wie das Alter von 'Â'ishah (möge Allah mit ihr zufrieden sein), bestimmte medizinische Berichte, Zauberei, Rechtsbestimmungen oder die Nachtreise (Al-Isrâ' wal-Mi'râj) vorgelegt.",
          "Ohne Werkzeuge zur kritischen Analyse nistet sich der Zweifel ein und verwandelt sich in ein vollständiges Dogma:",
          "«Dieser Hadith verwirrt mich» ➔ «Vielleicht sind die Hadithe unzuverlässig» ➔ «Vielleicht ist die Sunnah überflüssig» ➔ «Nur der Koran reicht aus».",
          "Sie enden damit, isolierte Verse auszuwählen, den Wortsinn zu verdrehen und 'Gehorcht dem Gesandten' umzudeuten, um den Propheten ﷺ jeder realen Autorität zu berauben."
        ]
      },
      {
        type: "analogie",
        header: "EINE UNERMESSLICHE ÜBERLIEFERUNGSTRADITION",
        title: "Eine Wissenschaft der Überprüfung ohne Vergleich",
        paragraphs: [
          "Die Sunnah ist uns nicht überliefert worden, weil einige Individuen Jahrhunderte später beschlossen hätten, Bücher mit willkürlichen Geschichten zu füllen! Hinter dem Hadith-Korpus steht das strengste System biografischer Kritik und Überlieferungsketten (Isnâd und Rijâl) der Menschheitsgeschichte.",
          "Generationen von Gelehrten untersuchten die Überlieferer akribisch: ihre moralische Rechtschaffenheit, ihr Gedächtnis, ihre Lehrer, ihre Zeitgenossen, und reisten monatelang, um einen einzigen Satz zu verifizieren.",
          "Dieses monumentale wissenschaftliche Erbe mit den Worten 'es sind nur Männer, die Geschichten erzählen' abzutun, ist kein kritischer Geist: Es ist völlige Unkenntnis der Hadith-Wissenschaften."
        ],
        distinctions: [
          {
            term: "KRITIK DER ÜBERLIEFERER (RIJÂL)",
            desc: "Integrität, Präzision, historische Begegnungen und exakte Bedingungen des Empfangs."
          },
          {
            term: "KRITIK DER TEXTE (MUTÛN)",
            desc: "Abgleich von Varianten, Aufdeckung verborgener Mängel ('Ilal) und Unterscheidung zwischen Authentischem und Erfundenem."
          }
        ]
      },
      {
        type: "cadrage",
        header: "UND WIE ERREICHTE UNS DER KORAN?",
        title: "Dieselbe menschliche Überlieferungskette",
        paragraphs: [
          "Eine entscheidende Frage, der sich jeder Koranist stellen muss: Durch wen hat dich der Koran erreicht?",
          "Das physische Exemplar des Korans (der Mushaf) wurde dir nicht direkt vom Engel Gabriel überreicht. Er erreichte uns durch die Gefährten, die Nachfolger, die Gelehrten der Lesarten und eine ununterbrochene generationenübergreifende Überlieferung.",
          "Die von 'Âsim überlieferte Lesart von Hafs erreichte uns über menschliche Ketten von Männern. Die logische Frage lautet nie 'Gibt es menschliche Glieder?', sondern 'Wie hoch ist der Grad der Gewissheit und Überprüfung dieser Überlieferung?'."
        ]
      },
      {
        type: "retenir",
        header: "EINE PERSÖNLICHE VERANTWORTUNG",
        title: "Warum Schweigen keine Option mehr ist",
        paragraphs: [
          "Angesichts der Zunahme verführerischer Diskurse in den sozialen Netzwerken, die junge Gläubige ohne methodische Grundlagen verunsichern, wird Schweigen zu einem Versäumnis.",
          "Dieses Buch wurde nicht verfasst, um sterile Polemiken zu schüren oder jemanden zu beleidigen. Es wurde als strukturiertes pädagogisches Werkzeug konzipiert, das für jeden zugänglich ist, um fundierte, logische und auf den authentischen Quellen des Islam basierende Antworten zu liefern.",
          "Ich bitte Allah, dieses Werk zu einer Quelle der Klarheit und des aufrichtigen Nutzens für jeden zu machen, der die Wahrheit mit Strenge und Ehrlichkeit sucht."
        ]
      }
    ]
  },
  intro: {
    badge: "HISTORISCHE REFERENZEN",
    title: "WER SIND DIE KORANISTEN?",
    subtitle: "Ursprünge, Grundlagen und Anatomie einer doktrinären Abweichung",
    introTag: "DAS PHÄNOMEN VERSTEHEN",
    sections: [
      {
        type: "cadrage",
        header: "GENESE UND HISTORISCHER KONTEXT",
        title: "Eine moderne Ketzerei mit antiken Wurzeln",
        paragraphs: [
          "Der zeitgenössische 'Koranismus' (Ahl al-Qur'ân / Qur'aniyyûn) präsentiert sich oft als eine moderne oder reformerische Bewegung. In Wahrheit wurde die Anmaßung, auf die Sunnah verzichten zu wollen, bereits vom Propheten ﷺ in ausdrücklichen prophetischen Worten angeprangert.",
          "Der Prophet ﷺ sagte: «Es nähert sich gewiss die Zeit, da ein satter Mann, auf sein Sofa gelehnt, sagen wird: 'Haltet euch nur an diesen Koran; was ihr darin als erlaubt vorfindet, erklärt für erlaubt, und was ihr darin als verboten vorfindet, erklärt für verboten'. Doch wahrlich, was der Gesandte Allahs verboten hat, ist wie das, was Allah verboten hat!» (Überliefert von Abu Dawud, At-Tirmidhi und Ibn Majah, authentisch).",
          "Historisch versuchten einige Randsplittergruppen (gewisse extreme Ausläufer der Mu'taziliten und Charidschiten), Teile der Sunnah abzulehnen, doch die vollständige und kategorische Ablehnung des gesamten Hadith-Korpus ist ein modernes Phänomen, das Ende des 19. Jahrhunderts unter dem Einfluss der Kolonisation und intellektueller Minderwertigkeitskomplexe entstand."
        ]
      },
      {
        type: "adverse",
        header: "DER PSYCHOLOGISCHE UND DOKTRINÄRE MECHANISMUS",
        title: "Von der Verständnisschwierigkeit zur bewussten Ablehnung",
        paragraphs: [
          "Die Methode des Koranismus beruht auf einer vorhersehbaren psychologischen Mechanik:",
          "1. Der emotionale Schock : Ein komplexer authentischer Hadith wird ausgewählt und einem modernen Publikum ohne Kontext oder linguistische Erklärungen präsentiert.",
          "2. Die voreilige Verallgemeinerung : Aus dem Nichtverstehen eines bestimmten Textes wird fälschlicherweise abgeleitet, dass alle Hadithe zweifelhaft seien.",
          "3. Das falsche Dilemma : Es wird die künstliche Alternative aufgestellt: «Ziehst du es vor, dem unfehlbaren Wort Allahs zu folgen oder den Worten von Männern, die zwei Jahrhunderte später gesammelt wurden?»",
          "4. Das hermeneutische Vakuum : Durch die Ablehnung der Sunnah ist der Koranist gezwungen, die Bedeutung der Verse frei zu erfinden, und verfällt in phantasievolle Interpretationen, bei denen das Gebet, das Fasten und die Pilgerfahrt jede historische Realität verlieren."
        ]
      },
      {
        type: "retenir",
        header: "UNVERMEIDLICHE THEOLOGISCHE KONSEQUENZEN",
        title: "Der Zusammenbruch der islamischen Praxis",
        paragraphs: [
          "Die Ablehnung der Sunnah vereinfacht die Religion nicht: Sie zerstört sie in ihrer praktischen Anwendung:",
          "• Unmöglichkeit zu beten : Der Koran befiehlt das Gebet (As-Salât), erwähnt jedoch an keiner Stelle, wie viele Gebetseinheiten (Rak'at) das Mittags- oder Abendgebet umfasst, noch die genauen Bittgebete oder Niederwerfungsregeln.",
          "• Unmöglichkeit, Zakat zu entrichten : Der Koran befiehlt die reinigende Abgabe, doch die genauen Prozentsätze (die 2,5%) und die Mindestgrenzen (Nisâb) stammen ausschließlich aus der prophetischen Sunnah.",
          "• Unmöglichkeit, den Hajj zu vollziehen : Die Riten der Pilgerfahrt (Anzahl der Umrundungen der Kaaba, Sa'y zwischen Safa und Marwa, Aufenthalt in 'Arafat) sind durch die gelebte Praxis des Propheten ﷺ detailliert vorgegeben."
        ]
      },
      {
        type: "analogie",
        header: "DIE GOLDENE REGEL DER DEBATTE",
        title: "Zur logischen Konsequenz der eigenen These zwingen",
        paragraphs: [
          "Um einen Koranisten mit Wohlwollen und Entschlossenheit zu widerlegen, besteht die goldene Regel darin, ihn mit den praktischen Konsequenzen seiner eigenen Position zu konfrontieren.",
          "Beschränken Sie sich nicht darauf, Hadithe zu verteidigen: Bitten Sie ihn zu erklären, wie er den Islam in seinem Alltag praktiziert, wenn er sich ausschließlich auf den Korantext stützt.",
          "Sie werden sofort sehen, wie er gezwungen ist, auf persönliche Mutmaßungen zurückzugreifen, Wörter umzudefinieren oder zuzugeben, dass er von der von Generation zu Generation überlieferten Praxis abhängt... das heißt von der Sunnah selbst!"
        ]
      }
    ]
  }
};

const deFallaciesToolbox = {
  headerBadge: "METHODISCHER LEITFADEN",
  title: "WERKZEUGKASTEN — TRUGSCHLÜSSE VOR DER DEBATTE ERKENNEN",
  subtitle: "Logische Fehler identifizieren, um sich in der Diskussion nicht beirren zu lassen",
  introText: "Ein Argument kann auf den ersten Blick beeindruckend wirken, einen authentischen Koranvers zitieren oder wahre Tatsachen enthalten... und dennoch zu einer völlig falschen Schlussfolgerung führen, wenn die logische Verknüpfung dieser Elemente fehlerhaft ist.",
  goldenRuleTitle: "ENTSCHEIDENDES PRINZIP :",
  goldenRuleText: "ZU ZEIGEN, DASS EIN ARGUMENT EIN TRUGSCHLUSS IST, BEWEIST NICHT, DASS DIE SCHLUSSFOLGERUNG FALSCH IST ; ES BEWEIST, DASS DIESES ARGUMENT SIE NICHT BEWEIST.",
  goldenRuleMeaning: "Einen Denkfehler zu entlarven entbindet nicht von der inhaltlichen Prüfung; aber es schützt davor, Schlüsse zu akzeptieren, die auf trügerischen Prämissen beruhen.",
  cardMemoBadge: "MERKBLATT",
  trainingBadge: "TRAINING",
  labelDefinition: "Definition :",
  labelGeneralExample: "🌍 Beispiel aus dem Alltag :",
  labelQuranicApp: "🕌 Anwendung auf die Koranismus-Debatte :",
  labelQuestionToAsk: "❓ Reflex-Frage, die man stellen sollte :",
  labelShortAnswer: "⚡ Vorgeschlagene Kurzantwort :",
  items: frPack.fallaciesToolbox.items.map((item, idx) => {
    const names = [
      "Die Falsche Dichotomie", "Die Voreilige Verallgemeinerung", "Der Strohmann", "Das Non Sequitur",
      "Das Cherry-Picking", "Der Doppelte Standard (Zweierlei Maß)", "Die Begriffliche Äquivokation", "Das Möglichkeitsargument",
      "Die Beweislastumkehr", "Der Appell an Emotion und Spott"
    ];
    return {
      id: item.id,
      num: item.num,
      name: names[idx] || item.name,
      shortDef: [
        "Eine komplexe Situation künstlich auf zwei gegensätzliche Optionen reduzieren.",
        "Einen Einzelfall oder zweifelhaften Fall auf eine ganze Kategorie ausweiten.",
        "Die Position des Gegners verzerren, um sie leichter angreifen zu können.",
        "Die gezogene Schlussfolgerung folgt logisch nicht aus der genannten Prämisse.",
        "Nur günstige Beweise auswählen und den gesamten Rest ignorieren.",
        "Beim Gegner strengste Kriterien anlegen und bei sich selbst Nachsicht üben.",
        "Dasselbe Wort mit zwei verschiedenen Bedeutungen verwenden, ohne es anzugeben.",
        "«Könnte falsch sein» in «ist notwendigerweise falsch» verwandeln.",
        "Etwas unbewiesen behaupten und vom Gegner verlangen, das Gegenteil zu beweisen.",
        "Rationale Analyse durch Empörung, Spott oder Entrüstung ersetzen."
      ][idx],
      definition: [
        "Eine Situation künstlich auf zwei unvereinbare Optionen reduzieren und einen völlig legitimen dritten Weg verschweigen.",
        "Aus einer unzureichenden Anzahl von Einzelfällen eine allgemeingültige Regel ableiten.",
        "Die Position des Gesprächspartners entstellen, um eine geschwächte Version zu widerlegen, die er nie vertreten hat.",
        "Non sequitur bedeutet 'es folgt nicht'. Die Ausgangsprämisse kann wahr sein, die Schlussfolgerung ergibt sich jedoch keineswegs daraus.",
        "Ausschließlich die der eigenen These günstigen Passagen zitieren und widersprechende Daten verschweigen.",
        "Für fremde Beweise ein hyperkritisches Maß anlegen und schwache Vermutungen akzeptieren, wenn sie der eigenen These nützen.",
        "Dasselbe Wort im Laufe der Argumentation mit unterschiedlichen Bedeutungen verwenden, ohne den Wechsel zu kennzeichnen.",
        "Eine bloße theoretische Fehlermöglichkeit ohne konkreten Beweis in eine Gewissheit der Fälschung verwandeln.",
        "Wer eine Behauptung aufstellt, muss sie begründen. Der Trugschluss besteht darin, vom anderen den Gegenbeweis zu verlangen.",
        "Die sachliche Prüfung von Argumenten durch Lachen, Ekel, Empörung oder effektvollen Spott ersetzen."
      ][idx],
      generalExample: [
        "« Entweder bist du vollkommen meiner Meinung, oder du bist mein Feind. »",
        "« Ich kenne zwei unehrliche Mechaniker, also sind alle Mechaniker Betrüger. »",
        "« Du sagst, man sollte das Tempo drosseln, also willst du Autos komplett verbieten. »",
        "« Draußen regnet es, also ist das Basketballspiel in der Halle abgesagt. »",
        "3 günstige Studien zitieren und 50 wissenschaftliche Gegenstudien verheimlichen.",
        "Von anderen absolute Beweise fordern und sich selbst mit bloßen Gerüchten begnügen.",
        "« Die Schwerkraft ist ein Gesetz. Gesetze werden vom Parlament beschlossen. Also wurde die Schwerkraft von Abgeordneten beschlossen. »",
        "« Ein Zeuge kann lügen. Also ist seine Zeugenaussage zwingend falsch. »",
        "« Es gibt eine geheime Zivilisation unter dem Marsboden. Beweise mir das Gegenteil. »",
        "Über eine komplexe mathematische Formel spotten, anstatt ihre Herleitung zu prüfen."
      ][idx],
      quranicApplication: [
        "• « Folgst du Allah oder folgst du Muhammad ﷺ ? » (Falscher Gegensatz: Dem Gesandten zu folgen ist ein direkter Befehl Allahs im Koran).\n• « Bevorzugst du das unfehlbare Wort Allahs oder Worte von Männern, die Jahrhunderte später gesammelt wurden ? »",
        "• « Es wurden falsche Hadithe erfunden, also kann man keinem Hadith vertrauen. »\n• « Ein Hadith erscheint mir seltsam, also muss die gesamte Sammlung von Bukhari verworfen werden. »",
        "• « Ihr behauptet, der Koran sei unvollständig und brauche Menschen, um perfekt zu sein. »\n(Das behauptet niemand: Die Sunnah erfüllt die erklärende Funktion, die der Koran ihr selbst zugewiesen hat).",
        "• « Der Koran ist vollkommen und vollständig. Daher ist die Sunnah nutzlos. »\n• « Al-Bukhari lebte zwei Jahrhunderte später. Also entstanden die Überlieferungen zwei Jahrhunderte später. »",
        "• « Dem Gesandten obliegt nur die Verkündigung » zitieren und « Gehorcht dem Gesandten », « Nimm ihn zum Richter », « vortreffliches Vorbild » weglassen.\n• « Schreibt nichts von mir... » zitieren und die spätere Erlaubnis « Schreibt für Abu Shah » verschweigen.",
        "• Wenn ein Hadith eine Norm festlegt : « Von Menschen überliefert, also unsicher ! » / Wenn ein Hadith für eine Polemik dient : « Bukhari beweist unumstößlich das Alter von 'Â'ishah رضي الله عنها ! »\n• Die menschliche Überlieferung des Korans anerkennen und dieselbe Überlieferung der Sunnah ablehnen.",
        "Im Koran bedeutet das Wort ḥadīth linguistisch 'Rede, Wort oder Nachricht'. Der Trugschluss besteht darin, « An welchen Hadith nach diesem werden sie glauben ? » zu lesen und den Wortsinn stillschweigend durch die moderne Fachbedeutung zu ersetzen.",
        "« Eine Überlieferungskette kann erfunden sein. Also beweist kein Isnâd etwas. »\nDie theoretische Möglichkeit der Fälschung veranlasste die Gelehrten gerade dazu, jedes Glied zu prüfen, anstatt alles pauschal zu verwerfen.",
        "« Keine prophetische Überlieferung ist verlässlich genug, um einen religiösen Beweis darzustellen. »\nWer ein solches globales Urteil fällt, muss den methodischen Beweis dafür erbringen.",
        "« Glaubt ihr etwa an den Hadith von der Fliege ?! », usw.\nEine emotionale Reaktion ersetzt nicht die Kernfragen: Wie lautet der genaue Wortlaut? Wie ist der Authentizitätsgrad? Was sagen die Fachgelehrten dazu?"
      ][idx],
      questionToAsk: [
        "« Warum stellst du diese beiden Dinge als unvereinbar dar, wenn das eine direkt vom anderen abhängt ? »",
        "« Beweist die Existenz von Falschgeld etwa, dass es überhaupt keine echten Banknoten gibt ? »",
        "« Wer unter den Gelehrten des Islam hat diese These je so formuliert, oder bekämpfst du ein Zerrbild ? »",
        "« Was genau ist der logische Schritt, der deine Prämisse mit deiner Schlussfolgerung verbindet ? »",
        "« Gibt es andere Verse und Texte zum selben Thema, die du bewusst ausgelassen hast ? »",
        "« Würdest du genau denselben Maßstab anlegen, wenn dieser Beweis deine Position stützen würde ? »",
        "« Welche genaue Bedeutung hat dieses Wort in diesem Vers, und wie belegst du das aus dem Kontext ? »",
        "« Hast du bewiesen, dass in diesem konkreten Fall eine Fälschung vorliegt, oder nur, dass sie theoretisch möglich wäre ? »",
        "« Wer stellt hier die allgemeine Behauptung auf, die bewiesen werden muss ? »",
        "« Was ist dein sachlicher Beweis, abgesehen davon, dass dieser Bericht dich überrascht oder erheitert ? »"
      ][idx],
      shortAnswer: [
        "« Dem Gesandten Allahs zu gehorchen bedeutet, Allah zu gehorchen; es sind keine konkurrierenden Wege. »",
        "« Die Existenz gefälschter Texte ist genau der Grund, warum Gelehrte eine strenge Prüfwissenschaft entwickelt haben. »",
        "« Kritisiere nicht, was wir nicht vertreten; lass uns prüfen, was wir tatsächlich aussagen. »",
        "« Deine erste Aussage kann wahr sein, ohne deine zweite im Geringsten zu beweisen. »",
        "« Ein Vers wird nicht isoliert gelesen, wenn andere Verse ihn präzisieren und ergänzen. »",
        "« Der Beweismaßstab muss identisch bleiben, egal ob dir das Ergebnis gefällt oder nicht. »",
        "« Klären wir zuerst die exakte Wortbedeutung, bevor wir unzulässige Schlüsse ziehen. »",
        "« Eine abstrakte theoretische Möglichkeit stellt keinen Beweis dar. »",
        "« Wer pauschal behauptet, nichts sei verlässlich, muss diese Behauptung selbst belegen. »",
        "« Spott und Emotionen ersetzen keinen wissenschaftlichen Beweis. »"
      ][idx],
      icon: item.icon
    };
  }),
  reflexQuestions: {
    title: "DIE ZU ERWERBENDEN KRITISCHEN REFLEXE",
    subtitle: "4 systematische Fragen bei jedem Argument",
    summaryNotice: "Diese vier Fragen genügen, um die allermeisten schwachen Argumentationen zu entkräften.",
    questions: [
      { num: 1, title: "1. Die Prämisse", desc: "Was wurde tatsächlich bewiesen? Lassen Sie nicht zu, dass sich die Schlussfolgerung verkleidet in die Prämisse einschleicht." },
      { num: 2, title: "2. Die Logische Verknüpfung", desc: "Folgt die Schlussfolgerung wirklich aus der Prämisse, oder fehlt ein unverzichtbarer logischer Zwischenschritt?" },
      { num: 3, title: "3. Das Gesamtdossier", desc: "Wurden alle relevanten Beweise und Verse berücksichtigt oder nur diejenigen, die der gewünschten Schlussfolgerung nützen?" },
      { num: 4, title: "4. Derselbe Maßstab", desc: "Wird an beide Seiten derselbe strenge Maßstab angelegt oder ändert er sich je nach gewünschtem Ergebnis?" }
    ]
  },
  quiz: {
    title: "SCHNELLTEST : ERKENNEN SIE DEN TRUGSCHLUSS",
    subtitle: "Identifizieren Sie, welcher Trugschluss in jeder der folgenden Aussagen vorliegt :",
    items: [
      { id: 1, statement: "« Einige Hadithe wurden erfunden. Also kann man keinem Hadith vertrauen. »", answerId: "generalisation-abusive", answerName: "Voreilige Verallgemeinerung", explanation: "Von einzelnen gefälschten Fällen auf die Ungültigkeit einer ganzen Kategorie zu schließen, ist eine voreilige Verallgemeinerung." },
      { id: 2, statement: "« Entweder folgst du Allah, oder du folgst Muhammad ﷺ. »", answerId: "fausse-dichotomie", answerName: "Falsche Dichotomie", explanation: "Diese beiden Gehorsamspflichten widersprechen sich nicht: Dem Gesandten zu gehorchen ist ein ausdrücklicher Befehl Allahs im Koran." },
      { id: 3, statement: "« Der Koran ist perfekt und vollständig, also ist jede prophetische Erklärung überflüssig. »", answerId: "non-sequitur", answerName: "Non sequitur", explanation: "Die Vollkommenheit des göttlichen Textes bedeutet nicht, dass er die von ihm selbst eingesetzte erklärende Autorität ausschließt." },
      { id: 4, statement: "« An welchen ḥadīth nach diesem werden sie glauben? Also ist Al-Bukhari durch den Koran verboten. »", answerId: "equivoque-lexicale", answerName: "Begriffliche Äquivokation", explanation: "Das Wort ḥadīth bedeutet hier sprachlich 'Rede oder Botschaft' und nicht die technische Fachbezeichnung für Überlieferungssammlungen." },
      { id: 5, statement: "« Hadithe sind zu spät aufgezeichnet worden, aber der Bericht über das Alter von 'Â'ishah رضي الله عنها ist ein unumstößlicher Beweis. »", answerId: "double-standard", answerName: "Doppelter Standard (Zweierlei Maß)", explanation: "Der Beweismaßstab wird gelockert, wenn der Bericht für eine Polemik nützt, und verschärft, wenn er eine Norm festlegt." },
      { id: 6, statement: "« Eine Überlieferungskette kann erfunden sein. Also beweisen Überlieferungsketten überhaupt nichts. »", answerId: "argument-de-possibilite", answerName: "Möglichkeitsargument", explanation: "Eine abstrakte theoretische Möglichkeit in eine Gewissheit der Fälschung zu verwandeln, ist der Trugschluss der Möglichkeit." }
    ]
  },
  conclusion: {
    title: "WESENTLICHE ERINNERUNG : LOGIK VOR DEM SLOGAN",
    mainText: "Ein Argument kann einen authentischen Vers, einen wahren Hadith oder exakte Fakten zitieren und dennoch zu einem falschen Schluss führen, wenn die gedankliche Verknüpfung fehlerhaft ist.",
    slogan1: "FRAGEN SIE NICHT NUR : « WAS IST DER BEWEIS ? »",
    slogan2: "FRAGEN SIE AUCH : « WAS BEWEIST ES TATSÄCHLICH ? »"
  }
};

const deArgumentsCompiled = frPack.arguments.map((arg, idx) => {
  return {
    id: arg.id,
    number: arg.number,
    slug: arg.slug,
    theme: [
      "Vollständigkeit und Prophetische Erläuterung",
      "Universelle Gehorsamspflicht",
      "Gesetzgebende Souveränität und Delegierte Autorität",
      "Die Mission des Gesandten: Verkündigung und Pädagogik",
      "Die Bewahrung des Dhikr (Koran und Sunnah)",
      "Geschichte der Überlieferung und Schriftliche Aufzeichnung",
      "Das Anfängliche Schreibverbot und die Spätere Erlaubnis",
      "Rechtsgelehrte Meinungsverschiedenheiten und Scheinbare Widersprüche",
      "Epistemologie: Vermutung (Dhann) vs. Juristische Gewissheit",
      "Der Unwiderlegbare Praktische Beweis: Das Gebet und die Riten"
    ][idx],
    title: [
      "Der Koran ist vollständig: Warum bräuchten wir die Sunnah?",
      "Der Gehorsam gegenüber dem Gesandten: Galt er nur zu seinen Lebzeiten?",
      "«Das Urteil gebührt allein Allah»: Hat der Prophet ﷺ etwa gesetzgebend gewirkt?",
      "«Dem Gesandten obliegt nur die Verkündigung»: War er ein bloßer passiver Bote?",
      "«Wir haben die Ermahnung herabgesandt und sind ihre Hüter»: Ist der Dhikr nur der Koran?",
      "«Hadithe wurden 200 Jahre später aufgeschrieben»: Mythos oder historische Realität?",
      "«Schreibt nichts von mir außer dem Koran»: Verbot der Prophet ﷺ die Niederschrift seiner Sunnah?",
      "«Es gibt Meinungsverschiedenheiten und widersprüchliche Hadithe»: Macht das die Sunnah ungültig?",
      "Ist der Hadith eine bloße Vermutung (Dhann) im Gegensatz zur Gewissheit (Yaqîn) des Korans?",
      "Das Gebet ohne die Sunnah: Die praktische Sackgasse der Koranisten"
    ][idx],
    shortTitle: [
      "Vollkommenheit des Korans", "Dauerhafter Gehorsam", "Souveränität und Delegation",
      "Verkündigungsfunktion (Balâgh)", "Bewahrung des Dhikr",
      "Geschichte der Hadith-Niederschrift", "Der Hadith über das Schreiben",
      "Meinungsverschiedenheiten und Widersprüche", "Epistemologie: Dhann und Gewissheit",
      "Das Gebet ohne die Sunnah"
    ][idx],
    tagline: [
      "Der Koran ist in seinen Fundamenten vollständig, und Teil seiner Vollkommenheit ist es, den Gehorsam gegenüber dem Propheten ﷺ zu befehlen.",
      "Die koranischen Befehle zum Gehorsam sind universell und dauerhaft bis zum Tag der Auferstehung.",
      "Das höchste Urteil gebührt Allah, und Allah war es, der Seinem Gesandten die Vollmacht gab, zu gebieten und zu verbieten.",
      "Das koranische 'Balâgh' ist keine mechanische Briefträgerfunktion, sondern die lebendige Erklärung, Unterweisung und Läuterung der Gläubigen.",
      "Der koranische Begriff 'Dhikr' umfasst die gesamte göttliche Offenbarung: den Koran und die ihn begleitende erklärende Sunnah.",
      "Die schriftliche Aufzeichnung und mündliche Weitergabe des Hadith begannen zu Lebzeiten des Propheten ﷺ und setzten sich lückenlos fort.",
      "Das vorübergehende Verbot zu Beginn der Offenbarung verhinderte die Vermischung mit dem Koran, bevor es durch den allgemeinen Schreibbefehl aufgehoben wurde.",
      "Die menschlichen juristischen Auslegungsunterschiede und durch die Hadith-Wissenschaften gelösten scheinbaren Widersprüche bestätigen seine Authentizität.",
      "Das im Koran verurteilte 'Dhann' ist heidnischer Aberglaube ohne Beweise; in der Rechtswissenschaft ist die überwiegende Wahrscheinlichkeit (Ghalabat adh-Dhann) die Handlungspflicht.",
      "Der Koran befiehlt das Gebet in Dutzenden Versen, delegiert jedoch alle praktischen Vollzugsformen an die lebendige Sunnah."
    ][idx],
    formula: [
      "Die normative Vollständigkeit des Korans schließt den prophetischen Erläuterungsauftrag (Bayan) ein; die Sunnah abzulehnen bedeutet, den Koran abzulehnen!",
      "Wäre der Gehorsam gegenüber dem Propheten mit seinem Tod erloschen, verlöre der gesamte Koran seine zeitlose Gültigkeit!",
      "Die ursprüngliche göttliche Souveränität mit der delegierten prophetischen Rechtsautorität zu verwechseln, ist derselbe Fehler wie der der antiken Charidschiten!",
      "Die Mission des besten aller Menschen auf die eines passiven Boten zu reduzieren bedeutet, die koranische Definition des Begriffs Balâgh zu ignorieren!",
      "Einen Text zu bewahren und seine Erklärung zu befehlen, ohne diese Erklärung zu bewahren, würde seine Anwendung unmöglich machen!",
      "Die spätere enzyklopädische Zusammenstellung (Bukhari) mit der Entstehung der Überlieferung zu verwechseln, ist ein kolossaler historischer Irrtum!",
      "Das vorübergehende Verbot zu zitieren und die spätere endgültige Erlaubnis zu verschweigen, ist das Paradebeispiel für 'Cherry-Picking'!",
      "Würde die Existenz von Auslegungsunterschieden eine Quelle ungültig machen, müsste man auch den Koran, die Medizin und das Recht verwerfen!",
      "Den vom Koran verurteilten heidnischen Aberglauben mit der juristischen überwiegenden Wahrscheinlichkeit zu verwechseln, ist eine fundamentale Begriffsfalle!",
      "Die Tatsache, dass Muslime weltweit seit vierzehn Jahrhunderten auf identische Weise beten, ist der lebendige und unzerstörbare Beweis der Sunnah!"
    ][idx],
    pdfFile: arg.pdfFile,
    theirArgument: {
      thesis: [
        "Der Koran ist vollkommen, detailliert und lässt nichts aus. Alles Notwendige steht explizit im Buch; zu behaupten, die Sunnah sei unerlässlich, widerspricht der Vollkommenheit des Korans.",
        "Dem Gesandten zu gehorchen war eine rein politische oder militärische Pflicht, die den Gefährten zu seinen Lebzeiten vorbehalten war; nach seinem Tod bleibt allein der Korantext.",
        "Der Koran verkündet: 'Das Urteil gebührt allein Allah' (In al-ḥukmu illâ lillâh). Daher darf niemand sonst außerhalb des Korans etwas verbieten oder erlauben; Hadithen Gesetzgebungskraft zuzuschreiben ist Beigesellung (Shirk).",
        "Der Koran wiederholt: 'Dem Gesandten obliegt nur die deutliche Verkündigung' (Mâ 'alâ ar-rasûli illâ al-balâgh). Dies beweist, dass seine einzige Aufgabe die Übergabe des Textes war, ohne verbindliche Erklärungen hinzuzufügen.",
        "Allah hat in Sure 15:9 versprochen, ausschließlich den Koran zu bewahren ('Inna nahnu nazzalna adh-dhikra wa inna lahu lahafidhun'). Hadithe hingegen genießen keine göttliche Schutzgarantie und sind fehlbare Menschenwerke.",
        "Hadithe existierten in den ersten beiden Jahrhunderten des Islam nicht schriftlich. Sie waren mündliche Legenden nach Art der 'Stille Post', bis Al-Bukhari und Muslim beschlossen, sie 200 Jahre später aufzuschreiben.",
        "Der Prophet ﷺ befahl ausdrücklich: 'Schreibt nichts von mir außer dem Koran; und wer etwas geschrieben hat, soll es löschen' (Hadith von Abu Sa'id al-Khudri in Sahih Muslim). Folglich ist die Hadith-Literatur ein Ungehorsam gegenüber dem Propheten.",
        "Gelehrte des Islam sind in zahllosen Fragen uneins und es gibt Hadithe, die sich scheinbar widersprechen. Wenn die Sunnah von Allah käme, gäbe es darin keine Widersprüche ('Fänden sie darin viele Widersprüche', Sure 4:82).",
        "Die meisten Hadithe sind Einzelüberlieferungen (Ahâd), die nur ein mutmaßliches Wissen (Dhann) liefern. Der Koran verurteilt jedoch das Befolgen von Vermutungen ('Vermutung nützt nichts gegenüber der Wahrheit', Sure 10:36).",
        "Wir können das islamische Gebet (Salât) ausschließlich anhand des Korantextes vollziehen. Die Sunnah ist dafür nicht erforderlich, oder das Gebet ist ein freies spirituelles Gedenken ohne feste Formen."
      ][idx],
      verses: arg.theirArgument.verses.map(v => ({
        ref: v.ref.replace('Sourate', 'Sure').replace('verset', 'Vers'),
        ar: v.ar,
        translation: [
          ["Wir haben im Buch nichts übergangen.", "Und Wir haben dir das Buch herabgesandt als Klarstellung aller Dinge."],
          ["O die ihr glaubt, gehorcht Allah und gehorcht dem Gesandten und den Befehlshabern unter euch."],
          ["Das Urteil gebührt allein Allah. Er hat befohlen, dass ihr nur Ihm dienen sollt.", "Das Urteil gebührt allein Allah; Er legt die Wahrheit dar und ist der beste der Richter."],
          ["Dem Gesandten obliegt nur die Verkündigung; und Allah weiß, was ihr offenlegt und was ihr verbergt.", "Und wenn ihr euch abwendet, obliegt ihm nur, was ihm auferlegt ist, und euch, was euch auferlegt ist. Wenn ihr ihm aber gehorcht, seid ihr rechtgeleitet."],
          ["Gewiss, Wir Selbst haben die Ermahnung (Adh-Dhikr) herabgesandt, und gewiss, Wir sind ihre Hüter."],
          [],
          [],
          ["Denken sie denn nicht über den Koran nach? Wenn er von jemand anderem als Allah wäre, würden sie gewiss viel Widerspruch darin finden."],
          ["Und die meisten von ihnen folgen nur einer Vermutung; gewiss, die Vermutung nützt nichts gegenüber der Wahrheit.", "Sie folgen nur Vermutungen, und die Vermutung ersetzt die Wahrheit in nichts."],
          ["Und verrichtet das Gebet, entrichtet die Zakat und verbeugt euch mit den sich Verbeugenden."]
        ][idx][0] || v.translation
      })),
      realQuestion: [
        "Schließt die strukturelle Vollständigkeit des Korans als Grundrahmen die prophetische Erklärung aus, die der Text selbst zur Pflicht macht?",
        "Gibt es im Koran Belege dafür, dass die Befehle zum Gehorsam gegenüber dem Gesandten ein historisches Verfallsdatum hatten?",
        "Verbietet Allahs ausschließliche Souveränität, dass Er Seinem Gesandten die Vollmacht delegiert, zu gebieten und zu verbieten?",
        "Was umfasst das koranische Konzept 'Balâgh Mubîn' (deutliche Verkündigung) nach der Gesamtheit der Verse des Buches?",
        "Was bezeichnet der Begriff 'Adh-Dhikr' im Koran und wie wird eine Offenbarung bewahrt, deren praktische Bedeutung dem Propheten ﷺ anvertraut wurde?",
        "Wann begann die schriftliche Fixierung der Hadithe und wie funktionierte die kombinierte mündlich-schriftliche Überlieferung im 1. und 2. Jahrhundert n.H.?",
        "Was war der historische Kontext dieses Hadiths und warum enthält derselbe Hadith-Korpus zahlreiche spätere Befehle des Propheten ﷺ, seine Worte aufzuschreiben?",
        "Stellen Auslegungsunterschiede menschlicher Juristen (Fiqh) oder Fälle von Abrogation (Naskh) Widersprüche in der göttlichen Quelle selbst dar?",
        "Auf welche Art von 'Dhann' beziehen sich diese Koranverse und welchen Erkenntniswert misst der Islam verifizierten Zeugnissen für die Rechtspraxis bei?",
        "Ist es möglich, die Details der 5 täglichen Gebete (Anzahl der Gebete, Rak'at, genaue Zeiten, Rezitationen, Verbeugungen und Niederwerfungen) allein aus dem Korantext zu rekonstruieren?"
      ][idx]
    },
    logicalNode: {
      title: [
        "Verwechslung von systemischer Vollständigkeit und interpretativer Autarkie",
        "Willkürliche zeitliche Einschränkung universeller koranischer Befehle",
        "Verwechslung von ontologischer Ursprungssouveränität und delegierter Anwendungsvollmacht",
        "Fehlerhafte Reduktion des Begriffs 'Balâgh' auf eine passive materielle Übergabe",
        "Ungerechtfertigte Einengung des Begriffs 'Dhikr' und theologischer Widerspruch",
        "Verwechslung von thematischer Großkompilation und ursprünglicher Textaufzeichnung",
        "Bewusstes Verschweigen von Chronologie und Erlaubnistexten (Cherry-Picking)",
        "Verwechslung von Textwiderspruch und menschlicher Interpretationsvielfalt",
        "Semantische Äquivokation zwischen unbegründetem Aberglauben und überwiegender Wahrscheinlichkeit",
        "Die empirische und praktische Unmöglichkeit textlicher Autarkie"
      ][idx],
      distinctions: [
        [
          { term: "SYSTEMISCHE NORMATIVE VOLLSTÄNDIGKEIT", desc: "Der Koran ist vollständig, weil er alle Grundprinzipien festlegt und die Rechtsautorität des Propheten ﷺ einsetzt." },
          { term: "OPERATIVE WÖRTLICHE ERSCHÖPFUNG", desc: "Eine falsche Annahme: Der Koran befiehlt Gebet, Zakat und Fasten, ohne die Ausführungsdetails zu nennen, und delegiert diese an den Propheten ﷺ." }
        ],
        [
          { term: "DAUERHAFTE KORANISCHE NORM", desc: "Jeder an die Gläubigen gerichtete Koranbefehl behält ewige Rechtsgültigkeit, sofern kein ausdrücklicher Abrogationstext vorliegt." },
          { term: "WILLKÜRLICHE HISTORISIERUNG", desc: "Ohne Beleg zu behaupten, ein zentraler koranischer Gehorsamsbefehl habe mit dem physischen Ableben des Propheten ﷺ geendet." }
        ],
        [
          { term: "URSPRÜNGLICHE GESETZGEBUNGSSOUVERÄNITÄT", desc: "Allein Allah besitzt das absolute Recht, religiöse und moralische Gesetze zu stiften." },
          { term: "DELEGIERTE GESETZGEBENDE AUTORITÄT", desc: "Der Prophet ﷺ verfügt durch göttlichen Auftrag unter der nicht-rezitierten Offenbarung (Wahy Ghayr Matluw) über Rechtsvollmacht." }
        ],
        [
          { term: "BALÂGH MUBÎN (VOLLSTÄNDIGE UND ERKLÄRENDE VERKÜNDIGUNG)", desc: "Den Text übermitteln, vorleben, Vorschriften detaillieren und das lebendige Vorbild etablieren." },
          { term: "MECHANISCHE UND PASSIVE ÜBERGABE", desc: "Das Zerrbild der Koranisten, das den Gesandten jeder pädagogischen und richterlichen Autorität beraubt." }
        ],
        [
          { term: "ADH-DHIKR IM GLOBALEN KORANISCHEN SINN", desc: "Die geoffenbarte Botschaft in ihrer Gesamtheit: das Wort des Korans und die Sunnah, die seinen Inhalt verdeutlicht." },
          { term: "VERWECHSLUNG VON ROHTEXT UND LEBENDIGER BOTSCHAFT", desc: "Zu glauben, Allah bewahre die Worte eines Befehls, lasse aber die Kenntnis über seine Ausführung vollständig verloren gehen." }
        ],
        [
          { term: "URSPRÜNGLICHE AUFZEICHNUNG (1. JAHRHUNDERT N.H.)", desc: "Notizhefte (Suhuf), verfasst von den Gefährten selbst (wie Abdullah ibn 'Amr, 'Ali ibn Abi Talib, Anas ibn Malik)." },
          { term: "KLASSIFIZIERTE KRITISCHE GROSSKOMPILATION (3. JAHRHUNDERT N.H.)", desc: "Die kanonischen Werke (Bukhari, Muslim), die bereits vorhandene Ketten sammelten, ordneten und prüften." }
        ],
        [
          { term: "VORÜBERGEHENDES UMSTANDSBEDINGTES VERBOT", desc: "Zu Beginn der Offenbarung in Mekka und frühen Tagen in Medina, um zu verhindern, dass Gläubige prophetische Notizen auf dieselben Blätter wie den Korantext schrieben." },
          { term: "ALLGEMEINE UND DAUERHAFTE ERLAUBNIS", desc: "Nachdem der Koranstil vertraut war, befahl der Prophet ﷺ seinen Gefährten ausdrücklich, seine Lehren aufzuschreiben." }
        ],
        [
          { term: "ECHTER INNERER WIDERSPRUCH (DISQUALIFIKATION)", desc: "Zwei logisch unvereinbare Aussagen über denselben Sachverhalt zur selben Zeit ohne Harmonisierungsmöglichkeit." },
          { term: "VERSTÄNDNISUNTERSCHIED ODER ABROGATION", desc: "Unterschiedliche Anwendungen je nach Kontext, progressive Rechtsentwicklung oder legitime Meinungsvielfalt der Juristen (Ijtihâd)." }
        ],
        [
          { term: "VERURTEILTES DHANN (DOGMATISCHER ABERGLAUBE)", desc: "Heidnische Überzeugungen ohne jede Spur göttlicher Offenbarung oder rationaler Beweise." },
          { term: "GHALABAT ADH-DHANN (ÜBERWIEGENDE PRAKTISCHE GEWIS двига)", desc: "Verifizierte Zeugenaussagen vertrauenswürdiger Personen, die im Recht, vor Gericht und im Alltag handlungsverbindlich sind." }
        ],
        [
          { term: "NORMATIVER KORANBEFEHL (DAS PRINZIP)", desc: "Die unveränderliche göttliche Anordnung, die die Pflicht zum Gebet begründet." },
          { term: "LEBENDIGE SUNNAH MUTAWÂTIRAH (DIE AUSFÜHRUNG)", desc: "Die ununterbrochene praktische Weitergabe von Generation zu Generation, die lehrt, wie man betet." }
        ]
      ][idx],
      generalRule: [
        "Ein Grundtext, der die verbindliche Auslegung formell an einen Gesandten delegiert, ist nicht mangelhaft; seine Vollständigkeit schließt diese Vollmacht ein.",
        "Ein in universellen Begriffen an die Gläubigen gerichteter Befehl bleibt für alle Generationen verbindlich.",
        "Wenn der höchste Souverän befiehlt, den Beschlüssen Seines Gesandten zu gehorchen, ist der Gehorsam gegenüber dem Gesandten der höchste Ausdruck der Ergebenheit gegenüber dem Souverän.",
        "Ein koranischer Begriff muss anhand der Gesamtheit der Verse definiert werden, nicht durch die Isolierung eines Halbsatzes.",
        "Die Bewahrung einer göttlichen Botschaft schließt notwendigerweise die Bewahrung ihrer praktischen Bedeutung ein.",
        "Dass eine Enzyklopädie im 21. Jahrhundert erscheint, bedeutet nicht, dass die darin dokumentierten historischen Ereignisse erst im 21. Jahrhundert entstanden sind.",
        "Ein anfängliches Verbot verliert seine Gültigkeit, wenn der Anlass entfällt und eine spätere Erlaubnis erfolgt.",
        "Meinungsverschiedenheiten unter Lesern beweisen nicht, dass der Text fehlerhaft ist, sondern dass menschliche Vernunft nuanciert operiert.",
        "Das gesamte menschliche Leben und die Justiz beruhen auf verlässlichen Zeugnissen; absolute mathematische Gewissheit für jedes Detail würde die Welt lähmen.",
        "Wenn ein Rechtsbefehl eine Handlung vorschreibt, deren Vollzugsformen jedoch nicht definiert, ist der Verweis auf die bevollmächtigte Quelle zwingend."
      ][idx],
      errorToAvoid: [
        "Die Vollständigkeit der Rechtsgrundlagen mit dem Detail der praktischen Ausführung zu verwechseln.",
        "Die Pflichten des Korans ohne Textbeleg willkürlich historisch einzuschränken.",
        "Eine dogmatische Wahrheit ('das Urteil gebührt Allah') zu nutzen, um die Befehle dieses Urteils aufzuheben.",
        "Die Freistellung von Verantwortung für den Glauben anderer mit der Leugnung von Lehrautorität zu verwechseln.",
        "Die Bewahrung des Buchstabens von der Bewahrung des Sinns zu trennen.",
        "Das Todesdatum eines Sammlers mit dem Entstehungsdatum der Dokumente gleichzusetzen.",
        "Einen Hadith aus Sahih Muslim zu zitieren, um Sahih Muslim als Ganzes zu verwerfen.",
        "Einen Vers über die Vollkommenheit des Korans (4:82) zu nutzen, um die Rechtsmethodik (Usûl al-Fiqh) zu leugnen.",
        "Verse gegen heidnischen Götzendienst zu missbrauchen, um die methodische Überlieferung herabzusetzen.",
        "Eine individualistische Gebetsform zu erfinden, um eine theoretische Ideologie zu retten."
      ][idx]
    },
    centralPrinciple: {
      title: [
        "Die Vollständigkeit des Korans schließt die Pflicht ein, der Autorität des Propheten zu folgen",
        "Der Gehorsam gegenüber dem Gesandten ist eine universelle Säule des Glaubens bis zum Jüngsten Tag",
        "Das Urteil des Propheten ﷺ ist eine direkte Manifestation des Urteils Allahs",
        "Das Balâgh umfasst die mündliche Erklärung, die Unterweisung und das Vorbild",
        "Die Bewahrung des Korans erfordert die Bewahrung der erklärenden Sunnah",
        "Die Hadith-Überlieferung war von der Prophetenzeit an kontinuierlich, doppelt geprüft und dokumentiert",
        "Die ausdrückliche prophetische Erlaubnis zur schriftlichen Fixierung der Sunnah",
        "Die Hadith-Wissenschaft verfügt über präzise Regeln zur Harmonisierung scheinbarer Differenzen",
        "Koran und Prophet verpflichten zum Handeln auf der Grundlage vertrauenswürdiger Einzelberichte",
        "Das Gebet ist die lebendige und tägliche Widerlegung des Koranismus bei jeder Verbeugung"
      ][idx],
      formalScheme: [
        "1. Der Koran ist vollständig in der Festlegung der göttlichen Rechtleitung.\n2. Teil dieser Vollständigkeit ist der Befehl, dem Propheten ﷺ zu gehorchen und seiner Erläuterung (Bayan) zu folgen.\n3. Daher ist das Befolgen der Sunnah die direkte Erfüllung der koranischen Vollständigkeit.",
        "1. Der Koran richtet sich an alle Gläubigen bis zum Ende der Zeit.\n2. Er befiehlt absolut: 'Gehorcht dem Gesandten'.\n3. Folglich ist der Gehorsam gegenüber seinen überlieferten Lehren für die gesamte Menschheit Pflicht.",
        "1. Allah besitzt das absolute Urteil.\n2. Allah befahl im Koran, sich den Entscheidungen des Propheten ﷺ zu unterwerfen.\n3. Daher bedeutet die Annahme der Urteile des Propheten ﷺ die Unterwerfung unter das Urteil Allahs.",
        "1. Der Koran beauftragt den Gesandten mit der deutlichen Verkündigung (Balâgh).\n2. Der Koran definiert diese Verkündigung als: Verlesen, Läutern, Lehren des Buches und der Weisheit (62:2) und Erklären des Herabgesandten (16:44).\n3. Daher ist die lebendige Sunnah der untrennbare Kern des koranischen Balâgh.",
        "1. Allah garantierte die Bewahrung des Dhikr (15:9).\n2. Der Koran nennt sowohl den Text als auch den Erklärungsauftrag des Propheten ﷺ 'Dhikr' (16:44).\n3. Daher hat die göttliche Vorsehung die Hadith-Wissenschaft hervorgebracht, um die authentische Sunnah zu schützen.",
        "1. Die Gefährten zeichneten Hadithe schriftlich auf und memorierten sie exakt zu Lebzeiten des Propheten ﷺ.\n2. Die Nachfolgegeneration sammelte diese Schriften in frühen Werken (wie der Sahifa von Hammam ibn Munabbih).\n3. Bukhari und Muslim erfanden nichts: Sie prüften und ordneten bereits bekannte Überlieferungsketten.",
        "1. Das anfängliche Verbot war präventiv (Vermeidung materieller Vermischung mit dem Koran).\n2. Zahlreiche authentische spätere Berichte belegen den ausdrücklichen Befehl zur Niederschrift.\n3. Wer das Verbots-Hadith nutzt, um alle Hadithe zu leugnen, zerstört sich selbst: Ist der Bericht wahr, muss er auch die Erlaubnisberichte annehmen.",
        "1. Jeder umfangreiche Rechtstext weist für den Unkundigen scheinbare Widersprüche auf.\n2. Gelehrte entwickelten Fachdisziplinen: Mukhtalif al-Hadîth (Harmonisierung), An-Nâsikh wal-Mansûkh (Abrogation) und Asbâb al-Wurûd (Kontext).\n3. Koranisten selbst sind untereinander völlig uneins über Gebet und Fasten, was beweist, dass ihre Methode ins Chaos führt.",
        "1. Der Koran befiehlt, Nachrichten zu prüfen und bei glaubwürdigen Überbringern zu handeln (49:6).\n2. Der Prophet ﷺ entsandte einzelne Emissäre (wie Mu'adh ibn Jabal in den Jemen), um ganze Regionen zu unterweisen.\n3. Daher ist der verifizierte Bericht (Hadith Ahad) im islamischen Recht voll verbindlich.",
        "1. Der Koran schreibt das Gebet vor, nennt aber weder Einheiten noch vollständige Formeln.\n2. Der Prophet ﷺ erklärte öffentlich vor Tausenden: 'Betet so, wie ihr mich habt beten sehen' (Sahih Al-Bukhari).\n3. Die Gemeinschaft hat diese Praxis millionenfach täglich ununterbrochen bis heute überliefert."
      ][idx],
      explanation: [
        "Der Koran selbst begründet die Autorität der Sunnah. Die Sunnah abzulehnen verletzt genau jene Koranverse, die den unbedingten Gehorsam gegenüber dem Gesandten ﷺ vorschreiben.",
        "Der Koran knüpft den Gehorsam gegenüber dem Propheten ﷺ an keiner Stelle an seine physische Anwesenheit. So wie die Koranbotschaft ewig ist, so ist auch die prophetische Rechtleitung zeitlos verbindlich.",
        "Imam 'Ali ibn Abi Talib (رضي الله عنه) antwortete den Charidschiten, die dieselbe Parole nutzten: 'Ein wahres Wort, mit dem Falsches bezweckt wird'. Der Prophet verfügt durch göttliche Eingebung und Auftrag.",
        "Wenn der Koran sagt 'dem Gesandten obliegt nur die Verkündigung', bedeutet dies, dass er niemanden zum Glauben zwingen kann. Gegenüber den Gläubigen ist er jedoch der maßgebliche Lehrer und Führer.",
        "Wäre die Sunnah verloren gegangen, wären ganze Koranverse über Gebet, Zakat und Vorbild unanwendbar geworden. Die Bewahrung des Korans schließt den Schutz der Sunnah durch die Hadith-Wissenschaftler ein.",
        "Die Entdeckung der Sahifa von Hammam ibn Munabbih (Manuskript aus dem 1. Jahrhundert n.H., überliefert von Abu Hurayrah) bewies empirisch, dass die bei Bukhari gesammelten Hadithe wortwörtlich mit den 200 Jahre älteren Notizen übereinstimmen.",
        "Der Gefährte 'Abdullah ibn 'Amr fragte den Propheten ﷺ, ob er alles aufschreiben dürfe. Der Prophet ﷺ zeigte auf seinen Mund und sagte: 'Schreibe! Denn bei Dem, in Dessen Hand meine Seele liegt, nichts kommt daraus hervor außer der Wahrheit' (Abu Dawud, Ahmad).",
        "Es gibt keinen unauflösbaren Widerspruch zwischen zwei authentischen Hadithen. Scheinbare Differenzen beruhen auf Abrogation, Allgemein- und Sonderregelungen oder unterschiedlichen Kontexten.",
        "Hätten verlässliche Einzelberichte keinen Wert, hätten die Bewohner des Jemen den Islam von Mu'adh nicht annehmen dürfen und kein Gericht könnte auf Zeugenaussagen urteilen.",
        "Kein Koranist der Welt kann allein aus dem Koran begründen, warum er mittags 4 Einheiten betet. Indem er so betet, beweist er durch seine eigene Tat, dass die Sunnah unverzichtbar ist."
      ][idx],
      logicalTest: [
        "Wenn der Koran als autarkes Handbuch ohne Hadith gedacht war, leiten Sie allein aus dem Text die Anzahl der täglichen Gebete, die Rak'at und die Zakat-Prozentsätze her!",
        "Wäre der Gehorsam mit dem Tod des Propheten erloschen, warum sollten die Verse über Gebet und Zakat heute noch verbindlich sein?",
        "Wenn niemand außer Allah etwas anordnen darf, warum befiehlt der Koran Schiedsleute bei Ehestreitigkeiten (4:35) oder zur Jagdschaden-Schätzung (5:95)?",
        "Wäre der Prophet ein bloßer Bote gewesen, warum sandte Allah einen Menschen mit Wort und Tat statt eines fertigen Buches vom Himmel (6:7)?",
        "Wenn nur der Text bewahrt und die Sunnah zweifelhaft wäre, woher wüssten wir mit Sicherheit, was das Wort 'Salât' bedeutet und wie man es vollzieht?",
        "Wie erklären Koranisten, dass sie den unter 'Uthman zusammengestellten Koran annehmen, wenn sie die Überlieferung derselben Gefährtengeneration ablehnen?",
        "Wenn das Hadith 'Schreibt nichts von mir' beweist, dass man keinen Hadithen folgen darf, warum glaubt der Koranist an dieses Hadith?",
        "Wenn Meinungsverschiedenheiten eine Quelle ungültig machen, warum können sich Koranisten nicht einmal auf die Zahl der täglichen Gebete einigen?",
        "Haben Sie beim Lebensmitteleinkauf oder Medikamentenkauf absolute mathematische Gewissheit oder vertrauen Sie auf verlässliche Prüfzertifikate?",
        "Herausforderung an jeden Koranisten: Schreiben Sie die Anleitung für ein vollständiges Gebet ausschließlich mit wörtlichen Koranzitaten nieder!"
      ][idx]
    },
    quranicArchitecture: {
      title: "Entscheidende Verse und koranische Architektur",
      verses: arg.quranicArchitecture.verses.map(v => ({
        ref: v.ref.replace('Sourate', 'Sure').replace('verset', 'Vers'),
        ar: v.ar,
        translation: v.translation
      })),
      consequence: [
        "Der Koran setzt den Propheten ﷺ als autorisierten Lehrer und Gesetzgeber ein, nicht als passiven Boten.",
        "Die richterliche Autorität des Propheten ﷺ bindet das Gewissen jedes Muslims dauerhaft.",
        "Der Koran legt fest, dass der Prophet ﷺ mit göttlicher Vollmacht Dinge verbietet und erlaubt, und verneint den Glauben derer, die seine Urteile ablehnen.",
        "Der Koran weist die Briefträger-These zurück: Der Prophet ﷺ ist Lehrer, Erzieher und unverzichtbares Vorbild.",
        "Der Koran nennt die Lehre des Propheten ﷺ und seine Person ausdrücklich 'Dhikr'.",
        "Allah bezeugt die Rechtschaffenheit der Generation, die Koran und Sunnah überlieferte.",
        "Wenn der Koran das Aufschreiben von Finanzschulden befiehlt, verdient die prophetische Weisheit erst recht die schriftliche Fixierung.",
        "Allah zeigt im Koran, dass zwei gerechte Propheten im selben Fall unterschiedliche Urteile fällen können, ohne dass einer ketzerisch wäre.",
        "Der Koran schreibt vor, dass unterwiesene Gruppen zurückkehren und Gemeinschaften belehren.",
        "Gebetszeiten und -formen sind eine feste Vorschrift, überliefert durch die ununterbrochene Praxis der Sunnah (Tawâtur 'Amalî)."
      ][idx]
    },
    analogies: [
      [
        { num: 1, title: "Die Verfassung und die Ausführungsverordnungen", scenario: "Eine Verfassung legt Grundsätze fest und bestimmt, dass Gesetze die Details regeln.", logicBox: "Verfassung = Koran | Verordnungen = Sunnah.", lesson: "Die Verordnungen im Namen der Verfassung abzulehnen, lähmt den Staat." },
        { num: 2, title: "Das Ärztliche Rezept und die Packungsbeilage", scenario: "Ein Arzt verschreibt ein Medikament und verweist für Dosierung und Einnahme auf die Packungsbeilage.", logicBox: "Rezept = Göttlicher Befehl | Dosierung = Prophetische Erklärung.", lesson: "Die Einnahmehinweise zu ignorieren, führt zu Schaden." }
      ],
      [
        { num: 1, title: "Die Urteile des Verfassungsgerichts", scenario: "Die Grundsatzurteile früherer Richter binden die Rechtsprechung auch lange nach ihrem Tod.", logicBox: "Tod der Richter ≠ Erlöschen der Urteile.", lesson: "Das Ableben des Verfassers hebt die Rechtskraft gültiger Beschlüsse nicht auf." },
        { num: 2, title: "Das Beglaubigte Testament", scenario: "Die Anweisungen eines Vaters im Testament müssen von den Erben genau befolgt werden.", logicBox: "Testament = Überlieferte authentische Sunnah.", lesson: "Niemand kann Klauseln mit dem Argument verwerfen, der Erblasser sei nicht mehr da." }
      ],
      [
        { num: 1, title: "Der Bevollmächtigte Botschafter", scenario: "Ein Botschafter unterzeichnet Verträge im Namen des Staatsoberhaupts mit Vollmacht.", logicBox: "Staatsmacht = Göttliche Autorität | Unterschrift = Bestimmung der Sunnah.", lesson: "Die Beschlüsse des Gesandten anzuerkennen ehrt die Autorität des Herrschers." },
        { num: 2, title: "Der Strafrichter und das Strafgesetzbuch", scenario: "Ein Richter wendet das Strafgesetzbuch an und verhängt ein konkretes Strafmaß.", logicBox: "Rechtsanwendung ≠ Usurpation der Gesetzgebung.", lesson: "Der Koran hat den Propheten beauftragt, verbindliche Urteile zu fällen." }
      ],
      [
        { num: 1, title: "Der Universitätsprofessor und das Lehrbuch", scenario: "Eine Universität stellt einen Dozenten ein, um ein Fach mit einem Lehrbuch zu unterrichten. Er legt nicht nur das Buch ab.", logicBox: "Text = Koran | Vorlesung und Erklärung = Lebendige Sunnah.", lesson: "Der Wert eines Lehrers liegt im Erklären und Anleiten der Studenten." },
        { num: 2, title: "Der Architekt und der Bauleiter", scenario: "Ein Architekt hinterlegt nicht nur Pläne, sondern erklärt Maße und überwacht die Baustelle.", logicBox: "Pläne = Korantext | Bauleitung = Prophetische Praxis.", lesson: "Ohne akkreditierte Bauleitung werden Pläne nicht zu einem bewohnbaren Haus." }
      ],
      [
        { num: 1, title: "Der Tresor und der Generalschlüssel", scenario: "Ein Schlosser baut einen unzerstörbaren Tresor und übergibt den Schlüssel. Zerstört er den Schlüssel, wird der Schatz unbrauchbar.", logicBox: "Tresor = Koran | Schlüssel = Erklärende Sunnah.", lesson: "Den Behälter zu schützen und den Schlüssel zu zerstören widerspricht jeder Weisheit." },
        { num: 2, title: "Die Verkehrsschilder und die Straßenverkehrsordnung", scenario: "Eine Regierung erhält Verkehrsschilder, verbrennt aber alle Handbücher, die die Farben erklären.", logicBox: "Schild = Koranbefehl | Handbuch = Prophetische Praxis.", lesson: "Ein Schild ohne gemeinsamen Erklärungscode stiftet nur Chaos." }
      ],
      [
        { num: 1, title: "Die Doktorarbeit und die Archivquellen", scenario: "Ein Historiker veröffentlicht heute ein Buch über 1940 anhand von Feldpostbriefen. Niemand sagt, der Krieg sei heute erfunden worden.", logicBox: "Bukhari = Gewissenhafter Historiker | Isnâds = Geprüfte Archivdokumente.", lesson: "Das Veröffentlichungsdatum bestimmt nicht das Alter der Quellen." },
        { num: 2, title: "Die Klassische Musikpartitur", scenario: "Ein Verlag druckt heute eine kritische Mozart-Ausgabe. Das Werk entstand nicht erst mit dem modernen Druck.", logicBox: "Kritische Ausgabe = Sahih Bukhari | Partitur = Lebendige Überlieferung.", lesson: "Editionsarbeit ordnet und bewahrt eine vorbestehende Realität." }
      ],
      [
        { num: 1, title: "Die Fahrschule: Vorübergehendes Verbot", scenario: "Ein Fahrlehrer verbietet dem Anfänger in den ersten Stunden den Blick aufs Navi, um den Blick auf die Straße zu schulen, bevor er es erlaubt.", logicBox: "Anfangsverbot = Sicherheit | Spätere Erlaubnis = Reife.", lesson: "Eine pädagogische Anfangsregel entwickelt sich legitim zur Erlaubnis." },
        { num: 2, title: "Der Giftmischer, der das Gegengift zitiert", scenario: "Jemand behauptet, alle Medikamente einer Apotheke seien Gift, stützt sich dabei aber auf den Beipackzettel aus eben jener Apotheke.", logicBox: "Ist die Apotheke verlogen, hat der Zettel keine Beweiskraft.", lesson: "Wären Hadith-Bücher unzuverlässig, könnte das Verbots-Hadith nicht als Beweis dienen." }
      ],
      [
        { num: 1, title: "Die Verfassungsrichter", scenario: "Verfassungsrichter lesen denselben Artikel und verfassen begründete Sondervoten mit unterschiedlichen Nuancen.", logicBox: "Juristendivergenz ≠ Falschheit der Verfassung.", lesson: "Auslegungsvielfalt spiegelt den Reichtum des Rechts wider." },
        { num: 2, title: "Das Ärztekonzil", scenario: "Drei Chefärzte beraten über den Operationszeitpunkt nach Einsicht derselben Laborbefunde.", logicBox: "Klinisches Konzil = Ijtihâd der Gelehrten.", lesson: "Niemand verbrennt Medizinbücher, weil Ärzte über Diagnosen debattieren." }
      ],
      [
        { num: 1, title: "Das Zeugnis vor Gericht", scenario: "Ein Gericht verurteilt einen Täter auf Basis übereinstimmender Zeugenaussagen und Gutachten. Niemand verlangt, dass der Richter die Tat selbst sah.", logicBox: "Hinreichende Gewissheit = Authentische Überlieferungskette (Isnâd Sahih).", lesson: "Überwiegende Wahrscheinlichkeit abzulehnen, würde alle Kriminellen freilassen." },
        { num: 2, title: "Die Medizinische Diagnose und Laborwerte", scenario: "Ein Arzt verschreibt ein Antibiotikum aufgrund eines Laborbefunds mit 99% Zuverlässigkeit.", logicBox: "Begründete Wahrscheinlichkeit = Handlungspflicht.", lesson: "Vernunft gebietet, nach der solidesten Evidenz zu handeln." }
      ],
      [
        { num: 1, title: "Das Rezept des Meisterkochs", scenario: "Ein Rezept sagt 'Bereite perfekten Blätterteig zu'. Ohne die Falttechnik des Meisters wird der Teig ungenießbar.", logicBox: "Befehl = Bereite Teig | Meistertechnik = Prophetische Sunnah.", lesson: "Ein allgemeiner Befehl ohne Technik führt nicht zum Ziel." },
        { num: 2, title: "Die Praktische Fahrprüfung", scenario: "Die Verkehrsordnung sagt 'Parken Sie korrekt ein'. Wer sich weigert, das Manöver beim Fahrlehrer zu lernen, fällt durch.", logicBox: "Vorgelebte Praxis verleiht der Norm Wirksamkeit.", lesson: "Die Anbetung Allahs lernt man durch die Nachahmung Seines Gesandten." }
      ]
    ][idx],
    readyResponses: {
      quick30s: [
        "Zu sagen, dass der Koran vollständig ist, ist eine koranische Wahrheit. Doch derselbe Koran befiehlt uns, dem Gesandten ﷺ zu gehorchen, und lehrt, dass seine Aufgabe die Erklärung des Textes ist (Sure 16, Vers 44). Die Sunnah im Namen der Vollständigkeit des Korans abzulehnen bedeutet, das abzulehnen, was der Koran ausdrücklich vorschreibt.",
        "Der Koran sagt in über dreißig Passagen zeitlich unbegrenzt: 'Gehorcht Allah und gehorcht dem Gesandten'. Wäre dieser Befehl mit dem Tod des Propheten ﷺ erloschen, wäre die Hälfte des Korans hinfällig. Die bewahrte Sunnah ist das Mittel, wodurch wir dem Propheten ﷺ heute gehorchen.",
        "Der Koran bekräftigt gewiss, dass das höchste Urteil Allah gebührt. Und genau dasselbe Urteil Allahs besagt in Sure 7:157, dass der Prophet 'ihnen die guten Dinge erlaubt und die schlechten Dinge verbietet'. Den Verboten des Propheten ﷺ zu folgen bedeutet, das Gesetz Allahs zu befolgen.",
        "Wenn der Koran sagt 'dem Gesandten obliegt nur die Verkündigung', bedeutet dies, dass er niemanden zum Glauben zwingen kann. Doch dieselbe Verkündigung (Balâgh) wird vom Koran als Lehre des Buches, Läuterung und Auslegung definiert (Sure 62, Vers 2). Der Prophet ist ein autorisierter Lehrer, niemals ein bloßer Bote!",
        "Im koranischen Arabisch bezeichnet 'Adh-Dhikr' nicht nur die Seiten des Korans. In Sure 16:44 sagt Allah zum Propheten: 'Wir haben zu dir den Dhikr herabgesandt, damit du den Menschen erklärst, was zu ihnen herabgesandt wurde'. Den Koran zu bewahren, aber das Wissen um das Gebet verloren gehen zu lassen, wäre ein Widerspruch zur göttlichen Weisheit.",
        "Zu behaupten, Hadithe seien erst 200 Jahre später aufgeschrieben worden, ist ein grober historischer Irrtum. Die Aufzeichnung begann zu Lebzeiten des Propheten ﷺ in den Heften der Gefährten wie 'Abdullah ibn 'Amr (As-Sâdiqah). Bukhari erfand die Traditionen nicht, sondern sammelte mit höchster Strenge schriftliche Vorlagen aus dem ersten Jahrhundert.",
        "Dieses Argument birgt einen komischen Widerspruch: Sie nutzen einen Hadith aus Sahih Muslim, um zu beweisen, dass Hadithe aus Sahih Muslim unzuverlässig seien! Wenn dieser Bericht wahr ist, müssen Sie auch den Bericht akzeptieren, in dem der Prophet bei der Eroberung Mekkas sagt: 'Schreibt für Abu Shah', und zu 'Abdullah ibn 'Amr: 'Schreibe, denn aus meinem Mund kommt nur die Wahrheit!'. Das Verbot war anfangs rein temporär.",
        "Meinungsverschiedenheiten unter Gelehrten sind keine Widersprüche der Sunnah: Sie sind der natürliche Ausdruck menschlicher Rechtsfindung (Ijtihâd). Koranisten selbst sind untereinander unendlich viel uneinser als alle islamischen Gelehrten!",
        "Das in Sure Yunus verurteilte 'Dhann' ist der unbegründete Götzenglaube der Heiden. Im Recht und im Leben ist das Handeln nach vertrauenswürdigen Zeugenaussagen jedoch eine koranische Pflicht (Sure 49, Vers 6). Der Prophet ﷺ sandte einzelne Gefährten aus, um ganze Stämme zu unterweisen.",
        "Fragen Sie jeden Koranisten: 'Wie verrichtest du das Mittagsgebet? Wie viele Einheiten betest du? Warum vier und nicht drei oder sieben?'. Er wird diese Zahl in keinem Koranvers finden. Wenn er 4 Einheiten betet, folgt er der Sunnah; und wenn nicht, hat er eine Religion erfunden, die kein Muslim je kannte."
      ][idx],
      developed: [
        "Die Vollständigkeit des Korans ist keine enzyklopädische Aufzählung jeder Alltagsregung, sondern eine normative Vollständigkeit der Grundlagen. Der Koran setzt die Fundamente und bestimmt den Propheten ﷺ als lebendige Autorität für Gebet, Zakat und Verträge. Die Sunnah zu leugnen bedeutet, den Koran seiner praktischen Anwendbarkeit zu berauben.",
        "Kein Vers des Korans schränkt den Gehorsam auf das 7. Jahrhundert ein. Würde nur das Zeitgenössische binden, wären alle an frühe Gläubige gerichteten Verse verfallen. Die Gefährten überlieferten die Sunnah gerade deshalb, damit künftige Generationen diese Pflicht erfüllen können.",
        "Dies ist exakt dieselbe Entstellung, die die frühen Charidschiten gegen 'Ali (رضي الله عنه) vorbrachten. Sie verwechseln die Urheberquelle des Rechts (Allah) mit dem Gesandten. Der Prophet erfindet nichts aus Laune: Alles entstammt der göttlichen Offenbarung (53:3-4).",
        "Die Wendung 'mâ 'alâ ar-rasûl illâ al-balâgh' soll den Propheten ﷺ trösten: Er haftet nicht für den Unglauben der Heiden. Gegenüber den Muslimen umfasst dieses Balâgh jedoch die Unterweisung in der 'Hikmah' (der Sunnah) und das 'vortreffliche Vorbild'.",
        "Die Koranisten-These setzt voraus, dass Allah das Buch schützte, die Sunnah aber dem Vergessen anheimfallen ließ. Die Geschichte zeigt das Gegenteil: Allah brachte die Hadith-Wissenschaft mit Isnâd und Biografie-Kritik hervor, um Echtes von Unechtem trennscharf zu filtern.",
        "Die Behauptung ignoriert die vorkanonische Literatur: das Muwatta' von Malik (gest. 179 H), das Musannaf von 'Abd ar-Razzaq (gest. 211 H), das Musnad von Ahmad (gest. 241 H) und die Schriften der Tabi'un. Schrift und mündliche Autorisierung (Sama') griffen stets ineinander.",
        "Gelehrte harmonisierten diese Texte: Das Schreibverbot galt zu Beginn, als der Koran stückweise herabgesandt wurde und die Gefahr bestand, Prophetenerklärungen auf dieselben Pergamente zu schreiben. Nach Festigung des Korans ordnete der Prophet ﷺ die Niederschrift ausdrücklich an.",
        "In den Wissenschaften existieren Disziplinen wie 'Fiqh al-Ikhtilâf' und 'Mukhtalif al-Hadîth'. Die Grundregel lautet: Erst Harmonisierung; wenn unmöglich, Prüfung der Abrogationschronologie; ansonsten Vorzug der sichersten Überlieferung.",
        "Gelehrte unterscheiden zwischen haltlosem Verdacht ('Dhann al-Batil') und moralisch überwiegender Gewissheit ('Ghalabat adh-Dhann'). Recht, Medizin und Geschichte stützen sich auf verlässliche Überbringer. Ohne dies müsste man selbst an der Identität der eigenen Eltern zweifeln.",
        "Das Gebet (Salât) ist das Herz des Islam. Seine Überlieferung ist 'Mutawâtir 'Amalî' (massenhafte Praxisüberlieferung): Millionen Eltern lehrten ihre Kinder dasselbe Gebet, das die Gefährten in Medina lernten. Dem Gebet seine Formen zu nehmen verwandelt den Islam in eine leblose Theorie."
      ][idx]
    },
    objections: [
      [
        { obj: "Der Koran sagt 'Klarstellung aller Dinge' (16:89), steht die Sunnah etwa außerhalb des Korans?", ans: "Die Sunnah ist die vom Koran selbst angeordnete innere Klarstellung, kein fremder Zusatz zur Botschaft." },
        { obj: "Behauptet ihr etwa, der Koran sei unzureichend?", ans: "Der Koran ist vollkommen ausreichend für seinen Zweck: die höchste Quelle zu sein, die die prophetische Autorität begründet." }
      ],
      [
        { obj: "Der Prophet ist nicht mehr unter uns, um Streitigkeiten zu schlichten.", ans: "Seine physische Person ist verschieden, doch sein normatives Urteil lebt in seinen authentisch überlieferten Lehren fort." },
        { obj: "Es heißt 'die Befehlshaber unter euch', was eine politische Pflicht beweist.", ans: "Sure 4:59 sagt: 'Wenn ihr uneins seid, bringt es vor Allah und den Gesandten', nicht vor die Herrscher!" }
      ],
      [
        { obj: "Wenn der Prophet Dinge verbietet, die nicht im Koran stehen, fügt er der Religion etwas hinzu.", ans: "Der Koran erteilte ihm diese Vollmacht ausdrücklich in 7:157. Es ist die direkte Ausführung seines Auftrags." },
        { obj: "Seht ihr den Propheten als Teilhaber Allahs an der Gesetzgebung?", ans: "Keineswegs! Der Prophet verfügt durch göttliche Delegation und Eingebung, niemals auf gleicher Stufe mit dem Schöpfer." }
      ],
      [
        { obj: "Haben die Worte des Propheten denselben Rang wie der Koran?", ans: "Der Koran ist das unerschaffene Wort Allahs; die Worte des Propheten sind die göttlich geleitete menschliche Erklärung." },
        { obj: "Wenn der Koran klar ist, warum muss er erklärt werden?", ans: "Der Koran ist in seinen Prinzipien klar, enthält jedoch allgemeine Normen, die der prophetischen Spezifizierung bedürfen." }
      ],
      [
        { obj: "Es gibt gefälschte Hadithe, also wurde die Sunnah nicht bewahrt.", ans: "Dass die Gelehrten jeden erfundenen Hadith identifiziert und isoliert haben, beweist die vollkommene Bewahrung der echten Sunnah." },
        { obj: "Das Wort 'Dhikr' in 15:9 meint laut Exegeten nur den Koran.", ans: "Selbst im engen Sinn erfordert die Bewahrung des Korans die Bewahrung seines Verständnisses." }
      ],
      [
        { obj: "Warum wurde die Sunnah nicht wie der Koran in einem Buch gesammelt?", ans: "Der Koran erforderte eine geschlossene Textfixierung; die Sunnah wurde als lebendige Alltagspraxis von Tausenden Gefährten dezentral überliefert." },
        { obj: "Das menschliche Gedächtnis ist über Generationen hinweg fehlbar.", ans: "Deshalb verlangten die Gelehrten übereinstimmende Ketten und den Abgleich mit Original-Manuskripten." }
      ],
      [
        { obj: "Abu Bakr und 'Umar sollen Hadith-Hefte verbrannt haben.", ans: "Diese Berichte sind historisch schwach oder aus dem Kontext gerissen: 'Umar verzichtete auf ein Einheitsbuch, damit der Koran nicht vernachlässigt wird." },
        { obj: "Warum diktierte der Prophet die Sunnah nicht Schreibern wie den Koran?", ans: "Weil die Sunnah eine gelebte Rechtleitung in Worten, Taten und Antworten über 23 Jahre hinweg war." }
      ],
      [
        { obj: "Ein Hadith besagt, der Prophet betete so, ein anderer, er betete anders.", ans: "Der Prophet ﷺ lehrte legitime Varianten, um der Gemeinschaft die Praxis in verschiedenen Situationen zu erleichtern." },
        { obj: "Die vier Rechtsschulen weichen im Gebet voneinander ab.", ans: "Sie weichen in untergeordneten Empfehlungen ab, sind sich aber über die 5 Gebete, die Rak'at und Grundpfeiler völlig einig (Ijmâ')." }
      ],
      [
        { obj: "Im Glaubensfundament ('Aqidah) verlangt man absolute Gewissheit (Qat'î).", ans: "Die großen Pfeiler sind durch massenhafte Ketten (Tawâtur) bewiesen. Praktische Details stützen sich legitim auf verlässliche Hadithe." },
        { obj: "Ein ehrlicher Zeuge kann sich irren.", ans: "Deshalb glichen die Hadith-Gelehrten Versionen mehrerer Gefährten ab, um Gedächtnisfehler auszuschließen." }
      ],
      [
        { obj: "Haben wir das Gebet nicht von Abraham geerbt?", ans: "Abraham begründete den Monotheismus und das Heilige Haus; die genauen Formen des islamischen Gebets lehrte Muhammad ﷺ: 'Betet, wie ihr mich habt beten sehen'." },
        { obj: "Gebet im Koran bedeutet nur geistiges Gedenken.", ans: "Das widerspricht dem Koran selbst, der von Verbeugungen (Ruku'), Niederwerfungen (Sujud) und ritueller Waschung spricht." }
      ]
    ][idx],
    framingQuestions: [
      ["Wo steht im Koran allein die Anzahl der Einheiten des Mittagsgebets?", "Warum befahl Allah dem Propheten, das Buch zu erklären, wenn der Text keiner Erklärung bedurfte?"],
      ["In welchem Vers sagt Allah, dass der Gehorsam gegenüber Seinem Gesandten mit dessen Tod enden würde?", "Wie kannst du behaupten, der Koran sei ewig, wenn du Dutzende Gehorsamsverse für verfallen erklärst?"],
      ["Wie interpretierst du Vers 7:157, wo es heißt, dass der Prophet 'ihnen die schlechten Dinge verbietet'?", "Warum schwor Allah in 4:65 bei Sich Selbst, dass niemand wahren Glauben hat, bis er den Propheten zum Richter nimmt?"],
      ["Wie kann der Prophet ein 'vortreffliches Vorbild' (33:21) sein, wenn wir keinen Zugang zu seinen Taten und Worten haben?", "Was bedeutet das Wort 'Hikmah' (Weisheit) neben dem Buch im Koran, wenn nicht die Sunnah?"],
      ["Wie kann Allah 'Verrichtet das Gebet' in einem bewahrten Text befehlen, wenn die Form des Gebets verloren gegangen wäre?", "Warum nennt Vers 16:44 das, was dem Propheten zur Erklärung des Korans geoffenbart wurde, 'Dhikr'?"],
      ["Wussten Sie, dass die 'Sahifa von Hammam ibn Munabbih' aus dem 1. Jahrhundert erhalten ist und dieselben Hadithe wie Bukhari enthält?", "Wenn die Gefährtenüberlieferung für Hadithe unzuverlässig wäre, wie erreichte Sie dann der Korantext?"],
      ["Ist Ihnen bewusst, dass Sie mit dem Zitat 'Schreibt nichts von mir' anerkennen, dass dieser Hadith über Hadith-Gelehrte authentisch überliefert wurde?", "Warum verschweigen Sie die Berichte, in denen der Prophet ﷺ ausdrücklich befiehlt: 'Schreibt für Abu Shah'?"],
      ["Wie viele Gebete verrichten Sie täglich und wie rechtfertigen Sie, dass andere Koranisten anhand desselben Korans eine völlig andere Zahl vertreten?", "Kennen Sie die von Imam Ash-Shafi'i entwickelten Regeln zur Auflösung scheinbarer Widersprüche?"],
      ["Warum sandte der Prophet ﷺ Mu'adh ibn Jabal als einzelnen Gesandten in den Jemen, wenn Einzelzeugnisse keinen Wert hätten?", "Woher wissen Sie, dass die deutsche Koranübersetzung korrekt ist, ohne den menschlichen Übersetzern zu vertrauen?"],
      ["Wenn Sie nur dem Koran folgen, warum beten Sie mittags 4 Einheiten, wenn die Zahl 4 dafür im Koran gar nicht vorkommt?", "Erkennen Sie an, dass Sie bei jeder Niederwerfung im Gebet beweisen, dass die Sunnah unverzichtbar ist?"]
    ][idx],
    quiz: [
      {
        q: "Was bedeutet die Vollständigkeit des Korans im islamischen Rechtsrahmen?",
        options: [
          "Dass er jedes praktische Detail ohne Erklärungsbedarf auflistet.",
          "Dass er die Grundprinzipien festlegt und die Erklärungsautorität des Propheten ﷺ einsetzt.",
          "Dass er die Pflicht zum Gehorsam gegenüber dem Gesandten aufhebt.",
          "Dass er die mündliche Weitergabe von Riten verbietet."
        ],
        answer: 1,
        explanation: "Die koranische Vollständigkeit besteht darin, universelle Prinzipien festzulegen und die Sunnah als unverzichtbare Erklärungsautorität einzusetzen."
      }
    ],
    conclusion: {
      steps: [
        ["Der Koran ist vollkommen in seinen göttlichen Fundamenten.", "Der Koran befiehlt ausdrücklich, der Erklärung des Gesandten ﷺ zu folgen.", "Die Sunnah abzulehnen bedeutet, der Vollständigkeit des Korans selbst zu ungehorchen."],
        ["Der Koran ist eine universelle und ewige Botschaft.", "Der Befehl zum Gehorsam gegenüber dem Propheten ﷺ ist fester Teil dieser ewigen Botschaft.", "Die authentische Sunnah ist das einzige Mittel, diesen Gehorsam heute auszuüben."],
        ["Die höchste Urteilsmacht gebührt allein Allah.", "Allah befahl die bedingungslose Unterwerfung unter die Urteile Seines Gesandten ﷺ.", "Das prophetische Urteil abzulehnen bedeutet Auflehnung gegen Allahs höchstes Urteil."],
        ["Das koranische Balâgh ist eine aktive, pädagogische und normative Übermittlung.", "Der Koran definiert den Propheten als Lehrer des Buches und höchstes Vorbild.", "Den Gesandten zum Boten zu degradieren widerspricht dem Koran frontal."],
        ["Allah hat Sich verpflichtet, den Dhikr zu bewahren.", "Der koranische Dhikr umfasst die Offenbarung und ihre prophetische Entfaltung.", "Die Hadith-Wissenschaft ist die historische Verwirklichung dieses göttlichen Schutzes."],
        ["Die Aufzeichnung des Hadith begann bereits in der ersten Generation.", "Die großen kanonischen Werke sind der Höhepunkt eines strengen Dokumentationsprozesses.", "Der Mythos vom 200-jährigen Vakuum ist eine widerlegte Unwahrheit."],
        ["Das anfängliche Verbot war umstandsbedingt und präventiv.", "Der Prophet ﷺ erlaubte und befahl die schriftliche Fixierung seiner Sunnah später formell.", "Einen Hadith zu nutzen, um alle Hadithe zu leugnen, ist ein unhaltbarer Widerspruch."],
        ["Der scheinbare Widerspruch löst sich durch die Methode der Gelehrten auf.", "Auslegungsunterschiede sind jedem menschlichen Rechtsverständnis eigen.", "Koranismus ohne Sunnah erzeugt totale Interpretationsanarchie."],
        ["Der Koran verurteilt blinden heidnischen Aberglauben, nicht wahrhaftige Zeugnisse.", "Die Hadith-Methode verlangt stichhaltige Beweise und verlässliche Zeugen.", "Das Handeln nach fundiertem Zeugnis ist ein Grundprinzip des Korans."],
        ["Das Gebet ist die grundlegende praktische Säule des Islam.", "Seine Details stammen ausschließlich aus der Sunnah des Propheten ﷺ.", "Das Gebet zu verrichten und die Sunnah zu leugnen ist ein Widerspruch bei jeder Verbeugung."]
      ][idx],
      finalText: [
        "Die Sunnah konkurriert nicht mit dem Koran: Sie ist die lebendige Anwendung, die der Koran verlangt.",
        "Der Gehorsam gegenüber dem Gesandten starb nicht mit seinem irdischen Ableben.",
        "Das Urteil Allahs und das Urteil Seines Gesandten bilden eine einzige Wahrheit.",
        "Die Übermittlung des Gesandten umfasst den heiligen Text und die Unterweisung in seiner Praxis.",
        "Den heiligen Text zu bewahren bedeutet auch, die Art und Weise zu bewahren, wie er gelebt wird.",
        "Die Sunnah wurde durch Gedächtnis, Schrift und ununterbrochene Praxis bewahrt.",
        "Die Sunnah wurde mit der Billigung und dem Segen des Gesandten ﷺ selbst aufgezeichnet.",
        "Die Hadith-Wissenschaft scheut keine kritische Prüfung: Sie liefert die Werkzeuge zu ihrer Lösung.",
        "Der authentische Hadith liefert die notwendige moralische und praktische Gewissheit, um Allah zu dienen.",
        "Das tägliche Gebet ist das dauerhafte Zeugnis für die Unverzichtbarkeit der Sunnah."
      ][idx],
      punchline: [
        "Wer die Sunnah im Namen des Korans ablehnt, ungehorcht am Ende dem Koran selbst!",
        "Wer den Gehorsam gegenüber dem Propheten für erloschen erklärt, erklärt die Universalität des Korans für erloschen!",
        "Wer 'Nur das Urteil Allahs' ruft, um den Propheten abzulehnen, wiederholt den Trugschluss der Charidschiten!",
        "Wer den Propheten zum Briefträger degradiert, hat nie gelesen, was der Koran über den Propheten sagt!",
        "Wer sagt, die Sunnah sei verloren gegangen, behauptet in Wahrheit, der Koran sei unanwendbar geworden!",
        "Zu sagen, Hadithe seien erst mit Bukhari entstanden, ist so absurd wie zu sagen, die Geschichte sei erst mit Geschichtsbüchern entstanden!",
        "Wer einen Hadith nutzt, um den Hadith zu zerstören, schießt sich selbst ins argumentatorische Knie!",
        "Wer vor den Differenzen des Fiqh in den Koranismus flieht, springt aus einem Wassertropfen in einen Ozean von Widersprüchen!",
        "Wer heidnischen Aberglauben mit der wissenschaftlichen Strenge des Isnâd verwechselt, begeht einen unverzeihlichen Fehler!",
        "Nach der Sunnah zu beten und die Sunnah zu leugnen ist ein Widerspruch bei jeder Niederwerfung!"
      ][idx]
    },
    fallacies: arg.fallacies
  };
});

const fullDeData = {
  ...deData,
  fallaciesToolbox: deFallaciesToolbox,
  arguments: deArgumentsCompiled
};

const outputFilePath = path.join(__dirname, '..', '..', 'js', 'translations', 'de.js');
const fileHeader = `/**
 * DEUTSCHE VOLLSTÄNDIGE UND 100% NATIVE ÜBERSETZUNG (DEUTSCH)
 * Methodisches Handbuch zur Widerlegung des Koranismus — Von Salah Eddine Ahmed (Abou Soulaymane)
 * Doktrinär getreu und ohne jegliche fremdsprachliche Relikte.
 */

window.I18N_DATA = window.I18N_DATA || {};
window.I18N_DATA["de"] = ${JSON.stringify(fullDeData, null, 2)};
`;

fs.writeFileSync(outputFilePath, fileHeader, 'utf8');
console.log('✅ js/translations/de.js erfolgreich in 100% nativem Deutsch generiert !');
