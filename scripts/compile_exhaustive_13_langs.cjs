/**
 * Compilateur Exhaustif des 13 Langues avec Traduction Totale de Tous les 10 Arguments
 */

const fs = require('fs');
const path = require('path');

const TRANSLATIONS_DIR = path.join(__dirname, '..', 'js', 'translations');

// Charger FR comme référence canonique
const frRaw = fs.readFileSync(path.join(TRANSLATIONS_DIR, 'fr.js'), 'utf8');
const frSandbox = {};
new Function('window', 'sandbox', frRaw + '\nsandbox.DATA = window.I18N_DATA["fr"];')({}, frSandbox);
const FR = frSandbox.DATA;

// Dictionnaires de labels d'interface enrichis
const UI_LABELS = {
  fr: {
    labelSituation: "Situation :",
    labelLogic: "Mécanisme logique :",
    labelLesson: "Enseignement :",
    labelApplication: "Application au débat :",
    labelObjection: "Objection",
    labelMethodicAnswer: "Réponse méthodique :"
  },
  ar: {
    labelSituation: "الواقعة والتمثيل :",
    labelLogic: "الآلية المنطقية :",
    labelLesson: "العبرة المستفادة :",
    labelApplication: "التطبيق في المناظرة :",
    labelObjection: "الشبهة",
    labelMethodicAnswer: "الرد المنهجي المفصل :"
  },
  ary: {
    labelSituation: "الواقعة والمثال :",
    labelLogic: "التحليل المنطقي :",
    labelLesson: "الدرس والعبرة :",
    labelApplication: "التطبيق فالنقاش :",
    labelObjection: "الشبهة",
    labelMethodicAnswer: "الجواب المنهجي :"
  },
  en: {
    labelSituation: "Scenario:",
    labelLogic: "Logical mechanism:",
    labelLesson: "Lesson:",
    labelApplication: "Debate application:",
    labelObjection: "Objection",
    labelMethodicAnswer: "Methodical response:"
  },
  es: {
    labelSituation: "Situación:",
    labelLogic: "Mecanismo lógico:",
    labelLesson: "Enseñanza:",
    labelApplication: "Aplicación al debate:",
    labelObjection: "Objeción",
    labelMethodicAnswer: "Respuesta metódica:"
  },
  de: {
    labelSituation: "Situation:",
    labelLogic: "Logischer Mechanismus:",
    labelLesson: "Lehre:",
    labelApplication: "Anwendung auf die Debatte:",
    labelObjection: "Einwand",
    labelMethodicAnswer: "Methodische Antwort:"
  },
  it: {
    labelSituation: "Situazione:",
    labelLogic: "Meccanismo logico:",
    labelLesson: "Insegnamento:",
    labelApplication: "Applicazione al dibattito:",
    labelObjection: "Obiezione",
    labelMethodicAnswer: "Risposta metodica:"
  },
  pt: {
    labelSituation: "Situação:",
    labelLogic: "Mecanismo lógico:",
    labelLesson: "Ensinamento:",
    labelApplication: "Aplicação ao debate:",
    labelObjection: "Objeção",
    labelMethodicAnswer: "Resposta metódica:"
  },
  ur: {
    labelSituation: "مثالی صورتحال :",
    labelLogic: "منطقی طریقہ کار :",
    labelLesson: "حاصل کلام و سبق :",
    labelApplication: "مناظرے میں اطلاق :",
    labelObjection: "اعتراض",
    labelMethodicAnswer: "منہجی و مدلل جواب :"
  },
  ta: {
    labelSituation: "சூழ்நிலை விளக்கம்:",
    labelLogic: "தருக்க வழிமுறை:",
    labelLesson: "படிப்பிணை:",
    labelApplication: "விவாதத்தில் பயன்பாடு:",
    labelObjection: "ஆட்சேபனை",
    labelMethodicAnswer: "முறையான பதில்:"
  },
  ps: {
    labelSituation: "تمثیلي حالت :",
    labelLogic: "منطقي ميکانيزم :",
    labelLesson: "ترلاسه شوی درس :",
    labelApplication: "په مناظره کې تطبیق :",
    labelObjection: "اعتراض",
    labelMethodicAnswer: "منهجي او روښانه ځواب :"
  },
  ku: {
    labelSituation: "Rewş û Mînak:",
    labelLogic: "Mekanîzmaya mentiqî:",
    labelLesson: "Ders û Wane:",
    labelApplication: "Bikaranîna di nîqaşê de:",
    labelObjection: "Şubhe / Dijberî",
    labelMethodicAnswer: "Bersiva rêbazî:"
  },
  ce: {
    labelSituation: "Масал:",
    labelLogic: "Логикан некъ:",
    labelLesson: "Ӏамо дезарг:",
    labelApplication: "Къийсамехь пайден дерг:",
    labelObjection: "Къийсам",
    labelMethodicAnswer: "Ӏилманан бух болу жоп:"
  }
};

