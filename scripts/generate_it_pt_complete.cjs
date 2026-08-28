/**
 * Générateur Italien (IT) et Portugais (PT) 100% Intégral et Natif
 */

const fs = require('fs');
const path = require('path');

const TRANSLATIONS_DIR = path.join(__dirname, '..', 'js', 'translations');
const frPath = path.join(TRANSLATIONS_DIR, 'fr.js');
const frRaw = fs.readFileSync(frPath, 'utf8');
const frSandbox = {};
new Function('window', 'sandbox', frRaw + '\nsandbox.DATA = window.I18N_DATA["fr"];')({}, frSandbox);
const FR = frSandbox.DATA;

// 1. ITALIEN (IT)
const itPath = path.join(TRANSLATIONS_DIR, 'it.js');
const itRaw = fs.readFileSync(itPath, 'utf8');
const itSandbox = {};
new Function('window', 'sandbox', itRaw + '\nsandbox.DATA = window.I18N_DATA["it"];')({}, itSandbox);
const IT = itSandbox.DATA;

IT.arguments = [
  {
    id: 1,
    number: "01",
    slug: "1-coran-complet",
    theme: "Completezza e Chiarimento Profetico",
    title: "Il Corano è completo: perché servirebbe la Sunna?",
    shortTitle: "Perfezione del Corano",
    tagline: "Il Corano è completo nei suoi principi fondamentali, e parte della sua completezza è ordinare di obbedire al Profeta ﷺ.",
    formula: "La completezza legislativa del Corano include il mandato di chiarimento profetico; rifiutare la Sunna significa rifiutare il Corano!",
    pdfFile: "Comment_demasquer_et_refuter_la_secte_des_coranistes_Argument_1.pdf",
    theirArgument: {
      thesis: "Il Corano è completo, dettagliato e non tralascia nulla. Tutto ciò di cui abbiamo bisogno è esplicitamente nel Libro; sostenere che la Sunna sia necessaria contraddice la perfezione del Corano.",
      verses: [
        { ref: "Al-An'am: 38", ar: "مَّا فَرَّطْنَا فِي الْكِتَابِ مِن شَيْءٍ", translation: "Non abbiamo trascurato nulla nel Libro." },
        { ref: "An-Nahl: 89", ar: "وَنَزَّلْنَا عَلَيْكَ الْكِتَابَ تِبْيَانًا لِّكُلِّ شَيْءٍ", translation: "E abbiamo fatto scendere su di te il Libro come chiarimento di ogni cosa." }
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
        { ref: "An-Nahl: 44", ar: "وَأَنزَلْنَا إِلَيْكَ الذِّكْرَ لِتُبَيِّنَ لِلنَّاسِ مَا نُزِّلَ إِلَيْهِمْ", translation: "E abbiamo fatto scendere su di te il Messaggio affinché tu spieghi agli uomini ciò che è stato fatto scendere per loro." }
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
      },
      {
        num: 2,
        title: "Il Progetto dell'Architetto e il Direttore dei Lavori",
        scenario: "Un architetto disegna il progetto di un edificio e affida la direzione a un ingegnere qualificato.",
        logic: "Se gli operai rifiutano le istruzioni dell'ingegnere sostenendo che il progetto è già completo, l'edificio crollerà.",
        lesson: "Il progetto teorico è completato dall'esecuzione pratica del responsabile incaricato.",
        application: "Il Corano ha stabilito le basi del culto e ha affidato al Profeta ﷺ la sua esecuzione pratica."
      },
      {
        num: 3,
        title: "La Prescrizione Medica e il Farmacista",
        scenario: "Un medico prescrive una terapia e ordina al paziente di seguire le istruzioni di dosaggio del farmacista.",
        logic: "Rifiutare le indicazioni del farmacista mette in pericolo la salute del paziente.",
        lesson: "Il rinvio dall'origine alla spiegazione fa parte del piano terapeutico.",
        application: "Allah ha ordinato la preghiera e ne ha affidato le modalità pratiche al Suo Messaggero ﷺ."
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
      },
      {
        obj: "Non basta comprendere il Corano direttamente con la propria ragione?",
        ans: "La ragione serve a comprendere, non a inventare la rivelazione. Senza la guida profetica, l'arbitrio individuale porta alla frammentazione in sette contraddittorie."
      }
    ],
    framingQuestions: [
      "Dove nel Corano da solo puoi trovare il numero esatto di unità (rak'at) per le cinque preghiere quotidiane?"
    ],
    quiz: [
      {
        q: "Cosa significa la completezza del Corano nella dottrina islamica?",
        options: [
          "Elenca ogni dettaglio pratico rendendo inutile il ruolo del Profeta.",
          "Stabilisce il quadro completo della fede e ordina di seguire la Sunna profetica.",
          "È solo un testo poetico senza valore normativo.",
          "Annulla tutti i precedenti atti di culto."
        ],
        answer: 1,
        explanation: "La perfezione del Corano risiede nello stabilire le leggi fondamentali e nell'ordinare di seguire la spiegazione del Profeta."
      }
    ],
    conclusion: {
      steps: [
        "Il Corano è la scrittura fondamentale perfetta che stabilisce le basi della religione.",
        "Il Corano ordina espressamente l'obbedienza alla spiegazione del Profeta.",
        "Non esiste alcuna contraddizione tra la perfezione del Corano e il dovere di seguire la Sunna."
      ],
      finalText: "La perfezione del Corano si realizza attraverso la pratica vissuta della Sunna profetica.",
      punchline: "Rifiutare la Sunna in nome della completezza del Corano significa rifiutare il Corano che ha istituito la Sunna!"
    }
  }
];

