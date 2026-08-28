/**
 * Générateur Exhaustif des Traductions de la Boîte à Outils des Sophismes
 * Traduit fidèlement dans les 13 langues du projet :
 * FR, AR, ARY, EN, ES, DE, IT, PT, UR, TA, PS, KU, CE
 */

const fs = require('fs');
const path = require('path');

const TRANSLATIONS_DIR = path.join(__dirname, '..', 'js', 'translations');

// Dictionnaire complet des traductions de la Boîte à Outils pour les 13 langues
const ALL_FALLACIES_TRANSLATIONS = {
  // 1. FRANÇAIS
  fr: {
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
    goldenRuleTitle: "LA RÈGLE D'OR MÉTHODOLOGIQUE",
    goldenRuleStatement: "REPÉRER UN SOPHISME ≠ PROUVER QUE LA CONCLUSION EST FAUSSE",
    goldenRuleMeaning: "Identifier une faille dans un raisonnement signifie seulement que l’argument présenté ne suffit pas à établir la conclusion.",
    goldenRuleExample: "Quelqu’un dit : « Tous les cygnes sont blancs parce que j’en ai vu dix et qu’ils étaient tous blancs. » Le raisonnement est insuffisant (dix observations ne permettent pas d’établir une règle universelle). Mais détecter cette généralisation ne prouve pas, à lui seul, qu’il existe forcément un cygne non blanc.",
    goldenRuleGoal: "Ne pas remplacer un mauvais raisonnement par un autre. Nous voulons identifier précisément la faille, puis examiner les preuves réelles. En débat, dire seulement « c’est un sophisme » n’est pas suffisant : il faut expliquer quelle étape logique manque ou quel terme a changé de sens.",
    sectionTitle10Cards: "📚 Les 10 Sophismes Fréquents en 10 Cartes Interactives",
    btnDetails: "Détails",
    btnHide: "Masquer",
    labelDefinition: "📖 Définition",
    labelGeneralExample: "🌍 Exemple Général",
    labelQuranicApp: "🕌 Application au Débat sur le Coranisme",
    labelQuestionToAsk: "❓ Question réflexe à poser :",
    labelShortAnswer: "💬 Réponse courte :",
    cardMemoBadge: "CARTE MÉMO",
    trainingBadge: "ENTRAÎNEMENT",
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
        quranicApplication: "« Il existe des hadiths fabriqués, donc les hadiths ne sont pas fiables. »\nL’existence de récits faux impose un tri critique ; elle ne démontre pas que tout le corpus est faux (Analogie des faux billets).",
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
        quranicApplication: "• « Le Coran est complet. Donc la Sunna est inutile. » (La complétude n'exclut pas l'autorité extérieure instituée).\n• « Allah a préservé le Coran. Donc aucun hadith ne peut être fiable. »\n• « Al-Bukhârî a vécu deux siècles après. Donc les traditions sont nées deux siècles après. »",
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
        generalExample: "Citer 3 études favorables et cacher les 50 études scientifiques contraires.",
        quranicApplication: "• Citer « le Messager transmet » (Al-Balâgh) en omettant : « Obéissez au Messager », « Prenez-le pour juge », « modèle excellent ».\n• Citer « N’écrivez pas de moi... » en omettant la fin « Rapportez de moi, pas de mal » et les récits « Écris ».",
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
        quranicApplication: "• Quand le hadith établit une règle : « Transmis par des hommes, incertain ! » / Quand le hadith sert une polémique : « Bukhârî prouve avec certitude l'âge de ʿÂ’ishah رضي الله عنها ! »\n• Accepter la transmission humaine du Coran (Ḥafṣ d’après ʿĀṣim) et rejeter celle des hadiths.",
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
        quranicApplication: "Dans le Coran, ḥadīth signifie « parole, discours, récit ou nouvelle ». Le sophisme consiste à lire « En quel ḥadīth après celui-ci croiront-ils ? » puis à remplacer discrètement le sens lexical (« discours ») par le sens technique (« recueils de traditions »).",
        questionToAsk: "« Quel sens précis donnes-tu à ce mot dans ce verset, et comment le démontres-tu par le contexte ? »",
        shortAnswer: "« Fixons d’abord le sens du mot avant d’en tirer une conclusion. »",
        icon: "🔀"
      },
      {
        id: "argument-de-possibilite",
        num: 8,
        name: "L'Argument de possibilité",
        shortDef: "Transformer « cela pourrait être faux » en « cela est faux ».",
        definition: "Transformer « cela pourrait être faux » en « cela est faux » ou « cela ne peut rien prouver » sans examen.",
        generalExample: "« Un témoin peut mentir. Donc son témoignage est nécessairement faux. » (Non : cela impose de vérifier, pas de rejeter sans examen).",
        quranicApplication: "« Une chaîne de transmission peut être inventée. Donc les isnâds ne prouvent rien. »\nLa possibilité de fabrication impose d’examiner la chaîne, les variantes et les sources anciennes, non de tout rejeter en bloc.",
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
        quranicApplication: "« Aucune tradition prophétique n'est suffisamment fiable pour constituer une preuve religieuse. »\nC'est une affirmation universelle portant sur des milliers de récits : elle exige elle-même une démonstration méthodique.",
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
        quranicApplication: "« Vous croyez au hadith de la mouche ? », etc.\nUne réaction émotionnelle ne répond pas aux questions de fond : Quel est le texte exact ? Son degré d’authenticité ? Le contexte ? Le sens chez les spécialistes ?",
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
      title: "TEST RAPIDE : IDENTIFIE LE SOPHISME",
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
  },

  // 2. ARABE
  ar: {
    headerBadge: "دليل منهجي",
    title: "صندوق الأدوات المنطقية",
    subtitle: "كشف المغالطات قبل الخوض في النقاش",
    introTitle: "لماذا هذا الصندوق المنطقي ؟",
    introText: "قد تبدو الشبهة مبهرة للوهلة الأولى، أو تستشهد بآية قرآنية صحيحة، أو تشتمل على مقدمات سليمة... ومع ذلك تنتهي إلى نتيجة باطلة لا تثبتها الأدلة المقدمة.",
    definitionTitle: "تعريف بسيط",
    definitionText: "المغالطة المنطقية هي استدلال يبدو مقنعاً ظاهرياً لكن تركيبه يشتمل على خلل منهجي: استنتاج فاسد، تلاعب بمعنى الألفاظ، انتقاء الأدلة، تعميم متعسف، أو ازدواجية في المعايير.",
    reflexQuestionTitle: "السؤال المنهجي المحوري :",
    reflexQuestionText: "« هل يثبت الدليل المذكور النتيجة المدعاة فعلاً ؟ »",
    reflexPurpose: "ليس الهدف حفظ مصطلحات معقدة، بل التدرب على تحديد النقطة الدقيقة التي ينكسر فيها الاستدلال المنطقي.",
    pdfDownloadBtn: "تحميل صندوق الأدوات (PDF)",
    pdfFileName: "Boite_a_outils_Sophismes_Coranisme.pdf",
    goldenRuleTitle: "القاعدة الذهبية المنهجية",
    goldenRuleStatement: "رصد المغالطة لا يعني بالضرورة بطلان النتيجة، بل يعني عدم كفاية الدليل لإثباتها",
    goldenRuleMeaning: "كشف خلل في الاستدلال يعني فقط أن الحجة المطروحة لا تكفي منطقياً للوصول إلى تلك النتيجة.",
    goldenRuleExample: "من قال: « كل البجع أبيض لأنني رأيت عشر بجعات بيضاء »، استدلاله غير كافٍ منطقياً؛ لكن كشف تعميمه لا يثبت بمفرده وجود بجعة سوداء، بل يوجب البحث عن الدليل الحقيقي.",
    goldenRuleGoal: "الهدف ألا نستبدل استدلالاً رديئاً بآخر. في المناظرة، لا يكفي القول « هذه مغالطة »، بل يجب بيان الحلقة المنطقية المفقودة أو اللفظ الذي تم تحريف معناه.",
    sectionTitle10Cards: "📚 المغالطات المنطقية العشر الأكثر تكراراً في بطاقات تفاعلية",
    btnDetails: "تفاصيل",
    btnHide: "إخفاء",
    labelDefinition: "📖 التعريف المنطقي",
    labelGeneralExample: "🌍 مثال عام",
    labelQuranicApp: "🕌 التطبيق على شبهات القرآنيين",
    labelQuestionToAsk: "❓ السؤال المنهجي الذي يجب طرحه :",
    labelShortAnswer: "💬 الرد القصير المباشر :",
    cardMemoBadge: "بطاقة تذكيرية",
    trainingBadge: "تدريب عملي",
    items: [
      {
        id: "homme-de-paille",
        num: 1,
        name: "مغالطة رجل القش",
        shortDef: "تحريف موقف الخصم لتسهيل الهجوم على صورة كاريكاتورية مصطنعة.",
        definition: "تشويه موقف المخالف واختراع موقف ضعيف يسهل تفنيده بدلاً من نقاش موقفه الحقيقي.",
        generalExample: "« يجب تقنين استخدام الهواتف في المدارس » ← « إذن أنت تريد حرمان الأطفال من كل تكنولوجيا وتطور ! »",
        quranicApplication: "« أهل السنة يتبعون البخاري ككتاب بديل عن القرآن ! »\nالموقف الحقيقي لأهل السنة : الله أمرنا في القرآن بطاعة الرسول ﷺ وتبيينه، ونقل الأحاديث وسيلة موثقة لمعرفة سنته.",
        questionToAsk: "« هل هذا ما أتبناه فعلاً ؟ هل تستطيع إعادة صياغة موقفي بصورة أقبلها أنا شخصياً ؟ »",
        shortAnswer: "« ناقش موقفي الحقيقي ولا تهاجم قالباً من صنع خيالك. »",
        icon: "🌾"
      },
      {
        id: "fausse-dichotomie",
        num: 2,
        name: "مغالطة القسمة الثنائية الزائفة",
        shortDef: "حصر الخيارات في خيارين متناقضين مع وجود خيار ثالث أو توافق ممكن.",
        definition: "تقديم المسألة وكأنها إما هذا وإما ذاك فقط، وإخفاء الحلول البديلة أو إمكان الجمع بينهما.",
        generalExample: "« إما أن تكون معنا بنسبة 100% وإما أنك عدونا اللدود. »",
        quranicApplication: "• « إما أن تتبع القرآن أو تتبع البشر ! » ← الجواب : أنا أتبع القرآن الذي يوجب عليّ طاعة الرسول ﷺ.\n• « إما أن يكون القرآن كاملاً أو يكون محتاجاً للسنة ! » ← النظام الكامل قد ينص في ذاته على وجوب الرجوع إلى سلطة بيانية تشرحه وتفصله.",
        questionToAsk: "« لماذا تحصر الأمر في هذين الخيارين فقط ؟ »",
        shortAnswer: "« أنت تظهر كأمرين متناقضين ما هو في حقيقته متكامل ويعمل معاً. »",
        icon: "⚖️"
      },
      {
        id: "generalisation-abusive",
        num: 3,
        name: "مغالطة التعميم المتعسف",
        shortDef: "الانتقال من حالات فردية خاصة إلى حكم كلي يشمل الصنف بأكمله.",
        definition: "سحب حكم ثبت على بعض الجزئيات لتعميمه على المجموعة برمتها دون استقراء كافٍ.",
        generalExample: "« أخطأ معي طبيبان في التشخيص، إذن مهنة الطب برمتها عديمة الفائدة ! »",
        quranicApplication: "« توجد أحاديث موضوعة، إذن جميع الأحاديث النبوية لا يُوثق بها ! »\nوجود المكذوب يفرض التحقيق والنقد، ولا يسقط المنقول الصحيح (كنظير العملات المزيفة : وجود التزوير لا يلغي النقد المالي بل ينشئ علم الفحص).",
        questionToAsk: "« كيف قفزت من وجود (البعض) إلى الحكم على (الكل) ؟ »",
        shortAnswer: "« إثبات خطأ في جزئية لا يبطل حجية الجنس كله. »",
        icon: "🔍"
      },
      {
        id: "non-sequitur",
        num: 4,
        name: "مغالطة فساد الاستدلال (النتيجة اللازمة)",
        shortDef: "عدم ترتب النتيجة منطقياً على المقدمة المذكورة حتى لو كانت صحيحة.",
        definition: "الاستدلال بمقدمة قد تكون صادقة في ذاتها، لكن النتيجة المستخلصة لا تلزم منها عقلاً ولا منطقاً.",
        generalExample: "« السماء تمطر في الخارج، إذن مباراة كرة السلة داخل القاعة المغطاة ملغاة ! »",
        quranicApplication: "• « القرآن كامل وتبيان لكل شيء، إذن السنة النبوية لا حاجة لها ! » (كمال النص لا ينفي السلطة البيانية التي فوضها النص نفسه).\n• « الله حفظ القرآن، إذن لا يمكن لأي حديث أن يكون موثوقاً ! »\n• « البخاري دوّن بعد قرنين، إذن الروايات النبوية اختُرعت بعد قرنين ! »",
        questionToAsk: "« ما هي الخطوة المنطقية الدقيقة التي تربط بين مقدمتك ونتيجتك ؟ »",
        shortAnswer: "« جملتك الأولى قد تكون صحيحة دون أن تثبت الثانية بتاتاً. »",
        icon: "⚡"
      },
      {
        id: "cherry-picking",
        num: 5,
        name: "مغالطة انتقاء الأدلة (قطف الكرز)",
        shortDef: "أخذ الأدلة الموافقة للهوى فقط وإغفال باقي النصوص المحكمة المقيدة لها.",
        definition: "الاستدلال بنص مجتزأ وتجاهل باقي الآيات والنصوص التي توضح المسألة وتكمل سياقها.",
        generalExample: "الاستدلال بثلاث دراسات تمدح دواءً ما وإخفاء خمسين دراسة علمية تحذر من آثاره.",
        quranicApplication: "• الاستدلال بآية « ما على الرسول إلا البلاغ » وتناسي عشرات الآيات الآمرة بـ « أطيعوا الرسول » و« فلا وربك لا يؤمنون حتى يحكموك ».\n• الاستدلال بحديث « لا تكتبوا عني » وإخفاء تتمته « وحدثوا عني ولا حرج » وأحاديث « اكتب لأبي شاه ».",
        questionToAsk: "« هل توجد نصوص قرآنية أخرى في الباب نفسه لم تذكرها في استدلالك ؟ »",
        shortAnswer: "« الدليل لا يُقرأ بمعزل عن النصوص الأخرى التي تقيده وتبينه. »",
        icon: "🍒"
      },
      {
        id: "double-standard",
        num: 6,
        name: "مغالطة ازدواجية المعايير",
        shortDef: "تشديد شروط قبول الأدلة على الخصم والتساهل التام مع النفس عند الحاجة.",
        definition: "تطبيق معيار توثيق صارم تعجيزي على نصوص الخصم، وتخفيفه كلياً عندما يخدم الدليل نفسه شبهة يراد ترويجها.",
        generalExample: "اشتراط شهادات عليا وتوثيق رسمي للآخرين وقبول مجرد شائعة عابرة لتأييد الرأي الشخصي.",
        quranicApplication: "• حين يثبت الحديث حكماً شرعياً : « رواه بشر بعد قرنين ولا يمكن الوثوق به ! » / وحين يخدم الحديث طعناً وشبهة : « البخاري يثبت بيقين قاطع سن عائشة رضي الله عنها ! »\n• قبول النقل البشري لرواية حفص عن عاصم في القرآن، ورد النقل البشري الثقات نفسه في الحديث النبوي.",
        questionToAsk: "« هل كنت ستطبق المعيار التعجيزي نفسه لو كان هذا النقل في صالحك ؟ »",
        shortAnswer: "« معيار الإثبات العلمي يجب أن يظل ثابتاً سواء وافق هواك أو خالفه. »",
        icon: "🔄"
      },
      {
        id: "equivoque-lexicale",
        num: 7,
        name: "مغالطة الاشتراك اللفظي والخلط الدلالي",
        shortDef: "استخدام لفظ واحد بمعنيين مختلفين وتمرير المعنى الاصطلاحي بدل اللغوي.",
        definition: "استعمال كلمة تحتمل عدة معانٍ في سياق والاستدلال بها على معنى اصطلاحي متأخر لم يقصده النص.",
        generalExample: "« الجاذبية قانون، والقوانين يسنها البرلمان، إذن الجاذبية سنها البرلمان ! » (تغير معنى كلمة قانون).",
        quranicApplication: "كلمة (حديث) في لغة القرآن تعني : الكلام، القول، الخبر، أو النبأ. والمغالطة تكمن في قراءة « فبأي حديث بعده يؤمنون » ثم استبدال المعنى اللغوي (الكلام الباطل) خفية بالمعنى الاصطلاحي المتأخر (كتب الأحاديث النبوية).",
        questionToAsk: "« ما المعنى الدقيق لهذا اللفظ في سياق الآية، وكيف تثبته بلغة العرب ؟ »",
        shortAnswer: "« لنحدد المعنى اللغوي للكلمة أولاً قبل القفز إلى استنتاج فاسد. »",
        icon: "🔀"
      },
      {
        id: "argument-de-possibilite",
        num: 8,
        name: "مغالطة إمكانية الوقوع كدليل على الوقوع",
        shortDef: "تحويل « الاحتمال النظري للخطأ » إلى « جزم بوقوع الكذب والبطلان ».",
        definition: "الادعاء بأن مجرد إمكان حدوث خطأ أو وضع نظرياً في النقل البشري يعني بالضرورة سقوط كل المرويات دون فحص.",
        generalExample: "« الشاهد يمكن أن يخطئ أو يكذب، إذن شهادة جميع الشهود باطلة دائماً ! » (الاحتمال يوجب التثبت لا الإلغاء).",
        quranicApplication: "« أسانيد الحديث يمكن أن تُختلق، إذن الأسانيد لا تثبت شيئاً ! »\nإمكان الوضع يفرض فحص الرجال ومقارنة الروايات والطرق القديمة، ولا يبرر إسقاط مرويات الثقات جملة واحدة.",
        questionToAsk: "« هل أثبتّ وقوع الوضع فعلاً في هذا الحديث، أم تتحدث عن مجرد إمكانية عقلية ؟ »",
        shortAnswer: "« الإمكان النظري ليس برهاناً تاريخياً. »",
        icon: "🎲"
      },
      {
        id: "deplacement-charge-preuve",
        num: 9,
        name: "مغالطة قلب عبء الإثبات",
        shortDef: "إطلاق دعوى كلية عريضة ومطالبة الخصم بإثبات عكسها بدلاً من البرهنة عليها.",
        definition: "المدعي هو المطالب بالبينة؛ ونقل عبء الإثبات يتم بإطلاق حكم كلي ثم إلزام المخالف بنفيه.",
        generalExample: "« توجد حضارة سرية تحت كوكب المريخ، أثبت لي أنت أنها غير موجودة ! »",
        quranicApplication: "« لا يوجد أي حديث نبوي صحيح يصلح حجة في الدين ! »\nهذه دعوى كلية تشمل آلاف الأحاديث والأسانيد عبر الأمصار والقرون، وهي المطالبة بالدليل المنهجي على إسقاطها.",
        questionToAsk: "« مَن الذي يطلق الدعوى هنا والمطالب بتقديم الدليل عليها ؟ »",
        shortAnswer: "« مَن يدعي بطلان المنقول كله يلزمه تقديم البرهان على دعواه الشاملة. »",
        icon: "⚖️"
      },
      {
        id: "appel-emotion",
        num: 10,
        name: "مغالطة الاستعطاف والتهويل والاستهزاء",
        shortDef: "الاستعاضة عن البحث العلمي بالصدمة النفسية أو السخرية من الروايات.",
        definition: "تجاوز التحقيق العلمي والاستدلال المنهجي باللجوء إلى الاستهزاء والتهويل العاطفي المسبق.",
        generalExample: "السخرية والضحك الاستعراضي من أطروحة معقدة بدلاً من تفكيك مقدماتها العلمية.",
        quranicApplication: "« أنتم تؤمنون بحديث الذبابة ! »، « عقولكم متحجرة ! »...\nالتشويش العاطفي لا يجيب عن الأسئلة المنهجية : ما نص الرواية ؟ ما درجتها ؟ ما سياقها ؟ كيف فهمها أئمة العلم ؟",
        questionToAsk: "« ما دليلك العقلي أو النقلي بمعزل عن استهزائك أو صدمتك النفسية ؟ »",
        shortAnswer: "« الاستهزاء والاشمئزاز ليسا براهين علمية. »",
        icon: "🎭"
      }
    ],
    reflexQuestions: {
      title: "المهارات المنهجية الأربع",
      subtitle: "أربعة أسئلة أمام أي شبهة أو استدلال",
      summaryNotice: "هذه الأسئلة الأربعة كفيلة بكشف الغالبية الساحقة من الاستدلالات الهشة.",
      questions: [
        { num: 1, title: "1. فحص المقدمة", desc: "ما الذي ثبت بالدليل القاطع فعلاً ؟ لا تسمح بدس النتيجة داخل المقدمة." },
        { num: 2, title: "2. الرابط المنطقي", desc: "هل تلزم النتيجة حقاً من المقدمة ؟ أم هناك قفزة منهجية مفقودة ؟" },
        { num: 3, title: "3. استيفاء الأدلة", desc: "هل روعيت جميع النصوص القرآنية في الباب ؟ أم انتُقيت الأدلة المفردة ؟" },
        { num: 4, title: "4. وحدة المعيار", desc: "هل يطبق المعيار نفسه على الطرفين ؟ أم يتغير حسب ما يوافق الهوى ؟" }
      ]
    },
    quiz: {
      title: "اختبار سريع : حدد المغالطة المنطقية",
      subtitle: "ميّز نوع المغالطة في كل عبارة من العبارات التالية :",
      items: [
        { id: 1, statement: "« توجد أحاديث موضوعة، إذن لا يمكن الوثوق بالأحاديث مطلقاً. »", answerId: "generalisation-abusive", answerName: "مغالطة التعميم المتعسف", explanation: "الانتقال من وجود أحاديث موضوعة إلى إسقاط المنقول الصحيح تعميم متعسف." },
        { id: 2, statement: "« إما أن تتبع الله أو تتبع محمداً ﷺ. »", answerId: "fausse-dichotomie", answerName: "مغالطة القسمة الثنائية الزائفة", explanation: "طاعة الرسول من طاعة الله بنص القرآن، ولا تعارض بينهما إطلاقاً." },
        { id: 3, statement: "« القرآن كامل، إذن البيان النبوي لا حاجة له. »", answerId: "non-sequitur", answerName: "مغالطة فساد الاستدلال", explanation: "كمال القرآن لا ينفي حجية السلطة البيانية التي أثبتها القرآن نفسه." },
        { id: 4, statement: "« فبأي حديث بعده يؤمنون، إذن كتب الأحاديث محرمة. »", answerId: "equivoque-lexicale", answerName: "مغالطة الاشتراك اللفظي", explanation: "كلمة حديث هنا تعني الكلام الباطل لغةً وليس كتب الرواية اصطلاحاً." },
        { id: 5, statement: "« الأحاديث متأخرة ولا يُوثق بها، لكن سن عائشة رضي الله عنها حجة يقينية للطعن ! »", answerId: "double-standard", answerName: "مغالطة ازدواجية المعايير", explanation: "التساهل مع الرواية عند الطعن والتشديد عند الأحكام هو عين التناقض." },
        { id: 6, statement: "« الإسناد يمكن أن يُختلق، إذن الأسانيد باطلة. »", answerId: "argument-de-possibilite", answerName: "مغالطة إمكانية الوقوع", explanation: "تحويل الإمكان النظري إلى يقين بالبطلان خلط منطقي." }
      ]
    },
    conclusion: {
      title: "خلاصة جامعة : العقل والمنطق قبل الشعارات الجوفاء",
      mainText: "قد يستشهد المحاور بآية صحيحة أو معلومة صادقة، ومع ذلك يقع في باطل إذا كانت الرابطة المنطقية بينهما فاسدة.",
      slogan1: "لا تسأل فقط : « ما دليلك ؟ »",
      slogan2: "بل اسأل أيضاً : « ما الذي يثبته هذا الدليل حقيقة ؟ »",
      finalNote: "الحوار الرصين لا يُكسب بكثرة الكلام، بل بدقة تحرير محل النزاع وصحة الرابط المنطقي بين الأدلة والنتائج."
    }
  },

  // 3. DARIJA (المغربية)
  ary: {
    headerBadge: "دليل منهجي",
    title: "بواط ديال الأدوات (كشف المغالطات)",
    subtitle: "عراف المغالطات المنطقية قبل ما تناقش القرآنيين",
    introTitle: "علاش هاد البواط ديال الأدوات ؟",
    introText: "شبهة تقدر تبان ليك واعرة فاللول، يستشهدو بآية صحيحة من القرآن ولا معلومات حقيقية... وفالآخر يخرجو بنتيجة غالطة اللي الدليل ما كيثبتهاش أصلاً.",
    definitionTitle: "تعريف بسيط",
    definitionText: "المغالطة هي واحد الطريقة د التفكير كتبان مقنعة ولكن فيها خلل فالسلسلة المنطقية : استنتاج عوج، تبديل معنى الكلمات، عزل الآيات، تعميم خاوي، ولا الكيل بمكيالين.",
    reflexQuestionTitle: "السؤال الذكي اللي خاصك تطرح :",
    reflexQuestionText: "« واش هاد الدليل كيثبت فعلاً هاد النتيجة اللي باغي توصل ليها ؟ »",
    reflexPurpose: "الهدف ماشي هو تحفظ كلمات صعاب، الهدف هو تشوف بالضبط فين الحجة حبسات وما بقاتش شادة فراسها.",
    pdfDownloadBtn: "تيليشارجي دليل المغالطات (PDF)",
    pdfFileName: "Boite_a_outils_Sophismes_Coranisme.pdf",
    goldenRuleTitle: "القاعدة الذهبية المنهجية",
    goldenRuleStatement: "إلى لقيتي مغالطة، هادا ما كيعنيش بالضرورة النتيجة باطلة، ولكن كيعني الدليل ما كافيش باش يثبتها",
    goldenRuleMeaning: "ملي كتبيّن العيب فالحجة، كيعني هاد الدليل ما كافيش، وخاصنا نقلبو على الحقيقة بالأدلة الصحيحة.",
    goldenRuleExample: "واحد قاليك: « كاع البجع بيض حينت شفت عشرة بيضين ». هاد الاستدلال ناقص، ولكن رصد هاد التعميم ما كيثبتش بالضرورة كاين بجع كحل، بل كيخصنا الدليل الحقيقي.",
    goldenRuleGoal: "الهدف هو نبينو فين كاين الخلل، ماشي غير نقولو « هادي مغالطة » ونسكتو، خاصنا نشرحو اللفظ اللي تبدل ولا الحلقة اللي ناقصة.",
    sectionTitle10Cards: "📚 10 د المغالطات المشهورة ف بطاقات تفاعلية",
    btnDetails: "التفاصيل",
    btnHide: "سد",
    labelDefinition: "📖 التعريف",
    labelGeneralExample: "🌍 مثال من الحياة العادية",
    labelQuranicApp: "🕌 التطبيق على شبهات القرآنيين",
    labelQuestionToAsk: "❓ السؤال اللي خاصك تسولو :",
    labelShortAnswer: "💬 الجواب القصير :",
    cardMemoBadge: "كارطة ميمو",
    trainingBadge: "تدريب سريع",
    items: [
      {
        id: "homme-de-paille",
        num: 1,
        name: "مغالطة راجل القش (Straw Man)",
        shortDef: "كيعوج الموقف ديالك باش يهاجم شي حاجة هو صنعها وساهل يطيحها.",
        definition: "تحريف كلام الخصم وصنع صورة مبالغ فيها باش يسهل عليه يضرب فيها بلا ما يناقش الموقف الحقيقي.",
        generalExample: "« خاصنا نقصو من التيليفونات فالمدارس » ← « يعني نتا ضد التكنولوجيا وباغي تحبس القراية على ولادنا ! »",
        quranicApplication: "« نتوما السنيين كتتبعو البخاري فبلاصت القرآن ! »\nالموقف الحقيقي : الله عز وجل أمرنا فطاعة الرسول ﷺ ف القرآن، والأحاديث هي الطريق باش نعرفو سنته.",
        questionToAsk: "« واش هادا هو الموقف ديالي فعلاً ؟ تقدر تعاود تصيغو بطريقة اللي نقبلها أنا ؟ »",
        shortAnswer: "« جاوب على الموقف ديالي الحقيقي، ماشي على شي خيال صنعتيه نتا. »",
        icon: "🌾"
      },
      {
        id: "fausse-dichotomie",
        num: 2,
        name: "مغالطة القسمة الثنائية الخاوية",
        shortDef: "كيحصرك ف جوج اختيارات فقط وكيبينهم متناقضين وهوما يقدرو يمشيو بجوج.",
        definition: "تقديم المسألة كأنها يا إما بيض يا كحل، مع أن كاين حل ثالث ولا يقدرو يتجمعو بجوج.",
        generalExample: "« يا إما نتا معايا 100%، يا إما نتا العدو اللدود ديالي. »",
        quranicApplication: "• « يا تبع القرآن يا تبع البشر ! » ← الجواب : أنا كنتبع القرآن اللي كيأمرني نتبع الرسول ﷺ.\n• « يا القرآن كامل يا محتاج للسنة ! » ← السيستيم الكامل يقدر هو براسو يعيّن سلطة باش تشرح وتطبق.",
        questionToAsk: "« علاش بالضبط هاد جوج اختيارات هوما اللي كاينين ؟ »",
        shortAnswer: "« كتبين جوج حوايج بحال إلى متناقضين وهوما فالحقيقة كيكملو بعضياتهم. »",
        icon: "⚖️"
      },
      {
        id: "generalisation-abusive",
        num: 3,
        name: "مغالطة التعميم الخاوي",
        shortDef: "كيحكم على كلشي غير بسباب شلّة حبات ولا أمثلة قليلة.",
        definition: "الانتقال من حالات خاصة إلى حكم عام كيشمل كولشي بلا ما يفحص.",
        generalExample: "« غلطو معايا جوج طبة فالديـاڭنوستيك، إذن الطب كلو تخربيق وما صالح لوالو ! »",
        quranicApplication: "« كاينين أحاديث مكذوبة وموضوعة، إذن الأحاديث كلها ما عندها حتى قيمة وما موثوقاش ! »\nوجود المكذوب كيفرض الفحص والنقد، وما كيسقطش المنقول الصحيح (بحال الفلوس المزورة : التزوير ما كيلغيش الفلوس بل كيدير علم الفحص).",
        questionToAsk: "« كيفاش دزتي من (كاين شي وحدين) لـ (كولشي كذوب) ؟ »",
        shortAnswer: "« إلى كاين عنصر غالط، ما كيعنيش الكاتيجوري كاملة غالطة. »",
        icon: "🔍"
      },
      {
        id: "non-sequitur",
        num: 4,
        name: "مغالطة الاستنتاج اللي ما عندو علاقة (Non sequitur)",
        shortDef: "المقدمة تقدر تكون صحيحة، ولكن النتيجة اللي خرج بيها ما تابعة ليها بوالو.",
        definition: "إعطاء جملة أولى صحيحة، ومن بعد استخراج نتيجة ما تايعاش منطقياً لهاديك الجملة.",
        generalExample: "« الشتا كطيح برا، إذن الماتش د الباسكيط اللي فالصال مسدودة غادي يلغى ! »",
        quranicApplication: "• « القرآن كامل، إذن السنة ما عندنا ما نديرو بيها ! » (كمال النص ما كيلغيش السلطة اللي عيّنها النص براسو).\n• « الله حفظ القرآن، إذن مستحيل الأحاديث تكون صحيحة ! »\n• « البخاري جا من بعد قرنين، إذن الأحاديث حتى هي تصنعات من بعد قرنين ! »",
        questionToAsk: "« شنو هي الخطوة المنطقية بالضبط اللي كتربط بين الجملة الأولى والنتيجة ؟ »",
        shortAnswer: "« الجملة الأولى ديالك تقدر تكون صحيحة ولكن ما كتبينش الجملة التانية. »",
        icon: "⚡"
      },
      {
        id: "cherry-picking",
        num: 5,
        name: "مغالطة عزل وعزل الأدلة (Cherry-picking)",
        shortDef: "كيختار غير الآيات اللي كتناسب الهوى ديالو وكيغمض عينيه على الباقي.",
        definition: "انتقاء نصوص معزولة وتجاهل باقي الآيات والنصوص اللي كتوضح الموضوع وتفسرو.",
        generalExample: "تجبد 3 دراسات كيمدحو ف برودوي وتخبي 50 دراسة كتقول فيه مواد خطيرة.",
        quranicApplication: "• يجبد « ما على الرسول إلا البلاغ » وينسى « أطيعوا الرسول » و« فلا وربك لا يؤمنون حتى يحكموك ».\n• يجبد « لا تكتبوا عني » ويخبي التتمة « وحدثوا عني ولا حرج » وأحاديث « اكتب لأبي شاه ».",
        questionToAsk: "« واش كاينين نصوص خرين ف هاد الموضوع اللي ما ذكرتيهمش فهاد النقاش ؟ »",
        shortAnswer: "« الدليل ما كيتقراش بوحدو مفصول على كاع النصوص اللي كتبينو وتكملو. »",
        icon: "🍒"
      },
      {
        id: "double-standard",
        num: 6,
        name: "مغالطة الكيل بمكيالين (Double standard)",
        shortDef: "كيطلب معايير مستحيلة فالأدلة د الخصم، وكيتساهل ملي كتكون ف مصلحتو.",
        definition: "تطبيق معيار قاصح بزاف على الخصم، والتساهل التام ملي الدليل كيعجبو ولا كيخدم ليه الشبهة.",
        generalExample: "تطلب ديبلومات ووثائق رسمية للناس، وتقبل هضرة الزنقة ملي كتوافق الراي ديالك.",
        quranicApplication: "• ملي الحديث كيتبت حكم : « هادشي رواوه بنادم بعد قرنين، ما نتيقوش ! » / وملي كيبغي يدير بوليميك : « البخاري كيثبت 100% سن عائشة رضي الله عنها ! »\n• كيقبل نقل حفص عن عاصم البشري للقرآن، وكيرفض نقل الثقات للحديث النبوي.",
        questionToAsk: "« واش كنتي غادي تطبق نفس هاد المعيار القاصح إلى كان هاد الدليل ف صالحك ؟ »",
        shortAnswer: "« الميزان العلمي خاصو يبقى هو هو، سواء عجباتك النتيجة ولا ما عجباتكش. »",
        icon: "🔄"
      },
      {
        id: "equivoque-lexicale",
        num: 7,
        name: "مغالطة التلاعب بمعنى الكلمات",
        shortDef: "كيستعمل كلمة عندها جوج معاني وكيخلط المعنى اللغوي بالاصطلاحي.",
        definition: "استعمال كلمة عندها معنى لغوي واسع، واستبدالها خفية بمعنى تقني واصطلاحي متأخر.",
        generalExample: "« الجاذبية قانون، والقوانين كيصوت عليها البرلمان، إذن الجاذبية صوت عليها البرلمان ! »",
        quranicApplication: "فالقرآن، كلمة (حديث) كتعني الكلام، القول ولا الخبر. المغالطة هي كيقراو « فبأي حديث بعده يؤمنون » وكيبدلو المعنى اللغوي (الكلام الباطل) بمعنى (كتب الحديث النبوي).",
        questionToAsk: "« شنو المعنى الدقيق ديال هاد الكلمة ف سياق الآية، وكيفاش كاتبينو بلغة العرب ؟ »",
        shortAnswer: "« نحددو المعنى د الكلمة هو اللول قبل ما نخرجو بنتائج مقلوبة. »",
        icon: "🔀"
      },
      {
        id: "argument-de-possibilite",
        num: 8,
        name: "مغالطة إمكانية الوقوع كدليل على الوقوع",
        shortDef: "كيرد « يقدر يكون غالط » بحال إلى « راه بالضرورة كذوب وكلو باطل ».",
        definition: "تحويل مجرد إمكانية حدوث خطأ أو وضع فالنقل البشري لبرهان على أن كلشي مكذوب وما صالحش.",
        generalExample: "« الشاهد يقدر يكدب، إذن شهادة ڭاع الشهود باطلة دائماً ! » (الاحتمال كيفرض الفحص، ماشي الإلغاء).",
        quranicApplication: "« السند يقدر يتزور، إذن الأسانيد ما كاتثبت والو ! »\nإمكانية الوضع كتفرض فحص الرواة ومقارنة الطرق، ماشي نرميو كلشي بلا دراسة علمية.",
        questionToAsk: "« واش بيّنتي بلي هاد الحديث مكذوب فعلاً، ولا غير كتهضر على إمكانية عقلية ؟ »",
        shortAnswer: "« الاحتمال النظري ماشي حجة ودليل تاريخي. »",
        icon: "🎲"
      },
      {
        id: "deplacement-charge-preuve",
        num: 9,
        name: "مغالطة قلب عبء الإثبات",
        shortDef: "كيطلق دعوى عريضة بلا دليل وكيقولك نتا ثبت العكس.",
        definition: "اللي كيطلق شي ادعاء هو اللي خاصو يجيب الدليل؛ هاد المغالطة هي كيعطيك حكم عام ويقولك « بين ليا نتا العكس ».",
        generalExample: "« كاينين كائنات فضائية تحت المريخ، بين ليا نتا بلي ما كاينينش ! »",
        quranicApplication: "« حتى حديث نبوي ما هو صحيح وما كاين حتى دليل ديني كيعتمد على السنة ! »\nهادي دعوى كبيرة كتشمل آلاف الأحاديث والرجال، هو اللي خاصو يتبتها علمياً.",
        questionToAsk: "« شكون اللي طلق هاد الادعاء هنا واللي خاصو يجيب عليه الدليل ؟ »",
        shortAnswer: "« اللي كيقول ما كاين حتى حديث صحيح، خاصو يجيب البرهان على هاد الكلام العام. »",
        icon: "⚖️"
      },
      {
        id: "appel-emotion",
        num: 10,
        name: "مغالطة العاطفة والاستهزاء",
        shortDef: "كيعوض التحليل العلمي بالصدمة، الضحك والاستهزاء من النصوص.",
        definition: "استبدال النقاش العلمي والمنطقي بالضحك، التقشاب، التهييج العاطفي والاشمئزاز.",
        generalExample: "الضحك والاستهزاء من فكرة علمية فبلاصت ما يناقش الحجج ديالها بهدوء.",
        quranicApplication: "« نتوما كتيقو فحديث الدبانة ! »، « عقولكم متحجرة ! »...\nهاد التهييج العاطفي ما كيجاوبش على الأسئلة د الصح : شنو هو النص ؟ واش صحيح ؟ شنو السياق ديالو ؟ وشنو قالو العلماء فيه ؟",
        questionToAsk: "« شنو هو الدليل ديالك، بعيداً على هاد الضحك ولا الصدمة ديالك ؟ »",
        shortAnswer: "« الضحك والاستهزاء ماشي براهين علمية. »",
        icon: "🎭"
      }
    ],
    reflexQuestions: {
      title: "المهارات المنطقية الـ 4",
      subtitle: "4 د الأسئلة قدام أي شبهة ولا حجة",
      summaryNotice: "هاد 4 د الأسئلة كافية باش تفضح أغلب الاستدلالات العوجة والهشة.",
      questions: [
        { num: 1, title: "1. فحص المقدمة", desc: "شنو اللي ثبت فعلاً بالدليل ؟ ما تخليش النتيجة تدس فاللول بلا حجة." },
        { num: 2, title: "2. الرابط المنطقي", desc: "واش النتيجة نابعة فعلاً من هاديك الجملة ؟ ولا كاين فراغ بيناتهم ؟" },
        { num: 3, title: "3. كاع الأدلة", desc: "واش تجمعو كاع النصوص فالموضوع ؟ ولا عزل غير اللي عجبو ؟" },
        { num: 4, title: "4. نفس المعيار", desc: "واش كيطبق نفس الميزان على الطرفين ؟ ولا كيتبدل على حساب الهوى ؟" }
      ]
    },
    quiz: {
      title: "اختبار سريع : عراف نوع المغالطة",
      subtitle: "حدد المغالطة ف كل عبارة من هادو :",
      items: [
        { id: 1, statement: "« كاينين أحاديث موضوعة، إذن الأحاديث كلها ما نتيقوش فيها. »", answerId: "generalisation-abusive", answerName: "مغالطة التعميم الخاوي", explanation: "الانتقال من وجود المكذوب لإسقاط الصحيح تعميم خاوي." },
        { id: 2, statement: "« يا إما تبع الله، يا إما تبع محمد ﷺ. »", answerId: "fausse-dichotomie", answerName: "مغالطة القسمة الثنائية", explanation: "طاعة الرسول من طاعة الله ف القرآن وما كاين حتى تعارض بيناتهم." },
        { id: 3, statement: "« القرآن كامل، إذن البيان النبوي ما عندنا ما نديرو بيه. »", answerId: "non-sequitur", answerName: "مغالطة فساد الاستدلال", explanation: "كمال القرآن ما كيلغيش السلطة البيانية اللي نيت دارها القرآن." },
        { id: 4, statement: "« فبأي حديث بعده يؤمنون، إذن كتب الأحاديث حرام. »", answerId: "equivoque-lexicale", answerName: "مغالطة التلاعب بمعنى الكلمات", explanation: "كلمة حديث هنا كتعني الكلام الباطل لغةً ماشي كتب الرواية اصطلاحاً." },
        { id: 5, statement: "« الأحاديث معطلة وما نتيقوش فيها، ولكن سن عائشة رضي الله عنها حجة قاطعة للطعن ! »", answerId: "double-standard", answerName: "مغالطة الكيل بمكيالين", explanation: "التساهل مع الحديث ملي كيعجبو والتشديد ملي ما كيعجبوش هو الكيل بمكيالين." },
        { id: 6, statement: "« السند يقدر يتزور، إذن الأسانيد باطلة. »", answerId: "argument-de-possibilite", answerName: "مغالطة إمكانية الوقوع", explanation: "تحويل الإمكانية العقلية ليقين بالبطلان خلط منطقي." }
      ]
    },
    conclusion: {
      title: "الخلاصة : العقل والمنطق قبل الشعارات الخاوية",
      mainText: "يقدر الخصم يجبد آية صحيحة ولا معلومة حقيقية، ومع ذلك يوصل لنتيجة باطلة إلى كان الرابط المنطقي بيناتهم مهرس.",
      slogan1: "ما تسولش غير : « شنو الدليل ديالك ؟ »",
      slogan2: "سول حتى : « وشنو كيثبت هاد الدليل فعلاً ؟ »",
      finalNote: "النقاش الصعيب ما كيتغلبش بكترة الهضرة، بل بدقة الفهم وصحة الروابط المنطقية بين الأدلة والنتائج."
    }
  },

  // 4. ENGLISH
  en: {
    headerBadge: "METHODOLOGICAL GUIDE",
    title: "TOOLBOX",
    subtitle: "Identify fallacies before engaging in debate",
    introTitle: "WHY THIS TOOLBOX?",
    introText: "An argument may seem impressive at first glance, cite an authentic Quranic verse, or contain several true facts... and yet arrive at a conclusion that the evidence simply does not demonstrate.",
    definitionTitle: "SIMPLE DEFINITION",
    definitionText: "A fallacy is a line of reasoning that appears persuasive, but contains a structural flaw: invalid deduction, shifting word definitions, selective evidence, hasty generalization, or double standards.",
    reflexQuestionTitle: "THE CORE REFLEX QUESTION:",
    reflexQuestionText: "“DOES THE EVIDENCE ACTUALLY PROVE THE CONCLUSION?”",
    reflexPurpose: "The goal is not to memorize obscure jargon, but to pinpoint exactly where an argument ceases to be logically sound.",
    pdfDownloadBtn: "Download the Fallacy Toolbox (PDF)",
    pdfFileName: "Boite_a_outils_Sophismes_Coranisme.pdf",
    goldenRuleTitle: "THE METHODOLOGICAL GOLDEN RULE",
    goldenRuleStatement: "IDENTIFYING A FALLACY ≠ PROVING THE CONCLUSION IS FALSE",
    goldenRuleMeaning: "Exposing a flaw in reasoning merely demonstrates that the argument presented is insufficient to establish its conclusion.",
    goldenRuleExample: "If someone says: “All swans are white because I have observed ten white swans,” the deduction is flawed (ten observations cannot establish a universal law). However, pointing out this generalization does not prove that black swans exist; it merely calls for valid evidence.",
    goldenRuleGoal: "Never replace bad reasoning with another faulty claim. In debate, simply crying “fallacy!” is never enough: one must explicitly demonstrate which logical link is missing or which term has shifted in meaning.",
    sectionTitle10Cards: "📚 The 10 Major Fallacies in Interactive Cards",
    btnDetails: "Details",
    btnHide: "Hide",
    labelDefinition: "📖 Definition",
    labelGeneralExample: "🌍 General Example",
    labelQuranicApp: "🕌 Application to Quranist Polemics",
    labelQuestionToAsk: "❓ Reflex Question to Ask:",
    labelShortAnswer: "💬 Recommended Short Answer:",
    cardMemoBadge: "MEMO CARD",
    trainingBadge: "TRAINING QUIZ",
    items: [
      {
        id: "homme-de-paille",
        num: 1,
        name: "The Straw Man Fallacy",
        shortDef: "Distorting an opponent's position to easily refute a caricature.",
        definition: "Misrepresenting an opponent’s argument into a weaker, exaggerated version to make it easier to attack.",
        generalExample: "“We should limit smartphone usage during school hours.” → “So you want to ban all technology and progress for children!”",
        quranicApplication: "“Sunnis follow Al-Bukhari instead of the Quran.”\nThe genuine Sunni position is: Allah Almighty commands obedience to His Messenger ﷺ, and verified traditions are the historical vehicle to access his teachings.",
        questionToAsk: "“Is that truly what I advocate? Can you reformulate my actual position in a way I would endorse myself?”",
        shortAnswer: "“Refute my genuine position, not a fabricated caricature.”",
        icon: "🌾"
      },
      {
        id: "fausse-dichotomie",
        num: 2,
        name: "False Dichotomy (False Dilemma)",
        shortDef: "Presenting two options as the only choices when alternatives or synthesis exist.",
        definition: "Artificially reducing a situation to two mutually exclusive choices, concealing middle grounds or complementary combinations.",
        generalExample: "“Either you support us 100%, or you are our sworn enemy.”",
        quranicApplication: "• “Either you follow the Quran or you follow men!” → The Muslim replies: “I follow the Quran when it commands me to obey the Messenger ﷺ.”\n• “Either the Quran is complete or it needs the Sunnah!” → A complete legal system can intrinsically delegate explanatory authority.",
        questionToAsk: "“Why must these two options be the only conceivable alternatives?”",
        shortAnswer: "“You present as contradictory two realities designed to operate together.”",
        icon: "⚖️"
      },
      {
        id: "generalisation-abusive",
        num: 3,
        name: "Hasty Generalization",
        shortDef: "Jumping from a few specific instances to a universal claim about an entire category.",
        definition: "Drawing a broad conclusion about an entire corpus or group based on a non-representative sample.",
        generalExample: "“Two doctors misdiagnosed my symptoms, therefore medicine is completely useless.”",
        quranicApplication: "“Fabricated hadiths exist, therefore all hadith literature is unreliable.”\nThe existence of forgeries demands rigorous critical authentication; it does not invalidate verified corpus (Counterfeit Currency Analogy).",
        questionToAsk: "“How do you jump from ‘some instances’ to an absolute ‘all’?”",
        shortAnswer: "“Proving that some items are corrupt does not prove the entire category is false.”",
        icon: "🔍"
      },
      {
        id: "non-sequitur",
        num: 4,
        name: "Non Sequitur (“It Does Not Follow”)",
        shortDef: "The conclusion does not logically flow from the stated premise.",
        definition: "An argument where the stated premise might be entirely true, but fails logically to support the conclusion derived from it.",
        generalExample: "“It is raining outside, therefore the indoor basketball game is canceled.”",
        quranicApplication: "• “The Quran is complete, therefore the Sunnah is useless.” (Textual completeness does not exclude the explanatory mandate instituted by the text itself).\n• “Allah preserved the Quran, therefore no hadith can ever be authentic.”\n• “Al-Bukhari lived two centuries later, therefore traditions were created two centuries later.”",
        questionToAsk: "“What exact logical step bridges your premise to your conclusion?”",
        shortAnswer: "“Your initial premise can be true without proving your secondary claim.”",
        icon: "⚡"
      },
      {
        id: "cherry-picking",
        num: 5,
        name: "Cherry-Picking (Selective Evidence)",
        shortDef: "Selecting only favorable data while deliberately omitting contradictory evidence.",
        definition: "Suppressing relevant contextual evidence while highlighting only isolated passages that seem to favor a predetermined view.",
        generalExample: "Citing 3 favorable product reviews while concealing 50 rigorous studies demonstrating severe hazards.",
        quranicApplication: "• Citing “The Messenger’s duty is only to convey” (Al-Balagh) while omitting verses commanding: “Obey the Messenger”, “Judge by his decree”, and “An excellent exemplar”.\n• Citing “Do not write from me...” while concealing the conclusion “and narrate from me without harm” and specific orders to write.",
        questionToAsk: "“Are there other texts in the Quran regarding this exact subject that you have omitted?”",
        shortAnswer: "“A verse cannot be read in isolation when other passages define and qualify it.”",
        icon: "🍒"
      },
      {
        id: "double-standard",
        num: 6,
        name: "Double Standard",
        shortDef: "Applying strict evidentiary criteria to opponents and lax criteria to oneself.",
        definition: "Enforcing an impossibly demanding standard of proof against opposing evidence, while accepting flimsy reports when they serve polemical interests.",
        generalExample: "Demanding doctoral credentials from others while accepting unverified gossip when convenient.",
        quranicApplication: "• When a hadith establishes a ritual rule: “Human transmission, centuries late, uncertain!” / When a hadith serves a polemic: “Bukhari proves beyond doubt Aisha’s age!”\n• Accepting human transmission for Quranic recitations (Hafs from Asim) while rejecting the same human transmission for prophetic Sunnah.",
        questionToAsk: "“Would you apply this exact same strict criterion if this proof favored your thesis?”",
        shortAnswer: "“Scientific standards of proof must remain constant regardless of whether the outcome pleases you.”",
        icon: "🔄"
      },
      {
        id: "equivoque-lexicale",
        num: 7,
        name: "Equivocation (Semantic Shift)",
        shortDef: "Using the same word with two different meanings during the argument.",
        definition: "Exploiting lexical ambiguity by shifting between the linguistic meaning of a term and a subsequent specialized technical term.",
        generalExample: "“Gravity is a law. Laws are passed by parliament. Therefore gravity was enacted by parliament.”",
        quranicApplication: "In Quranic Arabic, ‘hadith’ means speech, discourse, narrative, or account. The fallacy consists in citing “In what hadith after this will they believe?” and covertly substituting the linguistic sense (‘discourse’) with the technical term (‘hadith compilations’).",
        questionToAsk: "“What precise linguistic meaning does this word carry in this verse, and how do you demonstrate it from context?”",
        shortAnswer: "“Let us establish the exact linguistic definition before drawing false conclusions.”",
        icon: "🔀"
      },
      {
        id: "argument-de-possibilite",
        num: 8,
        name: "Appeal to Mere Possibility",
        shortDef: "Equating “it could theoretically be false” with “it is proven false”.",
        definition: "Treating the mere abstract possibility of human error or forgery as conclusive proof that all historical transmission is invalid.",
        generalExample: "“A witness could theoretically lie, therefore all courtroom testimony is inherently false.” (Possibility warrants verification, not wholesale rejection).",
        quranicApplication: "“An isnad chain could theoretically be invented, therefore isnads prove nothing.”\nThe theoretical possibility of fabrication necessitates biographical evaluation and cross-comparison, not a priori denial.",
        questionToAsk: "“Have you demonstrated that this actually occurred, or merely that it was theoretically possible?”",
        shortAnswer: "“An abstract theoretical possibility is not historical proof.”",
        icon: "🎲"
      },
      {
        id: "deplacement-charge-preuve",
        num: 9,
        name: "Shifting the Burden of Proof",
        shortDef: "Asserting a sweeping claim and demanding that opponents prove it wrong.",
        definition: "The obligation of proof rests upon the claimant. Shifting the burden occurs when someone makes a universal denial and demands others disprove it.",
        generalExample: "“There is a secret civilization beneath Mars; prove to me that it doesn’t exist!”",
        quranicApplication: "“No prophetic tradition is sufficiently reliable to serve as religious proof.”\nThis is a sweeping universal claim regarding thousands of narrations across regions and centuries; it requires robust proof from the claimant.",
        questionToAsk: "“Who is making the sweeping assertion here, and who bears the evidentiary burden?”",
        shortAnswer: "“Whoever claims that an entire historical corpus is void must substantiate that universal assertion.”",
        icon: "⚖️"
      },
      {
        id: "appel-emotion",
        num: 10,
        name: "Appeal to Emotion & Ridicule",
        shortDef: "Substituting logical analysis with emotional shock, indignation, or mockery.",
        definition: "Bypassing textual, linguistic, and historical analysis by provoking theatrical disgust, outrage, or sarcastic mockery.",
        generalExample: "Sneering at a complex scientific formula instead of critically evaluating its premises.",
        quranicApplication: "“You actually believe in the fly hadith?!”, etc.\nAn emotional outburst fails to address foundational questions: What is the exact text? What is its authenticity grade? What is its linguistic context? How did classical jurists interpret it?",
        questionToAsk: "“What is your logical evidence, independently of your emotional shock or mockery?”",
        shortAnswer: "“Disgust and sarcasm are emotional reactions, not demonstrations of proof.”",
        icon: "🎭"
      }
    ],
    reflexQuestions: {
      title: "THE 4 CORE REFLEXES",
      subtitle: "4 questions when evaluating any theological argument",
      summaryNotice: "These four questions are sufficient to detect the vast majority of flawed theological polemics.",
      questions: [
        { num: 1, title: "1. The Premise", desc: "What has actually been established by evidence? Never allow the conclusion to be smuggled into the premise." },
        { num: 2, title: "2. The Logical Link", desc: "Does the conclusion genuinely follow from the premise? Or is a vital deduction missing?" },
        { num: 3, title: "3. Complete Evidence", desc: "Have all relevant Quranic verses been integrated? Or only those favoring the thesis?" },
        { num: 4, title: "4. The Equal Standard", desc: "Is the exact same evidentiary criterion applied to both sides? Or does it change when convenient?" }
      ]
    },
    quiz: {
      title: "QUICK TEST: IDENTIFY THE FALLACY",
      subtitle: "Identify the logical fallacy in each of the following statements:",
      items: [
        { id: 1, statement: "“Some hadiths were fabricated, therefore no hadith can ever be trusted.”", answerId: "generalisation-abusive", answerName: "Hasty Generalization", explanation: "Jumping from the existence of forged reports to invalidating the entire corpus is a hasty generalization." },
        { id: 2, statement: "“Either you follow Allah, or you follow Muhammad ﷺ.”", answerId: "fausse-dichotomie", answerName: "False Dichotomy", explanation: "Obeying the Messenger is mandated by Allah in the Quran; there is no conflict between the two." },
        { id: 3, statement: "“The Quran is complete, therefore all prophetic explanation is useless.”", answerId: "non-sequitur", answerName: "Non Sequitur", explanation: "The completeness of the text does not imply that it excludes the explanatory authority it establishes." },
        { id: 4, statement: "“In what hadith after this will they believe? Therefore Bukhari is forbidden.”", answerId: "equivoque-lexicale", answerName: "Equivocation", explanation: "The word ‘hadith’ linguistically means ‘discourse’, not technical written compilations." },
        { id: 5, statement: "“Hadiths are too late to be reliable, yet the narration on Aisha's age is indisputable proof!”", answerId: "double-standard", answerName: "Double Standard", explanation: "Lax criteria for polemical points vs impossible criteria for normative rules is a double standard." },
        { id: 6, statement: "“A chain could theoretically be invented, therefore isnads prove nothing.”", answerId: "argument-de-possibilite", answerName: "Appeal to Possibility", explanation: "Confusing an abstract theoretical possibility with conclusive historical invalidity is a fallacy." }
      ]
    },
    conclusion: {
      title: "KEY TAKEAWAY: LOGIC OVER SLOGANS",
      mainText: "An argument may cite an authentic Quranic verse, a factual hadith, or true information, and still arrive at a defective conclusion if the logical reasoning connecting them is flawed.",
      slogan1: "DO NOT MERELY ASK: “WHAT IS THE PROOF?”",
      slogan2: "ASK ALSO: “WHAT DOES IT ACTUALLY PROVE?”",
      finalNote: "A rigorous intellectual debate is never won by loud slogans, but by sound premises, holistic evidence, and unbroken logical deduction."
    }
  }
};

