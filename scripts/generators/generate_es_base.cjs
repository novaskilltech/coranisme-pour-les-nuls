/**
 * GÉNÉRATEUR TRADUCTION ESPAGNOLE 100% NATIVE (ESPAÑOL)
 * Traduction intégrale, rigoureuse et doctrinale par NOVA SQUAD.
 */

const fs = require('fs');
const path = require('path');

const esData = {
  code: "es",
  name: "Espagnol",
  native: "Español",
  flagSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 500" class="flag-icon"><rect width="750" height="500" fill="#c60b1e"/><rect width="750" height="250" y="125" fill="#ffc400"/></svg>`,
  dir: "ltr",
  fontFamily: "var(--font-main)",
  ui: {
    brandBadge: "MANUAL PRÁCTICO",
    brandTitle: "REFUTACIÓN DEL CORANISMO",
    brandSubtitle: "Cómo desenmascarar y refutar a la secta de los coranistas",
    searchBtn: "Buscar",
    searchPlaceholder: "Buscar por tema, versículo, objeción, analogía...",
    searchModalTitle: "Búsqueda rápida en el manual",
    searchNoResults: "No se encontraron resultados para esta búsqueda.",
    searchShortcutHint: "Presione ESC para cerrar",
    topbarContact: "Contacto",
    topbarLegal: "Licencia y Compartir",
    topbarBarbahari: "Al-Barbahârî",
    sidebarTitle: "📚 Índice General",
    sidebarCount: "12 temas",
    sidebarHome: "🏠 Inicio / Hub",
    sidebarContact: "✉️ Contactar al Autor",
    heroTag1: "📖 Manual Práctico de Refutación",
    heroTag2: "🌿 Difusión Pedagógica Abierta",
    heroTitleMain: "Refutación",
    heroTitleSpan: "del Coranismo",
    heroAuthor: "Por Salah Eddine Ahmed (Abou Soulaymane)",
    heroDesc: "Desmonte paso a paso las falacias del coranismo mediante una argumentación lógica rigurosa, ejemplos cotidianos, versículos decisivos y respuestas preparadas en 30 segundos.",
    btnStartArg1: "Comenzar con el Argumento 1",
    btnSearchModal: "Buscar en el manual",
    sommaireTitle: "Los 10 Grandes Argumentos Analizados",
    sommaireBadge: "10 Fichas Listas para Usar",
    cardAdverseThesisPrefix: "Tesis de los coranistes:",
    btnReadCard: "Consultar la ficha",
    btnDownloadPdf: "Descargar el fascículo en PDF original",
    btnPrintCard: "Imprimir / Guardar en PDF",
    methodTag: "METODOLOGÍA DE DEBATE",
    methodTitle: "El Método de los 3 Pasos Ineludibles",
    methodStep1Title: "1. Desarmar la Falacia",
    methodStep1Desc: "Identifique si el oponente utiliza una falsa dicotomía, una generalización abusiva o un cambio de la carga de la prueba.",
    methodStep2Title: "2. La Analogía Cotidiana",
    methodStep2Desc: "Utilice una situación de la vida diaria (leyes, medicina, planos) para evidenciar el absurdo lógico de su razonamiento.",
    methodStep3Title: "3. La Consecuencia Absurda",
    methodStep3Desc: "Muestre a qué caos teológico y práctico conduce su tesis si se aplicara con total coherencia.",
    quoteBoxText: "«Rechazar la autoridad que el propio texto designa en nombre de la suficiencia del texto es transformar la suficiencia en un principio que el texto jamás formuló.»",
    quoteBoxAuthor: "— Salah Eddine Ahmed (Abou Soulaymane)",
    sec1Header: "1. ENCUADRE DOCTRINAL Y CONTEXTO",
    sec2Header: "2. LA TESIS ADVERSA Y SUS TEXTOS",
    sec2ThesisLabel: "Tesis sostenida por los coranistas :",
    sec2VersesLabel: "Versículos que citan (fuera de contexto) :",
    sec2RealQuestionLabel: "La verdadera pregunta de fondo :",
    sec3Header: "3. EL NUDO LÓGICO Y LAS DISTINCIONES CLAVE",
    sec3GeneralRuleLabel: "Regla general de razonamiento :",
    sec3ErrorLabel: "El error lógico que se debe evitar :",
    sec4Header: "4. EL PRINCIPIO CENTRAL",
    sec4FormalSchemeLabel: "Esquema formal de demostración :",
    sec4ExplanationLabel: "Explicación doctrinal :",
    sec4TestLabel: "Prueba lógica decisiva :",
    sec5Header: "5. ARQUITECTURA CORÁNICA",
    sec5ConsequenceLabel: "Consecuencia doctrinal ineludible :",
    sec6Header: "6. ANALOGÍAS PEDAGÓGICAS COTIDIANAS",
    sec6ScenarioLabel: "Situación concreta :",
    sec6LogicBoxLabel: "Paralelismo lógico :",
    sec6LessonLabel: "Lección que se debe extraer :",
    sec7Header: "7. RESPUESTAS LISTAS PARA EL DIÁLOGO",
    sec7QuickResponseLabel: "⚡ Respuesta en 30 segundos (clara y contundente) :",
    sec7DevelopedResponseLabel: "🗣️ Respuesta desarrollada (para profundizar) :",
    sec8Header: "8. OBJECIONES CLÁSICAS Y RESPUESTAS",
    sec8DirectQuestionsLabel: "Preguntas de encuadre directo :",
    sec9Header: "9. CONCLUSIÓN EN CADENA LÓGICA",
    quizTitle: "8. EVALÚE SU COMPRENSIÓN",
    quizBadge: "Cuestionario interactivo",
    btnCheckAnswer: "Comprobar la respuesta",
    btnNextQuestion: "Siguiente pregunta ➔",
    btnRestartQuiz: "Reiniciar el cuestionario",
    quizFeedbackCorrect: "✅ ¡Exacto! Excelente deducción.",
    quizFeedbackIncorrect: "❌ Respuesta incorrecta. Vuelva a leer la explicación abajo :",
    portalWarningBadge: "ADVERTENCIA DE LOS SABIOS CLÁSICOS SOBRE QUIENES RECHAZAN LA TRANSMISIÓN",
    portalTitle: "Palabras del Imam Al-Barbahârî (رحمه الله)",
    portalQuoteTransLabel: "Traducción del sentido :",
    portalQuoteText: "Si oyes a un hombre a quien se le cita una tradición (un relato transmitido) y la rechaza diciendo: \"Deja eso y tráenos solo el Corán\", no dudes en absoluto de que es un hombre impregnado de herejía. ¡Levántate de su asamblea y apártate de él!",
    portalAuthorBadge: "✍️ Imam Al-Barbahârî (m. 329 H)",
    portalSourceRef: "Fuente : Sharḥ As-Sunnah (Punto 135)",
    portalEnterBtn: "ACCEDER AL MANUAL DE REFUTACIÓN",
    portalDisclaimer: "Cómo desenmascarar y refutar a la secta de los coranistas • Por Salah Eddine Ahmed (Abou Soulaymane) • Uso pedagógico libre citando la fuente",
    argBadgeGiant: "ARGUMENTO",
    btnDownloadFascicule: "Descargar el fascículo original (PDF)",
    btnOpenPrint: "Imprimir / Guardar en PDF",
    tocSummary: "Índice de la ficha :",
    tocCadrage: "1. Encuadre",
    tocAdverse: "2. Tesis Adversa",
    tocNoeud: "3. Nudo Lógico",
    tocPrincipe: "4. Principio Central",
    tocArchi: "5. Arquitectura Coránica",
    tocAnalogies: "6. Analogías",
    tocReponses: "7. Respuestas Listas",
    tocObjections: "8. Objeciones",
    tocConclusion: "9. Conclusión",
    tocQuiz: "10. Cuestionario",
    navPrevArg: "Argumento anterior",
    navNextArg: "Argumento siguiente",
    navBackSummary: "Volver al índice",
    navEndManual: "Fin del Manual",
    contactModalTitle: "Contactar al Autor",
    contactAuthorHeader: "Autor de la obra",
    authorName: "Salah Eddine Ahmed (Abou Soulaymane)",
    contactAuthorBio: "Investigador y educador en ciencias islámicas, dedicado a la defensa metódica de la Sunna profética y a la refutación pedagógica de los desvíos doctrinales contemporáneos.",
    contactBookTitleLabel: "Título de la obra de referencia :",
    contactBookTitleValue: "Comment démasquer et réfuter la secte des coranistes — Méthode, arguments, objections et réponses.",
    contactEmailNotice: "Para cualquier intercambio doctrinal, sugerencia pedagógica, solicitud de conferencia o traducción :",
    legalModalTitle: "⚖️ Condiciones de Difusión, Autor y Privacidad",
    legalSharingHeader: "Condiciones de Difusión y Compartición Pedagógica",
    legalSharingMain: "Difusión y Compartición Pedagógica Abierta",
    legalSharingP1: "Este contenido puede ser compartido gratuitamente y reproducido para fines personales, pedagógicos y no comerciales, con la condición indispensable de conservar la autoría y la fuente.",
    legalAllowedTitle: "✅ Usos expresamente autorizados :",
    legalAllowedBullet1: "Descarga, impresión, lectura y difusión gratuita de las fichas de estudio.",
    legalAllowedBullet2: "Utilización en cursos, círculos de estudio, debates y redes sociales.",
    legalAllowedBullet3: "Queda estrictamente prohibida toda explotación comercial o alteración desnaturalizante del texto sin autorización previa.",
    legalPrivacyHeader: "Datos Técnicos y Privacidad",
    legalPrivacyMain: "Política de Privacidad Transparente y Conforme",
    legalPrivacyP1: "El sitio no requiere creación de cuenta y no recopila voluntariamente ningún dato personal mediante formularios. Los datos técnicos tratados por el servidor se rigen por los estándares europeos de privacidad.",
    legalPrivacyBullet1: "Sin cookies publicitarias de terceros : Cero píxeles de rastreo comercial.",
    legalPrivacyBullet2: "Fuentes y recursos : Carga segura de Google Fonts (Inter, Outfit, Amiri).",
    legalCreditsHeader: "Detalles del Libro :",
    legalCreditsBookTitle: "Cómo desenmascarar y refutar a la secta de los coranistas — Método, argumentos, objeciones y respuestas",
    footerSubtitle: "10 grandes argumentos examinados y refutados metódicamente",
    footerBtnLegal: "⚖️ Licencia, Compartir y Privacidad",
    footerBtnContact: "✉️ Contactar al Autor",
    footerBtnPortal: "📜 Palabras de Al-Barbahârî",
    footerContactLabel: "Contacto :",
    btnShare: "Compartir",
    btnCopySection: "Copiar esta sección",
    btnCopy: "Copiar",
    copied: "¡Copiado!",
    shareModalTitle: "📤 Compartir esta ficha",
    shareModalDesc: "Comparta este argumento para el estudio y la defensa de la Sunna :",
    shareCardTitle: "Compartir esta refutación",
    shareCardDesc: "Difunda esta ficha para defender la Sunna en WhatsApp, Telegram o redes sociales.",
    toastSectionCopied: "✅ ¡Sección copiada al portapapeles!",
    toastLinkCopied: "✅ ¡Enlace copiado al portapapeles!",
    navFallacies: "Caja de herramientas — Identificar falacias antes de debatir",
    fallaciesTitle: "CAJA DE HERRAMIENTAS",
    fallaciesBadgeTitle: "FALACIAS DETECTADAS EN ESTE ARGUMENTO :",
    viewFallacyDetail: "Ver análisis detallado ▼",
    hideFallacyDetail: "Ocultar análisis ▲",
    btnOpenToolbox: "Consultar en la Caja de herramientas",
    footerVisitsLabel: "Visitas totales :",
    footerVisitsPrivacy: "100% Anónimo • RGPD",
    footerVisitsTooltip: "Contador de visitas anónimo y respetuoso con la privacidad (RGPD - 0 cookies)",
    navPreface: "Prefacio del Autor",
    navIntro: "¿Quiénes son los coranistas?"
  },
  preface: {
    badge: "APERTURA DEL LIBRO",
    title: "PREFACIO DEL AUTOR",
    subtitle: "¿Por qué este manual metódico de refutación?",
    introTag: "ANTES DE COMENZAR",
    basmala: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ (En el Nombre de Allah, el Clemente, el Misericordioso)",
    sections: [
      {
        type: "adverse",
        header: "¿POR QUÉ ESTE LIBRO?",
        title: "Una observación personal y metodológica",
        paragraphs: [
          "Esta obra nació de una constatación personal que me entristeció profundamente.",
          "A lo largo de los años, he visto a conocidos caer en lo que hoy se denomina 'coranismo' (solo el Corán): una corriente que pretende volver al Corán, pero que en la práctica desmantela y desecha la autoridad normativa de la Sunna profética.",
          "Con frecuencia, esto no proviene de una voluntad consciente de rechazar al Profeta ﷺ. Comienza con una falta de conocimientos básicos: en ciencias del Hadiz, ciencias coránicas, metodología de transmisión, lingüística árabe e historia de los textos."
        ]
      },
      {
        type: "retenir",
        header: "CUANDO LAS DUDAS SE TRANSFORMAN EN DOGMAS",
        title: "De la perplejidad al desvío metodológico",
        paragraphs: [
          "Luego vienen las ambigüedades polémicas: a una persona se le presenta un relato fuera de contexto, un texto cuyo grado de autenticidad ignora, una traducción deformada o una controversia emocional diseñada para provocar rechazo.",
          "Se le presentan temas como la edad de 'Â'ishah (que Allah esté complacido con ella), ciertos relatos médicos, la brujería, disposiciones legales o el viaje nocturno (Al-Isrâ' wal-Mi'râj).",
          "Sin herramientas de análisis crítico, la duda se instala y se convierte en un dogma completo:",
          "«Este hadiz me desconcierta» ➔ «Tal vez los hadices no sean fiables» ➔ «Tal vez la Sunna sea superflua» ➔ «Solo el Corán es suficiente».",
          "Terminan seleccionando versículos aislados, forzando el sentido de las palabras y redefiniendo 'Obedezcan al Mensajero' para despojar al Profeta ﷺ de toda autoridad real."
        ]
      },
      {
        type: "analogie",
        header: "UNA INMENSA TRADICIÓN DE TRANSMISIÓN",
        title: "Una ciencia de verificación sin equivalente",
        paragraphs: [
          "¡La Sunna no nos llegó porque unos individuos decidieron siglos más tarde llenar libros con relatos al azar! Detrás del corpus del Hadiz se encuentra el sistema de crítica biográfica y de cadenas de transmisión (Isnâd y Rijâl) más riguroso de la historia humana.",
          "Generaciones de eruditos examinaron minuciosamente a los transmisores: su probidad moral, su memoria, sus maestros, sus contemporáneos, viajando durante meses enteros para verificar una sola frase.",
          "Descartar este colosal patrimonio científico diciendo 'solo son hombres que cuentan historias' no es espíritu crítico: es una ignorancia total de las ciencias del Hadiz."
        ],
        distinctions: [
          {
            term: "CRÍTICA DE LOS TRANSMISORES (RIJÂL)",
            desc: "Integridad, precisión, encuentros históricos y condiciones exactas de recepción."
          },
          {
            term: "CRÍTICA DE LOS TEXTOS (MUTÛN)",
            desc: "Cotejo de variantes, detección de defectos ocultos ('Ilal) y distinción entre lo auténtico y lo inventado."
          }
        ]
      },
      {
        type: "cadrage",
        header: "¿Y CÓMO NOS LLEGÓ EL CORÁN?",
        title: "La misma cadena humana de transmisión",
        paragraphs: [
          "Una pregunta crucial que todo coranista debe afrontar: ¿A través de quién te llegó el Corán?",
          "El ejemplar físico del Corán (el Mushaf) no te fue entregado directamente por el ángel Gabriel. Nos llegó mediante los Compañeros, los Sucesores, los lectores y una transmisión generacional ininterrumpida.",
          "La lectura de Hafs transmitida de 'Âsim nos llegó a través de cadenas humanas de hombres. La cuestión lógica nunca es '¿hay eslabones humanos?', sino '¿cuál es el grado de certeza y verificación de esta transmisión?'."
        ]
      },
      {
        type: "retenir",
        header: "UNA RESPONSABILIDAD PERSONAL",
        title: "¿Por qué el silencio ya no es una opción?",
        paragraphs: [
          "Frente a la multiplicación de discursos seductores en las redes sociales que desestabilizan a jóvenes creyentes desprovistos de bases metodológicas, callar se convierte en una falta de responsabilidad.",
          "Este libro no fue concebido para alimentar polémicas estériles ni para insultar a nadie. Fue diseñado como una herramienta pedagógica estructurada, accesible para todos, con el fin de aportar respuestas argumentadas, lógicas y fundadas en las fuentes auténticas del Islam.",
          "Pido a Allah que haga de este trabajo un motivo de claridad y beneficio sincero para todo aquel que busque la verdad con rigor y honestidad."
        ]
      }
    ]
  },
  intro: {
    badge: "REFERENCIAS HISTÓRICAS",
    title: "¿QUIÉNES SON LOS CORANISTAS?",
    subtitle: "Orígenes, fundamentos y anatomía de un desvío doctrinal",
    introTag: "COMPRENDER EL FENÓMENO",
    sections: [
      {
        type: "cadrage",
        header: "GÉNESIS Y CONTEXTO HISTÓRICO",
        title: "Una herejía moderna con raíces antiguas",
        paragraphs: [
          "El 'coranismo' contemporáneo (Ahl al-Qur'ân / Qur'aniyyûn) se presenta a menudo como un movimiento moderno, progresista o reformador. En realidad, la pretensión de querer prescindir de la Sunna ya fue denunciada por el Profeta ﷺ en términos proféticos explícitos.",
          "El Profeta ﷺ dijo: «Ciertamente se acerca el tiempo en que un hombre saciado, recostado en su diván, dirá: 'Tened solo este Corán; lo que encontréis en él como lícito, consideradlo lícito, y lo que encontréis en él como ilícito, consideradlo ilícito'. ¡Pues ciertamente lo que el Mensajero de Allah ha prohibido es como lo que Allah ha prohibido!» (Narrado por Abu Dawud, At-Tirmidhi e Ibn Majah, autenticado).",
          "Históricamente, ciertas sectas marginales (ciertas ramas extremas de los mu'tazilitas y jariyitas) intentaron rechazar partes de la Sunna, pero el rechazo total y categórico de todo el corpus del Hadiz es un fenómeno moderno surgido a finales del siglo XIX bajo la influencia de la colonización y el complejo de inferioridad intelectual frente a Occidente."
        ]
      },
      {
        type: "adverse",
        header: "EL MECANISMO PSICOLÓGICO Y DOCTRINAL",
        title: "De la dificultad de comprensión al rechazo deliberado",
        paragraphs: [
          "El método del coranismo reposa sobre una mecánica psicológica predecible:",
          "1. El choque emocional : Se selecciona un hadiz auténtico complejo (por ejemplo, sobre medicina antigua, astronomía, el matrimonio o temas jurídicos) y se presenta a un público moderno sin contexto ni explicaciones lingüísticas.",
          "2. La generalización abusiva : De la incomprensión de un texto particular, se deduce falsamente que todos los Hadices son dudosos.",
          "3. La falsa alternativa : Se plantea el dilema artificial: «¿Prefieres seguir la Palabra divina perfecta de Allah o palabras de hombres recopiladas dos siglos después?»",
          "4. El vacío hermenéutico : Al rechazar la Sunna, el coranista se ve obligado a inventar de la nada el sentido de los versículos, cayendo en interpretaciones fantasiosas donde la oración, el ayuno y el peregrinaje pierden toda realidad histórica."
        ]
      },
      {
        type: "retenir",
        header: "CONSECUENCIAS TEOLÓGICAS INEVITABLES",
        title: "El desmoronamiento de la práctica islámica",
        paragraphs: [
          "El rechazo de la Sunna no simplifica la religión: la destruye en su aplicación práctica:",
          "• Imposibilidad de orar : El Corán ordena la oración (As-Salât), pero no menciona en ninguna parte cuántas unidades (rak'at) tiene la oración del mediodía o del ocaso, ni las invocaciones exactas, ni las reglas de postración.",
          "• Imposibilidad de pagar el Zakat : El Corán ordena el impuesto purificador, pero los porcentajes precisos (el 2,5%) y los umbrales de imposición (Nisâb) provienen exclusivamente de la Sunna profética.",
          "• Imposibilidad de realizar el Hayy : Los ritos del peregrinaje (número de vueltas alrededor de la Ka'bah, Sa'y entre Safa y Marwa, estaciones en 'Arafat) están detallados por la práctica viva del Profeta ﷺ."
        ]
      },
      {
        type: "analogie",
        header: "LA REGLA DE ORO DEL DEBATE",
        title: "Obligar a asumir la coherencia de su tesis",
        paragraphs: [
          "Para refutar a un coranista con benevolencia y firmeza, la regla de oro consiste en colocarlo frente a las consecuencias prácticas de su propia postura.",
          "No se limite a defender los Hadices: pídale que explique cómo practica el Islam en su vida cotidiana basándose exclusivamente en el texto coranico.",
          "Verá de inmediato cómo se ve forzado a recurrir a conjeturas personales, a redefinir palabras o a admitir que depende de la práctica transmitida de generación en generación... ¡es decir, de la mismísima Sunna!"
        ]
      }
    ]
  },
  fallaciesToolbox: {
    headerBadge: "GUÍA METODOLÓGICA",
    title: "CAJA DE HERRAMIENTAS — RECONOCER LAS FALACIAS ANTES DE DEBATIR",
    subtitle: "Identificar los errores lógicos para no dejarse desviar en la discusión",
    introText: "Un argumento puede parecer impresionante a primera vista, citar un versículo coránico auténtico o incluir hechos ciertos... y a pesar de ello desembocar en una conclusión totalmente errónea si el razonamiento lógico que une esos elementos está viciado.",
    goldenRuleTitle: "PRINCIPIO CRUCIAL :",
    goldenRuleText: "MOSTRAR QUE UN ARGUMENTO ES UNA FALACIA NO PRUEBA QUE LA CONCLUSIÓN SEA FALSA ; DEMUESTRA QUE ESTE ARGUMENTO NO LA DEMUESTRA.",
    goldenRuleMeaning: "Desenmascarar un error lógico no exime de examinar el fondo doctrinal; pero protege de aceptar conclusiones construidas sobre razonamientos tramposos.",
    cardMemoBadge: "FICHA MEMO",
    trainingBadge: "ENTRENAMIENTO",
    labelDefinition: "Definición :",
    labelGeneralExample: "🌍 Ejemplo en la vida diaria :",
    labelQuranicApp: "🕌 Aplicación al debate sobre el Coranismo :",
    labelQuestionToAsk: "❓ Pregunta refleja que se debe formular :",
    labelShortAnswer: "⚡ Respuesta corta sugerida :",
    items: [
      {
        id: "fausse-dichotomie",
        num: 1,
        name: "La Falsa Dicotomía",
        shortDef: "Reducir artificialmente una situación compleja a solo dos opciones opuestas.",
        definition: "Reducir artificialmente una situación a dos opciones incompatibles, ocultando una tercera vía perfectamente legítima y coherente.",
        generalExample: "« O estás totalmente de acuerdo conmigo, o eres mi enemigo. »",
        quranicApplication: "• « ¿Sigues a Allah o sigues a Muhammad ﷺ ? » (Falsa oposición: seguir al Mensajero es una orden directa de Allah en el Corán).\n• « ¿Prefieres la Palabra infalible de Allah o palabras de hombres recopiladas siglos después ? »",
        questionToAsk: "« ¿Por qué presentas estas dos cosas como incompatibles cuando una depende directamente de la otra ? »",
        shortAnswer: "« Obedecer al Mensajero de Allah es obedecer a Allah; no son dos caminos en competencia. »",
        icon: "⚖️"
      },
      {
        id: "generalisation-abusive",
        num: 2,
        name: "La Generalización Abusiva",
        shortDef: "Extender un caso particular o dudoso a toda una categoría general.",
        definition: "Extraer una regla general definitiva a partir de un número insuficiente de casos particulares o mal analizados.",
        generalExample: "« Conocí a dos mecánicos deshonestos, por lo tanto todos los mecánicos son unos estafadores. »",
        quranicApplication: "• « Se han inventado hadices falsos en la historia, por lo tanto no se puede confiar en ningún hadiz. »\n• « Un hadiz me parece extraño a primera vista, por lo tanto todo el corpus de Bujari es rechazable. »",
        questionToAsk: "« ¿El hecho de que existan billetes falsificados demuestra que ningún billete de banco auténtico existe ? »",
        shortAnswer: "« La existencia de textos falsificados es precisamente la razón por la cual los sabios desarrollaron una ciencia rigurosa de autenticación. »",
        icon: "🔍"
      },
      {
        id: "epouvantail",
        num: 3,
        name: "El Hombre de Paja (Espantapájaros)",
        shortDef: "Caricaturizar la postura del adversario para atacarla con mayor facilidad.",
        definition: "Deformar, simplificar en exceso o caricaturizar la posición del interlocutor para refutar una versión debilitada que él jamás defendió.",
        generalExample: "« Dices que hay que regular la velocidad, o sea que quieres prohibir completamente los coches. »",
        quranicApplication: "• « Pretendéis que el Corán es incompleto y que necesita la ayuda de los hombres para ser perfecto. »\n(Nadie dice eso: la Sunna no 'completa' una imperfección coránica, sino que cumple la función explicativa que el Corán mismo le asignó).",
        questionToAsk: "« ¿Quién formuló exactamente esa tesis entre los sabios del Islam, o estás rebatiendo una caricatura ? »",
        shortAnswer: "« No critiques lo que no sostenemos; examinemos lo que realmente afirmamos. »",
        icon: "🌾"
      },
      {
        id: "non-sequitur",
        num: 4,
        name: "El Non Sequitur (Ruptura Lógica)",
        shortDef: "La conclusión extraída no se deduce lógicamente de la premisa formulada.",
        definition: "Non sequitur significa 'no se sigue'. La premisa inicial puede ser verdadera, pero la conclusión no se desprende en absoluto de ella.",
        generalExample: "« Está lloviendo afuera, por lo tanto el partido de baloncesto en el pabellón techado está cancelado. »",
        quranicApplication: "• « El Corán es perfecto y completo. Por lo tanto la Sunna es inútil. » (La perfección del marco no excluye la autoridad de aplicación instituida por el texto).\n• « Al-Bujari vivió dos siglos después. Por lo tanto las tradiciones nacieron dos siglos después. »",
        questionToAsk: "« ¿Cuál es el paso lógico exacto que vincula tu premisa con tu conclusión ? »",
        shortAnswer: "« Tu primera afirmación puede ser cierta sin que demuestre en absoluto la segunda. »",
        icon: "⚡"
      },
      {
        id: "cherry-picking",
        num: 5,
        name: "El Cherry-Picking (Selección Sesgada)",
        shortDef: "Seleccionar únicamente las pruebas favorables e ignorar todo el resto.",
        definition: "Citar exclusivamente los pasajes favorables a la propia tesis y ocultar voluntariamente los datos que la matizan o contradicen.",
        generalExample: "Citar 3 estudios favorables y ocultar 50 estudios científicos concluyentes en sentido contrario.",
        quranicApplication: "• Citar « al Mensajero solo le corresponde transmitir el mensaje » omitiendo « Obedezcan al Mensajero », « Tómalo como juez », « modelo excelente ».\n• Citar « No escribáis de mí... » omitiendo la orden posterior « Transmitid de mí sin temor » y « Escribe para Abu Shah ».",
        questionToAsk: "« ¿Existen otros versículos y textos sobre el mismo tema que has dejado fuera deliberadamente ? »",
        shortAnswer: "« Un versículo no se lee de forma aislada cuando otros textos coránicos lo precisan y complementan. »",
        icon: "🍒"
      },
      {
        id: "double-standard",
        num: 6,
        name: "El Doble Rasero (Doble Estándar)",
        shortDef: "Aplicar un criterio muy estricto al adversario y uno muy laxo a uno mismo.",
        definition: "Exigir un nivel de prueba hipercrítico a las pruebas ajenas y aceptar condecoraciones frágiles cuando favorecen la propia conclusión.",
        generalExample: "Exigir pruebas científicas absolutas a los demás y validar simples rumores cuando convienen.",
        quranicApplication: "• Cuando un hadiz fija una norma : « ¡Transmitido por hombres, no es seguro ! » / Cuando un hadiz sirve para una polémica : « ¡Bujari demuestra con certeza absoluta la edad de 'Â'ishah رضي الله عنها ! »\n• Aceptar la transmisión humana del Corán (Hafs de 'Âsim) y rechazar la transmisión idéntica de la Sunna.",
        questionToAsk: "« ¿Aplicarías exactamente el mismo nivel de exigencia si esta prueba favoreciera mi postura ? »",
        shortAnswer: "« El estándar de prueba debe ser idéntico cuando la conclusión te agrada y cuando te incomoda. »",
        icon: "🔄"
      },
      {
        id: "equivoque-lexicale",
        num: 7,
        name: "El Equívoco Léxico (Ambigüedad de Sentido)",
        shortDef: "Utilizar una misma palabra con dos significados distintos sin advertirlo.",
        definition: "Emplear un mismo vocablo con sentidos diferentes a lo largo del razonamiento sin señalar el cambio de definición.",
        generalExample: "« La gravedad es una ley. Las leyes son votadas por el parlamento. Por lo tanto la gravedad fue votada por los diputados. »",
        quranicApplication: "En el Corán, la palabra ḥadīth significa lingüísticamente 'palabra, discurso, relato o noticia'. La falacia consiste en leer « ¿En qué hadiz creerán después de este ? » y sustituir silenciosamente el sentido léxico ('discurso') por el sentido técnico moderno ('recopilaciones de tradiciones proféticas').",
        questionToAsk: "« ¿Qué sentido exacto tiene esta palabra en este versículo concreto, y cómo lo demuestras por el contexto lingüístico ? »",
        shortAnswer: "« Fijemos primero el significado exacto de la palabra antes de extraer conclusiones indebidas. »",
        icon: "🔀"
      },
      {
        id: "argument-de-possibilite",
        num: 8,
        name: "El Argumento de Posibilidad",
        shortDef: "Transformar « podría ser falso » en « es necesariamente falso ».",
        definition: "Convertir una simple posibilidad teórica de error en una certeza de falsedad sin aportar ninguna prueba concreta.",
        generalExample: "« Un testigo puede mentir. Por lo tanto su testimonio es forzosamente falso. » (Falso: obliga a verificar, no a rechazar a priori).",
        quranicApplication: "« Una cadena de transmisión puede haber sido inventada. Por lo tanto ningún isnâd demuestra nada. »\nLa posibilidad teórica de invención es precisamente lo que llevó a los sabios a examinar cada eslabón, no a descartarlo todo en bloque.",
        questionToAsk: "« ¿Has demostrado que ocurrió una falsificación en este caso, o solo que teóricamente pudo haber ocurrido ? »",
        shortAnswer: "« Una posibilidad teórica abstracta no constituye una prueba demostrativa. »",
        icon: "🎲"
      },
      {
        id: "deplacement-charge-preuve",
        num: 9,
        name: "El Desplazamiento de la Carga de la Prueba",
        shortDef: "Afirmar algo sin demostrarlo y exigir que el oponente demuestre lo contrario.",
        definition: "Quien formula una afirmación categórica tiene la obligación de fundamentarla. La falacia consiste en afirmar algo y exigir que el interlocutor demuestre lo contrario.",
        generalExample: "« Existe una civilización secreta bajo el suelo de Marte. Pruébame que es falso. »",
        quranicApplication: "« Ninguna tradición profética es lo bastante fiable como para constituir una prueba religiosa. »\nEs una afirmación universal que abarca miles de narraciones: quien sostiene tal juicio global debe aportar la demostración metódica.",
        questionToAsk: "« ¿Quién está formulando aquí la afirmación general que requiere demostración ? »",
        shortAnswer: "« Quien afirma categóricamente que nada es fiable debe demostrar esa afirmación general. »",
        icon: "⚖️"
      },
      {
        id: "appel-emotion",
        num: 10,
        name: "La Apelación a la Emoción y al Ridículo",
        shortDef: "Sustituir el análisis racional por el escándalo, la burla o la indignación.",
        definition: "Reemplazar el examen riguroso de los argumentos por la risa, el asco, la indignación o la burla efectista.",
        generalExample: "Burlarse escandalizado de una fórmula científica compleja en vez de analizar sus demostraciones.",
        quranicApplication: "« ¡¿Acaso creéis en el hadiz de la mosca ?! », etc.\nUna reacción visceral o burlona no responde a las preguntas fundamentales: ¿Cuál es el texto exacto? ¿Cuál es su grado de autenticidad? ¿Cuál es el contexto y su sentido entre los especialistas?",
        questionToAsk: "« ¿Cuál es tu prueba objetiva, más allá de que este relato te sorprenda o te cause risa ? »",
        shortAnswer: "« El ridículo y la emoción no sustituyen a una demostración científica. »",
        icon: "🎭"
      }
    ],
    reflexQuestions: {
      title: "LOS REFLEJOS CRÍTICOS QUE SE DEBEN ADQUIRIR",
      subtitle: "4 preguntas sistemáticas ante cualquier argumento",
      summaryNotice: "Estas cuatro preguntas bastan para desarticular la gran mayoría de los razonamientos frágiles.",
      questions: [
        {
          num: 1,
          title: "1. La Premisa",
          desc: "¿Qué es lo que realmente se ha demostrado? No permitas que la conclusión se cuele disfrazada en la premisa inicial."
        },
        {
          num: 2,
          title: "2. El Vínculo Lógico",
          desc: "¿La conclusión se desprende verdaderamente de la premisa formulada, o falta un paso lógico indispensable?"
        },
        {
          num: 3,
          title: "3. El Expediente Completo",
          desc: "¿Se han tenido en cuenta todas las pruebas y versículos pertinentes, o solo los que convienen a la conclusión?"
        },
        {
          num: 4,
          title: "4. El Mismo Estándar",
          desc: "¿Se aplica el mismo criterio riguroso a ambas partes, o cambia convenientemente según el resultado deseado?"
        }
      ]
    },
    quiz: {
      title: "TEST RÁPIDO : IDENTIFIQUE LA FALACIA",
      subtitle: "Identifique qué falacia se comete en cada una de las siguientes afirmaciones :",
      items: [
        {
          id: 1,
          statement: "« Algunos hadices fueron inventados. Por lo tanto no se puede confiar en ningún hadiz. »",
          answerId: "generalisation-abusive",
          answerName: "Generalización abusiva",
          explanation: "Pasar de unos casos particulares falsificados a la invalidez de toda una categoría es una generalización abusiva."
        },
        {
          id: 2,
          statement: "« O bien sigues a Allah, o bien sigues a Muhammad ﷺ. »",
          answerId: "fausse-dichotomie",
          answerName: "Falsa dicotomía",
          explanation: "Estas dos obediencias no se oponen : obedecer al Mensajero es un mandato explícito de Allah en el Corán."
        },
        {
          id: 3,
          statement: "« El Corán es perfecto y completo, por lo tanto toda explicación profética es superflua. »",
          answerId: "non-sequitur",
          answerName: "Non sequitur",
          explanation: "La perfección del texto divino no implica que excluya la autoridad explicativa que él mismo instituye formalmente."
        },
        {
          id: 4,
          statement: "« ¿En qué ḥadīth después de este creerán? Por lo tanto Al-Bujari está prohibido por el Corán. »",
          answerId: "equivoque-lexicale",
          answerName: "Equívoco léxico",
          explanation: "La palabra ḥadīth significa aquí lingüísticamente 'discurso o mensaje' y no la acepción técnica de recopilación de tradiciones."
        },
        {
          id: 5,
          statement: "« Los hadices son demasiado tardíos para ser fiables, pero el relato sobre la edad de 'Â'ishah رضي الله عنها es una prueba histórica indiscutible. »",
          answerId: "double-standard",
          answerName: "Doble rasero (Doble estándar)",
          explanation: "El criterio de prueba se relaja cuando el relato sirve para una polémica y se endurece cuando establece una norma."
        },
        {
          id: 6,
          statement: "« Una cadena de transmisión puede ser inventada. Por lo tanto las cadenas de transmisión no demuestran nada. »",
          answerId: "argument-de-possibilite",
          answerName: "Argumento de posibilidad",
          explanation: "Transformar una posibilidad teórica abstracta en una certeza de falsedad es la falacia de posibilidad."
        }
      ]
    },
    conclusion: {
      title: "RECORDATORIO ESENCIAL : LA LÓGICA ANTES DEL ESLOGAN",
      mainText: "Un argumento puede citar un versículo auténtico, un hadiz verídico o datos exactos y, aun así, desembocar en una conclusión errónea si el razonamiento que une esos elementos es defectuoso.",
      slogan1: "NO PREGUNTES SOLAMENTE : « ¿CUÁL ES LA PRUEBA ? »",
      slogan2: "PREGUNTA TAMBIÉN : « ¿QUÉ ES LO QUE PRUEBA REALMENTE ? »"
    }
  }
};

module.exports = esData;