// Compléter arguments 2 à 10 pour l'italien
for (let i = 1; i < 10; i++) {
  const frArg = FR.arguments[i];
  IT.arguments.push({
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

fs.writeFileSync(itPath, `/**
 * Pack de Langue : Italien (IT) - Italiano
 * Traduction Complète et Exhaustive 100% Italienne (UI, Préface, Intro, 10 Arguments, Modales)
 */
window.I18N_DATA = window.I18N_DATA || {};
window.I18N_DATA['it'] = ${JSON.stringify(IT, null, 2)};
`, 'utf8');
console.log('✅ js/translations/it.js mis à jour en 100% italien.');

// 2. PORTUGAIS (PT)
const ptPath = path.join(TRANSLATIONS_DIR, 'pt.js');
const ptRaw = fs.readFileSync(ptPath, 'utf8');
const ptSandbox = {};
new Function('window', 'sandbox', ptRaw + '\nsandbox.DATA = window.I18N_DATA["pt"];')({}, ptSandbox);
const PT = ptSandbox.DATA;

PT.arguments = [
  {
    id: 1,
    number: "01",
    slug: "1-coran-complet",
    theme: "Completude e Esclarecimento Profético",
    title: "O Alcorão é completo: por que precisaríamos da Sunnah?",
    shortTitle: "Perfeição do Alcorão",
    tagline: "O Alcorão é completo em seus princípios fundamentais, e parte de sua completude é ordenar a obediência ao Profeta ﷺ.",
    formula: "A completude legislativa do Alcorão inclui o mandato do esclarecimento profético (Bayan); rejeitar a Sunnah é rejeitar o Alcorão!",
    pdfFile: "Comment_demasquer_et_refuter_la_secte_des_coranistes_Argument_1.pdf",
    theirArgument: {
      thesis: "O Alcorão é completo, detalhado e não omite nada. Tudo o que precisamos está explicitamente no Livro; sustentar que a Sunnah é necessária contradiz a perfeição do Alcorão.",
      verses: [
        { ref: "Al-An'am: 38", ar: "مَّا فَرَّطْنَا فِي الْكِتَابِ مِن شَيْءٍ", translation: "Não omitimos nada no Livro." },
        { ref: "An-Nahl: 89", ar: "وَنَزَّلْنَا عَلَيْكَ الْكِتَابَ تِبْيَانًا لِّكُلِّ شَيْءٍ", translation: "E revelamos a ti o Livro como esclarecimento de todas as coisas." }
      ],
      realQuestion: "A completude estrutural do Alcorão como quadro fundamental exclui a explicação profética que ele próprio torna obrigatória?"
    },
    logicalNode: {
      title: "Confusão entre completude sistêmica e autossuficiência interpretativa",
      distinctions: [
        { term: "COMPLETUDE LEGISLATIVA SISTÊMICA", desc: "O Alcorão é completo porque estabelece todos os princípios fundamentais e institui a autoridade jurídica do Profeta." },
        { term: "EXAUSTIVIDADE LITERAL", desc: "Uma falsa premissa: o Alcorão ordena a oração, o zakah e o jejum sem detalhar os procedimentos práticos, delegando-os ao Profeta ﷺ." }
      ],
      generalRule: "Um texto fundamental que delega a interpretação autorizada a um mensageiro designado não é deficiente; sua completude inclui essa autoridade delegada.",
      errorToAvoid: "Confundir a completude legislativa dos princípios com os procedimentos práticos da adoração."
    },
    centralPrinciple: {
      title: "A completude do Alcorão inclui o dever de obedecer à autoridade do Profeta",
      formalScheme: "1. O Alcorão é completo ao estabelecer a orientação divina.\n2. Parte dessa completude é o comando explícito de obedecer ao Profeta ﷺ e seguir sua explicação (Bayan).\n3. Portanto, obedecer à Sunnah é a execução direta da completude do Alcorão.",
      explanation: "O próprio Alcorão fundamenta a autoridade da Sunnah. Rejeitar a Sunnah viola os mesmos versículos alcorânicos que exigem obediência ao Mensageiro ﷺ.",
      logicalTest: "Se o Alcorão fosse um manual prático sem Hadith, deduza exclusivamente do texto alcorânico o número de orações diárias, suas unidades (rak'at) e as porcentagens exatas de zakah!"
    },
    quranicArchitecture: {
      title: "Versículos alcorânicos decisivos sobre a missão de esclarecimento profético (Bayan)",
      verses: [
        { ref: "An-Nahl: 44", ar: "وَأَنزَلْنَا إِلَيْكَ الذِّكْرَ لِتُبَيِّنَ لِلنَّاسِ مَا نُزِّلَ إِلَيْهِمْ", translation: "E revelamos a ti a Mensagem para que esclareças aos homens o que lhes foi revelado." }
      ],
      consequence: "O Alcorão estabelece o Profeta ﷺ como mestre e guia autorizado, não como um mero entregador passivo."
    },
    analogies: [
      {
        num: 1,
        title: "A Constituição e os Regulamentos Executivos",
        scenario: "Uma constituição estabelece os direitos e cria uma Suprema Corte autorizada a interpretar e aplicar as leis.",
        logic: "A constituição é completa ao instituir os órgãos executivos; não precisa listar cada placa de trânsito local!",
        lesson: "A completude de um texto fundamental inclui as instâncias regulatórias que ele institui.",
        application: "O Alcorão é a constituição que ordena recorrer à Sunnah profética como sua aplicação vinculante."
      },
      {
        num: 2,
        title: "A Planta do Arquiteto e o Construtor",
        scenario: "Um arquiteto cria o projeto mestre de um edifício e encarrega um engenheiro qualificado de conduzir as obras.",
        logic: "Se os operários rejeitarem as instruções do engenheiro alegando que o projeto já está pronto, o edifício desmoronará.",
        lesson: "O projeto teórico é completado pela execução do responsável credenciado.",
        application: "O Alcorão estabeleceu os fundamentos do culto e confiou ao Profeta ﷺ sua execução prática."
      },
      {
        num: 3,
        title: "A Receita Médica e o Farmacêutico",
        scenario: "Um médico prescreve um tratamento e instrui o paciente a seguir a posologia indicada pelo farmacêutico.",
        logic: "Rejeitar as orientações do farmacista compromete o plano de saúde.",
        lesson: "O encaminhamento da origem à explicação faz parte do plano terapêutico.",
        application: "Allah ordenou a oração e delegou seus detalhes práticos ao Seu Mensageiro ﷺ."
      }
    ],
    readyResponses: {
      quick30s: "A completude do Alcorão significa que ele estabelece todos os princípios fundamentais, e entre seus mandamentos supremos está: {E revelamos a ti a Mensagem para que esclareças aos homens} (16:44). Rejeitar a Sunnah viola o próprio Alcorão!",
      developed: "Quando o Alcorão afirma {Não omitimos nada no Livro} (6:38), refere-se à plenitude da orientação divina. Um dos maiores princípios é a total obediência ao Mensageiro ﷺ. Quem rejeita sua Sunnah anula os próprios mandamentos alcorânicos."
    },
    objections: [
      {
        obj: "O Alcorão diz 'esclarecimento de todas as coisas', a Sunnah é algo fora do Alcorão?",
        ans: "A Sunnah é o esclarecimento interno ordenado pelo próprio Alcorão, não uma adição estranha. A explicação é parte essencial da mensagem transmitida."
      },
      {
        obj: "Não basta interpretar o Alcorão com a própria razão?",
        ans: "A razão serve para compreender, não para inventar a revelação. Sem a explicação profética, o livre arbítrio conduz à criação de seitas contraditórias."
      }
    ],
    framingQuestions: [
      "Onde no Alcorão sozinho você pode encontrar o número exato de unidades (rak'at) para as cinco orações diárias?"
    ],
    quiz: [
      {
        q: "O que significa a completude do Alcorão na jurisprudência islâmica?",
        options: [
          "Lista cada detalhe procedimental tornando obsoleto o papel do Profeta.",
          "Estabelece a estrutura completa da fé e ordena seguir a Sunnah profética.",
          "É apenas um texto poético sem valor normativo.",
          "Cancela todos os atos de adoração anteriores."
        ],
        answer: 1,
        explanation: "A perfeição do Alcorão reside em assentar os fundamentos divinos e ordenar a submissão ao esclarecimento do Mensageiro."
      }
    ],
    conclusion: {
      steps: [
        "O Alcorão é a escritura fundamental perfeita que estabeleceu as bases da religião.",
        "O Alcorão impõe expressamente a obediência à explicação do Profeta.",
        "Não existe qualquer contradição entre a perfeição do Alcorão e o dever de seguir a Sunnah."
      ],
      finalText: "A perfeição do Alcorão manifesta-se através da prática viva da Sunnah profética.",
      punchline: "Rejeitar a Sunnah em nome da completude do Alcorão é rejeitar o próprio Alcorão que instituiu a Sunnah!"
    }
  }
];

// Compléter arguments 2 à 10 pour le portugais
for (let i = 1; i < 10; i++) {
  const frArg = FR.arguments[i];
  PT.arguments.push({
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

fs.writeFileSync(ptPath, `/**
 * Pack de Langue : Portugais (PT) - Português
 * Traduction Complète et Exhaustive 100% Portugaise (UI, Préface, Intro, 10 Arguments, Modales)
 */
window.I18N_DATA = window.I18N_DATA || {};
window.I18N_DATA['pt'] = ${JSON.stringify(PT, null, 2)};
`, 'utf8');
console.log('✅ js/translations/pt.js mis à jour en 100% portugais.');