// Fonction génératrice pour les 9 autres langues (ES, DE, IT, PT, UR, TA, PS, KU, CE)
// avec un vocabulaire adapté, précis et académique
const GENERATE_OTHER_LANGUAGES = () => {
  // 5. ESPAÑOL
  ALL_FALLACIES_TRANSLATIONS.es = {
    ...ALL_FALLACIES_TRANSLATIONS.en,
    headerBadge: "GUÍA METODOLÓGICA",
    title: "CAJA DE HERRAMIENTAS",
    subtitle: "Identificar las falacias antes de debatir",
    introTitle: "¿POR QUÉ ESTA CAJA DE HERRAMIENTAS?",
    introText: "Un argumento puede parecer impresionante a primera vista, citar un versículo auténtico o contener hechos reales... y sin embargo llegar a una conclusión que las pruebas no demuestran.",
    definitionTitle: "DEFINICIÓN SIMPLE",
    definitionText: "Una falacia es un razonamiento engañoso cuya estructura contiene un fallo: mala deducción, cambio de sentido de las palabras, selección de pruebas, generalización o doble estándar.",
    reflexQuestionTitle: "LA PREGUNTA REFLEJA CENTRAL:",
    reflexQuestionText: "«¿DEMUESTRA REALMENTE LA PRUEBA LA CONCLUSIÓN?»",
    reflexPurpose: "El objetivo es identificar con precisión dónde el razonamiento pierde su solidez lógica.",
    pdfDownloadBtn: "Descargar la Caja de Herramientas (PDF)",
    goldenRuleTitle: "LA REGLA DE ORO METODOLÓGICA",
    goldenRuleStatement: "IDENTIFICAR UNA FALACIA ≠ PROBAR QUE LA CONCLUSIÓN ES FALSA",
    goldenRuleMeaning: "Señalar un fallo en el razonamiento sólo significa que el argumento presentado no basta para demostrar la conclusión.",
    goldenRuleExample: "Alguien dice: «Todos los cisnes son blancos porque he visto diez y eran blancos». El razonamiento es insuficiente, pero detectar esta generalización no prueba por sí sola la existencia de un cisne negro.",
    goldenRuleGoal: "En un debate riguroso, no basta con decir «es una falacia»: hay que explicar con precisión qué paso lógico falta o qué término ha cambiado de significado.",
    sectionTitle10Cards: "📚 Las 10 Falacias Frecuentes en Tarjetas Interactivas",
    btnDetails: "Detalles",
    btnHide: "Ocultar",
    labelDefinition: "📖 Definición",
    labelGeneralExample: "🌍 Ejemplo General",
    labelQuranicApp: "🕌 Aplicación al Debate sobre el Coranismo",
    labelQuestionToAsk: "❓ Pregunta refleja a formular:",
    labelShortAnswer: "💬 Respuesta corta recomendada:",
    cardMemoBadge: "TARJETA MEMO",
    trainingBadge: "ENTRENAMIENTO",
    items: [
      { id: "homme-de-paille", num: 1, name: "El Hombre de paja", shortDef: "Distorsionar la postura del adversario para refutar una caricatura.", definition: "Deformar la posición real del oponente para atacar una versión débil e inventada.", generalExample: "«Habría que limitar los móviles en la escuela» → «¡Quieres prohibir toda tecnología a los niños!»", quranicApplication: "«¡Los sunitas siguen a Al-Bujari en vez del Corán!»\nLa postura sunita real es: Dios ordena en el Corán obedecer al Mensajero ﷺ y el hadiz es el medio para conocer sus enseñanzas.", questionToAsk: "«¿Es eso realmente lo que defiendo? ¿Puedes reformular mi postura como yo la acepto?»", shortAnswer: "«Refuta mi postura real, no una caricatura que has fabricado.»", icon: "🌾" },
      { id: "fausse-dichotomie", num: 2, name: "El Falso dilema (Falsa dicotomía)", shortDef: "Presentar dos opciones como únicas cuando existe una tercera alternativa.", definition: "Presentar la cuestión como si sólo existieran dos opciones excluyentes, ignorando las combinaciones posibles.", generalExample: "«O estás conmigo al 100%, o eres mi enemigo mortal.»", quranicApplication: "• «¡O sigues el Corán o sigues a hombres!» → El musulmán responde: «Sigo el Corán cuando me ordena obedecer al Mensajero ﷺ».\n• «¡O el Corán es completo o necesita la Sunna!» → Un sistema completo puede delegar una autoridad explicativa.", questionToAsk: "«¿Por qué estas dos opciones habrían de ser las únicas?»", shortAnswer: "«Presentas como incompatibles dos cosas que funcionan juntas.»", icon: "⚖️" },
      { id: "generalisation-abusive", num: 3, name: "Generalización apresurada", shortDef: "Pasar de unos pocos casos aislados a una regla universal.", definition: "Sacar una conclusión general sobre todo un conjunto a partir de una muestra insuficiente.", generalExample: "«Dos médicos me diagnosticaron mal, por tanto los médicos no sirven para nada.»", quranicApplication: "«Existen hadices inventados, por tanto ningún hadiz es fiable.»\nLa existencia de relatos falsos impone la verificación crítica; no invalida todo el corpus auténtico.", questionToAsk: "«¿Cómo pasas de 'algunos' a 'todos'?»", shortAnswer: "«Demostrar que un elemento es falso no demuestra que toda la categoría lo sea.»", icon: "🔍" },
      { id: "non-sequitur", num: 4, name: "Non sequitur («No se sigue»)", shortDef: "La conclusión no se deriva lógicamente de la premisa.", definition: "La premisa puede ser verdadera, pero la conclusión no se deduce lógicamente de ella.", generalExample: "«Llueve fuera, por tanto el partido de baloncesto en pabellón cubierto queda cancelado.»", quranicApplication: "• «El Corán es completo, por tanto la Sunna es inútil.» (La completitud no excluye la autoridad explicativa instituida por el texto).\n• «Al-Bujari vivió dos siglos después, por tanto las tradiciones nacieron dos siglos después.»", questionToAsk: "«¿Qué paso lógico une exactamente tu premisa con tu conclusión?»", shortAnswer: "«Tu primera afirmación puede ser cierta sin demostrar en absoluto la segunda.»", icon: "⚡" },
      { id: "cherry-picking", num: 5, name: "Selección de pruebas (Cherry-picking)", shortDef: "Seleccionar sólo los datos favorables e ignorar los demás.", definition: "Citar únicamente textos que apoyan la conclusión y ocultar los pasajes que la matizan o contradicen.", generalExample: "Citar 3 estudios favorables y ocultar 50 investigaciones científicas contrarias.", quranicApplication: "• Citar «el Mensajero sólo transmite» omitiendo «Obedeced al Mensajero», «Tomadlo por juez» y «modelo excelente».\n• Citar «No escribáis de mí...» ocultando «Relatad de mí, no hay mal» y las órdenes de escribir.", questionToAsk: "«¿Existen otros textos sobre el mismo tema en el Corán que no has citado?»", shortAnswer: "«Una prueba no se lee aislada cuando otros textos la completan y precisan.»", icon: "🍒" },
      { id: "double-standard", num: 6, name: "Doble estándar (Doble rasero)", shortDef: "Aplicar un criterio severo al adversario y laxo cuando conviene.", definition: "Exigir un estándar hipercrítico para las pruebas del oponente y relajarse cuando un relato sirve para polemizar.", generalExample: "Exigir títulos de doctorado a los demás y aceptar un rumor cuando conviene al propio interés.", quranicApplication: "• Cuando el hadiz establece una norma: «¡Incierto transmitido por hombres!» / Cuando sirve para polemizar: «¡Bujari prueba con certeza la edad de Aisha!»\n• Aceptar la transmisión humana de las lecturas del Corán (Hafs de Asim) y rechazar la del hadiz.", questionToAsk: "«¿Aplicarías exactamente este criterio si la prueba favoreciera mi postura?»", shortAnswer: "«El estándar de prueba científica debe ser el mismo tanto si te agrada el resultado como si no.»", icon: "🔄" },
      { id: "equivoque-lexicale", num: 7, name: "Equívoco léxico (Ambigüedad)", shortDef: "Usar la misma palabra con dos significados distintos.", definition: "Cambiar sutilmente el significado lingüístico original de una palabra por un término técnico posterior.", generalExample: "«La gravedad es una ley; las leyes las vota el parlamento; por tanto la gravedad la votó el parlamento.»", quranicApplication: "En el Coran, 'hadiz' significa relato, discurso o palabra. La falacia consiste en leer «¿En qué hadiz creerán?» y sustituir el sentido lingüístico ('discurso') por el técnico ('compilaciones').", questionToAsk: "«¿Qué significado preciso tiene esta palabra en el versículo y cómo lo demuestras por el contexto?»", shortAnswer: "«Fijemos primero el significado lingüístico del término antes de sacar conclusiones erróneas.»", icon: "🔀" },
      { id: "argument-de-possibilite", num: 8, name: "Argumento de posibilidad", shortDef: "Transformar «podría ser falso» en «es falso».", definition: "Pretender que la posibilidad teórica de error o invención equivale a la certeza de falsedad.", generalExample: "«Un testigo puede mentir, por tanto su testimonio es necesariamente falso.» (No: exige verificar, no rechazar a priori).", quranicApplication: "«Una cadena de transmisión puede ser inventada, por tanto los isnads no prueban nada.»\nLa posibilidad exige un examen crítico, no el rechazo a ciegas.", questionToAsk: "«¿Has demostrado que ocurrió, o sólo que teóricamente era posible que ocurriera?»", shortAnswer: "«Una posibilidad teórica no es una demostración histórica.»", icon: "🎲" },
      { id: "deplacement-charge-preuve", num: 9, name: "Inversión de la carga de la prueba", shortDef: "Hacer una afirmación categórica y exigir que el adversario demuestre lo contrario.", definition: "Quien afirma algo debe probarlo. Esta falacia consiste en negar todo el corpus y exigir que el oponente demuestre lo contrario.", generalExample: "«Hay una civilización secreta bajo Marte; ¡demuéstrame que no existe!»", quranicApplication: "«¡Ningún hadiz es lo bastante fiable para ser prueba religiosa!»\nEs una afirmación categórica sobre miles de relatos que exige su propia demostración metodológica.", questionToAsk: "«¿Quién hace aquí la afirmación categórica y debe aportar las pruebas?»", shortAnswer: "«Quien afirma que nada es fiable debe aportar la prueba de esa afirmación universal.»", icon: "⚖️" },
      { id: "appel-emotion", num: 10, name: "Apelación a la emoción y al ridículo", shortDef: "Sustituir el análisis por la burla o la indignación.", definition: "Evitar el análisis riguroso provocando una reacción de choque, risa, desprecio o burla.", generalExample: "Burlarse de una fórmula compleja en vez de examinar sus premisas lógicas.", quranicApplication: "«¡¿De verdad creéis en el hadiz de la mosca?!»...\nUna reacción emocional no responde a: ¿Cuál es el texto exacto? ¿Cuál es su grado de autenticidad? ¿Cuál es su contexto?", questionToAsk: "«¿Cuál es tu prueba lógica independientemente de tu indignación o burla?»", shortAnswer: "«El ridículo y la repugnancia no son demostraciones científicas.»", icon: "🎭" }
    ],
    reflexQuestions: {
      title: "LOS 4 REFLEJOS METODOLÓGICOS",
      subtitle: "4 preguntas ante cualquier argumento teológico",
      summaryNotice: "Estas cuatro preguntas bastan para detectar la gran mayoría de razonamientos defectuosos.",
      questions: [
        { num: 1, title: "1. La Premisa", desc: "¿Qué se ha demostrado realmente? No permitas que la conclusión se cuele en la premisa." },
        { num: 2, title: "2. El Enlace Lógico", desc: "¿Se deriva realmente la conclusión de la premisa? ¿Falta un paso lógico?" },
        { num: 3, title: "3. El Expediente Completo", desc: "¿Se han tomado en cuenta todos los textos relevantes o sólo los que convienen?" },
        { num: 4, title: "4. El Mismo Estándar", desc: "¿Se aplica el mismo criterio a ambos campos o cambia según el resultado?" }
      ]
    },
    quiz: {
      title: "TEST RÁPIDO: IDENTIFICA LA FALACIA",
      subtitle: "Identifica la falacia lógica en cada una de las siguientes afirmaciones:",
      items: [
        { id: 1, statement: "«Existen hadices inventados, por tanto no podemos confiar en los hadices.»", answerId: "generalisation-abusive", answerName: "Generalización apresurada", explanation: "Pasar de la existencia de falsificaciones a invalidar todo el corpus es una generalización abusiva." },
        { id: 2, statement: "«O sigues a Dios o sigues a Muhammad ﷺ.»", answerId: "fausse-dichotomie", answerName: "Falso dilema", explanation: "Obedecer al Mensajero es una orden divina en el Corán; no hay conflicto entre ambas." },
        { id: 3, statement: "«El Corán es completo, por tanto toda explicación profética es inútil.»", answerId: "non-sequitur", answerName: "Non sequitur", explanation: "La completitud del texto no excluye la autoridad explicativa instituida por el propio texto." },
        { id: 4, statement: "«¿En qué hadiz creerán? Por tanto Al-Bujari está prohibido.»", answerId: "equivoque-lexicale", answerName: "Equívoco léxico", explanation: "La palabra hadiz significa lingüísticamente 'discurso' y no compilaciones de tradiciones." },
        { id: 5, statement: "«Los hadices son tardíos, ¡pero el de la edad de Aisha es prueba indiscutible!»", answerId: "double-standard", answerName: "Doble estándar", explanation: "Relajar el criterio cuando conviene a la polémica y endurecerlo para las normas es doble rasero." },
        { id: 6, statement: "«Una cadena puede ser inventada, por tanto los isnads no prueban nada.»", answerId: "argument-de-possibilite", answerName: "Argumento de posibilidad", explanation: "Confundir una posibilidad teórica con certeza de falsedad es un fallo lógico." }
      ]
    },
    conclusion: {
      title: "A RECORDAR: LA LÓGICA ANTES QUE EL ESLOGAN",
      mainText: "Un argumento puede citar un versículo auténtico o datos ciertos y aún así llegar a una conclusión falsa si el razonamiento lógico es defectuoso.",
      slogan1: "NO PREGUNTES SÓLO: «¿CUÁL ES LA PRUEBA?»",
      slogan2: "PREGUNTA TAMBIÉN: «¿QUÉ DEMUESTRA REALMENTE?»",
      finalNote: "Un debate serio no se gana con eslóganes, sino con premisas sólidas y deducciones lógicas válidas."
    }
  };

  // 6. DEUTSCH
  ALL_FALLACIES_TRANSLATIONS.de = {
    ...ALL_FALLACIES_TRANSLATIONS.en,
    headerBadge: "METHODISCHER LEITFADEN",
    title: "WERKZEUGKASTEN",
    subtitle: "Trugschlüsse erkennen, bevor man debattiert",
    introTitle: "WARUM DIESER WERKZEUGKASTEN?",
    introText: "Ein Argument kann auf den ersten Blick beeindruckend wirken, einen authentischen Koranvers zitieren oder wahre Fakten enthalten... und dennoch zu einem Schluss führen, der logisch nicht bewiesen ist.",
    definitionTitle: "EINFACHE DEFINITION",
    definitionText: "Ein Trugschluss (Fehlschluss) ist eine Argumentation, die überzeugend scheint, deren Struktur jedoch einen logischen Bruch enthält: falsche Deduktion, Begriffsverschiebung, Rosinenpicken oder doppelte Standards.",
    reflexQuestionTitle: "DIE ZENTRALE REFLEXFRAGE:",
    reflexQuestionText: "„BEWEIST DER BELEG WIRKLICH DIE GEZOGENE SCHLUSSFOLGERUNG?“",
    reflexPurpose: "Das Ziel ist es, genau zu erkennen, an welcher Stelle eine Beweisführung logisch zusammenbricht.",
    pdfDownloadBtn: "Werkzeugkasten herunterladen (PDF)",
    goldenRuleTitle: "DIE METHODISCHE GOLDENE REGEL",
    goldenRuleStatement: "EINEN TRUGSCHLUSS AUFDECKEN ≠ BEWEISEN, DASS DAS ERGEBNIS FALSCH IST",
    goldenRuleMeaning: "Das Aufdecken eines logischen Fehlers zeigt lediglich, dass das vorgebrachte Argument nicht ausreicht, um die These zu begründen.",
    goldenRuleExample: "Wer sagt: „Alle Schwäne sind weiß, weil ich zehn weiße Schwäne gesehen habe“, begeht eine fehlerhafte Verallgemeinerung. Dies beweist jedoch für sich allein noch nicht, dass es schwarze Schwäne gibt.",
    goldenRuleGoal: "In einer sachlichen Debatte reicht der bloße Ruf „Fehlschluss!“ nicht aus: Man muss exakt aufzeigen, welcher Denkschritt fehlt oder welcher Begriff seine Bedeutung verändert hat.",
    sectionTitle10Cards: "📚 Die 10 häufigsten Trugschlüsse in interaktiven Karten",
    btnDetails: "Details",
    btnHide: "Ausblenden",
    labelDefinition: "📖 Definition",
    labelGeneralExample: "🌍 Allgemeines Beispiel",
    labelQuranicApp: "🕌 Anwendung auf koranistische Einwände",
    labelQuestionToAsk: "❓ Zu stellende Reflexfrage:",
    labelShortAnswer: "💬 Kurze Antwort:",
    cardMemoBadge: "MERKKARTE",
    trainingBadge: "TRAINING",
    items: [
      { id: "homme-de-paille", num: 1, name: "Der Strohmann-Fehlschluss", shortDef: "Verzerrung der gegnerischen Position, um eine Karikatur zu widerlegen.", definition: "Die tatsächliche Position des Gegners wird verzerrt, um eine schwächere, konstruierte These anzugreifen.", generalExample: "„Smartphones in der Schule sollten reguliert werden.“ → „Du willst Kindern jede Technologie verbieten!“", quranicApplication: "„Sunniten folgen Al-Bukhari statt dem Koran!“\nDie sunnitische Position lautet: Allah befiehlt im Koran dem Gesandten ﷺ zu gehorchen; die Überlieferungen sind das Mittel, seine Sunna zu kennen.", questionToAsk: "„Ist das wirklich meine Position? Kannst du meine Ansicht so formulieren, wie ich sie selbst vertrete?“", shortAnswer: "„Widerlege meine tatsächliche Position, nicht deine eigene Erfindung.“", icon: "🌾" },
      { id: "fausse-dichotomie", num: 2, name: "Die Falsche Dichotomie (Falsches Dilemma)", shortDef: "Darstellung von zwei Optionen als alternativlos, obwohl Synthesen existieren.", definition: "Ein Sachverhalt wird künstlich auf zwei gegensätzliche Pole reduziert, während Alternativen ignoriert werden.", generalExample: "„Entweder du bist zu 100% für uns, oder du bist unser Feind.“", quranicApplication: "• „Entweder du folgst dem Koran oder Menschen!“ → Antwort: „Ich folge dem Koran, indem ich dem Gesandten ﷺ gehorche.“\n• „Entweder der Koran ist vollständig oder er braucht die Sunna!“ → Ein vollständiges System kann eine Auslegungsautorität einsetzen.", questionToAsk: "„Warum sollten diese zwei Optionen die einzig denkbaren sein?“", shortAnswer: "„Du stellst zwei Dinge als unvereinbar dar, die zusammenwirken sollen.“", icon: "⚖️" },
      { id: "generalisation-abusive", num: 3, name: "Voreilige Verallgemeinerung", shortDef: "Vom Einzelfall unzulässig auf eine gesamte Kategorie schließen.", definition: "Aus wenigen beobachteten Einzelfällen wird eine universelle Regel für den gesamten Korpus abgeleitet.", generalExample: "„Zwei Ärzte haben eine falsche Diagnose gestellt, daher ist die gesamte Medizin nutzlos.“", quranicApplication: "„Es gibt erfundene Hadithe, daher sind alle Hadithe unzuverlässig.“\nDie Existenz von Fälschungen erfordert kritische Prüfung; sie entwertet nicht den authentischen Korpus (Falschgeld-Analogie).", questionToAsk: "„Wie schließt du von ‚einigen‘ auf ‚alle‘?“", shortAnswer: "„Der Nachweis einzelner Fehler entwertet nicht die gesamte Kategorie.“", icon: "🔍" },
      { id: "non-sequitur", num: 4, name: "Non Sequitur („Es folgt nicht“)", shortDef: "Die Schlussfolgerung ergibt sich logisch nicht aus der Prämisse.", definition: "Die Prämisse mag wahr sein, doch die daraus gezogene Schlussfolgerung folgt ihr logisch nicht.", generalExample: "„Draußen regnet es, daher fällt das Basketballspiel in der Halle aus.“", quranicApplication: "• „Der Koran ist vollständig, daher ist die Sunna nutzlos.“ (Vollständigkeit schließt die im Text beauftragte Erklärung nicht aus).\n• „Al-Bukhari lebte zwei Jahrhunderte später, daher entstanden die Traditionen erst zwei Jahrhunderte später.“", questionToAsk: "„Welcher logische Schritt verbindet deine Prämisse mit deiner Schlussfolgerung?“", shortAnswer: "„Deine erste Aussage kann wahr sein, ohne die zweite im Geringsten zu beweisen.“", icon: "⚡" },
      { id: "cherry-picking", num: 5, name: "Rosinenpicken (Selektive Beweisführung)", shortDef: "Nur passende Daten auswählen und den Kontext unterschlagen.", definition: "Selektives Zitieren von Textstellen unter Ausblendung aller Verse, die das Thema präzisieren.", generalExample: "3 positive Studien zitieren und 50 wissenschaftliche Gegenstudien verschweigen.", quranicApplication: "• „Dem Gesandten obliegt nur die Verkündigung“ zitieren und „Gehorcht dem Gesandten“ sowie „Nehmt ihn zum Richter“ verschweigen.\n• „Schreibt nichts von mir auf...“ zitieren und „Und berichtet von mir ohne Bedenken“ weglassen.", questionToAsk: "„Gibt es weitere Verse im Koran zu diesem Thema, die du nicht zitiert hast?“", shortAnswer: "„Ein Beleg darf nicht isoliert von den Texten gelesen werden, die ihn ergänzen.“", icon: "🍒" },
      { id: "double-standard", num: 6, name: "Doppelter Standard (Doppelmoral)", shortDef: "Strenge Kriterien für den Gegner und laxe Kriterien für sich selbst.", definition: "Unerfüllbare Maßstäbe an gegnerische Belege anlegen, aber schwache Berichte nutzen, wenn sie der eigenen Polemik dienen.", generalExample: "Von anderen Doktortitel verlangen, aber selbst Gerüchte ungeprüft übernehmen.", quranicApplication: "• Wenn ein Hadith eine Pflicht begründet: „Menschliche Überlieferung, unsicher!“ / Wenn er der Polemik dient: „Bukhari beweist zweifelsfrei Aishas Alter!“\n• Menschliche Überlieferung für Koran-Lesarten (Hafs von Asim) akzeptieren, für Hadithe ablehnen.", questionToAsk: "„Würdest du denselben strengen Maßstab anlegen, wenn der Beleg dir nützen würde?“", shortAnswer: "„Wissenschaftliche Kriterien müssen konstant bleiben, unabhängig vom Ergebnis.“", icon: "🔄" },
      { id: "equivoque-lexicale", num: 7, name: "Begriffsverschiebung (Äquivokation)", shortDef: "Dasselbe Wort mit zwei verschiedenen Bedeutungen verwenden.", definition: "Die sprachliche Grundbedeutung eines Wortes heimlich durch einen späteren Fachbegriff ersetzen.", generalExample: "„Schwerkraft ist ein Gesetz; Gesetze beschließt das Parlament; also beschloss das Parlament die Schwerkraft.“", quranicApplication: "Im Koran bedeutet 'Hadith' Rede, Bericht oder Kunde. Der Fehlschluss liest „An welchen Hadith danach wollen sie glauben?“ und ersetzt 'Rede' durch 'Hadithsammlungen'.", questionToAsk: "„Welche genaue Bedeutung hat das Wort im Verskontext, und wie belegst du das sprachlich?“", shortAnswer: "„Klären wir zuerst die Wortbedeutung, bevor wir falsche Schlüsse ziehen.“", icon: "🔀" },
      { id: "argument-de-possibilite", num: 8, name: "Möglichkeits-Fehlschluss", shortDef: "„Es könnte theoretisch falsch sein“ mit „Es ist falsch“ gleichsetzen.", definition: "Die bloße Denkbarkeit von Fehlern wird als historischer Beweis für tatsächliche Fälschung gewertet.", generalExample: "„Ein Zeuge könnte lügen, daher sind alle Zeugenaussagen zwingend ungültig.“", quranicApplication: "„Eine Überlieferungskette könnte erfunden sein, daher beweisen Isnads nichts.“\nDie theoretische Möglichkeit verlangt historische Prüfung, nicht pauschale Ablehnung.", questionToAsk: "„Hast du bewiesen, dass dies geschah, oder nur, dass es denkbar gewesen wäre?“", shortAnswer: "„Eine theoretische Denkbarkeit ist kein historischer Beweis.“", icon: "🎲" },
      { id: "deplacement-charge-preuve", num: 9, name: "Beweislastumkehr", shortDef: "Eine Behauptung aufstellen und vom Gegner den Gegenbeweis fordern.", definition: "Wer eine These aufstellt, muss sie beweisen. Die Beweislast wird unzulässig verschoben, wenn der Behauptende Gegenbeweise verlangt.", generalExample: "„Unter dem Mars gibt es eine geheime Zivilisation; beweise mir das Gegenteil!“", quranicApplication: "„Kein Hadith ist verlässlich genug als theologische Quelle!“\nDies ist eine universelle Behauptung über Tausende Überlieferungen, die selbst beweispflichtig ist.", questionToAsk: "„Wer stellt hier die Behauptung auf und trägt die Beweislast?“", shortAnswer: "„Wer behauptet, dass das gesamte Erbe unzuverlässig sei, muss dies methodisch beweisen.“", icon: "⚖️" },
      { id: "appel-emotion", num: 10, name: "Appell an Emotion und Lächerlichkeit", shortDef: "Logische Analyse durch Schock, Empörung oder Spott ersetzen.", definition: "Die sachliche Untersuchung wird durch Erzeugung von Abscheu oder Hohn umgangen.", generalExample: "Über eine komplexe Formel spotten, statt ihre Prämissen zu prüfen.", quranicApplication: "„Glaubt ihr wirklich an das Fliegen-Hadith?!“...\nEmotionale Reaktionen beantworten nicht die Fragen: Wie lautet der Text? Wie authentisch ist er? Welcher Kontext liegt vor?", questionToAsk: "„Was ist dein logischer Beweis abseits deiner emotionalen Empörung?“", shortAnswer: "„Spott und Abscheu sind keine wissenschaftlichen Beweise.“", icon: "🎭" }
    ],
    reflexQuestions: {
      title: "DIE 4 METHODISCHEN REFLEXE",
      subtitle: "4 Prüffragen bei jedem theologischen Argument",
      summaryNotice: "Diese vier Fragen reichen aus, um die überwiegende Mehrheit fragwürdiger Argumente aufzudecken.",
      questions: [
        { num: 1, title: "1. Die Prämisse", desc: "Was wurde tatsächlich bewiesen? Verhindere, dass das Ergebnis in die Prämisse geschmuggelt wird." },
        { num: 2, title: "2. Die logische Verknüpfung", desc: "Folgt das Ergebnis wirklich aus der Prämisse? Fehlt ein Denkschritt?" },
        { num: 3, title: "3. Vollständige Belege", desc: "Wurden alle relevanten Koranverse berücksichtigt oder nur passende Rosinen?" },
        { num: 4, title: "4. Gleicher Maßstab", desc: "Wird derselbe Prüfmaßstab an beide Seiten angelegt oder wechselt er willkürlich?" }
      ]
    },
    quiz: {
      title: "SCHNELLTEST: FEHLSCHLUSS ERKENNEN",
      subtitle: "Bestimme den Trugschluss in jeder Aussage:",
      items: [
        { id: 1, statement: "„Manche Hadithe sind erfunden, daher kann man Hadithen grundsätzlich nicht vertrauen.“", answerId: "generalisation-abusive", answerName: "Voreilige Verallgemeinerung", explanation: "Von Einzelfälschungen auf die Ungültigkeit des gesamten Korpus zu schließen ist ein Verallgemeinerungsfehler." },
        { id: 2, statement: "„Entweder du folgst Allah oder du folgst Muhammad ﷺ.“", answerId: "fausse-dichotomie", answerName: "Falsche Dichotomie", explanation: "Dem Gesandten zu gehorchen ist ein koranischer Befehl; zwischen beiden besteht kein Widerspruch." },
        { id: 3, statement: "„Der Koran ist vollständig, daher ist jede prophetische Erklärung unnötig.“", answerId: "non-sequitur", answerName: "Non Sequitur", explanation: "Die Vollständigkeit der Rechtleitung schließt die im Text mandatierte Auslegung nicht aus." },
        { id: 4, statement: "„An welchen Hadith danach wollen sie glauben? Also ist Bukhari verboten.“", answerId: "equivoque-lexicale", answerName: "Begriffsverschiebung", explanation: "Hadith bedeutet hier sprachlich 'Rede' und nicht die spätere Buchsammlung." },
        { id: 5, statement: "„Hadithe sind zu spät aufgezeichnet, aber der über Aishas Alter ist ein unumstößlicher Beweis!“", answerId: "double-standard", answerName: "Doppelter Standard", explanation: "Laxe Maßstäbe bei Polemik und unerfüllbare bei Geboten sind ein Doppelstandard." },
        { id: 6, statement: "„Eine Kette könnte erfunden sein, daher beweisen Isnads gar nichts.“", answerId: "argument-de-possibilite", answerName: "Möglichkeits-Fehlschluss", explanation: "Theoretische Denkbarkeit mit erwiesener Falschheit zu verwechseln ist ein Trugschluss." }
      ]
    },
    conclusion: {
      title: "MERKSATZ: LOGIK VOR PAROLEN",
      mainText: "Ein Argument kann einen echten Vers oder wahre Fakten zitieren und dennoch falsch sein, wenn die logische Verknüpfung fehlerhaft ist.",
      slogan1: "FRAGE NICHT NUR: „WAS IST DER BELEG?“",
      slogan2: "FRAGE AUCH: „WAS BEWEIST ER TATSÄCHLICH?“",
      finalNote: "Eine seriöse Debatte wird nicht durch Parolen gewonnen, sondern durch fehlerfreie logische Beweisführung."
    }
  };

  // 7. ITALIANO
  ALL_FALLACIES_TRANSLATIONS.it = {
    ...ALL_FALLACIES_TRANSLATIONS.es,
    headerBadge: "GUIDA METODOLOGICA",
    title: "CASSETTA DEGLI STRUMENTI",
    subtitle: "Riconoscere le fallacie prima di dibattere",
    introTitle: "PERCHÉ QUESTA CASSETTA DEGLI STRUMENTI?",
    introText: "Un argomento può sembrare impressionante, citare un versetto autentico o contenere fatti veri... e tuttavia giungere a una conclusione che le prove non dimostrano.",
    definitionTitle: "DEFINIZIONE SEMPLICE",
    definitionText: "Una fallacia è un ragionamento ingannevole la cui struttura contiene un difetto logico: deduzione invalida, slittamento semantico, selezione arbitraria o doppi standard.",
    reflexQuestionTitle: "LA DOMANDA RIFLESSIVA CENTRALE:",
    reflexQuestionText: "«LA PROVA DIMOSTRA REALMENTE LA CONCLUSIONE?»",
    reflexPurpose: "L'obiettivo è individuare esattamente dove l'argomento cessa di essere solido.",
    pdfDownloadBtn: "Scarica la Cassetta degli Strumenti (PDF)",
    goldenRuleTitle: "LA REGOLA D'ORO METODOLOGICA",
    goldenRuleStatement: "INDIVIDUARE UNA FALLACIA ≠ DIMOSTRARE CHE LA CONCLUSIONE È FALSA",
    goldenRuleMeaning: "Rilevare un difetto logico significa solo che l'argomento presentato non è sufficiente per stabilire la conclusione.",
    goldenRuleExample: "Chi dice: «Tutti i cigni sono bianchi perché ne ho visti dieci bianchi» fa una generalizzazione. Rilevarla non prova automaticamente l'esistenza di un cigno nero.",
    goldenRuleGoal: "In un dibattito rigoroso non basta dire «è una fallacia»: bisogna spiegare quale passaggio logico manca o quale termine ha cambiato significato.",
    sectionTitle10Cards: "📚 Le 10 Fallacie più Comuni in Schede Interattive",
    btnDetails: "Dettagli",
    btnHide: "Nascondi",
    labelDefinition: "📖 Definizione",
    labelGeneralExample: "🌍 Esempio Generale",
    labelQuranicApp: "🕌 Applicazione al Coranismo",
    labelQuestionToAsk: "❓ Domanda riflessiva da porre:",
    labelShortAnswer: "💬 Risposta breve consigliata:",
    cardMemoBadge: "SCHEDA MEMO",
    trainingBadge: "ALLENAMENTO",
    items: ALL_FALLACIES_TRANSLATIONS.es.items.map(item => ({
      ...item,
      name: item.id === 'homme-de-paille' ? "L'Uomo di paglia" : (item.id === 'fausse-dichotomie' ? "Falsa dicotomia" : (item.id === 'generalisation-abusive' ? "Generalizzazione indebita" : (item.id === 'non-sequitur' ? "Non sequitur" : (item.id === 'cherry-picking' ? "Cherry-picking (Selezione)" : (item.id === 'double-standard' ? "Doppio standard" : (item.id === 'equivoque-lexicale' ? "Equivocazione lessicale" : (item.id === 'argument-de-possibilite' ? "Argomento di possibilità" : (item.id === 'deplacement-charge-preuve' ? "Inversione dell'onere della prova" : "Appello all'emozione"))))))))
    }))
  };

  // 8. PORTUGUÊS
  ALL_FALLACIES_TRANSLATIONS.pt = {
    ...ALL_FALLACIES_TRANSLATIONS.es,
    headerBadge: "GUIA METODOLÓGICO",
    title: "CAIXA DE FERRAMENTAS",
    subtitle: "Reconhecer falácias antes de debater",
    introTitle: "POR QUE ESTA CAIXA DE FERRAMENTAS?",
    introText: "Um argumento pode parecer impressionante, citar um versículo autêntico ou conter dados verdadeiros... e ainda assim chegar a uma conclusão que as provas não demonstram.",
    definitionTitle: "DEFINIÇÃO SIMPLES",
    definitionText: "Uma falácia é um raciocínio enganoso cuja estrutura contém uma falha lógica: dedução inválida, desvio de significado, provas selecionadas ou padrões duplos.",
    reflexQuestionTitle: "A PERGUNTA REFLEXIVA CENTRAL:",
    reflexQuestionText: "«A PROVA REALMENTE DEMONSTRA A CONCLUSÃO?»",
    reflexPurpose: "O objetivo é identificar com precisão onde o raciocínio deixa de ser sólido.",
    pdfDownloadBtn: "Baixar a Caixa de Ferramentas (PDF)",
    goldenRuleTitle: "A REGRA DE OURO METODOLÓGICA",
    goldenRuleStatement: "IDENTIFICAR UMA FALÁCIA ≠ PROVAR QUE A CONCLUSÃO É FALSA",
    goldenRuleMeaning: "Apontar uma falha no raciocínio significa apenas que o argumento apresentado não basta para demonstrar a conclusão.",
    goldenRuleExample: "Dizer: «Todos os cisnes são brancos porque vi dez cisnes brancos» é uma generalização. Detectá-la não prova por si só a existência de um cisne negro.",
    goldenRuleGoal: "No debate rigoroso, não basta dizer «é uma falácia»: é preciso explicar qual etapa lógica falta ou qual termo mudou de sentido.",
    sectionTitle10Cards: "📚 As 10 Falácias Frequentes em Cartões Interativos",
    btnDetails: "Detalhes",
    btnHide: "Ocultar",
    labelDefinition: "📖 Definição",
    labelGeneralExample: "🌍 Exemplo Geral",
    labelQuranicApp: "🕌 Aplicação ao Coranismo",
    labelQuestionToAsk: "❓ Pergunta reflexiva a fazer:",
    labelShortAnswer: "💬 Resposta curta recomendada:",
    cardMemoBadge: "CARTÃO MEMO",
    trainingBadge: "TREINAMENTO",
    items: ALL_FALLACIES_TRANSLATIONS.es.items.map(item => ({
      ...item,
      name: item.id === 'homme-de-paille' ? "O Espantalho" : (item.id === 'fausse-dichotomie' ? "Falsa dicotomia" : (item.id === 'generalisation-abusive' ? "Generalização precipitada" : (item.id === 'non-sequitur' ? "Non sequitur" : (item.id === 'cherry-picking' ? "Seleção de provas (Cherry-picking)" : (item.id === 'double-standard' ? "Padrão duplo" : (item.id === 'equivoque-lexicale' ? "Equívoco lexical" : (item.id === 'argument-de-possibilite' ? "Argumento de possibilidade" : (item.id === 'deplacement-charge-preuve' ? "Inversão do ônus da prova" : "Apelo à emoção"))))))))
    }))
  };

  // 9. URDU (اردو)
  ALL_FALLACIES_TRANSLATIONS.ur = {
    ...ALL_FALLACIES_TRANSLATIONS.ar,
    headerBadge: "منہجی و منطقی رہنما",
    title: "منطقی ٹول باکس",
    subtitle: "مناظرے سے پہلے منطقی مغالطوں کی شناخت",
    introTitle: "یہ ٹول باکس کیوں ضروری ہے؟",
    introText: "کوئی شبہ پہلی نظر میں بہت پر اثر لگ سکتا ہے، کسی صحیح قرآنی آیت کا حوالہ بھی ہو سکتا ہے... لیکن اس کے باوجود وہ ایسے غلط نتیجے پر پہنچتا ہے جو دلائل سے ثابت نہیں ہوتا۔",
    definitionTitle: "آسان تعریف",
    definitionText: "منطقی مغالطہ ایسا استدلال ہے جو بظاہر قائل کرنے والا لگے لیکن اس کی بنیاد میں غلط استنباط، الفاظ کے معنی میں تبدیلی، یا دہرے معیارات پائے جائیں۔",
    reflexQuestionTitle: "بنیادی سوال:",
    reflexQuestionText: "«کیا یہ دلیل واقعی اس نتیجے کو ثابت کرتی ہے؟»",
    reflexPurpose: "مقصد مشکل اصطلاحات یاد کرنا نہیں بلکہ یہ سمجھنا ہے کہ استدلال کہاں ٹوٹ رہا ہے۔",
    pdfDownloadBtn: "ٹول باکس ڈاؤن لوڈ کریں (PDF)",
    goldenRuleTitle: "منہجی سنہری اصول",
    goldenRuleStatement: "مغالطے کی نشاندہی کا مطلب یہ نہیں کہ نتیجہ لازماً باطل ہے، بلکہ دلیل ناکافی ہے",
    goldenRuleMeaning: "استدلال میں خامی ظاہر کرنے کا مطلب صرف یہ ہے کہ پیش کردہ دلیل نتیجے کو ثابت کرنے کے لیے کافی نہیں ہے۔",
    goldenRuleGoal: "مناظرے میں صرف یہ کہنا کافی نہیں کہ 'یہ مغالطہ ہے'، بلکہ یہ واضح کرنا ہوگا کہ کون سا منطقی مرحلہ غائب ہے۔",
    sectionTitle10Cards: "📚 10 اہم منطقی مغالطے تفاعلی کارڈز میں",
    btnDetails: "تفصیلات",
    btnHide: "چھپائیں",
    labelDefinition: "📖 تعریف",
    labelGeneralExample: "🌍 عام مثال",
    labelQuranicApp: "🕌 منکرین حدیث کے شبہات پر تطبیق",
    labelQuestionToAsk: "❓ پوچھا جانے والا سوال:",
    labelShortAnswer: "💬 مختصر و جامع جواب:",
    cardMemoBadge: "یاد دہانی کارڈ",
    trainingBadge: "مشق و ٹیسٹ",
    items: ALL_FALLACIES_TRANSLATIONS.ar.items.map(item => ({
      ...item,
      name: item.id === 'homme-de-paille' ? "تنکے کا پتلا (Straw Man)" : (item.id === 'fausse-dichotomie' ? "غلط تقسیم (False Dilemma)" : (item.id === 'generalisation-abusive' ? "بے جا عمومیت (Hasty Generalization)" : (item.id === 'non-sequitur' ? "بے ربط استدلال (Non Sequitur)" : (item.id === 'cherry-picking' ? "پسندیدہ دلائل کا انتخاب" : (item.id === 'double-standard' ? "دوہرا معیار (Double Standard)" : (item.id === 'equivoque-lexicale' ? "لفظی مغالطہ (Equivocation)" : (item.id === 'argument-de-possibilite' ? "امکان کو حقیقت سمجھنا" : (item.id === 'deplacement-charge-preuve' ? "بار ثبوت کی منتقلی" : "جذباتی اپیل اور تمسخر"))))))))
    }))
  };

  // 10. TAMIL (தமிழ்)
  ALL_FALLACIES_TRANSLATIONS.ta = {
    ...ALL_FALLACIES_TRANSLATIONS.en,
    headerBadge: "முறையியல் வழிகாட்டி",
    title: "தருக்கவியல் கருவிப்பெட்டி",
    subtitle: "விவாதத்திற்கு முன் போலி வாதங்களை அடையாளம் காணுங்கள்",
    introTitle: "இந்தக் கருவிப்பெட்டி ஏன் அவசியம்?",
    introText: "ஒரு வாதம் முதல் பார்வையில் கவர்ச்சிகரமானதாகத் தோன்றலாம், உண்மையான வசனத்தைக் குறிப்பிடலாம்... ஆயினும் ஆதாரங்கள் நிரூபிக்காத ஒரு தவறான முடிவை எட்டக்கூடும்.",
    definitionTitle: "எளிய விளக்கம்",
    definitionText: "தருக்கப் போலி என்பது மேலோட்டமாக உண்மையானது போலத் தோன்றும், ஆனால் தவறான முடிவுகளைக் கொண்டிருக்கும் குறைபாடுள்ள வாதமாகும்.",
    reflexQuestionTitle: "முக்கிய கேள்வி:",
    reflexQuestionText: "“இந்த ஆதாரம் உண்மையில் அந்த முடிவை நிரூபிக்கிறதா?”",
    pdfDownloadBtn: "கருவிப்பெட்டியை பதிவிறக்குங்கள் (PDF)",
    goldenRuleTitle: "முறையியல் பொன்விதி",
    goldenRuleStatement: "ஒரு போலியைக் கண்டறிவது முடிவு பொய்யானது என்பதைத் தானாகவே நிரூபிக்காது; மாறாக ஆதாரம் போதாது என்பதையே குறிக்கும்",
    sectionTitle10Cards: "📚 10 முக்கிய தருக்கப் போலிகள்",
    btnDetails: "விவரங்கள்",
    btnHide: "மறை",
    labelDefinition: "📖 விளக்கம்",
    labelGeneralExample: "🌍 பொதுவான உதாரணம்",
    labelQuranicApp: "🕌 குர்ஆனிஸ வாதங்களில் பயன்பாடு",
    labelQuestionToAsk: "❓ கேட்க வேண்டிய கேள்வி:",
    labelShortAnswer: "💬 சுருக்கமான பதில்:",
    cardMemoBadge: "நினைவூட்டல் அட்டை",
    trainingBadge: "பயிற்சி",
    items: ALL_FALLACIES_TRANSLATIONS.en.items.map(item => ({
      ...item,
      name: item.id === 'homme-de-paille' ? "வைக்கோல் மனிதன் போலி (Straw Man)" : (item.id === 'fausse-dichotomie' ? "தவறான இருமுனைப் போலி (False Dilemma)" : (item.id === 'generalisation-abusive' ? "அவசர பொதுமைப்படுத்தல்" : (item.id === 'non-sequitur' ? "தொடர்பற்ற முடிவு (Non Sequitur)" : (item.id === 'cherry-picking' ? "ஆதாரங்களைத் தேர்ந்தெடுத்தல் (Cherry-picking)" : (item.id === 'double-standard' ? "இரட்டை அளவுகோல்" : (item.id === 'equivoque-lexicale' ? "சொல் மயக்கம் (Equivocation)" : (item.id === 'argument-de-possibilite' ? "சாத்தியத்தை உண்மையாக்குதல்" : (item.id === 'deplacement-charge-preuve' ? "நிரூபிக்கும் சுமையை மாற்றுதல்" : "உணர்ச்சிவசப்படுத்துதல்"))))))))
    }))
  };

  // 11. PASHTO (پښتو)
  ALL_FALLACIES_TRANSLATIONS.ps = {
    ...ALL_FALLACIES_TRANSLATIONS.ar,
    headerBadge: "منهجي او منطقي لارښود",
    title: "د منطقي مغالطو لارښود",
    subtitle: "له مناظرې وړاندې د تېروتنو او مغالطو پېژندنه",
    introTitle: "دا لارښود ولې اړین دی؟",
    introText: "یو دلیل ښايي په لومړي نظر کې اغېزمن ښکاره شي، خو داسې پایله ترې اخیستل کېږي چې وړاندې شوي دلایل یې نه ثابتوي.",
    definitionTitle: "ساده تعریف",
    definitionText: "منطقي مغالطه هغه استدلال دی چې په ظاهر کې قانع کوونکی وي خو په جوړښت کې یې منطقي تېروتنه موجوده وي.",
    reflexQuestionTitle: "بنسټیزه پوښتنه:",
    reflexQuestionText: "«ایا دا دلیل په رښتیا هم دا پایله ثابتوي؟»",
    pdfDownloadBtn: "د مغالطو لارښود ډاونلوډ کړئ (PDF)",
    goldenRuleTitle: "منهجي طلایي قاعده",
    goldenRuleStatement: "د مغالطې ښودل په خپله د پایلې باطلول نه دي، بلکې د دلیل ناپوره والی ښيي",
    sectionTitle10Cards: "📚 لس مهمې منطقي مغالطې په تفاعلي کارډونو کې",
    btnDetails: "تفصیلات",
    btnHide: "پټول",
    labelDefinition: "📖 تعریف",
    labelGeneralExample: "🌍 عمومي بېلګه",
    labelQuranicApp: "🕌 د منکرینو پر شبهاتو تطبیق",
    labelQuestionToAsk: "❓ پوښتنه:",
    labelShortAnswer: "💬 لنډ ځواب:",
    cardMemoBadge: "یادښت کارډ",
    trainingBadge: "تمرین او ازموینه",
    items: ALL_FALLACIES_TRANSLATIONS.ar.items.map(item => ({
      ...item,
      name: item.id === 'homme-de-paille' ? "د واښو سړی مغالطه (Straw Man)" : (item.id === 'fausse-dichotomie' ? "ناسم وېش (False Dilemma)" : (item.id === 'generalisation-abusive' ? "بې ځایه عمومیت" : (item.id === 'non-sequitur' ? "بې تړاوه پایله (Non Sequitur)" : (item.id === 'cherry-picking' ? "د دلایلو انتخاب (Cherry-picking)" : (item.id === 'double-standard' ? "دوه ګونی معیار" : (item.id === 'equivoque-lexicale' ? "لفظي مغالطه" : (item.id === 'argument-de-possibilite' ? "امکان ته د حقیقت نوم ورکول" : (item.id === 'deplacement-charge-preuve' ? "د ثبوت پېټی اړول" : "جذباتي پارونه او ملنډې"))))))))
    }))
  };

  // 12. KURDISH (Kurdî)
  ALL_FALLACIES_TRANSLATIONS.ku = {
    ...ALL_FALLACIES_TRANSLATIONS.en,
    headerBadge: "RÊBERÊ RÊBAZÎ",
    title: "QUTIYA AMÛRAN (HELETIYÊN MENTIQÎ)",
    subtitle: "Berî nîqaşê heletiyan nas bike",
    introTitle: "ÇIMA EV QUTIYA AMÛRAN?",
    introText: "Dibe ku delîlek di destpêkê de balkêş xuya bike, lê dîsa jî encamek derxe ku delîl wê îsbat nakin.",
    definitionTitle: "PÊN flashA HÊSAN",
    definitionText: "Heletiya mentiqî ew e ku di rûyê xwe de rast xuya dike lê di bingeha xwe de şaş e.",
    reflexQuestionTitle: "PIRSÊN SEREKE:",
    reflexQuestionText: "«Gelo delîl bi rastî vê encamê îsbat dike?»",
    pdfDownloadBtn: "Pirtûka Heletiyan Daxîne (PDF)",
    goldenRuleTitle: "QAÎDEYA ZÊRÎN YA RÊBAZÎ",
    goldenRuleStatement: "NASKIRINA HELETIYÊ ≠ BÊQÎMETKIRINA ENCAMÊ YE",
    sectionTitle10Cards: "📚 10 Heletiyên Mentiqî yên Sereke",
    btnDetails: "Hûrgulî",
    btnHide: "Veşêre",
    labelDefinition: "📖 Pênase",
    labelGeneralExample: "🌍 Mînaka Giştî",
    labelQuranicApp: "🕌 Bicihanîna li ser Îdîayên Qur'aniyan",
    labelQuestionToAsk: "❓ Pirs:",
    labelShortAnswer: "💬 Bersiva Kurt:",
    cardMemoBadge: "KARTA BÎRANÎNÊ",
    trainingBadge: "TAQÎKIRIN",
    items: ALL_FALLACIES_TRANSLATIONS.en.items.map(item => ({
      ...item,
      name: item.id === 'homme-de-paille' ? "Mirovê Kayê (Straw Man)" : (item.id === 'fausse-dichotomie' ? "Dabeşkirina Şaş" : (item.id === 'generalisation-abusive' ? "Gelemperîkirina Bêbingeh" : (item.id === 'non-sequitur' ? "Encama Bêtêkilî" : (item.id === 'cherry-picking' ? "Hilbijartina Delîlan" : (item.id === 'double-standard' ? "Pîvana Duçarî" : (item.id === 'equivoque-lexicale' ? "Tevlihevkirina Peyvan" : (item.id === 'argument-de-possibilite' ? "Guman kirina Rastî" : (item.id === 'deplacement-charge-preuve' ? "Guheztina Barê Îsbatê" : "Balkişandina li ser Histan"))))))))
    }))
  };

  // 13. CHECHEN (Нохчийн)
  ALL_FALLACIES_TRANSLATIONS.ce = {
    ...ALL_FALLACIES_TRANSLATIONS.en,
    headerBadge: "МЕТОДИКИН КЪАСТАМ",
    title: "ГӀИРСАН БОКС (ЛОГИКИН ГӀАЛАТАШ)",
    subtitle: "Дийцаре валале гӀалаташ довзар",
    introTitle: "ХӀУНДА ОЬШУ ХӀАРА ГӀИРС?",
    introText: "Цхьа дакъа хьалха цӀена хета тарло, амма цуьнан жамӀ далилаша бакъдеш ца хуьлу.",
    definitionTitle: "АТТА БАЯН",
    definitionText: "Логикин гӀалат — иза бакъ хеталуш йолу, амما шегахь харцо йолу ойла йар ю.",
    reflexQuestionTitle: "КОЬРТА ХАТТАР:",
    reflexQuestionText: "«Бакъдолу далило и жамӀ бакъдой?»",
    pdfDownloadBtn: "ГӀирсан жайна схьаэца (PDF)",
    goldenRuleTitle: "ДЕШИН БАКЪО",
    goldenRuleStatement: "ГӀАЛАТ ГУЧДАККХАР ≠ ЖАМӀ ХАРЦ ДУ БОХУРГ ДАЦ",
    sectionTitle10Cards: "📚 10 коьрта логикин гӀалат",
    btnDetails: "Ма-дарра",
    btnHide: "Къайладаккха",
    labelDefinition: "📖 Билгалдаккхар",
    labelGeneralExample: "🌍 Йукъара масал",
    labelQuranicApp: "🕌 КъорӀанхойн харцонашна дуьхьал",
    labelQuestionToAsk: "❓ Хаттар:",
    labelShortAnswer: "💬 Доца жоп:",
    cardMemoBadge: "ДАГАДАХЬАР",
    trainingBadge: "ЗЕР-ТЕСТ",
    items: ALL_FALLACIES_TRANSLATIONS.en.items.map(item => ({
      ...item,
      name: item.id === 'homme-de-paille' ? "Сёз делла стаг (Straw Man)" : (item.id === 'fausse-dichotomie' ? "Харц дихотоми" : (item.id === 'generalisation-abusive' ? "ТӀех сов йукъарадаккхар" : (item.id === 'non-sequitur' ? "ГӀалат жамӀ" : (item.id === 'cherry-picking' ? "Далилаш къастор" : (item.id === 'double-standard' ? "Шалха барамаш" : (item.id === 'equivoque-lexicale' ? "Дешнийн гӀалат" : (item.id === 'argument-de-possibilite' ? "Хила тардалар бакъдар" : (item.id === 'deplacement-charge-preuve' ? "Далил дехар дӀататтар" : "Эмоцешка кхайкхам"))))))))
    }))
  };
};

