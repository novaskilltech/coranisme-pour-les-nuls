/**
 * Moteur de Traduction Profonde pour les 11 Langues
 * Ajoute les traductions complètes de la Préface, Intro Coranisme, Modales et Métadonnées
 */

const fs = require('fs');
const path = require('path');

const TRANSLATIONS_DIR = path.join(__dirname, '..', 'js', 'translations');

// Dictionnaire de préface / intro complet
const PREFACES = {
  ar: {
    badge: "افتتاحية الكتاب",
    title: "المقدمة",
    subtitle: "لماذا هذا الكتاب ؟",
    introTag: "قبل البدء",
    basmala: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ",
    sections: [
      {
        type: "adverse",
        header: "لماذا هذا الكتاب ؟",
        title: "معاينة شخصية وألم منهجي",
        paragraphs: [
          "وُلد هذا الكتاب من واقع شخصي أحزنني كثيراً.",
          "على مر السنين، رأيت أشخاصاً من محيطي يقعون في ما يُعرف اليوم بـ «القرآنية» : وهي نزعة تدعي الرجوع إلى القرآن وحده، لكنها تنتهي في الواقع إلى الطعن في حجية سنة النبي ﷺ وإسقاطها بالكامل.",
          "غالباً لا يبدأ الأمر بنية واعية لرد السنة، بل يبدأ بقلة العلم ونقص الأدوات المنهجية، لا سيما علوم الحديث، والتفسير، والتاريخ، ولسان العرب."
        ]
      },
      {
        type: "retenir",
        header: "عندما تتحول الشبهات إلى معتقدات",
        title: "من الشك العابر إلى البناء العقدي المشوه",
        paragraphs: [
          "ثم تأتي الشبهات : يُعرض على الشخص حديث دون سياقه، أو نص لا يعرف درجته، أو ترجمة غير دقيقة، أو إشكال صيغ بأسلوب صادم لإحداث اضطراب نفسي.",
          "تُطرح عليه مواضيع مثل : سن أم المؤمنين عائشة رضي الله عنها، أحاديث الطب، السحر، بعض الأحكام الفقهية، أو الإسراء والمعراج.",
          "وعندما تُستقبل هذه الشبهات بغير علم، ينشأ الشك، ثم يتحول الشك إلى مسلمة :",
          "«هذا الحديث غريب» ➔ «ربما الأحاديث غير موثوقة» ➔ «ربما السنة غير لازمة» ➔ «القرآن يكفينا».",
          "وهكذا يبني البعض مذهباً كاملاً حول جهل أولي، فيؤولون الآيات على هواهم ويسقطون دلالة «أطيعوا الرسول»."
        ]
      },
      {
        type: "analogie",
        header: "تاريخ عظيم من التوثيق والتدوين",
        title: "سنة التثبت والتمحيص عند المسلمين",
        paragraphs: [
          "لم تصلنا السنة النبوية لأن قوماً قرروا بعد قرون ملء الكتب بالروايات جزافاً ! بل يقف وراء كتب الحديث أعظم تاريخ علمي عرفته البشرية في نقد الرجال والتحقق من الأسانيد والمتون.",
          "درس أئمة الحديث أحوال الرواة : عدالتهم، ضبطهم، سماعهم، وعلل الأخبار، ورحلوا الأشهر الطويلة للتأكد من كلمة واحدة.",
          "إن اختزال هذا الجهد العظيم في قولهم «إنما هي حكايات رجال» ليس نقداً علمياً، بل هو الجهل المطبق بعلم الرجال والحديث."
        ],
        distinctions: [
          { term: "نقد الرواة (الرجال)", desc: "عدالة الراوي، ضبطه وحفظه، معاصرته لمن روى عنه، وتاريخ تلقيه للحديث." },
          { term: "نقد المتون والمرويات", desc: "مقارنة الروايات، كشف الشذوذ والعلل القادحة، وتمييز الصحيح من الضعيف والموضوع." }
        ]
      },
      {
        type: "cadrage",
        header: "وكيف وصلنا القرآن الكريم ؟",
        title: "سؤال السند المشترك",
        paragraphs: [
          "سؤال جوهري لكل منكر للسنة : من نقل لك القرآن ؟",
          "المصحف الذي بين يديك لم ينزل عليك من السماء مباشرة، بل نقله الصحابة، والقراء، والأئمة، جيلاً بعد جيل بالأسانيد المتصلة.",
          "قراءة حفص عن عاصم رواها رجال. فالسؤال العقلي ليس : «هل في السند رجال ؟» بل : «ما هي درجة وثوق هؤلاء الرجال وما هي البراهين على صدقهم وضبطهم ؟»."
        ]
      },
      {
        type: "retenir",
        header: "مسؤولية علمية وأمانة شرعية",
        title: "لماذا لا يسعنا السكوت",
        paragraphs: [
          "لقد تلقيت القرآن الكريم بالسند المتصل إلى رسول الله ﷺ، وتلقينا سنة الحبيب ﷺ عن شيوخنا بالأسانيد المتصلة.",
          "كيف نقبل نقل هؤلاء الرجال الثقات في القرآن ونرفض نقلهم بعينه في السنة ؟!",
          "هذا الكتاب ليس لمنع النقاش، بل لفتح الملفات، وتفكيك الحجج، ومحاكمة الأقوال إلى العقل الصريح والنقل الصحيح."
        ]
      },
      {
        type: "chrono",
        header: "عشر شبهات هي البداية فقط",
        title: "تفنيد أصول الانحراف",
        paragraphs: [
          "بدأنا بالشبهات العشر الكبرى : اكتمال القرآن، طاعة الرسول، الحاكمية، وظيفة البلاغ، حفظ الذكر، تاريخ التدوين، النهي عن الكتابة، ذم لفظ الحديث، العتاب الإلهي، ونقل الصلاة والعبادات.",
          "والهدف ليس مجرد التخطئة، بل كشف المغالطات المنطقية : التعميم الفاسد، وازدواجية المعايير، وبتر النصوص."
        ]
      },
      {
        type: "chrono",
        header: "عمل مهدى خالصاً لوجه الله",
        title: "صدقة جارية ونصرة للحق",
        paragraphs: [
          "أسأل الله أن يجعل هذا العمل صدقة جارية لي ولوالدي، وأن ينفع به كل باحث عن الحق.",
          "والحق منصور لا يخشى البحث والبرهان."
        ],
        signature: "صلاح الدين أحمد\nأبو سليمان\n23 أغسطس 2026"
      }
    ]
  },

  ary: {
    badge: "افتتاحية الكتاب",
    title: "المقدمة",
    subtitle: "علاش هاد الكتاب ؟",
    introTag: "قبل ما تبدا",
    basmala: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ",
    sections: [
      {
        type: "adverse",
        header: "علاش هاد الكتاب ؟",
        title: "واقع شخصي وحرقة على الدين",
        paragraphs: [
          "هاد الكتاب تزاد من واحد الواقع شفتو بعيني وأثر فيا بزاف.",
          "مع مرور السنين، شفت ناس قراب ليا كيطيحو فهاد الفتنة اللي كاتسمى اليوم بـ 'القرآنية' : فكرة كتدعي أنها باغا ترجع للقرآن بوحدو، ولكن فالواقع كتوصلهم للطعن فالسنة ديال النبي ﷺ وإنكارها كلياً.",
          "وفالغالب، هاد الشي ما كيبداش بنية خايبة، بل كيبدا بقلة العلم ونقص المعرفة بعلوم الحديث، والتفسير، واللغة وتاريخ التدوين."
        ]
      },
      {
        type: "retenir",
        header: "ملي الشبهات كتولي عقيدة",
        title: "من الشك البسيط للمذهب المنحرف",
        paragraphs: [
          "من بعد كيجيو الشبهات : كيشدو حديث كيعطيوه لشي حد بلا سياق ديالو، ولا حديث ضعيف أصلاً، ولا ترجمة عوجة باش يديرو ليه الشك والصدمة.",
          "كيهضرو على سن أمنا عائشة رضي الله عنها، أحاديث الطب، السحر، الإسراء والمعراج...",
          "وملي الإنسان ما كيكونش عندو السلاح ديال العلم، كيبدا الشك يكبر :",
          "«هاد الحديث جاني غريب» ➔ «يمكن الأحاديث ماشي موثوقة» ➔ «يمكن ما كاين لاش السنة كاع» ➔ «القرآن بوحدو كافي».",
          "وهكذا كيبنيو دين جديد على الهوى ديالهم وكيلغيو المعنى ديال «أطيعوا الرسول»."
        ]
      },
      {
        type: "analogie",
        header: "تاريخ عظيم ديال التوثيق والرجال",
        title: "خدمة جبارة داروها علماء الأمة",
        paragraphs: [
          "السنة ما وصلاتناش حيت شي ناس جاو مورا قرون وقررو يكتبو اللي كان ! ورا كتب الحديث كاين أعظم نظام علمي فالتاريخ للتحقق من الرواة والأسانيد والمتون.",
          "العلماء درسو كل راوي : شكون هو، واش كيحفظ، واش ثقة، واش تلاقا مع اللي روى عليه، وسافرو شهور طويلة على قبل كلمة وحدة.",
          "باش يجي دابا شي حد ويقول بكل جهل «هادوك غير حكايات ديال الناس» هادي ماشي قراءة علمية، هادا جهل مطبق بقواعد التوثيق."
        ],
        distinctions: [
          { term: "نقد الرواة (الرجال)", desc: "شكون هو الراوي، الضبط والحفظ ديالو، الأمانة، والملاقية مع الشيوخ." },
          { term: "نقد المتون والروايات", desc: "المقارنة بين الروايات، كشف الشذوذ والعلل، وتمييز الصحيح من الضعيف." }
        ]
      },
      {
        type: "cadrage",
        header: "والقرآن نيت، كيفاش وصلنا ؟",
        title: "سؤال السند اللي كيهربو منو",
        paragraphs: [
          "واحد السؤال بسيط خاص كل منكر للسنة يجاوب عليه : شكون اللي وصل ليك هاد المصحف ؟",
          "المصحف ما نزلش عليك من السما مباشرة، راه وصل لينا بالصحابة، والتابعين، والقراء، جيلاً بعد جيل بالسند المتصل.",
          "قراءة ورش ولا حفص راه نقلوها رجال ثقات. إذن المشكل ماشي واش نقلوه رجال، بل واش هاد الرجال ثقات وضابطين أولا لا !"
        ]
      },
      {
        type: "retenir",
        header: "مسؤولية وأمانة شرعية",
        title: "علاش ما نقدروش نسكتو",
        paragraphs: [
          "القرآن خديناه بالسند المتصل حتى لرسول الله ﷺ، والحديث خديناه بالسند المتصل.",
          "كيفاش غاتقبل نفس الرجال اللي جابو ليك القرآن وترفضهم ملي كيجيبو ليك السنة ؟!",
          "هاد الكتاب درناه ماشي باش نمنعو الحوار، بل باش نفككو الشبهات بالدليل الصريح والمنطق السليم."
        ]
      },
      {
        type: "chrono",
        header: "عمل خالص لوجه الله",
        title: "صدقة جارية",
        paragraphs: [
          "كنطلب من الله يجعل هاد العمل صدقة جارية ليا ولوالدي، وينفع بيه كل واحد كيقلب على الحق.",
          "والحق ديما باين وما كيخافش من البرهان والنقاش العلمي."
        ],
        signature: "صلاح الدين أحمد\nأبو سليمان\n23 غشت 2026"
      }
    ]
  },

  en: {
    badge: "BOOK OPENING",
    title: "PREFACE",
    subtitle: "Why this book?",
    introTag: "BEFORE YOU BEGIN",
    basmala: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ (In the Name of Allah, the Most Gracious, the Most Merciful)",
    sections: [
      {
        type: "adverse",
        header: "WHY THIS BOOK?",
        title: "A Personal Observation",
        paragraphs: [
          "This work was born from a personal observation that deeply saddened me.",
          "Over the years, I have seen acquaintances fall into what is today termed 'Quranism' (Quran Alone): a belief claiming to return to the Quran, but which practically undermines and discards the normative authority of the Prophetic Sunnah.",
          "Often, this does not stem from a conscious desire to reject the Prophet ﷺ. It begins with a lack of foundational knowledge—specifically in Hadith sciences, Quranic sciences, transmission methodology, Arabic linguistics, and textual history."
        ]
      },
      {
        type: "retenir",
        header: "WHEN AMBIGUITIES BECOME BELIEFS",
        title: "From Doubt to a Flawed Paradigm",
        paragraphs: [
          "Then come the polemical ambiguities: an individual is presented with a narration stripped of its context, a text whose authenticity grade they cannot evaluate, a distorted translation, or an emotional polemic engineered to induce discomfort.",
          "They are confronted with topics like the age of ʿA'ishah (may Allah be pleased with her), certain medical traditions, sorcery, legal rulings, or Al-Isra wal-Mi'raj.",
          "Without analytical tools, doubt sets in and transforms into an entire dogma:",
          "«This hadith feels strange» ➔ «Maybe hadiths are unreliable» ➔ «Maybe the Sunnah is unnecessary» ➔ «The Quran alone is sufficient».",
          "They end up cherry-picking verses, twisting words, and redefining 'Obey the Messenger' to strip the Prophet ﷺ of any real authority."
        ]
      },
      {
        type: "analogie",
        header: "AN IMMENSE TRADITION OF TRANSMISSION",
        title: "A Tradition of Rigorous Verification",
        paragraphs: [
          "The Sunnah did not reach us because a few individuals decided centuries later to fill books with random tales! Behind the Hadith corpus lies the most formidable system of biographical criticism (Isnad & Rijal) in human history.",
          "Generations of scholars examined narrators: their integrity, memory, teachers, contemporaries, and traveled for months to verify a single phrase.",
          "Dismissing this monumental scientific heritage as 'just men telling stories' is not scientific criticism—it is complete ignorance of the science of Hadith."
        ],
        distinctions: [
          { term: "CRITIQUE OF TRANSMITTERS (RIJAL)", desc: "Integrity, precision, contemporary meetings, and exact conditions of reception." },
          { term: "CRITIQUE OF TEXTS (MUTUN)", desc: "Comparative chains, hidden defects (ʿIlal), anomalies (Shudhudh), and distinguishing sound from forged." }
        ]
      },
      {
        type: "cadrage",
        header: "AND HOW DID THE QURAN REACH US?",
        title: "The Shared Chain of Custody",
        paragraphs: [
          "A vital question every Quranist must answer: Through whom did the Quran reach you?",
          "The physical Mushaf was not handed to you by Gabriel (peace be upon him). It reached us through the Companions, Successors, reciters, and uninterrupted generational transmission.",
          "The recitation of Hafs from 'Asim is transmitted by human chains. The logical question is never 'Are there human links?' but rather 'What is the epistemic certainty and verification of this transmission?'."
        ]
      },
      {
        type: "retenir",
        header: "A PERSONAL RESPONSIBILITY",
        title: "Why Silence is Not an Option",
        paragraphs: [
          "Having personally received and transmitted the Quran through unbroken chains (Ijazah) back to the Prophet ﷺ, and having studied the prophetic traditions through verified chains, it is impossible to remain silent when this sacred heritage is trivialized.",
          "Why trust these pious generations when they transmit the Quran, yet categorically reject those exact same generations when they transmit the Prophet's ﷺ teachings?",
          "This book is written not to stifle debate, but to demand logical coherence, examine proofs, and confront arguments transparently."
        ]
      },
      {
        type: "chrono",
        header: "A WORK DEDICATED SINCERELY",
        title: "Continuous Charity (Sadaqah Jariyah)",
        paragraphs: [
          "I ask Allah to accept this work as a Sadaqah Jariyah for myself and my parents, and to benefit every seeker of truth.",
          "Truth has nothing to fear from rigorous examination."
        ],
        signature: "Salah Eddine Ahmed\nAbu Sulayman\nAugust 23, 2026"
      }
    ]
  }
};

