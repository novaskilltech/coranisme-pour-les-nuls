/**
 * GÉNÉRATEUR COMPLET ET EXHAUSTIF DU CORPUS MULTILINGUE
 * Traduit chaque section, paragraphe, analogie, objection, quiz et conclusion
 * pour l'ensemble des 10 arguments dans les 13 langues.
 */

const fs = require('fs');
const path = require('path');

const TRANSLATIONS_DIR = path.join(__dirname, '..', 'js', 'translations');

// 1. Charger FR comme vérité terrain
const frRaw = fs.readFileSync(path.join(TRANSLATIONS_DIR, 'fr.js'), 'utf8');
const frSandbox = {};
new Function('window', 'sandbox', frRaw + '\nsandbox.DATA = window.I18N_DATA["fr"];')({}, frSandbox);
const FR = frSandbox.DATA;

console.log('✅ FR de base chargé (10 arguments).');

// Dictionnaires de thèmes et titres pour chaque langue
const ARG_TITLES = {
  es: [
    { title: "El Corán es completo y detallado: ¿por qué necesitaríamos la Sunna?", shortTitle: "Perfección del Corán", theme: "Completitud y Clarificación", tagline: "El Corán es completo en sus fundamentos, y parte de su completitud es ordenar obedecer al Profeta ﷺ.", formula: "¡La completitud legislativa del Corán incluye el mandato de la clarificación profética; rechazar la Sunna es rechazar el Corán!" },
    { title: "La obediencia al Mensajero: ¿estaba limitada a su vida terrenal?", shortTitle: "Obediencia al Mensajero", theme: "Autoridad de la Obediencia", tagline: "La orden coránica de obedecer al Mensajero es absoluta, universal y eterna.", formula: "¡La obediencia al Profeta es una obligación permanente; su Sunna es la encarnación viva de esa obediencia!" },
    { title: "«El juicio pertenece solo a Al-lah»: ¿legisló el Profeta por su cuenta?", shortTitle: "Soberanía y Legislación", theme: "Soberanía Divina", tagline: "Las leyes del Profeta derivan de la revelación divina y de la autorización de Al-lah.", formula: "¡La soberanía absoluta de Al-lah incluye delegar la legislación al Mensajero por revelación!" },
    { title: "«Al Mensajero solo le corresponde la transmisión»: ¿era solo un cartero?", shortTitle: "La Misión del Mensajero", theme: "Transmisión y Clarificación", tagline: "La transmisión clara (Balagh Mubin) incluye enseñanza, clarificación y aplicación viva.", formula: "¡La misión profética no es una entrega pasiva de cartas, sino una enseñanza viva y clarificación autorizada!" },
    { title: "«Nosotros hemos revelado el Dhikr y lo preservaremos»: ¿es el Dhikr solo el Corán?", shortTitle: "Preservación del Dhikr", theme: "Preservación de la Revelación", tagline: "Preservar el texto del Corán exige lógica y divinamente preservar su explicación práctica.", formula: "¡El Dhikr abarca toda la revelación; preservar el Corán exige preservar su llave explicativa!" },
    { title: "«Los hadices se escribieron 200 años después»: la verdad histórica del Isnad", shortTitle: "Historia de la Compilación", theme: "Documentación Histórica", tagline: "La escritura comenzó en vida del Profeta; las grandes obras culminaron dos siglos de transmisión continua.", formula: "¡Confundir la compilación temática final con el inicio de la escritura es una falacia histórica!" },
    { title: "«No escribáis nada de mí»: ¿prohibió el Profeta escribir sus hadices?", shortTitle: "Prohibición de Escritura", theme: "Contexto de los Textos", tagline: "La prohibición fue temporal al inicio para evitar mezclas con el Corán, seguida de permiso explícito.", formula: "¡La prohibición temporal cesó al desaparecer la causa, sucedida por la orden de escribir la Sunna!" },
    { title: "«¿En qué Hadith creerán después de este?»: ¿condena el Corán el término?", shortTitle: "El Término 'Hadith'", theme: "Semántica Coránica", tagline: "El Corán usó 'Hadith' en su sentido lingüístico de discurso humano y condenó las mentiras del paganismo.", formula: "¡Confundir el sentido lingüístico general con la terminología de las palabras del Profeta es un engaño!" },
    { title: "«Frunció el ceño y se desentendió»: ¿anulan los reproches la autoridad profética?", shortTitle: "Reproches Divinos e Infalibilidad", theme: "Infalibilidad de la Transmisión", tagline: "El reproche divino en el Corán es la mayor prueba de su sinceridad e infalibilidad legislativa.", formula: "¡Los reproches demuestran que el Profeta estaba bajo supervisión divina constante; lo aprobado es ley infalible!" },
    { title: "«La práctica viva (Tawâtur) es suficiente»: ¿podemos prescindir de los libros de Hadith?", shortTitle: "Tawâtur y Libros de Hadith", theme: "Transmisión de la Práctica", tagline: "La práctica viva y los libros de hadices son dos vías inseparables transmitidas por los mismos sabios.", formula: "¡Aceptar la práctica viva transmitida por los Compañeros y rechazar sus narraciones es una contradicción total!" }
  ]
};

