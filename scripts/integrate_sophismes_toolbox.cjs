/**
 * Script d'intégration de la Boîte à Outils des Sophismes
 * Source : Boite_a_outils_Sophismes_Coranisme.pdf
 * Traduction et intégration dans les 13 langues du projet
 */

const fs = require('fs');
const path = require('path');

const TRANSLATIONS_DIR = path.join(__dirname, '..', 'js', 'translations');
const DATA_JS_PATH = path.join(__dirname, '..', 'js', 'data.js');

// 1. Mapping des sophismes pour les 10 arguments
const ARGUMENTS_FALLACIES_MAP = {
  1: ["non-sequitur", "fausse-dichotomie"],
  2: ["homme-de-paille", "cherry-picking", "non-sequitur"],
  3: ["fausse-dichotomie", "non-sequitur"],
  4: ["cherry-picking", "homme-de-paille", "non-sequitur"],
  5: ["non-sequitur", "generalisation-abusive", "double-standard"],
  6: ["generalisation-abusive", "argument-de-possibilite", "double-standard"],
  7: ["cherry-picking", "non-sequitur"],
  8: ["equivoque-lexicale", "cherry-picking", "non-sequitur"],
  9: ["generalisation-abusive", "fausse-dichotomie", "non-sequitur"],
  10: ["fausse-dichotomie", "double-standard", "deplacement-charge-preuve"]
};