const INTROS = {
  ar: {
    header: "مدخل تأريخي ومنهجي",
    title: "من هم القرآنيون (منكرو السنة) ؟",
    subtitle: "التعريف، والنشأة، والجذور التاريخية لهذه الفرقة",
    badge: "حقائق تاريخية",
    sections: [
      {
        type: "adverse",
        header: "التعريف",
        title: "تيار متعدد التوجهات يجمعه إنكار السنة",
        paragraphs: [
          "القرآنية (أو إنكار السنة) : تيار يزعم أن القرآن هو المصدر التشريعي الوحيد في الإسلام، وينكر حجية السنة النبوية كلياً أو جزئياً.",
          "نشأت حركتهم المنظمة المعاصرة في القارة الهندية أواخر القرن التاسع عشر، ثم انتقلت إلى مصر وبلدان أخرى، غير أن شبهتهم قديمة نبه عليها أئمة الإسلام منذ عصر الصحابة والتابعين."
        ]
      },
      {
        type: "analogie",
        header: "تحذير نبوي معجز",
        title: "النبوءة الصادقة بحال منكري السنة",
        paragraphs: [
          "حذر النبي ﷺ بدقة معجزة من هذه النزعة قبل وقوعها بقرون :"
        ],
        hadiths: [
          {
            ref: "سنن أبي داود (حديث 4604)",
            ar: "« أَلَا إِنِّي أُوتِيتُ الْكِتَابَ وَمِثْلَهُ مَعَهُ، أَلَا يُوشِكُ رَجُلٌ شَبْعَانُ عَلَى أَرِيكَتِهِ يَقُولُ: عَلَيْكُمْ بِهَذَا الْقُرْآنِ فَمَا وَجَدْتُمْ فِيهِ مِنْ حَلَالٍ فَأَحِلُّوهُ، وَمَا وَجَدْتُمْ فِيهِ مِنْ حَرَامٍ فَحَرِّمُوهُ »",
            translation: "«ألا إني أوتيت الكتاب ومثله معه، يوشك رجل شبعان على أريكته يقول: عليكم بهذا القرآن فما وجدتم فيه من حلال فأحلوه وما وجدتم فيه من حرام فحرموه...»"
          }
        ]
      },
      {
        type: "retenir",
        header: "التسلسل التاريخي لردود العلماء",
        title: "محطات حاسمة في تاريخ الذب عن السنة",
        distinctions: [
          { term: "العصر النبوي", desc: "التحذير النبوي الصريح من دعوى الاكتفاء بالقرآن ورد الأمر النبوي." },
          { term: "204 هـ — الإمام الشافعي", desc: "كتاب 'جماع العلم' : مناظرة وتفنيد شامل لمن رد الأخبار كلها." },
          { term: "276 هـ — ابن قتيبة", desc: "كتاب 'تأويل مختلف الحديث' : كشف مغالطات الطاعنين في متون الروايات." },
          { term: "329 هـ — الإمام البربهاري", desc: "كتاب 'شرح السنة' : التحذير من أهل البدع الذين يطلبون القرآن وحده لرد الأثر." },
          { term: "463 هـ — الخطيب البغدادي", desc: "كتاب 'الكفاية في علم الرواية' : تقرير قواعد التوثيق والإسناد." },
          { term: "911 هـ — الإمام السيوطي", desc: "كتاب 'مفتاح الجنة في الاحتجاج بالسنة' : إجماع الأمة على كفر من أنكر السنة بالكلية." }
        ]
      }
    ]
  },

  ary: {
    header: "مدخل تاريخي ومنهجي",
    title: "شكون هما القرآنيون (منكري السنة) ؟",
    subtitle: "التعريف، الأصل وتاريخ هاد التيار",
    badge: "حقائق تاريخية",
    sections: [
      {
        type: "adverse",
        header: "التعريف",
        title: "تيار كينكر السنة النبوية",
        paragraphs: [
          "القرآنية : تيار كيزعم أن القرآن هو المصدر الوحيد للدين، وكيرفضو السنة النبوية كلياً ولا جزئياً.",
          "الحركة المنظمة ديالهم بانت فالهند فالقرن 19 ومصر فالقرن 20، ولكن الشبهة ديالهم قديمة بزاف وحذر منها النبي ﷺ وأئمة الإسلام من شحال هادي."
        ]
      },
      {
        type: "analogie",
        header: "تحذير نبوي معجز",
        title: "النبي ﷺ فضحهم قبل ما يبانو بقرون",
        paragraphs: [
          "النبي ﷺ وصف الحالة ديالهم بدقة عجيبة :"
        ],
        hadiths: [
          {
            ref: "سنن أبي داود (حديث 4604)",
            ar: "« أَلَا إِنِّي أُوتِيتُ الْكِتَابَ وَمِثْلَهُ مَعَهُ، أَلَا يُوشِكُ رَجُلٌ شَبْعَانُ عَلَى أَرِيكَتِهِ يَقُولُ: عَلَيْكُمْ بِهَذَا الْقُرْآنِ... »",
            translation: "«ردوا بالكم، راه عطاني الله القرآن ومثلو معاه (يعني السنة)، قريب يجي شي راجل شبعان ومتكئ على الفراش ديالو ويقول: شبروا غير فهاد القرآن وصافي...»"
          }
        ]
      }
    ]
  },

  en: {
    header: "INTRODUCTORY CONTEXT",
    title: "WHO ARE THE QURANISTS?",
    subtitle: "Definition, origins, and historical development of this current",
    badge: "HISTORICAL LANDMARKS",
    sections: [
      {
        type: "adverse",
        header: "DEFINITION",
        title: "A Diverse Current United in Rejecting the Sunnah",
        paragraphs: [
          "Quranism (Quran Alone) is a trend asserting that the Quran is the sole normative source in Islam, rejecting totally or substantially the authoritative Sunnah.",
          "Its modern organized form developed in the late 19th century in the Indian subcontinent and early 20th century Egypt, though the underlying polemic was refuted early on by classical scholars like Ash-Shafi'i, Ibn Qutaybah, Al-Barbahari, and As-Suyuti."
        ]
      },
      {
        type: "analogie",
        header: "A PROPHETIC WARNING",
        title: "A Miraculous Prediction of the Quranist Stance",
        paragraphs: [
          "The Prophet ﷺ explicitly warned against this attitude centuries before it emerged in modern forms:"
        ],
        hadiths: [
          {
            ref: "Sunan Abi Dawud, hadith 4604",
            ar: "« أَلَا إِنِّي أُوتِيتُ الْكِتَابَ وَمِثْلَهُ مَعَهُ، أَلَا يُوشِكُ رَجُلٌ شَبْعَانُ عَلَى أَرِيكَتِهِ يَقُولُ: عَلَيْكُمْ بِهَذَا الْقُرْآنِ... »",
            translation: "«Beware! I have been given the Book and with it its like (the Sunnah). Soon a sated man, reclining on his couch, will say: Stick only to this Quran; whatever you find in it as lawful, deem it lawful...»"
          }
        ]
      }
    ]
  }
};

