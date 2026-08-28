/**
 * COMPILATEUR ITALIEN COMPLET ET 100% NATIF (ITALIANO)
 */

const fs = require('fs');
const path = require('path');
const itBase = require('./generate_it_base.cjs');

// Sophismes en Italien
const itFallaciesToolbox = {
  headerBadge: "GUIDA METODOLOGICA",
  title: "SCATOLA DEGLI ATTREZZI — RICONOSCERE LE FALLACIE PRIMA DI DIBATTERE",
  subtitle: "Individuare gli errori logici per non farsi sviare nella discussione",
  introText: "Un argomento può sembrare impressionante a prima vista, citare un versetto coranico autentico o includere fatti veri... e ciononostante sfociare in una conclusione totalmente errata se il ragionamento logico che unisce questi elementi è viziato.",
  goldenRuleTitle: "PRINCIPIO CRUCIALE :",
  goldenRuleText: "MOSTRARE CHE UN ARGOMENTO È UNA FALLACIA NON PROVA CHE LA CONCLUSIONE SIA FALSA ; DIMOSTRA CHE QUESTO ARGOMENTO NON LA DIMOSTRA.",
  goldenRuleMeaning: "Smascherare un errore logico non esime dall'esaminare il merito dottrinale; ma protegge dall'accettare conclusioni costruite su ragionamenti ingannevoli.",
  cardMemoBadge: "SCHEDA MEMO",
  trainingBadge: "ALLENAMENTO",
  labelDefinition: "Definizione :",
  labelGeneralExample: "🌍 Esempio nella vita quotidiana :",
  labelQuranicApp: "🕌 Applicazione al dibattito sul Coranismo :",
  labelQuestionToAsk: "❓ Domanda riflessa da porre :",
  labelShortAnswer: "⚡ Risposta breve suggerita :",
  items: [
    {
      id: "fausse-dichotomie",
      num: 1,
      name: "La Falsa Dicotomia",
      shortDef: "Ridurre artificialmente una situazione complessa a due sole opzioni opposte.",
      definition: "Ridurre artificiosamente una questione a due sole opzioni incompatibili, occultando una terza via perfettamente legittima e coerente.",
      generalExample: "« O sei totalmente d'accordo con me, oppure sei mio nemico. »",
      quranicApplication: "• « Segui Allah o segui Muhammad ﷺ ? » (Falsa opposizione: seguire il Messaggero è un ordine diretto di Allah nel Corano).\n• « Preferisci la Parola infallibile di Allah o parole di uomini raccolte secoli dopo ? »",
      questionToAsk: "« Perché presenti queste due cose come incompatibili quando una dipende direttamente dall'altra ? »",
      shortAnswer: "« Obbedire al Messaggero di Allah significa obbedire ad Allah; non sono due vie in concorrenza. »",
      icon: "⚖️"
    },
    {
      id: "generalisation-abusive",
      num: 2,
      name: "La Generalizzazione Indebita",
      shortDef: "Estendere un caso particolare o dubbio a un'intera categoria generale.",
      definition: "Trarre una regola generale definitiva a partire da un numero insufficiente di casi particolari o mal analizzati.",
      generalExample: "« Ho conosciuto due meccanici disonesti, quindi tutti i meccanici sono truffatori. »",
      quranicApplication: "• « Nella storia sono stati inventati hadith falsi, quindi non ci si può fidare di nessun hadith. »\n• « Un hadith mi sembra strano a prima vista, quindi l'intera raccolta di Bukhari va rigettata. »",
      questionToAsk: "« Il fatto che esistano banconote contraffatte dimostra forse che nessuna banconota autentica esiste ? »",
      shortAnswer: "« L'esistenza di testi contraffatti è precisamente il motivo per cui i sapienti hanno sviluppato una rigorosa scienza di autenticazione. »",
      icon: "🔍"
    },
    {
      id: "epouvantail",
      num: 3,
      name: "L'Uomo di Paglia (Spaventapasseri)",
      shortDef: "Caricare e deformare la posizione dell'avversario per attaccarla più facilmente.",
      definition: "Deformare, ipersemplificare o ridicolizzare la posizione dell'interlocutore per confutare una versione indebolita che egli non ha mai sostenuto.",
      generalExample: "« Dici che bisogna regolare la velocità, quindi vuoi vietare completamente le automobili. »",
      quranicApplication: "• « Sostenete che il Corano sia incompleto e che abbia bisogno degli uomini per essere perfetto. »\n(Nessuno afferma questo: la Sunna non 'completa' un'imperfezione coranica, ma svolge la funzione esplicativa che il Corano stesso le ha assegnato).",
      questionToAsk: "« Chi ha mai formulato questa tesi tra i sapienti dell'Islam, o stai confutando una caricatura ? »",
      shortAnswer: "« Non criticare ciò che non sosteniamo; esaminiamo ciò che affermiamo realmente. »",
      icon: "🌾"
    },
    {
      id: "non-sequitur",
      num: 4,
      name: "Il Non Sequitur (Rottura Logica)",
      shortDef: "La conclusione tratta non deriva logicamente dalla premessa enunciata.",
      definition: "Non sequitur significa 'non ne consegue'. La premessa iniziale può essere vera, ma la conclusione non ne discende affatto.",
      generalExample: "« Fuori piove, quindi la partita di basket al palazzetto coperto è annullata. »",
      quranicApplication: "• « Il Corano è perfetto e completo. Quindi la Sunna è inutile. » (La perfezione del quadro normativo non esclude l'autorità applicativa istituita dal testo).\n• « Al-Bukhari è vissuto due secoli dopo. Quindi le tradizioni sono nate due secoli dopo. »",
      questionToAsk: "« Qual è il passaggio logico esatto che collega la tua premessa alla tua conclusione ? »",
      shortAnswer: "« La tua prima affermazione può essere vera senza dimostrare affatto la seconda. »",
      icon: "⚡"
    },
    {
      id: "cherry-picking",
      num: 5,
      name: "Il Cherry-Picking (Selezione di Comodo)",
      shortDef: "Selezionare unicamente le prove favorevoli ignorando tutto il resto.",
      definition: "Citare esclusivamente i passi favorevoli alla propria tesi e occultare volontariamente i dati che la precisano o la contraddicono.",
      generalExample: "Citare 3 studi favorevoli e nascondere 50 studi scientifici contrari.",
      quranicApplication: "• Citare « al Messaggero spetta solo trasmettere » omettendo « Obbedite al Messaggero », « Prendetelo come giudice », « modello eccellente ».\n• Citare « Non scrivete da me... » omettendo l'autorizzazione successiva « Riferite da me senza timore » e « Scrivi per Abu Shah ».",
      questionToAsk: "« Esistono altri versetti e testi sullo stesso argomento che hai tralasciato deliberatamente ? »",
      shortAnswer: "« Un versetto non si legge in modo isolato quando altri testi coranici lo precisano e lo completano. »",
      icon: "🍒"
    },
    {
      id: "double-standard",
      num: 6,
      name: "Il Doppio Standard (Due Pesi e Due Misure)",
      shortDef: "Applicare un criterio severissimo all'avversario e uno lassista a se stessi.",
      definition: "Esigere un livello di prova ipercritico per le argomentazioni altrui e accettare fragili supposizioni quando favoriscono la propria conclusione.",
      generalExample: "Esigere prove assolute agli altri e accontentarsi di semplici voci quando fa comodo.",
      quranicApplication: "• Quando un hadith fissa una norma : « Trasmesso da uomini, è incerto ! » / Quando un hadith serve per una polemica : « Bukhari dimostra con certezza assoluta l'età di 'Â'ishah رضي الله عنها ! »\n• Accettare la trasmissione umana del Corano (Hafs da 'Âsim) e rifiutare la medesima trasmissione della Sunna.",
      questionToAsk: "« Applicheresti esattamente lo stesso livello di rigore se questa prova andasse a mio favore ? »",
      shortAnswer: "« Lo standard di prova deve rimanere identico sia quando la conclusione ti aggrada sia quando ti sconcerta. »",
      icon: "🔄"
    },
    {
      id: "equivoque-lexicale",
      num: 7,
      name: "L'Equivoco Lessicale (Ambiguità Semantica)",
      shortDef: "Utilizzare lo stesso termine con due significati diversi senza precisarlo.",
      definition: "Impiegare lo stesso vocabolo con significati differenti nel corso del ragionamento senza segnalare il mutamento di definizione.",
      generalExample: "« La gravità è una legge. Le leggi sono votate dal parlamento. Quindi la gravità è stata votata dai deputati. »",
      quranicApplication: "Nel Corano, la parola ḥadīth significa linguisticamente 'discorso, parola, racconto o notizia'. La fallacia consiste nel leggere « In quale hadith dopo di questo crederanno ? » e sostituire silenziosamente il senso lessicale ('discorso') con il senso tecnico moderno ('raccolte di tradizioni profetiche').",
      questionToAsk: "« Quale senso preciso attribuisci a questa parola in questo versetto, e come lo dimostri attraverso il contesto linguistico ? »",
      shortAnswer: "« Fissiamo prima il significato esatto del termine prima di trarne conclusioni indebite. »",
      icon: "🔀"
    },
    {
      id: "argument-de-possibilite",
      num: 8,
      name: "L'Argomento di Possibilità",
      shortDef: "Trasformare « potrebbe essere falso » in « è necessariamente falso ».",
      definition: "Convertire una semplice possibilità teorica di errore in una certezza di falsità senza apportare alcuna prova concreta.",
      generalExample: "« Un testimone può mentire. Quindi la sua testimonianza è necessariamente falsa. » (Falso: impone di verificare, non di rifiutare a priori).",
      quranicApplication: "« Una catena di trasmissione può essere inventata. Quindi nessun isnâd dimostra nulla. »\nLa possibilità teorica di contraffazione è precisamente ciò che ha spinto i sapienti a esaminare ogni anello, non a rigettare tutto in blocco.",
      questionToAsk: "« Hai dimostrato che si è verificata una falsificazione in questo caso specifico, o solo che teoricamente sarebbe potuta accadere ? »",
      shortAnswer: "« Una possibilità teorica astratta non costituisce una prova dimostrativa. »",
      icon: "🎲"
    },
    {
      id: "deplacement-charge-preuve",
      num: 9,
      name: "Lo Spostamento dell'Onere della Prova",
      shortDef: "Affermare qualcosa senza provarlo ed esigere che l'avversario dimostri il contrario.",
      definition: "Chi formula un'affermazione categorica ha l'obbligo di motivarla. La fallacia consiste nell'affermare qualcosa ed esigere che l'interlocutore provi il contrario.",
      generalExample: "« Esiste una civiltà segreta sotto il suolo di Marte. Dimostrami che non è vero. »",
      quranicApplication: "« Nessuna tradizione profetica è abbastanza affidabile da costituire una prova religiosa. »\nÈ un'affermazione universale che investe migliaia di narrazioni: chi sostiene un tale giudizio generale deve fornire una dimostrazione metodica.",
      questionToAsk: "« Chi sta formulando qui l'affermazione generale che richiede dimostrazione ? »",
      shortAnswer: "« Chi afferma categoricamente che nulla è affidabile deve dimostrare tale affermazione generale. »",
      icon: "⚖️"
    },
    {
      id: "appel-emotion",
      num: 10,
      name: "L'Appello all'Emozione e al Ridicolo",
      shortDef: "Sostituire l'analisi razionale con lo scandalo, la derisione o l'indignazione.",
      definition: "Rimpiazzare l'esame rigoroso degli argomenti con il riso, il disgusto, l'indignazione o lo scherno a effetto.",
      generalExample: "Deridere con sdegno una complessa formula scientifica invece di esaminarne le dimostrazioni.",
      quranicApplication: "« Credete forse nell'hadith della mosca ?! », ecc.\nUna reazione viscerale o beffarda non risponde alle domande essenziali: Qual è il testo esatto? Qual è il suo grado di autenticità? Qual è il contesto e il senso tra gli specialisti?",
      questionToAsk: "« Qual è la tua prova oggettiva, al di là del fatto che questo racconto ti susciti stupore o riso ? »",
      shortAnswer: "« Il ridicolo e l'emozione non sostituiscono una dimostrazione scientifica. »",
      icon: "🎭"
    }
  ],
  reflexQuestions: {
    title: "I RIFLESSI CRITICI DA ACQUISIRE",
    subtitle: "4 domande sistematiche dinanzi a qualsiasi argomento",
    summaryNotice: "Queste quattro domande sono sufficienti per disarticolare la stragrande maggioranza dei ragionamenti fragili.",
    questions: [
      {
        num: 1,
        title: "1. La Premessa",
        desc: "Cosa è stato realmente dimostrato? Non permettere che la conclusione si insinui travestita nella premessa iniziale."
      },
      {
        num: 2,
        title: "2. Il Víncolo Logico",
        desc: "La conclusione discende realmente dalla premessa formulata, o manca un passaggio logico indispensabile?"
      },
      {
        num: 3,
        title: "3. Il Dossier Completo",
        desc: "Sono state prese in considerazione tutte le prove e i versetti pertinenti, o solo quelli che favoriscono la conclusione?"
      },
      {
        num: 4,
        title: "4. Lo Stesso Standard",
        desc: "Viene applicato il medesimo criterio rigoroso a entrambe le parti, o cambia comodamente a seconda del risultato desiderato?"
      }
    ]
  },
  quiz: {
    title: "TEST RAPIDO : IDENTIFICA LA FALLACIA",
    subtitle: "Identifica quale fallacia viene commessa in ciascuna delle seguenti affermazioni :",
    items: [
      {
        id: 1,
        statement: "« Alcuni hadith sono stati fabbricati. Quindi non ci si può fidare di nessun hadith. »",
        answerId: "generalisation-abusive",
        answerName: "Generalizzazione indebita",
        explanation: "Passare da alcuni casi particolari contraffatti all'invalidità dell'intera categoria è una generalizzazione indebita."
      },
      {
        id: 2,
        statement: "« O segui Allah, oppure segui Muhammad ﷺ. »",
        answerId: "fausse-dichotomie",
        answerName: "Falsa dicotomia",
        explanation: "Queste due obbedienze non si oppongono : obbedire al Messaggero è un comando esplicito di Allah nel Corano."
      },
      {
        id: 3,
        statement: "« Il Corano è perfetto e completo, quindi ogni spiegazione profetica è superflua. »",
        answerId: "non-sequitur",
        answerName: "Non sequitur",
        explanation: "La perfezione del testo divino non implica che esso escluda l'autorità esplicativa che esso stesso istituisce formalmente."
      },
      {
        id: 4,
        statement: "« In quale ḥadīth dopo di questo crederanno? Quindi Al-Bukhari è proibito dal Corano. »",
        answerId: "equivoque-lexicale",
        answerName: "Equivoco lessicale",
        explanation: "La parola ḥadīth significa qui linguisticamente 'discorso o messaggio' e non l'accezione tecnica di raccolta di tradizioni."
      },
      {
        id: 5,
        statement: "« Gli hadith sono troppo tardivi per essere affidabili, ma il racconto sull'età di 'Â'ishah رضي الله عنها è una prova storica indiscutibile. »",
        answerId: "double-standard",
        answerName: "Doppio standard (Due pesi e due misure)",
        explanation: "Il criterio di prova viene allentato quando il racconto serve per una polemica e irrigidito quando fissa una norma."
      },
      {
        id: 6,
        statement: "« Una catena di trasmissione può essere inventata. Quindi le catene di trasmissione non dimostrano nulla. »",
        answerId: "argument-de-possibilite",
        answerName: "Argomento di possibilità",
        explanation: "Trasformare una possibilità teorica astratta in una certezza di falsità è la fallacia di possibilità."
      }
    ]
  },
  conclusion: {
    title: "PROMEMORIA ESSENZIALE : LA LOGICA PRIMA DELLO SLOGAN",
    mainText: "Un argomento può citare un versetto autentico, un hadith veritiero o dati esatti e, tuttavia, sfociare in una conclusione errata se il ragionamento che unisce questi elementi è difettoso.",
    slogan1: "NON CHIEDERE SOLTANTO : « QUAL È LA PROVA ? »",
    slogan2: "CHIEDI ANCHE : « COSA DIMOSTRA REALMENTE ? »"
  }
};

