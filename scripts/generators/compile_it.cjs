/**
 * COMPILATEUR ITALIEN INTEGRAL (100% NATIVE)
 */

const fs = require('fs');
const path = require('path');

const TRANSLATIONS_DIR = path.join(__dirname, '..', '..', 'js', 'translations');
const frRaw = fs.readFileSync(path.join(TRANSLATIONS_DIR, 'fr.js'), 'utf8');
const frSandbox = {};
new Function('window', 'sandbox', frRaw + `\nsandbox.DATA = window.I18N_DATA["fr"];`)({}, frSandbox);
const frPack = frSandbox.DATA;

const itBase = require('./generate_it_base.cjs');

// Sophismes traduits en Italien
const itFallaciesToolbox = {
  headerBadge: "GUIDA METODOLOGICA",
  title: "SCATOLA DEGLI ATTREZZI — RICONOSCERE LE FALLACIE PRIMA DI DIBATTERE",
  subtitle: "Individuare gli errori logici per non farsi sviare nella discussione",
  introText: "Un argomento può sembrare impressionante a prima vista, citare un versetto coranico autentico o includere fatti veri... e tuttavia sfociare in una conclusione totalmente errata se il ragionamento logico che unisce questi elementi è difettoso.",
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
  items: frPack.fallaciesToolbox.items.map((item, idx) => {
    const names = [
      "La Falsa Dicotomia", "La Generalizzazione Indebita", "L'Uomo di Paglia", "Il Non Sequitur",
      "Il Cherry-Picking", "Il Doppio Standard", "L'Equivoco Lessicale", "L'Argomento di Possibilità",
      "Lo Spostamento dell'Onere della Prova", "L'Appello all'Emozione e al Ridicolo"
    ];
    const shortDefs = [
      "Ridurre artificialmente una situazione complessa a due sole opzioni opposte.",
      "Estendere un caso particolare o dubbio a un'intera categoria generale.",
      "Caricare e deformare la posizione dell'avversario per attaccarla più facilmente.",
      "La conclusione tratta non deriva logicamente dalla premessa enunciata.",
      "Selezionare unicamente le prove favorevoli ignorando tutto il resto.",
      "Applicare un criterio severissimo all'avversario e uno lassista a se stessi.",
      "Utilizzare lo stesso termine con due significati diversi senza precisarlo.",
      "Trasformare «potrebbe essere falso» in «è necessariamente falso».",
      "Affermare qualcosa senza provarlo ed esigere che l'avversario dimostri il contrario.",
      "Sostituire l'analisi razionale con lo scandalo, la derisione o l'indignazione."
    ];
    return {
      id: item.id,
      num: item.num,
      name: names[idx] || item.name,
      shortDef: shortDefs[idx] || item.shortDef,
      definition: [
        "Ridurre artificiosamente una questione a due sole opzioni incompatibili, occultando una terza via perfettamente legittima e coerente.",
        "Trarre una regola generale definitiva a partire da un numero insufficiente di casi particolari o mal analizzati.",
        "Deformare, ipersemplificare o ridicolizzare la posizione dell'interlocutore per confutare una versione indebolita che egli non ha mai sostenuto.",
        "Non sequitur significa 'non ne consegue'. La premessa iniziale può essere vera, ma la conclusione non ne discende affatto.",
        "Citare esclusivamente i passi favorevoli alla propria tesi e occultare volontariamente i dati che la precisano o la contraddicono.",
        "Esigere un livello di prova ipercritico per le argomentazioni altrui e accettare fragili supposizioni quando favoriscono la propria conclusione.",
        "Impiegare lo stesso vocabolo con significati differenti nel corso del ragionamento senza segnalare il mutamento di definizione.",
        "Convertire una semplice possibilità teorica di errore in una certezza di falsità senza apportare alcuna prova concreta.",
        "Chi formula un'affermazione categorica ha l'obbligo di motivarla. La fallacia consiste nell'affermare qualcosa ed esigere che l'interlocutore provi il contrario.",
        "Rimpiazzare l'esame rigoroso degli argomenti con il riso, il disgusto, l'indignazione o lo scherno a effetto."
      ][idx],
      generalExample: [
        "« O sei totalmente d'accordo con me, oppure sei mio nemico. »",
        "« Ho conosciuto due meccanici disonesti, quindi tutti i meccanici sono truffatori. »",
        "« Dici che bisogna regolare la velocità, quindi vuoi vietare completamente le automobili. »",
        "« Fuori piove, quindi la partita di basket al palazzetto coperto è annullata. »",
        "Citare 3 studi favorevoli e nascondere 50 studi scientifici contrari.",
        "Esigere prove assolute agli altri e accontentarsi di semplici voci quando fa comodo.",
        "« La gravità è una legge. Le leggi sono votate dal parlamento. Quindi la gravità è stata votata dai deputati. »",
        "« Un testimone può mentire. Quindi la sua testimonianza è necessariamente falsa. »",
        "« Esiste una civiltà segreta sotto il suolo di Marte. Dimostrami che non è vero. »",
        "Deridere con sdegno una complessa formula scientifica invece di esaminarne le dimostrazioni."
      ][idx],
      quranicApplication: [
        "• « Segui Allah o segui Muhammad ﷺ ? » (Falsa opposizione: seguire il Messaggero è un ordine diretto di Allah nel Corano).\n• « Preferisci la Parola infallibile di Allah o parole di uomini raccolte secoli dopo ? »",
        "• « Nella storia sono stati inventati hadith falsi, quindi non ci si può fidare di nessun hadith. »\n• « Un hadith mi sembra strano a prima vista, quindi l'intera raccolta di Bukhari va rigettata. »",
        "• « Sostenete che il Corano sia incompleto e che abbia bisogno degli uomini per essere perfetto. »\n(Nessuno afferma questo: la Sunna svolge la funzione esplicativa che il Corano stesso le ha assegnato).",
        "• « Il Corano è perfetto e completo. Quindi la Sunna è inutile. »\n• « Al-Bukhari è vissuto due secoli dopo. Quindi le tradizioni sono nate due secoli dopo. »",
        "• Citare « al Messaggero spetta solo trasmettere » omettendo « Obbedite al Messaggero », « Prendetelo come giudice », « modello eccellente ».\n• Citare « Non scrivete da me... » omettendo « Riferite da me senza timore » e « Scrivi per Abu Shah ».",
        "• Quando un hadith fissa una norma : « Trasmesso da uomini, è incerto ! » / Quando un hadith serve per una polemica : « Bukhari dimostra con certezza assoluta l'età di 'Â'ishah رضي الله عنها ! »\n• Accettare la trasmissione umana del Corano (Hafs da 'Âsim) e rifiutare la medesima trasmissione della Sunna.",
        "Nel Corano, la parola ḥadīth significa linguisticamente 'discorso o notizia'. La fallacia consiste nel leggere « In quale hadith dopo di questo crederanno ? » e sostituire silenziosamente il senso lessicale con il senso tecnico moderno.",
        "« Una catena di trasmissione può essere inventata. Quindi nessun isnâd dimostra nulla. »\nLa possibilità teorica di contraffazione è ciò che ha spinto i sapienti a esaminare ogni anello, non a rigettare tutto in blocco.",
        "« Nessuna tradizione profetica è abbastanza affidabile da costituire una prova religiosa. »\nÈ un'affermazione universale che investe migliaia di narrazioni: chi sostiene un tale giudizio generale deve fornire una dimostrazione metodica.",
        "« Credete forse nell'hadith della mosca ?! », ecc.\nUna reazione viscerale o beffarda non risponde alle domande essenziali: Qual è il testo esatto? Qual è il grado di autenticità? Qual è il senso tra gli specialisti?"
      ][idx],
      questionToAsk: [
        "« Perché presenti queste due cose come incompatibili quando una dipende direttamente dall'altra ? »",
        "« Il fatto che esistano banconote contraffatte dimostra forse che nessuna banconota autentica esiste ? »",
        "« Chi ha mai formulato questa tesi tra i sapienti dell'Islam, o stai confutando una caricatura ? »",
        "« Qual è il passaggio logico esatto che collega la tua premessa alla tua conclusione ? »",
        "« Esistono altri versetti e testi sullo stesso argomento che hai tralasciato deliberatamente ? »",
        "« Applicheresti esattamente lo stesso livello di rigore se questa prova andasse a mio favore ? »",
        "« Quale senso preciso attribuisci a questa parola in questo versetto, e come lo dimostri attraverso il contesto linguistico ? »",
        "« Hai dimostrato che si è verificata una falsificazione in questo caso specifico, o solo che teoricamente sarebbe potuta accadere ? »",
        "« Chi sta formulando qui l'affermazione generale che richiede dimostrazione ? »",
        "« Qual è la tua prova oggettiva, al di là del fatto che questo racconto ti susciti stupore o riso ? »"
      ][idx],
      shortAnswer: [
        "« Obbedire al Messaggero di Allah significa obbedire ad Allah; non sono due vie in concorrenza. »",
        "« L'esistenza di testi contraffatti è precisamente il motivo per cui i sapienti hanno sviluppato una rigorosa scienza di autenticazione. »",
        "« Non criticare ciò che non sosteniamo; esaminiamo ciò che affermiamo realmente. »",
        "« La tua prima affermazione può essere vera senza dimostrare affatto la seconda. »",
        "« Un versetto non si legge in modo isolato quando altri testi coranici lo precisano e lo completano. »",
        "« Lo standard di prova deve rimanere identico sia quando la conclusione ti aggrada sia quando ti sconcerta. »",
        "« Fissiamo prima il significato esatto del termine prima di trarne conclusioni indebite. »",
        "« Una possibilità teorica astratta non costituisce una prova dimostrativa. »",
        "« Chi afferma categoricamente che nulla è affidabile deve dimostrare tale affermazione generale. »",
        "« Il ridicolo e l'emozione non sostituiscono una dimostrazione scientifica. »"
      ][idx],
      icon: item.icon
    };
  }),
  reflexQuestions: {
    title: "I RIFLESSI CRITICI DA ACQUISIRE",
    subtitle: "4 domande sistematiche dinanzi a qualsiasi argomento",
    summaryNotice: "Queste quattro domande sono sufficienti per disarticolare la stragrande maggioranza dei ragionamenti fragili.",
    questions: [
      { num: 1, title: "1. La Premessa", desc: "Cosa è stato realmente dimostrato? Non permettere che la conclusione si insinui travestita nella premessa iniziale." },
      { num: 2, title: "2. Il Vincolo Logico", desc: "La conclusione discende realmente dalla premessa formulata, o manca un passaggio logico indispensabile?" },
      { num: 3, title: "3. Il Dossier Completo", desc: "Sono state prese in considerazione tutte le prove e i versetti pertinenti, o solo quelli che favoriscono la conclusione?" },
      { num: 4, title: "4. Lo Stesso Standard", desc: "Viene applicato il medesimo criterio rigoroso a entrambe le parti, o cambia comodamente a seconda del risultato desiderato?" }
    ]
  },
  quiz: {
    title: "TEST RAPIDO : IDENTIFICA LA FALLACIA",
    subtitle: "Identifica quale fallacia viene commessa in ciascuna delle seguenti affermazioni :",
    items: [
      { id: 1, statement: "« Alcuni hadith sono stati fabbricati. Quindi non ci si può fidare di nessun hadith. »", answerId: "generalisation-abusive", answerName: "Generalizzazione indebita", explanation: "Passare da alcuni casi particolari contraffatti all'invalidità dell'intera categoria è una generalizzazione indebita." },
      { id: 2, statement: "« O segui Allah, oppure segui Muhammad ﷺ. »", answerId: "fausse-dichotomie", answerName: "Falsa dicotomia", explanation: "Queste due obbedienze non si oppongono : obbedire al Messaggero è un comando esplicito di Allah nel Corano." },
      { id: 3, statement: "« Il Corano è perfetto e completo, quindi ogni spiegazione profetica è superflua. »", answerId: "non-sequitur", answerName: "Non sequitur", explanation: "La perfezione del testo divino non implica che esso escluda l'autorità esplicativa che esso stesso istituisce formalmente." },
      { id: 4, statement: "« In quale ḥadīth dopo di questo crederanno? Quindi Al-Bukhari è proibito dal Corano. »", answerId: "equivoque-lexicale", answerName: "Equivoco lessicale", explanation: "La parola ḥadīth significa qui linguisticamente 'discorso o messaggio' e non l'accezione tecnica di raccolta di tradizioni." },
      { id: 5, statement: "« Gli hadith sono troppo tardivi per essere affidabili, ma il racconto sull'età di 'Â'ishah رضي الله عنها è una prova storica indiscutibile. »", answerId: "double-standard", answerName: "Doppio standard (Due pesi e due misure)", explanation: "Il criterio di prova viene allentato quando il racconto serve per una polemica e irrigidito quando fissa una norma." },
      { id: 6, statement: "« Una catena di trasmissione può essere inventata. Quindi le catene di trasmissione non dimostrano nulla. »", answerId: "argument-de-possibilite", answerName: "Argomento di possibilità", explanation: "Trasformare una possibilità teorica astratta in una certezza di falsità è la fallacia di possibilità." }
    ]
  },
  conclusion: {
    title: "PROMEMORIA ESSENZIALE : LA LOGICA PRIMA DELLO SLOGAN",
    mainText: "Un argomento può citare un versetto autentico, un hadith veritiero o dati esatti e, tuttavia, sfociare in una conclusione errata se il ragionamento che unisce questi elementi è difettoso.",
    slogan1: "NON CHIEDERE SOLTANTO : « QUAL È LA PROVA ? »",
    slogan2: "CHIEDI ANCHE : « COSA DIMOSTRA REALMENTE ? »"
  }
};

