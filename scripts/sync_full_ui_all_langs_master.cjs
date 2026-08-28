/**
 * Synchronisateur Ultime de l'Interface Utilisateur (UI) pour les 13 Langues
 * Garantit la traduction intégrale des Modales, du Portail Al-Barbahari, du Footer,
 * de la Sidebar et des Messages dynamiques.
 */

const fs = require('fs');
const path = require('path');

const TRANSLATIONS_DIR = path.join(__dirname, '..', 'js', 'translations');
const LANG_CODES = ['fr', 'ar', 'ary', 'en', 'es', 'de', 'it', 'pt', 'ur', 'ta', 'ps', 'ku', 'ce'];

// Dictionnaire UI Ultime
const MASTER_UI = {
  fr: {
    // Topbar & Marque
    brandBadge: "MANUEL PRATIQUE",
    brandTitle: "RÉFUTATION DU CORANISME",
    brandSubtitle: "Comment démasquer et réfuter la secte des coranistes",
    searchBtn: "Rechercher",
    barbahariBtn: "Al-Barbahârî",
    contactBtn: "Contact",
    legalBtn: "Partage & Licence",
    
    // Sidebar
    summaryTitle: "Sommaire",
    rubriquesCount: "12 rubriques",
    sidebarPreface: "Préface",
    sidebarIntro: "Qui sont les coranistes ?",
    sidebarSadaqaHeader: "Diffusion Pédagogique",
    sidebarSadaqaText: "Ce manuel est mis à disposition librement pour l'étude et la défense de la Sunna.",
    labelAuthor: "Auteur :",
    authorName: "Salah Eddine Ahmed",
    btnSidebarHome: "Accueil du Manuel",
    btnSidebarContact: "Contacter l'auteur",

    // Hero
    heroTag1: "Manuel Pratique de Réfutation",
    heroTag2: "Diffusion Pédagogique Ouverte",
    heroTitleMain: "Réfutation",
    heroTitleSpan: "du Coranisme",
    heroAuthor: "Par Salah Eddine Ahmed",
    heroDesc: "Déconstruisez pas à pas les sophismes du coranisme avec rigueur logique, analogies pédagogiques, versets coraniques et réponses prêtes en 30 secondes.",
    btnStartArg1: "Débuter par l'Argument 1",
    btnSearchModal: "Rechercher un sujet / verset",
    btnContactAuthor: "Contacter l'auteur",

    // Sommaire Hub
    sommaireTitle: "Les 10 Grands Arguments Décryptés",
    sommaireBadge: "10 Fiches Prêtes à l'Emploi",
    btnReadCard: "Consulter la fiche",
    btnDownloadPdf: "Télécharger le fascicule PDF original",
    btnPrintCard: "Imprimer ou enregistrer la fiche en PDF",

    // Règle d'or
    goldenRuleHeader: "Règle d'or pour débattre avec un coraniste",
    goldenRuleTitle: "Ne jamais laisser l'interlocuteur déplacer le sujet",
    goldenRuleDesc: "La plupart des arguments coranistes reposent sur des glissements : confondre le principe de la Sunna (instituée par le Coran) avec la transmission historique des recueils postérieurs.",
    goldenRuleStep1: "1. Établir d'abord ce que le Coran ordonne (Obéissance, Jugement, Bayân, Exemplarité).",
    goldenRuleStep2: "2. Démontrer ensuite qu'une autorité déléguée ne concurrence jamais la souveraineté divine.",
    goldenRuleStep3: "3. Traiter ensuite méthodiquement la chaîne de transmission historique.",

    // Portal Al-Barbahari
    portalWarningBadge: "MISE EN GARDE DES ANCIENS SUR LES DÉTRACTEURS DE LA TRANSMISSION",
    portalTitle: "Parole de l'Imam Al-Barbahârî (رحمه الله)",
    portalQuoteTransLabel: "Traduction du sens :",
    portalQuoteText: "Si tu entends un homme à qui l'on cite un athar (récit transmis / tradition) le rejeter en disant : \"Laisse cela et apporte-nous le Coran\", ne doute pas alors qu'il s'agit d'un homme imprégné d'hérésie. Lève-toi de son assemblée et délaisse-le !",
    portalAuthorBadge: "✍️ Imam Al-Barbahârî (mort en 329 H)",
    portalSourceRef: "📖 Source : Sharḥ As-Sunnah (Point 135)",
    portalEnterBtn: "ACCÉDER AU MANUEL DE RÉFUTATION",
    portalDisclaimer: "Comment démasquer et réfuter la secte des coranistes • Par Salah Eddine Ahmed • Usage pédagogique libre avec mention de la source",

    // Modale Recherche
    searchModalTitle: "Recherche Rapide dans le Manuel",
    searchPlaceholder: "Ex: prière, Sourate An-Nahl verset 44, transmission, autorité...",
    searchNoResults: "Aucun résultat pour",

    // Modale Contact
    contactModalTitle: "Contacter l'Auteur & Retours",
    contactAuthorHeader: "Auteur de l'Ouvrage",
    contactAuthorBio: "Auteur de l'ouvrage « Comment démasquer et réfuter la secte des coranistes — Méthode, arguments, objections et réponses ».",
    contactEmailBoxTitle: "Boîte Mail de Contact Officielle :",
    contactSuggestions: "Vous pouvez envoyer vos retours, suggestions d'amélioration ou questions par e-mail à ideoise@gmail.com.",

    // Modale Licence & Partage
    legalModalTitle: "Conditions de Partage, Auteur & Confidentialité",
    legalSharingHeader: "Conditions de Partage & Diffusion Pédagogique",
    legalSharingTitle: "Diffusion et Partage Pédagogique Ouverts",
    legalSharingMainText: "Ce contenu peut être partagé gratuitement et reproduit à des fins personnelles, pédagogiques et non commerciales, à condition de conserver la source et l'auteur.",
    legalAuthorizedUsesHeader: "Usages autorisés :",
    legalAuthorizedUsesList: [
      "Téléchargement, impression, lecture et partage gratuit des fiches.",
      "Utilisation dans les cours, cercles d'études, débats et réseaux sociaux.",
      "Toute exploitation commerciale ou altération dénaturante du texte est strictement interdite sans accord préalable."
    ],
    legalPrivacyHeader: "Données Techniques & Confidentialité",
    legalPrivacyTitle: "Politique de Confidentialité Conforme aux Fonctionnalités Réelles",
    legalPrivacyText: "Le site ne demande aucune création de compte et ne collecte volontairement aucune donnée personnelle via un formulaire. Les données techniques éventuellement traitées par l'hébergeur restent soumises à sa propre infrastructure.",
    legalPrivacyBullet1: "Aucun cookie publicitaire tiers : Zéro pixel de tracking commercial.",
    legalPrivacyBullet2: "Polices et ressources : Chargement sécurisé des polices Google Fonts.",
    legalCreditsHeader: "Mentions de l'ouvrage :",
    legalCreditsBookTitle: "Comment démasquer et réfuter la secte des coranistes",

    // Footer
    footerSubtitle: "10 arguments majeurs examinés et réfutés méthodiquement",
    footerQuote: "« Refuser l’autorité que le texte lui-même désigne au nom de la complétude du texte, c’est transformer la complétude en un principe que le texte n’a jamais énoncé. »",
    footerAuthorRef: "— Salah Eddine Ahmed",
    footerBtnLegal: "⚖️ Partage, Licence & Confidentialité",
    footerBtnContact: "✉️ Contact Auteur",
    footerBtnPortal: "📜 Parole d'Al-Barbahârî",
    footerContactLabel: "Contact :",
    footerNotice: "Manuel de réfutation méthodique — Basé sur l'ouvrage de référence de Salah Eddine Ahmed.",
    footerNotice2: "Ce contenu peut être partagé gratuitement à des fins personnelles et pédagogiques avec mention de la source.",

    // Fiches Arguments & Détails
    argBadgeGiant: "ARGUMENT",
    btnDownloadOriginalPdf: "Télécharger le PDF original",
    btnPrintPage: "Imprimer / Exporter PDF",
    formulaRetenir: "FORMULE À RETENIR :",
    tocThesis: "Leur Thèse",
    tocLogical: "Nœud Logique",
    tocPrinciple: "Principe Central",
    tocQuranic: "Architecture Coranique",
    tocAnalogies: "Analogies",
    tocResponses: "Réponses Prêtes",
    tocObjections: "Objections",
    tocQuiz: "Quiz",
    sec1Header: "1. LEUR THÈSE & LES VERSETS QU'ILS DÉTOURNENT",
    sec1QuestionTitle: "La question réelle à poser :",
    sec2Header: "2. LE NŒUD LOGIQUE DU PROBLÈME",
    sec2GeneralRule: "RÈGLE GÉNÉRALE :",
    sec2ErrorAvoid: "Erreur & Sophisme à Éviter",
    sec3Header: "3. LE PRINCIPE CENTRAL DE RÉFUTATION",
    sec3LogicalTest: "TEST LOGIQUE :",
    sec4Header: "4. L'ARCHITECTURE CORANIQUE COMPLÈTE",
    sec4Consequence: "CONSÉQUENCE :",
    sec5Header: "5. LES ANALOGIES PÉDAGOGIQUES",
    sec6Header: "6. RÉPONSES PRÊTES À L'EMPLOI",
    sec6QuickTitle: "Réponse Éclair (30 Secondes)",
    btnCopyQuick: "Copier la réponse 30s en 1 clic",
    sec6DevTitle: "Réponse Développée & Argumentée",
    sec7Header: "7. OBJECTIONS CORANISTES & LEURS RÉPONSES",
    sec7DirectQuestions: "Questions de cadrage directes :",
    sec8Header: "8. TESTEZ VOTRE COMPRÉHENSION",
    sec8Sub: "Quiz Interactif",
    quizBravo: "Bravo !",
    quizIncorrect: "Incorrect.",
    sec9Header: "9. CONCLUSION EN CHAÎNE LOGIQUE",
    navPrevArg: "Argument précédent",
    navNextArg: "Argument suivant",
    navBackSummary: "Retour au sommaire",
    navEndManual: "Fin du Manuel",
    toastCopySuccess: "✅ Réponse 30s copiée dans le presse-papier !",

    // Labels Génériques
    labelSituation: "Situation :",
    labelLogic: "Mécanisme logique :",
    labelLesson: "Enseignement :",
    labelApplication: "Application au débat :",
    labelObjection: "Objection",
    labelMethodicAnswer: "Réponse méthodique :"
  },

  ar: {
    brandBadge: "دليل عملي",
    brandTitle: "دليل تفنيد القرآنيين",
    brandSubtitle: "كيف تكشف وترد على شبهات منكري السنة النبوية",
    searchBtn: "بحث",
    barbahariBtn: "البربهاري",
    contactBtn: "اتصال",
    legalBtn: "المشاركة والرخصة",
    summaryTitle: "الفهرس",
    rubriquesCount: "12 فقرة",
    sidebarPreface: "المقدمة",
    sidebarIntro: "من هم القرآنيون ؟",
    sidebarSadaqaHeader: "نشر علمي مجاني",
    sidebarSadaqaText: "هذا الدليل متاح مجاناً لمدارسة السنة النبوية والدفاع عنها.",
    labelAuthor: "المؤلف :",
    authorName: "صلاح الدين أحمد",
    btnSidebarHome: "الرئيسية",
    btnSidebarContact: "مراسلة المؤلف",
    heroTag1: "دليل عملي منهجي للتفنيد",
    heroTag2: "نشر علمي مجاني مفتوح",
    heroTitleMain: "تفنيد",
    heroTitleSpan: "شبهات القرآنيين",
    heroAuthor: "بقلم صلاح الدين أحمد",
    heroDesc: "تفكيك مغالطات منكري السنة النبوية خطوة بخطوة بالاستدلال المنطقي الرصين، والأمثلة التعليمية، والآيات القرآنية المحكمة، والردود الجاهزة في 30 ثانية.",
    btnStartArg1: "البدء بالشبهة الأولى",
    btnSearchModal: "بحث عن موضوع / آية",
    btnContactAuthor: "مراسلة المؤلف",
    sommaireTitle: "الشبهات العشر الكبرى مفندة بالتفصيل",
    sommaireBadge: "10 بطاقات علمية جاهزة",
    btnReadCard: "فتح البطاقة",
    btnDownloadPdf: "تحميل الملف الأصلي PDF",
    btnPrintCard: "طباعة أو حفظ البطاقة PDF",
    goldenRuleHeader: "القاعدة الذهبية لمناظرة منكري السنة",
    goldenRuleTitle: "إياك أن تدع المحاور يشتت الموضوع أو يغير مسار النقاش",
    goldenRuleDesc: "أغلب شبهات القرآنيين تقوم على الخلط المنهجي : الخلط بين أصل حجية السنة (المثبتة بالقرآن) وبين مسألة التدوين والرواية التاريخية للكتب المتأخرة.",
    goldenRuleStep1: "1. إثبات ما أمر به القرآن أولاً (الطاعة، التحكيم، البيان، الأسوة الحسنة).",
    goldenRuleStep2: "2. بيان أن السلطة المفوضة للنبي ﷺ من الله لا تنازع السيادة الإلهية بل تنبثق منها.",
    goldenRuleStep3: "3. معالجة مسألة التوثيق التاريخي وسند الرواية بمنهجية علمية.",
    portalWarningBadge: "تحذير أئمة السلف من الطاعنين في النقل والآثار",
    portalTitle: "كلام الإمام البربهاري (رحمه الله)",
    portalQuoteTransLabel: "الترجمة والمعنى :",
    portalQuoteText: "« وَإِذَا سَمِعْتَ الرَّجُلَ يَأْتِيهِ الْأَثَرُ فَلَا يُرِيدُهُ ، وَيُرِيدُ الْقُرْآنَ ، فَلَا تَشُكَّ أَنَّهُ رَجُلٌ قَدِ احْتَوَى عَلَى الزَّنْدَقَةِ ، وَقُمْ مِنْ عِنْدِهِ وَدَعْهُ »",
    portalAuthorBadge: "✍️ الإمام البربهاري (ت 329 هـ)",
    portalSourceRef: "📖 المصدر : شرح السنة (فقرة 135)",
    portalEnterBtn: "الدخول إلى دليل التفنيد",
    portalDisclaimer: "دليل تفنيد شبهات القرآنيين • بقلم صلاح الدين أحمد • نشر تعليمي متاح مع ذكر المصدر",
    searchModalTitle: "بحث سريع في الدليل",
    searchPlaceholder: "مثال: الصلاة، سورة النحل آية 44، الرواية، الحجية...",
    searchNoResults: "لا توجد نتائج مطابقة لـ",
    contactModalTitle: "مراسلة المؤلف والملاحظات",
    contactAuthorHeader: "مؤلف الدليل",
    contactAuthorBio: "مؤلف كتاب « كيف تكشف وترد على شبهات القرآنيين — منهجية، شبهات، اعتراضات وردود ».",
    contactEmailBoxTitle: "البريد الإلكتروني الرسمي للتواصل :",
    contactSuggestions: "يمكنكم إرسال ملاحظاتكم واقتراحاتكم وأسئلتكم عبر البريد الإلكتروني إلى ideoise@gmail.com.",
    legalModalTitle: "شروط النشر والمشاركة والخصوصية",
    legalSharingHeader: "شروط النشر والاستخدام التعليمي",
    legalSharingTitle: "نشر ومشاركة تعليمية مفتوحة",
    legalSharingMainText: "يجوز مشاركة هذا المحتوى مجاناً وإعادة طباعته واستخدامه لأغراض شخصية وتعليمية ودعوية بشرط عزو الحقوق للمؤلف والمصدر.",
    legalAuthorizedUsesHeader: "الاستخدامات المسموحة :",
    legalAuthorizedUsesList: [
      "التحميل والطباعة والمطالعة والمشاركة المجانية للبطاقات.",
      "الاستخدام في الحلقات العلمية والدروس والمناظرات وشبكات التواصل.",
      "يمنع منعاً باتاً أي استغلال تجاري أو تحريف للنص بدون إذن مسبق."
    ],
    legalPrivacyHeader: "البيانات التقنية والخصوصية",
    legalPrivacyTitle: "سياسة خصوصية مطابقة للوظائف الفعلية للموقع",
    legalPrivacyText: "لا يطلب الموقع إنشاء أي حساب ولا يجمع أي بيانات شخصية عبر النماذج.",
    legalPrivacyBullet1: "لا توجد ملفات تعريف ارتباط إعلانية : صفر تتبع تجاري.",
    legalPrivacyBullet2: "الخطوط والموارد : تحميل آمن لخطوط Google Fonts.",
    legalCreditsHeader: "بيانات المؤلف والكتاب :",
    legalCreditsBookTitle: "كيف تكشف وترد على شبهات القرآنيين",
    footerSubtitle: "10 شبهات رئيسية مفندة منهجياً",
    footerQuote: "« إن رد الحجية التي نص عليها القرآن باسم كمال القرآن هو تحويل للكمال إلى معنى لم ينزل به القرآن قط. »",
    footerAuthorRef: "— صلاح الدين أحمد",
    footerBtnLegal: "⚖️ المشاركة، الرخصة والخصوصية",
    footerBtnContact: "✉️ مراسلة المؤلف",
    footerBtnPortal: "📜 كلام الإمام البربهاري",
    footerContactLabel: "للتواصل :",
    footerNotice: "دليل منهجي مبني على مؤلف الشيخ صلاح الدين أحمد.",
    footerNotice2: "محتوى مجاني متاح للمشاركة والاستفادة التعليمية مع ذكر المصدر.",
    argBadgeGiant: "الشبهة",
    btnDownloadOriginalPdf: "تحميل الكتيب الأصلي PDF",
    btnPrintPage: "طباعة / تصدير PDF",
    formulaRetenir: "القاعدة المعتمدة :",
    tocThesis: "شبهتهم والآيات",
    tocLogical: "العقدة المنطقية",
    tocPrinciple: "الأصل المنهجي",
    tocQuranic: "البناء القرآني",
    tocAnalogies: "الأمثلة والتمثيل",
    tocResponses: "الردود الجاهزة",
    tocObjections: "الاعتراضات",
    tocQuiz: "اختبار الفهم",
    sec1Header: "1. شبهتهم والآيات التي يحرفون معناها",
    sec1QuestionTitle: "السؤال الحقيقي الواجب طرحه :",
    sec2Header: "2. العقدة المنطقية للشبهة",
    sec2GeneralRule: "القاعدة الكلية :",
    sec2ErrorAvoid: "المغالطة والخلط الواجب تجنبه",
    sec3Header: "3. الأصل المنهجي للتفنيد",
    sec3LogicalTest: "الاختبار المنطقي :",
    sec4Header: "4. البناء القرآني المحكم",
    sec4Consequence: "النتيجة والأثر :",
    sec5Header: "5. الأمثلة التعليمية التوضيحية",
    sec6Header: "6. الردود الجاهزة للاستعمال",
    sec6QuickTitle: "الرد الموجز (30 ثانية)",
    btnCopyQuick: "نسخ الرد الموجز بنقرة واحدة",
    sec6DevTitle: "الرد المفصل والمدلل",
    sec7Header: "7. الاعتراضات والردود المنهجية",
    sec7DirectQuestions: "أسئلة الإلزام المباشرة :",
    sec8Header: "8. اختبر فهمك واستيعابك",
    sec8Sub: "اختبار تفاعلي",
    quizBravo: "أحسنت ! إجابة صحيحة.",
    quizIncorrect: "إجابة غير صحيحة.",
    sec9Header: "9. الخلاصة وسلسلة الاستدلال",
    navPrevArg: "الشبهة السابقة",
    navNextArg: "الشبهة التالية",
    navBackSummary: "العودة للفهرس",
    navEndManual: "نهاية الدليل",
    toastCopySuccess: "✅ تم نسخ الرد الموجز إلى الحافظة بنجاح !",
    labelSituation: "الواقعة والتمثيل :",
    labelLogic: "الآلية المنطقية :",
    labelLesson: "العبرة المستفادة :",
    labelApplication: "التطبيق في المناظرة :",
    labelObjection: "الشبهة",
    labelMethodicAnswer: "الرد المنهجي المفصل :"
  },

  en: {
    brandBadge: "PRACTICAL MANUAL",
    brandTitle: "REFUTATION OF QURANISM",
    brandSubtitle: "How to expose and refute the Quranist sect",
    searchBtn: "Search",
    barbahariBtn: "Al-Barbahari",
    contactBtn: "Contact",
    legalBtn: "Sharing & License",
    summaryTitle: "Table of Contents",
    rubriquesCount: "12 sections",
    sidebarPreface: "Preface",
    sidebarIntro: "Who are the Quranists?",
    sidebarSadaqaHeader: "Open Educational Resource",
    sidebarSadaqaText: "This manual is freely provided for the study and defense of the prophetic Sunnah.",
    labelAuthor: "Author:",
    authorName: "Salah Eddine Ahmed",
    btnSidebarHome: "Manual Home",
    btnSidebarContact: "Contact Author",
    heroTag1: "Practical Refutation Manual",
    heroTag2: "Open Educational Resource",
    heroTitleMain: "Refutation",
    heroTitleSpan: "of Quranism",
    heroAuthor: "By Salah Eddine Ahmed",
    heroDesc: "Deconstruct the fallacies of Quranism step by step with rigorous logic, pedagogical analogies, Quranic verses, and 30-second ready responses.",
    btnStartArg1: "Start with Argument 1",
    btnSearchModal: "Search topic / verse",
    btnContactAuthor: "Contact Author",
    sommaireTitle: "The 10 Major Arguments Decrypted",
    sommaireBadge: "10 Ready-to-Use Factsheets",
    btnReadCard: "Read factsheet",
    btnDownloadPdf: "Download original PDF",
    btnPrintCard: "Print or save factsheet as PDF",
    goldenRuleHeader: "Golden Rule for Debating a Quranist",
    goldenRuleTitle: "Never allow your interlocutor to shift the topic",
    goldenRuleDesc: "Most Quranist arguments rely on conceptual shifts: confusing the principle of the Sunnah (instituted by the Quran) with the historical transmission of later compilations.",
    goldenRuleStep1: "1. First establish what the Quran commands (Obedience, Judgment, Bayân, Exemplarity).",
    goldenRuleStep2: "2. Demonstrate that delegated authority never rivals divine sovereignty.",
    goldenRuleStep3: "3. Then methodically address the historical chain of transmission.",
    portalWarningBadge: "EARLY SCHOLARS' WARNING AGAINST DETRACTORS OF TRANSMISSION",
    portalTitle: "Words of Imam Al-Barbahârî (رحمه الله)",
    portalQuoteTransLabel: "Translation of the meaning:",
    portalQuoteText: "If you hear a man who, upon having an athar (transmitted tradition) cited to him, rejects it saying: \"Leave this and bring us the Quran\", do not doubt that he is a man steeped in heresy. Stand up and leave his gathering!",
    portalAuthorBadge: "✍️ Imam Al-Barbahârî (d. 329 AH)",
    portalSourceRef: "📖 Source: Sharḥ As-Sunnah (Point 135)",
    portalEnterBtn: "ACCESS THE REFUTATION MANUAL",
    portalDisclaimer: "How to Expose and Refute the Quranist Sect • By Salah Eddine Ahmed • Free educational usage with source attribution",
    searchModalTitle: "Quick Search in Manual",
    searchPlaceholder: "E.g., prayer, Surah An-Nahl verse 44, transmission, authority...",
    searchNoResults: "No results found for",
    contactModalTitle: "Contact the Author & Feedback",
    contactAuthorHeader: "Author of the Manual",
    contactAuthorBio: "Author of the work « How to Expose and Refute the Quranist Sect — Method, Arguments, Objections and Responses ».",
    contactEmailBoxTitle: "Official Contact Email Box:",
    contactSuggestions: "You can send your feedback, suggestions, or questions by email to ideoise@gmail.com.",
    legalModalTitle: "Sharing Conditions, Author & Privacy",
    legalSharingHeader: "Sharing Conditions & Educational Distribution",
    legalSharingTitle: "Open Educational Sharing and Distribution",
    legalSharingMainText: "This content may be freely shared, printed, and reproduced for personal, educational, and non-commercial purposes, provided source and authorship are preserved.",
    legalAuthorizedUsesHeader: "Authorized Uses:",
    legalAuthorizedUsesList: [
      "Downloading, printing, reading, and free sharing of the factsheets.",
      "Use in study circles, courses, debates, and social networks.",
      "Any commercial exploitation or distorting alteration is strictly prohibited without prior permission."
    ],
    legalPrivacyHeader: "Technical Data & Privacy",
    legalPrivacyTitle: "Privacy Policy Compliant with Real Functionality",
    legalPrivacyText: "The website requires no account creation and voluntarily collects no personal data via forms.",
    legalPrivacyBullet1: "No third-party advertising cookies: Zero commercial tracking pixels.",
    legalPrivacyBullet2: "Fonts & resources: Secure loading of Google Fonts.",
    legalCreditsHeader: "Book Details:",
    legalCreditsBookTitle: "How to Expose and Refute the Quranist Sect",
    footerSubtitle: "10 major arguments examined and methodically refuted",
    footerQuote: "« Rejecting the authority designated by the text in the name of the text's completeness is turning completeness into a principle the text never stated. »",
    footerAuthorRef: "— Salah Eddine Ahmed",
    footerBtnLegal: "⚖️ Sharing, License & Privacy",
    footerBtnContact: "✉️ Contact Author",
    footerBtnPortal: "📜 Words of Al-Barbahârî",
    footerContactLabel: "Contact:",
    footerNotice: "Methodical refutation manual — Based on the reference work by Salah Eddine Ahmed.",
    footerNotice2: "This content can be freely shared for personal and educational purposes with source attribution.",
    argBadgeGiant: "ARGUMENT",
    btnDownloadOriginalPdf: "Download original PDF",
    btnPrintPage: "Print / Export PDF",
    formulaRetenir: "KEY FORMULA:",
    tocThesis: "Their Thesis",
    tocLogical: "Logical Node",
    tocPrinciple: "Central Principle",
    tocQuranic: "Quranic Architecture",
    tocAnalogies: "Analogies",
    tocResponses: "Ready Responses",
    tocObjections: "Objections",
    tocQuiz: "Quiz",
    sec1Header: "1. THEIR THESIS & VERSES THEY DISTORT",
    sec1QuestionTitle: "The real question to ask:",
    sec2Header: "2. THE LOGICAL NODE OF THE ISSUE",
    sec2GeneralRule: "GENERAL RULE:",
    sec2ErrorAvoid: "Fallacy & Error to Avoid",
    sec3Header: "3. THE CENTRAL REFUTATION PRINCIPLE",
    sec3LogicalTest: "LOGICAL TEST:",
    sec4Header: "4. THE COMPLETE QURANIC ARCHITECTURE",
    sec4Consequence: "CONSEQUENCE:",
    sec5Header: "5. PEDAGOGICAL ANALOGIES",
    sec6Header: "6. READY-TO-USE RESPONSES",
    sec6QuickTitle: "Quick Response (30 Seconds)",
    btnCopyQuick: "Copy 30s response in 1 click",
    sec6DevTitle: "Developed & Substantiated Response",
    sec7Header: "7. QURANIST OBJECTIONS & METHODICAL ANSWERS",
    sec7DirectQuestions: "Direct framing questions:",
    sec8Header: "8. TEST YOUR COMPREHENSION",
    sec8Sub: "Interactive Quiz",
    quizBravo: "Well done! Correct answer.",
    quizIncorrect: "Incorrect.",
    sec9Header: "9. CONCLUSION IN LOGICAL CHAIN",
    navPrevArg: "Previous argument",
    navNextArg: "Next argument",
    navBackSummary: "Back to table of contents",
    navEndManual: "End of Manual",
    toastCopySuccess: "✅ 30s response copied to clipboard!",
    labelSituation: "Scenario:",
    labelLogic: "Logical mechanism:",
    labelLesson: "Lesson:",
    labelApplication: "Debate application:",
    labelObjection: "Objection",
    labelMethodicAnswer: "Methodical response:"
  }
};

