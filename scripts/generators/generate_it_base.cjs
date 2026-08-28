/**
 * GÉNÉRATEUR TRADUCTION ITALIENNE 100% NATIVE (ITALIANO)
 * Traduction intégrale, rigoureuse et doctrinale par NOVA SQUAD.
 */

const fs = require('fs');
const path = require('path');



const itData = {
  code: "it",
  name: "Italien",
  native: "Italiano",
  flagSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 500" class="flag-icon"><rect width="250" height="500" fill="#009246"/><rect width="250" height="500" x="250" fill="#ffffff"/><rect width="250" height="500" x="500" fill="#ce2b37"/></svg>`,
  dir: "ltr",
  fontFamily: "var(--font-main)",
  ui: {
    brandBadge: "MANUALE PRATICO",
    brandTitle: "CONFUTAZIONE DEL CORANISMO",
    brandSubtitle: "Come smascherare e confutare la setta dei coranisti",
    searchBtn: "Cerca",
    searchPlaceholder: "Cerca per tema, versetto, obiezione, analogia...",
    searchModalTitle: "Ricerca rapida nel manuale",
    searchNoResults: "Nessun risultato trovato per questa ricerca.",
    searchShortcutHint: "Premi ESC per chiudere",
    topbarContact: "Contatto",
    topbarLegal: "Licenza e Condivisione",
    topbarBarbahari: "Al-Barbahârî",
    sidebarTitle: "📚 Sommario",
    sidebarCount: "12 sezioni",
    sidebarHome: "🏠 Home / Hub",
    sidebarContact: "✉️ Contatta l'Autore",
    heroTag1: "📖 Manuale Pratico di Confutazione",
    heroTag2: "🌿 Diffusione Pedagogica Aperta",
    heroTitleMain: "Confutazione",
    heroTitleSpan: "del Coranismo",
    heroAuthor: "Di Salah Eddine Ahmed (Abou Soulaymane)",
    heroDesc: "Smonta passo dopo passo le fallacie del coranismo con rigore logico, esempi quotidiani, versetti decisivi e risposte pronte in 30 secondi.",
    btnStartArg1: "Inizia con l'Argomento 1",
    btnSearchModal: "Cerca nel manuale",
    sommaireTitle: "I 10 Grandi Argomenti Decifrati",
    sommaireBadge: "10 Schede Pronte all'Uso",
    cardAdverseThesisPrefix: "Tesi dei coranisti :",
    btnReadCard: "Consulta la scheda",
    btnDownloadPdf: "Scarica il fascicolo PDF originale",
    btnPrintCard: "Stampa / Salva in PDF",
    methodTag: "METODOLOGIA DI DIBATTITO",
    methodTitle: "Il Metodo dei 3 Passi Ineludibili",
    methodStep1Title: "1. Disinnescare la Fallacia",
    methodStep1Desc: "Identifica se l'avversario usa una falsa dicotomia, una generalizzazione indebita o uno spostamento dell'onere della prova.",
    methodStep2Title: "2. L'Analogia Quotidiana",
    methodStep2Desc: "Usa una situazione della vita comune (leggi, medicina, progetti) per evidenziare l'assurdità logica del suo ragionamento.",
    methodStep3Title: "3. La Conseguenza Assurda",
    methodStep3Desc: "Mostra a quale caos teologico e pratico conduce la sua tesi se applicata con rigorosa coerenza.",
    quoteBoxText: "«Rifiutare l'autorità che il testo stesso designa in nome della completezza del testo significa trasformare la completezza in un principio che il testo non ha mai formulato.»",
    quoteBoxAuthor: "— Salah Eddine Ahmed (Abou Soulaymane)",
    sec1Header: "1. INQUADRAMENTO DOTTRINALE E CONTESTO",
    sec2Header: "2. LA TESI AVVERSA E I SUOI TESTI",
    sec2ThesisLabel: "Tesi sostenuta dai coranisti :",
    sec2VersesLabel: "Versetti che citano (fuori contesto) :",
    sec2RealQuestionLabel: "La vera questione fondamentale :",
    sec3Header: "3. IL NODO LOGICO E LE DISTINZIONI CHIAVE",
    sec3GeneralRuleLabel: "Regola generale di ragionamento :",
    sec3ErrorLabel: "L'errore logico da evitare :",
    sec4Header: "4. IL PRINCIPIO CENTRALE",
    sec4FormalSchemeLabel: "Schema formale di dimostrazione :",
    sec4ExplanationLabel: "Spiegazione dottrinale :",
    sec4TestLabel: "Test logico decisivo :",
    sec5Header: "5. ARCHITETTURA CORANICA",
    sec5ConsequenceLabel: "Conseguenza dottrinale ineludibile :",
    sec6Header: "6. ANALOGIE PEDAGOGICHE QUOTIDIANE",
    sec6ScenarioLabel: "Situazione concreta :",
    sec6LogicBoxLabel: "Parallelismo logico :",
    sec6LessonLabel: "Lezione da trarre :",
    sec7Header: "7. RISPOSTE PRONTE PER IL DIALOGO",
    sec7QuickResponseLabel: "⚡ Risposta in 30 secondi (chiara e perentoria) :",
    sec7DevelopedResponseLabel: "🗣️ Risposta sviluppata (per approfondire) :",
    sec8Header: "8. OBIEZIONI CLASSICHE E RISPOSTE",
    sec8DirectQuestionsLabel: "Domande di inquadramento diretto :",
    sec9Header: "9. CONCLUSIONE IN CATENA LOGICA",
    quizTitle: "8. VALUTA LA TUA COMPRENSIONE",
    quizBadge: "Quiz interattivo",
    btnCheckAnswer: "Verifica la risposta",
    btnNextQuestion: "Prossima domanda ➔",
    btnRestartQuiz: "Ricomincia il quiz",
    quizFeedbackCorrect: "✅ Esatto! Ottima deduzione.",
    quizFeedbackIncorrect: "❌ Risposta errata. Rileggi la spiegazione qui sotto :",
    portalWarningBadge: "AVVERTIMENTO DEI PRIMI SAPIENTI CONTRO CHI RIFIUTA LA TRASMISSIONE",
    portalTitle: "Parole dell'Imam Al-Barbahârî (رحمه الله)",
    portalQuoteTransLabel: "Traduzione del senso :",
    portalQuoteText: "Se senti un uomo a cui viene citata una tradizione (un racconto trasmesso) rifiutarla dicendo: \"Lascia stare questo e portaci solo il Corano\", non dubitare affatto che si tratti di un uomo intriso di eresia. Alzati dalla sua assemblea e abbandonalo!",
    portalAuthorBadge: "✍️ Imam Al-Barbahârî (m. 329 H)",
    portalSourceRef: "Fonte : Sharḥ As-Sunnah (Punto 135)",
    portalEnterBtn: "ACCEDI AL MANUALE DI CONFUTAZIONE",
    portalDisclaimer: "Come smascherare e confutare la setta dei coranisti • Di Salah Eddine Ahmed (Abou Soulaymane) • Uso pedagogico libero citando la fonte",
    argBadgeGiant: "ARGOMENTO",
    btnDownloadFascicule: "Scarica il fascicolo originale (PDF)",
    btnOpenPrint: "Stampa / Salva in PDF",
    tocSummary: "Sommario della scheda :",
    tocCadrage: "1. Inquadramento",
    tocAdverse: "2. Tesi Avversa",
    tocNoeud: "3. Nodo Logico",
    tocPrincipe: "4. Principio Centrale",
    tocArchi: "5. Architettura Coranica",
    tocAnalogies: "6. Analogie",
    tocReponses: "7. Risposte Pronte",
    tocObjections: "8. Obiezioni",
    tocConclusion: "9. Conclusione",
    tocQuiz: "10. Quiz",
    navPrevArg: "Argomento precedente",
    navNextArg: "Argomento successivo",
    navBackSummary: "Torna al sommario",
    navEndManual: "Fine del Manuale",
    contactModalTitle: "Contatta l'Autore",
    contactAuthorHeader: "Autore dell'Opera",
    authorName: "Salah Eddine Ahmed (Abou Soulaymane)",
    contactAuthorBio: "Ricercatore ed educatore nelle scienze islamiche, impegnato nella difesa metodica della Sunna profetica e nella confutazione pedagogica delle deviazioni dottrinali contemporanee.",
    contactBookTitleLabel: "Titolo dell'opera di riferimento :",
    contactBookTitleValue: "Comment démasquer et réfuter la secte des coranistes — Méthode, arguments, objections et réponses.",
    contactEmailNotice: "Per scambi dottrinali, suggerimenti pedagogici, conferenze o traduzioni :",
    legalModalTitle: "⚖️ Condizioni di Condivisione, Autore e Privacy",
    legalSharingHeader: "Condizioni di Diffusione e Condivisione Pedagogica",
    legalSharingMain: "Diffusione e Condivisione Pedagogica Aperta",
    legalSharingP1: "Questo contenuto può essere condiviso gratuitamente e riprodotto per scopi personali, pedagogici e non commerciali, a condizione di mantenere inalterata la fonte e l'autore.",
    legalAllowedTitle: "✅ Usi espressamente autorizzati :",
    legalAllowedBullet1: "Download, stampa, lettura e condivisione gratuita delle schede di studio.",
    legalAllowedBullet2: "Utilizzo in lezioni, circoli di studio, dibattiti e social network.",
    legalAllowedBullet3: "È severamente vietata qualsiasi forma di sfruttamento commerciale o alterazione snaturante del testo senza previo accordo.",
    legalPrivacyHeader: "Dati Tecnici e Privacy",
    legalPrivacyMain: "Informativa sulla Privacy Trasparente e Conforme",
    legalPrivacyP1: "Il sito non richiede la creazione di alcun account e non raccoglie volontariamente dati personali tramite moduli. I dati tecnici trattati dal server rispettano i principi europei sulla riservatezza.",
    legalPrivacyBullet1: "Nessun cookie pubblicitario di terze parti : Zero pixel di tracciamento commerciale.",
    legalPrivacyBullet2: "Caratteri e risorse : Caricamento sicuro di Google Fonts (Inter, Outfit, Amiri).",
    legalCreditsHeader: "Dettagli del Libro :",
    legalCreditsBookTitle: "Come smascherare e confutare la setta dei coranisti — Metodo, argomenti, obiezioni e risposte",
    footerSubtitle: "10 grandi argomenti esaminati e confutati metodicamente",
    footerBtnLegal: "⚖️ Condivisione, Licenza e Privacy",
    footerBtnContact: "✉️ Contatta l'Autore",
    footerBtnPortal: "📜 Parole di Al-Barbahârî",
    footerContactLabel: "Contatto :",
    btnShare: "Condividi",
    btnCopySection: "Copia questa sezione",
    btnCopy: "Copia",
    copied: "Copiato!",
    shareModalTitle: "📤 Condividi questa scheda",
    shareModalDesc: "Condividi questo argomento per lo studio e la difesa della Sunna :",
    shareCardTitle: "Condividi questa confutazione",
    shareCardDesc: "Diffondi questa scheda per difendere la Sunna su WhatsApp, Telegram o sui social network.",
    toastSectionCopied: "✅ Sezione copiata negli appunti!",
    toastLinkCopied: "✅ Link copiato negli appunti!",
    navFallacies: "Scatola degli attrezzi — Riconoscere le fallacie prima di dibattere",
    fallaciesTitle: "SCATOLA DEGLI ATTREZZI",
    fallaciesBadgeTitle: "FALLACIE RILEVATE IN QUESTO ARGOMENTO :",
    viewFallacyDetail: "Visualizza analisi dettagliata ▼",
    hideFallacyDetail: "Nascondi analisi ▲",
    btnOpenToolbox: "Consulta nella Scatola degli attrezzi",
    footerVisitsLabel: "Visite totali :",
    footerVisitsPrivacy: "100% Anonimo • GDPR",
    footerVisitsTooltip: "Contatore di visite anonimo e conforme alla privacy (GDPR - 0 cookie)",
    navPreface: "Prefazione dell'Autore",
    navIntro: "Chi sono i coranisti?"
  },
  preface: {
    badge: "APERTURA DEL LIBRO",
    title: "PREFAZIONE DELL'AUTORE",
    subtitle: "Perché questo manuale metodico di confutazione?",
    introTag: "PRIMA DI INIZIARE",
    basmala: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ (Nel Nome di Allah, il Compassionevole, il Misericordioso)",
    sections: [
      {
        type: "adverse",
        header: "PERCHÉ QUESTO LIBRO?",
        title: "Una constatazione personale e metodologica",
        paragraphs: [
          "Quest'opera è nata da una constatazione personale che mi ha profondamente rattristato.",
          "Nel corso degli anni, ho visto conoscenti cadere in quello che oggi viene definito 'coranismo' (solo il Corano): una corrente che pretende di tornare al Corano, ma che nella pratica demolisce e rigetta l'autorità normativa della Sunna profetica.",
          "Spesso ciò non deriva da una volontà cosciente di respingere il Profeta ﷺ. Inizia con una carenza di conoscenze fondamentali: nelle scienze del Hadith, nelle scienze coraniche, nella metodologia di trasmissione, nella linguistica araba e nella storia dei testi."
        ]
      },
      {
        type: "retenir",
        header: "QUANDO I DUBBI DIVENTANO DOGMI",
        title: "Dalla perplessità alla deviazione dottrinale",
        paragraphs: [
          "Poi arrivano le ambiguità polemiche: a una persona viene presentato un racconto decontestualizzato, un testo di cui ignora il grado di autenticità, una traduzione deformata o una controversia emotiva concepita per provocare disagio.",
          "Le vengono sottoposti argomenti come l'età di 'Â'ishah (che Allah sia compiaciuto di lei), alcuni racconti medici, la stregoneria, norme giuridiche o il viaggio notturno (Al-Isrâ' wal-Mi'râj).",
          "Senza strumenti di analisi critica, il dubbio si insinua e si trasforma in un dogma completo:",
          "«Questo hadith mi sembra strano» ➔ «Forse gli hadith non sono affidabili» ➔ «Forse la Sunna è superflua» ➔ «Solo il Corano è sufficiente».",
          "Finiscono per selezionare versetti isolati, forzare il senso dei vocaboli e ridefinire 'Obbedite al Messaggero' per spogliare il Profeta ﷺ di ogni reale autorità."
        ]
      },
      {
        type: "analogie",
        header: "UN'IMMENSA TRADIZIONE DI TRASMISSIONE",
        title: "Una scienza di verifica senza eguali",
        paragraphs: [
          "La Sunna non ci è pervenuta perché alcuni individui hanno deciso secoli dopo di riempire libri con racconti a caso! Dietro il corpus del Hadith si trova il sistema di critica biografica e delle catene di trasmissione (Isnâd e Rijâl) più rigoroso della storia umana.",
          "Generazioni di sapienti hanno esaminato minuziosamente i trasmettitori: la loro integrità morale, la loro memoria, i loro maestri, i loro contemporanei, viaggiando per mesi interi per verificare una singola frase.",
          "Liquidare questo colossale patrimonio scientifico dicendo 'sono solo uomini che raccontano storie' non è spirito critico: è una totale ignoranza delle scienze del Hadith."
        ],
        distinctions: [
          {
            term: "CRITICA DEI TRASMETTITORI (RIJÂL)",
            desc: "Integrità, precisione mnemonica, incontri storici e condizioni esatte di ricezione."
          },
          {
            term: "CRITICA DEI TESTI (MUTÛN)",
            desc: "Confronto delle varianti, individuazione dei difetti occulti ('Ilal) e distinzione tra l'autentico e il contraffatto."
          }
        ]
      },
      {
        type: "cadrage",
        header: "E COME CI È ARRIVATO IL CORANO?",
        title: "La medesima catena umana di trasmissione",
        paragraphs: [
          "Una domanda cruciale che ogni coranista deve affrontare: Attraverso chi ti è giunto il Corano?",
          "L'esemplare fisico del Corano (il Mushaf) non ti è stato consegnato direttamente dall'arcangelo Gabriele. Ci è giunto attraverso i Compagni, i Successori, i lettori e una trasmissione generazionale ininterrotta.",
          "La lettura di Hafs da 'Âsim ci è pervenuta mediante catene umane di uomini. La questione logica non è mai 'ci sono anelli umani?', ma 'qual è il grado di certezza e verifica di questa trasmissione?'."
        ]
      },
      {
        type: "retenir",
        header: "UNA RESPONSABILITÀ PERSONALE",
        title: "Perché il silenzio non è più un'opzione",
        paragraphs: [
          "Di fronte al moltiplicarsi di discorsi seducenti sui social network che destabilizzano giovani credenti privi di basi metodologiche, tacere diventa una colpa.",
          "Questo libro non è stato concepito per alimentare polemiche sterili né per offendere nessuno. È stato strutturato come uno strumento pedagogico accessibile a tutti, per offrire risposte argomentate, logiche e fondate sulle fonti autentiche dell'Islam.",
          "Chiedo ad Allah di fare di questo lavoro un motivo di chiarezza e beneficio per chiunque cerchi la verità con rigore e onestà."
        ]
      }
    ]
  },
  intro: {
    badge: "RIFERIMENTI STORICI",
    title: "CHI SONO I CORANISTI?",
    subtitle: "Origini, fondamenti e anatomia di una deviazione dottrinale",
    introTag: "COMPRENDERE IL FENOMENO",
    sections: [
      {
        type: "cadrage",
        header: "GENESI E CONTESTO STORICO",
        title: "Un'eresia moderna con radici antiche",
        paragraphs: [
          "Il 'coranismo' contemporaneo (Ahl al-Qur'ân / Qur'aniyyûn) si presenta spesso come un movimento moderno o riformatore. In realtà, la pretesa di voler fare a meno della Sunna era già stata denunciata dal Profeta ﷺ in termini profetici espliciti.",
          "Il Profeta ﷺ disse: «Si avvicina il tempo in cui un uomo sazio, adagiato sul suo divano, dirà: 'Attenetevi solo a questo Corano; ciò che vi trovate di lecito consideratelo lecito, e ciò che vi trovate di illecito consideratelo illecito'. Ebbene, in verità ciò che il Messaggero di Allah ha proibito è come ciò che Allah ha proibito!» (Narrato da Abu Dawud, At-Tirmidhi e Ibn Majah, autentico).",
          "Storicamente, alcune sette marginali (certe frange estreme di mu'taziliti e kharigiti) tentarono di rigettare parti della Sunna, ma il rigetto totale e categorico dell'intero corpus del Hadith è un fenomeno moderno sorto alla fine del XIX secolo sotto l'influenza della colonizzazione e di un complesso d'inferiorità intellettuale."
        ]
      },
      {
        type: "adverse",
        header: "IL MECCANISMO PSICOLOGICO E DOTTRINALE",
        title: "Dalla difficoltà di comprensione al rigetto deliberato",
        paragraphs: [
          "Il metodo del coranismo si basa su una dinamica psicologica prevedibile:",
          "1. Lo shock emotivo : Si seleziona un hadith autentico complesso e lo si presenta a un pubblico moderno senza contesto né spiegazioni linguistiche.",
          "2. La generalizzazione indebita : Dalla mancata comprensione di un testo particolare, si deduce falsamente che tutti gli Hadith siano inaffidabili.",
          "3. La falsa alternativa : Si pone il dilemma artificioso: «Preferisci seguire la perfetta Parola di Allah o parole di uomini raccolte due secoli dopo?»",
          "4. Il vuoto ermeneutico : Rifiutando la Sunna, il coranista è costretto a inventare di sana pianta il senso dei versetti, cadendo in interpretazioni fantasiose in cui la preghiera, il digiuno e il pellegrinaggio perdono ogni realtà storica."
        ]
      },
      {
        type: "retenir",
        header: "CONSEGUENZE TEOLOGICHE INEVITABILI",
        title: "Il crollo della pratica islamica",
        paragraphs: [
          "Il rigetto della Sunna non semplifica la religione: la distrugge nella sua applicazione concreta:",
          "• Impossibilità di pregare : Il Corano ordina la preghiera (As-Salât), ma non menziona in nessun punto quante unità (rak'at) compongono la preghiera del mezzogiorno o del tramonto, né le formule esatte di prostrazione.",
          "• Impossibilità di pagare la Zakat : Il Corano ordina l'imposta purificatrice, ma le percentuali esatte (il 2,5%) e le soglie minime di imposizione (Nisâb) provengono esclusivamente dalla Sunna profetica.",
          "• Impossibilità di compiere il Hajj : I riti del pellegrinaggio (numero di giri attorno alla Ka'bah, Sa'y tra Safa e Marwa, sosta ad 'Arafat) sono dettagliati dalla pratica vissuta del Profeta ﷺ."
        ]
      },
      {
        type: "analogie",
        header: "LA REGOLA D'ORO DEL DIBATTITO",
        title: "Costringere a confrontarsi con la coerenza della propria tesi",
        paragraphs: [
          "Per confutare un coranista con benevolenza e fermezza, la regola d'oro consiste nel porlo di fronte alle conseguenze pratiche della sua stessa posizione.",
          "Non limitarti a difendere gli Hadith: chiedigli di spiegare come pratica l'Islam nella sua vita quotidiana basandosi esclusivamente sul testo coranico.",
          "Vedrai immediatamente come sarà costretto a ricorrere a congetture personali, a ridefinire le parole o ad ammettere che dipende dalla pratica tramandata di generazione in generazione... vale a dire dalla Sunna stessa!"
        ]
      }
    ]
  }
};

module.exports = itData;
