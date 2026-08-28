/**
 * Générateur Italien (IT) et Portugais (PT) - 10 Arguments Intégralement Traduits
 */

const fs = require('fs');
const path = require('path');

const TRANSLATIONS_DIR = path.join(__dirname, '..', 'js', 'translations');

// Charger DE comme référence de structure complète
const dePath = path.join(TRANSLATIONS_DIR, 'de.js');
const deRaw = fs.readFileSync(dePath, 'utf8');
const deSandbox = {};
new Function('window', 'sandbox', deRaw + '\nsandbox.DATA = window.I18N_DATA["de"];')({}, deSandbox);
const DE = deSandbox.DATA;

// ==========================================
// 1. ITALIEN (IT)
// ==========================================
const itPath = path.join(TRANSLATIONS_DIR, 'it.js');
const itRaw = fs.readFileSync(itPath, 'utf8');
const itSandbox = {};
new Function('window', 'sandbox', itRaw + '\nsandbox.DATA = window.I18N_DATA["it"];')({}, itSandbox);
const IT = itSandbox.DATA;

IT.arguments = [
  // Arg 1
  {
    id: 1,
    number: "01",
    slug: "1-coran-complet",
    theme: "Completezza e Chiarimento Profetico",
    title: "Il Corano è completo: perché servirebbe la Sunna?",
    shortTitle: "Perfezione del Corano",
    tagline: "Il Corano è completo nei suoi principi fondamentali, e parte della sua completezza è ordinare di obbedire al Profeta ﷺ.",
    formula: "La completezza legislativa del Corano include il mandato di chiarimento profetico (Bayan); rifiutare la Sunna significa rifiutare il Corano!",
    pdfFile: "Comment_demasquer_et_refuter_la_secte_des_coranistes_Argument_1.pdf",
    theirArgument: {
      thesis: "Il Corano è completo, dettagliato e non tralascia nulla. Tutto ciò di cui abbiamo bisogno è esplicitamente nel Libro; sostenere che la Sunna sia necessaria contraddice la perfezione del Corano.",
      verses: [
        { ref: "Sura Al-An'am, Versetto 38", ar: "مَّا فَرَّطْنَا فِي الْكِتَابِ مِن شَيْءٍ", translation: "Non abbiamo trascurato nulla nel Libro." },
        { ref: "Sura An-Nahl, Versetto 89", ar: "وَنَزَّلْنَا عَلَيْكَ الْكِتَابَ تِبْيَانًا لِّكُلِّ شَيْءٍ", translation: "E abbiamo fatto scendere su di te il Libro come chiarimento di ogni cosa." }
      ],
      realQuestion: "La completezza strutturale del Corano come quadro fondamentale esclude la spiegazione profetica che esso stesso rende obbligatoria?"
    },
    logicalNode: {
      title: "Confusione tra completezza sistemica e autosufficienza interpretativa",
      distinctions: [
        { term: "COMPLETEZZA LEGISLATIVA SISTEMICA", desc: "Il Corano è completo perché stabilisce tutti i principi fondamentali e istituisce l'autorità legale del Profeta." },
        { term: "ESAUSTIVITÀ LETTERALE", desc: "Una falsa ipotesi: il Corano ordina la preghiera, la zakah e il digiuno senza specificare i dettagli pratici, delegandoli al Profeta ﷺ." }
      ],
      generalRule: "Un testo fondamentale che delega l'interpretazione autorevole a un messaggero designato non è carente; la sua completezza include tale autorità delegata.",
      errorToAvoid: "Confondere la completezza legislativa fondamentale con i dettagli operativi pratici."
    },
    centralPrinciple: {
      title: "La completezza del Corano include l'obbligo di seguire l'autorità del Profeta",
      formalScheme: "1. Il Corano è completo nello stabilire la guida divina.\n2. Parte di questa completezza è l'ordine esplicito di obbedire al Profeta ﷺ e seguire la sua spiegazione (Bayan).\n3. Pertanto, obbedire alla Sunna è l'adempimento diretto della completezza del Corano.",
      explanation: "Il Corano stesso fonda l'autorità della Sunna. Rifiutare la Sunna significa violare gli stessi versetti coranici che impongono l'obbedienza al Messaggero ﷺ.",
      logicalTest: "Se il Corano fosse inteso come manuale operativo senza Hadith, deduci unicamente dal testo coranico il numero di preghiere quotidiane, le unità (rak'at) e le percentuali esatte di zakah!"
    },
    quranicArchitecture: {
      title: "Versetti coranici decisivi sulla missione di spiegazione profetica (Bayan)",
      verses: [
        { ref: "Sura An-Nahl, Versetto 44", ar: "وَأَنزَلْنَا إِلَيْكَ الذِّكْرَ لِتُبَيِّنَ لِلنَّاسِ مَا نُزِّلَ إِلَيْهِمْ", translation: "E abbiamo fatto scendere su di te il Messaggio affinché tu spieghi agli uomini ciò che è stato fatto scendere per loro." },
        { ref: "Sura Al-Jumu'ah, Versetto 2", ar: "يَتْلُو عَلَيْهِمْ آيَاتِهِ وَيُزَكِّيهِمْ وَيُعَلِّمُهُمُ الْكِتَابَ وَالْحِكْمَةَ", translation: "Recita loro i Suoi versetti, li purifica e insegna loro il Libro e la Saggezza (la Sunna)." }
      ],
      consequence: "Il Corano stabilisce il Profeta ﷺ come maestro e interprete autorevole, non come un mero postino passivo."
    },
    analogies: [
      {
        num: 1,
        title: "La Costituzione e i Regolamenti Esecutivi",
        scenario: "Una costituzione stabilisce i diritti e istituisce una Corte Suprema autorizzata a interpretare e applicare le leggi.",
        logic: "La costituzione è completa istituendo gli organi esecutivi; non ha bisogno di elencare ogni segnale stradale locale!",
        lesson: "La completezza di un testo fondamentale include le istituzioni che esso crea.",
        application: "Il Corano è la costituzione fondamentale che impone di seguire la Sunna profetica come sua applicazione autorevole."
      }
    ],
    readyResponses: {
      quick30s: "La completezza del Corano significa che stabilisce tutti i principi fondamentali, e tra i suoi comandamenti supremi vi è: {E abbiamo fatto scendere su di te il Messaggio affinché tu spieghi agli uomini} (16:44). Rifiutare la Sunna viola il Corano stesso!",
      developed: "Quando il Corano afferma {Non abbiamo trascurato nulla nel Libro} (6:38), si riferisce alla pienezza della guida divina. Uno dei principi più grandi è la totale sottomissione all'autorità del Messaggero ﷺ. Chi rifiuta la sua Sunna annulla i comandamenti del Corano."
    },
    objections: [
      {
        obj: "Il Corano dice 'chiarimento di ogni cosa', la Sunna è forse qualcosa di esterno al Corano?",
        ans: "La Sunna è il chiarimento interno ordinato dal Corano stesso, non un'aggiunta estranea. La spiegazione è parte integrante del messaggio."
      }
    ],
    framingQuestions: [
      "Dove si trova nel solo Corano il numero di rak'at della preghiera del mezzogiorno?",
      "Perché Allah ha ordinato al Profeta di 'spiegare' (li-tubayyina) se il testo fosse autosufficiente senza pratica profetica?"
    ],
    quiz: [
      {
        q: "Cosa significa la completezza del Corano nel contesto legislativo islamico?",
        options: [
          "Che elenca ogni singolo dettaglio operativo senza bisogno di spiegazione.",
          "Che stabilisce i principi fondamentali e impone l'obbedienza al Profeta ﷺ.",
          "Che abroga la Sunna profetica.",
          "Che è un mero libro di storia."
        ],
        answer: 1,
        explanation: "La completezza del Corano fonda l'obbligo di seguire la spiegazione profetica autorizzata."
      }
    ],
    conclusion: {
      steps: [
        "Il Corano è un libro completo e perfetto di guida divina.",
        "Il Corano stesso comanda l'obbedienza al Profeta ﷺ.",
        "Non vi è contraddizione tra la completezza del Corano e la Sunna."
      ],
      finalText: "La completezza del Corano si manifesta nell'istituire la Sunna come spiegazione vincolante.",
      punchline: "Chi pretende di accontentarsi del Corano per rigettare la Sunna rigetta il Corano stesso!"
    }
  },

  // Arg 2
  {
    id: 2,
    number: "02",
    slug: "2-obeissance-messager",
    theme: "Validità perenne dell'obbedienza profetica",
    title: "L'obbedienza al Profeta valeva solo durante la sua vita?",
    shortTitle: "Autorità perenne del Profeta",
    tagline: "I comandi coranici di obbedire al Messaggero sono assoluti e vincolanti per tutte le generazioni.",
    formula: "L'obbedienza al Messaggero è un obbligo senza tempo; la Sunna autentica ne è la continuazione vivente!",
    pdfFile: "Comment_demasquer_et_refuter_la_secte_des_coranistes_Argument_2.PDF",
    theirArgument: {
      thesis: "L'obbedienza al Profeta era obbligatoria solo per i suoi contemporanei come leader della comunità. Dopo la sua morte, non vi è altra autorità su di noi se non il testo coranico.",
      verses: [
        { ref: "Sura An-Nisa, Versetto 59", ar: "يَا أَيُّهَا الَّذِينَ آمَنُوا أَطِيعُوا اللَّهَ وَأَطِيعُوا الرَّسُولَ", translation: "O voi che credete, obbedite ad Allah e obbedite al Messaggero." }
      ],
      realQuestion: "Il comando coranico di obbedire al Messaggero è una norma temporanea o un principio giuridico perenne fino al Giorno del Giudizio?"
    },
    logicalNode: {
      title: "Confusione tra la persona fisica mortale e lo status legislativo perenne del Profeta",
      distinctions: [
        { term: "VITA TERRENA DEL PROFETA", desc: "La fase storica di trasmissione della rivelazione e fondazione della comunità." },
        { term: "MISSIONE LEGISLATIVA E SUNNA", desc: "Norme e insegnamenti vincolanti per ogni musulmano fino al Giorno della Resurrezione." }
      ],
      generalRule: "I precetti coranici generali non decadono con la morte dei primi destinatari o del legislatore delegato.",
      errorToAvoid: "Ridurre la missione profetica alla presenza fisica del Profeta, annullando la Sunna per i posteri."
    },
    centralPrinciple: {
      title: "L'obbedienza al Messaggero è indissolubilmente legata all'obbedienza ad Allah",
      formalScheme: "1. Il Corano si rivolge a tutti i musulmani fino al Giorno del Giudizio: {Obbedite ad Allah e obbedite al Messaggero}.\n2. Se ciò fosse valso solo in vita sua, metà del Corano sarebbe decaduto con la sua morte.\n3. Pertanto, l'obbedienza perdura attraverso la sua Sunna autentica.",
      explanation: "Allah unisce la Sua obbedienza a quella del Messaggero in oltre 30 versetti in forma imperativa assoluta. Oggi si obbedisce al Profeta seguendo la sua Sunna comprovata.",
      logicalTest: "Se l'obbedienza fosse cessata con la sua morte, perché recitiamo ancora oggi questi versetti come legge divina nella preghiera?"
    },
    quranicArchitecture: {
      title: "Versetti sul potere giudiziario vincolante del Profeta ﷺ",
      verses: [
        { ref: "Sura An-Nisa, Versetto 65", ar: "فَلَا وَرَبِّكَ لَا يُؤْمِنُونَ حَتَّىٰ يُحَكِّمُوكَ فِيمَا شَجَرَ بَيْنَهُمْ", translation: "No, per il tuo Signore! Non saranno credenti finché non ti avranno eletto giudice delle loro controversie." },
        { ref: "Sura An-Nur, Versetto 63", ar: "فَلْيَحْذَرِ الَّذِينَ يُخَالِفُونَ عَنْ أَمْرِهِ أَن تُصِيبَهُمْ فِتْنَةٌ", translation: "Diffidino coloro che si oppongono al suo ordine, che non li colpisca una prova o un castigo doloroso." }
      ],
      consequence: "La fede autentica esige l'accettazione dei giudizi e della Sunna del Profeta ﷺ."
    },
    analogies: [
      {
        num: 1,
        title: "Il testamento giuridico del fondatore",
        scenario: "Il fondatore di una repubblica stabilisce leggi scritte e prescrive di seguire le direttive del suo ufficio designato.",
        logic: "La morte del fondatore non invalida i regolamenti documentati.",
        lesson: "Le norme giuridiche restano in vigore mediante trasmissione affidabile.",
        application: "La Sunna del Profeta è la spiegazione autorevole documentata per tutte le epoche."
      }
    ],
    readyResponses: {
      quick30s: "Il Corano afferma: {Chi obbedisce al Messaggero obbedisce ad Allah} (4:80). Se l'obbedienza fosse morta con lui, metà del Corano sarebbe oggi inapplicabile! L'obbedienza oggi si realizza seguendo la sua Sunna autentica.",
      developed: "Allah ha formulato l'obbedienza al Messaggero in modo assoluto e incondizionato. Nessun sapiente musulmano ha mai affermato che questi comandi fossero storicamente scaduti. La Sunna è l'applicazione vivente di questo precetto."
    },
    objections: [
      {
        obj: "I Compagni potevano interrogare il Profeta direttamente, noi non possiamo!",
        ans: "I musulmani nello Yemen o in Siria non chiedevano direttamente al Profeta, ma seguivano i trasmettitori affidabili. Noi seguiamo le medesime catene di trasmissione rigorose."
      }
    ],
    framingQuestions: [
      "Con la morte del Profeta è forse terminata anche la sua missione per l'intera umanità?",
      "Come si applica il versetto {Ciò che il Messaggero vi dà prendetelo} (59:7) senza la sua Sunna?"
    ],
    quiz: [
      {
        q: "Come si realizza l'obbedienza al Messaggero ﷺ dopo la sua morte?",
        options: [
          "Considerando i versetti come storicamente superati.",
          "Seguendo la sua Sunna autentica e i suoi insegnamenti documentati.",
          "Interpretando il Corano secondo i propri gusti personali.",
          "Rifiutando ogni testimonianza storica."
        ],
        answer: 1,
        explanation: "L'obbedienza al Profeta dopo la sua morte si realizza seguendo la sua Sunna autentica."
      }
    ],
    conclusion: {
      steps: [
        "Il Corano è un messaggio universale ed eterno per ogni tempo.",
        "Il precetto dell'obbedienza al Messaggero è assoluto e perpetuo.",
        "Obbedire oggi al Profeta significa conformarsi alla Sunna preservata."
      ],
      finalText: "L'autorità del Profeta sussiste finché sussiste il Corano.",
      punchline: "Il Corano non ha mai detto 'obbedite al Messaggero solo finché è in vita', ma ne ha fatto un patto di fede eterno!"
    }
  },

  // Arg 3
  {
    id: 3,
    number: "03",
    slug: "3-allah-seul-legifere",
    theme: "Sovranità Divina e Legislazione Profetica Delegata",
    title: "«Il giudizio appartiene solo ad Allah»: legiferare da parte del Profeta è shirk?",
    shortTitle: "Sovranità Divina & Hukm",
    tagline: "L'esercizio dell'autorità decisionale conferita da Allah non si oppone mai alla Sua sovranità assoluta.",
    formula: "L'autorità legislativa delegata al Profeta è l'esecuzione della volontà divina; confonderla con lo shirk è un grave sofisma!",
    pdfFile: "Comment_demasquer_et_refuter_la_secte_des_coranistes_Argument_3.PDF",
    theirArgument: {
      thesis: "Il Corano afferma: 'Il giudizio appartiene solo ad Allah' (In al-hukmu illa lillah). Attribuire al Profeta un potere legislativo significa associargli poteri divini (shirk).",
      verses: [
        { ref: "Sura Yusuf, Versetto 40", ar: "إِنِ الْحُكْمُ إِلَّا لِلَّهِ", translation: "Il giudizio appartiene solo ad Allah." },
        { ref: "Sura Al-Kahf, Versetto 26", ar: "وَلَا يُشْرِكُ فِي حُكْمِهِ أَحَدًا", translation: "Ed Egli non associa alcuno al Suo giudizio." }
      ],
      realQuestion: "La sovranità esclusiva di Allah impedisce forse che Egli conferisca al Suo Messaggero un potere di giudizio vincolante per gli uomini?"
    },
    logicalNode: {
      title: "Confusione tra sovranità originaria e autorità delegata",
      distinctions: [
        { term: "SOVRANITÀ ORIGINARIA ASSOLUTA", desc: "Allah è l'unico Creatore della legge e la fonte suprema di ogni norma." },
        { term: "AUTORITÀ LEGISLATIVA DELEGATA", desc: "Il Profeta ﷺ stabilisce precetti vincolanti su mandato e per ispirazione divina." }
      ],
      generalRule: "Quando il Sovrano autorizza un ambasciatore, gli ordini dell'ambasciatore emanano dalla sovranità del Re.",
      errorToAvoid: "Ripetere il sofisma dei Kharijiti: usare una parola vera per trarre una conclusione falsa."
    },
    centralPrinciple: {
      title: "Il Corano conferisce esplicitamente al Profeta poteri di giudizio e legislazione",
      formalScheme: "1. Allah possiede la sovranità assoluta.\n2. Allah ordina nel Corano di accettare le decisioni del Profeta (Sura 7:157).\n3. L'obbedienza alle decisioni del Profeta è sottomissione alla sovranità di Allah.",
      explanation: "Allah descrive il Messaggero come colui che {rende lecite le cose buone e proibisce quelle cattive} (7:157). Questa è autorità divina delegata.",
      logicalTest: "Se solo Allah può giudicare, perché il Corano in Sura 4:35 ordina di nominare due arbitri umani nelle dispute coniugali?"
    },
    quranicArchitecture: {
      title: "Versetti sulla potestà del Profeta di rendere lecito e proibito",
      verses: [
        { ref: "Sura Al-A'raf, Versetto 157", ar: "وَيُحِلُّ لَهُمُ الطَّيِّبَاتِ وَيُحَرِّمُ عَلَيْهِمُ الْخَبَائِثَ", translation: "Egli rende loro lecite le cose buone e proibisce le cose impure." },
        { ref: "Sura Al-Ahzab, Versetto 36", ar: "وَمَا كَانَ لِمُؤْمِنٍ وَلَا مُؤْمِنَةٍ إِذَا قَضَى اللَّهُ وَرَسُولُهُ أَمْرًا أَن يَكُونَ لَهُمُ الْخِيَرَةُ", translation: "Non si addice a credente o credente, quando Allah e il Suo Messaggero hanno deciso un affare, di avere scelta alcuna." }
      ],
      consequence: "Nel Corano le decisioni provengono congiuntamente da Allah e dal Suo Messaggero."
    },
    analogies: [
      {
        num: 1,
        title: "Il Magistrato e la Costituzione",
        scenario: "Uno Stato stabilisce: la giustizia emana dal popolo/Stato. Al tempo stesso conferisce ai magistrati il potere di emettere sentenze.",
        logic: "La sentenza del giudice non viola la costituzione, ma la applica.",
        lesson: "Il potere delegato realizza la sovranità originaria.",
        application: "I precetti del Profeta sono l'applicazione autorizzata della legge divina."
      }
    ],
    readyResponses: {
      quick30s: "Usare 'Il giudizio appartiene solo ad Allah' per privare il Profeta di autorità è la dottrina dei Kharijiti! Lo stesso Corano dice: {Egli rende lecite le cose buone e proibisce le cose impure} (7:157). La sua autorità è conferita direttamente da Allah!",
      developed: "La sovranità divina non esclude l'autorità del Messaggero, la istituisce. Il Corano sancisce che quando {Allah E il Suo Messaggero hanno deciso}, non c'è più scelta (33:36). Chi contesta questa potestà contesta il Corano."
    },
    objections: [
      {
        obj: "Non si rischia di fare del Profeta un secondo legislatore accanto ad Allah?",
        ans: "No, il Profeta non legifera di propria iniziativa ma per ispirazione divina (Wahy). È un esecutore autorizzato, non un rivale indipendente."
      }
    ],
    framingQuestions: [
      "Perché il Corano dice {quando Allah E il Suo Messaggero hanno deciso} (33:36) se il Messaggero non avesse potere decisionale?",
      "Chi proibisce di mangiare i carnivori con le zanne o di sposare contemporaneamente una donna e sua zia, se non il Profeta ﷺ attraverso la sua Sunna?"
    ],
    quiz: [
      {
        q: "Quale versetto stabilisce che il Profeta rende lecite le cose buone e proibisce le impure?",
        options: [
          "Sura Al-A'raf, Versetto 157",
          "Sura Al-Baqara, Versetto 1",
          "Sura Al-Fatiha, Versetto 1",
          "Sura An-Nas, Versetto 1"
        ],
        answer: 0,
        explanation: "La Sura 7:157 conferma esplicitamente questo mandato legislativo del Messaggero."
      }
    ],
    conclusion: {
      steps: [
        "Allah è l'unica fonte suprema della legge.",
        "Allah ha conferito al Suo Messaggero l'autorità di emettere giudizi vincolanti.",
        "Seguire il Profeta significa sottomettersi pienamente alla sovranità di Allah."
      ],
      finalText: "L'autorità del Profeta non è shirk, ma l'espressione più pura del monoteismo e dell'obbedienza ad Allah.",
      punchline: "Ali ibn Abi Talib disse di questo slogan: 'Una parola di verità usata per sostenere una menzogna!'"
    }
  },

  // Arg 4
  {
    id: 4,
    number: "04",
    slug: "4-mission-messager-transmettre",
    theme: "La Portata della Missione: Balagh e Bayan",
    title: "«Al Messaggero spetta solo la trasmissione»: era solo un postino?",
    shortTitle: "Missione di trasmissione (Balagh)",
    tagline: "La 'trasmissione' coranica (Balagh) include insegnamento, esempio pratico, giudizio e spiegazione dettagliata.",
    formula: "La trasmissione perfetta esige la spiegazione (Bayan) e il modello vivente (Uswah); il Profeta non fu mai un mero corriere passivo!",
    pdfFile: "Comment_demasquer_et_refuter_la_secte_des_coranistes_Argument_4.pdf",
    theirArgument: {
      thesis: "Il Corano ripete: 'Al Messaggero spetta solo la chiara trasmissione' (Ma 'ala ar-rasuli illa al-balagh). Il suo ruolo era unicamente recapitare il testo coranico, senza aggiungere insegnamenti.",
      verses: [
        { ref: "Sura Al-Ma'idah, Versetto 99", ar: "مَّا عَلَى الرَّسُولِ إِلَّا الْبَلَاغُ", translation: "Al Messaggero spetta solo la trasmissione." },
        { ref: "Sura An-Nur, Versetto 54", ar: "وَإِن تُطِيعُوهُ تَهْتَدُوا وَمَا عَلَى الرَّسُولِ إِلَّا الْبَلَاغُ الْمُبِينُ", translation: "E se gli obbedite sarete ben guidati. E al Messaggero spetta solo la chiara trasmissione." }
      ],
      realQuestion: "Il termine 'Balagh' nel Corano indica la semplice consegna materiale di un testo o la completa trasmissione pedagogica e pratica del messaggio?"
    },
    logicalNode: {
      title: "Riduzione di un concetto religioso sublime a una funzione meccanica",
      distinctions: [
        { term: "CONSEGNA MECCANICA DI UN PLICO", desc: "Un fattorino che recapita una lettera senza conoscerne il contenuto né spiegarlo." },
        { term: "MISSIONE PROFETICA (BALAGH MUBIN)", desc: "Proclamazione, chiarimento (Bayan), dimostrazione pratica, guida spirituale (Tazkiyah) e governo della comunità." }
      ],
      generalRule: "I termini coranici devono essere compresi alla luce di tutti i versetti che definiscono le funzioni profetiche.",
      errorToAvoid: "Ridurre l'inviato di Allah al rango di mero distributore di posta."
    },
    centralPrinciple: {
      title: "Il Corano definisce la profezia come insegnamento, modello e saggezza",
      formalScheme: "1. Il Corano elenca i compiti del Profeta: recitare, purificare, insegnare il Libro e insegnare la Saggezza (Sura 62:2).\n2. Lo istituisce come modello supremo da imitare (Sura 33:21).\n3. La sua Sunna pratica è dunque il nucleo inseparabile della trasmissione.",
      explanation: "L'espressione 'spetta solo la trasmissione' significa che il Profeta non può costringere i cuori alla fede, non che non debba insegnare e spiegare la religione.",
      logicalTest: "Se il Profeta fosse stato solo un postino, perché Allah gli ha ordinato in Sura 16:44: {affinché tu spieghi agli uomini ciò che è stato rivelato}?"
    },
    quranicArchitecture: {
      title: "Versetti sui molteplici compiti affidati al Profeta ﷺ",
      verses: [
        { ref: "Sura Al-Ahzab, Versetto 21", ar: "لَّقَدْ كَانَ لَكُمْ فِي رَسُولِ اللَّهِ أُسْوَةٌ حَسَنَةٌ", translation: "Avete nel Messaggero di Allah un bellissimo esempio." },
        { ref: "Sura Al-Baqara, Versetto 151", ar: "كَمَا أَرْسَلْنَا فِيكُمْ رَسُولًا مِّنكُمْ يَتْلُو عَلَيْكُمْ آيَاتِنَا وَيُزَكِّيكُمْ وَيُعَلِّمُكُمُ الْكِتَابَ وَالْحِكْمَةَ", translation: "Così vi abbiamo inviato un Messaggero scelto tra voi, che vi recita i Nostri versetti, vi purifica e vi insegna il Libro e la Saggezza." }
      ],
      consequence: "La 'Saggezza' (Hikmah) insegnata accanto al Libro è unanimemente identificata con la Sunna profetica."
    },
    analogies: [
      {
        num: 1,
        title: "Il Professore Universitario e il Manuale",
        scenario: "Un rettore affida a un professore un programma di studio e distribuisce i manuali agli studenti.",
        logic: "Nessuno direbbe che il professore deve solo consegnare il libro in silenzio senza tenere le lezioni!",
        lesson: "L'insegnamento richiede la spiegazione orale e la guida magistrale.",
        application: "Il Profeta ﷺ ha insegnato il Corano con le sue parole, i suoi atti e le sue approvazioni."
      }
    ],
    readyResponses: {
      quick30s: "Nel versetto {Al Messaggero spetta solo la trasmissione}, il senso è: non può forzare la fede. Ma come trasmette? Il Corano precisa: recitando, purificando, insegnando il Libro e la Saggezza (62:2) e offrendo l'esempio perfetto (33:21). Farne un postino stravolge il testo!",
      developed: "Il contesto dei versetti su Balagh riguarda la responsabilità escatologica: il Messaggero non risponde dell'incredulità altrui. Riguardo al suo ministero, il Corano specifica quattro dimensioni fondamentali: Tilawah, Tazkiyah, Ta'lim al-Kitab e Ta'lim al-Hikmah."
    },
    objections: [
      {
        obj: "La Saggezza (Hikmah) nel Corano non significa forse semplice intelligenza?",
        ans: "No, grammaticalmente Hikmah è accostata come entità distinta accanto al Libro ('al-Kitaba wal-Hikmah'). Insegnare qualcosa accanto al Libro indica le direttive profetiche."
      }
    ],
    framingQuestions: [
      "Come può il Profeta essere un 'bellissimo esempio' (33:21) se non abbiamo la testimonianza storica dei suoi atti?",
      "Perché il Corano distingue costantemente tra 'il Libro' e 'la Saggezza'?"
    ],
    quiz: [
      {
        q: "Quali quattro compiti assegna il Corano al Profeta in Sura 2:151 e 62:2?",
        options: [
          "Recitazione, purificazione, insegnamento del Libro e della Saggezza.",
          "Solo consegnare fogli scritti.",
          "Solo compiti militari.",
          "Nessun insegnamento."
        ],
        answer: 0,
        explanation: "Il Corano elenca esplicitamente: recitazione, purificazione spirituale e duplice insegnamento di Libro e Saggezza."
      }
    ],
    conclusion: {
      steps: [
        "La trasmissione (Balagh) include la spiegazione dottrinale e pratica.",
        "Il Profeta è maestro, guida spirituale, giudice e modello vivente.",
        "Negare la Sunna priva la rivelazione della sua attuazione pratica."
      ],
      finalText: "La Sunna è la testimonianza autentica di come il Profeta compì la sua missione di trasmissione.",
      punchline: "Il Messaggero era il Corano vivente in azione, non un passivo messaggero di carta!"
    }
  },

  // Arg 5
  {
    id: 5,
    number: "05",
    slug: "5-preservation-coran-hadiths",
    theme: "La Preservazione Divina: Dhikr e Sunna",
    title: "«Noi abbiamo rivelato il Monito (Adh-Dhikr) e Noi lo custodiremo»: la Sunna è preservata?",
    shortTitle: "Preservazione del Dhikr",
    tagline: "La promessa divina di custodire il Dhikr comprende la rivelazione e il suo chiarimento profetico indispensabile.",
    formula: "Preservare il Corano richiede logicamente preservare la sua spiegazione pratica (Sunna); altrimenti il testo sarebbe divenuto inapplicabile!",
    pdfFile: "Comment_demasquer_et_refuter_la_secte_des_coranistes_Argument_5.pdf",
    theirArgument: {
      thesis: "Allah ha promesso in Sura 15:9 di preservare solo il 'Dhikr' (il Corano). Poiché gli hadith non godono di protezione divina, sono stati alterati dagli uomini.",
      verses: [
        { ref: "Sura Al-Hijr, Versetto 9", ar: "إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ", translation: "Noi abbiamo fatto scendere il Monito (adh-Dhikr) e Noi ne siamo i custodi." }
      ],
      realQuestion: "Il termine 'Dhikr' comprende la rivelazione divina globale e il necessario chiarimento profetico che ne consente l'applicazione?"
    },
    logicalNode: {
      title: "Restrizione indebita del termine 'Dhikr' e separazione tra testo e significato",
      distinctions: [
        { term: "TESTO LETTERALE DEL MUSHAF", desc: "Le parole coraniche scritte dalla Sura 1 alla Sura 114." },
        { term: "RIVELAZIONE GLOBALE (ADH-DHIKR)", desc: "Il testo coranico unitamente alla sua autentica spiegazione profetica indispensabile per la pratica religiosa." }
      ],
      generalRule: "La promessa di preservare una guida per l'umanità implica la conservazione del suo significato operativo.",
      errorToAvoid: "Sostenere che Allah abbia preservato le lettere di un libro ma ne abbia lasciato perdere il senso pratico per secoli."
    },
    centralPrinciple: {
      title: "In Sura 16:44 Allah definisce 'Dhikr' anche la spiegazione profetica",
      formalScheme: "1. Allah dichiara in Sura 16:44: {E abbiamo fatto scendere su di te il Dhikr affinché tu spieghi agli uomini}.\n2. In Sura 15:9 promette: {Noi custodiremo il Dhikr}.\n3. La spiegazione profetica è parte integrante del Dhikr custodito da Allah.",
      explanation: "Se la Sunna fosse andata perduta, nessun musulmano saprebbe come pregare, digiunare o compiere il pellegrinaggio. La promessa di guida perenne sarebbe vanificata.",
      logicalTest: "Credi che Allah abbia ordinato all'umanità di praticare una religione lasciandone i precetti fondamentali nell'errore per 1400 anni?"
    },
    quranicArchitecture: {
      title: "Versetti sulla garanzia divina della spiegazione del testo",
      verses: [
        { ref: "Sura Al-Qiyama, Versetti 18-19", ar: "فَإِذَا قَرَأْنَاهُ فَاتَّبِعْ قُرْآنَهُ * ثُمَّ إِنَّ عَلَيْنَا بَيَانَهُ", translation: "Quando lo recitiamo, segui la sua recitazione. Poi spetta a Noi la sua spiegazione." }
      ],
      consequence: "Allah assume su di Sé la spiegazione (Bayan) e la preservazione del significato autentico del Suo Libro."
    },
    analogies: [
      {
        num: 1,
        title: "Il Codice Segreto e la Chiave di Cifratura",
        scenario: "Un governo custodisce un codice di sicurezza vitale ma distrugge l'unica chiave di decifrazione.",
        logic: "Un testo incomprensibile perde ogni efficacia pratica.",
        lesson: "Custodire la sostanza include custodire la chiave di comprensione.",
        application: "La Sunna è la chiave donata e preservata da Allah per comprendere e praticare il Corano."
      }
    ],
    readyResponses: {
      quick30s: "Allah chiama 'Dhikr' la spiegazione affidata al Profeta: {Abbiamo fatto scendere su di te il Dhikr affinché tu spieghi} (16:44). Quando promette di custodire il Dhikr (15:9), protegge il testo e la sua pratica autentica. Dire che la Sunna è perduta offende la saggezza di Allah!",
      developed: "In Sura Al-Qiyama Allah garantisce: {Spetta a Noi la sua spiegazione} (75:19). Storicamente, questa protezione divina si è manifestata attraverso la prodigiosa scienza dell'Isnad (catene di trasmissione) che ha isolato ogni tentativo di contraffazione."
    },
    objections: [
      {
        obj: "Ma esistono hadith deboli e fabbricati, questo non dimostra che la Sunna non è stata preservata?",
        ans: "Il fatto che i sapienti abbiano identificato, smascherato e catalogato ogni hadith debole o apocrifo dimostra l'efficacia perfetta della preservazione!"
      }
    ],
    framingQuestions: [
      "Se la Sunna non è stata preservata, da dove sai oggi che la preghiera dell'alba è di 2 rak'at?",
      "Allah avrebbe lasciato miliardi di fedeli nell'errore su come adorarLo?"
    ],
    quiz: [
      {
        q: "Quale versetto stabilisce l'impegno divino a fornire la spiegazione del Corano?",
        options: [
          "Sura Al-Qiyama, Versetto 19: {Poi spetta a Noi la sua spiegazione}",
          "Sura Al-Baqara, Versetto 2",
          "Sura Al-Ikhlas, Versetto 1",
          "Sura An-Nas, Versetto 1"
        ],
        answer: 0,
        explanation: "La Sura 75:19 attesta la garanzia divina di preservare la spiegazione del testo."
      }
    ],
    conclusion: {
      steps: [
        "Dhikr abbraccia il testo coranico e la necessaria spiegazione profetica.",
        "Allah ha garantito la conservazione integrale della religione.",
        "La scienza del Hadith è stata lo strumento storico di questa custodia divina."
      ],
      finalText: "Testo e Sunna sono due dimensioni inseparabili dell'unica guida rivelata.",
      punchline: "Un testo preservato nella lettera ma privo di significato pratico non sarebbe una guida!"
    }
  },

  // Arg 6
  {
    id: 6,
    number: "06",
    slug: "6-compilation-tardive-hadiths",
    theme: "Storiografia e Scienza della Trasmissione",
    title: "Gli hadith furono compilati due secoli dopo e inventati?",
    shortTitle: "Compilazione storica degli Hadith",
    tagline: "La registrazione scritta iniziò durante la vita dei Compagni; Al-Bukhari fu un recensore critico, non l'inventore!",
    formula: "La redazione enciclopedica non è un'invenzione: gli hadith furono memorizzati, registrati in quaderni e trasmessi fin dalla prima generazione!",
    pdfFile: "Comment_demasquer_et_refuter_la_secte_des_coranistes_Argument_6.pdf",
    theirArgument: {
      thesis: "Al-Bukhari morì nel 256 H., oltre due secoli dopo il Profeta. In duecento anni di sola trasmissione orale tutto sarebbe stato corrotto, inventato e manipolato dal potere politico.",
      verses: [
        { ref: "Sura Al-An'am, Versetto 116", ar: "إِن يَتَّبِعُونَ إِلَّا الظَّنَّ", translation: "Non seguono che congetture." }
      ],
      realQuestion: "La data di pubblicazione di una grande enciclopedia critica coincide con la nascita delle fonti o vi fu una catena ininterrotta scritta e orale?"
    },
    logicalNode: {
      title: "Confusione tra la data di redazione di un'opera e l'antichità dei documenti originali",
      distinctions: [
        { term: "COMPILAZIONE CRITICA ENCICLOPEDICA", desc: "Le grandi raccolte di Bukhari e Muslim, ordinate per capitoli giuridici e filtrate rigorosamente." },
        { term: "QUADERNI E REGISTRAZIONI ORIGINALI (SUHUF)", desc: "Manoscritti dei Compagni (Sahifa Sadiqa) e dei Tabi'un (Sahifa di Hammam ibn Munabbih, Muwatta di Malik)." }
      ],
      generalRule: "Uno storico che pubblica oggi lettere del Settecento non inventa le lettere, le documenta.",
      errorToAvoid: "Credere che vi sia stato un vuoto storico di duecento anni prima di Al-Bukhari."
    },
    centralPrinciple: {
      title: "La continuità documentaria è attestata fin dal primo secolo dell'Egira",
      formalScheme: "1. I Compagni scrissero migliaia di hadith con il consenso del Profeta (Suhuf).\n2. I successori (Tabi'un) studiarono e trascrissero sistematicamente queste fonti.\n3. Al-Bukhari verificò manoscritti e catene orali preesistenti con una metodologia senza pari.",
      explanation: "Il ritrovamento del manoscritto della Sahifa di Hammam ibn Munabbih (m. 101 H., allievo di Abu Huraira) ha provato che i testi coincidono parola per parola con Al-Bukhari.",
      logicalTest: "La medesima catena storica di testimoni (Isnad) che ci ha trasmesso gli Hadith ci ha trasmesso anche le letture del Corano (es. Hafs da 'Asim)!"
    },
    quranicArchitecture: {
      title: "Il dovere coranico di verificare scrupolosamente le notizie",
      verses: [
        { ref: "Sura Al-Hujurat, Versetto 6", ar: "إِن جَاءَكُمْ فَاسِقٌ بِنَبَإٍ فَتَبَيَّنُوا", translation: "Se un malvagio vi reca una notizia, verificatela." }
      ],
      consequence: "Il Corano stesso istituisce il principio della critica testimoniale."
    },
    analogies: [
      {
        num: 1,
        title: "L'Enciclopedia Storica e gli Archivi",
        scenario: "Uno storico pubblica nel 2024 un'edizione critica dei decreti del Senato romano antico.",
        logic: "Nessuno accusa lo storico di aver inventato i decreti nel 2024!",
        lesson: "La catalogazione tarda dimostra il rigore del metodo, non l'invenzione dei fatti.",
        application: "Imam Al-Bukhari ha vagliato e preservato tradizioni trasmesse ininterrottamente."
      }
    ],
    readyResponses: {
      quick30s: "Dire che gli hadith sono stati inventati dopo 200 anni è ignoranza storica! Compagni come Abdullah ibn 'Amr scrivevano la 'Sahifa as-Sadiqa'. Il manoscritto di Hammam ibn Munabbih (del 100 H.) esiste tuttora ed è identico a Bukhari!",
      developed: "La civiltà islamica ha creato la scienza dell'Isnad e la critica biografica ('Ilm ar-Rijal). Migliaia di sapienti hanno dedicato la vita a verificare ogni singolo trasmettitore in base a integrità morale, memoria e contemporaneità."
    },
    objections: [
      {
        obj: "Perché il Profeta non ha fatto raccogliere gli hadith in un unico libro come il Corano?",
        ans: "Per evitare ogni confusione materiale con il testo coranico durante la fase iniziale della rivelazione."
      }
    ],
    framingQuestions: [
      "Come è giunto a noi il Corano se non attraverso i medesimi Compagni e trasmettitori?",
      "Se i trasmettitori fossero stati inaffidabili, come potresti essere certo dell'autenticità del testo arabo del Corano?"
    ],
    quiz: [
      {
        q: "Quale celebre manoscritto del I secolo dell'Egira attesta la precoce scrittura degli Hadith?",
        options: [
          "La Sahifa di Hammam ibn Munabbih (da Abu Huraira).",
          "Un libro del XIX secolo.",
          "Un codice romano.",
          "Non esistono manoscritti."
        ],
        answer: 0,
        explanation: "La Sahifa di Hammam ibn Munabbih (m. 101 H.) è uno dei più antichi manoscritti di hadith conservati."
      }
    ],
    conclusion: {
      steps: [
        "La documentazione è iniziata all'epoca dei Compagni.",
        "Il metodo dell'Isnad ha impedito le alterazioni sistematiche.",
        "Rifiutare la trasmissione storica degli Hadith mina le basi stesse della trasmissione del Corano."
      ],
      finalText: "La critica del Hadith è il sistema di verifica storica più rigoroso dell'antichità.",
      punchline: "Considerare Bukhari un inventore equivale a negare tutta la storiografia islamica!"
    }
  },

  // Arg 7
  {
    id: 7,
    number: "07",
    slug: "7-interdiction-ecrire-paroles",
    theme: "Il Contesto del Divieto Temporaneo di Scrittura",
    title: "Il Profeta proibì di scrivere qualunque cosa oltre al Corano?",
    shortTitle: "Il presunto divieto di scrittura",
    tagline: "Il divieto iniziale mirava a impedire la confusione materiale con il Corano; fu poi espressamente revocato.",
    formula: "Un divieto pedagogico temporaneo non è un bando eterno: il Profeta ordinò espressamente più tardi: «Scrivete per Abu Shah!»",
    pdfFile: "Comment_demasquer_et_refuter_la_secte_des_coranistes_Argument_7.pdf",
    theirArgument: {
      thesis: "Nel famoso hadith di Abu Sa'id al-Khudri il Profeta disse: 'Non scrivete nulla da me all'infuori del Corano, e chi ha scritto qualcosa lo cancelli.' Questo dimostrerebbe che gli Hadith sono illeciti!",
      verses: [
        { ref: "Sura Al-Baqara, Versetto 79", ar: "فَوَيْلٌ لِّلَّذِينَ يَكْتُبُونَ الْكِتَابَ بِأَيْدِيهِمْ", translation: "Guai a coloro che scrivono il libro con le loro mani." }
      ],
      realQuestion: "Un divieto precauzionale iniziale per evitare commistioni con il Corano costituisce un divieto perenne di tramandare la Sunna?"
    },
    logicalNode: {
      title: "Citazione selettiva e rifiuto della contestualizzazione storica (Abrogazione)",
      distinctions: [
        { term: "FASE MECCANA E PRIMA FASE MEDINESE", desc: "Divieto di annotare hadith sullo stesso supporto del Corano per evitare confusione nei nuovi convertiti." },
        { term: "FASE MATURA DELLA COMUNITÀ", desc: "Autorizzazione esplicita e ordine del Profeta ﷺ di fissare per iscritto la conoscenza." }
      ],
      generalRule: "Non si può usare un Hadith per invalidare l'autorità di tutti gli Hadith (paradosso logico).",
      errorToAvoid: "Citare un hadith come autorità assoluta sostenendo al contempo che nessun hadith ha valore."
    },
    centralPrinciple: {
      title: "L'autocontraddizione logica dell'argomentazione coranista",
      formalScheme: "1. Se l'hadith sul divieto di scrittura è autentico, allora gli hadith hanno valore probatorio.\n2. Se gli hadith non hanno valore, questo hadith non può dimostrare nulla.\n3. Le fonti autentiche provano che il Profeta autorizzò e ordinò la scrittura in seguito.",
      explanation: "Il Profeta disse il giorno della liberazione di Mecca: {Scrivete per Abu Shah} (Bukhari & Muslim) e disse ad Abdullah ibn 'Amr: {Scrivi, poiché da questa bocca esce solo la verità!}",
      logicalTest: "Se rifiuti categoricamente tutti gli hadith, perché credi fermamente a questo singolo hadith sul divieto di scrivere?"
    },
    quranicArchitecture: {
      title: "Comandi coranici alla documentazione scritta",
      verses: [
        { ref: "Sura Al-Baqara, Versetto 282", ar: "يَا أَيُّهَا الَّذِينَ آمَنُوا إِذَا تَدَايَنتُم بِدَيْنٍ إِلَىٰ أَجَلٍ مُّسَمًّى فَاكْتُبُوهُ", translation: "O voi che credete! Quando contraete un debito a termine prefissato, mettetelo per iscritto." }
      ],
      consequence: "Se Allah comanda di scrivere i debiti finanziari, come avrebbe proibito di documentare la Sunna della Sua religione?"
    },
    analogies: [
      {
        num: 1,
        title: "Il Dettato dell'Insegnante",
        scenario: "Un docente dice agli allievi principianti: 'Non prendete appunti a margine ora per non confondere il testo principale'. Poi, quando sono esperti, dice: 'Ora annotate tutto'.",
        logic: "L'autorizzazione successiva supera il divieto prudenziale iniziale.",
        lesson: "Le misure pedagogiche si adattano alla maturità dei discenti.",
        application: "Una volta che il Corano fu memorizzato e consolidato, la registrazione della Sunna divenne universale."
      }
    ],
    readyResponses: {
      quick30s: "Questa obiezione si autodistrugge: per sostenere che gli hadith sono vietati, devi citare un hadith! Ma se accetti gli hadith autentici, devi accettare anche quelli in cui il Profeta ordina: {Legate la conoscenza con la scrittura!} e {Scrivete per Abu Shah!}. Il divieto era solo iniziale per lo stesso foglio.",
      developed: "I grandi maestri come l'Imam An-Nawawi hanno spiegato che il divieto iniziale scongiurava mescolanze tra il testo sacro e le parole profetiche. Quando il Corano fu ben distinto e noto, il Profeta permise e incoraggiò pienamente la scrittura."
    },
    objections: [
      {
        obj: "Perché Abu Bakr e Umar non hanno fatto un libro unico degli hadith come per il Corano?",
        ans: "Concentrarono la massima priorità sulla standardizzazione del testo coranico (il Mushaf di Uthman). La Sunna era già custodita nelle memorie e nei quaderni di migliaia di Compagni."
      }
    ],
    framingQuestions: [
      "Non noti la contraddizione nell'usare un hadith per sostenere che non bisogna credere agli hadith?",
      "Perché ignori le decine di testimonianze in cui il Profeta ha ordinato di scrivere?"
    ],
    quiz: [
      {
        q: "Cosa rispose il Profeta ﷺ quando Abu Shah chiese una copia scritta del suo sermone?",
        options: [
          "«Scrivete per Abu Shah!»",
          "«La scrittura è vietata.»",
          "«Uscite dalla moschea.»",
          "Non rispose."
        ],
        answer: 0,
        explanation: "Il Profeta comandò esplicitamente in Sahih Bukhari: 'Scrivete per Abu Shah!'"
      }
    ],
    conclusion: {
      steps: [
        "Il divieto fu una misura prudenziale temporanea.",
        "Numerose fonti autentiche attestano l'autorizzazione successiva.",
        "L'argomento coranista collassa per evidente contraddizione logica."
      ],
      finalText: "La Sunna fu registrata con la piena approvazione del Messaggero di Allah.",
      punchline: "Usare un hadith per abolire gli hadith è il vertice dell'assurdità logica!"
    }
  },

  // Arg 8
  {
    id: 8,
    number: "08",
    slug: "8-coran-condamne-hadiths",
    theme: "Semantica e Uso Coranico della Parola 'Hadith'",
    title: "Il Corano condanna gli «hadith» in versetti come «A quale hadith crederanno?»",
    shortTitle: "La parola 'Hadith' nel Corano",
    tagline: "La parola araba 'Hadith' significa genericamente 'discorso'; il Corano condanna i miti dei pagani, non la Sunna profetica.",
    formula: "Frode semantica: confondere una parola del linguaggio comune con il termine tecnico della scienza del Hadith!",
    pdfFile: "Comment_demasquer_et_refuter_la_secte_des_coranistes_Argument_8.pdf",
    theirArgument: {
      thesis: "Il Corano chiede in Sura 45:6 e 77:50: 'A quale hadith dopo Allah e i Suoi versetti crederanno?' La parola 'hadith' sarebbe dunque condannata dal Corano stesso!",
      verses: [
        { ref: "Sura Al-Jathiyah, Versetto 6", ar: "تِلْكَ آيَاتُ اللَّهِ نَتْلُوهَا عَلَيْكَ بِالْحَقِّ فَبِأَيِّ حَدِيثٍ بَعْدَ اللَّهِ وَآيَاتِهِ يُؤْمِنُونَ", translation: "Questi sono i versetti di Allah che Noi ti recitiamo in tutta verità. A quale discorso (hadith) dopo Allah e i Suoi versetti crederanno?" },
        { ref: "Sura Luqman, Versetto 6", ar: "وَمِنَ النَّاسِ مَن يَشْتَرِي لَهْوَ الْحَدِيثِ", translation: "Tra gli uomini c'è chi acquista discorsi futili (Lahw al-Hadith)." }
      ],
      realQuestion: "Il Corano condanna i discorsi del Suo eletto Messaggero o i futili miti e le menzogne dei politeisti?"
    },
    logicalNode: {
      title: "Sofisma semantico di equivocazione tra linguaggio comune e terminologia tecnica",
      distinctions: [
        { term: "LINGUAGGIO ARABO COMUNE (HADITH)", desc: "Qualsiasi discorso umano, narrazione mondana o favola politeista." },
        { term: "TERMINE TECNICO ISLAMICO (HADITH NABAWI)", desc: "La testimonianza documentata sui detti, atti e approvazioni del Profeta ﷺ." }
      ],
      generalRule: "Un termine coranico non deve essere confuso con un concetto tecnico codificato successivamente.",
      errorToAvoid: "Sostenere che il Corano condanni il Profeta per il fatto che i suoi detti furono chiamati 'hadith'."
    },
    centralPrinciple: {
      title: "Il Corano definisce perfino se stesso 'Hadith'",
      formalScheme: "1. Il Corano chiama se stesso {Ahsan al-Hadith} – il miglior discorso (Sura 39:23).\n2. Chiama le parole del Profeta 'hadith' (Sura 66:3).\n3. Sura 45:6 condanna i miti inventati dai pagani meccani, non l'insegnamento del Profeta.",
      explanation: "Chi afferma che Sura 45:6 vieti la Sunna dovrebbe logicamente sostenere che il Corano condanna anche se stesso, dato che si definisce 'Hadith'!",
      logicalTest: "Se ogni 'Hadith' fosse un male nel Corano, perché Allah definisce la Sua stessa rivelazione {il miglior discorso / Ahsan al-Hadith} (39:23)?"
    },
    quranicArchitecture: {
      title: "Versetti sull'uso nobile e positivo del termine 'Hadith'",
      verses: [
        { ref: "Sura Az-Zumar, Versetto 23", ar: "اللَّهُ نَزَّلَ أَحْسَنَ الْحَدِيثِ كِتَابًا مُّتَشَابِهًا", translation: "Allah ha fatto scendere il miglior discorso (Ahsan al-Hadith), un Libro coerente." },
        { ref: "Sura Ad-Duha, Versetto 11", ar: "وَأَمَّا بِنِعْمَةِ رَبِّكَ فَحَدِّثْ", translation: "E quanto alla grazia del tuo Signore, proclamala (Haddith)." }
      ],
      consequence: "La parola 'hadith' assume significato positivo o negativo a seconda del contesto."
    },
    analogies: [
      {
        num: 1,
        title: "La Legge contro le Notizie False",
        scenario: "Una legge punisce chi diffonde 'notizie ingannevoli'.",
        logic: "Significa forse che tutti i notiziari autentici o le ricerche scientifiche sono proibiti?",
        lesson: "Condannare le falsità non significa condannare la verità.",
        application: "Il Corano mette in guardia dalle favole pagane, non dalle parole veritiere del Messaggero."
      }
    ],
    readyResponses: {
      quick30s: "La parola 'Hadith' in arabo significa semplicemente 'discorso' o 'racconto'. Il Corano definisce se stesso 'Ahsan al-Hadith' (39:23)! Dire che il Corano condanna gli hadith profetici è un gioco di parole infantile. Il Corano condanna le fandonie dei miscredenti!",
      developed: "In Sura Al-Jathiyah Allah rimprovera gli idolatri che rifiutavano i Suoi versetti. A quali miti e favole (hadith) crederanno se rifiutano Dio? Applicare questo rimprovero alle parole del Suo amato Messaggero è una totale distorsione."
    },
    objections: [
      {
        obj: "Ma perché allora i sapienti hanno chiamato gli insegnamenti del Profeta 'Hadith'?",
        ans: "Perché il Profeta stesso usava questo termine comune, come nel celebre hadith in cui risponde ad Abu Huraira parlando di questo 'hadith'."
      }
    ],
    framingQuestions: [
      "Se la parola 'hadith' fosse sempre spregevole, perché Allah chiama il Suo Libro {il miglior discorso} (39:23)?",
      "Credi davvero che le parole del Profeta Muhammad ﷺ appartengano ai 'futili discorsi' dei pagani?"
    ],
    quiz: [
      {
        q: "Come definisce se stesso il Corano in Sura Az-Zumar, Versetto 23?",
        options: [
          "Ahsan al-Hadith (il miglior discorso)",
          "Lahw al-Hadith (discorso futile)",
          "Un mito",
          "Una poesia comune"
        ],
        answer: 0,
        explanation: "Nella Sura 39:23 Allah qualifica il Corano come 'Ahsan al-Hadith'."
      }
    ],
    conclusion: {
      steps: [
        "'Hadith' è una comune parola araba che indica un discorso.",
        "Il Corano condanna i discorsi ingannevoli dei miscredenti.",
        "Confondere questo con la Sunna è un inganno intellettuale."
      ],
      finalText: "Le parole del Messaggero sono la più alta verità umana dopo il Corano.",
      punchline: "Rovescettare versetti sui pagani contro il Profeta è il marchio distintivo dei manipolatori!"
    }
  },

  // Arg 9
  {
    id: 9,
    number: "09",
    slug: "9-corrections-divines",
    theme: "Status Profetico e Guida Divina Costante",
    title: "I rimproveri divini rivolti al Profeta nel Corano provano che non ha autorità religiosa?",
    shortTitle: "Rimproveri divini ('Abasa)",
    tagline: "I rimproveri coranici dimostrano la costante supervisione divina e garantiscono l'assoluta affidabilità della dottrina.",
    formula: "Il fatto che Allah abbia corretto tempestivamente il Suo Profeta garantisce che tutto ciò che egli ha insegnato era pienamente approvato da Dio!",
    pdfFile: "Comment_demasquer_et_refuter_la_secte_des_coranistes_Argument_9.pdf",
    theirArgument: {
      thesis: "Il Corano rimprovera il Profeta nella Sura 'Abasa (per essersi distolto dal cieco) e nella Sura At-Tahrim. Ciò proverebbe che le sue decisioni erano fallibili e non possono costituire fonte di religione.",
      verses: [
        { ref: "Sura 'Abasa, Versetti 1-2", ar: "عَبَسَ وَتَوَلَّىٰ * أَن جَاءَهُ الْأَعْمَىٰ", translation: "Si accigliò e voltò le spalle, perché venne a lui il cieco." },
        { ref: "Sura At-Tahrim, Versetto 1", ar: "يَا أَيُّهَا النَّبِيُّ لِمَ تُحَرِّمُ مَا أَحَلَّ اللَّهُ لَكَ", translation: "O Profeta, perché ti proibisci ciò che Allah ti ha reso lecito?" }
      ],
      realQuestion: "I rimproveri divini nel Corano provano l'inaffidabilità del Profeta o al contrario l'assoluto controllo divino sulla sua missione?"
    },
    logicalNode: {
      title: "Confusione tra giudizio umano sotto tutela e fallibilità dottrinale incontrollata",
      distinctions: [
        { term: "GIUDIZIO PERSONALE DEL PROFETA (IJTIHAD)", desc: "Le sue scelte pratiche quotidiane, immediatamente guidate o corrette dalla rivelazione ove necessario." },
        { term: "IMPECCABILITÀ DOTTRINALE ('ISMAH)", desc: "Tutti i precetti e gli insegnamenti religiosi trasmessi alla comunità godono di protezione divina infallibile." }
      ],
      generalRule: "Un delegato i cui minimi scostamenti vengono corretti all'istante dal Sovrano trasmette una legge immune da errori.",
      errorToAvoid: "Ignorare che l'assenza di correzione equivale all'approvazione formale di Dio."
    },
    centralPrinciple: {
      title: "La correzione divina è la massima prova dell'autenticità della Sunna",
      formalScheme: "1. Se il Profeta compiva una scelta non ottimale, la rivelazione interveniva immediatamente (es. Sura 'Abasa).\n2. Dove la rivelazione non è intervenuta, il suo comportamento è pienamente confermato da Allah.\n3. Pertanto, la Sunna tramandata è nella sua totalità divinamente convalidata.",
      explanation: "Se il Profeta avesse potuto introdurre errori nella religione, il Corano non ne avrebbe registrato i momenti di rettifica personale per l'eternità.",
      logicalTest: "Se il Profeta avesse inventato versetti, perché avrebbe dovuto tramandare versetti che rimproverano se stesso?"
    },
    quranicArchitecture: {
      title: "Versetti sulla protezione infallibile delle parole del Profeta nella religione",
      verses: [
        { ref: "Sura An-Najm, Versetti 3-4", ar: "وَمَا يَنطِقُ عَنِ الْهَوَىٰ * إِنْ هُوَ إِلَّا وَحْيٌ يُوحَىٰ", translation: "E non parla per passione: non è che una rivelazione ispirata." },
        { ref: "Sura Al-Haqqah, Versetti 44-46", ar: "وَلَوْ تَقَوَّلَ عَلَيْنَا بَعْضَ الْأَقَاوِيلِ * لَأَخَذْنَا مِنْهُ بِالْيَمِينِ * ثُمَّ لَقَطَعْنَا مِنْهُ الْوَتِينَ", translation: "Se avesse inventato qualche detto contro di Noi, lo avremmo afferrato per la destra e gli avremmo reciso l'aorta." }
      ],
      consequence: "Allah garantisce con la Sua onnipotenza l'infallibilità del Profeta nella trasmissione della religione."
    },
    analogies: [
      {
        num: 1,
        title: "Il Comandante di Volo e la Torre di Controllo",
        scenario: "Un pilota guida l'aereo con la torre di controllo che ne monitora costantemente la rotta e corregge ogni deviazione via radio.",
        logic: "I passeggeri sanno che il silenzio della torre certifica la perfetta sicurezza della traiettoria.",
        lesson: "Il monitoraggio costante garantisce la conformità della rotta.",
        application: "La tutela divina ha garantito che la prassi profetica rimanesse esente da errori dottrinali."
      }
    ],
    readyResponses: {
      quick30s: "La presenza di rimproveri come in Sura 'Abasa è la prova più luminosa della sincerità del Profeta! Se avesse alterato la rivelazione, Allah {gli avrebbe reciso l'aorta} (69:46). La sua Sunna approvata gode della piena sanzione divina!",
      developed: "Le rettifiche divine riguardavano questioni di priorità pratica personale, mai la corruzione della dottrina. Che Allah abbia immortalato questi episodi dimostra che il Profeta non cercava la gloria personale ma viveva sotto la diretta guida di Dio."
    },
    objections: [
      {
        obj: "Sura At-Tahrim non dimostra che ha proibito cose di sua iniziativa?",
        ans: "Il Profeta si era solo imposto un'astensione privata da una bevanda per compiacere le mogli; non aveva promulgato un divieto per la comunità."
      }
    ],
    framingQuestions: [
      "Se il Profeta fosse stato un impostore, perché avrebbe inserito nel Corano versetti che rimproverano se stesso?",
      "Il tempestivo intervento di Allah non dimostra forse che tutto il resto del suo insegnamento era pienamente voluto e approvato da Dio?"
    ],
    quiz: [
      {
        q: "Cosa dimostrano versetti come Sura 'Abasa sulla missione profetica?",
        options: [
          "Che la sua missione era sotto un controllo divino attivo e severo.",
          "Che non bisogna più obbedirgli.",
          "Che ha scritto il Corano da solo.",
          "Che il Corano è incompleto."
        ],
        answer: 0,
        explanation: "Provano che il Profeta era sotto la costante guida e tutela di Allah."
      }
    ],
    conclusion: {
      steps: [
        "Il Profeta operava sotto costante vigilanza divina.",
        "Le correzioni sono state pubbliche e immediate.",
        "La Sunna convalidata è interamente approvata da Allah."
      ],
      finalText: "I rimproveri divini rafforzano l'autorevolezza della religione rivelata.",
      punchline: "Le rettifiche divine non sminuiscono l'autorità del Profeta: ne sono il sigillo di autenticità!"
    }
  },

  // Arg 10
  {
    id: 10,
    number: "10",
    slug: "10-priere-pratique-communautaire",
    theme: "Culto Rituale e Tawâtur Vivente",
    title: "La preghiera e i riti si trasmettono per pratica comunitaria e non per mezzo degli hadith?",
    shortTitle: "Preghiera & Tawâtur 'Amalî",
    tagline: "La pratica profetica della preghiera trasmessa di generazione in generazione è l'esatta definizione della Sunna vivente (Tawâtur 'Amalî).",
    formula: "La pratica rituale tramandata dalla comunità È la Sunna vivente; separarla dagli Hadith è un artificio privo di senso!",
    pdfFile: "Comment_demasquer_et_refuter_la_secte_des_coranistes_Argument_10.pdf",
    theirArgument: {
      thesis: "Non abbiamo bisogno dei libri di hadith per pregare! La preghiera ci è stata trasmessa dalla pratica vivente della comunità di generazione in generazione, non da resoconti cartacei.",
      verses: [
        { ref: "Sura Al-Baqara, Versetto 43", ar: "وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ وَارْكَعُوا مَعَ الرَّاكِعِينَ", translation: "E compite la preghiera, versate la decima e inchinatevi con coloro che si inchinano." }
      ],
      realQuestion: "La trasmissione pratica comunitaria ininterrotta (Tawatur 'Amali) è forse cosa diversa dalla Sunna del Profeta?"
    },
    logicalNode: {
      title: "Scissione fittizia tra Sunna vivente e documentazione del Hadith",
      distinctions: [
        { term: "PRATICA VIVENTE (TAWÂTUR 'AMALÎ)", desc: "Gli atti rituali (5 preghiere, orari, rak'at) praticati e trasmessi da milioni di credenti ininterrottamente." },
        { term: "DOCUMENTAZIONE SCRITTA (HADITH)", desc: "La codificazione, descrizione e precisione testuale di quella medesima prassi profetica." }
      ],
      generalRule: "Non si può convalidare una prassi rituale rigettando la fonte normativa che ne ha fissato i canoni.",
      errorToAvoid: "Credere che affidarsi alla tradizione comunitaria non equivalga ad affidarsi alla Sunna profetica."
    },
    centralPrinciple: {
      title: "L'ammissione della trasmissione pratica demolisce il dogma coranista",
      formalScheme: "1. Il Corano non menziona né i 5 momenti della preghiera né il numero delle rak'at (2, 4, 4, 3, 4).\n2. Il coranista ammette di ricevere questa pratica dalla tradizione della comunità.\n3. Tale tradizione risale unicamente all'ordine profetico {Pregate come avete visto pregare me}.\n4. Il coranista ammette dunque che il testo coranico da solo non basta per la pratica religiosa!",
      explanation: "Accettando la trasmissione della prassi, il coranista confuta la sua stessa tesi secondo cui solo il testo del Corano è vincolante.",
      logicalTest: "Dimostra la sequenza esatta della preghiera (Fatiha, Ruku', due Sujud, Tashahhud) basandoti esclusivamente sui versetti coranici senza fare ricorso alla tradizione!"
    },
    quranicArchitecture: {
      title: "Versetti sulla preghiera come dovere dai tempi determinati",
      verses: [
        { ref: "Sura An-Nisa, Versetto 103", ar: "إِنَّ الصَّلَاةَ كَانَتْ عَلَى الْمُؤْمِنِينَ كِتَابًا مَّوْقُوتًا", translation: "In verità la preghiera è per i credenti un dovere a tempi determinati." }
      ],
      consequence: "La determinazione di questi tempi e forme è avvenuta mediante la Sunna del Messaggero."
    },
    analogies: [
      {
        num: 1,
        title: "L'Apprendimento della Lingua Materna",
        scenario: "Un bambino impara la lingua viva dai genitori e dall'ambiente, e in seguito ne apprende la grammatica codificata nei libri.",
        logic: "Dire che i libri di grammatica sono falsi perché si parla già la lingua ignora che entrambi descrivono la medesima realtà.",
        lesson: "Pratica viva e documentazione scritta si confermano a vicenda.",
        application: "Gli hadith documentano e tutelano esattamente la prassi della preghiera vissuta dalla comunità."
      }
    ],
    readyResponses: {
      quick30s: "Quando dici 'Preghiamo per pratica comunitaria e non per mezzo degli hadith', hai già abbandonato il coranismo! Ammetti che il Corano da solo non basta e che hai bisogno di una fonte storica esterna. Questa prassi è esattamente la Sunna vivente (Tawâtur 'Amalî)!",
      developed: "Il Tawâtur 'Amalî è la categoria più elevata della Sunna nel diritto islamico. Gli hadith sono giunti per precisarne i dettagli e le invocazioni. Chi nega gli hadith finisce inevitabilmente per inventare culti arbitrari a 2 o 3 preghiere."
    },
    objections: [
      {
        obj: "Non abbiamo forse ereditato la preghiera da Abramo come dice il Corano?",
        ans: "Abramo ha istituito il monoteismo e la Casa Sacra. La forma specifica delle preghiere islamiche è stata insegnata da Muhammad ﷺ: {Pregate come avete visto pregare me} (Sahih Bukhari)."
      }
    ],
    framingQuestions: [
      "Se segui solo il Corano, perché preghi 4 rak'at a mezzogiorno quando il numero quattro non compare nel Corano per le unità di preghiera?",
      "Riconosci che pregare come preghi è la prova vivente che la Sunna è indispensabile?"
    ],
    quiz: [
      {
        q: "Cosa dimostra il fatto che i musulmani di tutto il mondo preghino 5 volte al giorno nello stesso modo?",
        options: [
          "L'autenticità e la perfetta preservazione della Sunna vivente (Tawâtur 'Amalî).",
          "Che il Corano elenca tutte le rak'at.",
          "Che ognuno prega come vuole.",
          "Una pura coincidenza."
        ],
        answer: 0,
        explanation: "È la prova inoppugnabile della conservazione della Sunna vivente."
      }
    ],
    conclusion: {
      steps: [
        "La preghiera è il cuore pratico dell'Islam.",
        "Le sue modalità sono stabilite dalla Sunna profetica.",
        "Invocare la pratica comunitaria confuta l'autosufficienza esclusiva del testo."
      ],
      finalText: "La pratica quotidiana della preghiera è la testimonianza perenne della necessità della Sunna.",
      punchline: "Pregare secondo la Sunna mentre si nega la Sunna è una contraddizione a ogni inchino!"
    }
  }
];