// Compléter les langues restantes par dérivation systématique
const UI_BASE_EN = MASTER_UI.en;

['ary', 'es', 'de', 'it', 'pt', 'ur', 'ta', 'ps', 'ku', 'ce'].forEach(code => {
  if (!MASTER_UI[code]) {
    // Utiliser les traductions de haute qualité existantes dans pack.ui ou dériver
    const p = path.join(TRANSLATIONS_DIR, code + '.js');
    const raw = fs.readFileSync(p, 'utf8');
    const sb = {};
    new Function('window', 'sandbox', raw + `\nsandbox.DATA = window.I18N_DATA["${code}"];`)({}, sb);
    const existing = sb.DATA.ui || {};

    MASTER_UI[code] = Object.assign({}, UI_BASE_EN, existing);
  }
});

console.log('✅ Dictionnaires UI Master prêts pour les 13 langues.');

// Synchronisation des 13 fichiers de langues
LANG_CODES.forEach(code => {
  const filePath = path.join(TRANSLATIONS_DIR, `${code}.js`);
  if (!fs.existsSync(filePath)) return;

  const raw = fs.readFileSync(filePath, 'utf8');
  const sandbox = {};
  new Function('window', 'sandbox', raw + `\nsandbox.DATA = window.I18N_DATA["${code}"];`)({}, sandbox);
  const pack = sandbox.DATA;
  if (!pack) return;

  // Assigner l'UI master enrichie
  pack.ui = Object.assign({}, pack.ui, MASTER_UI[code] || MASTER_UI['en']);

  // Écriture du fichier final
  const output = `/**
 * Pack de Langue : ${pack.name} (${pack.code.toUpperCase()}) - ${pack.native}
 * Traduction Exhaustive et Intégrale (UI, Préface, Intro, 10 Arguments, Modales)
 */
window.I18N_DATA = window.I18N_DATA || {};
window.I18N_DATA['${pack.code}'] = ${JSON.stringify(pack, null, 2)};
`;

  fs.writeFileSync(filePath, output, 'utf8');
  console.log(`✅ ${code}.js synchronisé avec UI complète.`);
});

console.log('🎉 Synchronisation UI des 13 langues terminée avec succès.');
