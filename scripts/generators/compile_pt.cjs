/**
 * COMPILATEUR PORTUGAIS INTÉGRAL (100% NATIVE PORTUGUÊS)
 */

const fs = require('fs');
const path = require('path');

const TRANSLATIONS_DIR = path.join(__dirname, '..', '..', 'js', 'translations');
const frRaw = fs.readFileSync(path.join(TRANSLATIONS_DIR, 'fr.js'), 'utf8');
const frSandbox = {};
new Function('window', 'sandbox', frRaw + `\nsandbox.DATA = window.I18N_DATA["fr"];`)({}, frSandbox);
const frPack = frSandbox.DATA;

const ptData = {
  code: "pt",
  name: "Portugais",
  native: "Português",
  flagSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" class="flag-icon"><rect width="240" height="400" fill="#006600"/><rect width="360" height="400" x="240" fill="#ff0000"/><circle cx="240" cy="200" r="80" fill="#ffff00"/></svg>`,
  dir: "ltr",
  fontFamily: "var(--font-main)",
  ui: {
    brandBadge: "MANUAL PRÁTICO",
    brandTitle: "REFUTAÇÃO DO CORANISMO",
    brandSubtitle: "Como desmascarar e refutar a seita dos coranistas",
    searchBtn: "Pesquisar",
    searchPlaceholder: "Pesquisar por tema, versículo, objeção, analogia...",
    searchModalTitle: "Pesquisa rápida no manual",
    searchNoResults: "Nenhum resultado encontrado para esta pesquisa.",
    searchShortcutHint: "Pressione ESC para fechar",
    topbarContact: "Contacto",
    topbarLegal: "Licença e Partilha",
    topbarBarbahari: "Al-Barbahârî",
    sidebarTitle: "📚 Índice Geral",
    sidebarCount: "12 temas",
    sidebarHome: "🏠 Início / Hub",
    sidebarContact: "✉️ Contactar o Autor",
    heroTag1: "📖 Manual Prático de Refutação",
    heroTag2: "🌿 Difusão Pedagógica Aberta",
    heroTitleMain: "Refutação",
    heroTitleSpan: "do Coranismo",
    heroAuthor: "Por Salah Eddine Ahmed (Abou Soulaymane)",
    heroDesc: "Desmonte passo a passo as falácias do coranismo através de uma argumentação lógica rigorosa, exemplos quotidianos, versículos decisivos e respostas prontas em 30 segundos.",
    btnStartArg1: "Começar com o Argumento 1",
    btnSearchModal: "Pesquisar no manual",
    sommaireTitle: "Os 10 Grandes Argumentos Analisados",
    sommaireBadge: "10 Fichas Prontas a Usar",
    cardAdverseThesisPrefix: "Tese dos coranistas:",
    btnReadCard: "Consultar a ficha",
    btnDownloadPdf: "Descarregar o fascículo em PDF original",
    btnPrintCard: "Imprimir / Guardar em PDF",
    methodTag: "METODOLOGIA DE DEBATE",
    methodTitle: "O Método dos 3 Passos Inevitáveis",
    methodStep1Title: "1. Desarmar a Falácia",
    methodStep1Desc: "Identifique se o oponente utiliza uma falsa dicotomia, uma generalização abusiva ou uma inversão do ónus da prova.",
    methodStep2Title: "2. A Analogia Quotidiana",
    methodStep2Desc: "Utilize uma situação da vida diária (leis, medicina, plantas) para evidenciar o absurdo lógico do seu raciocínio.",
    methodStep3Title: "3. A Consequência Absurda",
    methodStep3Desc: "Mostre a que caos teológico e prático conduz a sua tese se aplicada com total coerência.",
    quoteBoxText: "«Rejeitar a autoridade que o próprio texto designa em nome da autossuficiência do texto é transformar a suficiência num princípio que o texto jamais formulou.»",
    quoteBoxAuthor: "— Salah Eddine Ahmed (Abou Soulaymane)",
    sec1Header: "1. ENQUADRAMENTO DOUTRINÁRIO E CONTEXTO",
    sec2Header: "2. A TESE ADVERSA E OS SEUS TEXTOS",
    sec2ThesisLabel: "Tese sustentada pelos coranistas :",
    sec2VersesLabel: "Versículos que citam (fora de contexto) :",
    sec2RealQuestionLabel: "A verdadeira questão de fundo :",
    sec3Header: "3. O NÓ LÓGICO E AS DISTINÇÕES-CHAVE",
    sec3GeneralRuleLabel: "Regra geral de raciocínio :",
    sec3ErrorLabel: "O erro lógico a evitar :",
    sec4Header: "4. O PRINCÍPIO CENTRAL",
    sec4FormalSchemeLabel: "Esquema formal de demonstração :",
    sec4ExplanationLabel: "Explicação doutrinária :",
    sec4TestLabel: "Teste lógico decisivo :",
    sec5Header: "5. ARQUITETURA CORÂNICA",
    sec5ConsequenceLabel: "Consequência doutrinária inelutável :",
    sec6Header: "6. ANALOGIAS PEDAGÓGICAS QUOTIDIANAS",
    sec6ScenarioLabel: "Situação concreta :",
    sec6LogicBoxLabel: "Paralelismo lógico :",
    sec6LessonLabel: "Lição a retirar :",
    sec7Header: "7. RESPOSTAS PRONTAS PARA O DIÁLOGO",
    sec7QuickResponseLabel: "⚡ Resposta em 30 segundos (clara e contundente) :",
    sec7DevelopedResponseLabel: "🗣️ Resposta desenvolvida (para aprofundar) :",
    sec8Header: "8. OBJEÇÕES CLÁSSICAS E RESPOSTAS",
    sec8DirectQuestionsLabel: "Perguntas de enquadramento direto :",
    sec9Header: "9. CONCLUSÃO EM CADEIA LÓGICA",
    quizTitle: "8. AVALIE A SUA COMPREENSÃO",
    quizBadge: "Questionário interativo",
    btnCheckAnswer: "Verificar resposta",
    btnNextQuestion: "Próxima pergunta ➔",
    btnRestartQuiz: "Reiniciar questionário",
    quizFeedbackCorrect: "✅ Exato! Excelente dedução.",
    quizFeedbackIncorrect: "❌ Resposta incorreta. Releia a explicação abaixo :",
    portalWarningBadge: "AVISO DOS PRIMEIROS SÁBIOS SOBRE QUEM REJEITA A TRANSMISSÃO",
    portalTitle: "Palavras do Imam Al-Barbahârî (رحمه الله)",
    portalQuoteTransLabel: "Tradução do sentido :",
    portalQuoteText: "Se ouvires um homem a quem se cita uma tradição (um relato transmitido) rejeitá-la dizendo: \"Deixa isso e traz-nos apenas o Alcorão\", não tenhas qualquer dúvida de que é um homem impregnado de heresia. Levanta-te da sua assembleia e afasta-te dele!",
    portalAuthorBadge: "✍️ Imam Al-Barbahârî (m. 329 H)",
    portalSourceRef: "Fonte : Sharḥ As-Sunnah (Ponto 135)",
    portalEnterBtn: "ACEDER AO MANUAL DE REFUTAÇÃO",
    portalDisclaimer: "Como desmascarar e refutar a seita dos coranistas • Por Salah Eddine Ahmed (Abou Soulaymane) • Uso pedagógico livre citando a fonte",
    argBadgeGiant: "ARGUMENTO",
    btnDownloadFascicule: "Descarregar o fascículo original (PDF)",
    btnOpenPrint: "Imprimir / Guardar em PDF",
    tocSummary: "Índice da ficha :",
    tocCadrage: "1. Enquadramento",
    tocAdverse: "2. Tese Adversa",
    tocNoeud: "3. Nó Lógico",
    tocPrincipe: "4. Princípio Central",
    tocArchi: "5. Arquitetura Corânica",
    tocAnalogies: "6. Analogias",
    tocReponses: "7. Respostas Prontas",
    tocObjections: "8. Objeções",
    tocConclusion: "9. Conclusão",
    tocQuiz: "10. Questionário",
    navPrevArg: "Argumento anterior",
    navNextArg: "Argumento seguinte",
    navBackSummary: "Voltar ao índice",
    navEndManual: "Fim do Manual",
    contactModalTitle: "Contactar o Autor",
    contactAuthorHeader: "Autor da Obra",
    authorName: "Salah Eddine Ahmed (Abou Soulaymane)",
    contactAuthorBio: "Investigador e educador em ciências islâmicas, dedicado à defesa metódica da Sunnah profética e à refutação pedagógica dos desvios doutrinários contemporâneos.",
    contactBookTitleLabel: "Título da obra de referência :",
    contactBookTitleValue: "Comment démasquer et réfuter la secte des coranistes — Méthode, arguments, objections et réponses.",
    contactEmailNotice: "Para intercâmbio doutrinário, sugestões pedagógicas, palestras ou traduções :",
    legalModalTitle: "⚖️ Condições de Partilha, Autor e Privacidade",
    legalSharingHeader: "Condições de Difusão e Partilha Pedagógica",
    legalSharingMain: "Difusão e Partilha Pedagógica Aberta",
    legalSharingP1: "Este conteúdo pode ser partilhado gratuitamente e reproduzido para fins pessoais, pedagógicos e não comerciais, com a condição indispensável de conservar a autoria e a fonte.",
    legalAllowedTitle: "✅ Usos expressamente autorizados :",
    legalAllowedBullet1: "Download, impressão, leitura e difusão gratuita das fichas de estudo.",
    legalAllowedBullet2: "Utilização em aulas, círculos de estudo, debates e redes sociais.",
    legalAllowedBullet3: "Fica estritamente proibida qualquer exploração comercial ou alteração desvirtuadora do texto sem autorização prévia.",
    legalPrivacyHeader: "Dados Técnicos e Privacidade",
    legalPrivacyMain: "Política de Privacidade Transparente e Conforme",
    legalPrivacyP1: "O sítio não exige criação de conta e não recolhe deliberadamente quaisquer dados pessoais através de formulários. Os dados técnicos tratados pelo servidor regem-se pelas normas europeias de privacidade.",
    legalPrivacyBullet1: "Sem cookies publicitários de terceiros : Zero pixels de rastreamento comercial.",
    legalPrivacyBullet2: "Tipos de letra e recursos : Carregamento seguro de Google Fonts (Inter, Outfit, Amiri).",
    legalCreditsHeader: "Detalhes do Livro :",
    legalCreditsBookTitle: "Como desmascarar e refutar a seita dos coranistas — Método, argumentos, objeções e respostas",
    footerSubtitle: "10 grandes argumentos examinados e refutados metodicamente",
    footerBtnLegal: "⚖️ Licença, Partilha e Privacidade",
    footerBtnContact: "✉️ Contactar o Autor",
    footerBtnPortal: "📜 Palavras de Al-Barbahârî",
    footerContactLabel: "Contacto :",
    btnShare: "Partilhar",
    btnCopySection: "Copiar esta secção",
    btnCopy: "Copiar",
    copied: "Copiado!",
    shareModalTitle: "📤 Partilhar esta ficha",
    shareModalDesc: "Partilhe este argumento para o estudo e a defesa da Sunnah :",
    shareCardTitle: "Partilhar esta refutação",
    shareCardDesc: "Divulgue esta ficha para defender a Sunnah no WhatsApp, Telegram ou redes sociais.",
    toastSectionCopied: "✅ Secção copiada para a área de transferência!",
    toastLinkCopied: "✅ Ligação copiada para a área de transferência!",
    navFallacies: "Caixa de ferramentas — Reconhecer falácias antes de debater",
    fallaciesTitle: "CAIXA DE FERRAMENTAS",
    fallaciesBadgeTitle: "FALÁCIAS DETETADAS NESTE ARGUMENTO :",
    viewFallacyDetail: "Ver análise detalhada ▼",
    hideFallacyDetail: "Ocultar análise ▲",
    btnOpenToolbox: "Consultar na Caixa de ferramentas",
    footerVisitsLabel: "Visitas totais :",
    footerVisitsPrivacy: "100% Anónimo • RGPD",
    footerVisitsTooltip: "Contador de visitas anónimo e respeitador da privacidade (RGPD - 0 cookies)",
    navPreface: "Prefácio do Autor",
    navIntro: "Quem são os coranistas?"
  },
  preface: {
    badge: "ABERTURA DO LIVRO",
    title: "PREFÁCIO DO AUTOR",
    subtitle: "Por que razão este manual metódico de refutação?",
    introTag: "ANTES DE COMEÇAR",
    basmala: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ (Em Nome de Allah, o Clemente, o Misericordioso)",
    sections: [
      {
        type: "adverse",
        header: "POR QUE ESTE LIVRO?",
        title: "Uma constatação pessoal e metodológica",
        paragraphs: [
          "Esta obra nasceu de uma constatação pessoal que me entristeceu profundamente.",
          "Ao longo dos anos, vi conhecidos caírem no que hoje se designa por 'coranismo' (apenas o Alcorão): uma corrente que alega regressar ao Alcorão, mas que na prática desmantela e rejeita a autoridade normativa da Sunnah profética.",
          "Com frequência, isto não provém de uma vontade consciente de rejeitar o Profeta ﷺ. Começa com uma carência de conhecimentos básicos: em ciências do Hadith, ciências corânicas, metodologia de transmissão, linguística árabe e história dos textos."
        ]
      },
      {
        type: "retenir",
        header: "QUANDO AS DÚVIDAS SE TORNAM DOGMAS",
        title: "Da perplexidade ao desvio metodológico",
        paragraphs: [
          "Depois surgem as ambiguidades polémicas: a uma pessoa é apresentado um relato descontextualizado, um texto cujo grau de autenticidade desconhece, uma tradução deformada ou uma controvérsia emocional concebida para chocar.",
          "Apresentam-se-lhe temas como a idade de 'Â'ishah (que Allah esteja satisfeito com ela), certos relatos médicos, feitiçaria, disposições jurídicas ou a viagem noturna (Al-Isrâ' wal-Mi'râj).",
          "Sem ferramentas de análise crítica, a dúvida instala-se e torna-se um dogma completo:",
          "«Este hadith causa-me estranheza» ➔ «Talvez os hadiths não sejam fiáveis» ➔ «Talvez a Sunnah seja supérflua» ➔ «Apenas o Alcorão é suficiente».",
          "Acabam por selecionar versículos isolados, forçar o sentido das palavras e redefinir 'Obedecei ao Mensageiro' para despojar o Profeta ﷺ de toda a autoridade real."
        ]
      },
      {
        type: "analogie",
        header: "UMA IMENSA TRADIÇÃO DE TRANSMISSÃO",
        title: "Uma ciência de verificação sem paralelo",
        paragraphs: [
          "A Sunnah não nos chegou porque certos indivíduos decidiram séculos mais tarde encher livros com relatos ao acaso! Por trás do corpus do Hadith encontra-se o sistema de crítica biográfica e de cadeias de transmissão (Isnâd e Rijâl) mais rigoroso da história humana.",
          "Gerações de sábios examinaram minuciosamente os transmissores: a sua retidão moral, a sua memória, os seus mestres, os seus contemporâneos, viajando durante meses inteiros para verificar uma única frase.",
          "Descartar este colossal património científico dizendo 'são apenas homens a contar histórias' não é espírito crítico: é uma ignorância total das ciências do Hadith."
        ],
        distinctions: [
          {
            term: "CRÍTICA DOS TRANSMISSORES (RIJÂL)",
            desc: "Integridade, precisão, encontros históricos e condições exatas de receção."
          },
          {
            term: "CRÍTICA DOS TEXTOS (MUTÛN)",
            desc: "Confrontação de variantes, deteção de defeitos ocultos ('Ilal) e distinção entre o autêntico e o forjado."
          }
        ]
      },
      {
        type: "cadrage",
        header: "E COMO NOS CHEGOU O ALCORÃO?",
        title: "A mesma cadeia humana de transmissão",
        paragraphs: [
          "Uma pergunta crucial que todo o coranista deve enfrentar: Através de quem te chegou o Alcorão?",
          "O exemplar físico do Alcorão (o Mushaf) não te foi entregue diretamente pelo anjo Gabriel. Chegou-nos através dos Companheiros, dos Sucessores, dos leitores e de uma transmissão geracional ininterrupta.",
          "A leitura de Hafs transmitida de 'Âsim chegou-nos através de cadeias humanas de homens. A questão lógica nunca é 'existem elos humanos?', mas 'qual é o grau de certeza e verificação dessa transmissão?'."
        ]
      },
      {
        type: "retenir",
        header: "UMA RESPONSABILIDADE PESSOAL",
        title: "Por que razão o silêncio já não é uma opção?",
        paragraphs: [
          "Diante da proliferação de discursos sedutores nas redes sociais que desestabilizam jovens crentes desprovidos de bases metodológicas, calar-se torna-se uma falta de responsabilidade.",
          "Este livro não foi concebido para alimentar polémicas estéreis nem para ofender ninguém. Foi estruturado como uma ferramenta pedagógica acessível a todos, com o intuito de apresentar respostas fundamentadas, lógicas e baseadas nas fontes autênticas do Islão.",
          "Peço a Allah que faça deste trabalho um motivo de clareza e benefício sincero para todo aquele que busca a verdade com rigor e honestidade."
        ]
      }
    ]
  },
  intro: {
    badge: "REFERÊNCIAS HISTÓRICAS",
    title: "QUEM SÃO OS CORANISTAS?",
    subtitle: "Origens, fundamentos e anatomia de um desvio doutrinário",
    introTag: "COMPREENDER O FENÓMENO",
    sections: [
      {
        type: "cadrage",
        header: "GÉNESE E CONTEXTO HISTÓRICO",
        title: "Uma heresia moderna com raízes antigas",
        paragraphs: [
          "O 'coranismo' contemporâneo (Ahl al-Qur'ân / Qur'aniyyûn) apresenta-se frequentemente como um movimento moderno, progressista ou reformador. Na realidade, a pretensão de querer prescindir da Sunnah já fora denunciada pelo Profeta ﷺ em termos proféticos explícitos.",
          "O Profeta ﷺ disse: «Aproxima-se o tempo em que um homem saciado, recostado no seu divã, dirá: 'Tende apenas este Alcorão; o que nele encontrardes de lícito, considerai-o lícito, e o que nele encontrardes de ilícito, considerai-o ilícito'. Pois, por certo, o que o Mensageiro de Allah proibiu é como o que Allah proibiu!» (Narrado por Abu Dawud, At-Tirmidhi e Ibn Majah, autêntico).",
          "Historicamente, certas seitas marginais (certas ramificações extremas de mu'tazilitas e carijitas) tentaram rejeitar partes da Sunnah, mas a rejeição total e categórica de todo o corpus do Hadith é um fenómeno moderno surgido no final do século XIX sob a influência da colonização e do complexo de inferioridade intelectual."
        ]
      },
      {
        type: "adverse",
        header: "O MECANISMO PSICOLÓGICO E DOUTRINÁRIO",
        title: "Da dificuldade de compreensão à rejeição deliberada",
        paragraphs: [
          "O método do coranismo assenta numa mecânica psicológica previsível:",
          "1. O choque emocional : Seleciona-se um hadith autêntico complexo e apresenta-se a um público moderno sem contexto nem explicações linguísticas.",
          "2. A generalização abusiva : Da incompreensão de um texto particular, deduz-se falsamente que todos os Hadiths são duvidosos.",
          "3. A falsa alternativa : Coloca-se o dilema artificial: «Preferes seguir a Palavra perfeita de Allah ou palavras de homens compiladas dois séculos depois?»",
          "4. O vazio hermenêutico : Ao rejeitar a Sunnah, o coranista é forçado a inventar do nada o sentido dos versículos, caindo em interpretações fantasiosas onde a oração, o jejum e a peregrinação perdem qualquer realidade histórica."
        ]
      },
      {
        type: "retenir",
        header: "CONSEQUÊNCIAS TEOLÓGICAS INEVITÁVEIS",
        title: "O desmoronamento da prática islâmica",
        paragraphs: [
          "A rejeição da Sunnah não simplifica a religião: destrói-a na sua aplicação prática:",
          "• Impossibilidade de orar : O Alcorão ordena a oração (As-Salât), mas não menciona em lado nenhum quantas unidades (rak'at) compõem a oração do meio-dia ou do entardecer, nem as fórmulas exatas de prostração.",
          "• Impossibilidade de pagar o Zakat : O Alcorão ordena a purificação dos bens, mas as percentagens exatas (o 2,5%) e os limiares mínimos (Nisâb) provêm exclusivamente da Sunnah profética.",
          "• Impossibilidade de realizar o Hajj : Os ritos da peregrinação (número de voltas em redor da Ka'bah, Sa'y entre Safa e Marwa, paragem em 'Arafat) estão detalhados pela prática viva do Profeta ﷺ."
        ]
      },
      {
        type: "analogie",
        header: "A REGRA DE OURO DO DEBATE",
        title: "Obrigar a assumir a coerência da sua tese",
        paragraphs: [
          "Para refutar um coranista com benevolência e firmeza, a regra de ouro consiste em colocá-lo perante as consequências práticas da sua própria posição.",
          "Não se limite a defender os Hadiths: peça-lhe que explique como pratica o Islão no seu quotidiano baseando-se exclusivamente no texto alcorânico.",
          "Verá de imediato como será forçado a recorrer a conjeturas pessoais, a redefinir palavras ou a admitir que depende da prática transmitida de geração em geração... ou seja, da própria Sunnah!"
        ]
      }
    ]
  }
};

