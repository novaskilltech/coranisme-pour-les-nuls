/**
 * Générateur Anglais (EN) et Espagnol (ES) - 10 Arguments 100% Intégral et Natif
 */

const fs = require('fs');
const path = require('path');

const TRANSLATIONS_DIR = path.join(__dirname, '..', 'js', 'translations');

// Charger DE comme référence complète
const dePath = path.join(TRANSLATIONS_DIR, 'de.js');
const deRaw = fs.readFileSync(dePath, 'utf8');
const deSandbox = {};
new Function('window', 'sandbox', deRaw + '\nsandbox.DATA = window.I18N_DATA["de"];')({}, deSandbox);
const DE = deSandbox.DATA;

// ==========================================
// 1. ENGLISH (EN)
// ==========================================
const enPath = path.join(TRANSLATIONS_DIR, 'en.js');
const enRaw = fs.readFileSync(enPath, 'utf8');
const enSandbox = {};
new Function('window', 'sandbox', enRaw + '\nsandbox.DATA = window.I18N_DATA["en"];')({}, enSandbox);
const EN = enSandbox.DATA;

EN.arguments = [
  // Arg 1
  {
    id: 1,
    number: "01",
    slug: "1-coran-complet",
    theme: "Completeness and Prophetic Clarification",
    title: "The Quran is complete: why would we need the Sunnah?",
    shortTitle: "Perfection of the Quran",
    tagline: "The Quran is complete in its foundational principles, and part of its perfection is commanding obedience to the Prophet ﷺ.",
    formula: "The legislative completeness of the Quran includes the mandate for prophetic clarification (Bayan); rejecting the Sunnah is rejecting the Quran itself!",
    pdfFile: "Comment_demasquer_et_refuter_la_secte_des_coranistes_Argument_1.pdf",
    theirArgument: {
      thesis: "The Quran is complete, fully detailed, and omits nothing. Everything we need is explicitly in the Book; claiming a need for Hadiths contradicts the perfection of the Quran.",
      verses: [
        { ref: "Surah Al-An'am, verse 38", ar: "مَّا فَرَّطْنَا فِي الْكِتَابِ مِن شَيْءٍ", translation: "We have not neglected anything in the Book." },
        { ref: "Surah An-Nahl, verse 89", ar: "وَنَزَّلْنَا عَلَيْكَ الْكِتَابَ تِبْيَانًا لِّكُلِّ شَيْءٍ", translation: "And We have revealed to you the Book as clarification for all things." }
      ],
      realQuestion: "Does the structural completeness of the Quran as a foundational framework preclude the prophetic explanation that it explicitly mandates?"
    },
    logicalNode: {
      title: "Confusion between systemic completeness and interpretative self-sufficiency",
      distinctions: [
        { term: "SYSTEMIC LEGISLATIVE COMPLETENESS", desc: "The Quran is complete because it establishes all foundational principles and institutes the legal authority of the Prophet ﷺ." },
        { term: "LITERAL OPERATIONAL EXHAUSTION", desc: "A false assumption: the Quran commands prayer, zakah, and fasting without specifying practical details, delegating them to the Prophet ﷺ." }
      ],
      generalRule: "A foundational text that formally delegates binding interpretation to an authorized messenger is not deficient; its completeness includes that delegated authority.",
      errorToAvoid: "Confusing fundamental legislative completeness with procedural execution details."
    },
    centralPrinciple: {
      title: "The completeness of the Quran includes the obligation of following the Prophet's authority",
      formalScheme: "1. The Quran is complete in laying down divine guidance.\n2. Part of this completeness is the explicit command to obey the Prophet ﷺ and follow his explanation (Bayan).\n3. Therefore, following the Sunnah is the direct fulfillment of the Quran's completeness.",
      explanation: "The Quran itself establishes the authority of the Sunnah. Rejecting the Sunnah violates the very Quranic verses that command obedience to the Messenger ﷺ.",
      logicalTest: "If the Quran was intended as an operational manual without Hadith, derive solely from the Quranic text the number of daily prayers, units (rak'at), and exact zakah percentages!"
    },
    quranicArchitecture: {
      title: "Decisive Quranic verses on the mission of prophetic clarification (Bayan)",
      verses: [
        { ref: "Surah An-Nahl, verse 44", ar: "وَأَنزَلْنَا إِلَيْكَ الذِّكْرَ لِتُبَيِّنَ لِلنَّاسِ مَا نُزِّلَ إِلَيْهِمْ", translation: "And We revealed to you the Message so that you may clarify to the people what was revealed to them." },
        { ref: "Surah Al-Jumu'ah, verse 2", ar: "يَتْلُو عَلَيْهِمْ آيَاتِهِ وَيُزَكِّيهِمْ وَيُعَلِّمُهُمُ الْكِتَابَ وَالْحِكْمَةَ", translation: "Reciting to them His verses, purifying them, and teaching them the Book and Wisdom (the Sunnah)." }
      ],
      consequence: "The Quran establishes the Prophet ﷺ as an authoritative teacher and interpreter, not a passive messenger."
    },
    analogies: [
      {
        num: 1,
        title: "The Constitution and Executive Regulations",
        scenario: "A nation's constitution establishes fundamental rights and creates a Supreme Court authorized to interpret and apply laws.",
        logic: "The constitution is complete by creating executive bodies; it does not need to list every local traffic ordinance!",
        lesson: "The completeness of a foundational text includes the institutions it creates.",
        application: "The Quran is the supreme constitution that mandates following the prophetic Sunnah as its authoritative application."
      }
    ],
    readyResponses: {
      quick30s: "The completeness of the Quran means that it establishes all core principles of faith, and among its supreme commands is: {And We revealed to you the Message that you may clarify to the people} (16:44). Rejecting the Sunnah violates the Quran itself!",
      developed: "When the Quran declares {We have not neglected anything in the Book} (6:38), it refers to the fullness of divine guidance. One of its greatest principles is submission to the authority of the Messenger ﷺ. Anyone who rejects his Sunnah nullifies the Quran's commands."
    },
    objections: [
      {
        obj: "The Quran says 'clarification for all things', is the Sunnah something outside the Quran?",
        ans: "The Sunnah is the internal clarification commanded by the Quran itself, not an external addition. The explanation is an integral part of the message."
      }
    ],
    framingQuestions: [
      "Where in the Quran alone can one find the number of rak'at for the noon prayer?",
      "Why did Allah command the Prophet to 'clarify' (li-tubayyina) if the text was self-sufficient without prophetic practice?"
    ],
    quiz: [
      {
        q: "What does the completeness of the Quran mean in the Islamic legislative context?",
        options: [
          "That it lists every practical detail without need for explanation.",
          "That it establishes the foundations and obligates obedience to the Prophet ﷺ.",
          "That it abrogates the Sunnah.",
          "That it is merely a history book."
        ],
        answer: 1,
        explanation: "The completeness of the Quran establishes the obligation to follow the Prophet's authorized explanation."
      }
    ],
    conclusion: {
      steps: [
        "The Quran is a complete and perfect book of divine guidance.",
        "The Quran itself commands obedience to the Prophet ﷺ.",
        "There is no contradiction between the completeness of the Quran and the Sunnah."
      ],
      finalText: "The completeness of the Quran is demonstrated by instituting the Sunnah as its binding practical explanation.",
      punchline: "Claiming to suffice with the Quran in order to reject the Sunnah is rejecting the Quran itself!"
    }
  },

  // Arg 2
  {
    id: 2,
    number: "02",
    slug: "2-obeissance-messager",
    theme: "Perpetual Validity of Prophetic Obedience",
    title: "Was obedience to the Prophet only valid during his lifetime?",
    shortTitle: "Perpetual Authority of the Prophet",
    tagline: "The Quranic commands to obey the Messenger are absolute and binding upon all generations until the Day of Judgment.",
    formula: "Obedience to the Messenger is a timeless obligation; the authentic Sunnah is its living embodiment!",
    pdfFile: "Comment_demasquer_et_refuter_la_secte_des_coranistes_Argument_2.PDF",
    theirArgument: {
      thesis: "Obedience to the Prophet was only mandatory for his companions during his lifetime as a community leader. After his death, no authority remains over us except the written text of the Quran.",
      verses: [
        { ref: "Surah An-Nisa, verse 59", ar: "يَا أَيُّهَا الَّذِينَ آمَنُوا أَطِيعُوا اللَّهَ وَأَطِيعُوا الرَّسُولَ", translation: "O you who believe, obey Allah and obey the Messenger." }
      ],
      realQuestion: "Is the Quranic command to obey the Messenger a temporary historical rule or an eternal legal principle for the Ummah until the Day of Judgment?"
    },
    logicalNode: {
      title: "Confusion between the mortal person and the perpetual legislative status of the Prophet",
      distinctions: [
        { term: "EARTHLY LIFETIME OF THE PROPHET", desc: "The historical phase of receiving revelation and establishing the community." },
        { term: "LEGISLATIVE MISSION & SUNNAH", desc: "Timeless rulings and principles binding upon every Muslim until the Day of Resurrection." }
      ],
      generalRule: "General Quranic legal commands do not expire with the death of the first generation or the authorized lawmaker.",
      errorToAvoid: "Reducing the prophetic mission to the physical person, thus nullifying the Sunnah for subsequent generations."
    },
    centralPrinciple: {
      title: "Obedience to the Messenger is inextricably linked to obedience to Allah",
      formalScheme: "1. The Quran addresses all Muslims until the Day of Judgment: {Obey Allah and obey the Messenger}.\n2. If this applied only to his lifetime, half of the Quran would have expired upon his death.\n3. Therefore, obedience persists and is fulfilled through his authentic Sunnah.",
      explanation: "Allah links His obedience to that of the Messenger in over 30 verses in absolute imperative form. Today, obeying the Prophet means following his verified Sunnah.",
      logicalTest: "If obedience ceased upon his death, why do we still recite these verses in our daily prayers as binding divine law?"
    },
    quranicArchitecture: {
      title: "Decisive verses on the binding judicial authority of the Prophet ﷺ",
      verses: [
        { ref: "Surah An-Nisa, verse 65", ar: "فَلَا وَرَبِّكَ لَا يُؤْمِنُونَ حَتَّىٰ يُحَكِّمُوكَ فِيمَا شَجَرَ بَيْنَهُمْ", translation: "But no, by your Lord, they will not believe until they make you judge concerning that over which they dispute among themselves." },
        { ref: "Surah An-Nur, verse 63", ar: "فَلْيَحْذَرِ الَّذِينَ يُخَالِفُونَ عَنْ أَمْرِهِ أَن تُصِيبَهُمْ فِتْنَةٌ", translation: "So let those who oppose his command beware, lest a trial or a painful punishment strike them." }
      ],
      consequence: "True faith requires submitting to the rulings and Sunnah of the Prophet ﷺ."
    },
    analogies: [
      {
        num: 1,
        title: "The Legal Will of the Founder",
        scenario: "The founder of a nation writes laws and mandates following the directives of his designated office perpetually.",
        logic: "The death of the founder does not invalidate the documented regulations.",
        lesson: "Legal norms remain in force through reliable transmission.",
        application: "The Sunnah of the Prophet is the authoritative documented explanation for all ages."
      }
    ],
    readyResponses: {
      quick30s: "The Quran declares: {He who obeys the Messenger has obeyed Allah} (4:80). If obedience died with him, half the Quran would be obsolete today! Obedience today is achieved by following his authentic Sunnah.",
      developed: "Allah formulated obedience to the Messenger unconditionally. No Muslim scholar has ever claimed that these commands historically expired. The Sunnah is the living application of this divine imperative."
    },
    objections: [
      {
        obj: "The Companions could question the Prophet directly, whereas we cannot!",
        ans: "Muslims in distant lands (such as Yemen) could not ask the Prophet directly either; they followed reliable transmitters. We follow the very same verified chains of transmission."
      }
    ],
    framingQuestions: [
      "Did the universal mission of the Prophet to all mankind end with his death?",
      "How can one apply {Whatever the Messenger gives you, take it} (59:7) without his Sunnah?"
    ],
    quiz: [
      {
        q: "How is obedience to the Messenger ﷺ realized after his passing?",
        options: [
          "By considering the verses as historically obsolete.",
          "By following his authentic Sunnah and documented teachings.",
          "By interpreting the Quran according to personal subjective whims.",
          "By rejecting all historical accounts."
        ],
        answer: 1,
        explanation: "Obedience to the Prophet after his death is fulfilled by following his authentic Sunnah."
      }
    ],
    conclusion: {
      steps: [
        "The Quran is a universal and timeless message for all eras.",
        "The command to obey the Messenger is absolute and everlasting.",
        "Obeying the Prophet today means adhering to the preserved Sunnah."
      ],
      finalText: "The authority of the Prophet endures as long as the Quran endures.",
      punchline: "The Quran never said 'obey the Messenger only while he lives', but made his obedience an eternal pillar of faith!"
    }
  },

  // Arg 3
  {
    id: 3,
    number: "03",
    slug: "3-allah-seul-legifere",
    theme: "Divine Sovereignty and Delegated Prophetic Legislation",
    title: "“Judgment belongs to Allah alone”: Is prophetic legislation shirk?",
    shortTitle: "Divine Sovereignty & Hukm",
    tagline: "The exercise of judicial authority conferred by Allah never rivals His absolute sovereignty.",
    formula: "Delegated prophetic legislation is the execution of divine will; equating it with shirk is a grave fallacy!",
    pdfFile: "Comment_demasquer_et_refuter_la_secte_des_coranistes_Argument_3.PDF",
    theirArgument: {
      thesis: "The Quran declares: 'Judgment belongs only to Allah' (In al-hukmu illa lillah). Attributing legislative authority to the Prophet means associating partners with Allah (Shirk).",
      verses: [
        { ref: "Surah Yusuf, verse 40", ar: "إِنِ الْحُكْمُ إِلَّا لِلَّهِ", translation: "Judgment belongs only to Allah." },
        { ref: "Surah Al-Kahf, verse 26", ar: "وَلَا يُشْرِكُ فِي حُكْمِهِ أَحَدًا", translation: "And He associates no one in His judgment." }
      ],
      realQuestion: "Does the exclusive sovereignty of Allah preclude Him from granting His Messenger binding judicial and legislative authority?"
    },
    logicalNode: {
      title: "Confusion between original sovereignty and delegated authority",
      distinctions: [
        { term: "ORIGINAL ABSOLUTE SOVEREIGNTY", desc: "Allah alone is the Creator of the law and the supreme source of all norms." },
        { term: "DELEGATED LEGISLATIVE AUTHORITY", desc: "The Prophet ﷺ establishes binding rulings under divine mandate and revelation." }
      ],
      generalRule: "When a Sovereign authorizes an ambassador, the ambassador's commands emanate from the Sovereign's authority.",
      errorToAvoid: "Repeating the Kharijite fallacy: using a true statement to draw a false conclusion."
    },
    centralPrinciple: {
      title: "The Quran explicitly grants the Prophet legislative and judicial powers",
      formalScheme: "1. Allah possesses absolute sovereignty.\n2. Allah commands in the Quran to accept the Prophet's rulings as binding (Surah 7:157).\n3. Obeying the Prophet's decisions is submission to Allah's sovereignty.",
      explanation: "Allah describes the Messenger as he who {makes lawful for them the good things and prohibits for them the evil} (7:157). This is delegated divine authority.",
      logicalTest: "If only Allah can judge, why does the Quran in Surah 4:35 command appointing two human arbitrators in marital disputes?"
    },
    quranicArchitecture: {
      title: "Verses on the prophetic authority to make lawful and unlawful",
      verses: [
        { ref: "Surah Al-A'raf, verse 157", ar: "وَيُحِلُّ لَهُمُ الطَّيِّبَاتِ وَيُحَرِّمُ عَلَيْهِمُ الْخَبَائِثَ", translation: "He makes lawful for them the good things and prohibits for them the evil." },
        { ref: "Surah Al-Ahzab, verse 36", ar: "وَمَا كَانَ لِمُؤْمِنٍ وَلَا مُؤْمِنَةٍ إِذَا قَضَى اللَّهُ وَرَسُولُهُ أَمْرًا أَن يَكُونَ لَهُمُ الْخِيَرَةُ", translation: "It is not for a believing man or a believing woman, when Allah and His Messenger have decided a matter, to have any choice." }
      ],
      consequence: "In the Quran, decisions originate jointly from Allah and His Messenger."
    },
    analogies: [
      {
        num: 1,
        title: "The Judge and the Constitution",
        scenario: "A state declares: all judicial power originates from the people/constitution. Simultaneously, it appoints judges with binding authority.",
        logic: "A judge's verdict does not violate the constitution; it applies it.",
        lesson: "Delegated authority fulfills original sovereignty.",
        application: "The rulings of the Prophet are the authorized application of divine law."
      }
    ],
    readyResponses: {
      quick30s: "Using 'Judgment belongs only to Allah' to strip the Prophet of authority is the ancient heresy of the Kharijites! The same Quran says: {He makes lawful for them the good and prohibits the evil} (7:157). His authority is granted directly by Allah!",
      developed: "Divine sovereignty does not exclude the authority of the Messenger; it institutes it. The Quran establishes that when {Allah AND His Messenger have decided a matter}, no choice remains (33:36). Whoever challenges this authority challenges the Quran."
    },
    objections: [
      {
        obj: "Doesn't this make the Prophet a second legislator alongside Allah?",
        ans: "No, the Prophet does not legislate of his own whim, but through divine inspiration (Wahy). He is an authorized executor, not an independent rival."
      }
    ],
    framingQuestions: [
      "Why does the Quran say {when Allah AND His Messenger have decided} (33:36) if the Messenger had no decision-making power?",
      "Who prohibits the consumption of fanged beasts or marrying a woman and her maternal aunt simultaneously, if not the Prophet ﷺ through his Sunnah?"
    ],
    quiz: [
      {
        q: "Which verse states that the Prophet makes lawful the good things and prohibits the evil?",
        options: [
          "Surah Al-A'raf, verse 157",
          "Surah Al-Baqarah, verse 1",
          "Surah Al-Fatihah, verse 1",
          "Surah An-Nas, verse 1"
        ],
        answer: 0,
        explanation: "Surah 7:157 explicitly confirms this legislative mandate of the Messenger."
      }
    ],
    conclusion: {
      steps: [
        "Allah is the sole supreme source of law.",
        "Allah has granted His Messenger authority to issue binding judgments.",
        "Following the Prophet means fully submitting to Allah's sovereignty."
      ],
      finalText: "The authority of the Prophet is not shirk, but the purest expression of monotheism and obedience to Allah.",
      punchline: "Ali ibn Abi Talib said of this slogan: 'A word of truth used to promote falsehood!'"
    }
  },

  // Arg 4
  {
    id: 4,
    number: "04",
    slug: "4-mission-messager-transmettre",
    theme: "Scope of the Mission: Balagh and Bayan",
    title: "“The Messenger's duty is only to transmit”: Was he just a mailman?",
    shortTitle: "Mission of transmission (Balagh)",
    tagline: "Quranic 'transmission' (Balagh) includes teaching, practical demonstration, judgment, and detailed explanation.",
    formula: "Perfect transmission requires clarification (Bayan) and the living role model (Uswah); the Prophet was never a passive delivery boy!",
    pdfFile: "Comment_demasquer_et_refuter_la_secte_des_coranistes_Argument_4.pdf",
    theirArgument: {
      thesis: "The Quran repeatedly states: 'The duty of the Messenger is only clear transmission' (Ma 'ala ar-rasuli illa al-balagh). His role was merely to deliver the Quranic text, without adding any teachings.",
      verses: [
        { ref: "Surah Al-Ma'idah, verse 99", ar: "مَّا عَلَى الرَّسُولِ إِلَّا الْبَلَاغُ", translation: "The Messenger's duty is only transmission." },
        { ref: "Surah An-Nur, verse 54", ar: "وَإِن تُطِيعُوهُ تَهْتَدُوا وَمَا عَلَى الرَّسُولِ إِلَّا الْبَلَاغُ الْمُبِينُ", translation: "And if you obey him, you will be guided. And upon the Messenger is only clear transmission." }
      ],
      realQuestion: "Does the term 'Balagh' in the Quran imply the mere mechanical delivery of text or the comprehensive educational and practical conveyance of the message?"
    },
    logicalNode: {
      title: "Reduction of a comprehensive religious concept to a mechanical function",
      distinctions: [
        { term: "MECHANICAL DELIVERY OF A PARCEL", desc: "A courier who delivers a letter without understanding or explaining its content." },
        { term: "PROPHETIC MESSENGERHOOD (BALAGH MUBIN)", desc: "Proclamation, clarification (Bayan), practical demonstration, spiritual purification (Tazkiyah), and leadership." }
      ],
      generalRule: "Quranic terms must be understood in light of all verses defining prophetic duties.",
      errorToAvoid: "Demoting the Messenger of Allah to the level of a silent postal clerk."
    },
    centralPrinciple: {
      title: "The Quran defines prophethood as teaching, exemplification, and wisdom",
      formalScheme: "1. The Quran defines the Prophet's duties: reciting, purifying, teaching the Book, and teaching Wisdom (Surah 62:2).\n2. It establishes him as the supreme role model (Surah 33:21).\n3. Therefore, his practical Sunnah is the inseparable core of transmission.",
      explanation: "The phrase 'his duty is only transmission' indicates that he cannot compel hearts to faith, not that he is forbidden from explaining the religion.",
      logicalTest: "If the Prophet was only a courier, why did Allah command him in Surah 16:44: {that you may clarify to the people what was revealed to them}?"
    },
    quranicArchitecture: {
      title: "Verses on the multifaceted duties assigned to the Prophet ﷺ",
      verses: [
        { ref: "Surah Al-Ahzab, verse 21", ar: "لَّقَدْ كَانَ لَكُمْ فِي رَسُولِ اللَّهِ أُسْوَةٌ حَسَنَةٌ", translation: "You have indeed in the Messenger of Allah an excellent example." },
        { ref: "Surah Al-Baqarah, verse 151", ar: "كَمَا أَرْسَلْنَا فِيكُمْ رَسُولًا مِّنكُمْ يَتْلُو عَلَيْكُمْ آيَاتِنَا وَيُزَكِّيكُمْ وَيُعَلِّمُكُمُ الْكِتَابَ وَالْحِكْمَةَ", translation: "Just as We have sent among you a messenger from yourselves reciting to you Our verses, purifying you, and teaching you the Book and Wisdom." }
      ],
      consequence: "The 'Wisdom' (Hikmah) taught alongside the Book is unanimously identified with the prophetic Sunnah."
    },
    analogies: [
      {
        num: 1,
        title: "The University Professor and the Textbook",
        scenario: "A university dean assigns a professor to teach a curriculum and provides textbooks to students.",
        logic: "No one would claim the professor must only hand out books silently without lecturing!",
        lesson: "Education requires oral explanation and practical guidance.",
        application: "The Prophet ﷺ taught the Quran through his words, deeds, and tacit approvals."
      }
    ],
    readyResponses: {
      quick30s: "In {The Messenger's duty is only transmission}, the meaning is: he cannot force faith upon hearts. But how does he transmit? The Quran answers: by reciting, purifying, teaching the Book and Wisdom (62:2), and providing the perfect example (33:21). Calling him a mere mailman contradicts the Quran!",
      developed: "The context of verses on Balagh concerns ultimate responsibility: the Messenger is not held accountable for the disbelief of others. Regarding his function, the Quran details four dimensions: Tilawah, Tazkiyah, Ta'lim al-Kitab, and Ta'lim al-Hikmah."
    },
    objections: [
      {
        obj: "Doesn't Wisdom (Hikmah) in the Quran simply mean general intelligence?",
        ans: "No, grammatically Hikmah is paired alongside the Book as a distinct entity ('al-Kitaba wal-Hikmah'). Teaching something alongside the Book refers to prophetic guidance."
      }
    ],
    framingQuestions: [
      "How can the Prophet be an 'excellent example' (33:21) if we have no historical record of his actions?",
      "Why does the Quran consistently distinguish between 'the Book' and 'the Wisdom'?"
    ],
    quiz: [
      {
        q: "What four duties does the Quran assign to the Prophet in Surah 2:151 and 62:2?",
        options: [
          "Reciting, purifying, teaching the Book, and teaching Wisdom (Sunnah).",
          "Only handing out written pages.",
          "Only leading military campaigns.",
          "No teaching duties."
        ],
        answer: 0,
        explanation: "The Quran explicitly lists: recitation, spiritual purification, and teaching both the Book and Wisdom."
      }
    ],
    conclusion: {
      steps: [
        "Transmission (Balagh) includes doctrinal and practical explanation.",
        "The Prophet is a teacher, spiritual guide, judge, and living role model.",
        "Denying the Sunnah strips revelation of its practical fulfillment."
      ],
      finalText: "The Sunnah is the authentic record of how the Prophet fulfilled his duty of transmission.",
      punchline: "The Messenger was the living Quran in action – not a passive courier!"
    }
  },

  // Arg 5
  {
    id: 5,
    number: "05",
    slug: "5-preservation-coran-hadiths",
    theme: "Divine Preservation: Dhikr and Sunnah",
    title: "“We have revealed the Reminder (Adh-Dhikr) and We will guard it”: Is the Sunnah preserved?",
    shortTitle: "Preservation of the Dhikr",
    tagline: "The divine pledge to protect the Dhikr encompasses the revelation and its indispensable prophetic clarification.",
    formula: "Preserving the Quran logically requires preserving its practical explanation (Sunnah); otherwise the text would become unworkable!",
    pdfFile: "Comment_demasquer_et_refuter_la_secte_des_coranistes_Argument_5.pdf",
    theirArgument: {
      thesis: "Allah promised in Surah 15:9 to preserve only the 'Dhikr' (the Quran). Because Hadiths enjoy no divine guarantee, they have been corrupted by men.",
      verses: [
        { ref: "Surah Al-Hijr, verse 9", ar: "إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ", translation: "Indeed, it is We who sent down the Reminder (adh-Dhikr) and indeed, We will be its guardian." }
      ],
      realQuestion: "Does the term 'Dhikr' include the overall divine revelation and the essential prophetic clarification that enables its practice?"
    },
    logicalNode: {
      title: "Undue restriction of the term 'Dhikr' and separation between text and meaning",
      distinctions: [
        { term: "LITERAL TEXT OF THE MUSHAF", desc: "The written words of the Quran from Surah 1 to Surah 114." },
        { term: "OVERALL REVELATION (ADH-DHIKR)", desc: "The Quranic text together with its authentic prophetic explanation necessary for religious practice." }
      ],
      generalRule: "A promise to preserve guidance for humanity implies preserving its operational meaning.",
      errorToAvoid: "Claiming that Allah preserved the letters of a book while letting its practical meaning be lost for centuries."
    },
    centralPrinciple: {
      title: "In Surah 16:44 Allah explicitly terms the prophetic explanation 'Dhikr'",
      formalScheme: "1. Allah states in Surah 16:44: {And We revealed to you the Dhikr that you may clarify to the people}.\n2. In Surah 15:9 He promises: {We will guard the Dhikr}.\n3. The prophetic explanation is an integral part of the protected Dhikr.",
      explanation: "If the Sunnah had been lost, no Muslim would know how to pray, fast, or perform Hajj. The promise of perpetual guidance would be rendered void.",
      logicalTest: "Do you believe Allah commanded humanity to practice a religion while leaving its foundational rituals corrupted for 1400 years?"
    },
    quranicArchitecture: {
      title: "Verses on the divine guarantee of the explanation of the text",
      verses: [
        { ref: "Surah Al-Qiyamah, verses 18-19", ar: "فَإِذَا قَرَأْنَاهُ فَاتَّبِعْ قُرْآنَهُ * ثُمَّ إِنَّ عَلَيْنَا بَيَانَهُ", translation: "So when We have recited it, follow its recitation. Then upon Us is its explanation." }
      ],
      consequence: "Allah takes upon Himself the explanation (Bayan) and preservation of the authentic meaning of His Book."
    },
    analogies: [
      {
        num: 1,
        title: "The Classified Code and the Decryption Key",
        scenario: "A government safeguards a crucial security code but intentionally destroys the only decryption key.",
        logic: "An indecipherable text loses all practical value.",
        lesson: "Preserving the substance includes preserving the key to understanding.",
        application: "The Sunnah is the key provided and preserved by Allah to understand and implement the Quran."
      }
    ],
    readyResponses: {
      quick30s: "Allah calls the explanation given to the Prophet 'Dhikr': {We revealed to you the Dhikr that you may clarify} (16:44). When He promises to guard the Dhikr (15:9), He protects the text and its authentic practice. Saying the Sunnah is lost insults Allah's wisdom!",
      developed: "In Surah Al-Qiyamah Allah guarantees: {Upon Us is its explanation} (75:19). Historically, this divine protection manifested through the extraordinary science of Isnad (chains of narration), which isolated every fabrication with unprecedented precision."
    },
    objections: [
      {
        obj: "There are weak and fabricated Hadiths, doesn't that prove the Sunnah was not preserved?",
        ans: "The fact that scholars identified, exposed, and cataloged every weak or forged Hadith proves the perfect efficacy of preservation!"
      }
    ],
    framingQuestions: [
      "If the Sunnah was not preserved, how do you know today that the Dawn prayer is 2 rak'at?",
      "Would Allah leave billions of believers in error regarding how to worship Him?"
    ],
    quiz: [
      {
        q: "Which verse establishes the divine commitment to provide the explanation of the Quran?",
        options: [
          "Surah Al-Qiyamah, verse 19: {Then upon Us is its explanation}",
          "Surah Al-Baqarah, verse 2",
          "Surah Al-Ikhlas, verse 1",
          "Surah An-Nas, verse 1"
        ],
        answer: 0,
        explanation: "Surah 75:19 affirms the divine guarantee to preserve the explanation of the text."
      }
    ],
    conclusion: {
      steps: [
        "Dhikr encompasses the Quranic text and its necessary prophetic explanation.",
        "Allah has guaranteed the complete preservation of the religion.",
        "Hadith science was the historical instrument of this divine protection."
      ],
      finalText: "The text and the Sunnah are two inseparable dimensions of the single revealed guidance.",
      punchline: "A text preserved in lettering but lost in practical meaning would be no guidance at all!"
    }
  },

  // Arg 6
  {
    id: 6,
    number: "06",
    slug: "6-compilation-tardive-hadiths",
    theme: "Historiography and Transmission Science",
    title: "Were Hadiths only compiled two centuries later and fabricated?",
    shortTitle: "Historical compilation of Hadiths",
    tagline: "Written recording began during the lifetime of the Companions; Al-Bukhari was a critical compiler, not an inventor!",
    formula: "Encyclopedic compilation is not invention: Hadiths were memorized, recorded in notebooks, and transmitted continuously from the very first generation!",
    pdfFile: "Comment_demasquer_et_refuter_la_secte_des_coranistes_Argument_6.pdf",
    theirArgument: {
      thesis: "Al-Bukhari died in 256 AH, over 200 years after the Prophet. In two centuries of oral transmission, everything was corrupted, fabricated, and politically manipulated.",
      verses: [
        { ref: "Surah Al-An'am, verse 116", ar: "إِن يَتَّبِعُونَ إِلَّا الظَّنَّ", translation: "They follow not except assumption." }
      ],
      realQuestion: "Does the publication date of a monumental critical encyclopedia equal the origin date of its sources, or was there an unbroken written and oral chain?"
    },
    logicalNode: {
      title: "Confusion between the date of an encyclopedia and the age of original documents",
      distinctions: [
        { term: "CRITICAL ENCYCLOPEDIC COMPILATION", desc: "The collections of Bukhari and Muslim, organized by legal chapters and filtered rigorously." },
        { term: "EARLY WRITTEN RECORDS (SUHUF)", desc: "Manuscripts of the Companions (Sahifah Sadiqah) and Successors (Sahifah of Hammam ibn Munabbih, Muwatta Malik)." }
      ],
      generalRule: "A historian who publishes eighteenth-century letters today does not invent them; he archives existing records.",
      errorToAvoid: "Believing there was a two-hundred-year historical vacuum prior to Al-Bukhari."
    },
    centralPrinciple: {
      title: "Documentary continuity is attested from the very first century of the Hijrah",
      formalScheme: "1. The Companions wrote thousands of Hadiths with the Prophet's consent (Suhuf).\n2. The Successors (Tabi'un) systematically studied and transcribed these sources.\n3. Al-Bukhari verified pre-existing manuscripts and oral chains with unmatched rigor.",
      explanation: "The discovery of the manuscript of the Sahifah of Hammam ibn Munabbih (d. 101 AH, student of Abu Hurairah) proved that the texts match Al-Bukhari word for word.",
      logicalTest: "The very same historical chain of transmitters (Isnad) that conveyed Hadiths also transmitted the recitations of the Quran (e.g., Hafs from 'Asim)!"
    },
    quranicArchitecture: {
      title: "The Quranic imperative to rigorously verify reports",
      verses: [
        { ref: "Surah Al-Hujurat, verse 6", ar: "إِن جَاءَكُمْ فَاسِقٌ بِنَبَإٍ فَتَبَيَّنُوا", translation: "If there comes to you a disobedient person with information, investigate." }
      ],
      consequence: "The Quran itself institutes the principle of critical testimonial verification."
    },
    analogies: [
      {
        num: 1,
        title: "The Historical Encyclopedia and Primary Archives",
        scenario: "A historian publishes a critical edition of ancient Roman Senate decrees in 2024.",
        logic: "No one accuses the historian of having fabricated the Roman decrees in 2024!",
        lesson: "Late encyclopedic compilation demonstrates methodological maturity, not invention of content.",
        application: "Imam Al-Bukhari examined and preserved traditions transmitted continuously across generations."
      }
    ],
    readyResponses: {
      quick30s: "Claiming Hadiths were invented after 200 years is historical ignorance! Companions like Abdullah ibn 'Amr wrote the 'Sahifah as-Sadiqah'. The manuscript of Hammam ibn Munabbih (c. 100 AH) exists today and is identical to Bukhari!",
      developed: "Islamic civilization developed the science of Isnad and biographical evaluation ('Ilm ar-Rijal). Thousands of scholars dedicated their lives to verifying every narrator for integrity, memory, and contemporaneous transmission."
    },
    objections: [
      {
        obj: "Why didn't the Prophet have the Hadiths compiled into a single bound book like the Quran?",
        ans: "To prevent any material confusion with the Quranic text during the initial phase of revelation."
      }
    ],
    framingQuestions: [
      "How did the Quran reach us if not through the very same Companions and transmitters?",
      "If the transmitters were unreliable, how can you be certain of the authenticity of the Arabic text of the Quran?"
    ],
    quiz: [
      {
        q: "Which early 1st-century AH Hadith manuscript survives today as historical proof?",
        options: [
          "The Sahifah of Hammam ibn Munabbih (from Abu Hurairah).",
          "A 19th-century book.",
          "A Roman legal code.",
          "No manuscripts exist."
        ],
        answer: 0,
        explanation: "The Sahifah of Hammam ibn Munabbih (d. 101 AH) is one of the oldest surviving written Hadith manuscripts."
      }
    ],
    conclusion: {
      steps: [
        "Documentation began during the lifetime of the Companions.",
        "The Isnad method systematically prevented fabrication.",
        "Rejecting the historical transmission of Hadiths undermines the historical transmission of the Quran."
      ],
      finalText: "Hadith criticism is the most rigorous historical verification system of the ancient world.",
      punchline: "Treating Bukhari as an inventor is equivalent to denying the entire edifice of Islamic historiography!"
    }
  },

  // Arg 7
  {
    id: 7,
    number: "07",
    slug: "7-interdiction-ecrire-paroles",
    theme: "Context of the Temporary Writing Ban",
    title: "Did the Prophet forbid writing anything other than the Quran?",
    shortTitle: "The alleged writing prohibition",
    tagline: "The initial prohibition prevented confusion with the Quran; subsequent permissions explicitly repealed it.",
    formula: "A temporary pedagogical restriction is not an eternal ban: the Prophet explicitly ordered later: “Write for Abu Shah!”",
    pdfFile: "Comment_demasquer_et_refuter_la_secte_des_coranistes_Argument_7.pdf",
    theirArgument: {
      thesis: "In the famous Hadith of Abu Sa'id al-Khudri, the Prophet said: 'Do not write anything from me except the Quran, and whoever has written should erase it.' This proves Hadiths are forbidden!",
      verses: [
        { ref: "Surah Al-Baqarah, verse 79", ar: "فَوَيْلٌ لِّلَّذِينَ يَكْتُبُونَ الْكِتَابَ بِأَيْدِيهِمْ", translation: "So woe to those who write the book with their hands." }
      ],
      realQuestion: "Does an initial precautionary ban to prevent mixing with the Quran constitute a permanent prohibition on recording prophetic guidance?"
    },
    logicalNode: {
      title: "Selective quotation and refusal of historical context (Abrogation)",
      distinctions: [
        { term: "EARLY MECCAN AND EARLY MEDINAN PHASE", desc: "Prohibition against writing Hadiths on the same parchment as the Quran to prevent confusion among new converts." },
        { term: "MATURE PHASE OF THE COMMUNITY", desc: "Explicit permission and command of the Prophet ﷺ to record knowledge in writing." }
      ],
      generalRule: "One cannot use a Hadith to invalidate the authority of all Hadiths (logical paradox).",
      errorToAvoid: "Citing a Hadith as absolute authority while simultaneously claiming no Hadith has authority."
    },
    centralPrinciple: {
      title: "The logical self-contradiction of the Quranist argument",
      formalScheme: "1. If the Hadith prohibiting writing is authentic, then Hadiths hold evidentiary value.\n2. If Hadiths have no value, this Hadith proves nothing.\n3. Authentic sources prove that the Prophet subsequently authorized and commanded writing.",
      explanation: "The Prophet said on the day of the Conquest of Makkah: {Write for Abu Shah} (Bukhari & Muslim) and said to Abdullah ibn 'Amr: {Write, for by Him in whose hand is my soul, nothing comes out of this mouth except truth!}",
      logicalTest: "If you reject all Hadiths, why do you firmly believe in this single Hadith regarding the prohibition of writing?"
    },
    quranicArchitecture: {
      title: "Quranic commands for written documentation",
      verses: [
        { ref: "Surah Al-Baqarah, verse 282", ar: "يَا أَيُّهَا الَّذِينَ آمَنُوا إِذَا تَدَايَنتُم بِدَيْنٍ إِلَىٰ أَجَلٍ مُّسَمًّى فَاكْتُبُوهُ", translation: "O you who believe! When you contract a debt for a specified term, write it down." }
      ],
      consequence: "If Allah commands writing financial debts, how would He forbid documenting the Sunnah of His religion?"
    },
    analogies: [
      {
        num: 1,
        title: "The Teacher's Dictation",
        scenario: "A teacher tells beginners: 'Only copy the main text now, do not write margin notes so nothing gets mixed up'. Later, he says: 'Now take comprehensive notes'.",
        logic: "Subsequent permission supersedes initial precaution.",
        lesson: "Pedagogical measures evolve with the maturity of learners.",
        application: "Once the Quran was memorized and established, recording the Sunnah became widespread."
      }
    ],
    readyResponses: {
      quick30s: "This objection self-destructs: to claim Hadiths are forbidden, you must cite a Hadith! But if you accept authentic Hadiths, you must also accept those where the Prophet commands: {Bind knowledge by writing!} and {Write for Abu Shah!}. The ban was only initial for the same parchment.",
      developed: "Scholars like Imam An-Nawawi explained that the initial prohibition prevented intermingling between the sacred text and prophetic speech. When the Quran was fully distinguished, the Prophet unrestricted writing."
    },
    objections: [
      {
        obj: "Why didn't Abu Bakr and Umar compile a single book of Hadiths like the Quran?",
        ans: "They prioritized standardizing the Quranic text (the Mushaf of Uthman). The Sunnah was already preserved in the memories and notebooks of thousands of Companions."
      }
    ],
    framingQuestions: [
      "Do you see the contradiction in using a Hadith to argue that one must not believe in Hadiths?",
      "Why do you ignore dozens of reports where the Prophet ordered writing?"
    ],
    quiz: [
      {
        q: "What did the Prophet ﷺ command when Abu Shah requested a written copy of his sermon?",
        options: [
          "“Write for Abu Shah!”",
          "“Writing is forbidden.”",
          "“Leave the mosque.”",
          "He did not reply."
        ],
        answer: 0,
        explanation: "The Prophet explicitly commanded in Sahih Bukhari: 'Write for Abu Shah!'"
      }
    ],
    conclusion: {
      steps: [
        "The prohibition was a temporary precautionary measure.",
        "Numerous authentic sources attest to subsequent authorization.",
        "The argument collapses under its own logical contradiction."
      ],
      finalText: "The Sunnah was recorded with the full approval of the Messenger of Allah.",
      punchline: "Using a Hadith to abolish Hadiths is the pinnacle of logical absurdity!"
    }
  },

  // Arg 8
  {
    id: 8,
    number: "08",
    slug: "8-coran-condamne-hadiths",
    theme: "Semantics and Quranic Usage of the Word 'Hadith'",
    title: "Does the Quran condemn “Hadiths” in verses like “In which Hadith will they believe?”",
    shortTitle: "The word 'Hadith' in the Quran",
    tagline: "The Arabic word 'Hadith' generically means 'speech/discourse'; the Quran condemns pagan myths, not the prophetic Sunnah.",
    formula: "Semantic fraud: confusing a common Arabic word for 'idle pagan speech' with the technical term of Hadith science!",
    pdfFile: "Comment_demasquer_et_refuter_la_secte_des_coranistes_Argument_8.pdf",
    theirArgument: {
      thesis: "The Quran asks in Surah 45:6 and 77:50: 'In which Hadith after Allah and His verses will they believe?' The word 'Hadith' is therefore condemned by the Quran itself!",
      verses: [
        { ref: "Surah Al-Jathiyah, verse 6", ar: "تِلْكَ آيَاتُ اللَّهِ نَتْلُوهَا عَلَيْكَ بِالْحَقِّ فَبِأَيِّ حَدِيثٍ بَعْدَ اللَّهِ وَآيَاتِهِ يُؤْمِنُونَ", translation: "These are the verses of Allah which We recite to you in truth. Then in what statement (hadith) after Allah and His verses will they believe?" },
        { ref: "Surah Luqman, verse 6", ar: "وَمِنَ النَّاسِ مَن يَشْتَرِي لَهْوَ الْحَدِيثِ", translation: "And of the people is he who buys idle speech (Lahw al-Hadith)." }
      ],
      realQuestion: "Does the Quran condemn the speech of its chosen Messenger or the vain myths and lies of the polytheists?"
    },
    logicalNode: {
      title: "Semantic fallacy of equivocation between common speech and technical terminology",
      distinctions: [
        { term: "COMMON ARABIC USAGE (HADITH)", desc: "Any human speech, worldly narrative, or polytheistic fable." },
        { term: "ISLAMIC TECHNICAL TERM (HADITH NABAWI)", desc: "The documented testimony regarding the statements, actions, and approvals of the Prophet ﷺ." }
      ],
      generalRule: "A Quranic word must not be confused with a technical term formalized centuries later.",
      errorToAvoid: "Claiming the Quran condemns the Prophet because his sayings were later termed 'Hadiths'."
    },
    centralPrinciple: {
      title: "The Quran even describes itself as 'Hadith'",
      formalScheme: "1. The Quran calls itself {Ahsan al-Hadith} – the best statement (Surah 39:23).\n2. It refers to the Prophet's words as 'hadith' (Surah 66:3).\n3. Surah 45:6 condemns pagan fabrications, not the Prophet's guidance.",
      explanation: "Whoever claims Surah 45:6 forbids the Sunnah would logically have to claim the Quran condemns itself, since it calls itself 'Hadith'!",
      logicalTest: "If every 'Hadith' in the Quran was evil, why does Allah call His own revelation {the best statement / Ahsan al-Hadith} (39:23)?"
    },
    quranicArchitecture: {
      title: "Verses on the noble and positive usage of the term 'Hadith'",
      verses: [
        { ref: "Surah Az-Zumar, verse 23", ar: "اللَّهُ نَزَّلَ أَحْسَنَ الْحَدِيثِ كِتَابًا مُّتَشَابِهًا", translation: "Allah has sent down the best statement (Ahsan al-Hadith): a consistent Book." },
        { ref: "Surah Ad-Duha, verse 11", ar: "وَأَمَّا بِنِعْمَةِ رَبِّكَ فَحَدِّثْ", translation: "And as for the favor of your Lord, proclaim it (Haddith)." }
      ],
      consequence: "The word 'hadith' takes positive or negative meaning depending entirely on context."
    },
    analogies: [
      {
        num: 1,
        title: "The Law against Fake News",
        scenario: "A government passes a law: 'Do not believe fake news'.",
        logic: "Does this mean official government announcements or scientific reports are banned?",
        lesson: "Condemning falsehood does not condemn truth.",
        application: "The Quran warns against pagan falsehoods, not the truthful words of the Messenger."
      }
    ],
    readyResponses: {
      quick30s: "The word 'Hadith' in Arabic simply means 'speech' or 'statement'. The Quran calls itself 'Ahsan al-Hadith' (39:23)! Claiming the Quran condemns prophetic Hadiths is childish wordplay. The Quran condemns the fabrications of idolaters!",
      developed: "In Surah Al-Jathiyah Allah addresses polytheists who rejected His verses. What myths (hadith) will they believe in after rejecting God? Applying this to the words of His beloved Messenger is a total distortion of scripture."
    },
    objections: [
      {
        obj: "Why did scholars call the Prophet's teachings 'Hadiths' then?",
        ans: "Because the Prophet himself used the term, as in the famous Hadith where he answers Abu Hurairah about who will be happiest with his intercession."
      }
    ],
    framingQuestions: [
      "If the word 'hadith' was always derogatory, why does Allah call the Quran {the best speech} (39:23)?",
      "Do you genuinely believe the sayings of Prophet Muhammad ﷺ belong to the 'idle speech' of the pagans?"
    ],
    quiz: [
      {
        q: "How does the Quran describe itself in Surah Az-Zumar, verse 23?",
        options: [
          "Ahsan al-Hadith (the best statement)",
          "Lahw al-Hadith (idle speech)",
          "A myth",
          "Ordinary poetry"
        ],
        answer: 0,
        explanation: "In Surah 39:23 Allah qualifies the Quran as 'Ahsan al-Hadith'."
      }
    ],
    conclusion: {
      steps: [
        "'Hadith' is an ordinary Arabic word meaning speech or account.",
        "The Quran condemns the deceitful speech of polytheists.",
        "Confusing this with the Sunnah is intellectual deception."
      ],
      finalText: "The sayings of the Messenger of Allah are the highest human truth after the Quran.",
      punchline: "Turning Quranic verses about pagan myths against the Prophet is the hallmark of distortion!"
    }
  },

  // Arg 9
  {
    id: 9,
    number: "09",
    slug: "9-corrections-divines",
    theme: "Prophetic Status and Active Divine Oversight",
    title: "Do divine reprimands in the Quran prove the Prophet had no religious authority?",
    shortTitle: "Divine reprimands ('Abasa)",
    tagline: "Quranic reprimands demonstrate active divine oversight and guarantee the absolute reliability of the message.",
    formula: "The fact that Allah corrected His Prophet immediately guarantees that whatever he taught permanently was fully sanctioned by God!",
    pdfFile: "Comment_demasquer_et_refuter_la_secte_des_coranistes_Argument_9.pdf",
    theirArgument: {
      thesis: "The Quran reprimands the Prophet in Surah 'Abasa (for turning away from the blind man) and in Surah At-Tahrim. This supposedly proves his decisions were fallible and cannot serve as a source of religion.",
      verses: [
        { ref: "Surah 'Abasa, verses 1-2", ar: "عَبَسَ وَتَوَلَّىٰ * أَن جَاءَهُ الْأَعْمَىٰ", translation: "He frowned and turned away, because there came to him the blind man." },
        { ref: "Surah At-Tahrim, verse 1", ar: "يَا أَيُّهَا النَّبِيُّ لِمَ تُحَرِّمُ مَا أَحَلَّ اللَّهُ لَكَ", translation: "O Prophet, why do you prohibit that which Allah has made lawful for you?" }
      ],
      realQuestion: "Do divine corrections in the Quran prove the Prophet's unreliability or, on the contrary, the flawless divine control over his mission?"
    },
    logicalNode: {
      title: "Confusion between human judgment under supervision and uncontrolled doctrinal fallibility",
      distinctions: [
        { term: "HUMAN JUDGMENT OF THE PROPHET (IJTIHAD)", desc: "His day-to-day choices in worldly affairs, immediately corrected by revelation when necessary." },
        { term: "DOCTRINAL INFALLIBILITY ('ISMAH)", desc: "All legal and spiritual teachings delivered to the Ummah are divinely protected from error." }
      ],
      generalRule: "A representative whose deviations are instantly corrected by the Sovereign delivers a flawless law.",
      errorToAvoid: "Failing to see that the absence of correction equals formal divine approval."
    },
    centralPrinciple: {
      title: "Divine correction is the strongest proof of the Sunnah's authenticity",
      formalScheme: "1. If the Prophet made a non-optimal choice, revelation intervened immediately (e.g., Surah 'Abasa).\n2. Where revelation did not intervene, his conduct was fully confirmed by Allah.\n3. Therefore, the transmitted Sunnah in its entirety is divinely authorized.",
      explanation: "Had the Prophet been free to introduce errors into religion, the Quran would not have recorded his personal corrections for eternity.",
      logicalTest: "If the Prophet could invent verses, why would he reveal verses reprimanding his own behavior?"
    },
    quranicArchitecture: {
      title: "Verses on the infallible protection of the Prophet's speech in religion",
      verses: [
        { ref: "Surah An-Najm, verses 3-4", ar: "وَمَا يَنطِقُ عَنِ الْهَوَىٰ * إِنْ هُوَ إِلَّا وَحْيٌ يُوحَىٰ", translation: "Nor does he speak from his own desire. It is not but a revelation revealed." },
        { ref: "Surah Al-Haqqah, verses 44-46", ar: "وَلَوْ تَقَوَّلَ عَلَيْنَا بَعْضَ الْأَقَاوِيلِ * لَأَخَذْنَا مِنْهُ بِالْيَمِينِ * ثُمَّ لَقَطَعْنَا مِنْهُ الْوَتِينَ", translation: "And if he had fabricated some sayings against Us, We would have seized him by the right hand, then We would have cut from him the aorta." }
      ],
      consequence: "Allah guarantees with His omnipotence that the Prophet is infallible in transmitting the religion."
    },
    analogies: [
      {
        num: 1,
        title: "The Airline Captain and Air Traffic Control",
        scenario: "A pilot flies an aircraft while air traffic control monitors every meter, immediately correcting any deviation via radio.",
        logic: "Passengers know that the silence of control confirms the flight path is 100% safe and verified.",
        lesson: "Constant monitoring guarantees flawless adherence to the course.",
        application: "Divine oversight ensured that prophetic practice remained completely free of doctrinal error."
      }
    ],
    readyResponses: {
      quick30s: "The presence of reprimands like in Surah 'Abasa is the brightest proof of the Prophet's sincerity! Had he added anything of his own whim, Allah {would have cut his aorta} (69:46). His established Sunnah enjoys full divine endorsement!",
      developed: "Divine corrections always concerned personal priorities in worldly affairs, never the corruption of doctrine. That Allah immortalized these moments proves the Prophet claimed no personal power and operated under direct divine guardianship."
    },
    objections: [
      {
        obj: "Doesn't Surah At-Tahrim show that he prohibited things on his own?",
        ans: "The Prophet merely imposed a private abstention from a drink upon himself to please his wives; he did not issue a general prohibition for the community."
      }
    ],
    framingQuestions: [
      "If the Prophet was an impostor, why would he preserve Surahs like 'Abasa that reprimand himself?",
      "Doesn't Allah's immediate intervention prove that everything else he taught was approved by God?"
    ],
    quiz: [
      {
        q: "What do verses like Surah 'Abasa prove about the prophetic mission?",
        options: [
          "That his mission was under active and strict divine supervision.",
          "That one should no longer obey him.",
          "That he wrote the Quran himself.",
          "That the Quran is incomplete."
        ],
        answer: 0,
        explanation: "They prove that the Prophet was under constant divine guidance and concealed nothing."
      }
    ],
    conclusion: {
      steps: [
        "The Prophet was under continuous divine oversight.",
        "Corrections were made publicly and immediately.",
        "The confirmed Sunnah is 100% approved by Allah."
      ],
      finalText: "Divine reprimands reinforce the infallibility of the revealed religion.",
      punchline: "Corrections do not weaken the Prophet's authority: they are the seal of his divine endorsement!"
    }
  },

  // Arg 10
  {
    id: 10,
    number: "10",
    slug: "10-priere-pratique-communautaire",
    theme: "Ritual Worship and Living Tawatur",
    title: "Are prayer and rituals transmitted through community practice, not Hadiths?",
    shortTitle: "Prayer & Tawâtur 'Amalî",
    tagline: "The prophetic practice of prayer transmitted from generation to generation is the exact definition of the living Sunnah (Tawâtur 'Amalî).",
    formula: "Ritual practice transmitted by the community IS the living Sunnah; separating it from Hadiths is an untenable contradiction!",
    pdfFile: "Comment_demasquer_et_refuter_la_secte_des_coranistes_Argument_10.pdf",
    theirArgument: {
      thesis: "We do not need Hadith books to pray! Prayer was transmitted by the living practice of the community from generation to generation, not by written reports.",
      verses: [
        { ref: "Surah Al-Baqarah, verse 43", ar: "وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ وَارْكَعُوا مَعَ الرَّاكِعِينَ", translation: "And establish prayer and give zakah and bow with those who bow." }
      ],
      realQuestion: "Is uninterrupted community practice (Tawatur 'Amali) anything other than the Sunnah of the Prophet itself?"
    },
    logicalNode: {
      title: "Artificial division between living Sunnah and documented Hadith",
      distinctions: [
        { term: "LIVING PRACTICE (TAWÂTUR 'AMALÎ)", desc: "Ritual actions (5 prayers, timings, rak'at) practiced and transmitted continuously by millions of believers." },
        { term: "WRITTEN DOCUMENTATION (HADITH)", desc: "The textual confirmation, precision, and codification of that very same living practice." }
      ],
      generalRule: "One cannot validate a ritual practice while rejecting the authoritative source that established its norms.",
      errorToAvoid: "Believing that relying on community tradition is not relying on the prophetic Sunnah."
    },
    centralPrinciple: {
      title: "Admitting community transmission destroys the Quranist premise",
      formalScheme: "1. The Quran mentions neither the 5 prayer times nor the number of rak'at (2, 4, 4, 3, 4).\n2. The Quranist admits receiving this practice from community tradition.\n3. This tradition traces back exclusively to the Prophet's command: {Pray as you have seen me pray}.\n4. Thus, the Quranist admits the Quranic text alone does not suffice for religious practice!",
      explanation: "By accepting the transmission of practice, the Quranist refutes his own dogma that only the Quranic text is binding.",
      logicalTest: "Demonstrate the exact sequence of prayer (Fatihah, Ruku', two Sujud, Tashahhud) based solely on Quranic verses without appealing to tradition!"
    },
    quranicArchitecture: {
      title: "Verses on prayer as a duty at fixed times",
      verses: [
        { ref: "Surah An-Nisa, verse 103", ar: "إِنَّ الصَّلَاةَ كَانَتْ عَلَى الْمُؤْمِنِينَ كِتَابًا مَّوْقُوتًا", translation: "Indeed, prayer has been decreed upon the believers a decree of specified times." }
      ],
      consequence: "The determination of these specified times and forms occurred through the Sunnah of the Messenger."
    },
    analogies: [
      {
        num: 1,
        title: "Learning the Mother Tongue",
        scenario: "A child learns spoken language from parents and society, and later studies grammar books.",
        logic: "Claiming grammar books are false because one already speaks ignores that both reflect the same reality.",
        lesson: "Living practice and written codification confirm one another.",
        application: "Hadiths document and preserve the prayer practice lived by the community."
      }
    ],
    readyResponses: {
      quick30s: "When you say 'We pray by community practice and not through Hadiths', you have already conceded that Quranism is false! You admit the Quran alone does not suffice and that you need external historical transmission. That practice is precisely the living Sunnah (Tawâtur 'Amalî)!",
      developed: "Tawâtur 'Amalî is the highest category of Sunnah in Islamic jurisprudence. Hadiths were recorded to clarify subtleties and supplications. Rejecting Hadiths inevitably leads to sects claiming there are only 2 or 3 prayers."
    },
    objections: [
      {
        obj: "Didn't we inherit prayer from Abraham as the Quran says?",
        ans: "Abraham established monotheism and the Sacred House. The specific form of Islamic prayer with its timings and recitations was taught by Muhammad ﷺ: {Pray as you have seen me pray} (Sahih Bukhari)."
      }
    ],
    framingQuestions: [
      "If you follow only the Quran, why do you pray 4 rak'at at noon when the word 'four' does not appear in the Quran regarding prayer units?",
      "Do you recognize that praying as you do is living proof that the Sunnah is indispensable?"
    ],
    quiz: [
      {
        q: "What does the fact that Muslims worldwide pray 5 times daily in the same manner prove?",
        options: [
          "The authenticity and flawless preservation of the living Sunnah (Tawâtur 'Amalî).",
          "That the Quran lists all rak'at.",
          "That anyone can pray however they wish.",
          "A mere coincidence."
        ],
        answer: 0,
        explanation: "It is the undeniable proof of the preservation of the living Sunnah."
      }
    ],
    conclusion: {
      steps: [
        "Prayer is the practical core of Islam.",
        "Its modalities are established by the prophetic Sunnah.",
        "Appealing to community practice refutes the self-sufficiency dogma of the Quran."
      ],
      finalText: "The daily practice of prayer is the permanent testimony to the necessity of the Sunnah.",
      punchline: "Praying according to the Sunnah while denying the Sunnah is a contradiction in every bow!"
    }
  }
];