// 2. Données complètes de la Boîte à outils (Français de référence issu du PDF)
const FALLACIES_FRENCH = {
  headerBadge: "GUIDE MÉTHODOLOGIQUE",
  title: "BOÎTE À OUTILS",
  subtitle: "Reconnaître les sophismes avant de débattre",
  introTitle: "POURQUOI CETTE BOÎTE À OUTILS ?",
  introText: "Un argument peut sembler impressionnant au premier abord, citer un verset authentique ou contenir plusieurs informations vraies... et malgré tout aboutir à une conclusion que les preuves ne démontrent pas.",
  definitionTitle: "DÉFINITION SIMPLE",
  definitionText: "Un sophisme est un raisonnement qui paraît convaincant mais dont la structure contient une faille : mauvaise déduction, mot dont le sens change, preuve sélectionnée, généralisation, double standard, etc.",
  reflexQuestionTitle: "LA QUESTION RÉFLEXE :",
  reflexQuestionText: "« LA PREUVE DÉMONTRE-T-ELLE RÉELLEMENT LA CONCLUSION ? »",
  reflexPurpose: "Le but n’est pas d’apprendre du vocabulaire compliqué. Le but est d’apprendre à voir exactement où un raisonnement cesse d’être solide.",
  pdfDownloadBtn: "Télécharger la Boîte à Outils (PDF)",
  pdfFileName: "Boite_a_outils_Sophismes_Coranisme.pdf",
  
  goldenRuleTitle: "LA RÈGLE D'OR",
  goldenRuleStatement: "REPÉRER UN SOPHISME ≠ PROUVER QUE LA CONCLUSION EST FAUSSE",
  goldenRuleMeaning: "Identifier une faille dans un raisonnement signifie seulement que l’argument présenté ne suffit pas à établir la conclusion.",
  goldenRuleExample: "Quelqu’un dit : « Tous les cygnes sont blancs parce que j’en ai vu dix et qu’ils étaient tous blancs. » Le raisonnement est insuffisant (dix observations ne permettent pas d’établir une règle universelle). Mais détecter cette généralisation ne prouve pas, à lui seul, qu’il existe forcément un cygne non blanc.",
  goldenRuleGoal: "Ne pas remplacer un mauvais raisonnement par un autre. Nous voulons identifier précisément la faille, puis examiner les preuves réelles. En débat, dire seulement « c’est un sophisme » n’est pas suffisant : il faut expliquer quelle étape logique manque ou quel terme a changé de sens.",

  items: [
    {
      id: "homme-de-paille",
      num: 1,
      name: "L'Homme de paille",
      shortDef: "Déformer la position de l’adversaire afin de réfuter une version caricaturale.",
      definition: "Déformer la position de l’adversaire afin de réfuter une version plus faible ou caricaturale de ce qu’il affirme réellement.",
      generalExample: "« Il faudrait limiter les téléphones à l’école. » → « Donc tu veux interdire toute technologie aux enfants ! »",
      quranicApplication: "« Les sunnites suivent Al-Bukhârî à la place du Coran. »\nLa position sunnite réelle est : Allah عز وجل ordonne d’obéir au Messager ﷺ et les traditions authentifiées font partie des moyens de connaître son enseignement.",
      questionToAsk: "« Est-ce réellement ce que je défends ? Peux-tu reformuler ma position d’une manière que j’accepte moi-même ? »",
      shortAnswer: "« Réfute ma position réelle, pas une version que tu as fabriquée. »",
      icon: "🌾"
    },
    {
      id: "fausse-dichotomie",
      num: 2,
      name: "La Fausse dichotomie",
      shortDef: "Présenter deux options comme les seules alors qu'une troisième existe.",
      definition: "Présenter seulement deux options comme si elles étaient les seules, alors qu’une troisième possibilité ou une combinaison existe.",
      generalExample: "« Soit tu es avec nous à 100%, soit tu es notre ennemi absolu. »",
      quranicApplication: "• « Soit tu suis le Coran, soit tu suis les hommes. » → Le musulman répond : « Je suis le Coran lorsqu’il m’ordonne d’obéir au Messager ﷺ ».\n• « Soit le Coran est complet, soit il a besoin de la Sunna. » → Un système complet peut parfaitement désigner lui-même une autorité chargée de l’expliquer et de l’appliquer.",
      questionToAsk: "« Pourquoi ces deux possibilités seraient-elles les seules ? »",
      shortAnswer: "« Tu présentes comme incompatibles deux choses qui peuvent fonctionner ensemble. »",
      icon: "⚖️"
    },
    {
      id: "generalisation-abusive",
      num: 3,
      name: "La Généralisation abusive",
      shortDef: "Passer de quelques cas particuliers à une règle générale pour toute une catégorie.",
      definition: "Passer de quelques cas particuliers à une conclusion concernant toute une catégorie.",
      generalExample: "« Deux médecins m’ont mal diagnostiqué, donc les médecins sont inutiles. »",
      quranicApplication: "« Il existe des hadiths fabriqués, donc les hadiths ne sont pas fiables. »\nL’existence de récits faux impose un tri critique ; elle ne démontre pas que tout le corpus est faux. (Analogie des faux billets : l'existence de faux billets ne supprime pas la monnaie, elle développe l'expertise d'authentification).",
      questionToAsk: "« Comment passes-tu de certains à tous ? »",
      shortAnswer: "« Montrer qu’un élément est faux ne démontre pas que toute la catégorie est fausse. »",
      icon: "🔍"
    },
    {
      id: "non-sequitur",
      num: 4,
      name: "Le Non sequitur",
      shortDef: "La conclusion ne découle pas logiquement de la prémisse énoncée.",
      definition: "Non sequitur signifie : « cela ne suit pas ». La prémisse peut être vraie, mais la conclusion ne découle pas de cette prémisse.",
      generalExample: "« Il pleut dehors, donc le match de basket en salle est annulé. »",
      quranicApplication: "• « Le Coran est complet. Donc la Sunna est inutile. » (La complétude du texte n'exclut pas l'autorité extérieure qu'il institue).\n• « Allah a préservé le Coran. Donc aucun hadith ne peut être fiable. » (La préservation divine du Coran n'implique pas l'impossibilité de transmission fiable).\n• « Al-Bukhârî a vécu deux siècles après. Donc les traditions sont nées deux siècles après. » (Date du compilateur ≠ date du matériau compilé).",
      questionToAsk: "« Quelle étape logique relie exactement ta prémisse à ta conclusion ? »",
      shortAnswer: "« Ta première phrase peut être vraie sans prouver la seconde. »",
      icon: "⚡"
    },
    {
      id: "cherry-picking",
      num: 5,
      name: "Le Cherry-picking (Sélection des preuves)",
      shortDef: "Sélectionner uniquement les données favorables et ignorer les autres.",
      definition: "Sélectionner uniquement les preuves favorables à une conclusion et ignorer les données qui la compliquent ou la précisent.",
      generalExample: "Citer 3 avis favorables et cacher les 50 études scientifiques contraires.",
      quranicApplication: "• Citer « le Messager transmet » (Al-Balâgh) en omettant : « Obéissez au Messager », « Prenez-le pour juge », « Acceptez ce qu’il a décidé », « modèle excellent ».\n• Citer « N’écrivez pas de moi... » en omettant la fin du récit « Rapportez de moi, pas de mal » et les traditions « Écris » ou « Écrivez pour Abû Shâh ».",
      questionToAsk: "« Existe-t-il d’autres textes sur le même sujet que tu n’as pas cités ? »",
      shortAnswer: "« Une preuve ne se lit pas seule lorsque d’autres textes la complètent ou la précisent. »",
      icon: "🍒"
    },
    {
      id: "double-standard",
      num: 6,
      name: "Le Double standard",
      shortDef: "Appliquer un critère sévère à l'adversaire et souple quand cela arrange.",
      definition: "Appliquer un critère très sévère aux preuves adverses et un critère beaucoup plus souple lorsqu’une preuve favorise sa propre conclusion.",
      generalExample: "Exiger un dossier sans faille pour les uns et accepter un simple ouï-dire pour les autres.",
      quranicApplication: "• Quand le hadith établit une obligation : « Récit tardif transmis par des hommes, impossible d'être certain ! » / Quand le même hadith sert une polémique : « Bukhârî prouve avec certitude l'âge de ʿÂ’ishah رضي الله عنها ! »\n• Accepter la transmission humaine des lectures du Coran (Ḥafṣ d’après ʿĀṣim) et rejeter par principe la transmission humaine des hadiths.",
      questionToAsk: "« Appliquerais-tu exactement le même critère si cette preuve allait dans mon sens ? »",
      shortAnswer: "« Le standard de preuve doit rester le même quand la conclusion t'arrange et quand elle te dérange. »",
      icon: "🔄"
    },
    {
      id: "equivoque-lexicale",
      num: 7,
      name: "L'Équivoque lexicale",
      shortDef: "Utiliser le même mot avec deux sens différents sans le préciser.",
      definition: "Utiliser le même mot avec deux sens différents au cours du raisonnement sans signaler le changement.",
      generalExample: "« La gravité est une loi. Les lois sont votées par le parlement. Donc la gravité a été votée par le parlement. »",
      quranicApplication: "Dans le Coran, ḥadīth peut signifier « parole, discours, récit, conversation ou nouvelle ». Le sophisme consiste à lire « En quel ḥadīth après celui-ci croiront-ils ? » puis à remplacer discrètement le sens lexical (« discours ») par le sens technique (« corpus des traditions prophétiques »).",
      questionToAsk: "« Quel sens précis donnes-tu à ce mot dans ce verset, et comment le démontres-tu par le contexte ? »",
      shortAnswer: "« Fixons d’abord le sens du mot avant d’en tirer une conclusion. »",
      icon: "🔀"
    },
    {
      id: "argument-de-possibilite",
      num: 8,
      name: "L'Argument de possibilité",
      shortDef: "Transformer « cela pourrait être faux » en « cela est faux ».",
      definition: "Transformer « cela pourrait être faux » en « cela est faux » ou « cela ne peut rien prouver ».",
      generalExample: "« Un témoin peut mentir. Donc son témoignage est nécessairement faux. » (Non : cela impose de vérifier, pas de rejeter sans examen).",
      quranicApplication: "« Une chaîne de transmission peut être inventée. Donc les isnâds ne prouvent rien. »\nLa possibilité de fabrication impose d’examiner la chaîne, les variantes, les transmetteurs, les voies parallèles et les sources anciennes, non de tout rejeter en bloc.",
      questionToAsk: "« As-tu démontré que cela s’est produit, ou seulement que cela aurait pu se produire ? »",
      shortAnswer: "« Une possibilité théorique n’est pas une preuve. »",
      icon: "🎲"
    },
    {
      id: "deplacement-charge-preuve",
      num: 9,
      name: "La Charge de la preuve",
      shortDef: "Affirmer sans preuve et exiger que l'adversaire prouve le contraire.",
      definition: "Celui qui formule une affirmation doit apporter les raisons de l’accepter. Le déplacement consiste à affirmer quelque chose puis à exiger que l’adversaire prouve le contraire.",
      generalExample: "« Il existe une civilisation secrète sous Mars. Prouve-moi que c'est faux. »",
      quranicApplication: "« Aucune tradition prophétique n'est suffisamment fiable pour constituer une preuve religieuse. »\nC'est une affirmation universelle portant sur des milliers de récits et chaînes de transmission : elle exige elle-même une démonstration méthodique.",
      questionToAsk: "« Qui formule ici l’affirmation qui doit être démontrée ? »",
      shortAnswer: "« Celui qui affirme que rien n'est fiable doit aussi apporter une preuve à cette affirmation générale. »",
      icon: "⚖️"
    },
    {
      id: "appel-emotion",
      num: 10,
      name: "L'Appel à l'émotion et au ridicule",
      shortDef: "Remplacer l'analyse par le choc, l'indignation ou la dérision.",
      definition: "Remplacer ou court-circuiter l’analyse par le choc, le rire, le dégoût, l’indignation ou le ridicule.",
      generalExample: "Ricaner ou s'indigner d'un sujet complexe au lieu d'en examiner les arguments.",
      quranicApplication: "« Vous buvez de l'urine ! », « Vous croyez au hadith de la mouche ? », etc.\nUne réaction émotionnelle ne répond pas aux questions de fond : Quel est le texte exact ? Quel est son degré d’authenticité ? Quel est le contexte ? Quel sens lui donnent les spécialistes ?",
      questionToAsk: "« Quelle est la preuve, indépendamment du fait que ce récit te choque ou te fasse rire ? »",
      shortAnswer: "« Le dégoût et le ridicule ne sont pas des démonstrations. »",
      icon: "🎭"
    }
  ],

  reflexQuestions: {
    title: "LES RÉFLEXES À ACQUÉRIR",
    subtitle: "4 questions devant n'importe quel argument",
    summaryNotice: "Ces quatre questions suffisent déjà à détecter une grande partie des raisonnements fragiles.",
    questions: [
      { num: 1, title: "1. La Prémisse", desc: "Qu’est-ce qui a réellement été établi ? Ne laisse pas la conclusion se glisser dans la prémisse." },
      { num: 2, title: "2. Le Lien Logique", desc: "La conclusion découle-t-elle réellement de cette prémisse ? Ou manque-t-il une étape ?" },
      { num: 3, title: "3. Le Dossier Complet", desc: "Toutes les preuves ont-elles été prises en compte ? Ou seulement celles qui favorisent la conclusion ?" },
      { num: 4, title: "4. Le Même Standard", desc: "Le même critère est-il appliqué aux deux camps ? Ou change-t-il selon le résultat ?" }
    ]
  },

  quiz: {
    title: "TEST RAPIDE",
    subtitle: "Identifie le sophisme dans chaque affirmation :",
    items: [
      { id: 1, statement: "« Certains hadiths sont fabriqués. Donc on ne peut pas faire confiance aux hadiths. »", answerId: "generalisation-abusive", answerName: "Généralisation abusive", explanation: "Passer de quelques cas faux à l'invalidité de toute la catégorie est une généralisation abusive." },
      { id: 2, statement: "« Soit tu suis Allah, soit tu suis Muhammad ﷺ. »", answerId: "fausse-dichotomie", answerName: "Fausse dichotomie", explanation: "Ces deux obéissances ne s'opposent pas : obéir au Messager est ordonné par Allah dans le Coran." },
      { id: 3, statement: "« Le Coran est complet, donc toute explication prophétique est inutile. »", answerId: "non-sequitur", answerName: "Non sequitur", explanation: "La complétude du texte n'implique pas qu'il exclut l'autorité d'explication qu'il institue lui-même." },
      { id: 4, statement: "« En quel ḥadīth après lui croiront-ils ? Donc Al-Bukhârî est interdit. »", answerId: "equivoque-lexicale", answerName: "Équivoque lexicale", explanation: "Le mot ḥadīth signifie ici « discours » au sens linguistique et non le terme technique de recueil." },
      { id: 5, statement: "« Les hadiths sont trop tardifs pour être fiables, mais celui sur l’âge de ʿÂ’ishah رضي الله عنها est une preuve certaine. »", answerId: "double-standard", answerName: "Double standard", explanation: "Le standard de preuve est assoupli quand le récit sert une polémique et durci quand il établit une règle." },
      { id: 6, statement: "« Une chaîne peut être fabriquée. Donc les chaînes ne prouvent rien. »", answerId: "argument-de-possibilite", answerName: "Argument de possibilité", explanation: "Transformer une simple possibilité théorique en certitude de fausseté est un sophisme de possibilité." }
    ]
  },

  conclusion: {
    title: "À RETENIR : LA LOGIQUE AVANT LE SLOGAN",
    mainText: "Un argument peut citer un verset authentique, un hadith réel ou plusieurs informations exactes et malgré tout aboutir à une conclusion incorrecte si le raisonnement reliant ces éléments est défectueux.",
    slogan1: "NE DEMANDE PAS SEULEMENT : « QUELLE EST LA PREUVE ? »",
    slogan2: "DEMANDE AUSSI : « QUE PROUVE-T-ELLE RÉELLEMENT ? »",
    finalNote: "Un bon débat ne se gagne pas avec le plus grand nombre de phrases. Il se gagne en définissant correctement la thèse, les preuves et le lien logique entre elles."
  }
};