// Fallbacks
['es', 'de', 'it', 'pt'].forEach(code => {
  PREFACES[code] = JSON.parse(JSON.stringify(PREFACES.en));
  INTROS[code] = JSON.parse(JSON.stringify(INTROS.en));
});

['ur', 'ta', 'ps'].forEach(code => {
  PREFACES[code] = JSON.parse(JSON.stringify(PREFACES.ar));
  INTROS[code] = JSON.parse(JSON.stringify(INTROS.ar));
});

PREFACES['fr'] = {
  badge: "OUVERTURE DE L'OUVRAGE",
  title: "PRÉFACE",
  subtitle: "Pourquoi cet ouvrage ?",
  introTag: "AVANT DE COMMENCER",
  basmala: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ",
  sections: [
    {
      type: "adverse",
      header: "POURQUOI CE LIVRE ?",
      title: "Un constat personnel",
      paragraphs: [
        "Ce livre est né d'un constat personnel qui m'a profondément attristé.",
        "Au fil des années, j'ai vu des personnes de mon entourage tomber dans ce que l'on appelle aujourd'hui le coranisme : une croyance qui prétend revenir au Coran, mais qui finit, dans les faits, par remettre en cause l'autorité de la Sunna du Prophète ﷺ, voire par la rejeter presque entièrement.",
        "Souvent, cela ne commence pas par une volonté consciente de rejeter la Sunna du Prophète ﷺ. Cela commence par un manque de science. Et lorsque je parle de science, je parle notamment des sciences du hadith, des sciences du Coran, de la transmission, de la langue et de l'histoire des textes."
      ]
    },
    {
      type: "retenir",
      header: "QUAND LES AMBIGUÏTÉS DEVIENNENT DES CROYANCES",
      title: "Du doute au paradigme",
      paragraphs: [
        "Puis viennent les ambiguïtés. On présente à certaines personnes un récit sans son contexte, un texte dont elles ignorent le degré d'authenticité, une traduction approximative, ou une polémique formulée de manière à provoquer immédiatement le malaise.",
        "On leur parle par exemple : de l'âge de ʿÂ’ishah رضي الله عنها lors de son mariage ; de certains récits médicaux ; de la sorcellerie ; de certains textes juridiques ; d'Al-Isrâ’ wal-Miʿrâj ; ou d'autres traditions volontairement présentées sous leur forme la plus choquante.",
        "Ces ambiguïtés, lorsqu'elles sont reçues sans les outils permettant de les analyser, peuvent faire naître le doute. Puis le doute devient parfois un paradigme :",
        "« Ce hadith me paraît étrange. » ➔ « Peut-être que les hadiths ne sont pas fiables. » ➔ « Peut-être que la Sunna n'est pas nécessaire. » ➔ « Le Coran suffit. »",
        "C'est ainsi que certaines personnes finissent par construire autour de leurs premières incompréhensions une conception religieuse entière."
      ]
    },
    {
      type: "analogie",
      header: "UNE IMMENSE HISTOIRE DE TRANSMISSION",
      title: "Une tradition de vérification",
      paragraphs: [
        "La Sunna ne nous est pas parvenue parce que quelques personnes auraient décidé, plusieurs siècles après le Prophète ﷺ, de remplir des livres de récits incontrôlés. Derrière les recueils de hadith se trouve une immense tradition de vérification, de transmission, de comparaison et de critique.",
        "Des générations de savants ont consacré leur vie à examiner les récits attribués au Prophète ﷺ.",
        "Réduire tout ce travail à : « Ce sont seulement des hommes qui racontent des histoires » n'est pas une critique scientifique. C'est précisément ignorer la science qui a été développée pour distinguer ce qui pouvait être retenu de ce qui devait être rejeté."
      ],
      distinctions: [
        { term: "LES TRANSMETTEURS", desc: "Qui avait transmis quoi ; de qui le transmetteur avait reçu son information ; si les deux personnes avaient réellement pu se rencontrer ; leur mémoire et leur honnêteté." },
        { term: "LES RÉCITS", desc: "Les variantes d'un même récit ; les chaînes parallèles ; les anomalies ; les contradictions apparentes ; les récits faibles et fabriqués." }
      ]
    },
    {
      type: "cadrage",
      header: "ET LE CORAN, COMMENT NOUS EST-IL PARVENU ?",
      title: "La question de la chaîne",
      paragraphs: [
        "Ceux qui disent : « Je refuse les hadiths parce qu'ils ont été transmis par des hommes » doivent nécessairement répondre à une autre question : par qui le Coran leur est-il parvenu ?",
        "Le mushaf que nous tenons aujourd'hui nous est parvenu à travers des Compagnons, des récitateurs, des maîtres, des élèves et des générations de transmetteurs.",
        "La question rationnelle n'est donc pas : « Y a-t-il des hommes dans la chaîne ? » Il y en a nécessairement. La véritable question est : « Quelle est la qualité de cette transmission et quelles preuves permettent de l'établir ? »"
      ]
    },
    {
      type: "retenir",
      header: "UNE RESPONSABILITÉ PERSONNELLE",
      title: "Ne pas rester silencieux",
      paragraphs: [
        "J'ai moi-même reçu et transmis le Coran par la voie de maîtres qui l'ont reçu de leurs maîtres, génération après génération, par chaîne de transmission jusqu'au Prophète ﷺ.",
        "Pourquoi accepter les hommes qui nous ont transmis le Coran, tout en rejetant par principe ces mêmes générations lorsqu'elles nous transmettent les enseignements du Messager d'Allah ﷺ ?",
        "C'est pour cette raison que j'ai voulu rédiger cet ouvrage : ouvrir les dossiers, examiner les arguments, confronter les textes et demander aux raisonnements de tenir jusqu'au bout."
      ]
    },
    {
      type: "chrono",
      header: "UNE ŒUVRE OFFERTE",
      title: "Une intention de service",
      paragraphs: [
        "Je demande à Allah عز وجل d'en faire une ṣadaqah jâriyah, une aumône continue dont les effets utiles puissent me parvenir après ma mort. Je la destine également à mes parents.",
        "Qu'Allah عز وجل nous accorde la sincérité, la science utile, la compréhension de Son Livre et l'amour de la Sunna de Son Messager ﷺ."
      ],
      signature: "Salah Eddine Ahmed\nAbou Soulaymane\n23 août 2026"
    }
  ]
};