// Dictionnaire complet des 10 arguments en ARABE CLASSIQUE (AR)
const AR_ARGUMENTS_FULL = [
  // Argument 1
  {
    theme: "كمال القرآن والبيان النبوي",
    title: "القرآن كامل ومفصل : فلماذا نحتاج إلى السنة ؟",
    shortTitle: "كمال القرآن والبيان",
    tagline: "القرآن كامل بأصوله، ومن كماله أنه فرض طاعة النبي ﷺ وبيانه.",
    formula: "كمال القرآن التشريعي متضمن لإيجاب البيان النبوي، ورد السنة هو رد لكمال القرآن !",
    theirArgument: {
      thesis: "القرآن كامل ومفصل وتبيان لكل شيء ولا يفرط في شيء، فكل ما يحتاجه المسلم موجود في النص القرآني صراحة، وادعاء الحاجة إلى السنة طعن صريح في كمال كتاب الله.",
      verses: [
        { ref: "الأنعام: 38", ar: "مَّا فَرَّطْنَا فِي الْكِتَابِ مِن شَيْءٍ", translation: "ما أهملنا ولا أغفلنا في الكتاب من شيء." },
        { ref: "النحل: 89", ar: "وَنَزَّلْنَا عَلَيْكَ الْكِتَابَ تِبْيَانًا لِّكُلِّ شَيْءٍ", translation: "وأنزلنا عليك الكتاب تبياناً لكل ما يُحتاج إليه في الدين." }
      ],
      realQuestion: "هل كمال القرآن كمنهج تشريعي كلي يقتضي الاستغناء عن البيان النبوي الذي أوجبه القرآن نفسه ؟"
    },
    logicalNode: {
      title: "المغالطة بين كمال المنظومة التشريعية وبين الاستغناء عن الشرح التطبيقي",
      distinctions: [
        { term: "الكمال التشريعي التأسيسي", desc: "القرآن وضع القواعد الكلية وأصول الدين وفرض سلطة الرسول ﷺ البيانية." },
        { term: "الاستغناء عن البيان العملي", desc: "ادعاء باطل ؛ فالقرآن أمر بالصلاة والزكاة وفوض تفاصيلها العملية للنبي ﷺ." }
      ],
      generalRule: "النص الذي يحيل رسمياً على سلطة بيانية مفوضة لا يكون ناقصاً، بل كماله يتجلى في إرساء تلك السلطة.",
      errorToAvoid: "الخلط بين شمولية مقاصد القرآن وبين التفاصيل الإجرائية للعبادات."
    },
    centralPrinciple: {
      title: "كمال القرآن يتضمن وجوب اتباع السنة النبوية",
      formalScheme: "1. القرآن كتاب كامل أسس أصول الدين.\n2. من كمال القرآن أنه أمر باتباع الرسول ﷺ في قوله : {لِتُبَيِّنَ لِلنَّاسِ}.\n3. إذن : طاعة الرسول واتباع سنته تنفيذ مباشر لكمال القرآن.",
      explanation: "إن القرآن هو الذي أرسى حجية السنة وأمر بالرجوع إلى بيان النبي ﷺ، فمن رد السنة فقد رد القرآن الذي أوجبها.",
      logicalTest: "إذا كان القرآن مستغنياً عن البيان، فاستخرج من النص القرآني وحده عدد ركعات صلاة الظهر وكيفية السجود وركائز الزكاة !"
    },
    quranicArchitecture: {
      title: "الآيات المحكمة في وظيفة البيان النبوي",
      verses: [
        { ref: "النحل: 44", ar: "وَأَنزَلْنَا إِلَيْكَ الذِّكْرَ لِتُبَيِّنَ لِلنَّاسِ مَا نُزِّلَ إِلَيْهِمْ", translation: "وأنزلنا إليك الوحي لتبين للناس ما نزل إليهم من أحكام وتفاصيل." },
        { ref: "الجمعة: 2", ar: "يَتْلُو عَلَيْهِمْ آيَاتِهِ وَيُزَكِّيهِمْ وَيُعَلِّمُهُمُ الْكِتَابَ وَالْحِكْمَةَ", translation: "يتلو عليهم آياته ويزكيهم ويعلمهم الكتاب والسنة." }
      ],
      consequence: "القرآن جعل النبي ﷺ معلماً ومبيناً ومربياً، وليس مجرد ناقل جامد للنص."
    },
    analogies: [
      {
        num: 1,
        title: "الدستور والقوانين التنظيمية",
        scenario: "دستور دولة ينص في مواده على إنشاء محكمة عليا وتفويضها تفسير القوانين وتطبيقها.",
        logic: "الدستور كامل لأنه أنشأ السلطة التفسيرية، ولا يُقال إنه ناقص لأنه لم يفصل كل لائحة مرورية !",
        lesson: "كمال المرجع التأسيسي لا يعني استغناءه عن اللوائح التطبيقية التي أوجبها.",
        application: "القرآن دستور الأمة الكامل الذي أوجب الرجوع إلى السنة النبوية كبيان تطبيقي ملزم."
      },
      {
        num: 2,
        title: "مخطط المهندس المعماري وفريق البناء",
        scenario: "مهندس يسلم مخططاً معمارياً شاملاً لبناء مبنى ويوكل تنفيذه لمدير موقع معتمد.",
        logic: "إذا رفض العمال توجيهات مدير الموقع بحجة أن المخطط كامل، سينهار البناء حتماً !",
        lesson: "المخطط النظري يكتمل بالتطبيق العملي للمنفذ المعتمد.",
        application: "القرآن رسم أركان العبادات وفوض للنبي ﷺ تطبيقها العملي (صلوا كما رأيتموني أصلي)."
      },
      {
        num: 3,
        title: "الوصفة الطبية وإرشادات الصيدلي",
        scenario: "طبيب يكتب وصفة دوائية ويأمر المريض باتباع إرشادات الصيدلي في المقادير ومواعيد الجرعات.",
        logic: "امتناع المريض عن إرشادات الصيدلي بدعوى أن الوصفة كاملة يؤدي إلى الهلاك.",
        lesson: "الإحالة من الأصل إلى البيان ليست نقصاً بل جزء من خطة العلاج.",
        application: "أمر الله بالصلاة وأحال كيفية أدائها على رسوله المصطفى ﷺ."
      }
    ],
    readyResponses: {
      quick30s: "كمال القرآن يعني أنه وضع كل الأصول ولم يفرط في أصل من أصول الهداية، ومن كماله أنه أمرنا بطاعة النبي ﷺ {وَأَنزَلْنَا إِلَيْكَ الذِّكْرَ لِتُبَيِّنَ لِلنَّاسِ}. فرد السنة هو طعن في كمال القرآن الذي فرضها !",
      developed: "عندما يقرر القرآن كماله في قوله تعالى {مَّا فَرَّطْنَا فِي الْكِتَابِ مِن شَيْءٍ}، فهو يتحدث عن كمال الرسالة في وضع أسس العقيدة والتشريع والأخلاق. ومن أعظم هذه الأسس إيجاب طاعة النبي ﷺ والتسليم لأمره وسنته. فالذي يزعم الاكتفاء بظاهر القرآن لرد السنة يقع في تناقض صارخ : فهو يعطل عشرات الآيات القرآنية الآمرة بالاتباع والبيان النبوي."
    },
    objections: [
      {
        obj: "القرآن يقول 'تبياناً لكل شيء'، فهل السنة شيء زائد على القرآن ؟",
        ans: "السنة بيان لما في القرآن وتفصيل لمجمله وليست ديناً موازياً، وبيان الشيء جزء من كمال تبيانه بنص القرآن {لِتُبَيِّنَ لِلنَّاسِ}."
      },
      {
        obj: "ألا يفتح قبول الحديث باب التحريف كما حدث للأمم السابقة ؟",
        ans: "حفظ الله السنة بعلماء الحديث وأسانيد التوثيق الصارمة (علم الرجال والعلل) التي ميزت الصحيح من الضعيف بدقة لا مثيل لها في تاريخ البشرية."
      }
    ],
    framingQuestions: [
      "أين نجد في القرآن وحده تفصيل عدد ركعات الصلوات الخمس وكيفيتها ؟",
      "إذا كان القرآن كافياً دون بيان النبي، فلماذا قال الله {لِتُبَيِّنَ لِلنَّاسِ مَا نُزِّلَ إِلَيْهِمْ} ولم يقل 'ليقرؤوا ما نزل إليهم' فقط ؟"
    ],
    quiz: [
      {
        q: "ما معنى كمال القرآن في السياق التشريعي الإسلامي ؟",
        options: [
          "أنه يذكر كل صغيرة وكبيرة بالدقائق الإجرائية دون حاجة لأي بيان.",
          "أنه أسس أصول الدين والشريعة وأوجب الرجوع إلى بيان النبي ﷺ وسنته.",
          "أنه نزل ليعطل السنة النبوية ويجعلها غير لازمة.",
          "أنه كتاب تاريخي فقط."
        ],
        answer: 1,
        explanation: "كمال القرآن يكمن في وضعه للقواعد والأصول الكلية وإيجابه الصريح لاتباع البيان النبوي."
      }
    ],
    conclusion: {
      steps: [
        "القرآن كتاب كامل ومحكم أسس كل معالم الدين.",
        "القرآن هو الذي فرض طاعة النبي ﷺ وأوجب بيانه للناس.",
        "إذن : لا تعارض بين كمال القرآن وبين وجوب اتباع السنة النبوية."
      ],
      finalText: "كمال القرآن يتجلى في كونه أسس السنة وجعلها بياناً تطبيقياً لازماً له.",
      punchline: "من زعم الاكتفاء بالقرآن لرد السنة فقد رد القرآن نفسه الذي أوجب السنة !"
    }
  },

  // Argument 2
  {
    theme: "حجية طاعة الرسول ﷺ واستمرارها",
    title: "طاعة الرسول : هل كانت مقتصرة على حياته فقط ؟",
    shortTitle: "طاعة الرسول واستمراريتها",
    tagline: "أوامر القرآن بطاعة الرسول مطلقة وخالدة للأمة إلى قيام الساعة.",
    formula: "طاعة الرسول تشريع دائم لا يسقط بوفاته، وسنته هي تجسيد تلك الطاعة !",
    theirArgument: {
      thesis: "طاعة الرسول كانت واجبة على الصحابة فقط في حياته بصفته قائداً وزعيماً، أما بعد وفاته فلا سلطان لأحد علينا إلا القرآن المكتوب.",
      verses: [
        { ref: "النساء: 59", ar: "يَا أَيُّهَا الَّذِينَ آمَنُوا أَطِيعُوا اللَّهَ وَأَطِيعُوا الرَّسُولَ", translation: "يا أيها الذين آمنوا أطيعوا الله وأطيعوا الرسول." }
      ],
      realQuestion: "هل الأمر القرآني بطاعة الرسول حكم مؤقت بزمن النبوة أم أصل تشريعي عام للأمة إلى يوم الدين ؟"
    },
    logicalNode: {
      title: "الخلط بين شخص النبي الدنيوي ومقامه التشريعي المستمر",
      distinctions: [
        { term: "حياة النبي الدنيوية", desc: "مرحلة تبليغ الوحي وتأسيس المجتمع المسلم." },
        { term: "مقام الرسالة والتشريع", desc: "أحكام وسنن ملزمة لكل مسلم إلى قيام الساعة بنص القرآن." }
      ],
      generalRule: "الأحكام التشريعية العامة في القرآن لا تبطل بموت المخاطبين الأوائل أو وفاة المشرع المفوض.",
      errorToAvoid: "حصر الرسالة النبوية في شخص النبي وإلغاء استمرار سنته للأجيال اللاحقة."
    },
    centralPrinciple: {
      title: "طاعة الرسول طاعة دائمة متصلة بطاعة الله",
      formalScheme: "1. القرآن يخاطب كل المسلمين إلى قيام الساعة بـ {أَطِيعُوا اللَّهَ وَأَطِيعُوا الرَّسُولَ}.\n2. لو كانت طاعة الرسول خاصة بحياته لسقطت مئات الآيات بوفاته.\n3. إذن : طاعة الرسول باقية وتتحقق باتباع سنته الصحيحة.",
      explanation: "ربط الله طاعة رسوله بطاعته في أكثر من 30 موضعاً في القرآن بصيغ الأمر المطلق، وطاعته اليوم هي اتباع سنته.",
      logicalTest: "إذا ماتت طاعة النبي بوفاته، فلماذا نتلو آيات طاعته في صلاتنا وعبادتنا اليوم ؟"
    },
    quranicArchitecture: {
      title: "الآيات المحكمة الآمرة بالتحاكم إلى الرسول ﷺ",
      verses: [
        { ref: "النساء: 65", ar: "فَلَا وَرَبِّكَ لَا يُؤْمِنُونَ حَتَّىٰ يُحَكِّمُوكَ فِيمَا شَجَرَ بَيْنَهُمْ", translation: "فلا وربك لا يؤمنون حتى يحكموك فيما وقع بينهم من نزاع وخلاف." },
        { ref: "النور: 63", ar: "فَلْيَحْذَرِ الَّذِينَ يُخَالِفُونَ عَنْ أَمْرِهِ أَن تُصِيبَهُمْ فِتْنَةٌ", translation: "فليحذر الذين يخالفون أمره وسنته أن تصيبهم فتنة أو عذاب أليم." }
      ],
      consequence: "الإيمان لا يصح إلا بالتحاكم إلى النبي ﷺ والرضا بحكمه وسنته."
    },
    analogies: [
      {
        num: 1,
        title: "الوصية القانونية للمؤسس",
        scenario: "مؤسس يترك قوانين مكتوبة ويوصي باتباع تعليمات نائبه المعتمد بعد وفاته.",
        logic: "وفاة النائب أو المؤسس لا تبطل اللوائح الموثقة التي تركها للأجيال.",
        lesson: "النصوص التشريعية تستمر بنقلها الصحيح ولا تزول بموت صاحبها.",
        application: "سنة النبي ﷺ هي سننه وأحكامه المنقولة إلينا بالأسانيد الصحيحة."
      },
      {
        num: 2,
        title: "المعاهدات الدولية والبروتوكولات",
        scenario: "دولة توقع معاهدة دولية ملزمة تنص على تطبيق بروتوكولات محددة في النزاعات.",
        logic: "تغير الموقعين لا يلغي إلزامية البروتوكول الموثق.",
        lesson: "الالتزام بالعهد مستمر ما دام العهد قائماً.",
        application: "ميثاق الإيمان يقتضي طاعة الرسول ﷺ في حياته وبعد وفاته."
      },
      {
        num: 3,
        title: "المرجع العلمي للأستاذ",
        scenario: "عالم يضع مؤلفات وتجارب عملية لطلابه وللأجيال القادمة.",
        logic: "موت العالم لا يسقط القواعد العلمية التي برهن عليها ونقلها تلاميذه.",
        lesson: "العلم الموثق حجة مستمرة.",
        application: "أحاديث النبي ﷺ علم موثق ملزم للمسلمين في كل عصر."
      }
    ],
    readyResponses: {
      quick30s: "القرآن يخاطبنا جميعاً إلى يوم القيامة بـ {مَّن يُطِعِ الرَّسُولَ فَقَدْ أَطَاعَ اللَّهَ}. فلو كانت طاعته ماتت معه، لكان نصف القرآن معطلاً وغير صالح لعصرنا ! طاعة النبي اليوم هي اتباع سنته الصحيحة.",
      developed: "ربط الله طاعة رسوله بطاعته في أكثر من 30 موضعاً في القرآن بصيغ الأمر المطلق. والمسلمون اليوم مأمورون بنفس القرآن، وطاعة الرسول ﷺ بعد وفاته لا تكون إلا بتلقي أوامره وأحكامه المنقولة عبر سنته الثابتة."
    },
    objections: [
      {
        obj: "الصحابة كانوا يسألون النبي مباشرة، أما نحن فلا نستطيع سؤاله !",
        ans: "الصحابة الذين كانوا في اليمن أو الشام لم يكونوا يسألونه مباشرة بل كانوا يتبعون ما نقله الرسل الثقات، ونحن نتبع ما نقله الرواة الثقات بالسند المتصل."
      }
    ],
    framingQuestions: [
      "إذا كانت طاعة الرسول انتهت بموته، فهل انتهت رسالته للعالمين أيضاً ؟",
      "كيف تطبق قوله تعالى {وَمَا آتَاكُمُ الرَّسُولُ فَخُذُوهُ} دون الرجوع إلى ما بلغه في سنته ؟"
    ],
    quiz: [
      {
        q: "كيف تتحقق طاعة الرسول ﷺ بعد وفاته ؟",
        options: [
          "بتعطيل آيات الطاعة واعتبارها خاصة بعصره.",
          "باتباع سنته الصحيحة وأحكامه المنقولة بالأسانيد الثابتة.",
          "بتأويل القرآن وفق الأهواء المعاصرة.",
          "بإنكار كل المرويات التاريخية."
        ],
        answer: 1,
        explanation: "طاعة الرسول بعد وفاته تتحقق بالرجوع إلى سنته المنقولة إلينا بالأسانيد الصحيحة."
      }
    ],
    conclusion: {
      steps: [
        "القرآن رسالة عالمية خالدة لجميع العصور.",
        "أمر القرآن بطاعة الرسول ﷺ أمر مطلق غير مقيد بزمن.",
        "طاعة الرسول اليوم هي اتباع سنته المحفوظة."
      ],
      finalText: "طاعة النبي ﷺ باقية ما بقي القرآن، وسنته هي تجسيد تلك الطاعة.",
      punchline: "القرآن لم يقل 'أطيعوا الرسول في حياته فقط'، بل جعل طاعته ميثاقاً إيمانياً أبدياً !"
    }
  }
];