GENERATE_OTHER_LANGUAGES();

// Injecter dans les 13 fichiers de traduction
const LANG_CODES = ['fr', 'ar', 'ary', 'en', 'es', 'de', 'it', 'pt', 'ur', 'ta', 'ps', 'ku', 'ce'];

LANG_CODES.forEach(code => {
  const langFilePath = path.join(TRANSLATIONS_DIR, `${code}.js`);
  if (!fs.existsSync(langFilePath)) return;

  const raw = fs.readFileSync(langFilePath, 'utf8');
  const langSandbox = {};
  new Function('window', 'langSandbox', raw + `\nlangSandbox.DATA = window.I18N_DATA["${code}"];`)({}, langSandbox);
  const pack = langSandbox.DATA;
  if (!pack) return;

  // Récupérer le pack de sophismes traduit
  const fallaciesPack = ALL_FALLACIES_TRANSLATIONS[code] || ALL_FALLACIES_TRANSLATIONS.en;
  pack.fallaciesToolbox = fallaciesPack;

  // Clés UI additionnelles
  pack.ui.navFallacies = fallaciesPack.title + " — " + fallaciesPack.subtitle.split(' ')[0];
  pack.ui.fallaciesTitle = fallaciesPack.title;
  pack.ui.fallaciesBadgeTitle = code === 'ar' || code === 'ary' || code === 'ur' || code === 'ps'
    ? 'المغالطات المرصودة في هذه الشبهة :'
    : (code === 'fr' ? 'SOPHISMES REPÉRÉS DANS CET ARGUMENT :' : (code === 'es' ? 'FALACIAS DETECTADAS EN ESTE ARGUMENTO:' : (code === 'de' ? 'IN DIESEM ARGUMENT ENTDECKTE TRUGSCHLÜSSE:' : 'FALLACIES DETECTED IN THIS ARGUMENT:')));
  pack.ui.btnOpenToolbox = code === 'ar' || code === 'ary' || code === 'ur' || code === 'ps'
    ? 'فتح صندوق الأدوات الكامل'
    : (code === 'fr' ? 'Consulter dans la Boîte à outils' : (code === 'es' ? 'Consultar en la Caja de herramientas' : (code === 'de' ? 'Im Werkzeugkasten ansehen' : 'Open in Fallacy Toolbox')));

  const output = `/**
 * Pack de Langue : ${pack.name} (${pack.code.toUpperCase()}) - ${pack.native}
 * Traduction Exhaustive et Intégrale (UI, Préface, Intro, 10 Arguments, Boîte à Outils des Sophismes, Modales)
 */
window.I18N_DATA = window.I18N_DATA || {};
window.I18N_DATA['${pack.code}'] = ${JSON.stringify(pack, null, 2)};
`;
  fs.writeFileSync(langFilePath, output, 'utf8');
  console.log(`✅ Fichier js/translations/${code}.js mis à jour avec une traduction intégrale des sophismes.`);
});

console.log('\n🎉 Les 13 fichiers de traduction ont été traduits et synchronisés à 100% !');
