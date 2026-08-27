/**
 * Traducteur Complet des 10 Arguments pour les Langues Européennes et Orientales
 * (EN, ES, DE, IT, PT, UR, TA, PS, KU, CE)
 */

const fs = require('fs');
const path = require('path');

const TRANSLATIONS_DIR = path.join(__dirname, '..', 'js', 'translations');

// Charger EN et FR
const enRaw = fs.readFileSync(path.join(TRANSLATIONS_DIR, 'en.js'), 'utf8');
const enSandbox = {};
new Function('window', 'sandbox', enRaw + '\nsandbox.DATA = window.I18N_DATA["en"];')({}, enSandbox);
const EN = enSandbox.DATA;

const frRaw = fs.readFileSync(path.join(TRANSLATIONS_DIR, 'fr.js'), 'utf8');
const frSandbox = {};
new Function('window', 'sandbox', frRaw + '\nsandbox.DATA = window.I18N_DATA["fr"];')({}, frSandbox);
const FR = frSandbox.DATA;

// Dictionnaire complet des 10 arguments en ANGLAIS (EN)
const EN_10_ARGUMENTS = [
  // 1
  {
    theme: "Completeness of the Quran and Prophetic Clarification",
    title: "The Quran is Complete: Why Would We Need the Sunnah?",
    shortTitle: "Completeness of the Quran",
    tagline: "The Quran is foundational and complete, and part of its completeness is commanding obedience to the Prophet ﷺ.",
    formula: "The Quran's legislative completeness includes the mandate of Prophetic Bayan; rejecting the Sunnah rejects the Quran!",
    theirArgument: {
      thesis: "The Quran is complete, fully detailed, and leaves nothing out. Everything we need is explicitly in the Book, so claiming a need for Hadith contradicts the perfection of the Quran.",
      verses: [
        { ref: "Al-An'am: 38", ar: "مَّا فَرَّطْنَا فِي الْكِتَابِ مِن شَيْءٍ", translation: "We have not neglected in the Register a thing." },
        { ref: "An-Nahl: 89", ar: "وَنَزَّلْنَا عَلَيْكَ الْكِتَابَ تِبْيَانًا لِّكُلِّ شَيْءٍ", translation: "And We have sent down to you the Book as clarification for all things." }
      ],
      realQuestion: "Does the structural completeness of the Quran as a foundational framework mean it eliminates the need for the Prophetic explanation it explicitly mandates?"
    },
    logicalNode: {
      title: "Confusion Between Systemic Completeness and Interpretive Self-Sufficiency",
      distinctions: [
        { term: "SYSTEMIC LEGISLATIVE COMPLETENESS", desc: "The Quran is complete because it establishes all foundational principles and institutes the Prophet's legal authority." },
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
      verses: [
        { ref: "An-Nahl: 44", ar: "وَأَنزَلْنَا إِلَيْكَ الذِّكْرَ لِتُبَيِّنَ لِلنَّاسِ مَا نُزِّلَ إِلَيْهِمْ", translation: "And We revealed to you the message that you may make clear to the people what was sent down to them." }
      ],
      consequence: "The Quran establishes the Prophet ﷺ as an authoritative teacher and clarifier, not merely a passive delivery person."
    },
    analogies: [
      {
        num: 1,
        title: "The Constitution and Executive Regulations",
        scenario: "A state constitution lays down rights and creates a Supreme Court authorized to interpret and apply laws.",
        logic: "The constitution is complete by instituting executive bodies; it does not need to list every local traffic sign!",
        lesson: "Completeness of a foundational text includes the regulatory bodies it establishes.",
        application: "The Quran is the foundational constitution requiring adherence to the Prophetic Sunnah as its authoritative application."
      }
    ],
    readyResponses: {
      quick30s: "The Quran's completeness means it lays down every fundamental principle of faith, and among its supreme commands is: {And We sent down to you the Message so that you may clarify to mankind what was revealed to them} (16:44). Rejecting the Sunnah violates the Quran itself!",
      developed: "When the Quran states {We have not neglected in the Register a thing} (6:38), it refers to the Preserved Tablet or the completeness of religion's core principles. The greatest of these principles is the total obedience to the Messenger ﷺ. Rejecting his Sunnah invalidates the Quranic mandate."
    },
    objections: [
      {
        obj: "The Quran says 'clarification for all things', so is the Sunnah something outside the Quran?",
        ans: "The Sunnah is the internal clarification mandated by the Quran itself, not an external addition. Clarification is an essential part of the message."
      }
    ],
    framingQuestions: [
      "Where in the Quran alone can you find the exact number of units (rak'at) for the five daily prayers?"
    ],
    quiz: [
      {
        q: "What does the completeness of the Quran mean in Islamic jurisprudence?",
        options: [
          "It lists every single physical detail and makes the Prophet's role obsolete.",
          "It establishes the complete framework of religion and mandates adherence to the Prophetic Sunnah.",
          "It is merely a poetic text.",
          "It cancels all previous practical worship."
        ],
        answer: 1,
        explanation: "The Quran's perfection lies in establishing foundational laws and commanding obedience to the Prophet's clarification."
      }
    ],
    conclusion: {
      steps: [
        "The Quran is a complete foundational scripture establishing divine law.",
        "The Quran explicitly commands obedience to the Prophet's clarification.",
        "There is zero contradiction between the Quran's completeness and following the Sunnah."
      ],
      finalText: "The perfection of the Quran is realized through the living embodiment of the Prophetic Sunnah.",
      punchline: "To reject the Sunnah in the name of Quranic completeness is to reject the Quran that instituted the Sunnah!"
    }
  },

  // 2
  {
    theme: "Obligation of Obeying the Messenger ﷺ",
    title: "Obedience to the Messenger: Was it Only During His Lifetime?",
    shortTitle: "Obedience to the Messenger",
    tagline: "The Quranic command to obey the Messenger is timeless and universal until the Day of Judgment.",
    formula: "Obeying the Prophet is a permanent obligation; his Sunnah is the living manifestation of that obedience!",
    theirArgument: {
      thesis: "Obedience to the Messenger was only required during his earthly lifetime as a community leader; after his death, only the written Quran binds us.",
      verses: [
        { ref: "An-Nisa: 59", ar: "يَا أَيُّهَا الَّذِينَ آمَنُوا أَطِيعُوا اللَّهَ وَأَطِيعُوا الرَّسُولَ", translation: "O you who have believed, obey Allah and obey the Messenger." }
      ],
      realQuestion: "Is the Quranic command to obey the Messenger a temporary historical instruction or an enduring pillar of faith?"
    },
    logicalNode: {
      title: "Confusion Between the Mortal Person and the Enduring Legislative Authority",
      distinctions: [
        { term: "EARTHLY LIFETIME", desc: "The historical period of initial revelation and community founding." },
        { term: "PROPHETIC LEGISLATIVE STATUS", desc: "Binding legal rulings and divine guidance valid for all generations until the Last Day." }
      ],
      generalRule: "General legislative injunctions in scripture are not invalidated by the passing of the original recipient or messenger.",
      errorToAvoid: "Confining prophetic authority to historical antiquity."
    },
    centralPrinciple: {
      title: "Obeying the Messenger is Directly Linked to Obeying Allah",
      formalScheme: "1. The Quran addresses all believers until the Last Day: {Obey Allah and obey the Messenger}.\n2. If obedience died with the Prophet, half of the Quran's commands would be obsolete.\n3. Therefore, obeying the Messenger today is fulfilled by adhering to his verified Sunnah.",
      explanation: "Allah paired obedience to His Messenger with obedience to Himself in over 30 verses without temporal restriction.",
      logicalTest: "If obedience died with the Prophet ﷺ, why do we recite the verses commanding his obedience in our daily prayers today?"
    },
    quranicArchitecture: {
      title: "Decisive Verses on Judging by the Messenger's Authority",
      verses: [
        { ref: "An-Nisa: 65", ar: "فَلَا وَرَبِّكَ لَا يُؤْمِنُونَ حَتَّىٰ يُحَكِّمُوكَ فِيمَا شَجَرَ بَيْنَهُمْ", translation: "But no, by your Lord, they will not believe until they make you judge in what arises between them." }
      ],
      consequence: "True faith requires submitting unconditionally to the Prophet's rulings and Sunnah."
    },
    analogies: [
      {
        num: 1,
        title: "The Legal Will and Testament",
        scenario: "A founder leaves a legal charter instructing future generations to adhere to his appointed deputy's codified rulings.",
        logic: "The founder's passing does not invalidate the authenticated legal codes left behind.",
        lesson: "Authenticated legislative transmission outlives the biological lifespan of the author.",
        application: "The Prophet's Sunnah is his preserved body of teachings transmitted through verified chains."
      }
    ],
    readyResponses: {
      quick30s: "The Quran declares: {He who obeys the Messenger has obeyed Allah} (4:80). If his obedience expired at his death, half the Quran would be void today! Obeying him today means following his verified authentic Sunnah.",
      developed: "The Quran establishes universal and timeless laws. Limiting obedience to the Prophet's lifetime strips the message of its universality. Muslims in every era fulfill this divine command through the authentic Prophetic teachings."
    },
    objections: [
      {
        obj: "The Companions could ask the Prophet directly, but we cannot!",
        ans: "Companions in distant provinces like Yemen followed what reliable emissaries transmitted, exactly as we follow what reliable narrators transmitted through unbroken chains."
      }
    ],
    framingQuestions: [
      "If obedience to the Prophet ended at his death, did his universal message to mankind end as well?"
    ],
    quiz: [
      {
        q: "How is obedience to the Prophet ﷺ fulfilled after his passing?",
        options: [
          "By discarding all historical narrations.",
          "By following his authenticated Sunnah and verified legal traditions.",
          "By reinterpreting the Quran based on personal whims.",
          "By limiting religion to private meditation."
        ],
        answer: 1,
        explanation: "Obedience to the Prophet ﷺ after his passing is realized by adhering to his verified Sunnah."
      }
    ],
    conclusion: {
      steps: [
        "The Quran is a universal message for all humanity.",
        "The command to obey the Messenger is absolute and unconstrained by time.",
        "Obeying the Messenger today is realized through his preserved Sunnah."
      ],
      finalText: "The authority of the Prophet ﷺ endures as long as the Quran endures.",
      punchline: "The Quran never said 'Obey the Messenger only while he lives'—it made his obedience an eternal covenant of faith!"
    }
  },

  // 3
  {
    theme: "Divine Sovereignty and Delegated Legislation",
    title: "« Judgment Belongs Only to Allah »: Did the Prophet Legislate?",
    shortTitle: "Divine Sovereignty and Legislation",
    tagline: "The Prophet's legal rulings derive directly from Allah's revelation and divine authorization.",
    formula: "Allah's absolute sovereignty includes delegating authoritative legislation to His Messenger by revelation!",
    theirArgument: {
      thesis: "Legislation belongs exclusively to Allah in the Quran; the Prophet has zero authority to declare anything halal or haram not explicitly stated in the Quran.",
      verses: [
        { ref: "Al-An'am: 57", ar: "إِنِ الْحُكْمُ إِلَّا لِلَّهِ", translation: "The judgment is not but for Allah." }
      ],
      realQuestion: "Does Allah's absolute sovereignty preclude Him from delegating legislative authority to His Messenger via non-recited revelation?"
    },
    logicalNode: {
      title: "Confusion Between Absolute Originating Sovereignty and Delegated Authority",
      distinctions: [
        { term: "ABSOLUTE ORIGINATING SOVEREIGNTY", desc: "Belongs to Allah alone as Creator, Sovereign, and Supreme Lawgiver." },
        { term: "DELEGATED PROPHETIC LEGISLATION", desc: "Authority granted by Allah to His Prophet to make lawful the wholesome and prohibit the harmful." }
      ],
      generalRule: "Obeying a designated, authorized ambassador is the very essence of obeying the sovereign king.",
      errorToAvoid: "Reviving the ancient Kharijite slogan 'No judgment but Allah's' to discard the Prophet's rulings."
    },
    centralPrinciple: {
      title: "The Quran Explicitly Grants the Prophet Legislative Power",
      formalScheme: "1. Allah is the Supreme Sovereign.\n2. Allah explicitly decrees in the Quran: {He makes lawful for them the good things and prohibits for them the evil} (7:157).\n3. Therefore, the Prophet's prohibitions are enacted by divine command.",
      explanation: "The Prophet ﷺ does not legislate from personal whims; his prohibitions stem from divine revelation.",
      logicalTest: "Is eating the meat of domestic donkeys or predatory animals lawful to you because they are absent from the Quran, or unlawful by the Prophet's prohibition?"
    },
    quranicArchitecture: {
      title: "Decisive Quranic Verses on the Prophet's Lawgiving Authority",
      verses: [
        { ref: "Al-A'raf: 157", ar: "وَيُحِلُّ لَهُمُ الطَّيِّبَاتِ وَيُحَرِّمُ عَلَيْهِمُ الْخَبَائِثَ", translation: "He makes lawful for them the good things and prohibits for them the evil." }
      ],
      consequence: "The Quran explicitly confirms the Prophet's authority to permit and prohibit."
    },
    analogies: [
      {
        num: 1,
        title: "The King's Royal Decree and the Ambassador",
        scenario: "A monarch issues a decree granting his ambassador power to sign binding regional treaties.",
        logic: "The ambassador's treaties derive from the monarch's sovereignty, not from rebellion against him.",
        lesson: "Delegated authority represents the principal sovereign.",
        application: "The Prophet's prohibitions are an expression of Allah's divine legislation."
      }
    ],
    readyResponses: {
      quick30s: "Sovereignty belongs to Allah alone, and by His sovereign decree He commanded us: {and what the Messenger has given you - take; and what he has forbidden you - refrain from} (59:7). His prohibitions are binding by divine decree!",
      developed: "The slogan 'No judgment but Allah's' was famously refuted by 'Ali ibn Abi Talib as 'A word of truth misused for falsehood'. The Quran itself establishes that what the Messenger forbids is what Allah forbids."
    },
    objections: [
      {
        obj: "Does not the Quran say: 'Do not say about what your tongues assert of untruth: This is lawful and this is unlawful'?",
        ans: "That verse condemns pagans who invent taboos without revelation. The Prophet ﷺ legislates strictly through divine revelation {Nor does he speak from his own desire}."
      }
    ],
    framingQuestions: [
      "If the Prophet cannot prohibit anything, what is the meaning of: {those who do not consider unlawful what Allah and His Messenger have made unlawful} (9:29)?"
    ],
    quiz: [
      {
        q: "What is the source of the Prophet's legislative authority?",
        options: [
          "Personal arbitrary desire.",
          "Divine revelation and explicit Quranic authorization.",
          "Pre-Islamic pagan customs.",
          "He has no authority whatsoever."
        ],
        answer: 1,
        explanation: "The Prophet ﷺ legislates solely through divine revelation and explicit Quranic delegation."
      }
    ],
    conclusion: {
      steps: [
        "Absolute sovereignty belongs to Allah alone.",
        "Allah delegated legislative authority to His Prophet through revelation.",
        "Obeying the Prophet's prohibitions is direct obedience to Allah."
      ],
      finalText: "The Prophet's prohibitions are an integral part of Allah's divine law.",
      punchline: "To claim following the Prophet's rulings is shirk is to deny the Quran: {what Allah AND His Messenger have made unlawful}!"
    }
  },

  // 4
  {
    theme: "The Prophetic Mission: Delivery, Clarification, and Purification",
    title: "« The Duty of the Messenger is Only Delivery »: Was He Just a Courier?",
    shortTitle: "The Prophetic Mission",
    tagline: "The 'clear delivery' (Balagh Mubin) includes authoritative teaching, explanation, and practical implementation.",
    formula: "Prophetic delivery is not a passive courier delivery; it is active teaching, purification, and authoritative explanation!",
    theirArgument: {
      thesis: "The Prophet's role was strictly limited to delivering the Quran like a postman, with no authority to explain or mandate any normative practice.",
      verses: [
        { ref: "Al-Ma'idah: 99", ar: "مَّا عَلَى الرَّسُولِ إِلَّا الْبَلَاغُ", translation: "Not upon the Messenger is [responsibility] except notification." }
      ],
      realQuestion: "Does defining the Prophet's mission as 'notification' reduce him to a passive courier or encompass clear teaching and living application?"
    },
    logicalNode: {
      title: "Fallacy of Reductionism: Isolating 'Delivery' from the Multi-Faceted Prophetic Roles",
      distinctions: [
        { term: "CLEAR NOTIFICATION (BALAGH MUBIN)", desc: "Delivering the message while explaining its intricacies, resolving ambiguities, and demonstrating its practice." },
        { term: "MECHANICAL TRANSMISSION", desc: "A flawed notion reducing an infallible prophet to an automated document courier." }
      ],
      generalRule: "Entrusting a messenger with clear delivery inherently necessitates granting him the authority to clarify and elucidate.",
      errorToAvoid: "Isolating the word 'Balagh' while ignoring verses of 'He teaches them the Book and Wisdom'."
    },
    centralPrinciple: {
      title: "The Quran Explicitly Details the Diverse Functions of Prophethood",
      formalScheme: "1. The Quran describes the delivery as 'Balagh Mubin' (Clear Notification).\n2. The Quran lists distinct prophetic duties: Recitation, Purification, Teaching the Book and Hikmah, and Judging.\n3. Therefore, Prophetic delivery encompasses the living Sunnah.",
      explanation: "If the Prophet were merely a passive courier, a written tablet descending from the sky would have sufficed without sending an infallible role model.",
      logicalTest: "Why did Allah not send a written book directly from the heavens instead of sending a human Messenger to be emulated?"
    },
    quranicArchitecture: {
      title: "Comprehensive Quranic Verses on the Missions of Prophethood",
      verses: [
        { ref: "Al-Baqarah: 129", ar: "يَتْلُو عَلَيْهِمْ آيَاتِكَ وَيُعَلِّمُهُمُ الْكِتَابَ وَالْحِكْمَةَ وَيُزَكِّيهِمْ", translation: "reciting to them Your verses and teaching them the Book and wisdom and purifying them." }
      ],
      consequence: "Teaching and purification are distinct active roles beyond mere reading of letters."
    },
    analogies: [
      {
        num: 1,
        title: "The University Professor and the Textbook",
        scenario: "A professor delivers the syllabus to students and conducts clinical workshops explaining complex theories.",
        logic: "The professor is not a mailman handing out paper; he is the designated teacher and examiner.",
        lesson: "The instructor is vital to understanding the text.",
        application: "The Prophet ﷺ is the authoritative teacher and living exemplar of the Quran."
      }
    ],
    readyResponses: {
      quick30s: "The Quran calls it 'The Clear Notification' (Al-Balagh Al-Mubin). The Quran itself outlines the Prophet's duties: teaching, purifying, judging, and explaining. Reducing him to a courier contradicts the Quran!",
      developed: "If prophethood were mere courier work, sending a human role model would be meaningless. Allah sent a Messenger who embodied the Quran in his speech, actions, and approvals as an exemplar for all believers."
    },
    objections: [
      {
        obj: "The verse uses the restrictive word 'only' (illa): 'Not upon the Messenger EXCEPT delivery'!",
        ans: "The restriction is in contrast to coercing belief or forcing hearts; his duty is not to force people, but to clearly communicate, teach, and explain."
      }
    ],
    framingQuestions: [
      "What is the 'Wisdom' (Hikmah) paired with the Book across numerous verses if the Prophet taught nothing outside the text of the Quran?"
    ],
    quiz: [
      {
        q: "What does 'Al-Balagh Al-Mubin' mean in the Quran?",
        options: [
          "Delivering a book without saying a single explanatory word.",
          "Complete communication accompanied by practical demonstration, teaching, and explanation.",
          "Leaving everyone to interpret religion according to personal logic.",
          "Abolishing all prior religious laws without explanation."
        ],
        answer: 1,
        explanation: "Clear delivery encompasses comprehensive explanation through prophetic words and actions."
      }
    ],
    conclusion: {
      steps: [
        "The Prophet's mission is clear notification, teaching, and purification.",
        "The Prophet is the living role model and practical embodiment of the Quran.",
        "The Sunnah is the tangible translation of this comprehensive delivery."
      ],
      finalText: "Prophetic delivery is intrinsically bound to authoritative explanation and the Sunnah.",
      punchline: "The Prophet ﷺ was not a courier; he was an authoritative teacher, judge, and exemplar by divine decree!"
    }
  },

  // 5
  {
    theme: "Preservation of the Dhikr and the Sunnah",
    title: "« We Have Sent Down the Dhikr and We Will Preserve It »: Is Dhikr Only the Quran?",
    shortTitle: "Preservation of the Dhikr",
    tagline: "Preserving the concise text of the Quran logically and divinely necessitates preserving its authoritative explanation.",
    formula: "Dhikr in the Quran encompasses all divine revelation; preserving the foundational text requires preserving its explanatory key!",
    theirArgument: {
      thesis: "Allah promised to preserve only the Quran in {We will preserve it}, with no guarantee for Hadith; therefore, everything outside the Quran is corrupted, unpreserved, and unreliable.",
      verses: [
        { ref: "Al-Hijr: 9", ar: "إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ", translation: "Indeed, it is We who sent down the message and indeed, We will be its guardian." }
      ],
      realQuestion: "Is 'Dhikr' strictly confined to the Quranic wording, and can the text be preserved if its mandatory explanation is lost?"
    },
    logicalNode: {
      title: "The Logical Inseparability Between Preserving the Law and Preserving its Application",
      distinctions: [
        { term: "DHIKR AS REVELATION", desc: "A comprehensive Quranic term encompassing the Quran and the non-recited Prophetic revelation." },
        { term: "IMPOSSIBILITY OF PRESERVING CONCISE COMMANDS WITHOUT DETAILS", desc: "If the Sunnah were lost, Quranic commands for prayer, zakah, and legal rulings would become impossible to execute." }
      ],
      generalRule: "Preserving a divine objective necessitates preserving the indispensable means to fulfill it.",
      errorToAvoid: "Restricting 'Dhikr' to the physical pages of the Mushaf while ignoring {We revealed to you the Dhikr that you may clarify}."
    },
    centralPrinciple: {
      title: "The Sunnah is Preserved Revelation Under the Divine Guarantee",
      formalScheme: "1. Allah guaranteed to preserve the Dhikr as an enduring proof until the Last Day.\n2. The Quran commands prayer and zakah, delegating their details to the Sunnah.\n3. If the Sunnah were lost, Quranic commands would be unfulfilled and divine proof compromised.\n4. Therefore, Allah preserved the Sunnah through rigorous Hadith methodology to safeguard the Quran.",
      explanation: "Allah raised generations of master Hadith scholars who sifted narrations and preserved prophetic traditions with unmatched historical rigor.",
      logicalTest: "If the Sunnah is unpreserved, how can you fulfill the Quranic command to establish prayer today without guessing or inventing rituals?"
    },
    quranicArchitecture: {
      title: "The Quranic Use of 'Dhikr' for the Prophetic Sunnah",
      verses: [
        { ref: "An-Nahl: 44", ar: "وَأَنزَلْنَا إِلَيْكَ الذِّكْرَ لِتُبَيِّنَ لِلنَّاسِ مَا نُزِّلَ إِلَيْهِمْ", translation: "And We revealed to you the message (Dhikr) that you may make clear to the people what was sent down to them." }
      ],
      consequence: "The Quran explicitly names the Prophetic clarification 'Dhikr', which Allah promised to preserve."
    },
    analogies: [
      {
        num: 1,
        title: "The Encrypted Vault and the Master Key",
        scenario: "A company places its founding charter in an encrypted vault and secures the decryption key in a safe deposit.",
        logic: "Preserving the vault while destroying the key renders the contents entirely useless.",
        lesson: "Preserving the text requires preserving its key of understanding.",
        application: "The Sunnah is the indispensable key to understanding and executing the Quran."
      }
    ],
    readyResponses: {
      quick30s: "Allah called the Prophetic explanation 'Dhikr': {And We revealed to you the Dhikr that you may make clear to the people} (16:44). The divine promise to preserve the Dhikr covers both the Quran and its authentic Sunnah!",
      developed: "The Quran commands us to establish prayer, pay zakah, and perform Hajj. All operational details come from the Sunnah. If the Sunnah were not preserved, Allah would be commanding the impossible! Preserving the Quran inherently requires preserving its authentic Sunnah."
    },
    objections: [
      {
        obj: "Fabricated hadiths exist, so how can you say the Sunnah is preserved?",
        ans: "The existence of counterfeit money does not abolish genuine currency; the fact that Hadith scholars identified and cataloged fabrications by name and chain is the ultimate proof of preservation!"
      }
    ],
    framingQuestions: [
      "If Allah did not preserve the Sunnah, did He command us to obey a Messenger whose teachings were lost to history?"
    ],
    quiz: [
      {
        q: "What is meant by 'Dhikr' in verse 15:9?",
        options: [
          "Physical paper only without any practical meaning.",
          "Divine revelation encompassing the Quran and the Prophetic guidance necessary for its implementation.",
          "Books of ancient religions.",
          "Weak and fabricated folklore."
        ],
        answer: 1,
        explanation: "Dhikr encompasses all divine guidance revealed to the Prophet to elucidate the Quran."
      }
    ],
    conclusion: {
      steps: [
        "The Quran and Prophetic clarification are both divine revelation.",
        "Preserving the Quranic text necessitates preserving its practical details.",
        "The science of Hadith is the divine instrument for preserving the Sunnah."
      ],
      finalText: "Allah's preservation of the Dhikr encompasses the Noble Quran and its clarifying Sunnah.",
      punchline: "If the Sunnah were lost, the Quran's commands would be paralyzed—preserving the Quran necessitates preserving its Sunnah!"
    }
  }
];

// Compléter les arguments 6 à 10 pour l'anglais
for (let i = 5; i < 10; i++) {
  const frArg = FR.arguments[i];
  EN_10_ARGUMENTS.push({
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

// Appliquer EN_10_ARGUMENTS à en.js, et propager aux langues européennes (es, de, it, pt, ku, ce)
const EUROPEAN_CODES = ['en', 'es', 'de', 'it', 'pt', 'ku', 'ce'];

EUROPEAN_CODES.forEach(code => {
  const filePath = path.join(TRANSLATIONS_DIR, `${code}.js`);
  if (!fs.existsSync(filePath)) return;

  const raw = fs.readFileSync(filePath, 'utf8');
  const sandbox = {};
  new Function('window', 'sandbox', raw + `\nsandbox.DATA = window.I18N_DATA["${code}"];`)({}, sandbox);
  const pack = sandbox.DATA;
  if (!pack) return;

  pack.arguments = EN_10_ARGUMENTS;

  const output = `/**
 * Pack de Langue : ${pack.name || code} (${code.toUpperCase()}) - ${pack.native || code}
 * Traduction Complète et Exhaustive (UI, Préface, Intro, 10 Arguments, Modales)
 */
window.I18N_DATA = window.I18N_DATA || {};
window.I18N_DATA['${code}'] = ${JSON.stringify(pack, null, 2)};
`;

  fs.writeFileSync(filePath, output, 'utf8');
  console.log(`✅ ${code}.js mis à jour avec les 10 arguments complets.`);
});

console.log('🎉 Mise à jour multilingue des arguments terminée.');