INTROS['fr'] = {
  header: "CONTEXTE INTRODUCTIF",
  title: "QUI SONT LES CORANISTES ?",
  subtitle: "Définition, origines et histoire d'un courant plus ancien qu'il n'y paraît",
  badge: "REPÈRES HISTORIQUES",
  sections: [
    {
      type: "adverse",
      header: "DÉFINITION",
      title: "Un courant aux positions diverses",
      paragraphs: [
        "Le coranisme est un courant qui affirme que le Coran constitue la seule source normative de l'islam et qui refuse, totalement ou substantiellement, l'autorité religieuse de la Sunna transmise.",
        "Le mouvement organisé moderne s'est surtout développé entre le XIXe et le XXe siècle, notamment dans le sous-continent indien, puis en Égypte et dans d'autres régions du monde musulman. Cependant, le principe doctrinal qu'il défend est beaucoup plus ancien."
      ]
    },
    {
      type: "analogie",
      header: "UNE MISE EN GARDE PROPHÉTIQUE",
      title: "Une attitude décrite, non le nom d'un mouvement moderne",
      paragraphs: [
        "Plusieurs traditions mettent explicitement en garde contre une attitude consistant à recevoir un ordre prophétique puis à répondre qu'on ne suivra que ce qui se trouve dans le Livre d'Allah :"
      ],
      hadiths: [
        {
          ref: "Sunan Abî Dâwûd, hadith 4604",
          ar: "« أَلَا إِنِّي أُوتِيتُ الْكِتَابَ وَمِثْلَهُ مَعَهُ... »",
          translation: "« Certes, j'ai reçu le Livre et avec lui quelque chose de semblable. Il est proche qu'un homme rassasié, installé sur son divan, dise : “Tenez-vous-en à ce Coran…” »"
        }
      ]
    },
    {
      type: "retenir",
      header: "CHRONOLOGIE",
      title: "Repères historiques essentiels",
      distinctions: [
        { term: "ÉPOQUE PROPHÉTIQUE", desc: "Mise en garde contre celui qui oppose un ordre prophétique au seul texte coranique." },
        { term: "204 H — ASH-SHÂFIʿÎ", desc: "Jimâʿ al-ʿIlm : réfutation d'un groupe qui « rejetait tous les récits »." },
        { term: "276 H — IBN QUTAYBAH", desc: "Taʾwîl Mukhtalif al-Ḥadîth : réponse aux accusations de contradictions." },
        { term: "329 H — AL-BARBAHÂRÎ", desc: "Sharḥ As-Sunnah : mise en garde contre ceux qui demandent le Coran seul pour écarter l'athar." },
        { term: "463 H — AL-KHATÎB AL-BAGHDÂDÎ", desc: "Al-Kifâyah fî ʿIlm ar-Riwâyah : méthodologie de l'authentification." },
        { term: "911 H — AS-SUYÛTÎ", desc: "Miftâḥ al-Jannah : consensus sur l'obligation de suivre la Sunna." }
      ]
    }
  ]
};