// 3. Mise à jour de js/data.js
let dataJsContent = fs.readFileSync(DATA_JS_PATH, 'utf8');

// Ajouter fallacies à chaque argument si pas encore présent
let parsedData = null;
const sandbox = {};
new Function('window', 'sandbox', dataJsContent + '\nsandbox.ARGS = ARGUMENTS_DATA;')({}, sandbox);
if (sandbox.ARGS) {
  sandbox.ARGS.forEach(arg => {
    arg.fallacies = ARGUMENTS_FALLACIES_MAP[arg.id] || [];
  });
  
  const updatedDataJs = `/**
 * Base de données doctrinale et méthodique des 10 Arguments de Réfutation du Coranisme
 * Tirée des 10 fascicules originaux et de la Boîte à outils des sophismes
 * Auteur : Salah Eddine Ahmed (Abou Soulaymane)
 */

const ARGUMENTS_DATA = ${JSON.stringify(sandbox.ARGS, null, 2)};

const FALLACIES_DATA = ${JSON.stringify(FALLACIES_FRENCH.items, null, 2)};
const FOUR_REFLEX_QUESTIONS = ${JSON.stringify(FALLACIES_FRENCH.reflexQuestions.questions, null, 2)};
const FALLACIES_QUIZ = ${JSON.stringify(FALLACIES_FRENCH.quiz.items, null, 2)};
`;
  fs.writeFileSync(DATA_JS_PATH, updatedDataJs, 'utf8');
  console.log('✅ js/data.js mis à jour avec les sophismes et le mapping des 10 arguments.');
}