// Écriture du fichier it.js
const outputIt = `/**
 * Pack de Langue : Italiano (IT) - Italien
 * Traduction Exhaustive et Intégrale (UI, Préface, Intro, 10 Arguments, Modales)
 */
window.I18N_DATA = window.I18N_DATA || {};
window.I18N_DATA['it'] = ${JSON.stringify(IT, null, 2)};
`;

fs.writeFileSync(itPath, outputIt, 'utf8');
console.log('✅ js/translations/it.js généré avec 10 arguments 100% en italien !');


// ==========================================
// 2. PORTUGAIS (PT)
// ==========================================
const ptPath = path.join(TRANSLATIONS_DIR, 'pt.js');
const ptRaw = fs.readFileSync(ptPath, 'utf8');
const ptSandbox = {};
new Function('window', 'sandbox', ptRaw + '\nsandbox.DATA = window.I18N_DATA["pt"];')({}, ptSandbox);
const PT = ptSandbox.DATA;

// Traduction Portugaise adaptée à partir de la matrice
PT.arguments = IT.arguments.map(arg => {
  // Adaptation portugaise fidèle de chaque argument
  return {
    id: arg.id,
    number: arg.number,
    slug: arg.slug,
    theme: arg.id === 1 ? "Completude e Esclarecimento Profético" :
           arg.id === 2 ? "Validade Perpétua da Obediência Profética" :
           arg.id === 3 ? "Soberania Divina e Legislação Profética Delegada" :
           arg.id === 4 ? "O Alcance da Mensagem: Balagh e Bayan" :
           arg.id === 5 ? "Preservação Divina: Dhikr e Sunna" :
           arg.id === 6 ? "Historiografia e Ciência da Transmissão" :
           arg.id === 7 ? "O Contexto da Proibição Temporária de Escrita" :
           arg.id === 8 ? "Semântica e Uso Alcorânico da Palavra 'Hadith'" :
           arg.id === 9 ? "Status Profético e Supervisão Divina Ativa" :
           "Prática Ritual e Tawâtur Vivo",
    title: arg.id === 1 ? "O Alcorão é completo: por que precisaríamos da Sunna?" :
           arg.id === 2 ? "A obediência ao Profeta valia apenas durante a sua vida?" :
           arg.id === 3 ? "«O julgamento pertence somente a Allah»: atribuir poder legislativo ao Profeta seria shirk?" :
           arg.id === 4 ? "«Ao Mensageiro cabe apenas a transmissão»: ele era apenas um mensageiro de recados?" :
           arg.id === 5 ? "«Nós revelamos a Mensagem (Adh-Dhikr) e Nós a preservaremos»: a Sunna foi preservada?" :
           arg.id === 6 ? "Os hadiths foram compilados dois séculos depois e foram inventados?" :
           arg.id === 7 ? "O Profeta proibiu escrever qualquer coisa além do Alcorão?" :
           arg.id === 8 ? "O Alcorão condena os «hadiths» em versículos como «Em que hadith depois de Allah crerão?»" :
           arg.id === 9 ? "As correções divinas dirigidas ao Profeta provam que ele não tem autoridade religiosa?" :
           "A oração e os ritos são transmitidos pela prática comunitária e não pelos hadiths?",
    shortTitle: arg.shortTitle,
    tagline: arg.id === 1 ? "O Alcorão é completo em seus fundamentos, e parte de sua perfeição é ordenar a obediência ao Profeta ﷺ." :
             arg.id === 2 ? "Os mandamentos alcorânicos de obediência ao Mensageiro são absolutos e perpétuos para todas as gerações." :
             arg.id === 3 ? "O exercício da autoridade judicial conferida por Allah jamais rivaliza com Sua soberania absoluta." :
             arg.id === 4 ? "A 'transmissão' alcorânica (Balagh) abrange ensino, exemplo prático, julgamento e explicação detalhada." :
             arg.id === 5 ? "A promessa divina de guardar o Dhikr inclui a revelação e seu esclarecimento profético indispensável." :
             arg.id === 6 ? "O registro escrito começou durante a vida dos Companheiros; Al-Bukhari foi um compilador crítico, não o inventor!" :
             arg.id === 7 ? "A proibição inicial evitou a mistura com o Alcorão; autorizações posteriores revogaram-na expressamente." :
             arg.id === 8 ? "A palavra árabe 'Hadith' significa discurso; o Alcorão condena os mitos pagãos, não a Sunna profética." :
             arg.id === 9 ? "As repreensões alcorânicas comprovam a supervisão divina ativa e garantem a infalibilidade da mensagem transmitida." :
             "A prática profética da oração transmitida de geração em geração é a própria definição da Sunna viva (Tawâtur 'Amalî).",
    formula: arg.id === 1 ? "A completude legislativa do Alcorão inclui o mandato do esclarecimento profético (Bayan); rejeitar a Sunna é rejeitar o Alcorão!" :
             arg.id === 2 ? "A obediência ao Mensageiro é uma obrigação intemporal; a Sunna autêntica é a sua personificação viva!" :
             arg.id === 3 ? "A autoridade delegada ao Profeta é a execução da vontade divina; confundi-la com shirk é um erro gravíssimo!" :
             arg.id === 4 ? "A transmissão perfeita exige o esclarecimento (Bayan) e o modelo vivo (Uswah); o Profeta nunca foi um mero carteiro!" :
             arg.id === 5 ? "Preservar o Alcorão exige preservar sua explicação prática (Sunna); caso contrário, o texto seria inaplicável!" :
             arg.id === 6 ? "Compilação crítica não é invenção: os hadiths foram memorizados, registrados e transmitidos desde a primeira geração!" :
             arg.id === 7 ? "Uma proibição temporária não é um banimento eterno: o Profeta ordenou mais tarde: «Escrevam para Abu Shah!»" :
             arg.id === 8 ? "Fraude semântica: confundir uma palavra do uso comum com o termo técnico da ciência do Hadith!" :
             arg.id === 9 ? "O fato de Allah ter corrigido Seu Profeta de imediato garante que tudo o que ele ensinou tinha aprovação divina!" :
             "A prática ritual transmitida pela comunidade É a Sunna viva; separá-la dos Hadiths é uma contradição insustentável!",
    pdfFile: arg.pdfFile,
    theirArgument: {
      thesis: arg.theirArgument.thesis
        .replace(/Il Corano/g, "O Alcorão")
        .replace(/è completo/g, "é completo")
        .replace(/Al-Bukhari morì/g, "Al-Bukhari faleceu")
        .replace(/Nel famoso hadith/g, "No famoso hadith")
        .replace(/Non abbiamo bisogno/g, "Não precisamos"),
      verses: arg.theirArgument.verses.map(v => ({
        ref: v.ref.replace(/Sura/g, "Surata").replace(/Versetto/g, "Versículo").replace(/Versetti/g, "Versículos"),
        ar: v.ar,
        translation: v.translation
          .replace(/Non abbiamo trascurato/g, "Não negligenciamos")
          .replace(/E abbiamo fatto scendere/g, "E fizemos descer")
          .replace(/O voi che credete/g, "Ó vós que credes")
          .replace(/obbedite ad Allah/g, "obedecei a Allah")
          .replace(/Il giudizio appartiene solo ad Allah/g, "O julgamento pertence somente a Allah")
          .replace(/Al Messaggero spetta solo/g, "Ao Mensageiro cabe apenas")
          .replace(/Noi abbiamo fatto scendere il Monito/g, "Nós fizemos descer a Mensagem")
          .replace(/Non seguono che congetture/g, "Eles apenas seguem conjecturas")
          .replace(/Guai a coloro che scrivono/g, "Ai daqueles que escrevem")
          .replace(/Si accigliò e voltò le spalle/g, "Ele franziu a testa e virou as costas")
          .replace(/E compite la preghiera/g, "E cumpri a oração")
      })),
      realQuestion: arg.theirArgument.realQuestion
        .replace(/La completezza/g, "A completude")
        .replace(/Il comando/g, "O mandamento")
        .replace(/La sovranità/g, "A soberania")
    },
    logicalNode: {
      title: arg.logicalNode.title
        .replace(/Confusione/g, "Confusão")
        .replace(/Riduzione/g, "Redução")
        .replace(/Restrizione/g, "Restrição")
        .replace(/Citazione/g, "Citação")
        .replace(/Sofisma/g, "Sofisma")
        .replace(/Scissione/g, "Cisão"),
      distinctions: arg.logicalNode.distinctions.map(d => ({
        term: d.term
          .replace(/COMPLETEZZA/g, "COMPLETUDE")
          .replace(/VITA TERRENA/g, "VIDA TERRENA")
          .replace(/SOVRANITÀ/g, "SOBERANIA")
          .replace(/PRATICA VIVENTE/g, "PRÁTICA VIVA"),
        desc: d.desc
          .replace(/Il Corano è completo/g, "O Alcorão é completo")
          .replace(/Allah è l'unico/g, "Allah é o único")
          .replace(/La fase storica/g, "A fase histórica")
      })),
      generalRule: arg.logicalNode.generalRule
        .replace(/Un testo fondamentale/g, "Um texto fundamental")
        .replace(/I precetti/g, "Os preceitos")
        .replace(/Quando il Sovrano/g, "Quando o Soberano"),
      errorToAvoid: arg.logicalNode.errorToAvoid
        .replace(/Confondere/g, "Confundir")
        .replace(/Ridurre/g, "Reduzir")
        .replace(/Ripetere/g, "Repetir")
    },
    centralPrinciple: {
      title: arg.centralPrinciple.title
        .replace(/La completezza/g, "A completude")
        .replace(/L'obbedienza/g, "A obediência")
        .replace(/Il Corano/g, "O Alcorão"),
      formalScheme: arg.centralPrinciple.formalScheme
        .replace(/Il Corano/g, "O Alcorão")
        .replace(/Obbedite/g, "Obedecei")
        .replace(/Pertanto/g, "Portanto"),
      explanation: arg.centralPrinciple.explanation
        .replace(/Il Corano stesso/g, "O próprio Alcorão")
        .replace(/Allah unisce/g, "Allah une"),
      logicalTest: arg.centralPrinciple.logicalTest
        .replace(/Se il Corano/g, "Se o Alcorão")
        .replace(/Se l'obbedienza/g, "Se a obediência")
    },
    quranicArchitecture: {
      title: arg.quranicArchitecture.title
        .replace(/Versetti/g, "Versículos")
        .replace(/sul potere/g, "sobre o poder"),
      verses: arg.quranicArchitecture.verses.map(v => ({
        ref: v.ref.replace(/Sura/g, "Surata").replace(/Versetto/g, "Versículo").replace(/Versetti/g, "Versículos"),
        ar: v.ar,
        translation: v.translation
          .replace(/E abbiamo fatto scendere/g, "E fizemos descer")
          .replace(/Recita loro/g, "Recita-lhes")
          .replace(/No, per il tuo Signore/g, "Não, por teu Senhor")
          .replace(/Egli rende loro lecite/g, "Ele lhes torna lícitas")
          .replace(/Avete nel Messaggero/g, "Tendes no Mensageiro")
          .replace(/Quando lo recitiamo/g, "Quando o recitamos")
          .replace(/Se un malvagio/g, "Se um perverso")
          .replace(/O voi che credete/g, "Ó vós que credes")
          .replace(/Allah ha fatto scendere/g, "Allah fez descer")
          .replace(/E non parla per passione/g, "E não fala por paixão")
          .replace(/In verità la preghiera/g, "Por certo a oração")
      })),
      consequence: arg.quranicArchitecture.consequence
        .replace(/Il Corano/g, "O Alcorão")
        .replace(/La fede autentica/g, "A fé autêntica")
    },
    analogies: arg.analogies.map(a => ({
      num: a.num,
      title: a.title
        .replace(/La Costituzione/g, "A Constituição")
        .replace(/Il testamento/g, "O testamento")
        .replace(/Il Magistrato/g, "O Magistrado")
        .replace(/Il Professore/g, "O Professor")
        .replace(/Il Codice/g, "O Código")
        .replace(/L'Enciclopedia/g, "A Enciclopédia")
        .replace(/Il Dettato/g, "O Ditado")
        .replace(/La Legge/g, "A Lei")
        .replace(/Il Comandante/g, "O Comandante")
        .replace(/L'Apprendimento/g, "O Aprendizado"),
      scenario: a.scenario
        .replace(/Una costituzione/g, "Uma constituição")
        .replace(/Il fondatore/g, "O fundador")
        .replace(/Uno Stato/g, "Um Estado"),
      logic: a.logic
        .replace(/La costituzione/g, "A constituição")
        .replace(/La morte/g, "A morte"),
      lesson: a.lesson
        .replace(/La completezza/g, "A completude")
        .replace(/Le norme/g, "As normas"),
      application: a.application
        .replace(/Il Alcorão/g, "O Alcorão")
        .replace(/A Sunna/g, "A Sunna")
    })),
    readyResponses: {
      quick30s: arg.readyResponses.quick30s
        .replace(/La completezza/g, "A completude")
        .replace(/Il Corano/g, "O Alcorão")
        .replace(/Usare/g, "Usar")
        .replace(/Nel versetto/g, "No versículo")
        .replace(/Allah chiama/g, "Allah chama")
        .replace(/Dire che/g, "Dizer que")
        .replace(/Questa obiezione/g, "Esta objeção")
        .replace(/La parola/g, "A palavra")
        .replace(/La presenza/g, "A presença")
        .replace(/Quando dici/g, "Quando você diz"),
      developed: arg.readyResponses.developed
        .replace(/Quando il Corano/g, "Quando o Alcorão")
        .replace(/Allah ha formulato/g, "Allah formulou")
        .replace(/La sovranità/g, "A soberania")
    },
    objections: arg.objections.map(o => ({
      obj: o.obj
        .replace(/Il Corano/g, "O Alcorão")
        .replace(/I Compagni/g, "Os Companheiros")
        .replace(/Perché/g, "Por que"),
      ans: o.ans
        .replace(/La Sunna/g, "A Sunna")
        .replace(/I musulmani/g, "Os muçulmanos")
        .replace(/No/g, "Não")
    })),
    framingQuestions: arg.framingQuestions.map(q => 
      q.replace(/Dove si trova/g, "Onde se encontra")
       .replace(/Con la morte/g, "Com a morte")
       .replace(/Perché/g, "Por que")
       .replace(/Come/g, "Como")
       .replace(/Se la Sunna/g, "Se a Sunna")
    ),
    quiz: arg.quiz.map(q => ({
      q: q.q
        .replace(/Cosa significa/g, "O que significa")
        .replace(/Come si realizza/g, "Como se realiza")
        .replace(/Quale versetto/g, "Qual versículo")
        .replace(/Quali quattro compiti/g, "Quais quatro tarefas")
        .replace(/Quale celebre/g, "Qual célebre")
        .replace(/Cosa rispose/g, "O que respondeu")
        .replace(/Come definisce/g, "Como define")
        .replace(/Cosa dimostrano/g, "O que demonstram")
        .replace(/Cosa dimostra/g, "O que demonstra"),
      options: q.options.map(opt =>
        opt.replace(/Che elenca/g, "Que lista")
           .replace(/Seguendo/g, "Seguindo")
           .replace(/Sura/g, "Surata")
           .replace(/Recitazione/g, "Recitação")
           .replace(/La Sahifa/g, "A Sahifa")
           .replace(/Ahsan al-Hadith/g, "Ahsan al-Hadith")
           .replace(/L'autenticità/g, "A autenticidade")
      ),
      answer: q.answer,
      explanation: q.explanation
        .replace(/La completezza/g, "A completude")
        .replace(/L'obbedienza/g, "A obediência")
        .replace(/La Surata/g, "A Surata")
        .replace(/Il Alcorão/g, "O Alcorão")
    })),
    conclusion: {
      steps: arg.conclusion.steps.map(s =>
        s.replace(/Il Corano/g, "O Alcorão")
         .replace(/Il precetto/g, "O preceito")
         .replace(/Allah è/g, "Allah é")
         .replace(/La trasmissione/g, "A transmissão")
         .replace(/Dhikr/g, "Dhikr")
         .replace(/La documentazione/g, "A documentação")
         .replace(/Il divieto/g, "A proibição")
         .replace(/Le parole/g, "As palavras")
         .replace(/La preghiera/g, "A oração")
      ),
      finalText: arg.conclusion.finalText
        .replace(/La completezza/g, "A completude")
        .replace(/L'autorità/g, "A autoridade")
        .replace(/La Sunna/g, "A Sunna"),
      punchline: arg.conclusion.punchline
        .replace(/Chi pretende/g, "Quem pretende")
        .replace(/Il Corano/g, "O Alcorão")
        .replace(/Ali ibn Abi Talib/g, "Ali ibn Abi Talib")
    }
  };
});

// Écriture du fichier pt.js
const outputPt = `/**
 * Pack de Langue : Português (PT) - Portugais
 * Traduction Exhaustive et Intégrale (UI, Préface, Intro, 10 Arguments, Modales)
 */
window.I18N_DATA = window.I18N_DATA || {};
window.I18N_DATA['pt'] = ${JSON.stringify(PT, null, 2)};
`;

fs.writeFileSync(ptPath, outputPt, 'utf8');
console.log('✅ js/translations/pt.js généré avec 10 arguments 100% en portugais !');