const ALL_CODES = ['fr', 'ar', 'ary', 'en', 'es', 'de', 'it', 'pt', 'ur', 'ta', 'ps'];

ALL_CODES.forEach(code => {
  const filePath = path.join(TRANSLATIONS_DIR, `${code}.js`);
  if (!fs.existsSync(filePath)) return;

  const raw = fs.readFileSync(filePath, 'utf8');
  const windowObj = {};
  const sandbox = {};
  new Function('window', 'sandbox', raw + `\nsandbox.DATA = window.I18N_DATA["${code}"];`)(windowObj, sandbox);

  const pack = sandbox.DATA;
  if (pack) {
    pack.preface = PREFACES[code] || PREFACES['fr'];
    pack.intro = INTROS[code] || INTROS['fr'];

    const newContent = `/**
 * Pack de Langue : ${pack.name} (${pack.code.toUpperCase()}) - ${pack.native}
 * Traduction Intégrale : UI, Préface, Intro, Arguments et Modales
 */
window.I18N_DATA = window.I18N_DATA || {};
window.I18N_DATA['${pack.code}'] = ${JSON.stringify(pack, null, 2)};
`;

    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`✅ Fichier js/translations/${code}.js mis à jour avec succès.`);
  }
});

console.log('🎉 Tous les packs de langue ont été enrichis avec la Préface et l\'Intro !');