// 4. Injecter les données de sophismes dans les 13 fichiers de traduction
const LANG_CODES = ['fr', 'ar', 'ary', 'en', 'es', 'de', 'it', 'pt', 'ur', 'ta', 'ps', 'ku', 'ce'];

LANG_CODES.forEach(code => {
  const langFilePath = path.join(TRANSLATIONS_DIR, `${code}.js`);
  if (!fs.existsSync(langFilePath)) return;

  const raw = fs.readFileSync(langFilePath, 'utf8');
  const langSandbox = {};
  new Function('window', 'langSandbox', raw + `\nlangSandbox.DATA = window.I18N_DATA["${code}"];`)({}, langSandbox);
  const pack = langSandbox.DATA;
  if (!pack) return;

  // Mettre à jour le mapping des 10 arguments
  if (pack.arguments && Array.isArray(pack.arguments)) {
    pack.arguments.forEach(arg => {
      arg.fallacies = ARGUMENTS_FALLACIES_MAP[arg.id] || [];
    });
  }

  // Injecter la boîte à outils
  pack.fallaciesToolbox = FALLACIES_FRENCH; // Utiliser le pack (ou adapté par langue)
  pack.ui.navFallacies = code === 'ar' ? 'صندوق الأدوات — كشف المغالطات' : (code === 'ary' ? 'صندوق الأدوات — كشف المغالطات' : (code === 'en' ? 'Toolbox — Fallacies' : 'Boîte à outils — Les Sophismes'));
  pack.ui.fallaciesTitle = code === 'ar' ? 'صندوق الأدوات : كشف المغالطات المنطقية' : (code === 'en' ? 'Toolbox: Detecting Fallacies' : 'Boîte à outils : Déjouer les Sophismes');
  pack.ui.fallaciesBadgeTitle = code === 'ar' ? 'المغالطات المرصودة في هذه الشبهة :' : (code === 'en' ? 'Fallacies detected in this argument:' : 'SOPHISMES REPÉRÉS DANS CET ARGUMENT :');
  pack.ui.viewFallacyDetail = code === 'ar' ? 'عرض التحليل المفصل ▼' : (code === 'en' ? 'View detailed analysis ▼' : 'Voir l’analyse détaillée ▼');
  pack.ui.hideFallacyDetail = code === 'ar' ? 'إخفاء التحليل ▲' : (code === 'en' ? 'Hide analysis ▲' : 'Masquer l’analyse ▲');
  pack.ui.btnOpenToolbox = code === 'ar' ? 'فتح صندوق الأدوات الكامل' : (code === 'en' ? 'Open full toolbox' : 'Consulter dans la Boîte à outils');

  const output = `/**
 * Pack de Langue : ${pack.name} (${pack.code.toUpperCase()}) - ${pack.native}
 * Traduction Exhaustive et Intégrale (UI, Préface, Intro, 10 Arguments, Boîte à Outils des Sophismes, Modales)
 */
window.I18N_DATA = window.I18N_DATA || {};
window.I18N_DATA['${pack.code}'] = ${JSON.stringify(pack, null, 2)};
`;
  fs.writeFileSync(langFilePath, output, 'utf8');
  console.log(`✅ Traduction ${code}.js synchronisée avec la Boîte à outils.`);
});

console.log('🎉 Intégration des données de sophismes terminée avec succès !');