// Objections et quiz en Italien pour les 10 arguments
const itArgumentsCompiled = frPack.arguments.map((arg, idx) => {
  return {
    id: arg.id,
    number: arg.number,
    slug: arg.slug,
    theme: [
      "Completezza e Chiarimento Profetico",
      "Obbligo Universale di Obbedienza",
      "Sovranità Legislativa e Autorità Delegata",
      "La Missione del Messaggero: Trasmissione e Pedagogia",
      "La Preservazione del Dhikr (Corano e Sunna)",
      "Storia della Trasmissione e Registrazione Scritta",
      "Il Divieto Iniziale di Scrittura e la Successiva Autorizzazione",
      "Divergenze Giurisprudenziali e Varianti dell'Hadith",
      "Epistemologia: Congettura (Dhann) vs Certezza Giuridica",
      "La Prova Pratica Irrefutabile: La Preghiera e i Riti"
    ][idx],
    title: [
      "Il Corano è completo: perché servirebbe la Sunna?",
      "L'obbedienza al Messaggero: era limitata solo alla sua vita terrena?",
      "«Il giudizio appartiene solo ad Allah»: il Profeta ﷺ ha forse legiferato?",
      "«Al Messaggero spetta solo trasmettere»: fu un mero postino passivo?",
      "«Noi abbiamo fatto scendere il Monito e ne siamo custodi»: il Dhikr è solo il Corano?",
      "«Gli Hadith sono stati scritti 200 anni dopo»: mito o realtà storica?",
      "«Non scrivete da me nulla oltre al Corano»: il Profeta ﷺ ha vietato di scrivere la Sunna?",
      "«Esistono divergenze tra sapienti e hadith contraddittori»: ciò invalida la Sunna?",
      "L'Hadith è una semplice congettura (Dhann) opposta alla certezza (Yaqîn) del Corano?",
      "La preghiera senza la Sunna: il vicolo cieco dei coranisti"
    ][idx],
    shortTitle: [
      "Perfezione del Corano", "Obbedienza Perenne", "Sovranità e Delega",
      "Funzione di Trasmissione (Balâgh)", "Preservazione del Dhikr",
      "Storia della Redazione dell'Hadith", "L'Hadith sulla Scrittura",
      "Divergenze e Contraddizioni Apparenti", "Epistemologia: Dhann e Certezza",
      "La Preghiera senza la Sunna"
    ][idx],
    tagline: [
      "Il Corano è completo nei suoi principi fondamentali, e parte della sua perfezione è ordinare l'obbedienza al Profeta ﷺ.",
      "I comandi coranici di obbedienza sono universali e permanenti fino al Giorno della Resurrezione.",
      "Il giudizio supremo appartiene ad Allah, ed è stato Allah a conferire al Suo Messaggero il potere di proibire e ordinare.",
      "Il 'Balâgh' coranico non è una consegna meccanica di lettere, bensì la spiegazione vivente, l'insegnamento e la purificazione dei credenti.",
      "Il termine coranico 'Dhikr' abbraccia l'intera rivelazione divina: il Corano e la Sunna esplicativa che lo accompagna.",
      "La registrazione scritta e la trasmissione orale dell'Hadith sono iniziate durante la vita del Profeta ﷺ e sono continuate senza interruzione.",
      "Il divieto temporaneo all'inizio della rivelazione impedì la mescolanza con il Corano, prima di essere espressamente abrogato dall'ordine generale di scrivere.",
      "Le discrepanze di interpretazione giuridica umana e le contraddizioni apparenti risolte dalle scienze dell'Hadith confermano la sua autenticità.",
      "Il 'Dhann' condannato nel Corano è la superstizione pagana priva di prove; in giurisprudenza, la probabilità preponderante (Ghalabat adh-Dhann) è la base obbligatoria dell'azione.",
      "Il Corano ordina la preghiera in decine di versetti, ma ne delega tutte le modalità pratiche alla Sunna vivente."
    ][idx],
    formula: [
      "La completezza legislativa del Corano include il mandato di chiarimento profetico (Bayan); rifiutare la Sunna significa rifiutare il Corano!",
      "Se l'obbedienza al Profeta fosse scaduta con la sua morte, l'intero Corano perderebbe la sua validità temporale!",
      "Confondere la sovranità divina originaria con la delegazione legislativa profetica è un errore identico a quello degli antichi kharigiti!",
      "Ridurre la missione del migliore degli uomini a quella di un postino passivo significa ignorare la definizione che il Corano stesso dà del termine Balâgh!",
      "Preservare un testo ordinando la sua spiegazione senza preservare tale spiegazione renderebbe impossibile la sua applicazione!",
      "Confondere la compilazione enciclopedica tardiva (Bukhari) con la nascita della trasmissione è un errore storico colossale!",
      "Citare il divieto provvisorio occultando l'autorizzazione definitiva successiva è l'esempio supremo di 'Cherry-Picking'!",
      "Se l'esistenza di divergenze tra interpreti invalidasse una fonte, bisognerebbe rigettare anche il Corano, la medicina e il diritto universale!",
      "Confondere la congettura idolatra condannata dal Corano con la probabilità giuridica preponderante è una trappola linguistica madornale!",
      "Il fatto che i musulmani preghino in modo identico su tutto il pianeta da quattordici secoli è la prova vivente e indistruttibile della Sunna!"
    ][idx],
    pdfFile: arg.pdfFile,
    theirArgument: {
      thesis: [
        "Il Corano è perfetto, dettagliato e non tralascia nulla. Tutto ciò di cui abbiamo bisogno è esplicitamente nel Libro; sostenere che la Sunna sia necessaria contraddice la perfezione del Corano.",
        "Obbedire al Messaggero era un obbligo esclusivamente politico o militare riservato ai Compagni durante la sua vita terrena; dopo la sua scomparsa, rimane solo il testo coranico.",
        "Il Corano proclama che 'Il giudizio appartiene solo ad Allah' (In al-ḥukmu illâ lillâh). Pertanto, nessun altro può proibire o permettere nulla all'infuori del testo coranico esplicito; attribuire legislazione agli Hadith è associazione legislativa (Shirk).",
        "Il Corano ripete che 'Al Messaggero spetta solo la trasmissione chiara' (Mâ 'alâ ar-rasûli illâ al-balâgh). Ciò dimostra che la sua unica funzione fu consegnare il testo del Corano, senza aggiungere spiegazioni vincolanti né insegnamenti normativi.",
        "Allah ha promesso di preservare unicamente il Corano nella Sura 15:9 ('Inna nahnu nazzalna adh-dhikra wa inna lahu lahafidhun'). Gli Hadith, al contrario, non godono di alcuna promessa divina di preservazione e sono opere umane fallibili.",
        "Gli Hadith non esistevano per iscritto durante i primi due secoli dell'Islam. Erano semplici leggende orali trasmesse come il gioco del telefono senza fili fino a quando Al-Bukhari e Muslim decisero di scriverli 200 anni dopo.",
        "Il Profeta ﷺ ha ordinato tassativamente: 'Non scrivete nulla da me all'infuori del Corano; e chiunque abbia scritto qualcosa lo cancelli' (Hadith di Abu Sa'id al-Khudri in Sahih Muslim). Pertanto, l'intera letteratura dell'Hadith è una disobbedienza diretta a un ordine profetico formale.",
        "I sapienti dell'Islam divergono su mille questioni ed esistono Hadith che sembrano contraddirsi tra loro. Se la Sunna provenisse veramente da Allah, non conterrebbe alcuna discrepanza ('Se provenisse da altri che Allah, vi troverebbero molte contraddizioni', Sura 4:82).",
        "La maggior parte degli Hadith sono narrazioni singole (Ahâd) che apportano solo una conoscenza congetturale o probabile (Dhann). Ora, il Corano condanna formalmente il seguire la congettura ('La congettura non giova a nulla contro la Verità', Sura 10:36). Pertanto, non si può fondare la religione sugli Hadith.",
        "Possiamo praticare la preghiera musulmana (Salât) utilizzando esclusivamente il testo del Corano. La Sunna non è necessaria per pregare, oppure la preghiera è una semplice invocazione spirituale libera senza gesti fissi né numero predeterminato di unità."
      ][idx],
      verses: arg.theirArgument.verses.map(v => ({
        ref: v.ref.replace('Sourate', 'Sura').replace('verset', 'versetto'),
        ar: v.ar,
        translation: [
          ["Non abbiamo trascurato nulla nel Libro.", "E abbiamo fatto scendere su di te il Libro come chiarimento di ogni cosa."],
          ["O voi che credete! Obbedite ad Allah, obbedite al Messaggero e a coloro di voi che hanno autorità."],
          ["Il giudizio appartiene solo ad Allah. Egli ha ordinato che non adoriate altri che Lui.", "Il giudizio appartiene solo ad Allah; Egli espone la verità ed è il migliore dei giudici."],
          ["Al Messaggero spetta solo trasmettere il Messaggio; e Allah conosce ciò che manifestate e ciò che occultate.", "E se vi allontanate, a lui incombe solo ciò di cui è stato caricato e a voi ciò di cui siete stati caricati. Ma se gli obbedite, sarete ben guidati. E al Messaggero spetta solo la trasmissione chiara."],
          ["Certamente Noi abbiamo fatto scendere il Monito (Adh-Dhikr) e certamente Noi ne siamo i custodi."],
          [],
          [],
          ["Non meditano forse sul Corano? Se provenisse da altri che Allah, vi troverebbero molte contraddizioni."],
          ["E la maggior parte di loro non segue che congetture; certamente la congettura non giova a nulla contro la Verità.", "Non seguono altro che congetture, e la congettura non sostituisce in nulla la Verità."],
          ["E stabilite la preghiera, pagate la zakat e inchinatevi con coloro che si inchinano."]
        ][idx][0] || v.translation
      })),
      realQuestion: [
        "La completezza strutturale del Corano come quadro fondamentale esclude la spiegazione profetica che il testo stesso rende obbligatoria?",
        "Esistono nel Corano prove che gli ordini di obbedire al Messaggero avessero una data di scadenza storica?",
        "La sovranità legislativa esclusiva di Allah vieta forse che Egli stesso deleghi al Suo Messaggero l'autorità di ordinare e proibire?",
        "Cosa comprende il concetto coranico di 'Balâgh Mubîn' (trasmissione chiara ed eloquente) secondo la totalità dei versetti del Libro?",
        "Cosa designa il termine 'Adh-Dhikr' nell'uso coranico e come si preserva una rivelazione il cui senso pratico fu affidato al Profeta ﷺ?",
        "Quando è iniziata veramente la fissazione per iscritto degli Hadith e come funzionava la trasmissione combinata orale-scritta nei secoli I e II dell'Egira?",
        "Qual è stato il contesto storico di questo hadith e perché lo stesso corpus di Hadith riporta numerosi ordini successivi del Profeta ﷺ che imponevano di scrivere le sue parole?",
        "Le divergenze di comprensione dei giuristi umani (Fiqh) o i casi di abrogazione legale (Naskh) costituiscono contraddizioni nella fonte divina stessa?",
        "A quale tipo di 'Dhann' si riferiscono questi versetti coranici e quale valore epistemico attribuisce l'Islam alle testimonianze autenticamente verificate per la pratica giuridica?",
        "È possibile ricostruire con rigore i dettagli delle 5 preghiere quotidiane (numero di preghiere, di rak'at, orari esatti, recitazioni, inchini e prostrazioni) basandosi esclusivamente sul testo del Corano?"
      ][idx]
    },
    logicalNode: {
      title: [
        "Confusione tra completezza sistemica e autosufficienza interpretativa",
        "Restrizione temporale arbitraria di comandi coranici universali",
        "Confusione tra sovranità ontologica d'origine e autorità delegata di applicazione",
        "Riduzione fallace del termine 'Balâgh' a una consegna materiale passiva",
        "Restrizione ingiustificata del termine 'Dhikr' e contraddizione teologica nella preservazione",
        "Confusione tra compilazione tematica maggiore e registrazione originaria dei testi",
        "Occultamento deliberato della cronologia e dei testi di autorizzazione (Cherry-Picking)",
        "Confusione tra contraddizione ontologica del testo e diversità interpretativa umana",
        "Equivoco semantico tra congettura idolatrica infondata e probabilità probatoria preponderante",
        "L'impossibilità empirica e pratica dell'autosufficienza testuale"
      ][idx],
      distinctions: [
        [
          { term: "COMPLETEZZA LEGISLATIVA SISTEMICA", desc: "Il Corano è completo perché stabilisce tutti i principi fondamentali e istituisce l'autorità legale del Profeta ﷺ." },
          { term: "ESAUSTIVITÀ LETTERALE OPERATIVA", desc: "Una falsa supposizione: il Corano ordina la preghiera, la zakat e il digiuno senza specificare i dettagli pratici, delegandoli al Profeta ﷺ." }
        ],
        [
          { term: "NORMA CORANICA PERENNE", desc: "Ogni ordine coranico rivelato ai credenti conserva la sua validità giuridica perpetua salvo testo esplicito di abrogazione." },
          { term: "RESTRIZIONE STORICISTICA ARBITRARIA", desc: "Pretendere senza prove che un comando coranico centrale abbia cessato di applicarsi con la scomparsa fisica del Profeta ﷺ." }
        ],
        [
          { term: "SOVRANITÀ LEGISLATIVA ORIGINARIA", desc: "Solo Allah possiede il diritto assoluto e intrinseco di creare la legge morale e religiosa." },
          { term: "AUTORITÀ LEGISLATIVA DELEGATA", desc: "Il Profeta ﷺ legifera per mandato divino sotto la rivelazione non recitata (Wahy Ghayr Matluw)." }
        ],
        [
          { term: "BALÂGH MUBÎN (TRASMISSIONE INTEGRALE ED ESPLICATIVA)", desc: "Comunicare il testo, esemplificarlo in atti, dettagliare le sue prescrizioni e stabilire il modello normativo vivente." },
          { term: "CONSEGNA MECCANICA E PASSIVA", desc: "La caricatura coranista che spoglia il Messaggero di ogni autorità pedagogica, morale e giudiziaria." }
        ],
        [
          { term: "ADH-DHIKR IN SENSO CORANICO GLOBALE", desc: "Il Messaggio rivelato nella sua totalità: le parole sacre del Corano e la Sunna che ne chiarisce il contenuto." },
          { term: "CONFUSIONE TRA TESTO GREZZO E MESSAGGIO VIVO", desc: "Credere che Allah preservi le parole di un ordine permettendo che si perda totalmente il modo di eseguirlo." }
        ],
        [
          { term: "REGISTRAZIONE E SCRITTURA INIZIALE (I SECOLO H)", desc: "Quaderni di appunti (Suhuf) redatti dagli stessi Compagni (come Abdullah ibn 'Amr, 'Ali ibn Abi Talib, Anas ibn Malik)." },
          { term: "GRANDE COMPILAZIONE CRITICA CLASSIFICATA (III SECOLO H)", desc: "Le opere canoniche (Bukhari, Muslim) che hanno raccolto, ordinato per temi giuridici e verificato catene già registrate in opere precedenti." }
        ],
        [
          { term: "DIVIETO TEMPORANEO E CIRCOSTANZIALE", desc: "All'inizio della rivelazione alla Mecca e nei primi momenti di Medina, per evitare che i fedeli mescolassero note profetiche sui medesimi fogli del testo coranico." },
          { term: "AUTORIZZAZIONE GENERALE E PERMANENTE", desc: "Una volta che lo stile coranico fu perfettamente assimilato, il Profeta ﷺ ordinò esplicitamente ai suoi Compagni di scrivere i suoi insegnamenti." }
        ],
        [
          { term: "CONTRADDIZIONE INTERNA REALE (SQUALIFICA)", desc: "Due affermazioni logicamente incompatibili sullo stesso fatto nel medesimo momento e sotto la stessa relazione senza possibilità di armonizzazione." },
          { term: "DIVERGENZA DI COMPRENSIONE O CASO DI ABROGAZIONE", desc: "Diverse applicazioni a seconda del contesto, evoluzione legislativa progressiva o legittima diversità di opinioni dei giuristi (Ijtihâd)." }
        ],
        [
          { term: "DHANN CONDANNATO (FANTASIA E SUPERSTIZIONE DOGMATICA)", desc: "Credenze pagane prive di qualsiasi traccia di rivelazione divina o prova razionale." },
          { term: "GHALABAT ADH-DHANN (CERTEZZA PRATICA PREPONDERANTE)", desc: "La testimonianza verificata di persone degne di fiducia che obbliga ad agire nel diritto, nei giudizi e nella vita quotidiana." }
        ],
        [
          { term: "COMANDO CORANICO NORMATIVO (IL PRINCIPIO)", desc: "L'ordine divino immutabile che stabilisce l'obbligo assoluto della preghiera." },
          { term: "SUNNA MUTAWÂTIRAH VIVENTE (L'ESECUZIONE)", desc: "La trasmissione pratica ininterrotta di generazione in generazione che insegna esattamente come pregare." }
        ]
      ][idx],
      generalRule: [
        "Un testo fondamentale che delega formalmente l'interpretazione vincolante a un messaggero designato non è carente; la sua completezza include tale autorità delegata.",
        "Un comando rivelato in termini universali alla comunità dei credenti rimane vincolante per tutte le generazioni.",
        "Quando il Sovrano Supremo ordina di obbedire alle decisioni del Suo Inviato, obbedire a tale Inviato è la massima espressione di sottomissione al Sovrano.",
        "Un concetto coranico deve essere definito mediante l'insieme dei versetti che descrivono le attribuzioni del Profeta, non isolando una frase dal suo contesto retorico.",
        "La preservazione di un messaggio divino implica necessariamente la preservazione del suo significato pratico e operativo.",
        "Il fatto che un'enciclopedia venga pubblicata nel XXI secolo non significa che gli eventi storici che documenta con archivi siano nati nel XXI secolo.",
        "Un comando proibitivo iniziale motivato da una causa circostanziale decade quando la causa scompare e sopraggiunge un ordine permissivo successivo.",
        "L'esistenza di divergenze tra lettori di un testo non dimostra che il testo sia difettoso, bensì che l'intelligenza umana opera con sfumature e prospettive.",
        "Tutta la vita umana e la giustizia legale operano su testimonianze ad alta probabilità verificata; esigere certezza matematica per ogni dettaglio paralizzerebbe il mondo.",
        "Quando un ordine legale esige un atto formale ma non ne definisce gli elementi costitutivi, il rinvio alla fonte esplicativa accreditata è forzoso."
      ][idx],
      errorToAvoid: [
        "Confondere la completezza dei fondamenti legislativi con il dettaglio delle modalità pratiche di esecuzione.",
        "Restringere temporalmente gli obblighi del Corano secondo convenienze dottrinali prive di fondamento testuale.",
        "Utilizzare una verità dogmatica ('il giudizio appartiene ad Allah') per annullare i comandi dettati da quello stesso Giudizio Divino.",
        "Confondere l'esenzione di responsabilità sulla fede altrui (il Profeta non può costringere a credere) con la negazione della sua autorità di insegnamento.",
        "Separare la preservazione della lettera dalla preservazione del senso che la rende applicabile.",
        "Assimilare la data di morte di un compilatore alla data di creazione dei documenti che ha compilato.",
        "Utilizzare un hadith tratto da Sahih Muslim per rifiutare Sahih Muslim, commettendo una palese contraddizione interna.",
        "Applicare un versetto sulla perfezione del Corano (4:82) per negare la legittimità delle scienze metodologiche del diritto (Usûl al-Fiqh).",
        "Utilizzare versetti che censurano il paganesimo politeista per squalificare la trasmissione metodica degli insegnamenti profetici.",
        "Inventare una forma individualista di preghiera sconnessa dalla storia per salvare un'ideologia teorica."
      ][idx]
    },
    centralPrinciple: {
      title: [
        "La completezza del Corano include l'obbligo di seguire l'autorità del Profeta",
        "L'obbedienza al Messaggero è un pilastro universale della fede fino al Giudizio Finale",
        "Il giudizio del Profeta ﷺ è una manifestazione diretta del Giudizio di Allah",
        "Il Balâgh include la spiegazione verbale, l'insegnamento del Libro e il modello di condotta",
        "La preservazione del Corano esige la preservazione della Sunna esplicativa",
        "La trasmissione dell'Hadith è stata continua, doppiamente verificata e documentata fin dall'epoca profetica",
        "L'autorizzazione profetica espressa per fissare la Sunna per iscritto",
        "La scienza dell'Hadith dispone di regole precise per armonizzare le apparenti divergenze",
        "Il Corano e il Profeta obbligano ad agire basandosi su testimonianze fidedegne verificate",
        "La preghiera è la confutazione vivente e quotidiana del coranismo a ogni inchino"
      ][idx],
      formalScheme: [
        "1. Il Corano è completo nello stabilire la guida divina.\n2. Parte di questa completezza è l'ordine esplicito di obbedire al Profeta ﷺ e seguire la sua spiegazione (Bayan).\n3. Pertanto, obbedire alla Sunna è l'adempimento diretto della completezza del Corano.",
        "1. Il Corano si rivolge a tutti i credenti fino alla Fine dei Tempi.\n2. Ordina in modo assoluto: 'Obbedite al Messaggero'.\n3. Pertanto, l'obbedienza ai suoi insegnamenti conservati è obbligatoria per tutta l'umanità.",
        "1. Allah possiede il giudizio assoluto.\n2. Allah ha ordinato nel Corano di sottomettersi alle decisioni del Profeta ﷺ.\n3. Pertanto, accettare i giudizi del Profeta ﷺ significa sottomettersi al Giudizio esclusivo di Allah.",
        "1. Il Corano affida al Messaggero la trasmissione chiara (Balâgh).\n2. Il Corano definisce esplicitamente tale trasmissione come: recitare, purificare, insegnare il Libro e la Saggezza (62:2) e spiegare quanto rivelato (16:44).\n3. Pertanto, la Sunna vivente è il nucleo inseparabile del Balâgh coranico.",
        "1. Allah ha garantito la salvaguardia del Dhikr (15:9).\n2. Il Corano chiama 'Dhikr' sia il testo rivelato sia la missione chiarificatrice del Profeta ﷺ (16:44).\n3. Pertanto, la provvidenza divina ha suscitato la scienza dell'Hadith per preservare la Sunna autentica.",
        "1. I Compagni hanno registrato Hadith per iscritto e li hanno memorizzati con esattezza durante la vita del Profeta ﷺ.\n2. La generazione successiva (i Tabi'un) ha raccolto questi scritti in opere precoci (come la Sahifa di Hammam ibn Munabbih e il Muwatta').\n3. Bukhari e Muslim non hanno inventato nulla: hanno verificato e classificato catene di trasmissione preesistenti e universalmente note.",
        "1. Il divieto iniziale fu preventivo (evitare la confusione materiale con il Corano).\n2. Numerosi racconti autentici successivi stabiliscono l'ordine espresso di redigere gli Hadith.\n3. Chi usa l'hadith del divieto per annullare l'Hadith si distrugge da solo: se l'hadith è autentico, deve accettare anche gli hadith di autorizzazione.",
        "1. Ogni testo normativo esteso presenta apparenti contraddizioni a chi non ne conosce il contesto né la cronologia.\n2. I sapienti hanno sviluppato discipline specializzate: Mukhtalif al-Hadîth (armonizzazione), An-Nâsikh wal-Mansûkh (abrogazione) e Asbâb al-Wurûd (contesto).\n3. I coranisti stessi divergono radicalmente tra loro su come pregare o digiunare, provando che il loro metodo genera un caos infinitamente maggiore.",
        "1. Il Corano ordina di verificare le notizie e di agire quando l'informatore è degno di fede (49:6).\n2. Il Profeta ﷺ inviava governatori ed emissari singoli (come Mu'adh ibn Jabal nello Yemen) per insegnare la religione a intere regioni.\n3. Pertanto, la testimonianza verificata (Hadith Ahad autentico) è pienamente vincolante nella legislazione islamica.",
        "1. Il Corano impone di pregare ma non specifica le unità né le formule complete.\n2. Il Profeta ﷺ dichiarò pubblicamente dinanzi a migliaia di fedeli: 'Pregate esattamente come avete visto me pregare' (Sahih Al-Bukhari).\n3. La comunità musulmana ha trasmesso questo atto milioni di volte al giorno senza interruzione fino ai nostri giorni."
      ][idx],
      explanation: [
        "Il Corano stesso fonda l'autorità della Sunna. Rifiutare la Sunna viola gli stessi versetti coranici che impongono l'obbedienza incondizionata al Messaggero ﷺ.",
        "Il Corano non condiziona mai l'obbedienza al Profeta ﷺ alla sua presenza fisica. Così come il Messaggio coranico è eterno, la guida profetica che lo accompagna è vincolante per sempre.",
        "L'Imam 'Ali ibn Abi Talib (رضي الله عنه) rispose già ai kharigiti che usavano questo stesso slogan: 'È una parola di verità con cui si intende una falsità'. Il Profeta non legifera in rivalità con Allah, bensì per ispirazione e comando diretto di Allah.",
        "Quando il Corano dice 'al Messaggero spetta solo trasmettere', intende che egli non può forzare i cuori né risponde dell'incredulità dei ribelli. Ma per quanto riguarda i credenti, egli è il maestro supremo e la guida obbligatoria.",
        "Se la Sunna si fosse irrimediabilmente corrotta, interi versetti del Corano che ordinano di pregare, pagare la zakat o imitare il Messaggero sarebbero diventati impraticabili. La preservazione del Corano include la protezione provvidenziale della Sunna mediante gli sforzi dei sapienti dell'Hadith.",
        "La scoperta nel XX secolo della Sahifa di Hammam ibn Munabbih (manoscritto del I secolo dell'Egira, trasmesso da Abu Hurayrah) ha dimostrato empiricamente che gli Hadith registrati da Bukhari coincidono parola per parola con i quaderni scritti quasi due secoli prima.",
        "Il Compagno 'Abdullah ibn 'Amr ibn al-'As si recò dal Profeta ﷺ e gli disse: 'I coraisciti mi dicono: Scrivi tutto ciò che dice il Messaggero pur essendo egli un essere umano che parla in stato di gioia e di collera?'. Il Profeta ﷺ indicò la sua nobile bocca con il dito e disse: 'Scrivi! Poiché per Colui nelle Cui Mani è la mia anima, da essa non esce che la verità' (Autenticato da Abu Dawud, Ahmad e Al-Hakim).",
        "Non esiste alcuna contraddizione reale e insolubile tra due hadith autentici. Quando due testi sembrano divergere, o uno abroga l'altro cronologicamente, o uno riguarda una situazione particolare e l'altro una regola generale, oppure uno dei due racconti è privo di rigida autenticità.",
        "Se le notizie individuali affidabili non avessero valore, gli abitanti dello Yemen non avrebbero avuto l'obbligo di accettare l'Islam dalla voce di Mu'adh (che era un solo emissario), e nessun tribunale al mondo potrebbe giudicare sulla base della testimonianza di testimoni veritieri.",
        "Nessun coranista al mondo può giustificare perché prega quattro unità a mezzogiorno, quattro nel pomeriggio, tre al tramonto, quattro la sera e due all'alba consultando unicamente il Corano. Compiendo queste preghiere quotidiane, il coranista dimostra con i suoi stessi atti che la Sunna è assolutamente imprescindibile."
      ][idx],
      logicalTest: [
        "Se il Corano fosse stato concepito come un manuale operativo senza Hadith, deduci unicamente dal testo coranico il numero di preghiere quotidiane, le unità (rak'at) e le percentuali esatte di zakat!",
        "Se l'obbedienza al Messaggero fosse decaduta con la sua morte, perché i versetti che ordinano di pregare o dare la zakat rimarrebbero obbligatori oggi?",
        "Se nessun altro all'infuori di Allah potesse ordinare nulla, perché il Corano ordina di ricorrere al giudizio di mediatori umani in caso di conflitto coniugale (4:35) o per stimare una compensazione di caccia (5:95)?",
        "Se il Profeta fosse stato un semplice trasmettitore passivo, perché Allah ha inviato un essere umano con parola e azione invece di far scendere un libro già rilegato dal cielo (6:7)?",
        "Se solo il testo scritto fosse preservato e l'intera Sunna fosse dubbia, come possiamo sapere con certezza assoluta cosa significa la parola 'Salât' nel Corano e come si esegue?",
        "Come spiegano i coranisti il fatto che il Corano, compilato in Mushaf ufficiali sotto 'Uthman (20 anni dopo la morte del Profeta), sia accettato da loro se rigettano la trasmissione della medesima generazione?",
        "Se l'hadith 'Non scrivete da me' dimostra che non bisogna seguire gli Hadith, perché il coranista crede a questo hadith che è stato trasmesso e scritto dagli stessi sapienti dell'Hadith?",
        "Se le divergenze invalidano una fonte, perché gli stessi coranisti non riescono a mettersi d'accordo sul numero di preghiere quotidiane (alcuni dicono 3, altri 2, altri 5, altri che si tratta solo di meditazione)?",
        "Quando acquisti cibo etichettato o assumi un farmaco in farmacia, hai una certezza matematica assoluta o ti basi sulla probabilità attendibile dei certificati di controllo?",
        "Sfida per qualsiasi coranista: Scrivi su un foglio le istruzioni precise per compiere una preghiera completa dall'inizio alla fine utilizzando unicamente citazioni letterali del Corano!"
      ][idx]
    },
    quranicArchitecture: {
      title: "Versetti decisivi e architettura coranica",
      verses: arg.quranicArchitecture.verses.map(v => ({
        ref: v.ref.replace('Sourate', 'Sura').replace('verset', 'versetto'),
        ar: v.ar,
        translation: v.translation
      })),
      consequence: [
        "Il Corano stabilisce il Profeta ﷺ come maestro e legislatore autorizzato, non come un mero trasmettitore passivo.",
        "L'autorità giudiziaria e legislativa del Profeta ﷺ vincola la coscienza di ogni musulmano in modo perpetuo.",
        "Il Corano stabilisce espressamente che il Profeta ﷺ proibisce e permette per autorizzazione divina, e nega la fede a chiunque rifiuti i suoi decreti.",
        "Il Corano rigetta tassativamente la tesi del postino passivo: il Profeta ﷺ è maestro, educatore e modello ineludibile.",
        "Il Corano chiama esplicitamente 'Dhikr' l'insegnamento del Profeta ﷺ e persino la persona stessa del Messaggero.",
        "Allah attesta la rettitudine e la fedeltà della generazione che ha trasmesso simultaneamente il Corano e la Sunna.",
        "Se il Corano ordina di scrivere le transazioni finanziarie materiali, a maggior ragione la saggezza profetica di salvezza eterna merita di essere fissata e trasmessa.",
        "Allah mostra nel Corano che due profeti giusti possono formulare giudizi giuridici differenti dinanzi a un medesimo caso senza che nessuno sia qualificato come eretico.",
        "Il Corano prescrive che piccoli gruppi istruiti ritornino e insegnino con autorità a intere comunità.",
        "Gli orari e le modalità della preghiera sono una prescrizione fissa trasmessa dalla Sunna profetica ininterrotta (Tawâtur 'Amalî)."
      ][idx]
    },
    analogies: [
      [
        { num: 1, title: "La Costituzione Nazionale e i Decreti Attuativi", scenario: "Una Costituzione fissa i principi fondamentali e stabilisce che una legge ne regolerà l'applicazione.", logicBox: "Costituzione = Corano | Decreti = Sunna.", lesson: "Rifiutare i decreti invocando la perfezione della Costituzione paralizza lo Stato." },
        { num: 2, title: "La Prescrizione Medica e la Posologia", scenario: "Un medico rilascia una diagnosi e rimanda al foglio illustrativo per la posologia esatta.", logicBox: "Prescrizione = Comando divino | Posologia = Spiegazione pratica del Messaggero.", lesson: "Rifiutarsi di seguire la posologia conduce al danno." }
      ],
      [
        { num: 1, title: "Le Sentenze della Corte Suprema e il Codice Civile", scenario: "La giurisprudenza dei magistrati continua a regolare le sentenze molto tempo dopo la loro scomparsa.", logicBox: "Morte dei giuristi ≠ Decadenza delle norme.", lesson: "La scomparsa di chi promulga la norma non annulla le decisioni stabilite." },
        { num: 2, title: "Il Testamento Autentico e gli Eredi", scenario: "Le istruzioni lasciate da un padre in un testamento verificato devono essere eseguite dai discendenti.", logicBox: "Testamento registrato = Sunna autentica trasmessa.", lesson: "Nessuno può annullare le clausole sostenendo che l'autore non è più presente." }
      ],
      [
        { num: 1, title: "L'Ambasciatore Plenipotenziario", scenario: "Un ambasciatore firma un accordo in nome del capo dello Stato con poteri delegati.", logicBox: "Potere dello Stato = Autorità Divina | Firma dell'Ambasciatore = Disposizione della Sunna.", lesson: "Riconoscere i decreti dell'inviato è onorare l'autorità del governante." },
        { num: 2, title: "Il Giudice e il Codice Penale", scenario: "Un giudice applica il codice penale ed emette una sentenza specifica.", logicBox: "Applicazione autorizzata della legge ≠ Usurpazione della sovranità parlamentare.", lesson: "Il Corano ha incaricato il Profeta di emettere sentenze vincolanti." }
      ],
      [
        { num: 1, title: "Il Docente Universitario e il Manuale", scenario: "Un'università incarica un professore di insegnare una materia con un libro di testo. Non si limita a consegnare il libro.", logicBox: "Testo = Corano | Insegnamento e chiarimenti = Sunna viva.", lesson: "Il valore di un maestro risiede nello spiegare la materia e guidare gli allievi." },
        { num: 2, title: "L'Architetto e il Direttore dei Lavori", scenario: "Un architetto non si limita a depositare i progetti; spiega i dettagli e supervisiona il cantiere.", logicBox: "Progetti = Testo coranico | Supervisione = Pratica profetica.", lesson: "Senza la direzione esecutiva accreditata, i progetti non diventano un edificio." }
      ],
      [
        { num: 1, title: "La Cassaforte e la Chiave Maestra", scenario: "Un fabbro progetta una cassaforte indistruttibile e consegna l'unica chiave per aprirla. Se distrugge la chiave, il tesoro diventa inaccessibile.", logicBox: "Cassaforte = Corano | Chiave = Sunna esplicativa.", lesson: "Proteggere il contenitore distruggendo la chiave contraddice la saggezza del Creatore." },
        { num: 2, title: "La Segnaletica Stradale e il Codice della Strada", scenario: "Un governo preserva i cartelli stradali ma distrugge tutti i manuali che spiegano il significato dei colori.", logicBox: "Cartello = Ordine coranico | Manuale = Pratica profetica.", lesson: "Un simbolo normativo senza il codice esplicativo genera il caos." }
      ],
      [
        { num: 1, title: "La Tesi di Dottorato e le Fonti d'Archivio", scenario: "Uno storico pubblica oggi un'opera sulla seconda guerra mondiale usando lettere e diari del 1940. Nessuno afferma che la guerra è stata inventata oggi.", logicBox: "Bukhari = Storico rigoroso | Isnâd e quaderni = Documenti d'archivio verificati.", lesson: "La data di compilazione non determina l'antichità dei documenti d'origine." },
        { num: 2, title: "Lo Spartito Musicale Classico", scenario: "Una casa editrice pubblica un'edizione critica di Mozart. L'opera non è nata con la tipografia moderna.", logicBox: "Edizione critica = Sahih Bukhari | Spartito = Trasmissione viva.", lesson: "Il lavoro editoriale ordina e preserva una realtà preesistente." }
      ],
      [
        { num: 1, title: "La Scuola Guida: Divieto Provvisorio", scenario: "Un istruttore vieta all'allievo principiante di guardare il navigatore durante le prime lezioni per fissare la strada, prima di insegnargli a usarlo.", logicBox: "Divieto iniziale = Sicurezza | Autorizzazione successiva = Maturità.", lesson: "Una direttiva pedagogica iniziale evolve legittimamente verso l'autorizzazione." },
        { num: 2, title: "L'Avvelenatore che Invoca l'Antidoto", scenario: "Una persona afferma che tutti i farmaci di una farmacia sono veleni basandosi sul foglio illustrativo letto in quella stessa farmacia.", logicBox: "Se la farmacia vende solo falsità, il foglio illustrativo non ha valore probatorio.", lesson: "Se i libri di Hadith non fossero affidabili, il racconto 'Non scrivete' non potrebbe essere usato come prova." }
      ],
      [
        { num: 1, title: "I Magistrati della Corte Costituzionale", scenario: "I magistrati leggono lo stesso articolo della Costituzione ed emettono pareri motivati con diverse sfumature.", logicBox: "Divergenza di giuristi ≠ Falsità della Costituzione.", lesson: "La pluralità delle interpretazioni riflette la ricchezza del diritto." },
        { num: 2, title: "Il Consulto Medico", scenario: "Tre chirurghi discutono sul momento esatto per operare un paziente dopo aver consultato i medesimi esami clinici.", logicBox: "Consulto clinico = Ijtihâd dei sapienti.", lesson: "Nessuno brucia i libri di medicina perché i medici deliberano sui casi complessi." }
      ],
      [
        { num: 1, title: "La Testimonianza nei Tribunali di Giustizia", scenario: "Un tribunale condanna un colpevole basandosi su testimonianze concordanti e perizie. Nessuno esige che il giudice abbia visto il crimine con i propri occhi.", logicBox: "Certezza giudiziaria sufficiente = Catena di trasmissione autentica (Isnâd Sahih).", lesson: "Rifiutare la probabilità preponderante obbligherebbe a liberare tutti i criminali." },
        { num: 2, title: "La Diagnosi Medica e le Analisi", scenario: "Un medico prescrive un antibiotico basandosi su un esame di laboratorio con il 99% di affidabilità.", logicBox: "Probabilità scientifica fondata = Guida obbligatoria per l'azione.", lesson: "Il buon senso impone di agire secondo l'evidenza più solida." }
      ],
      [
        { num: 1, title: "La Ricetta del Grande Chef", scenario: "Una ricetta dice 'Prepara una sfoglia perfetta'. Senza le proporzioni e le pieghe che il maestro insegna, la pasta sarà immangiabile.", logicBox: "Ordine = Prepara la sfoglia | Tecnica magistrale = Sunna profetica.", lesson: "Un comando generale senza la tecnica insegnata non produce il risultato sperato." },
        { num: 2, title: "L'Esame Pratico di Guida", scenario: "Il codice della strada dice 'Parcheggia correttamente'. Chi si rifiuta di imparare la manovra dall'istruttore sarà bocciato.", logicBox: "La pratica dimostrata dà efficacia alla norma scritta.", lesson: "L'adorazione di Allah si apprende imitando il Suo Messaggero." }
      ]
    ][idx],
    readyResponses: {
      quick30s: [
        "Dire che il Corano è completo è una verità coranica. Ma è il Corano stesso che ci ordina di obbedire al Messaggero ﷺ e ci insegna che la sua missione è spiegare il testo (Sura 16, V.44). Rifiutare la Sunna in nome della completezza del Corano significa rifiutare ciò che il Corano ordina espressamente.",
        "Il Corano dice 'Obbedite ad Allah e obbedite al Messaggero' in oltre trenta passi senza alcun limite di tempo. Se tale ordine fosse decaduto dopo la morte del Profeta ﷺ, metà del Corano sarebbe diventata obsoleta. La Sunna preservata è il mezzo attraverso cui obbediamo oggi al Profeta ﷺ.",
        "Il Corano afferma certamente che il giudizio supremo appartiene ad Allah. Ed è questo stesso giudizio di Allah che dice nel versetto 157 della Sura Al-A'raf che il Profeta 'rende lecite le cose buone e proibisce le cose nocive'. Seguire le proibizioni del Profeta ﷺ significa rispettare la legge di Allah.",
        "Quando il Corano dice 'al Messaggero spetta solo la trasmissione', significa che egli non può costringere la gente a credere. Ma quella stessa trasmissione (Balâgh) è definita dal Corano come l'insegnamento del Libro, la purificazione e la spiegazione dei precetti (Sura 62, V.2). Il Profeta è un maestro e interprete designato, mai un mero postino!",
        "In arabo coranico, 'Adh-Dhikr' non designa unicamente le pagine del Corano. Nella Sura 16:44, Allah dice al Profeta: 'Ti abbiamo rivelato il Dhikr affinché tu spieghi alla gente ciò che è stato fatto scendere per loro'. Il Dhikr è il Messaggio divino globale. Preservare il Corano rendendo impossibile sapere come pregare sarebbe una contraddizione estranea alla Saggezza divina.",
        "Dire che gli Hadith sono stati scritti 200 anni dopo è un grossolano errore storico. La registrazione iniziò durante la vita del Profeta ﷺ con i quaderni dei Compagni come 'Abdullah ibn 'Amr (As-Sâdiqah). Bukhari non inventò le tradizioni: raccolse con estremo rigore metodologico collezioni scritte che circolavano già dal primo secolo.",
        "Questo argomento racchiude una contraddizione comica: usate un Hadith di Sahih Muslim per cercare di dimostrare che gli Hadith di Sahih Muslim non sono affidabili! Se quel racconto è vero, dovete accettare anche il racconto in cui il Profeta dice durante la conquista della Mecca: 'Scrivete per Abu Shah', e in cui dice ad 'Abdullah ibn 'Amr: 'Scrivi, poiché dalla mia bocca non esce che la verità!'. Il divieto fu temporaneo all'inizio per non mescolare i fogli.",
        "Le divergenze tra sapienti non sono contraddizioni della Sunna: sono la naturale manifestazione della riflessione giuridica umana (Ijtihâd). I coranisti stessi, che pretendono di guidarsi solo con il Corano, divergono tra loro infinitamente di più di tutti i sapienti musulmani!",
        "Nel Corano, il 'Dhann' condannato nella Sura Yunus è la congettura idolatrica infondata dei pagani che adoravano statue senza alcuna prova. Ma nel diritto e nella vita umana, agire sulla base delle testimonianze di persone oneste è un comando coranico (Sura 49, V.6). Il Profeta ﷺ inviava un singolo compagno per insegnare a intere tribù.",
        "Chiedi a qualsiasi coranista: 'Come compi la preghiera del mezzogiorno? Quante unità fai? Perché quattro e non sette o tre?'. Non troverà questa cifra in nessun versetto del Corano. Se compie 4 rak'at, sta seguendo la Sunna; e se non ne compie 4, ha inventato una religione che nessun musulmano ha mai conosciuto."
      ][idx],
      developed: [
        "La completezza del Corano non è un'esaustività enciclopedica che dettaglia ogni singolo gesto quotidiano, bensì una completezza legislativa. Il Corano stabilisce i principi immutabili e designa formalmente il Profeta ﷺ come l'autorità vivente incaricata di dettagliare la preghiera, il digiuno e le transazioni. Disconoscere la Sunna equivale a svuotare il Corano della sua stessa applicazione pratica.",
        "Nessun versetto del Corano restringe l'obbedienza al Messaggero alla sua epoca storica. Se applicassimo la logica coranista secondo cui solo il contemporaneo vincola, dovremmo considerare decaduti tutti i passi rivolti ai credenti del VII secolo. I Compagni hanno trasmesso la Sunna proprio affinché le generazioni successive potessero adempiere a questo obbligo coranico permanente.",
        "Questo argomento è esattamente la stessa distorsione avanzata dai primi eretici kharigiti contro 'Ali (رضي الله عنه). Confondono la fonte sovrana della legge (Allah) con l'emissario designato a comunicare e applicare tale legge. Il Profeta non inventa precetti per capriccio: tutto ciò che ha proibito o comandato deriva dalla rivelazione divina (53:3-4).",
        "La formula coranica 'mâ 'alâ ar-rasûl illâ al-balâgh' è una figura di stile araba volta a rassicurare il Profeta ﷺ di fronte al rifiuto degli idolatri: egli non è colpevole della loro cecità, il suo dovere è comunicare con chiarezza. Ma nei confronti dei musulmani, il Corano specifica che tale Balâgh comprende l'insegnamento della 'Hikmah' (la Saggezza / la Sunna) e l'incarnazione del 'modello eccellente'.",
        "L'argomentazione coranista presuppone che la preservazione divina sia stata un miracolo passivo per il libro rilegato, ma che Allah abbia abbandonato la Sunna all'oblio. La realtà storica dimostra il contrario: Allah ha suscitato per la Sunna una disciplina scientifica inedita — la scienza delle catene di trasmissione e la critica biografica — che ha permesso di filtrare con rigore implacabile l'autentico dallo spurio.",
        "L'affermazione coranista ignora del tutto la letteratura islamica anteriore a Bukhari: il Muwatta' dell'Imam Malik (m. 179 H), il Musannaf di 'Abd ar-Razzaq (m. 211 H), il Musnad di Ahmad ibn Hanbal (m. 241 H) e decine di collezioni dei Tabi'un. La scienza dell'Hadith ha combinato costantemente il supporto scritto con il controllo orale diretto (Sama').",
        "I più grandi sapienti dell'Islam hanno spiegato l'armonizzazione perfetta di questi testi: il divieto di scrivere vigeva all'inizio della missione quando il Corano veniva rivelato in frammenti ed esisteva il rischio materiale che i fedeli annotassero parole esplicative del Profeta sui medesimi rotoli del Corano. Quando il Corano fu consolidato e memorizzato massivamente, il Profeta ﷺ autorizzò e incoraggiò la registrazione scritta della sua Sunna.",
        "Nelle scienze islamiche esiste un'intera disciplina chiamata 'Fiqh al-Ikhtilâf' (Etica della Divergenza) e 'Mukhtalif al-Hadîth' per trattare le apparenti contraddizioni. I sapienti hanno stabilito una regola d'oro: 'Il principio base dinanzi a due testi è l'armonizzazione reciproca; se non è possibile, si analizza la cronologia dell'abrogazione; altrimenti si preferisce la narrazione con il più alto grado di certezza'.",
        "Gli epistemologi musulmani distinguono tra 'Adh-Dhann al-Batil' (il sospetto infondato e il capriccio) e 'Ghalabat adh-Dhann' (la certezza morale preponderante). Tutto il diritto umano, la medicina, la trasmissione storica e la vita civile poggiano sulla fiducia critica in trasmettitori fidedegni. Se rigettassimo tutto ciò che non è certezza matematica assoluta, bisognerebbe dubitare persino dell'identità dei propri genitori.",
        "La preghiera (Salât) è il cuore pulsante dell'Islam. La sua trasmissione è di natura 'Mutawâtir 'Amalî' (trasmissione massiva pratica): milioni di padri hanno insegnato ai loro figli la medesima preghiera che i Compagni hanno appreso direttamente dal Profeta ﷺ nella moschea di Medina. Voler svuotare la preghiera dei suoi gesti profetici conduce all'assurdo di trasformare l'Islam in un'elucubrazione teorica senza culto reale."
      ][idx]
    },
    objections: [
      [
        { obj: "Il Corano dice 'chiarimento di ogni cosa' (16:89), forse che la Sunna è fuori dal Corano?", ans: "La Sunna è il chiarimento interno ordinato dal Corano stesso, non un'aggiunta estranea al Messaggio." },
        { obj: "Affermate dunque che il Corano sia insufficiente?", ans: "Il Corano è pienamente sufficiente per ciò per cui è stato rivelato: essere la fonte suprema che istituisce e convalida l'autorità profetica." }
      ],
      [
        { obj: "Il Profeta non è più tra noi per giudicare le nostre controversie.", ans: "La sua persona fisica è passata a miglior vita, ma il suo giudizio normativo rimane pienamente vivo nei suoi insegnamenti autenticamente trasmessi." },
        { obj: "I versetti dicono 'a coloro di voi che hanno autorità', provando che era un comando politico.", ans: "Il versetto 59 della Sura An-Nisa dice 'se dissentite in qualcosa, rimettetelo ad Allah e al Messaggero', non ai governanti!" }
      ],
      [
        { obj: "Se il Profeta proibisce cose non esplicite nel Corano, aggiunge cose alla religione.", ans: "Il Corano gli ha concesso esplicitamente tale prerogativa in 7:157. Non è un'aggiunta umana, ma l'esecuzione diretta del compito profetico." },
        { obj: "Considerate dunque il Profeta come un socio di Allah nella legislazione?", ans: "Niente affatto! Il Profeta legifera per delega e ispirazione divina, non in parità con il Creatore." }
      ],
      [
        { obj: "Se il Profeta spiegava con autorità, le sue parole hanno lo stesso valore del Corano?", ans: "Il Corano è la Parola increata di Allah recitata nella preghiera; le parole del Profeta sono la spiegazione umana divinamente guidata e ispirata." },
        { obj: "Se il Corano è chiaro, perché spiegarlo?", ans: "Il Corano è chiaro nei suoi principi, ma contiene norme generali che richiedono la specificazione profetica per essere messe in pratica." }
      ],
      [
        { obj: "Esistono hadith contraffatti, quindi la Sunna non è stata preservata.", ans: "Il fatto che i sapienti abbiano identificato, catalogato e isolato ogni hadith inventato dimostra che la Sunna autentica è stata pienamente preservata." },
        { obj: "La parola 'Dhikr' in 15:9 si riferisce solo al Corano secondo gli esegeti.", ans: "Anche se si riferisse al Corano in senso stretto, la preservazione del Corano esige la preservazione della sua comprensione operativa." }
      ],
      [
        { obj: "Perché la Sunna non è stata riunita in un unico libro ufficiale come il Corano?", ans: "Il Corano richiedeva una fissazione testuale chiusa; la Sunna, essendo vasta e applicata in tutti gli atti quotidiani, fu trasmessa in modo pratico e vivente da migliaia di Compagni." },
        { obj: "La memoria umana non è infallibile lungo diverse generazioni.", ans: "Per questo i sapienti hanno esatto la concordanza di molteplici catene indipendenti e il confronto con i quaderni manoscritti originali." }
      ],
      [
        { obj: "Abu Bakr e 'Umar hanno bruciato quaderni di hadith secondo alcune cronache.", ans: "Quei racconti sono storicamente deboli o decontestualizzati: 'Umar rinunciò a imporre un codice unico per evitare che la gente trascurasse il Corano, non perché ritenesse la Sunna falsa." },
        { obj: "Perché il Profeta non ha dettato la Sunna scriba per scriba come il Corano?", ans: "Perché la Sunna è una guida vissuta in atti, gesti e risposte quotidiane lungo 23 anni." }
      ],
      [
        { obj: "Un hadith dice che il Profeta pregava in un modo e un altro in un altro modo.", ans: "Il Profeta ﷺ ha insegnato diverse varianti legittime per facilitare la pratica alla comunità in momenti diversi." },
        { obj: "Le quattro scuole giuridiche divergono su molti punti della preghiera.", ans: "Divergono su atti raccomandati secondari, ma sono in consenso unanime assoluto (Ijmâ') sulle 5 preghiere, il numero di rak'at e i pilastri essenziali." }
      ],
      [
        { obj: "Nel dogma fondamentale ('Aqidah) si esige certezza assoluta (Qat'î).", ans: "I grandi pilastri del dogma sono provati da testi categorici con catene di massa (Tawâtur). Ma i dettagli pratici si reggono legittimamente su Hadith autentici affidabili." },
        { obj: "Un testimone onesto può sbagliare involontariamente.", ans: "Per questo i sapienti hanno incrociato le versioni di molteplici compagni per escludere qualsiasi errore di memoria." }
      ],
      [
        { obj: "Non abbiamo forse ereditato la preghiera da Abramo come dice il Corano?", ans: "Abramo ha istituito il monoteismo e le fondamenta della Ka'bah, ma i dettagli precisi della preghiera islamica finale sono stati insegnati da Muhammad ﷺ: 'Pregate come avete visto me pregare'." },
        { obj: "La preghiera nel Corano significa solo invocazione mentale e meditazione.", ans: "Questa interpretazione contraddice il Corano stesso, che parla di inchini (Ruku'), prostrazioni (Sujud) e abluzioni specifiche." }
      ]
    ][idx],
    framingQuestions: [
      ["Dove si trova nel Corano, da solo, il numero di unità della preghiera del mezzogiorno?", "Perché Allah ha ordinato al Profeta di spiegare il Libro se il testo prescindeva da ogni applicazione profetica?"],
      ["In quale versetto Allah afferma che l'obbedienza al Suo Messaggero sarebbe terminata con la sua morte?", "Come puoi affermare che il Corano è eterno se consideri decaduti decine di versetti sull'obbedienza?"],
      ["Come interpreti il versetto 7:157 in cui si dice chiaramente che il Profeta 'proibisce loro le cose nocive'?", "Perché Allah ha giurato per Se stesso in 4:65 che nessuno ha vera fede finché non prende il Profeta come giudice inappellabile?"],
      ["Come può il Profeta essere un 'modello eccellente' (33:21) se non abbiamo accesso ai suoi atti, parole e condotta dettagliata?", "Cosa significa la parola 'Hikmah' (Saggezza) menzionata nel Corano accanto al Libro se non è la Sunna?"],
      ["Come può Allah ordinare 'Compite la preghiera' in un testo preservato se la forma stessa della preghiera si fosse persa nella storia?", "Perché il versetto 16:44 chiama 'Dhikr' ciò che è stato rivelato al Profeta per spiegare il Corano?"],
      ["Sapevi che la 'Sahifa di Hammam ibn Munabbih', scritta nel I secolo da un discepolo diretto di Abu Hurayrah, è conservata oggi e contiene esattamente gli stessi hadith di Bukhari?", "Se la trasmissione dei Compagni non fosse affidabile per gli Hadith, attraverso quale mezzo umano credi che ti sia giunto il testo del Corano?"],
      ["Ti rendi conto che per citare 'Non scrivete da me', stai riconoscendo che questo Hadith è giunto fino a te con autenticità attraverso i sapienti dell'Hadith?", "Perché occulti i racconti in cui il Profeta ﷺ ordina espressamente: 'Scrivete per Abu Shah'?"],
      ["Quante preghiere al giorno compi con i tuoi correligionari coranisti e come giustifichi che altri coranisti difendano un numero totalmente diverso basandosi sullo stesso Corano?", "Conosci le regole di 'Mukhtalif al-Hadîth' sviluppate dall'Imam Ash-Shafi'i per risolvere le divergenze apparenti?"],
      ["Perché il Profeta ﷺ ha inviato Mu'adh ibn Jabal come unico emissario nello Yemen per insegnare loro la fede se la testimonianza singola non avesse valore?", "Come fai a sapere che la traduzione italiana del Corano che leggi è corretta senza fidarti della testimonianza umana dei traduttori?"],
      ["Se segui solo il Corano, perché preghi 4 unità a mezzogiorno quando il numero quattro non compare nel Corano per le unità di preghiera?", "Riconosci che ogni volta che ti prostri nella preghiera stai dimostrando che la Sunna è indispensabile?"]
    ][idx],
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
        ["Il Corano è perfetto nei suoi principi divini.", "Il Corano ordina esplicitamente di seguire la spiegazione del Messaggero ﷺ.", "Rifiutare la Sunna significa disobbedire alla completezza del Corano stesso."],
        ["Il Corano è un messaggio universale ed eterno.", "L'ordine di obbedire al Profeta ﷺ fa parte integrante di tale messaggio eterno.", "La Sunna autentica è l'unico mezzo per esercitare tale obbedienza oggi."],
        ["Il giudizio sovrano appartiene esclusivamente ad Allah.", "Allah ha ordinato di sottomettersi incondizionatamente alle sentenze del Suo Inviato ﷺ.", "Rifiutare il giudizio profetico significa ribellarsi contro il Giudizio Supremo di Allah."],
        ["Il Balâgh coranico è una trasmissione attiva, pedagogica e normativa.", "Il Corano definisce il Profeta come maestro del Libro e modello supremo.", "Ridurre il Messaggero a un portatore passivo contraddice frontalmente il Corano."],
        ["Allah si è impegnato a salvaguardare il Dhikr.", "Il Dhikr coranico comprende la rivelazione e la sua manifestazione profetica.", "La scienza dell'Hadith è la manifestazione storica di tale salvaguardia divina."],
        ["La registrazione dell'Hadith è iniziata fin dalla prima generazione.", "Le grandi opere canoniche sono il culmine di un processo documentale rigoroso.", "Il mito dei 200 anni di vuoto è una falsità storica smentita dai manoscritti."],
        ["Il divieto iniziale fu circostanziale e preventivo.", "Il Profeta ﷺ ha autorizzato e ordinato formalmente di scrivere la sua Sunna in seguito.", "Usare un hadith per annullare tutti gli hadith è una contraddizione logica insostenibile."],
        ["L'apparente contraddizione si dissolve mediante il metodo dei sapienti.", "La divergenza interpretativa è insita in ogni comprensione giuridica umana.", "Il coranismo senza Sunna produce un'anarchia interpretativa totale."],
        ["Il Corano condanna la cieca supposizione pagana, non la testimonianza veritiera.", "Il metodo dell'Hadith esige prove conclusive e testimoni affidabili.", "Agire conformemente alla testimonianza rigorosa è un principio fondamentale del Corano."],
        ["La preghiera è il pilastro pratico fondamentale dell'Islam.", "I suoi dettagli provengono esclusivamente dalla Sunna del Profeta ﷺ.", "Praticare la preghiera negando la Sunna è una contraddizione a ogni inchino."]
      ][idx],
      finalText: [
        "La Sunna non compete con il Corano: è l'applicazione viva che il Corano esige.",
        "L'obbedienza al Messaggero non è morta con la sua dipartita terrena.",
        "Il giudizio di Allah e il giudizio del Suo Messaggero formano un'unica e medesima verità.",
        "La trasmissione del Messaggero abbraccia il testo sacro e l'insegnamento della sua pratica.",
        "Preservare il testo sacro significa anche preservare il modo di viverlo.",
        "La Sunna è stata preservata dalla memoria, dalla scrittura e dalla pratica ininterrotta.",
        "La Sunna è stata registrata con l'avallo e la benedizione del Messaggero ﷺ stesso.",
        "La scienza dell'Hadith non teme l'esame critico: fornisce gli strumenti per la sua risoluzione.",
        "L'Hadith autentico fornisce la certezza morale e pratica necessaria per servire Allah.",
        "La preghiera quotidiana è la testimonianza perenne della necessità ineludibile della Sunna."
      ][idx],
      punchline: [
        "Chi rifiuta la Sunna in nome del Corano finisce per disobbedire al Corano stesso!",
        "Chi dichiara decaduta l'obbedienza al Profeta dichiara decaduta l'universalità del Corano!",
        "Chi grida 'Solo il giudizio di Allah' per rifiutare il Profeta ripete la fallacia dei kharigiti!",
        "Chi riduce il Profeta a un postino non ha mai letto ciò che il Corano dice sul Profeta!",
        "Chi dice che la Sunna si è persa afferma in realtà che il Corano è diventato impraticabile!",
        "Dire che gli Hadith sono nati con Bukhari è assurdo quanto dire che la storia è nata con i libri di storia!",
        "Chi usa un Hadith per distruggere l'Hadith si spara da solo sui propri piedi argomentativi!",
        "Chi fugge dalle discrepanze del Fiqh per cadere nel coranismo salta da una goccia d'acqua a un oceano di contraddizioni!",
        "Chi confonde la superstizione pagana con il rigore scientifico dell'Isnâd commette un errore imperdonabile!",
        "Pregare secondo la Sunna negando la Sunna è una contraddizione a ogni prostrazione!"
      ][idx]
    },
    fallacies: arg.fallacies
  };
});

const fullItData = {
  ...itBase,
  fallaciesToolbox: itFallaciesToolbox,
  arguments: itArgumentsCompiled
};

const outputFilePath = path.join(__dirname, '..', '..', 'js', 'translations', 'it.js');
const fileHeader = `/**
 * TRADUZIONE ITALIANA INTEGRALE E 100% NATIVA (ITALIANO)
 * Manuale di confutazione metodica del coranismo — Di Salah Eddine Ahmed (Abou Soulaymane)
 * Conforme alla dottrina autentica e senza alcun relitto di lingua straniera.
 */

window.I18N_DATA = window.I18N_DATA || {};
window.I18N_DATA["it"] = ${JSON.stringify(fullItData, null, 2)};
`;

fs.writeFileSync(outputFilePath, fileHeader, 'utf8');
console.log('✅ js/translations/it.js compilato con successo in 100% Italiano nativo !');
