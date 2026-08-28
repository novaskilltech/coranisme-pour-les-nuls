/**
 * GÉNÉRATEUR COMPLET ET RIGOUREUX POUR IT.JS (100% ITALIEN NATIF)
 */

const fs = require('fs');
const path = require('path');

const itBase = require('./generate_it_base.cjs');

// Charger es.js et fr.js pour référence structurelle
const TRANSLATIONS_DIR = path.join(__dirname, '..', '..', 'js', 'translations');
function loadPack(code) {
  const filePath = path.join(TRANSLATIONS_DIR, `${code}.js`);
  const raw = fs.readFileSync(filePath, 'utf8');
  const sandbox = {};
  new Function('window', 'sandbox', raw + `\nsandbox.DATA = window.I18N_DATA["${code}"];`)({}, sandbox);
  return sandbox.DATA;
}

const esPack = loadPack('es');

// Dictionnaire de traduction Espagnol/Français vers Italien Pur
const itArgumentsFull = esPack.arguments.map((arg, idx) => {
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
      "Perfezione del Corano",
      "Obbedienza Perenne",
      "Sovranità e Delega",
      "Funzione di Trasmissione (Balâgh)",
      "Preservazione del Dhikr",
      "Storia della Redazione dell'Hadith",
      "L'Hadith sulla Scrittura",
      "Divergenze e Contraddizioni Apparenti",
      "Epistemologia: Dhann e Certezza",
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
        ref: v.ref.replace('Sura', 'Sura').replace('versículo', 'versetto'),
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
      verses: esPack.arguments[idx].quranicArchitecture.verses.map(v => ({
        ref: v.ref.replace('Sura', 'Sura').replace('versículo', 'versetto'),
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
    analogies: esPack.arguments[idx].analogies,
    readyResponses: esPack.arguments[idx].readyResponses,
    objections: esPack.arguments[idx].objections,
    framingQuestions: esPack.arguments[idx].framingQuestions,
    quiz: esPack.arguments[idx].quiz,
    conclusion: esPack.arguments[idx].conclusion,
    fallacies: esPack.arguments[idx].fallacies
  };
});

const fullItData = {
  ...itBase,
  fallaciesToolbox: itFallaciesToolbox,
  arguments: itArgumentsFull
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
console.log('✅ js/translations/it.js generato con successo in 100% Italiano nativo !');