// Compile with all 10 arguments in Portuguese
const ptFallaciesToolbox = {
  headerBadge: "GUIA METODOLÓGICO",
  title: "CAIXA DE FERRAMENTAS — RECONHECER AS FALÁCIAS ANTES DE DEBATER",
  subtitle: "Identificar os erros lógicos para não se deixar desviar na discussão",
  introText: "Um argumento pode parecer impressionante à primeira vista, citar um versículo alcorânico autêntico ou incluir factos verdadeiros... e mesmo assim desembocar numa conclusão totalmente errónea se o raciocínio lógico que une esses elementos for defeituoso.",
  goldenRuleTitle: "PRINCÍPIO CRUCIAL :",
  goldenRuleText: "MOSTRAR QUE UM ARGUMENTO É UMA FALÁCIA NÃO PROVA QUE A CONCLUSÃO SEJA FALSA ; DEMONSTRA QUE ESTE ARGUMENTO NÃO A DEMONSTRA.",
  goldenRuleMeaning: "Desmascarar um erro lógico não dispensa o exame do mérito doutrinário; mas protege de aceitar conclusões construídas sobre raciocínios ardilosos.",
  cardMemoBadge: "FICHA MEMO",
  trainingBadge: "TREINO",
  labelDefinition: "Definição :",
  labelGeneralExample: "🌍 Exemplo na vida diária :",
  labelQuranicApp: "🕌 Aplicação ao debate sobre o Coranismo :",
  labelQuestionToAsk: "❓ Pergunta-reflexo a colocar :",
  labelShortAnswer: "⚡ Resposta curta sugerida :",
  items: frPack.fallaciesToolbox.items.map((item, idx) => {
    const names = [
      "A Falsa Dicotomia", "A Generalização Abusiva", "O Espantalho (Homem de Palha)", "O Non Sequitur",
      "O Cherry-Picking", "O Duplo Padrão (Dois Pesos e Duas Medidas)", "O Equívoco Lexical", "O Argumento de Possibilidade",
      "A Inversão do Ónus da Prova", "O Apelo à Emoção e ao Ridículo"
    ];
    return {
      id: item.id,
      num: item.num,
      name: names[idx] || item.name,
      shortDef: [
        "Reduzir artificialmente uma situação complexa a apenas duas opções opostas.",
        "Estender um caso particular ou duvidoso a toda uma categoria geral.",
        "Caricaturar a posição do adversário para a atacar mais facilmente.",
        "A conclusão extraída não decorre logicamente da premissa formulada.",
        "Selecionar apenas as provas favoráveis ignorando todo o resto.",
        "Aplicar um critério rigorosíssimo ao adversário e um frouxo a si mesmo.",
        "Utilizar a mesma palavra com dois significados diferentes sem o explicitar.",
        "Transformar «poderia ser falso» em «é necessariamente falso».",
        "Afirmar algo sem demonstrar e exigir que o oponente prove o contrário.",
        "Substituir a análise racional pelo escândalo, troça ou indignação."
      ][idx],
      definition: [
        "Reduzir artificiosamente uma questão a duas opções incompatíveis, ocultando uma terceira via perfeitamente legítima e coerente.",
        "Extrair uma regra geral definitiva a partir de um número insuficiente de casos particulares ou mal analisados.",
        "Deformar, simplificar excessivamente ou ridicularizar a posição do interlocutor para refutar uma versão enfraquecida que ele jamais defendeu.",
        "Non sequitur significa 'não se segue'. A premissa inicial pode ser verdadeira, mas a conclusão não decorre de modo algum dela.",
        "Citar exclusivamente as passagens favoráveis à própria tese e ocultar voluntariamente os dados que a matizam ou contradizem.",
        "Exigir um nível de prova hipercrítico para os argumentos alheios e aceitar frágeis suposições quando favorecem a própria conclusão.",
        "Empregar o mesmo vocábulo com sentidos distintos ao longo do raciocínio sem assinalar a mudança de definição.",
        "Converter uma simples possibilidade teórica de erro numa certeza de falsidade sem apresentar qualquer prova concreta.",
        "Quem formula uma afirmação categórica tem a obrigação de a fundamentar. A falácia consiste em afirmar algo e exigir que o interlocutor prove o contrário.",
        "Substituir o exame rigoroso dos argumentos pelo riso, nojo, indignação ou troça de efeito."
      ][idx],
      generalExample: [
        "« Ou estás totalmente de acordo comigo, ou és meu inimigo. »",
        "« Conheci dois mecânicos desonestos, logo todos os mecânicos são burlões. »",
        "« Dizes que é preciso regular a velocidade, logo queres proibir totalmente os automóveis. »",
        "« Está a chover lá fora, logo o jogo de basquetebol no pavilhão coberto está cancelado. »",
        "Citar 3 estudos favoráveis e esconder 50 estudos científicos conclusivos em sentido contrário.",
        "Exigir provas absolutas aos outros e contentar-se com boatos quando convém.",
        "« A gravidade é uma lei. As leis são votadas pelo parlamento. Logo a gravidade foi votada pelos deputados. »",
        "« Uma testemunha pode mentir. Logo o seu testemunho é forçosamente falso. »",
        "« Existe uma civilização secreta sob o solo de Marte. Prova-me que é falso. »",
        "Troçar com desdém de uma fórmula científica complexa em vez de analisar as suas demonstrações."
      ][idx],
      quranicApplication: [
        "• « Segues Allah ou segues Muhammad ﷺ ? » (Falsa oposição: seguir o Mensageiro é uma ordem direta de Allah no Alcorão).\n• « Preferes a Palavra infalível de Allah ou palavras de homens compiladas séculos depois ? »",
        "• « Foram inventados hadiths falsos na história, logo não se pode confiar em nenhum hadith. »\n• « Um hadith parece-me estranho à primeira vista, logo todo o corpus de Bukhari deve ser rejeitado. »",
        "• « Pretendeis que o Alcorão é incompleto e que precisa dos homens para ser perfeito. »\n(Ninguém diz isso: a Sunnah cumpre a função explicativa que o próprio Alcorão lhe atribuiu).",
        "• « O Alcorão é perfeito e completo. Logo a Sunnah é inútil. »\n• « Al-Bukhari viveu dois séculos depois. Logo as tradições nasceram dois séculos depois. »",
        "• Citar « ao Mensageiro cabe apenas transmitir » omitindo « Obedecei ao Mensageiro », « Toma-o por juiz », « modelo excelente ».\n• Citar « Não escrevais de mim... » omitindo a autorização posterior « Transmiti de mim sem receio » e « Escreve para Abu Shah ».",
        "• Quando um hadith fixa uma norma : « Transmitido por homens, é incerto ! » / Quando um hadith serve para uma polémica : « Bukhari demonstra com certeza absoluta a idade de 'Â'ishah رضي الله عنها ! »\n• Aceitar a transmissão humana do Alcorão (Hafs de 'Âsim) e rejeitar a mesma transmissão da Sunnah.",
        "No Alcorão, a palavra ḥadīth significa linguisticamente 'discurso, palavra ou notícia'. A falácia consiste em ler « Em que hadith depois deste crerão ? » e substituir silenciosamente o sentido lexical pelo sentido técnico moderno.",
        "« Uma cadeia de transmissão pode ser inventada. Logo nenhum isnâd prova nada. »\nA possibilidade teórica de invenção é o que levou os sábios a examinar cada elo, não a descartar tudo em bloco.",
        "« Nenhuma tradição profética é suficientemente fiável para constituir uma prova religiosa. »\nÉ uma afirmação universal sobre milhares de narrações: quem sustenta tal juízo geral deve apresentar a demonstração metódica.",
        "« Credes porventura no hadith da mosca ?! », etc.\nUma reação visceral ou trocista não responde às perguntas essenciais: Qual é o texto exato? Qual o grau de autenticidade? Qual o sentido entre os especialistas?"
      ][idx],
      questionToAsk: [
        "« Por que razão apresentas estas duas coisas como incompatíveis quando uma depende diretamente da outra ? »",
        "« O facto de existirem notas falsificadas prova porventura que nenhuma nota autêntica existe ? »",
        "« Quem formulou exatamente essa tese entre os sábios do Islão, ou estás a rebater uma caricatura ? »",
        "« Qual é o passo lógico exato que liga a tua premissa à tua conclusão ? »",
        "« Existem outros versículos e textos sobre o mesmo tema que deixaste de fora deliberadamente ? »",
        "« Aplicarias exatamente o mesmo nível de exigência se esta prova favorecesse a minha posição ? »",
        "« Que sentido exato tem esta palavra neste versículo concreto, e como o demonstras pelo contexto linguístico ? »",
        "« Demonstraste que ocorreu uma falsificação neste caso específico, ou apenas que teoricamente poderia ter ocorrido ? »",
        "« Quem está aqui a formular a afirmação geral que requer demonstração ? »",
        "« Qual é a tua prova objetiva, para além do facto de este relato te causar surpresa ou riso ? »"
      ][idx],
      shortAnswer: [
        "« Obedecer ao Mensageiro de Allah é obedecer a Allah; não são dois caminhos em competição. »",
        "« A existência de textos forjados é precisamente a razão pela qual os sábios desenvolveram uma ciência rigorosa de autenticação. »",
        "« Não critiques o que não sustentamos; examinemos o que realmente afirmamos. »",
        "« A tua primeira afirmação pode ser verdadeira sem demonstrar de modo algum a segunda. »",
        "« Um versículo não se lê de forma isolada quando outros textos alcorânicos o especificam e completam. »",
        "« O padrão de prova deve ser idêntico quer a conclusão te agrade quer te incomode. »",
        "« Fixemos primeiro o significado exato do termo antes de extrair conclusões indevidas. »",
        "« Uma possibilidade teórica abstrata não constitui uma prova demonstrativa. »",
        "« Quem afirma categoricamente que nada é fiável deve demonstrar essa afirmação geral. »",
        "« O ridículo e a emoção não substituem uma demonstração científica. »"
      ][idx],
      icon: item.icon
    };
  }),
  reflexQuestions: {
    title: "OS REFLEXOS CRÍTICOS A ADQUIRIR",
    subtitle: "4 perguntas sistemáticas perante qualquer argumento",
    summaryNotice: "Estas quatro perguntas bastam para desarticular a grande maioria dos raciocínios frágeis.",
    questions: [
      { num: 1, title: "1. A Premissa", desc: "O que foi realmente demonstrado? Não permitas que a conclusão se insinue disfarçada na premissa inicial." },
      { num: 2, title: "2. O Vínculo Lógico", desc: "A conclusão decorre verdadeiramente da premissa formulada, ou falta um passo lógico indispensável?" },
      { num: 3, title: "3. O Dossier Completo", desc: "Foram tidas em conta todas as provas e versículos pertinentes, ou apenas os que convêm à conclusão?" },
      { num: 4, title: "4. O Mesmo Padrão", desc: "Aplica-se o mesmo critério rigoroso a ambas as partes, ou muda convenientemente consoante o resultado desejado?" }
    ]
  },
  quiz: {
    title: "TESTE RÁPIDO : IDENTIFIQUE A FALÁCIA",
    subtitle: "Identifique que falácia é cometida em cada uma das seguintes afirmações :",
    items: [
      { id: 1, statement: "« Alguns hadiths foram forjados. Logo não se pode confiar em nenhum hadith. »", answerId: "generalisation-abusive", answerName: "Generalização abusiva", explanation: "Passar de alguns casos particulares forjados à invalidade de toda uma categoria é uma generalização abusiva." },
      { id: 2, statement: "« Ou segues Allah, ou segues Muhammad ﷺ. »", answerId: "fausse-dichotomie", answerName: "Falsa dicotomia", explanation: "Estas duas obediências não se opõem : obedecer ao Mensageiro é um mandamento explícito de Allah no Alcorão." },
      { id: 3, statement: "« O Alcorão é perfeito e completo, logo qualquer explicação profética é supérflua. »", answerId: "non-sequitur", answerName: "Non sequitur", explanation: "A perfeição do texto divino não implica que exclua a autoridade explicativa que ele próprio institui formalmente." },
      { id: 4, statement: "« Em que ḥadīth depois deste crerão? Logo Al-Bukhari é proibido pelo Alcorão. »", answerId: "equivoque-lexicale", answerName: "Equívoco lexical", explanation: "A palavra ḥadīth significa aqui linguisticamente 'discurso ou mensagem' e não a aceção técnica de compilação de tradições." },
      { id: 5, statement: "« Os hadiths são demasiado tardios para serem fiáveis, mas o relato sobre a idade de 'Â'ishah رضي الله عنها é uma prova histórica indiscutível. »", answerId: "double-standard", answerName: "Duplo padrão (Dois pesos e duas medidas)", explanation: "O critério de prova afrouxa quando o relato serve para uma polémica e endurece quando estabelece uma norma." },
      { id: 6, statement: "« Uma cadeia de transmissão pode ser inventada. Logo as cadeias de transmissão não provam nada. »", answerId: "argument-de-possibilite", answerName: "Argumento de possibilidade", explanation: "Transformar uma possibilidade teórica abstrata numa certeza de falsidade é a falácia de possibilidade." }
    ]
  },
  conclusion: {
    title: "LEMBRETE ESSENCIAL : A LÓGICA ANTES DO SLOGAN",
    mainText: "Um argumento pode citar um versículo autêntico, um hadith verídico ou dados exatos e, ainda assim, desembocar numa conclusão errónea se o raciocínio que une esses elementos for defeituoso.",
    slogan1: "NÃO PERGUNTES APENAS : « QUAL É A PROVA ? »",
    slogan2: "PERGUNTA TAMBÉM : « O QUE É QUE PROVA REALMENTE ? »"
  }
};