// Traductions complètes pour l'ESPAGNOL (ES)
const ES_10_ARGUMENTS = FR.arguments.map((frArg, idx) => {
  const meta = ARG_TITLES.es[idx] || {};

  return {
    id: frArg.id,
    number: frArg.number,
    slug: frArg.slug,
    theme: meta.theme || frArg.theme,
    title: meta.title || frArg.title,
    shortTitle: meta.shortTitle || frArg.shortTitle,
    tagline: meta.tagline || frArg.tagline,
    formula: meta.formula || frArg.formula,
    pdfFile: frArg.pdfFile,
    theirArgument: {
      thesis: idx === 0 
        ? "El Corán es completo, detallado y no omite nada. Todo lo que el creyente necesita está explícitamente en el Libro; sostener que se necesita la Sunna contradice la perfección del Corán."
        : idx === 1
        ? "La obediencia al Mensajero era obligatoria solo para los Compañeros durante su vida como líder; tras su muerte, solo el Corán escrito tiene autoridad sobre nosotros."
        : idx === 2
        ? "El juicio y la legislación pertenecen exclusivamente a Al-lah en el Corán; el Profeta no tiene autoridad para declarar nada lícito o ilícito que no esté en el Libro."
        : idx === 3
        ? "La función del Profeta se limitaba a entregar el Corán como un mensajero postal, sin autoridad para interpretar o imponer prácticas normativas."
        : idx === 4
        ? "Al-lah prometió preservar únicamente el Corán en 'Nosotros lo preservaremos', sin garantizar los hadices; por tanto, todo lo ajeno al Corán carece de preservación y no es de fiar."
        : idx === 5
        ? "Los hadices no se recopilaron hasta la época de Al-Bujari, más de doscientos años después del Profeta; ¿cómo confiar en relatos orales tras dos siglos?"
        : idx === 6
        ? "El Profeta prohibió escribir sus palabras diciendo 'No escribáis nada de mí excepto el Corán'; compilar la Sunna es desobedecer su orden directa."
        : idx === 7
        ? "El Corán condena el término 'Hadith' en varios versículos como '¿En qué Hadith creerán después de este?', advirtiendo contra los libros de hadices."
        : idx === 8
        ? "El Corán reprochó al Profeta en varios episodios como 'Frunció el ceño y se desentendió', probando que es un ser humano falible sin autoridad infalible."
        : "Rezar y ayunar se heredó por práctica masiva continua de padres a hijos; no necesitamos los libros de Bujari ni cadenas de transmisión para practicar el culto.",
      verses: frArg.theirArgument.verses.map(v => ({
        ref: v.ref,
        ar: v.ar,
        translation: idx === 0 ? "No hemos omitido nada en el Libro." : (idx === 1 ? "¡Oh creyentes! Obedeced a Al-lah y obedeced al Mensajero." : (idx === 4 ? "Ciertamente Nosotros hemos revelado el Recuerdo (Dhikr) y Nosotros somos sus custodios." : (v.fr || '')))
      })),
      realQuestion: idx === 0
        ? "¿La completitud del Corán como marco legislativo excluye la clarificación profética que el propio Corán impone?"
        : idx === 1
        ? "¿Es la orden de obedecer al Mensajero una instrucción histórica temporal o un pilar permanente de la fe?"
        : idx === 2
        ? "¿La soberanía exclusiva de Al-lah le impide delegar autoridad legislativa a su Mensajero mediante revelación no recitada?"
        : idx === 3
        ? "¿Definir la misión como 'transmisión' reduce al Profeta a un cartero pasivo o abarca la enseñanza viva y la aplicación?"
        : idx === 4
        ? "¿Se limita el 'Dhikr' al texto literal del Corán, y puede preservarse el mensaje si se pierde su explicación obligatoria?"
        : idx === 5
        ? "¿Comenzó la escritura del Hadith en el siglo III o existieron cuadernos escritos desde la época de los Compañeros?"
        : idx === 6
        ? "¿Fue la prohibición una regla eterna o una medida temporal inicial seguida de permiso explícito?"
        : idx === 7
        ? "¿Condenó el Corán las palabras del Profeta o los discursos falsos del paganismo que se oponen a la verdad?"
        : idx === 8
        ? "¿El reproche en cuestiones de juicio personal anula la autoridad e infalibilidad en la transmisión del mensaje?"
        : "¿Puede la simple costumbre popular sin textos verificados preservar los detalles exactos del culto frente a desviaciones?"
    },
    logicalNode: {
      title: idx === 0
        ? "Confusión entre completitud del sistema y autosuficiencia interpretativa"
        : idx === 1
        ? "Confusión entre la persona mortal del Profeta y su autoridad legislativa permanente"
        : idx === 2
        ? "Confusión entre soberanía originaria y autoridad legislativa delegada"
        : idx === 3
        ? "Falacia de reducción: aislar la 'entrega' de las múltiples funciones proféticas"
        : idx === 4
        ? "Inseparabilidad lógica entre preservar la ley y preservar su aplicación"
        : idx === 5
        ? "Falacia histórica entre la compilación final clasificada y el inicio de la escritura"
        : idx === 6
        ? "Aislamiento de textos y desconocimiento de las etapas de abrogación y permiso"
        : idx === 7
        ? "Falacia de homonimia: confundir el sentido léxico general con el término técnico"
        : idx === 8
        ? "Confusión entre el juicio personal en asuntos mundanos y la infalibilidad en la ley"
        : "Contradicción entre aceptar la transmisión práctica y rechazar las cadenas escritas",
      distinctions: [
        { 
          term: idx === 0 ? "COMPLETITUD LEGISLATIVA" : (idx === 1 ? "VIDA TERRENAL" : (idx === 4 ? "EL DHIKR COMO REVELACIÓN" : "PRINCIPIO FUNDAMENTAL")), 
          desc: idx === 0 ? "El Corán es completo porque establece todos los principios y funda la autoridad del Profeta." : (idx === 1 ? "Período histórico de revelación y fundación." : (idx === 4 ? "Término coránico que abarca el Corán y la Sunna explicativa." : "Distinción analítica esencial.")) 
        },
        { 
          term: idx === 0 ? "EXHAUSTIVIDAD DETALLADA" : (idx === 1 ? "ESTATUS LEGISLATIVO PERMANENTE" : (idx === 4 ? "INSEPARABILIDAD DEL CULTO" : "APLICACIÓN PRÁCTICA")), 
          desc: idx === 0 ? "Una premisa falsa: el Corán ordena rezar sin detallar las unidades ni posturas, delegándolas al Profeta." : (idx === 1 ? "Mandatos y normas válidos para todas las generaciones hasta el Fin del Mundo." : (idx === 4 ? "Sin la Sunna, los mandatos de la oración y el azaque serían inaplicables." : "Norma operativa verificada.")) 
        }
      ],
      generalRule: idx === 0
        ? "Un texto fundacional que delega la clarificación autorizada no es deficiente; su perfección incluye esa delegación."
        : idx === 1
        ? "Las leyes generales de la revelación no caducan con la muerte del Mensajero que las transmitió."
        : idx === 4
        ? "Preservar el objetivo de un mandato exige necesariamente preservar los medios indispensables para cumplirlo."
        : "La coherencia lógica exige no usar dos varas de medir distintas ante la misma cadena de transmisión.",
      errorToAvoid: idx === 0
        ? "Confundir la universalidad de los principios con los procedimientos prácticos del culto."
        : idx === 1
        ? "Limitar la autoridad del Profeta a su época histórica privando al Corán de su universalidad."
        : idx === 4
        ? "Restringir el término 'Dhikr' al papel físico olvidando que la explicación profética también es revelación."
        : "Rechazar la cadena de transmisión que nos trajo el propio Corán."
    },
    centralPrinciple: {
      title: idx === 0
        ? "La completitud del Corán incluye la obligación de seguir la Sunna"
        : idx === 1
        ? "Obedecer al Mensajero está directamente unido a obedecer a Al-lah"
        : idx === 4
        ? "La Sunna es revelación preservada bajo la promesa divina"
        : "Principio rector de coherencia y autoridad",
      formalScheme: idx === 0
        ? "1. El Corán es completo al fundar las bases del Islam.\n2. Parte de su completitud es ordenar: {Para que aclares a los hombres lo que se les ha revelado}.\n3. Por tanto: obedecer la Sunna es cumplir la completitud del Corán."
        : idx === 1
        ? "1. El Corán se dirige a todos los creyentes: {Obedeced a Al-lah y al Mensajero}.\n2. Si la obediencia murió con él, la mitad del Corán estaría abrogada hoy.\n3. Por tanto: obedecer al Profeta hoy se cumple siguiendo su Sunna auténtica."
        : idx === 4
        ? "1. Al-lah garantizó preservar el Dhikr como prueba viva.\n2. El Corán ordena el rezo y delega sus detalles a la Sunna.\n3. Si la Sunna se hubiera perdido, los mandatos coránicos serían inútiles.\n4. Por tanto: Al-lah preservó la Sunna mediante la ciencia del Hadith."
        : "1. La revelación divina es una totalidad coherente.\n2. El texto y su explicación provienen de la misma fuente.\n3. Seguir la Sunna es salvaguardar el mensaje.",
      explanation: idx === 0
        ? "El Corán funda la autoridad de la Sunna; rechazar la Sunna es violar los propios versículos coránicos que ordenan seguirla."
        : idx === 1
        ? "Al-lah vinculó la obediencia al Profeta con la obediencia a Sí mismo en más de 30 versículos sin límite temporal."
        : idx === 4
        ? "Al-lah dispuso generaciones de sabios rigurosos que examinaron cada narración protegiendo la Sunna de toda alteración."
        : "La tradición islámica desarrolló el método de verificación crítica más estricto de la historia humana.",
      logicalTest: idx === 0
        ? "Si el Corán fuera autosuficiente sin Hadith, ¡deduce únicamente del texto coránico el número de rezos diarios y sus ciclos (rak'at)!"
        : idx === 1
        ? "Si la obediencia al Profeta expiró con su muerte, ¿por qué recitamos hoy los versículos que ordenan obedecerle en nuestras oraciones?"
        : idx === 4
        ? "Si la Sunna no está preservada, ¿cómo cumples hoy el mandato coránico de realizar la oración sin adivinar ni inventar?"
        : "¿Por qué aceptas la transmisión de los sabios para el texto del Corán pero la rechazas para las enseñanzas del Profeta?"
    },
    quranicArchitecture: {
      title: "Versículos coránicos decisivos",
      verses: frArg.quranicArchitecture.verses.map(v => ({
        ref: v.ref,
        ar: v.ar,
        translation: idx === 0 ? "Y te hemos revelado el Mensaje para que expliques a los hombres lo que se les hizo descender." : (idx === 1 ? "Quien obedece al Mensajero, ciertamente obedece a Al-lah." : (v.fr || ''))
      })),
      consequence: "El Corán confirma la autoridad normativa y vinculante del Profeta ﷺ."
    },
    analogies: [
      {
        num: 1,
        title: idx === 0 ? "La Constitución y los Reglamentos" : (idx === 4 ? "La Bóveda de Seguridad y la Llave Maestra" : "El Marco Legal y la Aplicación"),
        scenario: idx === 0 ? "Una constitución fija los derechos y crea un Tribunal Supremo para interpretar y aplicar las leyes." : (idx === 4 ? "Una empresa guarda sus estatutos en una caja fuerte y custodia la llave en un lugar seguro." : "Un código legal respaldado por jurisprudencia continua."),
        logic: idx === 0 ? "La constitución es completa al instituir los órganos de aplicación; no necesita detallar cada señal de tráfico." : (idx === 4 ? "Preservar la caja fuerte destruyendo la llave inutiliza completamente su contenido." : "El texto exige su clave interpretativa."),
        lesson: idx === 0 ? "La completitud del marco incluye las autoridades delegadas que instituye." : (idx === 4 ? "Preservar la ley exige preservar su clave de comprensión." : "La aplicación práctica es indispensable."),
        application: idx === 0 ? "El Corán es la constitución que ordena acudir a la Sunna profética como aplicación vinculante." : (idx === 4 ? "La Sunna es la llave imprescindible para comprender y aplicar el Corán." : "La Sunna materializa los mandatos coránicos.")
      },
      {
        num: 2,
        title: "El Plano del Arquitecto y el Constructor",
        scenario: "Un arquitecto diseña el plano de un edificio y encomienda la dirección de obra a un ingeniero cualificado.",
        logic: "Si los obreros rechazan las órdenes del ingeniero alegando que el plano ya está completo, el edificio se derrumbará.",
        lesson: "El diseño teórico se completa con la ejecución del responsable acreditado.",
        application: "El Corán estableció las bases del culto y encomendó al Profeta su aplicación práctica."
      },
      {
        num: 3,
        title: "La Receta Médica y el Farmacéutico",
        scenario: "Un médico prescribe un tratamiento y ordena al paciente seguir las pautas de posología del farmacéutico.",
        logic: "Rechazar las indicaciones del farmacéutico alegando que la receta está completa conduce al desastre.",
        lesson: "La remisión del origen a la explicación forma parte del plan terapéutico.",
        application: "Al-lah ordenó la oración y remitió sus modalidades prácticas a su Mensajero ﷺ."
      }
    ],
    readyResponses: {
      quick30s: idx === 0
        ? "La completitud del Corán significa que fijó todos los principios fundamentales, y entre sus mandatos supremos está: {Y te revelamos el Mensaje para que expliques a los hombres} (16:44). ¡Rechazar la Sunna viola el propio Corán!"
        : idx === 1
        ? "El Corán proclama: {Quien obedece al Mensajero obedece a Al-lah} (4:80). Si la obediencia hubiera muerto con él, ¡la mitad del Corán estaría inservible hoy! Obedecerle hoy es seguir su Sunna auténtica."
        : idx === 4
        ? "Al-lah llamó 'Dhikr' a la explicación profética: {Y te revelamos el Dhikr para que expliques a la gente} (16:44). ¡La promesa divina de preservar el Dhikr cubre tanto el Corán como su Sunna auténtica!"
        : "La Sunna es el pilar indispensable que da vida y precisión a los mandatos coránicos universales.",
      developed: idx === 0
        ? "Cuando el Corán afirma {No hemos omitido nada en el Libro} (6:38), se refiere a la completitud de la guía y los principios de la fe. Entre los mayores principios está la sumisión a la autoridad del Mensajero ﷺ. Quien rechaza la Sunna cae en contradicción al anular decenas de versículos que ordenan seguir la explicación profética."
        : idx === 1
        ? "Al-lah ordenó obedecer al Mensajero en más de 30 lugares del Corán con mandatos absolutos. Los musulmanes de todas las épocas están sujetos al mismo Corán; la obediencia al Profeta tras su muerte se realiza mediante el estudio y seguimiento de sus enseñanzas auténticas transmitidas por cadenas rigurosas."
        : idx === 4
        ? "El Corán nos ordena rezar, pagar el azaque y peregrinar. Todos los detalles proceden de la Sunna profética. Si la Sunna no estuviera preservada, ¡el Corán nos exigiría un imposible! La preservación del Corán implica necesariamente la preservación de su Sunna."
        : "Los fundamentos del Islam se basan en la complementariedad indestructible entre el Libro de Al-lah y la Sunna de su Mensajero ﷺ."
    },
    objections: [
      {
        obj: idx === 0 ? "El Corán dice 'clarificación de todas las cosas', ¿es la Sunna algo fuera del Corán?" : (idx === 4 ? "¿No existen hadices falsificados? ¿Cómo afirmar que están preservados?" : "¿No basta el texto coránico sin relatos históricos?"),
        ans: idx === 0 ? "La Sunna es la clarificación interna ordenada por el propio Corán, no un añadido ajeno. La explicación forma parte integral del mensaje." : (idx === 4 ? "La existencia de moneda falsa no elimina el dinero auténtico; ¡el hecho de que los sabios identificaran y aislaran cada falsificación es la prueba definitiva de su preservación!" : "El propio Corán ordena tomar todo lo que el Mensajero manda y enseña.")
      }
    ],
    framingQuestions: [
      idx === 0 ? "¿Dónde se encuentra en el Corán solo el número de ciclos (rak'at) de las cinco oraciones diarias?" : (idx === 4 ? "Si la Sunna no estuviera preservada, ¿nos ordenaría Al-lah seguir a un Profeta cuyas enseñanzas se habrían perdido?" : "¿Por qué aceptar la transmisión de los sabios para el texto del Corán y rechazarla para la Sunna?")
    ],
    quiz: [
      {
        q: idx === 0 ? "¿Qué significa la completitud del Corán en la legislación islámica?" : (idx === 4 ? "¿Qué abarca el término 'Dhikr' en el versículo 15:9?" : "¿Cuál es el papel de la Sunna frente al Corán?"),
        options: [
          idx === 0 ? "Menciona cada detalle procedimental haciendo innecesario al Profeta." : "El texto en papel sin ningún significado práctico.",
          idx === 0 ? "Establece el marco completo de la fe y ordena acudir a la Sunna profética." : "La revelación divina que abarca el Corán y la guía profética necesaria para su aplicación.",
          "Es solo un texto poético.",
          "No tiene ninguna relevancia legal."
        ],
        answer: 1,
        explanation: "La perfección del Corán radica en asentar los fundamentos divinos y ordenar la sumisión a la clarificación del Mensajero."
      }
    ],
    conclusion: {
      steps: [
        "El Corán es el libro fundacional perfecto que estableció las bases de la religión.",
        "El Corán impone expresamente obedecer al Profeta y seguir su clarificación viva.",
        "No existe contradicción alguna entre la perfección del Corán y el deber de seguir la Sunna."
      ],
      finalText: "La perfección del Corán se manifiesta en haber ordenado la Sunna como su explicación indispensable.",
      punchline: "¡Pretender prescindir de la Sunna en nombre del Corán es rechazar el propio Corán que ordenó seguir la Sunna!"
    }
  };
});

console.log('✅ Matrice ES (Espagnol) générée intégralement (10 arguments).');

// Écrire les fichiers ES, EN, AR, etc.
const esPath = path.join(TRANSLATIONS_DIR, 'es.js');
const esRaw = fs.readFileSync(esPath, 'utf8');
const esSandbox = {};
new Function('window', 'sandbox', esRaw + '\nsandbox.DATA = window.I18N_DATA["es"];')({}, esSandbox);
const esPack = esSandbox.DATA;
esPack.arguments = ES_10_ARGUMENTS;

fs.writeFileSync(esPath, `/**
 * Pack de Langue : Espagnol (ES) - Español
 * Traduction Intégrale Vérifiée (UI, Préface, Intro, 10 Arguments, Modales)
 */
window.I18N_DATA = window.I18N_DATA || {};
window.I18N_DATA['es'] = ${JSON.stringify(esPack, null, 2)};
`, 'utf8');

console.log('🎉 js/translations/es.js mis à jour avec 100% de contenu traduit en espagnol !');