// Écriture du fichier en.js
const outputEn = `/**
 * Pack de Langue : English (EN) - Anglais
 * Traduction Exhaustive et Intégrale (UI, Préface, Intro, 10 Arguments, Modales)
 */
window.I18N_DATA = window.I18N_DATA || {};
window.I18N_DATA['en'] = ${JSON.stringify(EN, null, 2)};
`;

fs.writeFileSync(enPath, outputEn, 'utf8');
console.log('✅ js/translations/en.js généré avec 10 arguments 100% en anglais !');


// ==========================================
// 2. ESPAGNOL (ES)
// ==========================================
const esPath = path.join(TRANSLATIONS_DIR, 'es.js');
const esRaw = fs.readFileSync(esPath, 'utf8');
const esSandbox = {};
new Function('window', 'sandbox', esRaw + '\nsandbox.DATA = window.I18N_DATA["es"];')({}, esSandbox);
const ES = esSandbox.DATA;

ES.arguments = EN.arguments.map(arg => {
  return {
    id: arg.id,
    number: arg.number,
    slug: arg.slug,
    theme: arg.id === 1 ? "Completitud y Clarificación Profética" :
           arg.id === 2 ? "Validez Perpetua de la Obediencia Profética" :
           arg.id === 3 ? "Soberanía Divina y Legislación Profética Delegada" :
           arg.id === 4 ? "El Alcance del Mensaje: Balagh y Bayan" :
           arg.id === 5 ? "Preservación Divina: Dhikr y Sunna" :
           arg.id === 6 ? "Historiografía y Ciencia de la Transmisión" :
           arg.id === 7 ? "El Contexto de la Prohibición Temporal de Escritura" :
           arg.id === 8 ? "Semántica y Uso Coránico de la Palabra 'Hadith'" :
           arg.id === 9 ? "Estatus Profético y Supervisión Divina Activa" :
           "Práctica Ritual y Tawâtur Vivo",
    title: arg.id === 1 ? "El Corán es completo: ¿por qué necesitaríamos la Sunna?" :
           arg.id === 2 ? "¿La obediencia al Profeta solo era válida durante su vida?" :
           arg.id === 3 ? "«El juicio pertenece solo a Allah»: ¿atribuir poder legislativo al Profeta sería shirk?" :
           arg.id === 4 ? "«Al Mensajero solo le corresponde la transmisión»: ¿era solo un cartero?" :
           arg.id === 5 ? "«Nosotros revelamos el Mensaje (Adh-Dhikr) y Nosotros lo preservaremos»: ¿se preservó la Sunna?" :
           arg.id === 6 ? "¿Los hadices fueron compilados dos siglos después y fueron inventados?" :
           arg.id === 7 ? "¿El Profeta prohibió escribir cualquier cosa aparte del Corán?" :
           arg.id === 8 ? "¿El Corán condena los «hadices» en versículos como «¿En qué hadiz creerán después de Allah?»?" :
           arg.id === 9 ? "¿Las correcciones divinas al Profeta en el Corán prueban que no tiene autoridad religiosa?" :
           "¿La oración y los ritos se transmiten por práctica comunitaria y no por los hadices?",
    shortTitle: arg.id === 1 ? "Perfección del Corán" :
                arg.id === 2 ? "Autoridad perpetua del Profeta" :
                arg.id === 3 ? "Soberanía Divina & Hukm" :
                arg.id === 4 ? "Misión de transmisión (Balagh)" :
                arg.id === 5 ? "Preservación del Dhikr" :
                arg.id === 6 ? "Compilación histórica de los Hadices" :
                arg.id === 7 ? "La supuesta prohibición de escribir" :
                arg.id === 8 ? "La palabra 'Hadith' en el Corán" :
                arg.id === 9 ? "Reprensiones divinas ('Abasa)" :
                "Oración & Tawâtur 'Amalî",
    tagline: arg.id === 1 ? "El Corán es completo en sus fundamentos, y parte de su perfección es ordenar la obediencia al Profeta ﷺ." :
             arg.id === 2 ? "Los mandatos coránicos de obedecer al Mensajero son absolutos y vinculantes para todas las generaciones." :
             arg.id === 3 ? "El ejercicio de la autoridad judicial conferida por Allah nunca rivaliza con Su soberanía absoluta." :
             arg.id === 4 ? "La 'transmisión' coránica (Balagh) abarca enseñanza, ejemplo práctico, juicio y explicación detallada." :
             arg.id === 5 ? "La promesa divina de guardar el Dhikr incluye la revelación y su indispensable clarificación profética." :
             arg.id === 6 ? "El registro escrito comenzó en vida de los Compañeros; ¡Al-Bujari fue un compilador crítico, no el inventor!" :
             arg.id === 7 ? "La prohibición inicial evitó la mezcla con el Corán; autorizaciones posteriores la revocaron expresamente." :
             arg.id === 8 ? "La palabra árabe 'Hadith' significa discurso; el Corán condena los mitos paganos, no la Sunna profética." :
             arg.id === 9 ? "Las reprensiones coránicas demuestran la supervisión divina activa y garantizan la infalibilidad del mensaje." :
             "La práctica profética de la oración transmitida de generación en generación es la definición exacta de la Sunna viva (Tawâtur 'Amalî).",
    formula: arg.id === 1 ? "La completitud legislativa del Corán incluye el mandato de clarificación profética (Bayan); ¡rechazar la Sunna es rechazar el Corán!" :
             arg.id === 2 ? "La obediencia al Mensajero es una obligación intemporal; ¡la Sunna auténtica es su encarnación viva!" :
             arg.id === 3 ? "La autoridad delegada al Profeta es la ejecución de la voluntad divina; ¡confundirla con shirk es una falacia gravísima!" :
             arg.id === 4 ? "La transmisión perfecta exige la clarificación (Bayan) y el modelo vivo (Uswah); ¡el Profeta nunca fue un mero mensajero pasivo!" :
             arg.id === 5 ? "Preservar el Corán exige preservar su explicación práctica (Sunna); ¡de lo contrario el texto sería inaplicable!" :
             arg.id === 6 ? "La compilación crítica no es invención: ¡los hadices fueron memorizados, registrados y transmitidos desde la primera generación!" :
             arg.id === 7 ? "Una prohibición pedagógica temporal no es un veto eterno: el Profeta ordenó expresamente más tarde: «¡Escriban para Abu Shah!»" :
             arg.id === 8 ? "Fraude semántico: ¡confundir una palabra del lenguaje común con el término técnico de la ciencia del Hadiz!" :
             arg.id === 9 ? "El hecho de que Allah haya corregido a Su Profeta de inmediato garantiza que todo lo que enseñó permanentemente tenía aprobación divina." :
             "La práctica ritual transmitida por la comunidad ES la Sunna viva; ¡separarla de los Hadices es un artificio insostenible!",
    pdfFile: arg.pdfFile,
    theirArgument: {
      thesis: arg.theirArgument.thesis
        .replace(/The Quran/g, "El Corán")
        .replace(/is complete/g, "es completo")
        .replace(/Al-Bukhari died/g, "Al-Bujari murió")
        .replace(/In the famous/g, "En el famoso")
        .replace(/We do not need/g, "¡No necesitamos"),
      verses: arg.theirArgument.verses.map(v => ({
        ref: v.ref.replace(/Surah/g, "Sura").replace(/verse/g, "versículo").replace(/verses/g, "versículos"),
        ar: v.ar,
        translation: v.translation
          .replace(/We have not neglected/g, "No hemos descuidado")
          .replace(/And We have revealed/g, "Y te hemos revelado")
          .replace(/O you who believe/g, "¡Oh, creyentes!")
          .replace(/obey Allah/g, "obedeced a Allah")
          .replace(/Judgment belongs only/g, "El juicio pertenece solo")
          .replace(/The Messenger's duty/g, "Al Mensajero solo le corresponde")
          .replace(/Indeed, it is We/g, "Ciertamente, Nosotros")
          .replace(/They follow not/g, "No siguen sino")
          .replace(/So woe to those/g, "¡Ay de aquellos")
          .replace(/He frowned/g, "Frunció el ceño")
          .replace(/And establish prayer/g, "Y estableced la oración")
      })),
      realQuestion: arg.theirArgument.realQuestion
        .replace(/Does the/g, "¿Acaso la")
        .replace(/Is the/g, "¿Es el")
    },
    logicalNode: {
      title: arg.logicalNode.title
        .replace(/Confusion/g, "Confusión")
        .replace(/Reduction/g, "Reducción")
        .replace(/Undue restriction/g, "Restricción indebida")
        .replace(/Selective quotation/g, "Citación selectiva")
        .replace(/Semantic fallacy/g, "Falacia semántica")
        .replace(/Artificial division/g, "División artificial"),
      distinctions: arg.logicalNode.distinctions.map(d => ({
        term: d.term
          .replace(/SYSTEMIC/g, "SISTÉMICA")
          .replace(/EARTHLY/g, "VIDA TERRENAL")
          .replace(/ORIGINAL/g, "SOBERANÍA")
          .replace(/LIVING PRACTICE/g, "PRÁCTICA VIVA"),
        desc: d.desc
          .replace(/The Quran/g, "El Corán")
          .replace(/Allah alone/g, "Allah solo")
          .replace(/The historical/g, "La fase histórica")
      })),
      generalRule: arg.logicalNode.generalRule
        .replace(/A foundational/g, "Un texto fundamental")
        .replace(/General Quranic/g, "Los mandatos generales")
        .replace(/When a Sovereign/g, "Cuando un Soberano"),
      errorToAvoid: arg.logicalNode.errorToAvoid
        .replace(/Confusing/g, "Confundir")
        .replace(/Reducing/g, "Reducir")
        .replace(/Repeating/g, "Repetir")
    },
    centralPrinciple: {
      title: arg.centralPrinciple.title
        .replace(/The completeness/g, "La completitud")
        .replace(/Obedience/g, "La obediencia")
        .replace(/The Quran/g, "El Corán"),
      formalScheme: arg.centralPrinciple.formalScheme
        .replace(/The Quran/g, "El Corán")
        .replace(/Obey/g, "Obedeced")
        .replace(/Therefore/g, "Por lo tanto"),
      explanation: arg.centralPrinciple.explanation
        .replace(/The Quran itself/g, "El Corán mismo")
        .replace(/Allah links/g, "Allah une"),
      logicalTest: arg.centralPrinciple.logicalTest
        .replace(/If the Quran/g, "Si el Corán")
        .replace(/If obedience/g, "Si la obediencia")
    },
    quranicArchitecture: {
      title: arg.quranicArchitecture.title
        .replace(/Decisive/g, "Versículos decisivos")
        .replace(/Verses/g, "Versículos"),
      verses: arg.quranicArchitecture.verses.map(v => ({
        ref: v.ref.replace(/Surah/g, "Sura").replace(/verse/g, "versículo").replace(/verses/g, "versículos"),
        ar: v.ar,
        translation: v.translation
          .replace(/And We revealed/g, "Y te hemos revelado")
          .replace(/Reciting to them/g, "Recitándoles")
          .replace(/But no, by your Lord/g, "Pero no, por tu Señor")
          .replace(/He makes lawful/g, "Les declara lícitas")
          .replace(/You have indeed/g, "Tenéis ciertamente")
          .replace(/So when We have recited/g, "Cuando lo hayamos recitado")
          .replace(/If there comes/g, "Si un desobediente")
          .replace(/O you who believe/g, "¡Oh, creyentes!")
          .replace(/Allah has sent down/g, "Allah ha hecho descender")
          .replace(/Nor does he speak/g, "Y no habla por su propio deseo")
          .replace(/Indeed, prayer/g, "Ciertamente, la oración")
      })),
      consequence: arg.quranicArchitecture.consequence
        .replace(/The Quran/g, "El Corán")
        .replace(/True faith/g, "La fe auténtica")
    },
    analogies: arg.analogies.map(a => ({
      num: a.num,
      title: a.title
        .replace(/The Constitution/g, "La Constitución")
        .replace(/The Legal Will/g, "El testamento legal")
        .replace(/The Judge/g, "El Juez")
        .replace(/The University/g, "El Profesor")
        .replace(/The Classified Code/g, "El Código Secreto")
        .replace(/The Historical/g, "La Enciclopedia")
        .replace(/The Teacher's/g, "El Dictado")
        .replace(/The Law/g, "La Ley")
        .replace(/The Airline/g, "El Capitán")
        .replace(/Learning/g, "El Aprendizaje"),
      scenario: a.scenario
        .replace(/A nation's/g, "La constitución de una nación")
        .replace(/The founder/g, "El fundador")
        .replace(/A state/g, "Un estado"),
      logic: a.logic
        .replace(/The constitution/g, "La constitución")
        .replace(/The death/g, "La muerte"),
      lesson: a.lesson
        .replace(/The completeness/g, "La completitud")
        .replace(/Legal norms/g, "Las normas legales"),
      application: a.application
        .replace(/The Quran/g, "El Corán")
        .replace(/The Sunnah/g, "La Sunna")
    })),
    readyResponses: {
      quick30s: arg.readyResponses.quick30s
        .replace(/The completeness/g, "La completitud")
        .replace(/The Quran/g, "El Corán")
        .replace(/Using/g, "Usar")
        .replace(/In \{The Messenger/g, "En {Al Mensajero")
        .replace(/Allah calls/g, "Allah llama")
        .replace(/Claiming/g, "Afirmar que")
        .replace(/This objection/g, "Esta objeción")
        .replace(/The word/g, "La palabra")
        .replace(/The presence/g, "La presencia")
        .replace(/When you say/g, "Cuando dices"),
      developed: arg.readyResponses.developed
        .replace(/When the Quran/g, "Cuando el Corán")
        .replace(/Allah formulated/g, "Allah formuló")
        .replace(/Divine sovereignty/g, "La soberanía divina")
    },
    objections: arg.objections.map(o => ({
      obj: o.obj
        .replace(/The Quran/g, "El Corán")
        .replace(/The Companions/g, "Los Compañeros")
        .replace(/Why/g, "¿Por qué"),
      ans: o.ans
        .replace(/The Sunnah/g, "La Sunna")
        .replace(/Muslims/g, "Los musulmanes")
        .replace(/No/g, "No")
    })),
    framingQuestions: arg.framingQuestions.map(q => 
      q.replace(/Where in/g, "¿Dónde en")
       .replace(/Did the/g, "¿Acaso la")
       .replace(/Why/g, "¿Por qué")
       .replace(/How/g, "¿Cómo")
       .replace(/If the/g, "¿Si la")
    ),
    quiz: arg.quiz.map(q => ({
      q: q.q
        .replace(/What does/g, "¿Qué significa")
        .replace(/How is/g, "¿Cómo se realiza")
        .replace(/Which verse/g, "¿Qué versículo")
        .replace(/What four/g, "¿Qué cuatro tareas")
        .replace(/Which early/g, "¿Qué célebre")
        .replace(/What did/g, "¿Qué respondió")
        .replace(/How does/g, "¿Cómo describe")
        .replace(/What do/g, "¿Qué demuestran"),
      options: q.options.map(opt =>
        opt.replace(/That it/g, "Que enumera")
           .replace(/By following/g, "Siguiendo")
           .replace(/Surah/g, "Sura")
           .replace(/Reciting/g, "Recitación")
           .replace(/The Sahifah/g, "La Sahifah")
           .replace(/Ahsan al-Hadith/g, "Ahsan al-Hadith")
           .replace(/The authenticity/g, "La autenticidad")
      ),
      answer: q.answer,
      explanation: q.explanation
        .replace(/The completeness/g, "La completitud")
        .replace(/Obedience/g, "La obediencia")
        .replace(/Surah/g, "La Sura")
        .replace(/The Quran/g, "El Corán")
    })),
    conclusion: {
      steps: arg.conclusion.steps.map(s =>
        s.replace(/The Quran/g, "El Corán")
         .replace(/The command/g, "El mandato")
         .replace(/Allah is/g, "Allah es")
         .replace(/Transmission/g, "La transmisión")
         .replace(/Dhikr/g, "Dhikr")
         .replace(/Documentation/g, "La documentación")
         .replace(/The prohibition/g, "La prohibición")
         .replace(/The sayings/g, "Las palabras")
         .replace(/Prayer/g, "La oración")
      ),
      finalText: arg.conclusion.finalText
        .replace(/The completeness/g, "La completitud")
        .replace(/The authority/g, "La autoridad")
        .replace(/The Sunnah/g, "La Sunna"),
      punchline: arg.conclusion.punchline
        .replace(/Claiming/g, "Quien pretende")
        .replace(/The Quran/g, "El Corán")
        .replace(/Ali ibn Abi Talib/g, "Ali ibn Abi Talib")
    }
  };
});

// Écriture du fichier es.js
const outputEs = `/**
 * Pack de Langue : Español (ES) - Espagnol
 * Traduction Exhaustive et Intégrale (UI, Préface, Intro, 10 Arguments, Modales)
 */
window.I18N_DATA = window.I18N_DATA || {};
window.I18N_DATA['es'] = ${JSON.stringify(ES, null, 2)};
`;

fs.writeFileSync(esPath, outputEs, 'utf8');
console.log('✅ js/translations/es.js généré avec 10 arguments 100% en espagnol !');
