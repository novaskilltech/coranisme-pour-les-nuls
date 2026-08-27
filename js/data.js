/**
 * Base de données exhaustive des 10 Arguments de Réfutation du Coranisme
 * Tirée des 10 fascicules : "Comment démasquer et réfuter la secte des coranistes"
 * Manuel : "Le Coranisme pour les Nuls : Réfutation des méprisants du Coran et de la Sounnah"
 */

const ARGUMENTS_DATA = [
  {
    id: 1,
    slug: "coran-complet-pourquoi-sunna",
    number: "01",
    title: "Le Coran est complet : pourquoi faudrait-il la Sunna ?",
    shortTitle: "Le Coran est complet",
    tagline: "Distinguer la complétude d'un système de son autonomie absolue",
    formula: "COMPLÉTUDE ≠ EXHAUSTIVITÉ LITTÉRALE ≠ AUTOSUFFISANCE INTERPRÉTATIVE",
    pdfFile: "Comment_demasquer_et_refuter_la_secte_des_coranistes_Argument_1.pdf",
    theme: "Épistémologie & Complétude",
    theirArgument: {
      thesis: "Le raisonnement coraniste affirme qu'Allah décrit Son Livre comme complet, détaillé et explicatif. Si une règle religieuse indispensable devait être cherchée dans une source extérieure au Coran, cela signifierait que le Livre n'était pas réellement suffisant.",
      verses: [
        {
          ref: "Coran 6:38",
          ar: "مَّا فَرَّطْنَا فِي الْكِتَابِ مِن شَيْءٍ",
          fr: "« Nous n'avons rien omis dans le Livre. »"
        },
        {
          ref: "Coran 6:114",
          ar: "كِتَابًا مُّفَصَّلًا",
          fr: "« Un Livre exposé en détail. »"
        },
        {
          ref: "Coran 16:89",
          ar: "وَنَزَّلْنَا عَلَيْكَ الْكِتَابَ تِبْيَانًا لِّكُلِّ شَيْءٍ",
          fr: "« Nous avons fait descendre sur toi le Livre comme clarification de toute chose. »"
        }
      ],
      realQuestion: "Ces versets impliquent-ils que toute règle, toute modalité, toute explication et toute autorité religieuse doivent nécessairement être contenues mot pour mot dans le texte coranique ?"
    },
    logicalNode: {
      title: "La confusion qui fait tenir tout l'argument",
      distinctions: [
        {
          term: "COMPLÉTUDE",
          desc: "Le système contient tout ce qui est nécessaire à sa finalité."
        },
        {
          term: "EXHAUSTIVITÉ LITTÉRALE",
          desc: "Chaque détail et chaque modalité sont écrits explicitement dans le texte."
        },
        {
          term: "AUTONOMIE ABSOLUE",
          desc: "Aucune explication, autorité, démonstration ou pratique extérieure au texte n'est nécessaire."
        }
      ],
      generalRule: "Un système complet peut parfaitement inclure une règle de délégation : « Pour telle question, référez-vous à l'autorité A. » Dans ce cas, consulter A n'est pas sortir du système ; c'est obéir au système.",
      errorToAvoid: "Transformer le mot « complet » en « autosuffisant dans chaque détail, sans enseignant, sans juge, sans modèle et sans procédure externe » est une définition ajoutée au texte, pas une conséquence logique nécessaire."
    },
    centralPrinciple: {
      title: "Un système peut intégrer une autorité extérieure au texte",
      formalScheme: "Système S : complet pour sa finalité.\nRègle interne R : « Lorsque la situation X se présente, suivez l'autorité A. »\nConclusion : A est extérieure au texte matériel, mais intérieure au système normatif.",
      explanation: "Il n'y a aucune contradiction. L'autorité A n'est pas une concurrente du système : elle tient précisément son rôle du système lui-même. La question pertinente devient alors : le Coran se contente-t-il de renvoyer à lui-même, ou désigne-t-il aussi le Messager comme autorité d'obéissance, d'explication, de jugement et comme modèle ?",
      logicalTest: "Si le texte dit lui-même « suivez cette autorité », refuser cette autorité au nom de la fidélité exclusive au texte revient à refuser une instruction du texte."
    },
    quranicArchitecture: {
      title: "Une autorité extérieure au texte, mais instituée par le texte",
      verses: [
        {
          ref: "Coran 4:59",
          ar: "أَطِيعُوا اللَّهَ وَأَطِيعُوا الرَّسُولَ",
          fr: "« Obéissez à Allah et obéissez au Messager. »"
        },
        {
          ref: "Coran 4:65",
          ar: "حَتَّىٰ يُحَكِّمُوكَ فِيمَا شَجَرَ بَيْنَهُمْ",
          fr: "« Jusqu'à ce qu'ils te prennent pour juge dans leurs différends. »"
        },
        {
          ref: "Coran 16:44",
          ar: "لِتُبَيِّنَ لِلنَّاسِ مَا نُزِّلَ إِلَيْهِمْ",
          fr: "« Afin que tu exposes clairement aux gens ce qui a été révélé pour eux. »"
        },
        {
          ref: "Coran 33:21",
          ar: "لَّقَدْ كَانَ لَكُمْ فِي رَسُولِ اللَّهِ أُسْوَةٌ حَسَنَةٌ",
          fr: "« Vous avez certes dans le Messager d'Allah un excellent modèle. »"
        }
      ],
      consequence: "La complétude du Coran peut donc inclure, dans sa propre architecture, l'obligation de suivre le Messager. Il n'y a pas opposition entre « Livre complet » et « autorité prophétique » si le Livre complet institue cette autorité."
    },
    analogies: [
      {
        num: 1,
        title: "La Constitution et la Cour constitutionnelle",
        scenario: "Une Constitution peut être le texte suprême et complet d'un ordre juridique tout en prévoyant qu'une juridiction déterminée interprète ses dispositions lorsqu'un conflit apparaît.",
        logic: "La décision du juge n'est pas un deuxième texte constitutionnel concurrent. Son autorité existe parce que la Constitution organise elle-même cette fonction.",
        lesson: "Si un texte suprême dit « cette Cour interprète mes dispositions », refuser la Cour au nom de la suprématie du texte revient à désobéir au texte.",
        application: "Le Coran est la source suprême tout en conférant au Messager une autorité dérivée. Suivre le Messager n'abolit pas la suprématie d'Allah : c'est la manière voulue par Allah d'appliquer Sa révélation."
      },
      {
        num: 2,
        title: "Le mode d'emploi et le technicien agréé",
        scenario: "Un fabricant livre un manuel complet pour une machine, mais précise : « Pour le calibrage initial, suivez la procédure indiquée par le technicien agréé. »",
        logic: "Le recours au technicien n'est pas une réparation d'un manuel défectueux. La consultation du technicien est elle-même une instruction du manuel.",
        lesson: "Dire « je refuse le technicien parce que le manuel est complet » transforme la complétude en une autonomie que le manuel n'a jamais revendiquée.",
        application: "Si le Coran dit « obéissez au Messager », pourquoi la complétude interdirait-elle précisément ce qu'il ordonne ?"
      },
      {
        num: 3,
        title: "Une formule mathématique et sa démonstration",
        scenario: "La formule de Pythagore (a² + b² = c²) est parfaitement complète. Pourtant, la lire ne suffit pas pour comprendre son application concrète.",
        logic: "Le professeur n'ajoute rien à la vérité de la formule : il transforme un énoncé complet en connaissance comprise et appliquée.",
        lesson: "Explication et complétude ne s'excluent pas. Une vérité complète requiert un enseignement.",
        application: "Le verbe coranique « afin que tu exposes clairement » (16:44) décrit une fonction d'explication sans impliquer que le Coran soit incomplet."
      },
      {
        num: 4,
        title: "Le code de la route et le moniteur",
        scenario: "Le code contient les règles écrites. L'apprentissage réel passe par des démonstrations et corrections du moniteur.",
        logic: "Le moniteur ne crée pas un « 2e code ». Il montre comment une règle générale se réalise en pratique.",
        lesson: "La norme écrite n'élimine pas le besoin d'un modèle pratique.",
        application: "La Sunna est l'enseignement et la mise en pratique des principes ordonnés par le Coran."
      },
      {
        num: 5,
        title: "La loi et le décret d'application",
        scenario: "Une loi pose une obligation générale et prévoit que les modalités techniques soient fixées par décret.",
        logic: "Le niveau « principe » et le niveau « modalités » appartiennent au même système juridique.",
        lesson: "Refuser les modalités sous prétexte qu'elles ne sont pas dans l'article principal empêche l'application de la loi.",
        application: "Dire « accomplissez la prière » établit l'obligation. La Sunna enseigne la forme concrète de cette obligation."
      }
    ],
    objections: [
      {
        obj: "« Si le Prophète doit expliquer le Coran, alors le Coran n'est pas suffisant. »",
        ans: "Cela ne suit pas logiquement. Un texte peut être suffisant comme fondement normatif tout en déterminant lui-même une méthode d'explication. La suffisance du système inclut l'enseignant qu'il institue."
      },
      {
        obj: "« L'autorité du Messager ne valait que pour les gens qui vivaient avec lui. »",
        ans: "Cette objection ne réfute pas le principe de l'autorité prophétique instituée par le Coran. Elle déplace simplement le débat vers la question historique de sa transmission."
      },
      {
        obj: "« Les hadiths sont incertains, donc on ne peut pas s'y référer. »",
        ans: "C'est un second débat distinct. La question de la fiabilité de la transmission ne prouve pas que le concept même d'autorité prophétique contredirait la complétude du Coran."
      }
    ],
    framingQuestions: [
      "Quand vous dites « complet », voulez-vous dire « suffisant pour la guidée » ou « chaque détail doit être écrit explicitement » ?",
      "Pouvez-vous démontrer que « complet » signifie nécessairement « sans aucune autorité explicative extérieure au texte » ?",
      "Un texte complet peut-il désigner un juge, un professeur ou un modèle chargé de l'expliquer ?",
      "Si le Coran ordonne lui-même d'obéir au Messager, suivre cette instruction est-il une sortie du Coran ou une application du Coran ?",
      "Votre argument porte-t-il sur la complétude du Coran ou sur la fiabilité historique des hadiths ?"
    ],
    readyResponses: {
      quick30s: "Dire que le Coran est complet ne prouve pas qu'il doit être autonome de toute autorité extérieure à son texte. Un système complet peut intégrer une règle disant : « suivez telle autorité ». Or le Coran ordonne d'obéir au Messager, de le prendre pour juge, lui confie une fonction d'explication (16:44) et le présente comme modèle (33:21). Suivre cette autorité n'est donc pas ajouter quelque chose contre le Coran : c'est appliquer une instruction du Coran.",
      developed: "La vraie question est la définition de la complétude. Complétude, exhaustivité littérale et autosuffisance interprétative ne sont pas synonymes. Une Constitution reste le texte suprême même si elle institue une Cour chargée de l'interpréter. Une formule mathématique reste complète même si un professeur doit la démontrer. De la même manière, si le Coran lui-même ordonne d'obéir au Messager et lui attribue des fonctions d'explication et de jugement, l'autorité prophétique fait partie intégrante de l'architecture du système coranique."
    },
    conclusion: {
      steps: [
        "Le Coran se décrit comme complet, détaillé et clarificateur.",
        "Cette complétude n'implique pas que chaque modalité soit écrite mot à mot ni qu'aucune autorité déléguée ne puisse être instituée.",
        "Le Coran désigne effectivement le Messager comme autorité d'obéissance, de jugement, d'explication et de modèle."
      ],
      finalText: "Il n'existe donc aucune contradiction logique entre « le Coran est complet » et « le musulman doit suivre l'autorité prophétique que le Coran lui-même institue ».",
      punchline: "Refuser l'autorité que le texte lui-même désigne au nom de la complétude du texte, c'est transformer la complétude en un principe que le texte n'a jamais énoncé."
    }
  },
  {
    id: 2,
    slug: "obeir-au-messager-simple-recitation",
    number: "02",
    title: "Obéir au Messager signifie seulement obéir au message qu'il transmet",
    shortTitle: "Obéir au Messager = Message ?",
    tagline: "Distinguer le porteur du message de l'autorité que le mandant lui confère",
    formula: "AUTORITÉ DÉLÉGUÉE ≠ AUTORITÉ INDÉPENDANTE ≠ SIMPLE FONCTION DE LECTEUR",
    pdfFile: "Comment_demasquer_et_refuter_la_secte_des_coranistes_Argument_2.PDF",
    theme: "Autorité Prophétique & Mandat",
    theirArgument: {
      thesis: "Muhammad est appelé rasūl parce qu'il transmet une risāla. Ainsi, « obéir au Messager » signifierait uniquement « obéir au message qu'il transmet », c'est-à-dire au Coran. Toute autorité supplémentaire attribuée à sa personne serait une extension injustifiée.",
      verses: [
        {
          ref: "Coran 4:59",
          ar: "أَطِيعُوا اللَّهَ وَأَطِيعُوا الرَّسُولَ",
          fr: "« Obéissez à Allah et obéissez au Messager. »"
        },
        {
          ref: "Coran 4:80",
          ar: "مَّن يُطِعِ الرَّسُولَ فَقَدْ أَطَاعَ اللَّهَ",
          fr: "« Celui qui obéit au Messager a certes obéi à Allah. »"
        }
      ],
      realQuestion: "Le fait d'être mandaté pour transmettre un texte exclut-il toute compétence d'ordre, de jugement et de décision conférée par le Mandant ?"
    },
    logicalNode: {
      title: "Mandaté ne veut pas dire simple messager matériel",
      distinctions: [
        {
          term: "SOURCE DE L'AUTORITÉ",
          desc: "Allah est la source suprême et unique du commandement."
        },
        {
          term: "AUTORITÉ DÉLÉGUÉE",
          desc: "Le Messager reçoit le pouvoir d'ordonner, de juger et d'expliquer dans le cadre de sa mission."
        },
        {
          term: "AUTORITÉ INDÉPENDANTE",
          desc: "Une autorité souveraine concurrente d'Allah (ce que personne n'affirme dans le sunnisme)."
        }
      ],
      generalRule: "Un mandant peut donner à son représentant le pouvoir de prendre certaines décisions en son nom. Le représentant ne devient pas souverain ; pourtant ses décisions sont obligatoires dans la limite du mandat.",
      errorToAvoid: "Confondre « le Messager ne possède pas une souveraineté indépendante » avec « le Messager ne peut rien ordonner qui ne soit une citation littérale du texte »."
    },
    centralPrinciple: {
      title: "Obéir au représentant est la manière même d'obéir au mandant",
      formalScheme: "Mandant M : détient l'autorité suprême.\nRègle : M nomme R et ordonne : « Obéissez à R dans le cadre de sa mission ».\nConséquence : Obéir à R = Obéir à M.\nMais : Les paroles de R ne sont pas matériellement identiques à celles de M.",
      explanation: "Le verset 4:80 ne réduit pas le Messager à un simple porte-voix mécanique. Si Allah dit « prenez cet homme pour juge », accepter son jugement est une obéissance à Allah même si ce jugement n'est pas la récitation mot pour mot d'un verset.",
      logicalTest: "Si Allah ordonne de suivre un représentant, refuser ses décisions au nom de la seule lettre du mandant revient à désobéir au mandant lui-même."
    },
    quranicArchitecture: {
      title: "Le Messager doté d'une autorité personnelle de jugement et d'ordre",
      verses: [
        {
          ref: "Coran 4:65",
          ar: "فَلَا وَرَبِّكَ لَا يُؤْمِنُونَ حَتَّىٰ يُحَكِّمُوكَ فِيمَا شَجَرَ بَيْنَهُمْ ثُمَّ لَا يَجِدُوا فِي أَنفُسِهِمْ حَرَجًا مِّمَّا قَضَيْتَ وَيُسَلِّمُوا تَسْلِيمًا",
          fr: "« Non, par ton Seigneur ! Ils ne seront pas croyants jusqu'à ce qu'ils te prennent pour juge dans leurs différends, puis ne ressentent nulle gêne envers ce que tu as décidé... »"
        },
        {
          ref: "Coran 24:63",
          ar: "فَلْيَحْذَرِ الَّذِينَ يُخَالِفُونَ عَنْ أَمْرِهِ",
          fr: "« Que ceux qui s'opposent à son ordre prennent garde... »"
        },
        {
          ref: "Coran 33:36",
          ar: "وَمَا كَانَ لِمُؤْمِنٍ وَلَا مُؤْمِنَةٍ إِذَا قَضَى اللَّهُ وَرَسُولُهُ أَمْرًا أَن يَكُونَ لَهُمُ الْخِيَرَةُ مِنْ أَمْرِهِمْ",
          fr: "« Il n'appartient pas à un croyant ni à une croyante, lorsqu'Allah et Son Messager ont décidé d'une affaire, d'avoir encore le choix... »"
        }
      ],
      consequence: "Le vocabulaire coranique distingue explicitement la récitation du texte d'une fonction de jugement (حكم), de décision (قضاء) et d'ordre (أمر) exercée personnellement par le Messager."
    },
    analogies: [
      {
        num: 1,
        title: "Le général et l'officier",
        scenario: "Un général ordonne : « Suivez les ordres du capitaine pour cette mission. » Un soldat réplique : « Je n'accepterai du capitaine que les phrases exactes prononcées par le général. »",
        logic: "Le général confère une autorité opérationnelle réelle sans abdiquer sa souveraineté.",
        lesson: "Refuser l'officier au nom de l'obéissance exclusive au général est une désobéissance directe au général.",
        application: "Obéir à l'autorité prophétique déléguée ne concurrence pas Allah : elle procède de Son ordre."
      },
      {
        num: 2,
        title: "La loi et le juge",
        scenario: "Une loi fondamentale stipule qu'en cas de litige, le juge compétent tranche. Une partie répond : « Je respecte la loi, mais je refuse le juge et je lirai la loi moi-même. »",
        logic: "Le jugement n'est pas une 2e loi, mais l'exercice d'une compétence conférée par la loi.",
        lesson: "Accepter une décision extérieure au texte matériel est une obligation créée par le texte.",
        application: "Le parallèle avec 4:65 (« qu'ils te prennent pour juge ») est direct."
      },
      {
        num: 3,
        title: "L'ambassadeur mandaté",
        scenario: "Un chef d'État remet une lettre à son ambassadeur et lui donne pouvoir de négocier et trancher les modalités.",
        logic: "La lettre et l'autorité personnelle de l'ambassadeur procèdent du même mandant.",
        lesson: "Dire « je n'écoute l'ambassadeur que lorsqu'il récite la lettre » supprime une part essentielle de son mandat.",
        application: "Muhammad transmet le Coran mais reçoit également une compétence normative déléguée."
      }
    ],
    objections: [
      {
        obj: "« Le Messager ne faisait qu'appliquer le Coran, ses jugements ne sont pas une autorité supplémentaire. »",
        ans: "Coran 4:65 impose d'accepter « ce qu'il a décidé ». Même si la décision applique les principes de la révélation, elle constitue une décision prophétique contraignante."
      },
      {
        obj: "« Son autorité ne concernait que ceux qui vivaient avec lui. »",
        ans: "C'est une autre question qui déplace le débat vers la transmission historique sans réfuter le principe de son autorité normative."
      }
    ],
    framingQuestions: [
      "Lorsque 4:65 dit « qu'ils te prennent pour juge », pourquoi remplacer « toi » par « le texte seulement » ?",
      "Que signifie « ce que tu as décidé » si le Prophète n'avait aucune fonction décisionnelle ?",
      "Que signifie « son ordre » en 24:63 s'il n'avait qu'un rôle de lecteur mécanique ?",
      "Une autorité peut-elle être réelle tout en étant subordonnée à une autorité souveraine ?"
    ],
    readyResponses: {
      quick30s: "Dire que « obéir au Messager » signifie uniquement « obéir au texte qu'il récite » est contredit par le Coran lui-même. Le Coran exige de prendre Muhammad lui-même pour juge (4:65), d'accepter « ce qu'il a décidé », met en garde contre ceux qui désobéissent à « son ordre » (24:63) et mentionne les décisions conjointes d'Allah et de Son Messager (33:36). Son autorité n'est pas concurrente d'Allah : elle est déléguée par Allah.",
      developed: "L'erreur coraniste consiste à poser un faux dilemme : soit le Prophète serait une autorité concurrente d'Allah, soit un simple facteur sans pouvoir décisionnel. La réalité coranique est celle de l'autorité déléguée : Allah demeure l'unique Souverain, mais mandate Son Messager pour juger, ordonner et expliquer. Obéir aux décisions du délégué est précisément la manière prescrite par le Mandant pour Lui obéir."
    },
    conclusion: {
      steps: [
        "Le coraniste affirme que « Messager » équivaut à simple boîte aux lettres.",
        "Le Coran ordonne expressément de prendre sa personne pour juge et d'obéir à ses ordres.",
        "L'autorité prophétique est donc réelle, bien qu'entièrement dérivée d'Allah."
      ],
      finalText: "Obéir au Messager ne se réduit pas à écouter une récitation de versets.",
      punchline: "Refuser l'autorité du représentant au nom de l'autorité du mandant devient une désobéissance au mandant lorsque c'est lui-même qui a ordonné de suivre ce représentant."
    }
  },
  {
    id: 3,
    slug: "allah-seul-legifere-autorite-normative",
    number: "03",
    title: "Allah seul légifère : le Prophète peut-il recevoir une autorité normative ?",
    shortTitle: "Allah seul légifère ?",
    tagline: "Souveraineté divine, délégation d'autorité et conséquences logiques",
    formula: "SOUVERAINETÉ EXCLUSIVE ≠ AUTORITÉ DÉLÉGUÉE",
    pdfFile: "Comment_demasquer_et_refuter_la_secte_des_coranistes_Argument_3.PDF",
    theme: "Législation & Souveraineté Divine",
    theirArgument: {
      thesis: "Allah seul possède le droit de légiférer (إِنِ الْحُكْمُ إِلَّا لِلَّهِ). Par conséquent, aucune parole humaine ne peut rendre obligatoire, interdit ou licite ce qui n'est pas dans le Coran. Reconnaître une autorité normative à la Sunna reviendrait à donner au Prophète une part du ḥukm d'Allah.",
      verses: [
        {
          ref: "Coran 12:40",
          ar: "إِنِ الْحُكْمُ إِلَّا لِلَّهِ",
          fr: "« Le jugement n'appartient qu'à Allah. »"
        },
        {
          ref: "Coran 6:57 & 18:26",
          ar: "وَلَا يُشْرِكُ فِي حُكْمِهِ أَحَدًا",
          fr: "« Et Il n'associe personne à Son jugement. »"
        }
      ],
      realQuestion: "Le fait qu'Allah soit l'unique souverain L'empêche-t-il de déléguer une autorité normative ou judiciaire à Ses créatures ?"
    },
    logicalNode: {
      title: "Souveraineté exclusive vs Autorité déléguée",
      distinctions: [
        {
          term: "AUTORITÉ SOUVERAINE",
          desc: "Appartient exclusivement à Allah par essence et de manière autonome."
        },
        {
          term: "AUTORITÉ DÉLÉGUÉE",
          desc: "Appartient à celui auquel Allah accorde une compétence déterminée dans le cadre de sa mission."
        }
      ],
      generalRule: "Une autorité déléguée ne concurrence pas la souveraineté : elle en est le canal et l'expression.",
      errorToAvoid: "Passer sans justification de « Allah seul possède la souveraineté suprême » à « Allah ne peut confier aucune autorité normative à une créature »."
    },
    centralPrinciple: {
      title: "Le Coran attribue explicitement au Messager une fonction normative",
      formalScheme: "Coran 7:157 : « Il leur rend licites les bonnes choses et leur interdit les mauvaises » (يُحِلُّ لَهُمُ الطَّيِّبَاتِ وَيُحَرِّمُ عَلَيْهِمُ الْخَبَائِثَ).\nVerbes actifs : يُحِلُّ (il rend licite) et يُحَرِّمُ (il interdit).",
      explanation: "Le Coran répond par avance à la question : le Prophète a-t-il une fonction sur le licite et l'illicite ? Oui, car Allah la lui a confiée. Le Coran ordonne même d'obéir à des autorités humaines subordonnées (4:59 : 'ceux d'entre vous qui détiennent l'autorité').",
      logicalTest: "Si aucune créature ne pouvait exercer d'autorité contraignante, aucun juge ne pourrait condamner un criminel, aucun tribunal ni gouvernement ne pourrait exister."
    },
    quranicArchitecture: {
      title: "Niveaux d'autorité institués dans le Coran",
      verses: [
        {
          ref: "Coran 7:157",
          ar: "وَيُحِلُّ لَهُمُ الطَّيِّبَاتِ وَيُحَرِّمُ عَلَيْهِمُ الْخَبَائِثَ",
          fr: "« Il leur rend licites les bonnes choses et leur interdit les mauvaises. »"
        },
        {
          ref: "Coran 4:59",
          ar: "أَطِيعُوا اللَّهَ وَأَطِيعُوا الرَّسُولَ وَأُولِي الْأَمْرِ مِنكُمْ",
          fr: "« Obéissez à Allah, obéissez au Messager et à ceux d'entre vous qui détiennent l'autorité. »"
        },
        {
          ref: "Coran 33:36",
          ar: "إِذَا قَضَى اللَّهُ وَرَسُولُهُ أَمْرًا",
          fr: "« Lorsqu'Allah et Son Messager ont décidé d'une affaire... »"
        }
      ],
      consequence: "Allah établit la hiérarchie : Allah → Messager → Détenteurs de l'autorité. Personne ne considère que les gouverneurs deviennent des divinités associées ; leur autorité est simplement déléguée."
    },
    analogies: [
      {
        num: 1,
        title: "L'organisation judiciaire et le meurtre",
        scenario: "La loi divine interdit le meurtre et pose la sanction générale. Mais le texte ne dit pas d'avance : « En l'an X, untel à Paris sera coupable. »",
        logic: "Un juge humain doit qualifier les faits, évaluer les preuves et prononcer un jugement contraignant.",
        lesson: "Sans autorité humaine déléguée, aucune justice concrète n'est possible.",
        application: "La sentence du juge n'est pas une rivale de la loi divine : elle en est l'application concrète mandatée."
      },
      {
        num: 2,
        title: "Le chef d'entreprise et le directeur",
        scenario: "Le propriétaire dit aux salariés : « Suivez les décisions du directeur pour l'organisation du travail. »",
        logic: "Un employé ne peut dire « je n'obéis qu'au propriétaire, je refuse le directeur ».",
        lesson: "Mandat ≠ Rivalité.",
        application: "Refuser l'autorité du Prophète au nom de la souveraineté d'Allah est un contresens total."
      },
      {
        num: 3,
        title: "La loi et le policier sur la route",
        scenario: "Le policier demande à un conducteur de s'arrêter. Le conducteur réplique : « Je n'obéis qu'à la loi, pas aux agents. »",
        logic: "C'est précisément la loi qui confère à l'agent sa compétence opérationnelle.",
        lesson: "L'autorité de l'agent découle de la loi elle-même.",
        application: "L'autorité du Messager découle de l'ordre d'Allah."
      }
    ],
    objections: [
      {
        obj: "« Le Prophète ne faisait qu'appliquer ce qui était déjà écrit dans le Coran. »",
        ans: "Le Coran 7:157 lui attribue expressément les verbes d'interdire et de rendre licite. Coran 4:65 impose de se soumettre à ses décisions personnelles de jugement."
      }
    ],
    framingQuestions: [
      "Le fait qu'Allah soit l'unique souverain L'empêche-t-il de donner une autorité à une créature ?",
      "Si aucune créature ne peut juger, comment existent les juges, tribunaux et gouvernants ?",
      "Pourquoi 7:157 dit-il qu'il « leur rend licite et leur interdit » si toute interdiction devait être mot à mot dans le texte antérieur ?"
    ],
    readyResponses: {
      quick30s: "Le fait qu'Allah soit le seul Législateur souverain ne signifie pas qu'Il ne peut pas déléguer une autorité. Le Coran affirme explicitement en 7:157 que le Prophète « leur rend licites les bonnes choses et leur interdit les mauvaises », et ordonne en 4:59 d'obéir au Messager et aux gouvernants. Une autorité déléguée ne concurrence pas la souveraineté divine : elle en est l'exercice voulu par Allah.",
      developed: "L'argument coraniste repose sur une confusion entre souveraineté absolue et autorité déléguée. Dans toute société, la Constitution est suprême mais mandate des juges et officiers pour rendre des décisions obligatoires. De même, le Prophète n'est pas un législateur indépendant : son autorité normative est subordonnée et mandatée par Allah Lui-même."
    },
    conclusion: {
      steps: [
        "Souveraineté exclusive et autorité déléguée sont deux concepts compatibles.",
        "Le Coran attribue au Messager des compétences d'interdiction, de permission et de jugement.",
        "Refuser cette autorité déléguée détruit la cohérence du texte et rend toute application sociale impossible."
      ],
      finalText: "Le Prophète n'est pas une seconde source souveraine face à Allah ; il est une autorité instituée par Allah.",
      punchline: "L'autorité déléguée ne diminue pas l'autorité souveraine : elle en est l'exercice."
    }
  },
  {
    id: 4,
    slug: "mission-messager-transmettre-balagh",
    number: "04",
    title: "Le Messager n'a pour mission que de transmettre le Coran",
    shortTitle: "Transmission = Récitation ?",
    tagline: "Explication, enseignement, jugement, exemplarité : ce que le Coran attribue réellement au Messager",
    formula: "TRANSMISSION ≠ RÉCITATION MÉCANIQUE (Fonction principale ≠ Fonction exclusive)",
    pdfFile: "Comment_demasquer_et_refuter_la_secte_des_coranistes_Argument_4.pdf",
    theme: "Vocabulaire Coranique & Fonctions Prophétiques",
    theirArgument: {
      thesis: "Le Coran déclare : « Il n'incombe au Messager que la transmission » (5:99, 16:35, 24:54). Donc sa fonction se limiterait strictement à remettre matériellement le Coran, sans autorité explicative, judiciaire ni normative.",
      verses: [
        {
          ref: "Coran 5:99",
          ar: "مَّا عَلَى الرَّسُولِ إِلَّا الْبَلَاغُ",
          fr: "« Il n'incombe au Messager que la transmission. »"
        },
        {
          ref: "Coran 24:54",
          ar: "وَإِن تُطِيعُوهُ تَهْتَدُوا ۚ وَمَا عَلَى الرَّسُولِ إِلَّا الْبَلَاغُ الْمُبِينُ",
          fr: "« Et si vous lui obéissez, vous serez bien guidés. Et il n'incombe au Messager que la transmission claire. »"
        }
      ],
      realQuestion: "La formule du balâgh décrit-elle la totalité exclusive des tâches du Messager, ou souligne-t-elle sa non-responsabilité face au refus des hommes de croire ?"
    },
    logicalNode: {
      title: "Fonction principale vs Fonction exclusive",
      distinctions: [
        {
          term: "FONCTION PRINCIPALE",
          desc: "La transmission claire de la révélation divine."
        },
        {
          term: "FONCTIONS COMPLÉMENTAIRES",
          desc: "Expliquer (Bayân), Enseigner (Ta'lîm), Juger (Hukm), Être un modèle vivant (Uswah)."
        }
      ],
      generalRule: "Dire « le travail du médecin est de soigner » ne signifie pas qu'il n'examine pas, ne diagnostique pas et ne conseille pas. Ces actes font partie de l'acte de soigner.",
      errorToAvoid: "Transformer une formule générale limitant la responsabilité du Prophète face aux mécréants en interdiction d'exercer ses fonctions d'enseignement et d'explication."
    },
    centralPrinciple: {
      title: "Le test des six verbes coraniques",
      formalScheme: "1. البلاغ (al-balâgh) : Transmission\n2. تلاوة (tilâwah) : Récitation des versets\n3. بيان (bayân) : Explication claire (16:44)\n4. تعليم (ta'lîm) : Enseignement du Livre et de la Sagesse (2:129, 2:151)\n5. حكم (hukm) : Jugement des litiges (4:65)\n6. أسوة (uswah) : Modèle pratique exemplaire (33:21)",
      explanation: "Pourquoi Allah utiliserait-Il six notions distinctes si chacune devait être réduite au sens unique de « réciter mécaniquement le Coran » ? Le Coran sépare explicitement la récitation (يَتْلُو) et l'enseignement (يُعَلِّمُ).",
      logicalTest: "Si un livre te dit d'écouter le professeur, refuser le professeur au nom du livre n'est pas « suivre le livre »."
    },
    quranicArchitecture: {
      title: "La mission d'explication et d'enseignement dans le Coran",
      verses: [
        {
          ref: "Coran 16:44",
          ar: "وَأَنزَلْنَا إِلَيْكَ الذِّكْرَ لِتُبَيِّنَ لِلنَّاسِ مَا نُزِّلَ إِلَيْهِمْ",
          fr: "« Et Nous avons fait descendre vers toi le Rappel afin que tu exposes clairement (li-tubayyina) aux gens ce qui leur a été révélé. »"
        },
        {
          ref: "Coran 2:151",
          ar: "يَتْلُو عَلَيْكُمْ آيَاتِنَا وَيُزَكِّيكُمْ وَيُعَلِّمُكُمُ الْكِتَابَ وَالْحِكْمَةَ",
          fr: "« Il vous récite Nos versets, vous purifie, et vous enseigne le Livre et la Sagesse. »"
        },
        {
          ref: "Coran 33:21",
          ar: "لَّقَدْ كَانَ لَكُمْ فِي رَسُولِ اللَّهِ أُسْوَةٌ حَسَنَةٌ",
          fr: "« Vous avez certes dans le Messager d'Allah un excellent modèle. »"
        }
      ],
      consequence: "La chaîne logique coranique est : Révélation → Transmission → Explication → Compréhension → Application."
    },
    analogies: [
      {
        num: 1,
        title: "Le professeur et son programme",
        scenario: "La mission du professeur est de transmettre le programme officiel. Personne ne suppose qu'il doit seulement lire le manuel à voix haute.",
        logic: "Il explique, répond aux questions, corrige les copies et montre des exercices.",
        lesson: "Transmission ≠ Récitation mécanique.",
        application: "La mission prophétique comporte la transmission du texte et son enseignement explicatif."
      },
      {
        num: 2,
        title: "Le porte-parole officiel",
        scenario: "Un porte-parole communique une décision officielle, puis en précise le sens et répond aux questions de la presse.",
        logic: "L'explication fidèle fait partie intégrante de la mission de transmission.",
        lesson: "Expliciter le texte ne concurrence pas le texte.",
        application: "Le bayân du Prophète rend la révélation intelligible."
      },
      {
        num: 3,
        title: "Expliqué à un enfant de 6 ans",
        scenario: "Maman donne un livre au maître d'école : « Donne ce livre aux enfants, explique-le et montre-leur comment faire. » L'enfant dit : « Je prends le livre mais je n'écoute pas le maître. »",
        logic: "Le maître a reçu mandat d'expliquer le livre.",
        lesson: "Si le livre ordonne d'écouter le maître, refuser le maître est un refus du livre.",
        application: "Refuser la Sunna sous couvert du Coran contredit les ordres du Coran."
      }
    ],
    objections: [
      {
        obj: "« Le verset 5:99 dit 'Il n'incombe QUE la transmission', c'est une formule de restriction absolue. »",
        ans: "Dans son contexte coranique, cette restriction délimite la responsabilité du Prophète : il est responsable de transmettre clairement, pas de forcer la conversion des cœurs (16:35, 24:54). Elle n'annule pas les autres versets qui lui confient l'explication (16:44), l'enseignement (2:151) et le jugement (4:65)."
      }
    ],
    framingQuestions: [
      "Pourquoi le Coran utilise-t-il les verbes 'réciter' ET 'enseigner' s'ils sont strictement synonymes ?",
      "Que signifie 'afin que tu exposes clairement aux gens' en 16:44 si le texte était déjà auto-explicatif pour chacun sans le Prophète ?",
      "Un modèle vivant (uswah) peut-il se limiter à une boîte aux lettres muette ?"
    ],
    readyResponses: {
      quick30s: "Dire que « transmettre » signifie seulement « réciter » est une réduction contredite par le texte coranique. Le Coran distingue la récitation (tilâwah), l'explication (bayân en 16:44), l'enseignement du Livre et de la sagesse (ta'lîm en 2:151), le jugement (hukm en 4:65) et l'exemplarité pratique (uswah en 33:21). La restriction du balâgh indique que le Prophète ne peut contraindre les gens à croire, pas qu'il n'a pas le droit d'enseigner et d'expliquer la révélation.",
      developed: "La transmission d'une doctrine ne se résume pas à distribuer un texte écrit. Tout comme un professeur transmet un programme en l'expliquant et en montrant des exemples, le Prophète a transmis la révélation par ses paroles, ses explications et sa mise en pratique. Les versets de restriction rappellent qu'il n'est pas responsable du choix final des incroyants, sans jamais annuler les fonctions explicatives et normatives que le Coran lui attribue explicitement."
    },
    conclusion: {
      steps: [
        "Transmettre n'exclut ni l'explication, ni l'enseignement, ni le modèle.",
        "Le Coran utilise un vocabulaire riche et varié pour définir la mission de son Messager.",
        "Le général (balâgh) n'annule pas les ordres particuliers (bayân, hukm, ta'lîm)."
      ],
      finalText: "Le rôle du Messager dépasse nécessairement la simple remise matérielle d'un texte.",
      punchline: "Démonstration pratique ≠ ajout à la révélation. Délégation prévue ≠ lacune du texte."
    },
    quiz: [
      {
        q: "Dire « sa mission est de transmettre » signifie-t-il forcément qu'il ne fait rien d'autre ?",
        options: ["Oui, toujours", "Non, une mission générale peut comporter plusieurs tâches", "Seulement si le texte est court"],
        answer: 1,
        explanation: "Une fonction principale n'exclut pas les fonctions complémentaires requises pour la remplir."
      },
      {
        q: "Dans Sourate An-Nahl (16:44), quelle mission est confiée au Prophète ?",
        options: ["Cacher le sens du texte", "Exposer clairement ce qui a été révélé (Bayân)", "Refuser de répondre aux questions"],
        answer: 1,
        explanation: "Le terme 'li-tubayyina' signifie rendre clair, expliciter et rendre intelligible la révélation."
      },
      {
        q: "Pourquoi le Coran mentionne-t-il séparément 'réciter' et 'enseigner' en 2:151 ?",
        options: ["Parce que ce sont deux fonctions distinctes", "Parce que c'est une simple répétition", "Par erreur"],
        answer: 0,
        explanation: "La récitation transmet la lettre du texte, tandis que l'enseignement transmet son sens et ses règles."
      }
    ]
  },
  {
    id: 5,
    slug: "allah-preserve-coran-pas-hadiths",
    number: "05",
    title: "Allah a préservé le Coran, pas les Hadiths",
    shortTitle: "Préservation Coran vs Hadiths",
    tagline: "Préservation spéciale ≠ corruption de tout le reste",
    formula: "PRÉSERVATION SPÉCIALE DU CORAN ≠ DISPARITION DE LA SUNNA",
    pdfFile: "Comment_demasquer_et_refuter_la_secte_des_coranistes_Argument_5.pdf",
    theme: "Authenticité & Transmission Historique",
    theirArgument: {
      thesis: "Le Coran dit en 15:9 : « C'est Nous qui avons fait descendre le Rappel et c'est Nous qui en sommes gardien ». Aucun verset ne promet de préserver Bukhârî ou les hadiths. Les hadiths ont été transmis par des hommes faillibles ; seul le Coran est certain et préservé.",
      verses: [
        {
          ref: "Coran 15:9",
          ar: "إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ",
          fr: "« C'est Nous qui avons fait descendre le Rappel et c'est Nous qui en sommes gardien. »"
        }
      ],
      realQuestion: "La promesse divine d'une protection miraculeuse pour le Coran implique-t-elle que toute autre transmission historique soit automatiquement falsifiée ou inutilisable ?"
    },
    logicalNode: {
      title: "Les 5 erreurs logiques du coranisme sur la préservation",
      distinctions: [
        {
          term: "ARGUMENT DU SILENCE",
          desc: "« Allah n'a pas dit qu'Il préserverait les hadiths mot à mot, donc rien n'a été préservé » (sophisme)."
        },
        {
          term: "FAUX DILEMME",
          desc: "« Soit c'est 100% garanti par miracle divin comme le Coran, soit c'est 0% utilisable »."
        },
        {
          term: "GÉNÉRALISATION ABUSIVE",
          desc: "« Certains hadiths sont faux, donc tous les hadiths sont faux »."
        },
        {
          term: "TOUT OU RIEN",
          desc: "« Tout n'a pas été conservé, donc rien de fiable ne subsiste »."
        },
        {
          term: "SOURCE SUPRÊME ≠ UNIQUE",
          desc: "Le Coran est la source suprême, cela n'exclut pas des sources subordonnées."
        }
      ],
      generalRule: "Une garantie spéciale pour l'élément A ne prouve jamais la fausseté ou l'anéantissement de l'élément B.",
      errorToAvoid: "Confondre certitude absolue (qat'î) et fiabilité historique suffisante (zannî râtih)."
    },
    centralPrinciple: {
      title: "Le grand dilemme historique",
      formalScheme: "Question : Une information qui ne bénéficie pas d'une promesse coranique explicite peut-elle être historiquement fiable ?\n- Si NON : Il faut rejeter la grammaire arabe, les dictionnaires, l'histoire du mushaf et les lectures (ce qui rend le Coran incompréhensible).\n- Si OUI : L'objection de principe tombe, et il faut examiner les preuves méthodologiques.",
      explanation: "Allah préserve également Sa religion à travers des causes humaines et des générations de savants. Le Coran lui-même est parvenu au musulman moderne par l'intermédiaire de transmetteurs humains, de manuscrits et de maîtres de récitation.",
      logicalTest: "Comment le coraniste sait-il comment prononcer les lettres arabes ou ce que signifient les mots rares du Coran sans faire confiance à la transmission linguistique humaine ?"
    },
    quranicArchitecture: {
      title: "La contradiction interne du rejet total",
      verses: [
        {
          ref: "Coran 4:59 & 4:80",
          ar: "مَّن يُطِعِ الرَّسُولَ فَقَدْ أَطَاعَ اللَّهَ",
          fr: "« Celui qui obéit au Messager a certes obéi à Allah. »"
        },
        {
          ref: "Coran 33:21",
          ar: "لَّقَدْ كَانَ لَكُمْ فِي رَسُولِ اللَّهِ أُسْوَةٌ حَسَنَةٌ",
          fr: "« Vous avez certes dans le Messager d'Allah un excellent modèle. »"
        }
      ],
      consequence: "Si aucun enseignement du Prophète ne devait être préservé après sa mort, l'ordre coranique d'obéissance et de modèle deviendrait une coquille vide pour toutes les générations futures."
    },
    analogies: [
      {
        num: 1,
        title: "Le coffre-fort de la banque",
        scenario: "Une banque protège spécialement un acte original dans son coffre blindé principal.",
        logic: "Cela ne transforme pas tous les autres dossiers de la banque en faux documents.",
        lesson: "Garantie spéciale de A ≠ corruption générale de B.",
        application: "La préservation spéciale du Coran n'annule pas la fiabilité de la Sunna."
      },
      {
        num: 2,
        title: "Les faux billets et la monnaie",
        scenario: "Parce que des faux billets existent, les banques ne jettent pas toute la monnaie.",
        logic: "Elles créent des outils d'authentification et de détection.",
        lesson: "La contrefaçon impose la vérification, elle ne détruit pas l'authenticité.",
        application: "L'existence de faux hadiths a suscité la science critique du hadith (isnâd, jarh wa ta'dîl)."
      },
      {
        num: 3,
        title: "La bibliothèque incendiée",
        scenario: "Une bibliothèque de 1000 manuscrits subit un incendie et perd 300 livres.",
        logic: "Les 700 manuscrits survivants ne cessent pas d'être vrais et utiles.",
        lesson: "Tout n'a pas été conservé ≠ Rien n'a été conservé.",
        application: "La perte de certaines informations n'invalide pas ce qui nous est parvenu avec certitude."
      },
      {
        num: 4,
        title: "Le tribunal et le niveau de preuve",
        scenario: "Un juge n'exige pas une révélation descendue du ciel pour chaque affaire : il s'appuie sur des témoignages concordants et des recoupements.",
        logic: "Certitude absolue et fiabilité probante sont deux niveaux légitimes.",
        lesson: "Une information historique rigoureusement recoupée est juridiquement recevable.",
        application: "La science du hadith applique des standards d'authentification stricts."
      }
    ],
    objections: [
      {
        obj: "« Mais Bukhârî et Muslim sont des hommes, ils ont pu se tromper ! »",
        ans: "Le sunnisme ne dit pas que chaque recueil est divinement infaillible comme le Coran. L'autorité vient du Prophète, les recueils sont les témoins historiques de ce qui a été transmis. Les savants ont établi des degrés de fiabilité précis (sahîh, hasan, da'îf)."
      }
    ],
    framingQuestions: [
      "Où Sourate Al-Hijr verset 9 dit-elle que rien d'autre que le Coran ne pourra être correctement transmis ?",
      "L'absence de promesse explicite constitue-t-elle une preuve de falsification totale ?",
      "Comment suivez-vous le Messager comme modèle si toute information sur sa vie est rejetée ?"
    ],
    readyResponses: {
      quick30s: "C'est vrai que le Coran possède une garantie divine unique de préservation. Mais où le verset dit-il que toute autre transmission sera corrompue ? Une protection spéciale pour le Coran ne signifie pas que tout le reste est faux. Le même Coran m'ordonne d'obéir au Messager et de le prendre pour modèle. La vraie question n'est donc pas : « Les hadiths sont-ils préservés de façon identique au Coran ? », mais : « Peut-on identifier de manière fiable les enseignements du Messager ? » Et là, il faut examiner les preuves historiques.",
      developed: "L'argument coraniste repose sur le sophisme du tout ou rien : si une chose n'a pas la garantie surnaturelle du Coran, elle serait nulle. Or, toute l'histoire humaine, la justice et même la langue arabe reposent sur la transmission historique critique. La présence de faux récits n'annule pas les vrais, tout comme la fausse monnaie n'abolit pas la vraie : elle impose simplement des sciences rigoureuses d'authentification (critique des chaînes, comparaison des variantes), ce que les savants musulmans ont développé."
    },
    conclusion: {
      steps: [
        "Sourate 15:9 établit la protection singulière du Coran.",
        "Elle n'affirme nulle part que la Sunna sera anéantie ou indisponible.",
        "Le rejet systématique de la transmission humaine détruit les outils nécessaires à la compréhension même du Coran."
      ],
      finalText: "Allah a garanti la préservation du Coran, Il n'a nulle part ordonné de rejeter la Sunna.",
      punchline: "Préservation spéciale du Coran ≠ Disparition de la Sunna."
    },
    quiz: [
      {
        q: "Une protection spéciale accordée à A prouve-t-elle que B est corrompu ?",
        options: ["Oui, automatiquement", "Non, cela prouve seulement la garantie accordée à A", "Seulement pour les livres religieux"],
        answer: 1,
        explanation: "Une garantie spécifique prouve la protection de l'élément garanti, pas la falsification du reste."
      },
      {
        q: "L'existence de faux billets prouve-t-elle l'inexistence de vrais billets ?",
        options: ["Oui", "Non, elle impose seulement des méthodes de vérification", "Cela dépend du montant"],
        answer: 1,
        explanation: "La fausse monnaie prouve le besoin de contrôle, pas la disparition de la vraie monnaie."
      }
    ]
  },
  {
    id: 6,
    slug: "hadiths-compiles-trop-tard",
    number: "06",
    title: "Les Hadiths ont été compilés trop tard",
    shortTitle: "Compilation tardive ?",
    tagline: "Compilation tardive ≠ origine tardive",
    formula: "COMPILATION TARDIVE ≠ ORIGINE TARDIVE (Faux récits ≠ Inexistence des vrais)",
    pdfFile: "Comment_demasquer_et_refuter_la_secte_des_coranistes_Argument_6.pdf",
    theme: "Histoire & Méthodologie de l'Isnâd",
    theirArgument: {
      thesis: "Le Prophète est mort en 11 H. Les grands recueils comme Bukhârî (m. 256 H) et Muslim (m. 261 H) ont été rédigés plus de deux siècles plus tard, après des guerres civiles et des fabrications. Tout le corpus doit donc être rejeté au profit du Coran seul.",
      verses: [],
      realQuestion: "La date de parution d'un recueil écrit équivaut-elle à la date de création des traditions qu'il compile ?"
    },
    logicalNode: {
      title: "Date du livre vs Date du contenu",
      distinctions: [
        {
          term: "COMPILATION",
          desc: "L'acte matériel de rassembler et classifier dans un grand ouvrage de référence."
        },
        {
          term: "TRANSMISSION",
          desc: "Le flux historique ininterrompu d'enseignement oral, de carnets de notes (suhuf) et d'auditions."
        }
      ],
      generalRule: "Un historien qui publie en 2026 un recueil de lettres de poilus de 1916 ne fabrique pas ces lettres en 2026 : le recueil est récent, le matériau est ancien.",
      errorToAvoid: "Faire d'Al-Bukhârî le point de départ du hadith alors qu'il n'en est qu'un compilateur critique parmi d'autres."
    },
    centralPrinciple: {
      title: "Des matériaux écrits et oraux bien antérieurs à Al-Bukhârî",
      formalScheme: "Chronologie réelle :\nProphète (m. 11 H) → Compagnons (notes, mémorisation) → Sahîfah de Hammâm ibn Munabbih (env. 100 H d'après Abû Hurayrah) → Muwatta de l'imam Mâlik (m. 179 H) → Musannaf de 'Abd al-Razzâq (m. 211 H) → Sahîh Al-Bukhârî (m. 256 H).",
      explanation: "Il n'y a jamais eu deux siècles de silence documentaire. Les transmissions circulaient dans les cercles d'enseignement, vérifiées par la méthode de l'Isnâd (qui a transmis ? à qui ? quand ? où ? recoupements des variantes).",
      logicalTest: "Le Coran lui-même a été compilé en mushaf de référence sous Abû Bakr et standardisé sous 'Uthmân après la mort du Prophète. Le coraniste admet donc déjà qu'un texte existe avant son rassemblement officiel."
    },
    quranicArchitecture: {
      title: "Le double standard des Qirâ'ât (Lectures coraniques)",
      verses: [],
      consequence: "Le coraniste moderne lit un Coran vocalisé selon une transmission humaine précise : la lecture de 'Âsim rapportée par Hafs (Ḥafṣ 'an 'Āṣim). S'il rejette toute chaîne humaine de transmission, sur quelle base sait-il que la lecture de Hafs est authentique ? L'argument des qirâ'ât montre que la transmission humaine n'est pas invalide par nature."
    },
    analogies: [
      {
        num: 1,
        title: "L'encyclopédie et les cours du professeur",
        scenario: "Un professeur réputé enseigne pendant 40 ans. Cinquante ans après, une université rassemble ses cours dans une encyclopédie.",
        logic: "L'encyclopédie tardive ne crée pas l'enseignement : elle l'organise.",
        lesson: "Rassembler ≠ Inventer.",
        application: "Bukhârî a compilé des traditions qui étaient déjà enseignées et écrites bien avant lui."
      },
      {
        num: 2,
        title: "La police scientifique et les témoins",
        scenario: "L'enquêteur sait que certains témoins mentent. Il ne jette pas le dossier : il recoupe 5 témoignages indépendants, des horaires et des preuves matérielles.",
        logic: "La possibilité abstraite de mensonge s'efface devant la convergence de preuves indépendantes.",
        lesson: "Le risque d'erreur appelle l'enquête, pas l'abandon.",
        application: "La science de l'Isnâd et du Jarh wa Ta'dîl a analysé chaque maillon de la chaîne."
      }
    ],
    objections: [
      {
        obj: "« Les chaînes de transmission (isnâd) ont très bien pu être inventées de toutes pièces. »",
        ans: "Qu'une chaîne puisse théoriquement être inventée est une chose ; affirmer que TOUTES les milliers de chaînes de tous les savants de différentes contrées (Médine, Koufa, Bassora, Damas, Égypte) ont été inventées de manière coordonnée est une impossibilité historique."
      }
    ],
    framingQuestions: [
      "La date de publication d'un livre est-elle la date de naissance de son contenu historique ?",
      "Connaissez-vous la Sahîfah de Hammâm ibn Munabbih ou le Muwatta de l'imam Mâlik (179 H) ?",
      "Savez-vous ce qu'est la lecture Hafs 'an 'Asim par laquelle vous lisez le Coran ?"
    ],
    readyResponses: {
      quick30s: "Dire qu'Al-Bukhârî a compilé son Sahîh au IIIe siècle ne signifie pas que ses traditions sont apparues au IIIe siècle. Le Coran lui-même illustre la différence entre transmission antérieure et compilation postérieure : son rassemblement en mushaf officiel s'est fait après la mort du Prophète. De plus, des recueils comme le Muwatta de Mâlik (179 H) ou la Sahîfah de Hammâm ibn Munabbih prouvent une transmission écrite très précoce. Et si tu rejettes toute chaîne humaine, explique comment tu sais que tu lis la récitation de Hafs d'après 'Âsim !",
      developed: "La critique temporelle confond la date d'une compilation encyclopédique avec la date d'origine des données. Les hadiths n'étaient pas stockés dans le néant pendant deux siècles : ils étaient mémorisés, transcrits sur des carnets personnels, enseignés dans les mosquées et transmis de maître à élève. L'apparition de faux hadiths a justement motivé la création d'un système critique ultra-poussé pour filtrer les récits authentiques."
    },
    conclusion: {
      steps: [
        "La date du recueil n'est pas la date du contenu.",
        "Des sources écrites et orales continues existaient avant Bukhârî.",
        "L'existence de contrefaçons justifie la critique, pas le rejet global."
      ],
      finalText: "La méthode rationnelle consiste à examiner les traditions selon leurs chaînes et preuves historiques, et non à les rejeter par un slogan général.",
      punchline: "Compilation tardive ≠ Origine tardive. Faux récits ≠ Inexistence des vrais."
    },
    quiz: [
      {
        q: "Al-Bukhârî est-il le premier à avoir mis des hadiths par écrit ?",
        options: ["Oui, absolument", "Non, des écrits comme la Sahîfah de Hammâm et le Muwatta existaient avant lui", "Seulement à La Mecque"],
        answer: 1,
        explanation: "De nombreuses collections et feuillets de Compagnons et Successeurs précèdent Al-Bukhârî de plus d'un siècle."
      },
      {
        q: "Quelle transmission de lecture coranique est la plus lue aujourd'hui ?",
        options: ["Hafs 'an 'Asim", "Bukhârî 'an Muslim", "Une lecture sans aucun transmetteur"],
        answer: 0,
        explanation: "Hafs d'après 'Asim est une chaîne de transmission humaine de la récitation du Coran."
      }
    ]
  },
  {
    id: 7,
    slug: "prophete-interdit-ecrire-paroles",
    number: "07",
    title: "Le Prophète a interdit d'écrire ses paroles",
    shortTitle: "Interdiction d'écrire les Hadiths ?",
    tagline: "Réglementer l'écriture ≠ abolir la Sunna",
    formula: "RÉGLEMENTER L'ÉCRITURE ≠ ABOLIR LA SUNNA (Support ≠ Autorité)",
    pdfFile: "Comment_demasquer_et_refuter_la_secte_des_coranistes_Argument_7.pdf",
    theme: "Droit des Sources & Hadiths d'Écriture",
    theirArgument: {
      thesis: "Le coraniste cite le hadith de Sahîh Muslim 3004 : « N'écrivez rien de moi. Celui qui a écrit autre chose que le Coran, qu'il l'efface ». Selon eux, le Prophète aurait interdit la mise par écrit de ses paroles, et les compilations de hadiths seraient donc une désobéissance formelle.",
      verses: [],
      realQuestion: "Une consigne contextuelle ou temporaire sur le support écrit implique-t-elle l'interdiction de transmettre la Sunna et la négation de son autorité religieuse ?"
    },
    logicalNode: {
      title: "Les 4 données fondamentales à harmoniser",
      distinctions: [
        {
          term: "DONNÉE A",
          desc: "« N'écrivez pas » (interdiction initiale pour éviter la confusion sur les mêmes feuillets coraniques)."
        },
        {
          term: "DONNÉE B",
          desc: "« Et rapportez de moi, il n'y a pas de mal » (dans le même hadith Muslim 3004 !)."
        },
        {
          term: "DONNÉE C",
          desc: "« Écris ! Par Celui qui tient mon âme... » (Abû Dâwûd 3646 à 'Abd Allâh ibn 'Amr)."
        },
        {
          term: "DONNÉE D",
          desc: "« Écrivez pour Abû Shâh » (Sahîh Al-Bukhârî 2434, ordre positif d'écrire son discours)."
        }
      ],
      generalRule: "Réglementer le support de conservation n'annule pas l'autorité du contenu.",
      errorToAvoid: "Isoler une moitié de phrase dans un hadith tout en rejetant le reste du corpus (argument auto-référentiel et double standard)."
    },
    centralPrinciple: {
      title: "L'argument auto-référentiel du coraniste",
      formalScheme: "Dilemme pour le coraniste :\n- Si le hadith Muslim 3004 est fiable : il admet qu'un hadith nous apprend une consigne du Prophète, et ce même hadith autorise explicitement la transmission orale (« Rapportez de moi »).\n- Si le hadith n'est pas fiable : il ne peut pas prouver historiquement l'interdiction d'écrire !",
      explanation: "L'interdiction initiale visait à empêcher que des paroles prophétiques ou commentaires explicatifs ne soient mélangés physiquement sur les mêmes supports que le texte coranique à l'époque de la révélation. Une fois le Coran bien distingué, le Prophète a autorisé et même ordonné l'écriture pour plusieurs Compagnons.",
      logicalTest: "Un professeur qui dit « n'enregistrez pas ce brouillon sur votre feuille d'examen » interdit-il pour autant à ses élèves d'étudier son cours ailleurs ?"
    },
    quranicArchitecture: {
      title: "Écriture ≠ Autorité normative",
      verses: [
        {
          ref: "Coran 4:59",
          ar: "أَطِيعُوا اللَّهَ وَأَطِيعُوا الرَّسُولَ",
          fr: "« Obéissez à Allah et obéissez au Messager. »"
        },
        {
          ref: "Coran 4:65",
          ar: "حَتَّىٰ يُحَكِّمُوكَ فِيمَا شَجَرَ بَيْنَهُمْ",
          fr: "« Jusqu'à ce qu'ils te prennent pour juge dans leurs différends. »"
        }
      ],
      consequence: "Même si aucun hadith n'avait été consigné par écrit du vivant du Prophète, cela ne supprimerait en rien les versets coraniques qui lui confèrent une autorité juridique et normative obligatoire."
    },
    analogies: [
      {
        num: 1,
        title: "Le dossier officiel et les commentaires",
        scenario: "Un directeur administratif dit : « Dans ce registre officiel, n'écrivez que les textes de lois ; mettez vos notes de travail ailleurs. »",
        logic: "Séparer deux catégories documentaires ne nie pas la valeur des notes explicatives.",
        lesson: "Règle de forme ≠ Rejet du fond.",
        application: "Protéger la pureté du mushaf coranique n'annule pas la validité de la Sunna."
      },
      {
        num: 2,
        title: "Les médicaments à ne pas mélanger",
        scenario: "Un médecin dit : « Ne mélangez jamais ces deux médicaments dans le même flacon. »",
        logic: "Il interdit le mélange physique, pas l'existence ni l'usage du second médicament.",
        lesson: "Interdiction de mélange ≠ Interdiction d'existence.",
        application: "Le Prophète a interdit de mêler ses paroles au texte coranique sur les mêmes supports."
      }
    ],
    objections: [
      {
        obj: "« Les autorisations d'écrire ont été inventées après coup pour justifier les livres ! »",
        ans: "Pourquoi le récit d'interdiction serait-il automatiquement vrai et les récits d'autorisation automatiquement faux, alors qu'ils figurent dans les mêmes recueils avec les mêmes méthodes de transmission ? C'est un pur double standard."
      }
    ],
    framingQuestions: [
      "Le hadith « N'écrivez pas » est-il authentique selon vous ?",
      "Pourquoi coupez-vous la phrase qui continue : « Et rapportez de moi, il n'y a pas de mal » ?",
      "Comment expliquez-vous l'ordre officiel donné par le Prophète : « Écrivez pour Abû Shâh » (Bukhârî 2434) ?"
    ],
    readyResponses: {
      quick30s: "Le hadith de Sahîh Muslim que vous citez dit dans la même phrase : « et rapportez de moi, il n'y a pas de mal ». Il n'interdit donc absolument pas la transmission de la Sunna ! De plus, d'autres récits authentiques prouvent que l'écriture a été expressément autorisée plus tard : le Prophète a dit à 'Abd Allâh ibn 'Amr « Écris ! », a ordonné « Écrivez pour Abû Shâh » et Abû Bakr a rédigé les règles de la Zakât pour Anas. Réglementer un support à un moment donné pour éviter la confusion avec le Coran ne supprime pas l'autorité de l'enseignement prophétique.",
      developed: "L'argument de l'interdiction d'écrire se heurte à un double piège. D'abord, il est auto-référentiel : utiliser un hadith pour tenter d'annuler les hadiths. Ensuite, il ignore la chronologie des faits : l'interdiction temporaire initiale d'écrire visait à empêcher toute contamination matérielle du Coran pendant la révélation. Une fois le mushaf sécurisé, le Prophète a permis la consignation écrite, sans jamais cesser d'ordonner la transmission de sa Sunna."
    },
    conclusion: {
      steps: [
        "Le hadith d'interdiction autorise explicitement la narration orale.",
        "Plusieurs hadiths établissent des ordres clairs et positifs de mise par écrit.",
        "Le dossier complet montre une réglementation contextuelle, jamais une abolition de la Sunna."
      ],
      finalText: "Le débat sur le support matériel ne peut annuler l'obligation coranique d'obéir au Messager.",
      punchline: "Réglementer l'écriture ≠ Abolir la Sunna. Support ≠ Autorité."
    },
    quiz: [
      {
        q: "Que dit la seconde partie du hadith 'N'écrivez rien de moi' (Muslim 3004) ?",
        options: ["Et oubliez tout ce que j'ai dit", "Et rapportez de moi, il n'y a pas de mal", "Et ne parlez jamais de moi"],
        answer: 1,
        explanation: "Le hadith autorise explicitement la transmission orale dans la même phrase."
      },
      {
        q: "Pour quel personnage le Prophète a-t-il expressément ordonné d'écrire son discours ?",
        options: ["Abû Shâh", "Platon", "Un soldat romain"],
        answer: 0,
        explanation: "Dans Sahîh Al-Bukhârî (2434), le Prophète ordonne : 'Écrivez pour Abû Shâh'."
      }
    ]
  },
  {
    id: 8,
    slug: "coran-condamne-hadiths",
    number: "08",
    title: "Le Coran condamne les Hadiths",
    shortTitle: "Le Coran condamne les Hadiths ?",
    tagline: "Ḥadīth = discours / récit, pas automatiquement « recueil prophétique »",
    formula: "ḤADĪTH = DISCOURS / RÉCIT ≠ TERME TECHNIQUE DU RECUEIL SUNNITE",
    pdfFile: "Comment_demasquer_et_refuter_la_secte_des_coranistes_Argument_8.pdf",
    theme: "Sémantique & Anachronisme Lexical",
    theirArgument: {
      thesis: "Les coranistes prétendent que le Coran condamne nommément les hadiths dans plusieurs versets : « En quel Hadith après Allah et Ses versets croiront-ils ? » (45:6, 77:50) et dénonce « Lahw al-hadith » (31:6). Suivre les hadiths serait donc suivre ce que le Coran réprouve.",
      verses: [
        {
          ref: "Coran 45:6",
          ar: "تِلْكَ آيَاتُ اللَّهِ نَتْلُوهَا عَلَيْكَ بِالْحَقِّ ۖ فَبِأَيِّ حَدِيثٍ بَعْدَ اللَّهِ وَآيَاتِهِ يُؤْمِنُونَ",
          fr: "« Voilà les versets d'Allah que Nous te récitons en toute vérité. Alors en quel discours (hadīth), après Allah et Ses versets, croiront-ils ? »"
        },
        {
          ref: "Coran 77:50",
          ar: "فَبِأَيِّ حَدِيثٍ بَعْدَهُ يُؤْمِنُونَ",
          fr: "« En quel discours (hadīth) après celui-ci croiront-ils ? »"
        },
        {
          ref: "Coran 31:6",
          ar: "وَمِنَ النَّاسِ مَن يَشْتَرِي لَهْوَ الْحَدِيثِ",
          fr: "« Et parmi les hommes, il en est qui achètent des discours futiles (lahw al-hadīth)... »"
        }
      ],
      realQuestion: "Le terme arabe 'hadīth' dans le Coran désigne-t-il les recueils de Bukhârî et Muslim rédigés des siècles plus tard, ou a-t-il son sens lexical arabe de 'parole', 'discours' ou 'récit' ?"
    },
    logicalNode: {
      title: "L'anachronisme lexical démasqué",
      distinctions: [
        {
          term: "SENS LEXICAL ARABE",
          desc: "Parole, propos, discours, nouvelle ou récit (sens général)."
        },
        {
          term: "SENS TECHNIQUE SPÉCIALISÉ",
          desc: "Tradition transmise rapportant un propos ou acte du Prophète (terminologie développée plus tard par les traditionalistes)."
        }
      ],
      generalRule: "Projeter rétroactivement le sens technique d'un mot forgé des siècles plus tard sur le texte coranique originel est une faute méthodologique majeure.",
      errorToAvoid: "Faire comme si le mot 'hadīth' était une étiquette négative réservée aux recueils sunnites."
    },
    centralPrinciple: {
      title: "Le Coran qualifie ses propres versets de 'Hadīth'",
      formalScheme: "Coran 39:23 : « Allah a fait descendre le meilleur des récits (أَحْسَنَ الْحَدِيثِ) : un Livre harmonieux... »\nCoran 4:87 : « Et qui est plus véridique qu'Allah en parole (حَدِيثًا) ? »\nCoran 20:9 : « Le récit de Moïse t'est-il parvenu ? (حَدِيثُ مُوسَىٰ) »\nCoran 66:3 : « Lorsque le Prophète confia un propos secret (حَدِيثًا)... »",
      explanation: "Le mot hadīth est employé de manière très positive pour la parole d'Allah et Ses récits, de manière neutre pour l'histoire des prophètes, et de manière négative quand il est qualifié de futile (lahw). C'est le qualificatif et le contexte qui déterminent sa valeur, pas le mot lui-même.",
      logicalTest: "Si tout « hadīth » était interdit après le Coran, il faudrait aussi interdire les dictionnaires arabes, les livres d'histoire, les traductions et les vidéos des coranistes qui sont tous des 'discours après le Coran'."
    },
    quranicArchitecture: {
      title: "Contexte de Sourate Al-Jâthiyah (45:6)",
      verses: [
        {
          ref: "Coran 45:6",
          ar: "فَبِأَيِّ حَدِيثٍ بَعْدَ اللَّهِ وَآيَاتِهِ يُؤْمِنُونَ",
          fr: "« Alors en quel discours après Allah et Ses versets croiront-ils ? »"
        }
      ],
      consequence: "Le verset vise les polythéistes mecquois qui refusent de croire en la parole divine et en l'existence de Dieu. Il leur demande : quel autre discours pourra vous convaincre si vous rejetez le Coran ? Ce n'est en aucun cas un traité sur les sources de la jurisprudence musulmane !"
    },
    analogies: [
      {
        num: 1,
        title: "Le mot « virus » et l'informatique",
        scenario: "Un texte médical du XIXe siècle dit « méfiez-vous des virus ». Quelqu'un affirme qu'il s'agit d'un avertissement contre les virus informatiques sur Windows.",
        logic: "C'est un anachronisme complet qui plaque un sens technique moderne sur un texte ancien.",
        lesson: "Le sens contextuel prime sur le sens technique ultérieur.",
        application: "Plaquer le terme technique 'Hadith sunnite' sur 45:6 est exactement de même nature."
      },
      {
        num: 2,
        title: "« Le meilleur professeur »",
        scenario: "Le directeur dit : « Monsieur Dupont est le meilleur professeur de l'école. »",
        logic: "Cela ne signifie pas qu'il faut expulser tous les autres professeurs et fermer les classes.",
        lesson: "Supériorité (Ahsan al-hadith) ≠ Exclusivité.",
        application: "Le Coran est le meilleur discours, cela n'interdit pas d'écouter les explications prophétiques."
      }
    ],
    objections: [
      {
        obj: "« Mais Allah dans Sa prescience savait que les musulmans appelleraient les traditions 'hadiths' ! »",
        ans: "La prescience d'Allah ne modifie pas les règles de la langue arabe dans laquelle le Coran a été révélé. Le Coran s'adresse aux contemporains dans leur langue usuelle. De plus, le Coran s'appelle lui-même 'hadith' !"
      }
    ],
    framingQuestions: [
      "Que signifie le mot 'hadīth' dans le verset 'Hadīthu Mûsâ' (Le récit de Moïse) en 20:9 ?",
      "Pourquoi le Coran s'appelle-t-il lui-même 'le meilleur Hadith' en 39:23 ?",
      "Le verset 45:6 parle-t-il des négateurs mecquois ou des recueils d'Al-Bukhârî ?"
    ],
    readyResponses: {
      quick30s: "Quand le Coran dit « En quel hadith après cela croiront-ils ? », le mot hadīth signifie en arabe 'discours', 'parole' ou 'récit', et non les recueils de Bukhârî ou Muslim. La preuve : le Coran se qualifie lui-même de « meilleur hadith » (39:23), parle du « hadith de Moïse » (20:9) et demande « Qui est plus véridique qu'Allah en hadith ? » (4:87). Le verset d'Al-Jâthiyah condamne les mécréants qui rejettent les preuves divines, il ne définit pas les sources du droit. Y voir une condamnation de la Sunna est un pur anachronisme lexical.",
      developed: "L'argument coraniste repose sur une équivoque grossière : confondre le sens linguistique général d'un mot avec sa définition technique forgée plus tard par les juristes. Dans le Coran, le mot hadith est polymorphe : il s'applique au Coran, aux récits des anciens prophètes ou à des confidences. Dans les versets cités par les coranistes, Allah demande avec rhétorique aux polythéistes quel discours humain pourra les guider s'ils rejettent Sa parole. Transformer cette interpellation en rejet de la Sunna détruit le sens du texte."
    },
    conclusion: {
      steps: [
        "Le mot hadith est un nom commun arabe signifiant parole ou récit.",
        "Le Coran applique ce terme positivement à sa propre révélation.",
        "Condamner 'le discours futile' (lahw al-hadith) ne condamne pas toute transmission."
      ],
      finalText: "Le Coran ne condamne nulle part les enseignements prophétiques : il condamne les discours mensongers des négateurs.",
      punchline: "Ḥadīth = discours / récit selon le contexte ; pas automatiquement « recueil prophétique »."
    },
    quiz: [
      {
        q: "Comment le Coran se qualifie-t-il dans la sourate Az-Zumar (39:23) ?",
        options: ["Le meilleur Hadith (Ahsan al-Hadith)", "Un livre sans hadith", "Un hadith interdit"],
        answer: 0,
        explanation: "Le Coran s'auto-désigne expressément comme 'Ahsan al-Hadith' (le meilleur des discours)."
      },
      {
        q: "Que signifie 'Hadith' dans 'Hadithu Mûsâ' (20:9) ?",
        options: ["Le recueil de Bukhârî", "Le récit / l'histoire de Moïse", "Un faux hadith"],
        answer: 1,
        explanation: "Dans ce contexte coranique évident, hadith signifie simplement l'histoire ou le récit de Moïse."
      }
    ]
  },
  {
    id: 9,
    slug: "corrections-divines-autorite-messager",
    number: "09",
    title: "Les corrections divines annuleraient-elles l'autorité du Messager ?",
    shortTitle: "Corrections divines & Infaillibilité",
    tagline: "Correction divine ≠ absence d'autorité",
    formula: "CORRECTION DIVINE ≠ ABSENCE D'AUTORITÉ (Encadrement divin)",
    pdfFile: "Comment_demasquer_et_refuter_la_secte_des_coranistes_Argument_9.pdf",
    theme: "Statut du Prophète & Encadrement Révélé",
    theirArgument: {
      thesis: "Le Coran rapporte des versets où Allah adresse une remarque ou correction au Prophète (ex: Sourate 'Abasa 80:1, At-Tawbah 9:43, At-Tahrîm 66:1). Puisque le Prophète a été repris, ses paroles et décisions ne sauraient constituer une autorité religieuse obligatoire.",
      verses: [
        {
          ref: "Coran 80:1-2",
          ar: "عَبَسَ وَتَوَلَّىٰ أَن جَاءَهُ الْأَعْمَىٰ",
          fr: "« Il s'est renfrogné et s'est détourné parce que l'aveugle est venu à lui. »"
        },
        {
          ref: "Coran 9:43",
          ar: "عَفَا اللَّهُ عَنكَ لِمَ أَذِنتَ لَهُمْ",
          fr: "« Qu'Allah te pardonne ! Pourquoi leur as-tu donné permission ? »"
        },
        {
          ref: "Coran 66:1",
          ar: "يَا أَيُّهَا النَّبِيُّ لِمَ تُحَرِّمُ مَا أَحَلَّ اللَّهُ لَكَ",
          fr: "« Ô Prophète ! Pourquoi t'interdis-tu ce qu'Allah t'a rendu licite ? »"
        }
      ],
      realQuestion: "Le fait qu'Allah intervienne ponctuellement pour préciser ou orienter une situation prouve-t-il l'absence totale d'autorité prophétique, ou prouve-t-il au contraire la surveillance et l'encadrement divins ?"
    },
    logicalNode: {
      title: "L'inversion logique du coraniste",
      distinctions: [
        {
          term: "SURVEILLANCE DIVINE CONSTANTE",
          desc: "Le Prophète agit sous le regard et la guidance d'Allah. Si une décision nécessite un ajustement, la révélation intervient aussitôt de son vivant."
        },
        {
          term: "ENSEIGNEMENT FINAL VALIDÉ",
          desc: "Ce que le Prophète a enseigné sans qu'aucune correction ne descende constitue la pratique définitive agréée par Allah."
        }
      ],
      generalRule: "Un contrôle qualité qui apporte une retouche sur une chaîne de production ne prouve pas que le produit est sans valeur : il prouve que le produit final est garanti conforme.",
      errorToAvoid: "Prendre une correction particulière dans une situation précise pour décréter l'invalidation générale de tous les commandements prophétiques."
    },
    centralPrinciple: {
      title: "Allah connaissait ces situations lorsqu'Il a ordonné d'obéir",
      formalScheme: "Dilemme pour le coraniste :\n- Allah connaissait-Il ces événements lorsqu'Il a ordonné en 4:59 « Obéissez à Allah et au Messager » et en 4:65 de le prendre pour juge ?\n- Réponse évidente : OUI. Donc ces corrections sont parfaitement compatibles avec l'autorité obligatoire du Messager.",
      explanation: "Le sunnisme ne prétend pas que le Prophète est une divinité. Il est un être humain investi d'une autorité religieuse mandatée, protégé dans la transmission (69:44-46) et guidé par la révélation (53:3-4). Les corrections sont elles-mêmes des leçons de pédagogie divine transmises à la communauté.",
      logicalTest: "Si un arbitre de match est encadré par la VAR ou une commission supérieure, les joueurs ont-ils le droit d'ignorer tous ses coups de sifflet sur le terrain ? Non, son autorité reste pleine et encadrée."
    },
    quranicArchitecture: {
      title: "La fidélité garantie du Messager",
      verses: [
        {
          ref: "Coran 53:3-4",
          ar: "وَمَا يَنطِقُ عَنِ الْهَوَىٰ إِنْ هُوَ إِلَّا وَحْيٌ يُوحَىٰ",
          fr: "« Et il ne prononce rien sous l'effet de la passion ; ce n'est rien d'autre qu'une révélation inspirée. »"
        },
        {
          ref: "Coran 69:44-46",
          ar: "وَلَوْ تَقَوَّلَ عَلَيْنَا بَعْضَ الْأَقَاوِيلِ لَأَخَذْنَا مِنْهُ بِالْيَمِينِ ثُمَّ لَقَطَعْنَا مِنْهُ الْوَتِينَ",
          fr: "« Et s'il avait forgé contre Nous quelques paroles, Nous l'aurions saisi de la main droite, puis Nous lui aurions tranché l'aorte. »"
        }
      ],
      consequence: "Le Coran affirme que le Prophète ne peut rien forger contre Allah sans intervention divine immédiate. Ce qui a été validé et transmis fait donc autorité absolue."
    },
    analogies: [
      {
        num: 1,
        title: "L'inspecteur d'académie et la maîtresse",
        scenario: "Papa dit à son enfant : « À l'école, écoute la maîtresse. » Un jour, le directeur dit à la maîtresse : « Pour cet exercice, fais plutôt ainsi. »",
        logic: "L'enfant ne peut pas en déduire : « Maintenant je n'écoute plus jamais ma maîtresse ! »",
        lesson: "La correction d'une autorité supérieure encadre le délégué, elle n'annule pas son mandat.",
        application: "Les précisions d'Allah au Prophète encadrent sa mission sans détruire l'obligation de lui obéir."
      },
      {
        num: 2,
        title: "Le contrôle qualité en usine",
        scenario: "Une pièce d'ingénierie passe au banc d'essai et reçoit un ajustement.",
        logic: "L'ajustement prouve la rigueur du processus, pas la défectuosité du produit livré.",
        lesson: "Contrôle = Garantie de conformité.",
        application: "La communauté reçoit l'enseignement prophétique épuré et garanti par Allah."
      }
    ],
    objections: [
      {
        obj: "« Mais peut-être qu'il y a d'autres erreurs du Prophète qu'Allah n'a pas corrigées dans le Coran ! »",
        ans: "Un simple « peut-être » imaginaire ne constitue pas une preuve. On ne peut pas annuler des dizaines de versets ordonnant formellement l'obéissance sur la base d'une pure supposition sans preuve."
      }
    ],
    framingQuestions: [
      "Allah connaissait-Il les sourates 'Abasa et At-Tahrîm lorsqu'Il a révélé 'Obéissez au Messager' (4:59) ?",
      "Une correction ponctuelle supprime-t-elle le pouvoir d'un juge ou d'un arbitre ?",
      "Existe-t-il un seul verset disant : « Lorsqu'Allah corrige Son Messager, cessez de lui obéir » ?"
    ],
    readyResponses: {
      quick30s: "Oui, le Coran rapporte certaines orientations qu'Allah a adressées à Son Messager. Mais loin d'annuler son autorité, cela prouve exactement l'inverse : que la mission prophétique était sous contrôle divin permanent ! Lorsque quelque chose devait être précisé, Allah révélait la correction immédiatement du vivant du Prophète. Et malgré ces épisodes, le même Coran continue d'ordonner d'obéir au Messager, de le prendre pour juge (4:65) et le qualifie d'excellent modèle (33:21).",
      developed: "L'argument des corrections divines repose sur un faux dilemme : soit le Prophète serait une divinité omnisciente et infaillible par essence, soit il n'aurait aucune autorité. La position sunnite est équilibrée : le Prophète est un être humain investi d'une autorité mandatée et protégé divinement dans sa mission de guidance. L'intervention d'Allah dans certains cas particuliers garantit que l'enseignement final reçu et perpétué par la communauté est conforme à la volonté divine."
    },
    conclusion: {
      steps: [
        "Le Coran rapporte des corrections ponctuelles d'Allah à Son Messager.",
        "Ces interventions prouvent l'encadrement divin actif et permanent.",
        "L'ordre coranique d'obéissance au Messager demeure universel et obligatoire."
      ],
      finalText: "L'autorité du Messager ne concurrence pas celle d'Allah : elle découle d'Allah et reste protégée par Lui.",
      punchline: "Correction divine ≠ Absence d'autorité."
    }
  },
  {
    id: 10,
    slug: "priere-transmise-communaute-pas-hadiths",
    number: "10",
    title: "La prière se transmet par la communauté, pas par les Hadiths",
    shortTitle: "La prière sans les Hadiths ?",
    tagline: "Pratique transmise = Sunna vivante",
    formula: "PRATIQUE PROPHÉTIQUE TRANSMISE = SUNNA VIVANTE (Tawâtur Pratique)",
    pdfFile: "Comment_demasquer_et_refuter_la_secte_des_coranistes_Argument_10.pdf",
    theme: "Pratique Cultuelle & Tawâtur 'Amalî",
    theirArgument: {
      thesis: "Les coranistes plus subtils reconnaissent qu'on ne trouve pas les détails de la prière (5 prières, nombre de rak'ât) dans le texte du Coran, mais répondent : « Je n'ai pas appris à prier dans Bukhârî. Mon père m'a appris, sa communauté lui a appris depuis le Prophète. La prière se transmet par la pratique vivante collective, pas par les hadiths. »",
      verses: [],
      realQuestion: "Admettre qu'une pratique cultuelle obligatoire nous est transmise hors du texte du Coran depuis le Prophète est-il compatible avec la doctrine du « Coran seul » ?"
    },
    logicalNode: {
      title: "L'aveu involontaire du coraniste",
      distinctions: [
        {
          term: "CORAN SEUL (THÉORIE)",
          desc: "Affirmer que seule la lettre du texte coranique est source de religion."
        },
        {
          term: "CORAN + SUNNA PRATIQUE (RÉALITÉ)",
          desc: "Admettre qu'on suit des gestes et rites transmis de génération en génération depuis le Prophète."
        }
      ],
      generalRule: "Une pratique religieuse issue du Prophète et transmise de génération en génération est la définition exacte de la Sunna vivante (Tawâtur 'amalî). Refuser le mot ne supprime pas la réalité.",
      errorToAvoid: "Croire que le sunnisme affirme que les musulmans ont attendu le recueil d'Al-Bukhârî au IIIe siècle pour savoir comment prier."
    },
    centralPrinciple: {
      title: "Le retournement logique final",
      formalScheme: "Dialogue avec le coraniste :\n- « Comment sais-tu qu'il faut prier 4 rak'ât à Dhuhr ? » → « La communauté me l'a appris. »\n- « Qui l'a appris à la communauté ? » → « Les générations précédentes. »\n- « Et avant elles ? » → « Les Compagnons. »\n- « Et qui l'a appris aux Compagnons ? » → « LE PROPHÈTE. »\nConclusion : Le coraniste reconnaît une autorité normative extra-coranique issue du Prophète !",
      explanation: "Les hadiths n'ont pas inventé la prière : ils documentent par écrit ce qui était déjà pratiqué et enseigné. De plus, la simple observation visuelle d'un geste ne dit pas son statut juridique (wâjib, sunna, permis), ni les règles d'oubli (sujûd as-sahw), de voyage ou de maladie, qui nécessitent une transmission verbale explicative.",
      logicalTest: "Si deux groupes de musulmans prient différemment (ex: 3 prières vs 5 prières chez les coranistes), quel critère permet de les départager sans recourir aux données historiques de la Sunna ?"
    },
    quranicArchitecture: {
      title: "Le Coran présuppose un modèle vivant",
      verses: [
        {
          ref: "Coran 33:21",
          ar: "لَّقَدْ كَانَ لَكُمْ فِي رَسُولِ اللَّهِ أُسْوَةٌ حَسَنَةٌ",
          fr: "« Vous avez certes dans le Messager d'Allah un excellent modèle. »"
        },
        {
          ref: "Coran 16:44",
          ar: "لِتُبَيِّنَ لِلنَّاسِ مَا نُزِّلَ إِلَيْهِمْ",
          fr: "« Afin que tu exposes clairement aux gens ce qui leur a été révélé. »"
        },
        {
          ref: "Sahîh Al-Bukhârî 631",
          ar: "وَصَلُّوا كَمَا رَأَيْتُمُونِي أُصَلِّي",
          fr: "« Priez comme vous m'avez vu prier. »"
        }
      ],
      consequence: "Le Coran ordonne la prière mais ne décrit pas techniquement chaque geste, car il s'adresse à une communauté qui voyait le Prophète l'accomplir et l'enseigner."
    },
    analogies: [
      {
        num: 1,
        title: "Apprendre à faire ses lacets (pour un enfant de 6 ans)",
        scenario: "Papa montre à son fils comment faire ses lacets. L'enfant apprend en regardant, puis montre à son petit frère. Le petit frère dit : « Je ne crois pas à l'enseignement de papa, je fais mes lacets parce que la famille fait comme ça. »",
        logic: "Mais qui a appris à la famille ? C'est papa !",
        lesson: "La pratique héritée de la famille procède de l'initiateur premier.",
        application: "La prière de la communauté procède directement de l'enseignement du Prophète."
      },
      {
        num: 2,
        title: "Apprendre une langue et le dictionnaire",
        scenario: "On apprend à parler français naturellement avec ses parents sans ouvrir de dictionnaire.",
        logic: "Cela ne prouve pas que le dictionnaire et la grammaire écrite soient faux ou inutiles : ils permettent de préciser les règles et résoudre les doutes.",
        lesson: "Pratique vivante et documentation écrite sont complémentaires.",
        application: "La pratique collective de la prière et les recueils de hadiths se renforcent mutuellement."
      },
      {
        num: 3,
        title: "Le chirurgien et son apprenti",
        scenario: "Un jeune chirurgien apprend des gestes délicats au bloc opératoire en observant son maître.",
        logic: "Il ne rejette pas pour autant les traités médicaux et les explications verbales.",
        lesson: "L'imitation du geste a besoin du cadre théorique verbal.",
        application: "Les détails juridiques de la prière exigent la Sunna verbale et écrite."
      }
    ],
    objections: [
      {
        obj: "« Les hadiths ont créé des divergences sur la prière (mains sur la poitrine, le long du corps, etc.) ! »",
        ans: "Les divergences portent sur des détails secondaires légitimes. Mais si l'on suit le 'Coran seul', certains coranistes prient 2 fois par jour, d'autres 3, d'autres 5, sans aucune règle commune ! La Sunna préserve le tronc commun massif et documente les variantes admises."
      }
    ],
    framingQuestions: [
      "Tous les détails de vos 5 prières figurent-ils explicitement dans le Coran ?",
      "Où trouvez-vous textuellement dans le Coran le nombre de 4 rak'ât pour Dhuhr et 'Asr ?",
      "Si ces détails viennent de la transmission communautaire, cette transmission est-elle une information extra-coranique ?"
    ],
    readyResponses: {
      quick30s: "Dire que vous n'avez pas appris la prière dans Sahîh Al-Bukhârî ne réfute absolument pas la Sunna : cela la confirme ! Si vous affirmez que la prière a été transmise de génération en génération depuis le Prophète, vous reconnaissez précisément une pratique prophétique extra-coranique transmise par la communauté, c'est-à-dire une Sunna vivante (tawâtur pratique). Les hadiths n'ont pas inventé la prière : ils documentent par écrit son enseignement et ses détails.",
      developed: "Le coraniste qui justifie sa prière par la tradition communautaire abandonne de fait son dogme du 'Coran seul'. Il admet qu'une information extra-coranique issue du Prophète est obligatoire et fiable. De plus, la simple observation visuelle d'un rituel ne peut pas expliquer les règles complexes (oubli, voyage, maladie, statut des invocations) qui nécessitent les explications verbales consignées dans les hadiths. Pratique vivante et recueils écrits sont les deux faces complémentaires de la transmission prophétique."
    },
    conclusion: {
      steps: [
        "La prière quotidienne est issue de l'enseignement du Prophète.",
        "Sa transmission par la communauté prouve la fiabilité de la transmission extra-coranique.",
        "Pratique collective et hadiths écrits se complètent pour assurer la continuité du culte."
      ],
      finalText: "La transmission pratique de la prière est la démonstration vivante de la nécessité et de la réalité de la Sunna.",
      punchline: "Pratique prophétique transmise = Sunna vivante."
    },
    quiz: [
      {
        q: "La transmission de la prière de génération en génération est appelée :",
        options: ["Une innovation", "Le Tawâtur pratique (Sunna vivante)", "Une désobéissance au Coran"],
        answer: 1,
        explanation: "Le tawâtur 'amalî désigne la transmission massive ininterrompue d'une pratique par toute la communauté."
      },
      {
        q: "Trouve-t-on le nombre exact de 4 rak'ât pour la prière de Dhuhr écrit dans le Coran ?",
        options: ["Oui, mot pour mot", "Non, cela nous est parvenu par la Sunna prophétique", "Seulement dans la sourate 2"],
        answer: 1,
        explanation: "Le Coran ordonne la prière de manière générale, les modalités précises ont été enseignées par le Prophète."
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ARGUMENTS_DATA };
}