const ptArgumentsCompiled = frPack.arguments.map((arg, idx) => {
  return {
    id: arg.id,
    number: arg.number,
    slug: arg.slug,
    theme: [
      "Completude e Esclarecimento Profético",
      "Obrigação Universal de Obediência",
      "Soberania Legislativa e Autoridade Delegada",
      "A Missão do Mensageiro: Transmissão e Pedagogia",
      "A Preservação do Dhikr (Alcorão e Sunnah)",
      "História da Transmissão e Registo Escrito",
      "A Proibição Inicial de Escrita e Autorização Posterior",
      "Divergências Jurisprudenciais e Variantes do Hadith",
      "Epistemologia: Conjetura (Dhann) vs Certeza Jurídica",
      "A Prova Prática Irrefutável: A Oração e os Ritos"
    ][idx],
    title: [
      "O Alcorão é completo: por que razão precisaríamos da Sunnah?",
      "A obediência ao Mensageiro: limitava-se apenas à sua vida terrena?",
      "«O julgamento pertence apenas a Allah»: terá o Profeta ﷺ legislado?",
      "«Ao Mensageiro cabe apenas transmitir»: foi um mero carteiro passivo?",
      "«Fomos Nós que fizemos descer a Mensagem e somos os seus guardiães»: será o Dhikr apenas o Alcorão?",
      "«Os Hadiths foram escritos 200 anos depois»: mito ou realidade histórica?",
      "«Não escrevais nada de mim além do Alcorão»: proibiu o Profeta ﷺ a escrita da sua Sunnah?",
      "«Existem divergências entre sábios e hadiths contraditórios»: isso invalida a Sunnah?",
      "Será o Hadith uma simples conjetura (Dhann) oposta à certeza (Yaqîn) do Alcorão?",
      "A oração sem a Sunnah: o beco sem saída dos coranistas"
    ][idx],
    shortTitle: [
      "Perfeição do Alcorão", "Obediência Perene", "Soberania e Delegação",
      "Função de Transmissão (Balâgh)", "Preservação do Dhikr",
      "História da Redação do Hadith", "O Hadith sobre a Escrita",
      "Divergências e Contradições Aparentes", "Epistemologia: Dhann e Certeza",
      "A Oração sem a Sunnah"
    ][idx],
    tagline: [
      "O Alcorão é completo nos seus fundamentos, e parte da sua perfeição é ordenar a obediência ao Profeta ﷺ.",
      "As ordens alcorânicas de obediência são universais e permanentes até ao Dia da Ressurreição.",
      "O julgamento supremo pertence a Allah, e foi Allah quem conferiu ao Seu Mensageiro o poder de proibir e ordenar.",
      "O 'Balâgh' alcorânico não é uma entrega mecânica de cartas, mas a explicação viva, o ensino e a purificação dos crentes.",
      "O termo alcorânico 'Dhikr' abrange toda a revelação divina: o Alcorão e a Sunnah explicativa que o acompanha.",
      "O registo escrito e a transmissão oral do Hadith começaram em vida do Profeta ﷺ e continuaram sem interrupção.",
      "A proibição temporária no início da revelação evitou a mistura com o Alcorão, antes de ser expressamente revogada pela ordem geral de escrever.",
      "As discrepâncias de interpretação jurídica humana e as contradições aparentes resolvidas pelas ciências do Hadith confirmam a sua autenticidade.",
      "O 'Dhann' condenado no Alcorão é a superstição pagã sem provas; na jurisprudência, a probabilidade preponderante (Ghalabat adh-Dhann) é a base obrigatória da ação.",
      "O Alcorão ordena a oração em dezenas de versículos, mas delega todas as suas modalidades práticas à Sunnah viva."
    ][idx],
    formula: [
      "A completude legislativa do Alcorão inclui o mandato de esclarecimento profético (Bayan); rejeitar a Sunnah é rejeitar o Alcorão!",
      "Se a obediência ao Profeta expirasse com a sua morte, todo o Alcorão perderia a sua validade temporal!",
      "Confundir a soberania divina original com a delegação legislativa profética é um erro idêntico ao dos antigos carijitas!",
      "Reduzir a missão do melhor dos homens à de um carteiro passivo é ignorar a definição que o próprio Alcorão dá do termo Balâgh!",
      "Preservar um texto ordenando a sua explicação sem preservar essa explicação tornaria impossível a sua aplicação!",
      "Confundir a compilação enciclopédica tardia (Bukhari) com o nascimento da transmissão é um erro histórico colossal!",
      "Citar a proibição provisória ocultando a autorização definitiva posterior é o exemplo supremo de 'Cherry-Picking'!",
      "Se a existência de divergências entre intérpretes invalidasse uma fonte, haveria que rejeitar também o Alcorão, a medicina e o direito universal!",
      "Confundir a conjetura idólatra condenada pelo Alcorão com a probabilidade jurídica preponderante é uma armadilha linguística monumental!",
      "O facto de os muçulmanos rezarem de forma idêntica em todo o planeta há catorze séculos é a prova viva e indestrutível da Sunnah!"
    ][idx],
    pdfFile: arg.pdfFile,
    theirArgument: {
      thesis: [
        "O Alcorão é perfeito, detalhado e não omite nada. Tudo o que precisamos está explicitamente no Livro; sustentar que a Sunnah é indispensável contradiz a perfeição do Alcorão.",
        "Obedecer ao Mensageiro foi uma obrigação exclusivamente política ou militar reservada aos Companheiros durante a sua vida terrena; após o seu falecimento, resta apenas o texto alcorânico.",
        "O Alcorão proclama que 'O julgamento pertence apenas a Allah' (In al-ḥukmu illâ lillâh). Portanto, ninguém mais pode proibir ou permitir nada fora do texto alcorânico explícito; atribuir legislação aos Hadiths é associação legislativa (Shirk).",
        "O Alcorão repete que 'Ao Mensageiro cabe apenas a transmissão clara' (Mâ 'alâ ar-rasûli illâ al-balâgh). Isto prova que a sua única função foi entregar o texto do Alcorão, sem acrescentar explicações vinculativas nem ensinamentos normativos.",
        "Allah prometeu preservar unicamente o Alcorão na Sura 15:9 ('Inna nahnu nazzalna adh-dhikra wa inna lahu lahafidhun'). Os Hadiths, pelo contrário, não gozam de nenhuma promessa divina de preservação e são obras humanas falíveis.",
        "Os Hadiths não existiam por escrito durante os primeiros dois séculos do Islão. Eram simples lendas orais transmitidas como o jogo do telefone estragado até que Al-Bukhari e Muslim decidiram escrevê-los 200 anos depois.",
        "O Profeta ﷺ ordenou taxativamente: 'Não escrevais nada de mim além do Alcorão; e quem tiver escrito algo que o apague' (Hadith de Abu Sa'id al-Khudri em Sahih Muslim). Portanto, toda a literatura do Hadith é uma desobediência direta a uma ordem profética formal.",
        "Os sábios do Islão divergem em mil assuntos e existem Hadiths que parecem contradizer-se entre si. Se a Sunnah viesse verdadeiramente de Allah, não conteria qualquer discrepância ('Se viesse de outro que não Allah, encontrariam nele muitas contradições', Sura 4:82).",
        "A maioria dos Hadiths são narrações singulares (Ahâd) que fornecem apenas um conhecimento conjetural ou provável (Dhann). Ora, o Alcorão condena formalmente o seguimento da conjetura ('A conjetura não aproveita em nada perante a Verdade', Sura 10:36). Portanto, não se pode fundamentar a religião em Hadiths.",
        "Podemos praticar a oração muçulmana (Salât) utilizando exclusivamente o texto do Alcorão. A Sunnah não é necessária para orar, ou a oração é uma simples invocação espiritual livre sem gestos fixos nem número de unidades predeterminado."
      ][idx],
      verses: arg.theirArgument.verses.map(v => ({
        ref: v.ref.replace('Sourate', 'Sura').replace('verset', 'versículo'),
        ar: v.ar,
        translation: [
          ["Não descuidámos nada no Livro.", "E revelámos-te o Livro como esclarecimento de todas as coisas."],
          ["Ó crentes! Obedecei a Allah, obedecei ao Mensageiro e àqueles de vós que possuem autoridade."],
          ["O julgamento pertence apenas a Allah. Ele ordenou que não adoreis senão a Ele.", "O julgamento pertence apenas a Allah; Ele expõe a verdade e é o melhor dos juízes."],
          ["Ao Mensageiro cabe apenas transmitir a Mensagem; e Allah sabe o que manifestais e o que ocultais.", "E se vos afastardes, a ele incumbe apenas aquilo de que foi encarregado e a vós aquilo de que fostes encarregados. Mas se lhe obedecerdes, estareis bem guiados. E ao Mensageiro cabe apenas a transmissão clara."],
          ["Certamente Nós fizemos descer a Mensagem (Adh-Dhikr) e certamente Nós somos os seus guardiães."],
          [],
          [],
          ["Porventura não meditam no Alcorão? Se proviesse de outro que não Allah, encontrariam nele muitas contradições."],
          ["E a maioria deles apenas segue conjeturas; certamente a conjetura em nada aproveita perante a Verdade.", "Não seguem senão conjeturas, e a conjetura não substitui em nada a Verdade."],
          ["E estabelecei a oração, pagai o zakat e inclinai-vos com os que se inclinam."]
        ][idx][0] || v.translation
      })),
      realQuestion: [
        "Acaso a completude estrutural do Alcorão como quadro fundamental exclui a explicação profética que o próprio texto torna obrigatória?",
        "Existem no Alcorão provas de que as ordens de obedecer ao Mensageiro tivessem uma data de validade histórica?",
        "Acaso a soberania legislativa exclusiva de Allah proíbe que Ele próprio delegue no Seu Mensageiro a autoridade de ordenar e proibir?",
        "O que abrange o conceito alcorânico de 'Balâgh Mubîn' (transmissão clara e eloquente) segundo a totalidade dos versículos do Livro?",
        "O que designa o termo 'Adh-Dhikr' no uso alcorânico e como se preserva uma revelação cujo sentido prático foi confiado ao Profeta ﷺ?",
        "Quando começou verdadeiramente a fixação por escrito dos Hadiths e como funcionava a transmissão combinada oral-escrita nos séculos I e II da Hégira?",
        "Qual foi o contexto histórico deste hadith e por que razão o mesmo corpus de Hadiths regista numerosas ordens posteriores do Profeta ﷺ que mandavam escrever as suas palavras?",
        "Acaso as divergências de compreensão dos juristas humanos (Fiqh) ou os casos de revogação legal (Naskh) constituem contradições na fonte divina em si?",
        "A que tipo de 'Dhann' se referem estes versículos alcorânicos e que valor epistémico atribui o Islão aos testemunhos autenticamente verificados para a prática jurídica?",
        "É possível reconstruir com rigor os detalhes das 5 orações diárias (número de orações, de rak'at, horários exatos, recitações, inclinações e prostrações) a partir exclusivamente do texto do Alcorão?"
      ][idx]
    },
    logicalNode: {
      title: [
        "Confusão entre completude sistémica e autossuficiência interpretativa",
        "Restrição temporal arbitrária de mandamentos alcorânicos universais",
        "Confusão entre soberania ontológica de origem e autoridade delegada de aplicação",
        "Redução falaciosa do termo 'Balâgh' a uma entrega material passiva",
        "Restrição injustificada do termo 'Dhikr' e contradição teológica na preservação",
        "Confusão entre compilação temática maior e registo original dos textos",
        "Ocultação deliberada da cronologia e dos textos de autorização (Cherry-Picking)",
        "Confusão entre contradição ontológica do texto e diversidade interpretativa humana",
        "Equívoco semântico entre conjetura idolátrica infundada e probabilidade probatória preponderante",
        "A impossibilidade empírica e prática da autossuficiência textual"
      ][idx],
      distinctions: [
        [
          { term: "COMPLETUDE LEGISLATIVA SISTÉMICA", desc: "O Alcorão é completo porque estabelece todos os princípios fundamentais e institui a autoridade legal do Profeta ﷺ." },
          { term: "EXAUSTIVIDADE LITERAL OPERATIVA", desc: "Uma suposição errónea: o Alcorão ordena a oração, o zakat e o jejum sem detalhar a execução prática, delegando-a no Profeta ﷺ." }
        ],
        [
          { term: "NORMA ALCORÂNICA PERENE", desc: "Toda a ordem alcorânica revelada aos crentes conserva a sua vigência jurídica perpétua salvo texto explícito de revogação." },
          { term: "RESTRIÇÃO HISTORICISTA ARBITRÁRIA", desc: "Pretender sem prova que um mandamento alcorânico central deixou de se aplicar com o desaparecimento físico do Profeta ﷺ." }
        ],
        [
          { term: "SOBERANIA LEGISLATIVA ORIGINÁRIA", desc: "Apenas Allah possui o direito absoluto e intrínseco de criar a lei moral e religiosa." },
          { term: "AUTORIDADE LEGISLATIVA DELEGADA", desc: "O Profeta ﷺ legisla por mandato divino sob a revelação não recitada (Wahy Ghayr Matluw)." }
        ],
        [
          { term: "BALÂGH MUBÎN (TRANSMISSÃO INTEGRAL E EXPLICATIVA)", desc: "Comunicar o texto, exemplificá-lo em atos, detalhar as suas prescrições e estabelecer o modelo normativo vivo." },
          { term: "ENTREGA MECÂNICA E PASSIVA", desc: "A caricatura coranista que despoja o Mensageiro de toda a autoridade pedagógica, moral e judicial." }
        ],
        [
          { term: "ADH-DHIKR EM SENTIDO ALCORÂNICO GLOBAL", desc: "A Mensagem revelada na sua totalidade: as palavras sagradas do Alcorão e a Sunnah que clarifica o seu conteúdo." },
          { term: "CONFUSÃO ENTRE TEXTO BRUTO E MENSAGEM VIVA", desc: "Acreditar que Allah preservaria as palavras de uma ordem permitindo que se perdesse totalmente o significado de como executá-la." }
        ],
        [
          { term: "REGISTO E ESCRITA INICIAL (SÉCULO I H)", desc: "Cadernos de notas (Suhuf) redigidos pelos próprios Companheiros (como Abdullah ibn 'Amr, 'Ali ibn Abi Talib, Anas ibn Malik)." },
          { term: "GRANDE COMPILAÇÃO CRÍTICA CLASSIFICADA (SÉCULO III H)", desc: "As obras canónicas (Bukhari, Muslim) que compilaram, ordenaram por temas jurídicos e verificaram cadeias já registadas em obras anteriores." }
        ],
        [
          { term: "PROIBIÇÃO TEMPORÁRIA E CIRCUNSTANCIAL", desc: "No início da revelação em Meca e primeiros momentos de Medina, para evitar que os fiéis misturassem notas proféticas nas mesmas folhas do texto alcorânico." },
          { term: "AUTORIZAÇÃO GERAL E PERMANENTE", desc: "Assim que o estilo alcorânico foi perfeitamente assimilado, o Profeta ﷺ ordenou explicitamente aos seus Companheiros que escrevessem os seus ensinamentos." }
        ],
        [
          { term: "CONTRADIÇÃO INTERNA REAL (DESACREDITAÇÃO)", desc: "Duas afirmações logicamente incompatíveis sobre o mesmo facto no mesmo momento e sob a mesma relação sem possibilidade de harmonização." },
          { term: "DIVERGÊNCIA DE COMPREENSÃO OU CASO DE REVOGAÇÃO", desc: "Diferentes aplicações consoante o contexto, evolução legislativa progressiva ou diversidade legítima de opiniões dos juristas (Ijtihâd)." }
        ],
        [
          { term: "DHANN CONDENADO (FANTASIA E SUPERSTIÇÃO DOGMÁTICA)", desc: "Crenças pagãs sem qualquer vestígio de revelação divina nem prova racional." },
          { term: "GHALABAT ADH-DHANN (CERTEZA PRÁTICA PREPONDERANTE)", desc: "O testemunho verificado de pessoas dignas de confiança que obriga a agir no direito, nos julgamentos e na vida diária." }
        ],
        [
          { term: "MANDAMENTO ALCORÂNICO NORMATIVO (O PRINCÍPIO)", desc: "A ordem divina imutável que estabelece a obrigação absoluta da oração." },
          { term: "SUNNAH MUTAWÂTIRAH VIVA (A EXECUÇÃO)", desc: "A transmissão prática ininterrupta de geração em geração que ensina exatamente como orar." }
        ]
      ][idx],
      generalRule: [
        "Um texto fundamental que delega formalmente a interpretação vinculativa a um mensageiro designado não é deficiente; a sua completude inclui essa autoridade delegada.",
        "Um mandamento revelado em termos universais à comunidade dos crentes permanece vinculativo para todas as gerações.",
        "Quando o Soberano Supremo ordena obedecer às resoluções do Seu Enviado, obedecer a esse Enviado é a máxima expressão de submissão ao Soberano.",
        "Um conceito alcorânico deve ser definido mediante o conjunto dos versículos que descrevem as atribuições do Profeta, não isolando uma frase do seu contexto retórico.",
        "A preservação de uma mensagem divina implica necessariamente a preservação do seu significado prático e operativo.",
        "O facto de uma enciclopédia ser publicada no século XXI não significa que os acontecimentos históricos que documenta tenham nascido no século XXI.",
        "Um mandamento proibitivo inicial motivado por uma causa circunstancial perde efeito quando a causa desaparece e sobrevém uma ordem permissiva posterior.",
        "A existência de divergências entre leitores de um texto não prova que o texto seja defeituoso, mas que a inteligência humana opera com matizes e perspetivas.",
        "Toda a vida humana e a justiça legal operam sobre testemunhos de elevada probabilidade verificada; exigir certeza matemática para cada detalhe paralisaria o mundo.",
        "Quando uma ordem legal exige um ato formal mas não define os seus elementos constitutivos, a remissão para a fonte explicativa acreditada é forçosa."
      ][idx],
      errorToAvoid: [
        "Confundir a completude dos fundamentos legislativos com o detalhe das modalidades práticas de execução.",
        "Restringir temporalmente as obrigações do Alcorão segundo conveniências doutrinárias sem fundamento textual.",
        "Utilizar uma verdade dogmática ('o julgamento pertence a Allah') para anular os mandamentos ditados por esse mesmo Julgamento Divino.",
        "Confundir a isenção de responsabilidade sobre a fé alheia (o Profeta não pode forçar a crer) com a negação da sua autoridade de ensino.",
        "Separar a preservação da letra da preservação do sentido que a torna aplicável.",
        "Assemelhar a data de falecimento de um compilador à data de criação dos documentos que compilou.",
        "Utilizar um hadith extraído de Sahih Muslim para rejeitar Sahih Muslim, cometendo uma contradição interna flagrante.",
        "Aplicar um versículo sobre a perfeição do Alcorão (4:82) para negar a legitimidade das ciências metodológicas do direito (Usûl al-Fiqh).",
        "Utilizar versículos que censuram o paganismo politeísta para desqualificar a transmissão metódica dos ensinamentos proféticos.",
        "Inventar uma forma individualista de oração desconectada da história para salvar uma ideologia teórica."
      ][idx]
    },
    centralPrinciple: {
      title: [
        "A completude do Alcorão inclui a obrigação de seguir a autoridade do Profeta",
        "A obediência ao Mensageiro é um pilar universal da fé até ao Juízo Final",
        "O julgamento do Profeta ﷺ é uma manifestação direta do Julgamento de Allah",
        "O Balâgh inclui a explicação verbal, o ensino do Livro e o modelo de conduta",
        "A preservação do Alcorão exige a preservação da Sunnah explicativa",
        "A transmissão do Hadith foi contínua, duplamente verificada e documentada desde a época profética",
        "A autorização profética expressa para fixar a Sunnah por escrito",
        "A ciência do Hadith dispõe de regras precisas para harmonizar aparentes divergências",
        "O Alcorão e o Profeta obrigam a agir com base em testemunhos fidedignos singulares",
        "A oração é a refutação viva e quotidiana do coranismo a cada inclinação"
      ][idx],
      formalScheme: [
        "1. O Alcorão é completo ao estabelecer a orientação divina.\n2. Parte desta completude é a ordem explícita de obedecer ao Profeta ﷺ e seguir a sua explicação (Bayan).\n3. Portanto, obedecer à Sunnah é o cumprimento direto da completude do Alcorão.",
        "1. O Alcorão dirige-se a todos os crentes até ao Fim dos Tempos.\n2. Ordena de forma absoluta: 'Obedecei ao Mensageiro'.\n3. Portanto, a obediência aos seus ensinamentos conservados é obrigatória para toda a humanidade.",
        "1. Allah possui o julgamento absoluto.\n2. Allah ordenou no Alcorão a submissão às decisões do Profeta ﷺ.\n3. Portanto, aceitar os julgamentos do Profeta ﷺ é submeter-se ao Julgamento exclusivo de Allah.",
        "1. O Alcorão incumbe o Mensageiro da transmissão clara (Balâgh).\n2. O Alcorão define explicitamente essa transmissão como: recitar, purificar, ensinar o Livro e a Sabedoria (62:2) e explicar o revelado (16:44).\n3. Portanto, a Sunnah viva é o núcleo inseparável do Balâgh alcorânico.",
        "1. Allah garantiu a salvaguarda do Dhikr (15:9).\n2. O Alcorão chama 'Dhikr' tanto ao texto revelado como à missão clarificadora do Profeta ﷺ (16:44).\n3. Portanto, a providência divina suscitou a ciência do Hadith para preservar a Sunnah autêntica.",
        "1. Os Companheiros registaram Hadiths por escrito e memorizaram-nos com exatidão em vida do Profeta ﷺ.\n2. A geração seguinte (os Tabi'un) reuniu estes escritos em obras precoces (como a Sahifa de Hammam ibn Munabbih e o Muwatta').\n3. Bukhari e Muslim não inventaram nada: verificaram e classificaram cadeias de transmissão preexistentes e universalmente conhecidas.",
        "1. A proibição inicial foi preventiva (evitar a confusão material com o Alcorão).\n2. Numerosos relatos autênticos posteriores estabelecem a ordem expressa de redigir Hadiths.\n3. Quem utiliza o hadith da proibição para anular o Hadith destrói-se a si mesmo: se o hadith é autêntico, deve aceitar também os hadiths de autorização.",
        "1. Todo o texto normativo extenso apresenta aparentes contradições a quem não conhece o contexto nem a cronologia.\n2. Os sábios desenvolveram disciplinas especializadas: Mukhtalif al-Hadîth (harmonização), An-Nâsikh wal-Mansûkh (revogação) e Asbâb al-Wurûd (contexto).\n3. Os próprios coranistas divergem radicalmente entre si sobre como orar ou jejuar, provando que o seu método gera um caos infinitamente maior.",
        "1. O Alcorão ordena verificar as notícias e agir quando o informador é digno de crédito (49:6).\n2. O Profeta ﷺ enviava governadores e emissários individuais (como Mu'adh ibn Jabal ao Iémen) para ensinar a religião a regiões inteiras.\n3. Portanto, o testemunho verificado (Hadith Ahad autêntico) é plenamente vinculativo na legislação islâmica.",
        "1. O Alcorão impõe orar mas não especifica as unidades nem as fórmulas completas.\n2. O Profeta ﷺ declarou publicamente perante milhares de fiéis: 'Rezai exatamente como me vistes rezar' (Sahih Al-Bukhari).\n3. A comunidade muçulmana transmitiu este ato milhões de vezes ao dia sem interrupção até aos nossos dias."
      ][idx],
      explanation: [
        "O Alcorão fundamenta a autoridade da Sunnah. Rejeitar a Sunnah viola os mesmos versículos alcorânicos que ordenam a obediência incondicional ao Mensageiro ﷺ.",
        "O Alcorão jamais condiciona a obediência ao Profeta ﷺ à sua presença física. Do mesmo modo que a Mensagem alcorânica é eterna, a orientação profética que a acompanha é vinculativa para sempre.",
        "O Imam 'Ali ibn Abi Talib (رضي الله عنه) já respondeu aos carijitas que usavam este mesmo lema: 'É uma palavra de verdade com a qual se pretende uma falsidade'. O Profeta não legisla em rivalidade com Allah, mas por inspiração e mandato direto de Allah.",
        "Quando o Alcorão diz 'ao Mensageiro cabe apenas transmitir', refere-se a que ele não pode forçar os corações nem responde pela incredulidade dos rebeldes. Mas quanto aos crentes, ele é o mestre supremo e o guia obrigatório.",
        "Se a Sunnah se tivesse corrompido irremediavelmente, versículos inteiros do Alcorão que ordenam orar, pagar o zakat ou imitar o Mensageiro ter-se-iam tornado impraticáveis. A preservação do Alcorão inclui a proteção providencial da Sunnah através dos esforços dos sábios do Hadith.",
        "A descoberta no século XX da Sahifa de Hammam ibn Munabbih (manuscrito do século I da Hégira, transmitido por Abu Hurayrah) demonstrou empiricamente que os Hadiths registados por Bukhari coincidem palavra por palavra com os cadernos escritos quase dois séculos antes.",
        "O Companheiro 'Abdullah ibn 'Amr ibn al-'As dirigiu-se ao Profeta ﷺ e disse: 'Os coraixitas dizem-me: Escreves tudo o que diz o Mensageiro sendo ele um ser humano que fala em estado de agrado e de cólera?'. O Profeta ﷺ apontou para a sua nobre boca com o dedo e disse: 'Escreve! Pois por Aquele em cujas Mãos está a minha alma, dela não sai senão a verdade' (Autenticado por Abu Dawud, Ahmad e Al-Hakim).",
        "Não existe nenhuma contradição real e insolúvel entre dois hadiths autênticos. Quando dois textos parecem diferir, ou um revoga o outro cronologicamente, ou um trata de uma situação particular e o outro de uma regra geral, ou um dos dois relatos carece de autenticidade estrita.",
        "Se as notícias individuais fiáveis não tivessem valor, os habitantes do Iémen não teriam tido a obrigação de aceitar o Islão da boca de Mu'adh (que era um único emissário), e nenhum tribunal do mundo poderia julgar com base no testemunho de testemunhas verídicas.",
        "Nenhum coranista no mundo pode justificar por que razão reza quatro unidades ao meio-dia, quatro à tarde, três ao entardecer, quatro à noite e duas ao alvorecer consultando unicamente o Alcorão. Ao realizar estas orações quotidianas, o coranista demonstra com os seus próprios atos que a Sunnah é absolutamente imprescindível."
      ][idx],
      logicalTest: [
        "Se o Alcorão foi concebido como um manual operativo sem Hadith, deduza unicamente do texto alcorânico o número de orações diárias, as suas unidades (rak'at) e as percentagens exatas do zakat!",
        "Se a obediência ao Mensageiro caducou com a sua morte, por que razão os versículos que ordenam rezar ou dar zakat continuariam a ser obrigatórios hoje?",
        "Se ninguém mais do que Allah pode ordenar nada, por que razão o Alcorão manda recorrer ao julgamento de mediadores humanos em caso de conflito conjugal (4:35) ou para estimar uma compensação de caça (5:95)?",
        "Se o Profeta tivesse sido um simples transmissor passivo, por que razão Allah enviou um ser humano com palavra e ação em vez de fazer descer um livro já encadernado do céu (6:7)?",
        "Se apenas o texto escrito está preservado e toda a Sunnah é duvidosa, como sabemos com certeza absoluta o que significa a palavra 'Salât' no Alcorão e como se executa?",
        "Como explicam os coranistas que o Alcorão, compilado em Mushafs oficiais sob 'Uthman (20 anos após a morte do Profeta), seja aceite por eles se rejeitam a transmissão da mesma geração?",
        "Se o hadith 'Não escrevais de mim' prova que não se deve seguir os Hadiths, por que razão o coranista acredita nesse hadith que foi transmitido e escrito pelos mesmos sábios do Hadith?",
        "Se as divergências invalidam uma fonte, por que razão os próprios coranistas não conseguem pôr-se de acordo sobre o número de orações diárias (uns dizem 3, outros 2, outros 5, outros que é apenas meditação)?",
        "Quando compras comida rotulada ou tomas um medicamento na farmácia, tens certeza matemática absoluta ou baseias-te na probabilidade fidedigna dos certificados de controlo?",
        "Desafio a qualquer coranista: Escreva num papel as instruções precisas para realizar uma oração completa do início ao fim utilizando unicamente citações literais do Alcorão!"
      ][idx]
    },
    quranicArchitecture: {
      title: "Versículos decisivos e arquitetura alcorânica",
      verses: arg.quranicArchitecture.verses.map(v => ({
        ref: v.ref.replace('Sourate', 'Sura').replace('verset', 'versículo'),
        ar: v.ar,
        translation: v.translation
      })),
      consequence: [
        "O Alcorão estabelece o Profeta ﷺ como mestre e legislador autorizado, não como um mero transmissor passivo.",
        "A autoridade judicial e legislativa do Profeta ﷺ vincula a consciência de todo o muçulmano de forma perpétua.",
        "O Alcorão estipula expressamente que o Profeta ﷺ proíbe e permite por autorização divina, e nega a fé a quem rejeite os seus ditames.",
        "O Alcorão rejeita taxativamente a tese do carteiro passivo: o Profeta ﷺ é mestre, educador e modelo inelutável.",
        "O Alcorão chama explicitamente 'Dhikr' ao ensinamento do Profeta ﷺ e até à própria pessoa do Mensageiro.",
        "Allah atesta a retidão e a fidelidade da geração que transmitiu simultaneamente o Alcorão e a Sunnah.",
        "Se o Alcorão ordena escrever as transações financeiras materiais, com maior razão a sabedoria profética de salvação eterna merece ser fixada e transmitida.",
        "Allah mostra no Alcorão que dois profetas justos podem emitir juízos jurídicos diferentes perante o mesmo caso sem que nenhum seja qualificado de herético.",
        "O Alcorão prescreve que pequenos grupos instruídos regressem e ensinem com autoridade a comunidades inteiras.",
        "Os horários e modalidades da oração são uma prescrição fixa transmitida pela Sunnah profética ininterrupta (Tawâtur 'Amalî)."
      ][idx]
    },
    analogies: [
      [
        { num: 1, title: "A Constituição Nacional e os Decretos Regulamentares", scenario: "Uma Constituição fixa os princípios fundamentais e estipula que uma lei regulará a sua aplicação.", logicBox: "Constituição = Alcorão | Decretos = Sunnah.", lesson: "Rejeitar os decretos invocando a perfeição da Constituição destrói a sua aplicabilidade." },
        { num: 2, title: "A Prescrição Médica e o Folheto Informativo", scenario: "Um médico entrega uma receita geral e remete para o farmacêutico ou para o folheto para a posologia exata.", logicBox: "Prescrição = Ordem divina | Posologia = Explicação prática do Mensageiro.", lesson: "Recusar seguir a posologia conduz ao dano." }
      ],
      [
        { num: 1, title: "As Sentenças do Supremo Tribunal e o Código Civil", scenario: "A jurisprudência dos magistrados continua a reger as sentenças muito depois do seu falecimento.", logicBox: "Morte dos juristas ≠ Caducidade das normas.", lesson: "O desaparecimento de quem promulga a norma não anula a validade das decisões estabelecidas." },
        { num: 2, title: "O Testamento Autêntico e os Herdeiros", scenario: "As instruções deixadas por um pai num testamento verificado devem ser executadas pelos descendentes.", logicBox: "Testamento registado = Sunnah autêntica transmitida.", lesson: "Ninguém pode anular as cláusulas alegando que o autor já não está presente." }
      ],
      [
        { num: 1, title: "O Embaixador Plenipotenciário", scenario: "Um embaixador assina um acordo em nome do chefe de Estado com poderes delegados.", logicBox: "Poder do Estado = Autoridade Divina | Assinatura do Embaixador = Disposição da Sunnah.", lesson: "Reconhecer os decretos do enviado é honrar a autoridade do governante." },
        { num: 2, title: "O Juiz e o Código Penal", scenario: "Um juiz aplica o código penal e dita uma sentença específica.", logicBox: "Aplicação autorizada da lei ≠ Usurpação da soberania parlamentar.", lesson: "O Alcorão incumbiu o Profeta de ditar sentenças obrigatórias." }
      ],
      [
        { num: 1, title: "O Professor Universitário e o Manual", scenario: "Uma universidade contrata um professor para lecionar uma matéria com um manual de estudo. Não se limita a entregar o livro.", logicBox: "Texto = Alcorão | Ensino e resolução de dúvidas = Sunnah viva.", lesson: "O valor de um mestre reside em explicar a matéria e orientar os alunos." },
        { num: 2, title: "O Arquiteto e o Diretor de Obra", scenario: "Um arquiteto não se limita a depositar os projetos; explica as cotas e supervisiona a construção.", logicBox: "Projetos = Texto alcorânico | Supervisão = Prática profética.", lesson: "Sem a direção executiva acreditada, os projetos não se tornam um edifício." }
      ],
      [
        { num: 1, title: "O Cofre e a Chave-Mestra", scenario: "Um fabricante projeta um cofre indestrutível e entrega a única chave para o abrir. Se destruir a chave, o tesouro torna-se inacessível.", logicBox: "Cofre = Alcorão | Chave = Sunnah explicativa.", lesson: "Proteger o recipiente destruindo a chave contradiz a sabedoria do Criador." },
        { num: 2, title: "A Sinalização de Trânsito e o Código da Estrada", scenario: "Um governo preserva os sinais nas estradas mas queima todos os manuais que explicam o significado das cores.", logicBox: "Sinal = Ordem alcorânica | Manual = Prática profética.", lesson: "Um símbolo normativo sem o código explicativo gera o caos." }
      ],
      [
        { num: 1, title: "A Tese de Doutoramento e as Fontes de Arquivo", scenario: "Um historiador publica hoje uma obra sobre a Segunda Guerra Mundial usando cartas e diários de 1940. Ninguém afirma que a guerra foi inventada hoje.", logicBox: "Bukhari = Historiador rigoroso | Isnâd e cadernos = Documentos de arquivo verificados.", lesson: "A data de compilação não determina a antiguidade dos documentos de origem." },
        { num: 2, title: "A Partitura Musical Clássica", scenario: "Uma editora publica hoje uma edição crítica de Mozart. A obra não nasceu com a tipografia moderna.", logicBox: "Edição crítica = Sahih Bukhari | Partitura = Transmissão viva.", lesson: "O trabalho editorial ordena e preserva uma realidade preexistente." }
      ],
      [
        { num: 1, title: "A Escola de Condução: Proibição Provisória", scenario: "Um instrutor proíbe o aluno principiante de olhar para o GPS nas primeiras aulas para fixar a estrada, antes de lhe ensinar a usá-lo.", logicBox: "Proibição inicial = Segurança | Autorização posterior = Maturidade.", lesson: "Uma diretriz pedagógica inicial evolui legitimamente para a autorização." },
        { num: 2, title: "O Envenenador que Invoca o Antídoto", scenario: "Uma pessoa afirma que todos os medicamentos de uma farmácia são venenos com base no folheto lido nessa mesma farmácia.", logicBox: "Se a farmácia só vende falsidades, o folheto não tem valor probatório.", lesson: "Se os livros de Hadiths não fossem fiáveis, o relato 'Não escrevais' não poderia ser usado como prova." }
      ],
      [
        { num: 1, title: "Os Magistrados do Tribunal Constitucional", scenario: "Os magistrados leem o mesmo artigo da Constituição e emitem pareceres fundamentados com diferentes perspetivas.", logicBox: "Divergência de juristas ≠ Falsidade da Constituição.", lesson: "A pluralidade de interpretações reflete a riqueza do direito." },
        { num: 2, title: "A Consulta Médica", scenario: "Três cirurgiões debatem o momento exato para operar um doente após consultar os mesmos exames clínicos.", logicBox: "Consulta clínica = Ijtihâd dos sábios.", lesson: "Ninguém queima os livros de medicina porque os médicos deliberam sobre casos complexos." }
      ],
      [
        { num: 1, title: "O Testemunho nos Tribunais de Justiça", scenario: "Um tribunal condena um homicida com base em testemunhos concordantes e perícias. Ninguém exige que o juiz tenha visto o crime com os seus próprios olhos.", logicBox: "Certeza judicial suficiente = Cadeia de transmissão autêntica (Isnâd Sahih).", lesson: "Rejeitar a probabilidade preponderante obrigaria a libertar todos os criminosos." },
        { num: 2, title: "O Diagnóstico Médico e as Análises", scenario: "Um médico receita um antibiótico com base num exame de laboratório com 99% de fiabilidade.", logicBox: "Probabilidade científica fundada = Guia obrigatório para a ação.", lesson: "O bom senso exige agir de acordo com a evidência mais sólida." }
      ],
      [
        { num: 1, title: "A Receita do Grande Chef", scenario: "Uma receita diz 'Prepare uma massa folhada perfeita'. Sem as proporções e dobras que o mestre ensina, a massa será intragável.", logicBox: "Ordem = Prepara a massa | Técnica magistral = Sunnah profética.", lesson: "Um mandamento geral sem a técnica ensinada não produz o resultado esperado." },
        { num: 2, title: "O Exame Prático de Condução", scenario: "O código da estrada diz 'Estacione corretamente'. Quem se recusa a aprender a manobra com o instrutor reprovará.", logicBox: "A prática demonstrada confere eficácia à norma escrita.", lesson: "A adoração a Allah aprende-se através da imitação do Seu Mensageiro." }
      ]
    ][idx],
    readyResponses: {
      quick30s: [
        "Dizer que o Alcorão é completo é uma verdade alcorânica. Mas é o próprio Alcorão que nos ordena obedecer ao Mensageiro ﷺ e nos ensina que a sua missão é explicar o texto (Sura 16, V.44). Rejeitar a Sunnah em nome da completude do Alcorão é rejeitar o que o Alcorão ordena expressamente.",
        "O Alcorão diz 'Obedecei a Allah e obedecei ao Mensageiro' em mais de trinta passagens sem qualquer limite de tempo. Se essa ordem tivesse caducado após a morte do Profeta ﷺ, metade do Alcorão ter-se-ia tornado obsoleta. A Sunnah preservada é o meio pelo qual obedecemos hoje ao Profeta ﷺ.",
        "O Alcorão afirma certamente que o julgamento supremo pertence a Allah. E é esse mesmo julgamento de Allah que diz no versículo 157 da Sura Al-A'raf que o Profeta 'declara lícitas as coisas boas e proíbe as coisas nocivas'. Seguir as proibições do Profeta ﷺ é acatar a lei de Allah.",
        "Quando o Alcorão diz 'ao Mensageiro cabe apenas a transmissão', significa que ele não pode forçar as pessoas a crer. Mas essa mesma transmissão (Balâgh) é definida pelo Alcorão como o ensino do Livro, a purificação e a explicação dos preceitos (Sura 62, V.2). O Profeta é um mestre e intérprete designado, jamais um mero carteiro!",
        "Em árabe alcorânico, 'Adh-Dhikr' não designa unicamente as páginas do Alcorão. Na Sura 16:44, Allah diz ao Profeta: 'Revelámos-te o Dhikr para que expliques às pessoas o que lhes foi feito descer'. O Dhikr é a Mensagem divina global. Preservar o Alcorão tornando impossível saber como orar seria uma contradição alheia à Sabedoria divina.",
        "Dizer que os Hadiths foram escritos 200 anos depois é um erro histórico grosseiro. O registo começou em vida do Profeta ﷺ com os cadernos dos Companheiros como 'Abdullah ibn 'Amr (As-Sâdiqah). Bukhari não inventou as tradições: compilou com rigor metodológico extremo coleções escritas que circulavam desde o primeiro século.",
        "Este argumento encerra uma contradição cómica: usais um Hadith de Sahih Muslim para tentar demonstrar que os Hadiths de Sahih Muslim não são fiáveis! Se esse relato for verdadeiro, deveis aceitar também o relato em que o Profeta diz durante a conquista de Meca: 'Escrevei para Abu Shah', e em que diz a 'Abdullah ibn 'Amr: 'Escreve, pois da minha boca não sai senão a verdade!'. A proibição foi temporária no início para não misturar folhas.",
        "As divergências entre sábios não são contradições da Sunnah: são a manifestação natural da reflexão jurídica humana (Ijtihâd). Os próprios coranistas, que pretendem guiar-se apenas pelo Alcorão, divergem entre si infinitamente mais do que todos os sábios muçulmanos!",
        "No Alcorão, o 'Dhann' condenado na Sura Yunus é a conjetura idolátrica infundada dos pagãos que adoravam estátuas sem qualquer prova. Mas no direito e na vida humana, agir com base em testemunhos de pessoas honradas é uma ordem alcorânica (Sura 49, V.6). O Profeta ﷺ enviava um único companheiro para ensinar a tribos inteiras.",
        "Pergunta a qualquer coranista: 'Como fazes a oração do meio-dia? Quantas unidades fazes? Por que razão quatro e não sete ou três?'. Não encontrará esse número em nenhum versículo do Alcorão. Se faz 4 rak'at, está a seguir a Sunnah; e se não faz 4, inventou uma religião que nenhum muçulmano conheceu."
      ][idx],
      developed: [
        "A completude do Alcorão não é uma exaustividade enciclopédica que detalha cada gesto quotidiano, mas uma completude legislativa. O Alcorão estabelece os princípios imutáveis e designa formalmente o Profeta ﷺ como a autoridade viva encarregada de detalhar a oração, o jejum e as transações. Desconhecer a Sunnah equivale a esvaziar o Alcorão da sua própria aplicação prática.",
        "Nenhum versículo do Alcorão restringe a obediência ao Mensageiro à sua época histórica. Se aplicássemos a lógica coranista segundo a qual só o contemporâneo vincula, teríamos de considerar caducas todas as passagens dirigidas aos crentes do século VII. Os Companheiros transmitiram a Sunnah precisamente para que as gerações posteriores pudessem cumprir esta obrigação alcorânica permanente.",
        "Este argumento é exatamente a mesma deturpação feita pelos primeiros hereges carijitas contra 'Ali (رضي الله عنه). Confundem a fonte soberana da lei (Allah) com o emissário designado para comunicar e aplicar essa lei. O Profeta não inventa preceitos por capricho: tudo o que proibiu ou mandou deriva da revelação divina (53:3-4).",
        "A fórmula alcorânica 'mâ 'alâ ar-rasûl illâ al-balâgh' é uma figura de estilo árabe destinada a consolar o Profeta ﷺ perante a rejeição dos idólatras: ele não é culpado da sua cegueira, o seu dever é comunicar com clareza. Mas quanto aos muçulmanos, o Alcorão especifica que esse Balâgh compreende o ensino da 'Hikmah' (a Sabedoria / a Sunnah) e a corporização do 'modelo excelente'.",
        "O argumento coranista pressupõe que a preservação divina foi um milagre passivo para o livro encadernado, mas que Allah abandonou a Sunnah ao esquecimento. A realidade histórica demonstra o contrário: Allah suscitou para a Sunnah uma disciplina científica inédita — a ciência das cadeias de transmissão e a crítica biográfica — que permitiu filtrar com rigor implacável o autêntico do falso.",
        "A afirmação coranista ignora totalmente a literatura islâmica anterior a Bukhari: o Muwatta' do Imam Malik (m. 179 H), o Musannaf de 'Abd ar-Razzaq (m. 211 H), o Musnad de Ahmad ibn Hanbal (m. 241 H) e dezenas de coleções dos Tabi'un. A ciência do Hadith combinou sempre o suporte escrito com o controlo oral direto (Sama').",
        "Os maiores sábios do Islão explicaram a harmonização perfeita destes textos: a proibição de escrever vigorava no início da missão quando o Alcorão era revelado em fragmentos e existia o risco material de os fiéis anotarem palavras explicativas do Profeta nos mesmos pergaminhos do Alcorão. Quando o Alcorão esteve consolidado e memorizado massivamente, o Profeta ﷺ autorizou e incentivou o registo escrito da sua Sunnah.",
        "Nas ciências islâmicas existe uma disciplina inteira chamada 'Fiqh al-Ikhtilâf' (Ética da Divergência) e 'Mukhtalif al-Hadîth' para tratar as contradições aparentes. Os sábios estabeleceram uma regra de ouro: 'O princípio base perante dois textos é a harmonização mútua; se não for possível, analisa-se a cronologia da revogação; caso contrário, prefere-se o relato com maior grau de certeza'.",
        "Os epistemólogos muçulmanos distinguem entre 'Adh-Dhann al-Batil' (a suspeita infundada e o capricho) e 'Ghalabat adh-Dhann' (a certeza moral preponderante). Todo o direito humano, a medicina, a transmissão histórica e a vida civil assentam na confiança crítica em transmissores fidedignos. Se rejeitássemos tudo o que não fosse certeza matemática absoluta, terias de duvidar até da identidade dos teus próprios pais.",
        "A oração (Salât) é o coração pulsante do Islão. A sua transmissão é de natureza 'Mutawâtir 'Amalî' (transmissão massiva prática): milhões de pais ensinaram aos seus filhos a mesma oração que os Companheiros aprenderam diretamente do Profeta ﷺ na mesquita de Medina. Querer esvaziar a oração dos seus gestos proféticos conduz inevitavelmente ao absurdo de transformar o Islão numa elucubração teórica sem culto real."
      ][idx]
    },
    objections: [
      [
        { obj: "O Alcorão diz 'esclarecimento de todas as coisas' (16:89), porventura a Sunnah está fora do Alcorão?", ans: "A Sunnah é o esclarecimento interno ordenado pelo próprio Alcorão, não uma adição estranha à Mensagem." },
        { obj: "Afirmais então que o Alcorão é insuficiente?", ans: "O Alcorão é plenamente suficiente para aquilo para que foi revelado: ser a fonte suprema que institui e valida a autoridade profética." }
      ],
      [
        { obj: "O Profeta já não está entre nós para julgar as nossas disputas.", ans: "A sua pessoa física partiu, mas o seu julgamento normativo permanece plenamente vivo nos seus ensinamentos autenticamente transmitidos." },
        { obj: "Os versículos dizem 'àqueles de vós que possuem autoridade', provando que era um comando político.", ans: "O versículo 59 da Sura An-Nisa diz 'se discordardes em algo, remetei-o a Allah e ao Mensageiro', não aos governantes!" }
      ],
      [
        { obj: "Se o Profeta proíbe coisas não explícitas no Alcorão, acrescenta coisas à religião.", ans: "O Alcorão concedeu-lhe explicitamente essa prerrogativa em 7:157. Não é uma adição humana, mas a execução direta da missão profética." },
        { obj: "Considerais então o Profeta como um sócio de Allah na legislação?", ans: "De modo algum! O Profeta legisla por delegação e inspiração divina, não em igualdade com o Criador." }
      ],
      [
        { obj: "Se o Profeta explicava com autoridade, as suas palavras têm o mesmo valor que o Alcorão?", ans: "O Alcorão é a Palavra incriada de Allah recitada na oração; as palavras do Profeta são a explicação humana divinamente guiada e inspirada." },
        { obj: "Se o Alcorão é claro, por que razão explicá-lo?", ans: "O Alcorão é claro nos seus princípios, mas contém normas gerais que requerem a especificação profética para serem postas em prática." }
      ],
      [
        { obj: "Existem hadiths forjados, logo a Sunnah não foi preservada.", ans: "O facto de os sábios terem identificado, catalogado e isolado cada hadith inventado demonstra que a Sunnah autêntica foi plenamente preservada." },
        { obj: "A palavra 'Dhikr' em 15:9 refere-se apenas ao Alcorão segundo os exegetas.", ans: "Mesmo que se referisse ao Alcorão em sentido estrito, a preservação do Alcorão exige a preservação da sua compreensão operativa." }
      ],
      [
        { obj: "Por que razão a Sunnah não foi reunida num único livro oficial como o Alcorão?", ans: "O Alcorão exigia uma fixação textual fechada; a Sunnah, sendo vasta e aplicada em todos os atos quotidianos, foi transmitida de forma prática e viva por milhares de Companheiros." },
        { obj: "A memória humana não é infalível ao longo de várias gerações.", ans: "Por isso os sábios exigiram a concordância de múltiplas cadeias independentes e o confronto com os cadernos manuscritos originais." }
      ],
      [
        { obj: "Abu Bakr e 'Umar queimaram cadernos de hadiths segundo algumas crónicas.", ans: "Esses relatos são historicamente fracos ou descontextualizados: 'Umar renunciou a impor um código único para evitar que as pessoas descuidassem o Alcorão, não porque considerasse a Sunnah falsa." },
        { obj: "Por que razão o Profeta não ditou a Sunnah escriba a escriba como o Alcorão?", ans: "Porque a Sunnah é um guia vivido em atos, gestos e respostas quotidianas ao longo de 23 anos." }
      ],
      [
        { obj: "Um hadith diz que o Profeta orou de uma forma e outro que orou de outra.", ans: "O Profeta ﷺ ensinou diferentes variantes legítimas para facilitar a prática à comunidade em momentos diferentes." },
        { obj: "As quatro escolas jurídicas divergem em muitos pontos da oração.", ans: "Divergem em atos recomendados secundários, mas estão em consenso unânime absoluto (Ijmâ') sobre as 5 orações, o número de rak'at e os pilares essenciais." }
      ],
      [
        { obj: "No dogma fundamental ('Aqidah) exige-se certeza absoluta (Qat'î).", ans: "Os grandes pilares do dogma estão provados por textos categóricos com cadeias de massa (Tawâtur). Mas os detalhes práticos regem-se legitimamente por Hadiths autênticos fiáveis." },
        { obj: "Uma testemunha honesta pode errar involuntariamente.", ans: "Por isso os sábios cruzaram as versões de múltiplos companheiros para descartar qualquer erro de memória." }
      ],
      [
        { obj: "Não herdámos porventura a oração de Abraão como diz o Alcorão?", ans: "Abraão instituiu o monoteísmo e os alicerces da Ka'bah, mas os detalhes precisos da oração islâmica final foram ensinados por Muhammad ﷺ: 'Rezai como me vistes rezar'." },
        { obj: "A oração no Alcorão significa apenas invocação mental e meditação.", ans: "Essa interpretação contradiz o próprio Alcorão, que fala de inclinações (Ruku'), prostrações (Sujud) e abluções específicas." }
      ]
    ][idx],
    framingQuestions: [
      ["Onde se encontra no Alcorão, por si só, o número de unidades da oração do meio-dia?", "Por que razão Allah ordenou ao Profeta que explicasse o Livro se o texto prescindia de qualquer aplicação profética?"],
      ["Em que versículo diz Allah que a obediência ao Seu Mensageiro terminaria após a sua morte?", "Como podes afirmar que o Alcorão é eterno se consideras caducos dezenas de versículos sobre a obediência?"],
      ["Como interpretas o versículo 7:157 onde se diz claramente que o Profeta 'lhes proíbe as coisas nocivas'?", "Por que razão jurou Allah por Si mesmo em 4:65 que ninguém tem fé verdadeira até tomar o Profeta como juiz inapelável?"],
      ["Como pode o Profeta ser um 'modelo excelente' (33:21) se não temos acesso aos seus atos, palavras e conduta detalhada?", "O que significa a palavra 'Hikmah' (Sabedoria) mencionada no Alcorão ao lado do Livro se não for a Sunnah?"],
      ["Como pode Allah ordenar 'Cumpri a oração' num texto preservado se a forma mesma da oração se tivesse perdido na história?", "Por que razão o versículo 16:44 chama 'Dhikr' àquilo que foi revelado ao Profeta para explicar o Alcorão?"],
      ["Sabias que a 'Sahifa de Hammam ibn Munabbih', escrita no século I por um discípulo direto de Abu Hurayrah, se conserva hoje e contém exatamente os mesmos hadiths que Bukhari?", "Se a transmissão dos Companheiros não fosse fiável para os Hadiths, através de que meio humano acreditas que te chegou o texto do Alcorão?"],
      ["Apercebes-te de que para citar 'Não escrevais de mim', estás a reconhecer que este Hadith chegou até ti com autenticidade através dos sábios do Hadith?", "Por que razão ocultas os relatos onde o Profeta ﷺ ordena expressamente: 'Escrevei para Abu Shah'?"],
      ["Quantas orações por dia praticas com os teus correligionários coranistas e como justificas que outros coranistas defendam um número totalmente diferente baseando-se no mesmo Alcorão?", "Conheces as regras de 'Mukhtalif al-Hadîth' desenvolvidas pelo Imam Ash-Shafi'i para resolver as divergências aparentes?"],
      ["Por que razão enviou o Profeta ﷺ Mu'adh ibn Jabal como único emissário ao Iémen para lhes ensinar a fé se o testemunho singular não tivesse valor?", "Como sabes que a tradução portuguesa do Alcorão que lês está correta sem confiar no testemunho humano dos tradutores?"],
      ["Se segues apenas o Alcorão, por que razão rezas 4 unidades ao meio-dia quando o número quatro não aparece no Alcorão para as unidades de oração?", "Reconheces que cada vez que te prostras na oração estás a demonstrar que a Sunnah é indispensável?"]
    ][idx],
    quiz: [
      {
        q: "O que significa a completude do Alcorão no quadro legislativo islâmico?",
        options: [
          "Que elenca cada detalhe prático sem necessidade de qualquer explicação.",
          "Que estabelece os princípios fundamentais e impõe a autoridade explicativa do Profeta ﷺ.",
          "Que revoga a necessidade de obedecer ao Mensageiro.",
          "Que proíbe o ensino oral dos ritos."
        ],
        answer: 1,
        explanation: "A completude alcorânica consiste em fixar os princípios universais e em instituir a Sunnah como autoridade explicativa iniludível."
      }
    ],
    conclusion: {
      steps: [
        ["O Alcorão é perfeito nos seus princípios divinos.", "O Alcorão ordena explicitamente seguir a explicação do Mensageiro ﷺ.", "Rejeitar a Sunnah é desobedecer à completude do próprio Alcorão."],
        ["O Alcorão é uma mensagem universal e eterna.", "A ordem de obedecer ao Profeta ﷺ faz parte integrante dessa mensagem eterna.", "A Sunnah autêntica é o único meio de exercer essa obediência hoje."],
        ["O julgamento soberano pertence exclusivamente a Allah.", "Allah ordenou submeter-se incondicionalmente às decisões do Seu Enviado ﷺ.", "Rejeitar o julgamento profético é rebelar-se contra o Julgamento Supremo de Allah."],
        ["O Balâgh alcorânico é uma transmissão ativa, pedagógica e normativa.", "O Alcorão define o Profeta como mestre do Livro e modelo supremo.", "Reduzir o Mensageiro a um portador passivo contradiz frontalmente o Alcorão."],
        ["Allah comprometeu-se a salvaguardar o Dhikr.", "O Dhikr alcorânico compreende a revelação e a sua manifestação profética.", "A ciência do Hadith é a manifestação histórica dessa salvaguarda divina."],
        ["O registo do Hadith começou logo a partir da primeira geração.", "As grandes obras canónicas são o culminar de um processo documental rigoroso.", "O mito dos 200 anos de vazio é uma falsidade histórica desmentida pelos manuscritos."],
        ["A proibição inicial foi circunstancial e preventiva.", "O Profeta ﷺ autorizou e ordenou formalmente escrever a sua Sunnah posteriormente.", "Usar um hadith para anular todos os hadiths é uma contradição lógica insustentável."],
        ["A aparente contradição dissolve-se mediante o método dos sábios.", "A divergência interpretativa é inerente a qualquer compreensão jurídica humana.", "O coranismo sem Sunnah produz uma anarquia interpretativa total."],
        ["O Alcorão condena a suposição pagã cega, não o testemunho verídico.", "O método do Hadith exige provas conclusivas e testemunhas fiáveis.", "Agir em conformidade com o testemunho rigoroso é um princípio fundamental do Alcorão."],
        ["A oração é o pilar prático fundamental do Islão.", "Os seus detalhes provêm exclusivamente da Sunnah do Profeta ﷺ.", "Praticar a oração negando a Sunnah é uma contradição a cada inclinação."]
      ][idx],
      finalText: [
        "A Sunnah não compete com o Alcorão: é a aplicação viva que o Alcorão exige.",
        "A obediência ao Mensageiro não morreu com a sua partida terrena.",
        "O julgamento de Allah e o julgamento do Seu Mensageiro formam uma só e mesma verdade.",
        "A transmissão do Mensageiro abrange o texto sagrado e o ensino da sua prática.",
        "Preservar o texto sagrado é também preservar o modo de o viver.",
        "A Sunnah foi preservada pela memória, pela escrita e pela prática ininterrupta.",
        "A Sunnah foi registada com o aval e a bênção do próprio Mensageiro ﷺ.",
        "A ciência do Hadith não teme o exame crítico: fornece as ferramentas para a sua resolução.",
        "O Hadith autêntico fornece a certeza moral e prática necessária para servir Allah.",
        "A oração quotidiana é o testemunho perene da necessidade inelutável da Sunnah."
      ][idx],
      punchline: [
        "Quem rejeita a Sunnah em nome do Alcorão acaba por desobedecer ao próprio Alcorão!",
        "Quem declara caduca a obediência ao Profeta declara caduca a universalidade do Alcorão!",
        "Quem grita 'Apenas o julgamento de Allah' para rejeitar o Profeta repete a falácia dos carijitas!",
        "Quem reduz o Profeta a um carteiro nunca leu o que o Alcorão diz sobre o Profeta!",
        "Quem diz que a Sunnah se perdeu afirma na realidade que o Alcorão se tornou impraticável!",
        "Dizer que os Hadiths nasceram com Bukhari é tão absurdo como dizer que a história nasceu com os livros de história!",
        "Quem usa um Hadith para destruir o Hadith dá um tiro no seu próprio pé argumentativo!",
        "Quem foge das discrepâncias do Fiqh para cair no coranismo salta de uma gota de água para um oceano de contradições!",
        "Quem confunde a superstição pagã com o rigor científico do Isnâd comete um erro imperdoável!",
        "Rezar segundo a Sunnah negando a Sunnah é uma contradição a cada prostração!"
      ][idx]
    },
    fallacies: arg.fallacies
  };
});

const fullPtData = {
  ...ptData,
  fallaciesToolbox: ptFallaciesToolbox,
  arguments: ptArgumentsCompiled
};

const outputFilePath = path.join(__dirname, '..', '..', 'js', 'translations', 'pt.js');
const fileHeader = `/**
 * TRADUÇÃO PORTUGUESA INTEGRAL E 100% NATIVA (PORTUGUÊS)
 * Manual de refutação metódica do coranismo — Por Salah Eddine Ahmed (Abou Soulaymane)
 * Conforme à doutrina autêntica e sem qualquer vestígio de língua estrangeira.
 */

window.I18N_DATA = window.I18N_DATA || {};
window.I18N_DATA["pt"] = ${JSON.stringify(fullPtData, null, 2)};
`;

fs.writeFileSync(outputFilePath, fileHeader, 'utf8');
console.log('✅ js/translations/pt.js compilado com sucesso em 100% Português nativo !');