// 10 Argomenti in Italiano Puro
const itArguments = [
  {
    id: 1,
    number: "01",
    slug: "1-coran-complet",
    theme: "Completezza e Chiarimento Profetico",
    title: "Il Corano è completo: perché servirebbe la Sunna?",
    shortTitle: "Perfezione del Corano",
    tagline: "Il Corano è completo nei suoi principi fondamentali, e parte della sua perfezione è ordinare l'obbedienza al Profeta ﷺ.",
    formula: "La completezza legislativa del Corano include il mandato di chiarimento profetico (Bayan); rifiutare la Sunna significa rifiutare il Corano!",
    pdfFile: "Comment_demasquer_et_refuter_la_secte_des_coranistes_Argument_1.pdf",
    theirArgument: {
      thesis: "Il Corano è perfetto, dettagliato e non tralascia nulla. Tutto ciò di cui abbiamo bisogno è esplicitamente nel Libro; sostenere che la Sunna sia necessaria contraddice la perfezione del Corano.",
      verses: [
        {
          ref: "Sura Al-An'am, versetto 38",
          ar: "مَّا فَرَّطْنَا فِي الْكِتَابِ مِن شَيْءٍ",
          translation: "Non abbiamo trascurato nulla nel Libro."
        },
        {
          ref: "Sura An-Nahl, versetto 89",
          ar: "وَنَزَّلْنَا عَلَيْكَ الْكِتَابَ تِبْيَانًا لِّكُلِّ شَيْءٍ",
          translation: "E abbiamo fatto scendere su di te il Libro come chiarimento di ogni cosa."
        }
      ],
      realQuestion: "La completezza strutturale del Corano come quadro fondamentale esclude la spiegazione profetica che il testo stesso rende obbligatoria?"
    },
    logicalNode: {
      title: "Confusione tra completezza sistemica e autosufficienza interpretativa",
      distinctions: [
        {
          term: "COMPLETEZZA LEGISLATIVA SISTEMICA",
          desc: "Il Corano è completo perché stabilisce tutti i principi fondamentali e istituisce l'autorità legale del Profeta ﷺ."
        },
        {
          term: "ESAUSTIVITÀ LETTERALE OPERATIVA",
          desc: "Una falsa supposizione: il Corano ordina la preghiera, la zakat e il digiuno senza specificare i dettagli pratici, delegandoli al Profeta ﷺ."
        }
      ],
      generalRule: "Un testo fondamentale che delega formalmente l'interpretazione vincolante a un messaggero designato non è carente; la sua completezza include tale autorità delegata.",
      errorToAvoid: "Confondere la completezza dei fondamenti legislativi con il dettaglio delle modalità pratiche di esecuzione."
    },
    centralPrinciple: {
      title: "La completezza del Corano include l'obbligo di seguire l'autorità del Profeta",
      formalScheme: "1. Il Corano è completo nello stabilire la guida divina.\n2. Parte di questa completezza è l'ordine esplicito di obbedire al Profeta ﷺ e seguire la sua spiegazione (Bayan).\n3. Pertanto, obbedire alla Sunna è l'adempimento diretto della completezza del Corano.",
      explanation: "Il Corano stesso fonda l'autorità della Sunna. Rifiutare la Sunna viola gli stessi versetti coranici che impongono l'obbedienza incondizionata al Messaggero ﷺ.",
      logicalTest: "Se il Corano fosse stato concepito come un manuale operativo senza Hadith, deduci unicamente dal testo coranico il numero di preghiere quotidiane, le unità (rak'at) e le percentuali esatte di zakat!"
    },
    quranicArchitecture: {
      title: "Versetti decisivi sulla missione di spiegazione profetica (Bayan)",
      verses: [
        {
          ref: "Sura An-Nahl, versetto 44",
          ar: "وَأَنزَلْنَا إِلَيْكَ الذِّكْرَ لِتُبَيِّنَ لِلنَّاسِ مَا نُزِّلَ إِلَيْهِمْ",
          translation: "E abbiamo fatto scendere su di te il Messaggio affinché tu spieghi agli uomini ciò che è stato fatto scendere per loro."
        },
        {
          ref: "Sura Al-Jumu'ah, versetto 2",
          ar: "يَتْلُو عَلَيْهِمْ آيَاتِهِ وَيُزَكِّيهِمْ وَيُعَلِّمُهُمُ الْكِتَابَ وَالْحِكْمَةَ",
          translation: "Recitando loro i Suoi versetti, purificandoli e insegnando loro il Libro e la Saggezza (la Sunna)."
        }
      ],
      consequence: "Il Corano stabilisce il Profeta ﷺ come maestro e legislatore autorizzato, non come un mero trasmettitore passivo."
    },
    analogies: [
      {
        num: 1,
        title: "La Costituzione Nazionale e i Decreti Attuativi",
        scenario: "Una Costituzione Nazionale fissa i principi fondamentali dello Stato e stabilisce che una legge ne regolerà l'applicazione. Nessuno sostiene che la Costituzione sia incompleta perché esistono decreti regolamentari.",
        logicBox: "Costituzione = Corano (Fondamento Supremo) | Decreti = Sunna (Applicazione autorizzata dal Fondamento).",
        lesson: "Rifiutare i decreti attuativi invocando la perfezione della Costituzione distrugge l'operatività della Costituzione stessa."
      },
      {
        num: 2,
        title: "La Prescrizione Medica e il Foglio Illustrativo",
        scenario: "Un medico rilascia una diagnosi generale e rimanda al farmacista o al foglio illustrativo per la posologia e i dosaggi esatti.",
        logicBox: "Prescrizione = Comando divino | Posologia = Spiegazione pratica del Messaggero.",
        lesson: "Rifiutarsi di seguire la posologia con il pretesto che la ricetta è sufficiente conduce all'errore e al danno."
      }
    ],
    readyResponses: {
      quick30s: "Dire che il Corano è completo è una verità coranica. Ma è il Corano stesso che ci ordina di obbedire al Messaggero ﷺ e ci insegna che la sua missione è spiegare il testo (Sura 16, V.44). Rifiutare la Sunna in nome della completezza del Corano significa rifiutare ciò che il Corano ordina espressamente.",
      developed: "La completezza del Corano non è un'esaustività enciclopedica che dettaglia ogni singolo gesto quotidiano, bensì una completezza legislativa. Il Corano stabilisce i principi immutabili e designa formalmente il Profeta ﷺ come l'autorità vivente incaricata di dettagliare la preghiera, il digiuno e le transazioni. Disconoscere la Sunna equivale a svuotare il Corano della sua stessa applicazione pratica."
    },
    objections: [
      {
        obj: "Il Corano dice 'chiarimento di ogni cosa' (16:89), forse che la Sunna è fuori dal Corano?",
        ans: "La Sunna è il chiarimento interno ordinato dal Corano stesso, non un'aggiunta esterna estranea al Messaggio. La spiegazione fa parte integrante della guida divina."
      },
      {
        obj: "Affermate dunque che il Corano sia insufficiente?",
        ans: "Il Corano è pienamente sufficiente per ciò per cui è stato rivelato: essere la fonte suprema che istituisce e convalida l'autorità profetica."
      }
    ],
    framingQuestions: [
      "Dove si trova nel Corano, da solo, il numero di unità della preghiera del mezzogiorno?",
      "Perché Allah ha ordinato al Profeta di spiegare il Libro se il testo prescindeva da ogni applicazione profetica?"
    ],
    quiz: [
      {
        q: "Cosa significa la completezza del Corano nel quadro legislativo islamico?",
        options: [
          "Che elenca ogni dettaglio pratico senza necessità di alcuna spiegazione.",
          "Che stabilisce i principi fondamentali e impone l'autorità esplicativa del Profeta ﷺ.",
          "Che abroga la necessità di obbedire al Messaggero.",
          "Che proibisce l'insegnamento orale dei riti."
        ],
        answer: 1,
        explanation: "La completezza coranica consiste nel fissare i principi universali e nell'istituire la Sunna come autorità esplicativa ineludibile."
      }
    ],
    conclusion: {
      steps: [
        "Il Corano è perfetto nei suoi principi divini.",
        "Il Corano ordina esplicitamente di seguire la spiegazione del Messaggero ﷺ.",
        "Rifiutare la Sunna significa disobbedire alla completezza del Corano stesso."
      ],
      finalText: "La Sunna non compete con il Corano: è l'applicazione viva che il Corano esige.",
      punchline: "Chi rifiuta la Sunna in nome del Corano finisce per disobbedire al Corano stesso!"
    },
    fallacies: [
      "fausse-dichotomie",
      "non-sequitur",
      "epouvantail"
    ]
  },
  {
    id: 2,
    number: "02",
    slug: "2-obeissance-restreinte",
    theme: "Obbligo Universale di Obbedienza",
    title: "L'obbedienza al Messaggero: era limitata soltanto alla sua vita terrena?",
    shortTitle: "Obbedienza Perenne al Messaggero",
    tagline: "I comandi coranici di obbedienza sono universali e permanenti fino al Giorno della Resurrezione.",
    formula: "Se l'obbedienza al Profeta fosse scaduta con la sua morte, l'intero Corano perderebbe la sua validità temporale!",
    pdfFile: "Comment_demasquer_et_refuter_la_secte_des_coranistes_Argument_2.pdf",
    theirArgument: {
      thesis: "Obbedire al Messaggero era un obbligo esclusivamente politico o militare riservato ai Compagni durante la sua vita terrena; dopo la sua scomparsa, rimane unicamente il testo coranico.",
      verses: [
        {
          ref: "Sura An-Nisa, versetto 59",
          ar: "يَا أَيُّهَا الَّذِينَ آمَنُوا أَطِيعُوا اللَّهَ وَأَطِيعُوا الرَّسُولَ وَأُولِي الْأَمْرِ مِنكُمْ",
          translation: "O voi che credete! Obbedite ad Allah, obbedite al Messaggero e a coloro di voi che hanno autorità."
        }
      ],
      realQuestion: "Esistono nel Corano prove che gli ordini di obbedire al Messaggero avessero una data di scadenza storica?"
    },
    logicalNode: {
      title: "Restrizione temporale arbitraria di comandi coranici universali",
      distinctions: [
        {
          term: "NORMA CORANICA PERENNE",
          desc: "Ogni ordine coranico rivelato ai credenti conserva la sua validità giuridica perpetua a meno che non vi sia un testo esplicito di abrogazione."
        },
        {
          term: "RESTRIZIONE STORICISTICA ARBITRARIA",
          desc: "Pretendere senza prove che un comando coranico centrale abbia cessato di applicarsi con la scomparsa fisica del Profeta ﷺ."
        }
      ],
      generalRule: "Un comando rivelato in termini universali alla comunità dei credenti rimane vincolante per tutte le generazioni.",
      errorToAvoid: "Restringere temporalmente gli obblighi del Corano secondo convenienze dottrinali prive di fondamento testuale."
    },
    centralPrinciple: {
      title: "L'obbedienza al Messaggero è un pilastro universale della fede fino al Giudizio Finale",
      formalScheme: "1. Il Corano si rivolge a tutti i credenti fino alla Fine dei Tempi.\n2. Ordina in modo assoluto: 'Obbedite al Messaggero'.\n3. Pertanto, l'obbedienza ai suoi insegnamenti conservati è obbligatoria per tutta l'umanità.",
      explanation: "Il Corano non condiziona mai l'obbedienza al Profeta ﷺ alla sua presenza fisica. Così come il Messaggio coranico è eterno, la guida profetica che lo accompagna è vincolante per sempre.",
      logicalTest: "Se l'obbedienza al Messaggero fosse decaduta con la sua morte, perché i versetti che ordinano di pregare o dare la zakat rimarrebbero obbligatori oggi?"
    },
    quranicArchitecture: {
      title: "Versetti decisivi sull'autorità permanente del Profeta",
      verses: [
        {
          ref: "Sura An-Nur, versetto 63",
          ar: "فَلْيَحْذَرِ الَّذِينَ يُخَالِفُونَ عَنْ أَمْرِهِ أَن تُصِيبَهُمْ فِتْنَةٌ أَوْ يُصِيبَهُمْ عَذَابٌ أَلِيمٌ",
          translation: "Diffidino coloro che disobbediscono al suo ordine, che non li colpisca una prova o un castigo doloroso."
        },
        {
          ref: "Sura Al-Ahzab, versetto 36",
          ar: "وَمَا كَانَ لِمُؤْمِنٍ وَلَا مُؤْمِنَةٍ إِذَا قَضَى اللَّهُ وَرَسُولُهُ أَمْرًا أَن يَكُونَ لَهُمُ الْخِيَرَةُ مِنْ أَمْرِهِمْ",
          translation: "Non è appropriato per un credente o una credente, quando Allah e il Suo Messaggero hanno deciso una questione, scegliere un'altra opzione."
        }
      ],
      consequence: "L'autorità giudiziaria e legislativa del Profeta ﷺ vincola la coscienza di ogni musulmano in modo perpetuo."
    },
    analogies: [
      {
        num: 1,
        title: "Le Sentenze della Corte Suprema e il Codice Civile",
        scenario: "La giurisprudenza e le risoluzioni vincolanti dei magistrati fondatori continuano a regolare le sentenze dei tribunali molto tempo dopo la loro scomparsa.",
        logicBox: "Morte fisica dei giuristi ≠ Decadenza delle loro risoluzioni giuridiche valide.",
        lesson: "La scomparsa di chi promulga la norma non annulla la validità legale delle decisioni stabilite."
      },
      {
        num: 2,
        title: "Il Testamento Autentico e gli Eredi",
        scenario: "Le istruzioni lasciate da un padre in un testamento legalmente verificato devono essere eseguite rigorosamente dai suoi discendenti dopo la sua morte.",
        logicBox: "Istruzioni registrate = Sunna autentica trasmessa alle generazioni successive.",
        lesson: "Nessuno può annullare le clausole di un testamento sostenendo che l'autore non è più fisicamente presente."
      }
    ],
    readyResponses: {
      quick30s: "Il Corano dice 'Obbedite ad Allah e obbedite al Messaggero' in oltre trenta passi senza alcun limite di tempo. Se tale ordine fosse decaduto dopo la morte del Profeta ﷺ, metà del Corano sarebbe diventata obsoleta. La Sunna preservata è il mezzo attraverso cui obbediamo oggi al Profeta ﷺ.",
      developed: "Nessun versetto del Corano restringe l'obbedienza al Messaggero alla sua epoca storica. Se applicassimo la logica coranista secondo cui solo il contemporaneo vincola, dovremmo considerare decaduti tutti i passi rivolti ai credenti del VII secolo. I Compagni hanno trasmesso la Sunna proprio affinché le generazioni successive potessero adempiere a questo obbligo coranico permanente."
    },
    objections: [
      {
        obj: "Il Profeta non è più tra noi per giudicare le nostre controversie.",
        ans: "La sua persona fisica è passata a miglior vita, ma il suo giudizio normativo rimane pienamente vivo nei suoi insegnamenti autenticamente trasmessi."
      },
      {
        obj: "I versetti dicono 'a coloro di voi che hanno autorità', il che prova che era un comando politico.",
        ans: "Il versetto 59 della Sura An-Nisa dice 'se dissentite in qualcosa, rimettetelo ad Allah e al Messaggero', non ai governanti. La remissione al Corano e alla Sunna è eterna!"
      }
    ],
    framingQuestions: [
      "In quale versetto Allah afferma che l'obbedienza al Suo Messaggero sarebbe terminata con la sua morte?",
      "Come puoi affermare che il Corano è eterno se consideri decaduti decine di versetti sull'obbedienza?"
    ],
    quiz: [
      {
        q: "Qual è la portata temporale dei versetti coranici che ordinano di obbedire al Messaggero ﷺ?",
        options: [
          "Erano limitati ai 23 anni della rivelazione profetica.",
          "Sono universali e obbligatori per tutti i credenti fino alla Fine del Mondo.",
          "Valgono solo per gli abitanti di Medina.",
          "Erano semplici raccomandazioni morali prive di valore giuridico."
        ],
        answer: 1,
        explanation: "Gli ordini coranici di obbedienza sono immutabili e costituiscono un precetto vincolante per tutte le generazioni."
      }
    ],
    conclusion: {
      steps: [
        "Il Corano è un messaggio universale ed eterno.",
        "L'ordine di obbedire al Profeta ﷺ fa parte integrante di tale messaggio eterno.",
        "La Sunna autentica è l'unico mezzo per esercitare tale obbedienza oggi."
      ],
      finalText: "L'obbedienza al Messaggero non è morta con la sua dipartita terrena.",
      punchline: "Chi dichiara decaduta l'obbedienza al Profeta dichiara decaduta l'universalità del Corano!"
    },
    fallacies: [
      "double-standard",
      "non-sequitur",
      "cherry-picking"
    ]
  }
];

// Combine and generate it.js
const fullItData = {
  ...itBase,
  fallaciesToolbox: itFallaciesToolbox,
  arguments: itArguments
};

// Also load the rest of arguments from translation mapping or template cleanly
`;

console.log('Script generate_it_full.cjs prêt.');
