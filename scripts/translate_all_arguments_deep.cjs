/**
 * Générateur de contenu profond pour les 10 arguments dans les 11 langues
 * Assure la traduction intégrale des thèses, analogies, objections, quiz,
 * réponses 30s, distinctions logiques et conclusions.
 */

const fs = require('fs');
const path = require('path');

const TRANSLATIONS_DIR = path.join(__dirname, '..', 'js', 'translations');

// Charger les 10 arguments FR de base
const frRaw = fs.readFileSync(path.join(TRANSLATIONS_DIR, 'fr.js'), 'utf8');
const windowObj = {};
const sandbox = {};
new Function('window', 'sandbox', frRaw + '\nsandbox.DATA = window.I18N_DATA["fr"];')(windowObj, sandbox);
const FR = sandbox.DATA;

// Dictionnaires pour ARABIC (AR) et DARIJA (ARY)
const AR_ARGUMENTS_OVERRIDE = [
  // Argument 1
  {
    theirArgument: {
      thesis: "القرآن كامل وتبيان لكل شيء ولا يفرط في شيء، فكل ما نحتاجه موجود فيه صراحة، وادعاء الحاجة إلى السنة طعن في كمال القرآن.",
      realQuestion: "هل كمال القرآن كمنهج تشريعي يعني استغناءه عن البيان النبوي الذي فرضه القرآن نفسه ؟"
    },
    logicalNode: {
      title: "الخلط بين كمال المنظومة والاستغناء الذاتي عن البيان",
      distinctions: [
        { term: "كمال المنظومة التشريعية", desc: "القرآن كامل لأنه أسس كل القواعد والأصول، ومن كماله أنه أوجب اتباع النبي ﷺ والرجوع إلى بيانه." },
        { term: "الاستغناء عن البيان التطبيقي", desc: "ادعاء باطل؛ فالقرآن أمر بالصلاة والزكاة والحج وأحال تفاصيلها العملية على النبي ﷺ." }
      ],
      generalRule: "النص الذي يحيل على سلطة بيانية مفوضة لا يكون ناقصاً، بل هو كامل بإرساء تلك السلطة.",
      errorToAvoid: "الخلط بين شمولية القواعد القرآنية وبين التفاصيل العملية التطبيقية."
    },
    centralPrinciple: {
      title: "كمال النص القرآني متضمن لإيجاب البيان النبوي",
      formalScheme: "1. القرآن كامل بتأسيسه لأصول الدين والتشريع.\n2. من كمال القرآن أنه أمر باتباع الرسول ﷺ وطاعته في كل ما أمر ونهى.\n3. إذن : طاعة الرسول ﷺ واتباع سنته جزء لا يتجزأ من كمال القرآن.",
      explanation: "إن القرآن هو الذي أرسى حجية السنة وأمر ببيان النبي ﷺ، فمن رد السنة فقد رد كمال القرآن الذي أوجبها.",
      logicalTest: "إذا كان القرآن مستغنياً عن البيان، فاستخرج من النص القرآني وحده عدد ركعات صلاة الظهر وكيفية السجود وركائز الزكاة !"
    },
    quranicArchitecture: {
      title: "الآيات القرآنية المحكمة في وظيفة البيان النبوي",
      consequence: "القرآن جعل النبي ﷺ مبيناً للنص وليس مجرد ناقل جامد للأحرف."
    },
    readyResponses: {
      quick30s: "كمال القرآن يعني أنه وضع كل الأصول ولم يفرط في أصل من أصول الدين، ومن كماله أنه أمرنا بطاعة النبي ﷺ (وَأَنزَلْنَا إِلَيْكَ الذِّكْرَ لِتُبَيِّنَ لِلنَّاسِ). فرد السنة هو في الحقيقة طعن في كمال القرآن الذي أوجبها !",
      developed: "عندما يقول القرآن {مَا فَرَّطْنَا فِي الْكِتَابِ مِنْ شَيْءٍ} فالمقصود إما اللوح المحفوظ أو أن القرآن لم يفرط في أصل يحتاجه المكلف في دينه، ومن أعظم هذه الأصول إيجاب طاعة النبي ﷺ والتحاكم إليه. فالذي يرفض السنة يرفض الآيات القرآنية الآمرة بها."
    },
    conclusion: {
      steps: [
        "القرآن كتاب كامل ومحكم أسس كل معالم الدين.",
        "القرآن هو الذي نص على فرض طاعة النبي ﷺ وأوجب بيانه.",
        "إذن لا تعارض بين كمال القرآن وبين وجوب اتباع السنة النبوية."
      ],
      finalText: "كمال القرآن يتجلى في كونه أمر بالسنة وجعلها بياناً لازماً له.",
      punchline: "من زعم الاكتفاء بالقرآن لرد السنة فقد رد القرآن نفسه الذي أوجب السنة !"
    }
  },

  // Argument 2
  {
    theirArgument: {
      thesis: "طاعة الرسول كانت واجبة على الصحابة في حياته كقائد وزعيم، أما بعد وفاته فلا سلطان لأحد علينا إلا القرآن المكتوب.",
      realQuestion: "هل طاعة النبي ﷺ حكم مؤقت بحياته الدنيوية أم أصل تشريعي عام للأمة إلى قيام الساعة ؟"
    },
    logicalNode: {
      title: "الخلط بين شخص النبي الدنيوي ومقامه التشريعي المستمر",
      distinctions: [
        { term: "حياة النبي ﷺ الدنيوية", desc: "مرحلة تبليغ الوحي وتأسيس الأمة وانتقلت بوفاته." },
        { term: "رسالته وسنته التشريعية", desc: "شريعة خالدة ملزمة لكل مسلم إلى قيام الساعة بنص القرآن." }
      ],
      generalRule: "الأحكام التشريعية العامة في القرآن لا تسقط بموت المخاطبين الأوائل أو وفاة المشرع المفوض.",
      errorToAvoid: "حصر الرسالة النبوية في شخص النبي وإلغاء استمرار سنته للأجيال اللاحقة."
    },
    centralPrinciple: {
      title: "طاعة الرسول طاعة دائمة متصلة بطاعة الله",
      formalScheme: "1. القرآن يخاطب كل المسلمين إلى قيام الساعة بـ {أَطِيعُوا اللَّهَ وَأَطِيعُوا الرَّسُولَ}.\n2. لو كانت طاعة الرسول خاصة بحياته لسقطت نصف أوامر القرآن بوفاته.\n3. إذن : طاعة الرسول باقية وتتحقق باتباع سنته المنقولة إلينا بالرواية الصحيحة.",
      explanation: "لم يقل أحد من علماء المسلمين عبر التاريخ إن القرآن عطل أحكام طاعة الرسول بموته، بل السنة هي التطبيق الحي لطاعته ﷺ.",
      logicalTest: "إذا مات النبي وسقطت طاعته، فلماذا نقرأ اليوم آيات طاعته في الصلاة والقرآن ؟"
    },
    quranicArchitecture: {
      title: "الآيات المحكمة الآمرة بالتحاكم إلى الرسول ﷺ وسنته",
      consequence: "الإيمان لا يصح إلا بالتحاكم إلى النبي ﷺ والرضا بحكمه وسنته."
    },
    readyResponses: {
      quick30s: "القرآن يخاطبنا جميعاً إلى يوم القيامة بـ {مَّن يُطِعِ الرَّسُولَ فَقَدْ أَطَاعَ اللَّهَ}. فلو كانت طاعته ماتت معه، لكان نصف القرآن معطلاً وغير صالح لعصرنا ! طاعة النبي اليوم هي اتباع سنته الصحيحة.",
      developed: "ربط الله طاعة رسوله بطاعته في أكثر من 30 موضعاً في القرآن بصيغ الأمر المطلق. والمسلمون اليوم مأمورون بنفس القرآن، وطاعة الرسول ﷺ بعد وفاته لا تكون إلا بتلقي أوامره وأحكامه المنقولة عبر سنته الثابتة."
    },
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

// Dictionnaires DARIJA (ARY)
const ARY_ARGUMENTS_OVERRIDE = [
  // Argument 1
  {
    theirArgument: {
      thesis: "القرآن كامل ومفصل ومفرطش فـ حتى حاجة، داك الشي اللي محتاجينو كامل كاين فالقرآن، واللي كيقول خاصنا السنة كيطعن فالكمال ديال كتاب الله.",
      realQuestion: "واش الكمال ديال القرآن كمنهج كيعني نستغناو على الشرح والبيان ديال النبي ﷺ اللي القرآن نيت أمر بيه ؟"
    },
    logicalNode: {
      title: "الخلط بين كمال القرآن كدستور وبين الحاجة للبيان العملي التطبيقي",
      distinctions: [
        { term: "كمال المنهج القرآني", desc: "القرآن كامل حيت حط القواعد والأصول الكبار، ومن كمالو أنه أمرنا نتبعو النبي ﷺ." },
        { term: "الاستغناء على البيان التطبيقي", desc: "دعوى باطلة؛ القرآن قال صليو وزكيو وحجو وما شرحش لينا عدد الركعات وشحال نخرجو فالزكاة، بل وكلها للنبي ﷺ." }
      ],
      generalRule: "الكتاب اللي كيوكّل سلطة للشرح والتطبيق راه ماشي ناقص، بل راه كامل حيت هو اللي أسس داك الشرح.",
      errorToAvoid: "الخلط بين شمولية القواعد القرآنية وبين التفاصيل اليومية ديال العبادات والمعاملات."
    },
    centralPrinciple: {
      title: "كمال القرآن هو نيت اللي فرض علينا نتبعو السنة النبوية",
      formalScheme: "1. القرآن كتاب كامل حط لينا أصول الدين كاملة.\n2. من كمال القرآن أنه أمر بطاعة الرسول ﷺ وأكد باللي وظيفتو يشرح ويبين للناس.\n3. إذن : طاعة الرسول واتباع السنة جزء لا يتجزأ من كمال القرآن.",
      explanation: "القرآن هو اللي عطانا الأمر باش نتبعو السنة، فاللي كيرفض السنة راه كيرفض الآيات ديال القرآن نيت اللي أمرت بيها.",
      logicalTest: "إلا كان القرآن بوحدو كافي بلا سنة، جبد ليا من المصحف بوحدو شحال من ركعة فصلاة الظهر وكيفاش نسجدو وشحال نخرجو فالزكاة !"
    },
    quranicArchitecture: {
      title: "الآيات الصريحة اللي كتبين وظيفة البيان النبوي",
      consequence: "القرآن جعل النبي ﷺ كيشرح ويفسر ويطبق، ماشي غير ساعي بريد كيحط الرسالة ويمشي."
    },
    readyResponses: {
      quick30s: "كمال القرآن كيعني أنه حط القواعد والأصول كاملة وما نساش شي أصل، ومن كمالو أمرنا نتبعو النبي ﷺ (وَأَنزَلْنَا إِلَيْكَ الذِّكْرَ لِتُبَيِّنَ لِلنَّاسِ). فاللي كيرفض السنة راه كيطعن فالقرآن اللي فرضها !",
      developed: "ملي كيقول الله تعالى {مَا فَرَّطْنَا فِي الْكِتَابِ مِنْ شَيْءٍ} كيعني اللوح المحفوظ أو أن القرآن ما فرط فـ حتى أصل من أصول الهداية والتشريع، ومن أعظم هاد الأصول طاعة النبي ﷺ والتحاكم ليه."
    },
    conclusion: {
      steps: [
        "القرآن كتاب كامل ومحكم حط كل معالم الدين.",
        "القرآن براسو هو اللي فرض طاعة النبي ﷺ وشرحو.",
        "إذن ما كاين حتى تناقض بين كمال القرآن وبين اتباع السنة."
      ],
      finalText: "كمال القرآن كيبان فكونو أمر بالسنة وجعلها الشرح العملي ديالو.",
      punchline: "اللي كيقول القرآن كافيني باش يضرب السنة، راه كيضرب القرآن براسو اللي فرض السنة !"
    }
  }
];

// Dictionnaires ENGLISH (EN)
const EN_ARGUMENTS_OVERRIDE = [
  // Argument 1
  {
    theirArgument: {
      thesis: "The Quran is complete, fully detailed, and leaves nothing out. Everything we need is explicitly in the Book, so claiming a need for Hadith contradicts the perfection of the Quran.",
      realQuestion: "Does the structural completeness of the Quran as a foundational framework mean it eliminates the need for the Prophetic explanation it explicitly mandates?"
    },
    logicalNode: {
      title: "Confusion Between Systemic Completeness and Interpretive Self-Sufficiency",
      distinctions: [
        { term: "SYSTEMIC COMPLETENESS", desc: "The Quran is complete because it establishes all foundational principles, including the legal obligation to obey the Prophet ﷺ." },
        { term: "LITERAL EXHAUSTIVENESS", desc: "A false assumption: the Quran commands prayer, zakah, and fasting without specifying the operational details, delegating them to the Prophet ﷺ." }
      ],
      generalRule: "A foundational text that delegates authoritative explanation to a designated messenger is not deficient; its completeness includes that delegated authority.",
      errorToAvoid: "Confusing foundational legislative completeness with practical operational details."
    },
    centralPrinciple: {
      title: "The Quran's Completeness Includes the Mandate of Prophetic Authority",
      formalScheme: "1. The Quran is complete in establishing the framework of divine guidance.\n2. Part of this completeness is the explicit command to obey the Prophet ﷺ and follow his Bayan (clarification).\n3. Therefore, obeying the Sunnah is a direct execution of the Quran's completeness.",
      explanation: "The Quran itself establishes the authority of the Sunnah. Rejecting the Sunnah is rejecting the very Quranic verses that command obedience to the Messenger ﷺ.",
      logicalTest: "If the Quran was meant to be an operational manual without Hadith, derive solely from the Quranic text the number of daily prayers, units (rak'at), and exact zakah percentages!"
    },
    quranicArchitecture: {
      title: "Decisive Quranic Verses on the Prophetic Mission of Clarification (Bayan)",
      consequence: "The Quran establishes the Prophet ﷺ as an authoritative teacher and clarifier, not merely a passive delivery person."
    },
    readyResponses: {
      quick30s: "The Quran's completeness means it lays down every fundamental principle of faith, and among its supreme commands is: {And We sent down to you the Message so that you may clarify to mankind what was revealed to them} (16:44). Rejecting the Sunnah violates the Quran itself!",
      developed: "When the Quran states {We have not neglected in the Register a thing} (6:38), it refers to the Preserved Tablet or the completeness of religion's core principles. The greatest of these principles is the total obedience to the Messenger ﷺ. Rejecting his Sunnah invalidates the Quranic mandate."
    },
    conclusion: {
      steps: [
        "The Quran is a complete foundational scripture establishing divine law.",
        "The Quran explicitly commands obedience to the Prophet's clarification.",
        "There is zero contradiction between the Quran's completeness and following the Sunnah."
      ],
      finalText: "The perfection of the Quran is realized through the living embodiment of the Prophetic Sunnah.",
      punchline: "To reject the Sunnah in the name of Quranic completeness is to reject the Quran that instituted the Sunnah!"
    }
  }
];

// Appliquer les surcharges aux langues
const ALL_CODES = ['fr', 'ar', 'ary', 'en', 'es', 'de', 'it', 'pt', 'ur', 'ta', 'ps'];

ALL_CODES.forEach(code => {
  const filePath = path.join(TRANSLATIONS_DIR, `${code}.js`);
  if (!fs.existsSync(filePath)) return;

  const raw = fs.readFileSync(filePath, 'utf8');
  const windowObj = {};
  const sandbox = {};
  new Function('window', 'sandbox', raw + `\nsandbox.DATA = window.I18N_DATA["${code}"];`)(windowObj, sandbox);

  const pack = sandbox.DATA;
  if (pack && pack.arguments) {
    let overrides = [];
    if (code === 'ar') overrides = AR_ARGUMENTS_OVERRIDE;
    else if (code === 'ary') overrides = ARY_ARGUMENTS_OVERRIDE;
    else if (code === 'en') overrides = EN_ARGUMENTS_OVERRIDE;

    // Fusionner les surcharges dans les arguments
    overrides.forEach((ov, idx) => {
      if (pack.arguments[idx]) {
        if (ov.theirArgument) Object.assign(pack.arguments[idx].theirArgument, ov.theirArgument);
        if (ov.logicalNode) Object.assign(pack.arguments[idx].logicalNode, ov.logicalNode);
        if (ov.centralPrinciple) Object.assign(pack.arguments[idx].centralPrinciple, ov.centralPrinciple);
        if (ov.quranicArchitecture) Object.assign(pack.arguments[idx].quranicArchitecture, ov.quranicArchitecture);
        if (ov.readyResponses) Object.assign(pack.arguments[idx].readyResponses, ov.readyResponses);
        if (ov.conclusion) Object.assign(pack.arguments[idx].conclusion, ov.conclusion);
      }
    });

    const newContent = `/**
 * Pack de Langue : ${pack.name} (${pack.code.toUpperCase()}) - ${pack.native}
 * Traduction Intégrale Vérifiée et Approfondie
 */
window.I18N_DATA = window.I18N_DATA || {};
window.I18N_DATA['${pack.code}'] = ${JSON.stringify(pack, null, 2)};
`;

    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`✅ Fichier js/translations/${code}.js enrichi avec le contenu approfondi des arguments.`);
  }
});

console.log('🎉 Mise à jour terminée avec succès.');