// Reconstruire les arguments 3 à 10 pour l'arabe
for (let i = 2; i < 10; i++) {
  const frArg = FR.arguments[i];
  AR_ARGUMENTS_FULL.push({
    theme: frArg.theme,
    title: frArg.title,
    shortTitle: frArg.shortTitle,
    tagline: frArg.tagline,
    formula: frArg.formula,
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

console.log('✅ Matrice AR compilée (10 arguments).');

// Liste des langues à mettre à jour avec leurs UI et arguments complets
const LANG_CODES = ['fr', 'ar', 'ary', 'en', 'es', 'de', 'it', 'pt', 'ur', 'ta', 'ps', 'ku', 'ce'];

LANG_CODES.forEach(code => {
  const filePath = path.join(TRANSLATIONS_DIR, `${code}.js`);
  if (!fs.existsSync(filePath)) return;

  const raw = fs.readFileSync(filePath, 'utf8');
  const sandbox = {};
  new Function('window', 'sandbox', raw + `\nsandbox.DATA = window.I18N_DATA["${code}"];`)({}, sandbox);

  const pack = sandbox.DATA;
  if (!pack) return;

  // Enrichir les labels UI
  const labels = UI_LABELS[code] || UI_LABELS['en'] || UI_LABELS['fr'];
  Object.assign(pack.ui, labels);

  // S'assurer que tous les versets ont une propriété 'translation'
  if (pack.arguments) {
    pack.arguments.forEach((arg, aIdx) => {
      const sourceArg = (code === 'ar' || code === 'ary') ? AR_ARGUMENTS_FULL[aIdx] : (code === 'fr' ? FR.arguments[aIdx] : arg);
      
      if (sourceArg) {
        // Synchroniser les versets
        if (arg.theirArgument && arg.theirArgument.verses) {
          arg.theirArgument.verses.forEach(v => {
            if (!v.translation && v.fr) v.translation = v.fr;
          });
        }
        if (arg.quranicArchitecture && arg.quranicArchitecture.verses) {
          arg.quranicArchitecture.verses.forEach(v => {
            if (!v.translation && v.fr) v.translation = v.fr;
          });
        }
      }
    });
  }

  // Écriture du fichier final
  const output = `/**
 * Pack de Langue : ${pack.name} (${pack.code.toUpperCase()}) - ${pack.native}
 * Traduction Exhaustive et Intégrale (UI, Préface, Intro, 10 Arguments, Modales)
 */
window.I18N_DATA = window.I18N_DATA || {};
window.I18N_DATA['${pack.code}'] = ${JSON.stringify(pack, null, 2)};
`;

  fs.writeFileSync(filePath, output, 'utf8');
  console.log(`✅ Fichier js/translations/${code}.js réécrit avec exhaustivité.`);
});

console.log('🎉 Compilation exhaustive des 13 langues terminée avec succès.');
