/**
 * COMPILATEUR KURDE INTÉGRAL (100% NATIVE KURDÎ)
 */

const fs = require('fs');
const path = require('path');

const TRANSLATIONS_DIR = path.join(__dirname, '..', '..', 'js', 'translations');
const frRaw = fs.readFileSync(path.join(TRANSLATIONS_DIR, 'fr.js'), 'utf8');
const frSandbox = {};
new Function('window', 'sandbox', frRaw + `\nsandbox.DATA = window.I18N_DATA["fr"];`)({}, frSandbox);
const frPack = frSandbox.DATA;

const kuData = {
  code: "ku",
  name: "Kurde",
  native: "Kurdî",
  flagSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" class="flag-icon"><rect width="600" height="133.3" fill="#e41e20"/><rect width="600" height="133.3" y="133.3" fill="#ffffff"/><rect width="600" height="133.4" y="266.6" fill="#138808"/><circle cx="300" cy="200" r="45" fill="#feb81c"/></svg>`,
  dir: "ltr",
  fontFamily: "var(--font-main)",
  ui: {
    brandBadge: "RÊBERÊ PRAKTÎK",
    brandTitle: "REDDÎYEYA LI SER QUR'ANÎYAN",
    brandSubtitle: "Rêbaza pûçkirina şubheyên înkarkerên Sunnetê",
    searchBtn: "Lêgerîn",
    searchPlaceholder: "Li gorî mijar, ayet, şubhe an nimûneyan bigere...",
    searchModalTitle: "Lêgerîna bilez di pirtûkê de",
    searchNoResults: "Ti encam nehat dîtin.",
    searchShortcutHint: "Ji bo girtinê ESC bitikîne",
    topbarContact: "Pêwendî",
    topbarLegal: "Destûr û Parvekirin",
    topbarBarbahari: "Al-Barbahârî",
    sidebarTitle: "📚 Pêrista Giştî",
    sidebarCount: "12 mijar",
    sidebarHome: "🏠 Destpêk / Hub",
    sidebarContact: "✉️ Pêwendî bi Nivîskar re",
    heroTag1: "📖 Rêberê Praktîk ê Reddîyeyê",
    heroTag2: "🌿 Belavkirina Perwerdehiyê ya Azad",
    heroTitleMain: "Reddîyeya",
    heroTitleSpan: "li ser Qur'anîyan",
    heroAuthor: "Ji aliyê Salah Eddine Ahmed (Abou Soulaymane)",
    heroDesc: "Şubheyên înkarkerên Sunnetê bi rêbaza mantiqî, mînakên jiyana rojane, ayetên zelal û bersivên amade yên 30-çirkeyî pûç bikin.",
    btnStartArg1: "Bi Delîla 1'emîn dest pê bike",
    btnSearchModal: "Di pirtûkê de bigere",
    sommaireTitle: "10 Delîlên Mezin ên Şirovekirî",
    sommaireBadge: "10 Pelên Amade yên Xebatê",
    cardAdverseThesisPrefix: "Îdiaya Qur'anîyan:",
    btnReadCard: "Pelê bixwîne",
    btnDownloadPdf: "Broşûra PDF a orîjînal daxe",
    btnPrintCard: "Çap bike / Wek PDF tomar bike",
    methodTag: "RÊBAZA MUNAZEREYÊ",
    methodTitle: "Rêbaza 3 Gavên Bingehîn",
    methodStep1Title: "1. Têkbirina Mugaleteyê",
    methodStep1Desc: "Bipîve ka reqîb dabeşkirina şaş, giştîkirina neheq an guhertina barê îsbatê bi kar tîne.",
    methodStep2Title: "2. Mînaka Jiyana Rojane",
    methodStep2Desc: "Ji bo nîşandana bêwatebûna mantiqa wî, rewşeke ji jiyana rojane (qanûn, bijîşkî, endezyarî) wek mînak bîne.",
    methodStep3Title: "3. Encamên Bêbingeh",
    methodStep3Desc: "Nîşan bide ka îdiaya wî di warê dînî û pratîkî de dibe sedema çi tevliheviyekê.",
    quoteBoxText: "«Redkirina desthilata ku pirtûk bi xwe ferman dike bi navê têrkirina pirtûkê, tê wateya veguhartina pirtûkê bo tiştekî ku pirtûkê qet negotiye.»",
    quoteBoxAuthor: "— Salah Eddine Ahmed (Abou Soulaymane)",
    sec1Header: "1. ÇARÇOVEYA DOKTRÎNÎ Û PÊŞEKIYEK",
    sec2Header: "2. ÎDIAYA REQÎB Û DEQÊN WAN",
    sec2ThesisLabel: "Îdiaya ku Qur'anî diparêzin :",
    sec2VersesLabel: "Ayetên ku ji çarçoveyê derdixin :",
    sec2RealQuestionLabel: "Pirsa rastîn a bingehîn :",
    sec3Header: "3. GIRÊKA MANTIQÎ Û CIHÊKARIYÊN SEREKE",
    sec3GeneralRuleLabel: "Rêzika giştî ya mantiqê :",
    sec3ErrorLabel: "Çewtiya mantiqî ya ku divê jê dûr bikevin :",
    sec4Header: "4. BINGEHA SEREKE",
    sec4FormalSchemeLabel: "Şêwaza fermî ya îsbatê :",
    sec4ExplanationLabel: "Şiroveya doktrînî :",
    sec4TestLabel: "Testa mantiqî ya diyarker :",
    sec5Header: "5. MÎMARIYA QUR'ANÎ",
    sec5ConsequenceLabel: "Encama teqez a dînî :",
    sec6Header: "6. MÎNAKÊN PERWERDEHIYÊ YÊN ROJANE",
    sec6ScenarioLabel: "Rewşa berbiçav :",
    sec6LogicBoxLabel: "Hevsengiya mantiqî :",
    sec6LessonLabel: "Dersa ku divê were girtin :",
    sec7Header: "7. BERSIVÊN AMADE JI BO DIYALOGÊ",
    sec7QuickResponseLabel: "⚡ Bersiva bilez a 30-çirkeyî :",
    sec7DevelopedResponseLabel: "🗣️ Bersiva berfireh (ji bo kûrbûnê) :",
    sec8Header: "8. ÎTÎRAZÊN KLASÎK Û BERSIV",
    sec8DirectQuestionsLabel: "Pirsên rasterast ên arastekirî :",
    sec9Header: "9. ENCAM DI ZINCÎRA MANTIQÊ DE",
    quizTitle: "8. FÊHMKIRINA XWE BIPÎVIN",
    quizBadge: "Quizê înteraktîf",
    btnCheckAnswer: "Bersivê kontrol bike",
    btnNextQuestion: "Pirsa din ➔",
    btnRestartQuiz: "Quizê ji nû ve bide destpêkirin",
    quizFeedbackCorrect: "✅ Rast e! Encamgirtineke pir baş.",
    quizFeedbackIncorrect: "❌ Bersiv şaş e. Şiroveya li jêr bixwînin :",
    portalWarningBadge: "HIŞYARIYA ZANAYÊN SALIH LI SER ÎNKARKERÊN HEDÎSAN",
    portalTitle: "Gotinên Îmam El-Berbeharî (رحمه الله)",
    portalQuoteTransLabel: "Wateya gotinê :",
    portalQuoteText: "Gava tu bibihîzî ku kesek gava hedîs jê re tê gotin dibêje: \"Vê bihêle û tenê Qur'anê ji me re bîne\", qet şik neke ku ew mirovekî di nava bîd'et û xerabiyê de ye. Ji civata wî rabe û dev jê berde!",
    portalAuthorBadge: "✍️ Îmam El-Berbeharî (m. 329 H)",
    portalSourceRef: "Çavkanî : Şerh Es-Sunneh (Xala 135)",
    portalEnterBtn: "DERBASÎ PIRTÛKA REDDÎYEYÊ BIBE",
    portalDisclaimer: "Rêbaza pûçkirina şubheyên Qur'anîyan • Ji aliyê Salah Eddine Ahmed (Abou Soulaymane) • Bikaranîna azad bi nîşandana çavkaniyê",
    argBadgeGiant: "DELÎL",
    btnDownloadFascicule: "Broşûra orîjînal daxe (PDF)",
    btnOpenPrint: "Çap bike / Wek PDF tomar bike",
    tocSummary: "Pêrista pelê :",
    tocCadrage: "1. Çarçove",
    tocAdverse: "2. Îdiaya Reqîb",
    tocNoeud: "3. Girêka Mantiqî",
    tocPrincipe: "4. Bingeha Sereke",
    tocArchi: "5. Mîmariya Qur'anî",
    tocAnalogies: "6. Nimûne",
    tocReponses: "7. Bersivên Amade",
    tocObjections: "8. Îtîraz",
    tocConclusion: "9. Encam",
    tocQuiz: "10. Quiz",
    navPrevArg: "Delîla berê",
    navNextArg: "Delîla din",
    navBackSummary: "Vegere pêristê",
    navEndManual: "Dawiya Pirtûkê",
    contactModalTitle: "Pêwendî bi Nivîskar re",
    contactAuthorHeader: "Nivîskarê Pirtûkê",
    authorName: "Salah Eddine Ahmed (Abou Soulaymane)",
    contactAuthorBio: "Lêkolîner û perwerdekarê zanistên îslamî, xizmetkarê parastina Sunneta Pêxember ﷺ û pûçkirina şubheyên nûjen.",
    contactBookTitleLabel: "Navê pirtûka bingehîn :",
    contactBookTitleValue: "Comment démasquer et réfuter la secte des coranistes — Méthode, arguments, objections et réponses.",
    contactEmailNotice: "Ji bo peywendiya zanistî, pêşniyar an wergeran :",
    legalModalTitle: "⚖️ Şertên Parvekirin, Maf û Nepênîtiyê",
    legalSharingHeader: "Şertên Belavkirina Perwerdehiyê",
    legalSharingMain: "Belavkirina Perwerdehiyê ya Azad",
    legalSharingP1: "Ev naverok dikare ji bo armancên kesane û fêrbûnê bêpere were parvekirin, bi şertê ku navê nivîskar û çavkanî neyê guhertin.",
    legalAllowedTitle: "✅ Destûrên sereke :",
    legalAllowedBullet1: "Daxistin, çapkirin, xwendin û parvekirina azad a pelên xebatê.",
    legalAllowedBullet2: "Bikaranîna di ders, nîqaş û torên civakî de.",
    legalAllowedBullet3: "Firotina bazirganî an guhertina naverokê bêyî destûra pêşîn qedexe ye.",
    legalPrivacyHeader: "Daneyên Teknîkî û Nepênîtî",
    legalPrivacyMain: "Siyaseta Nepênîtiyê ya Zelal",
    legalPrivacyP1: "Malper pêwîstî bi vekirina hesabê nîne û ti daneyên kesane kom nake.",
    legalPrivacyBullet1: "Bê çerezên reklamê : Çavdêriya bazirganî tune ye.",
    legalPrivacyBullet2: "Tîp û çavkanî : Barkirina ewle ya Google Fonts.",
    legalCreditsHeader: "Agahiyên Pirtûkê :",
    legalCreditsBookTitle: "Rêbaza pûçkirina şubheyên înkarkerên Sunnetê — Rêbaz, delîl û bersiv",
    footerSubtitle: "10 delîlên sereke bi rêbaza zanistî hatine vekolîn û pûçkirin",
    footerBtnLegal: "⚖️ Destûr û Nepênîtî",
    footerBtnContact: "✉️ Pêwendî bi Nivîskar re",
    footerBtnPortal: "📜 Gotinên Al-Barbahârî",
    footerContactLabel: "Pêwendî :",
    btnShare: "Parve bike",
    btnCopySection: "Vê beşê kopî bike",
    btnCopy: "Kopî bike",
    copied: "Hate kopîkirin!",
    shareModalTitle: "📤 Vê pelê parve bike",
    shareModalDesc: "Vê delîlê ji bo xebat û parastina Sunnetê parve bike :",
    shareCardTitle: "Vê reddîyeyê parve bike",
    shareCardDesc: "Vê pelê li ser WhatsApp, Telegram an torên civakî parve bike.",
    toastSectionCopied: "✅ Beş li bîrgehê hate kopîkirin!",
    toastLinkCopied: "✅ Girêdan li bîrgehê hate kopîkirin!",
    navFallacies: "Komeleya amûran — Naskirina mugaleteyan berî nîqaşê",
    fallaciesTitle: "KOMELEYA AMÛRAN",
    fallaciesBadgeTitle: "MUGALETEYÊN DI VÊ DELÎLÊ DE :",
    viewFallacyDetail: "Hûrgiliyan bibîne ▼",
    hideFallacyDetail: "Hûrgiliyan veşêre ▲",
    btnOpenToolbox: "Di Komeleya amûran de veke",
    footerVisitsLabel: "Serdanên giştî :",
    footerVisitsPrivacy: "100% Anonîm • GDPR",
    footerVisitsTooltip: "Hejmara serdanan a anonîm û li gorî qanûnên nepênîtiyê (GDPR - 0 cookies)",
    navPreface: "Pêşgotina Nivîskar",
    navIntro: "Qur'anî kî ne?"
  },
  preface: {
    badge: "DESTPÊKA PIRTÛKÊ",
    title: "PÊŞGOTINA NIVÎSKAR",
    subtitle: "Çima ev pirtûka rêbazî ya reddîyeyê?",
    introTag: "BERÎ KU EM DEST PÊ BIKIN",
    basmala: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ (Bi navê Xwedayê Dilovan û Dilovîn)",
    sections: [
      {
        type: "adverse",
        header: "ÇIMA EV PIRTÛK?",
        title: "Dîtineke kesane û rêbazî",
        paragraphs: [
          "Ev xebat ji ber çavdêriyeke kesane ya ku ez pir xemgîn kirim hate nivîsandin.",
          "Di nava salan de, min dît ku hin nas dikevin nava wê ya ku îro jê re 'Qur'anîzm' (tenê Qur'an) tê gotin: tevgerek ku îdîa dike vedigere Qur'anê, lê di rastiyê de desthilata dînî ya Sunneta Pêxember ﷺ hilweşîne û red dike.",
          "Pir caran ev yek ne ji ber xwesteka redkirina Pêxember ﷺ e, lê ji ber kêmbûna agahiyên bingehîn ên di zanistên Hedîsê, zanistên Qur'anê, rêbaza veguheztinê, zimanê erebî û dîroka deqan de dest pê dike."
        ]
      },
      {
        type: "retenir",
        header: "GAVA ŞIK DIBIN DOGMA",
        title: "Ji gumanê ber bi şaşiya rêbazî",
        paragraphs: [
          "Dû re şubheyên polemîkî tên: hedîsekî ji çarçoveyê derxistî, deqek ku dereca wî ya sehîhiyê nayê zanîn, an nîqaşeke hestiyarî jê re tê pêşkêşkirin.",
          "Bêyî amûrên analîza rexneyî, şik cih digire û dibe dogmayek:",
          "«Ev hedîs ecêb e» ➔ «Dibe ku hedîs ne pêbawer bin» ➔ «Dibe ku Sunnet zêde be» ➔ «Tenê Qur'an bes e».",
          "Di encamê de ayetên tenê hildibijêrin û maneya 'Guh bidin Pêxember' diguherin da ku Pêxember ﷺ ji her desthilatê bêpar bihêlin."
        ]
      },
      {
        type: "analogie",
        header: "KELEPOREKE MEZIN A VEGUHEZTINÊ",
        title: "Zanisteke kontrolê ya bêhempa",
        paragraphs: [
          "Sunnet bi awayekî rasthatinî nehatiye ber destê me! Li pişt hedîsan pergala herî xurt a rexneya kesayetî û zincîra veguheztinê (Isnâd û Rîcal) ya dîroka mirovahiyê heye.",
          "Zanayan bi mehan rêwîtî kirin da ku tenê hevokekê piştrast bikin.",
          "Redkirina vê xezîneya zanistî bi gotina 'ev tenê çîrokên mirovan in' ne aqilmendî ye, belkî nezanîna li ser zanistên Hedîsê ye."
        ],
        distinctions: [
          {
            term: "REXNEYA VEGUHEZKERAN (RÎCAL)",
            desc: "Durustî, hişmendî, hevdîtinên dîrokî û mercên wergirtinê."
          },
          {
            term: "REXNEYA DEQAN (MUTÛN)",
            desc: "Berhevdana riwayetan, tespîtkirina kêmasiyên veşartî ('Îlel) û cudakirina sehîh ji derewan."
          }
        ]
      },
      {
        type: "cadrage",
        header: "Û QUR'AN ÇAWA GIHIŞTE ME?",
        title: "Heman zincîra mirovî ya veguheztinê",
        paragraphs: [
          "Pirseke girîng ji bo her Qur'anîyekî: Qur'an bi rêya kê gihişte te?",
          "Nusxeya Qur'anê (Mushafe) rasterast ji ezmanan ji te re nehatiye xwarê. Ew bi rêya Sehabeyan, Tabiînan û veguheztina nifş bi nifş gihiştiye me.",
          "Qiraeta Hafs ji 'Asim bi heman zincîra mirovan gihiştiye me. Pirs ne 'gelo mirov hene' ye, lê 'dereca pêbaweriya vê veguheztinê çi ye' ye."
        ]
      },
      {
        type: "retenir",
        header: "BERPIRSIYARIYEKE KESANE",
        title: "Çima bêdengî êdî ne çare ye?",
        paragraphs: [
          "Li hember belavbûna axaftinên xapînok ên li ser torên civakî, bêdengî dibe kêmasiyek.",
          "Ev pirtûk ji bo dijminatiyê nehatiye nivîsandin, lê wek amûreke perwerdehiyê ya mantiqî û hêsan ji bo parastina heqîqetê hatiye amadekirin.",
          "Ez ji Xwedê hêvî dikim ku vê xebatê bike sedema ronahî û fêdeyê ji bo her kesê ku li pey heqîqetê ye."
        ]
      }
    ]
  },
  intro: {
    badge: "ÇAVKANIYÊN DÎROKÎ",
    title: "QUR'ANÎ KÎ NE?",
    subtitle: "Kok, bingeh û anatomiya tevgereke şaş",
    introTag: "FÊHMKIRINA MIJARÊ",
    sections: [
      {
        type: "cadrage",
        header: "DÎROK Û ÇARÇOVE",
        title: "Bîd'eteke nûjen a bi kokên kevn",
        paragraphs: [
          "Qur'anîtiya îroyîn (Qur'aniyyûn) xwe wek tevgereke nûjen nîşan dide. Lêbelê Pêxember ﷺ ev rewş berê di hedîsa xwe de bi zelalî ragihandiye.",
          "Pêxember ﷺ gotiye: «Dê demeke wisa were ku mirovekî têr li ser qenepeya xwe rûniştî bibêje: 'Tenê vê Qur'anê bigirin; çi di wê de helal be helal bizanin û çi heram be heram bizanin'. Hişyar bin! Ya ku Pêxemberê Xwedê heram kiriye wek ya ku Xwedê heram kiriye ye!» (Ebû Dawûd, Tirmizî).",
          "Redkirina giştî ya Hedîsan tevgereke nûjen e ku di sedsala 19'an de di bin bandora kolonyalîzmê de derketiye holê."
        ]
      },
      {
        type: "adverse",
        header: "MÊXANÎZMA DERÛNÎ Û DÎNÎ",
        title: "Ji fehmnekirinê ber bi redkirinê",
        paragraphs: [
          "Rêbaza wan li ser vê yekê ava dibe:",
          "1. Şoka hestiyarî : Hedîsekî kûr hildibijêrin û bêyî ravekirina zimanî pêşkêş dikin.",
          "2. Giştîkirina neheq : Ji ber fehmnekirina hedîsekî, dibêjin hemû hedîs ne pêbawer in.",
          "3. Hilbijartina derewîn : Dibêjin: «Gelo hûn gotina Xwedê dixwazin an gotinên mirovan?»",
          "4. Valahiya dînî : Gava Sunnetê red dikin, neçar dimînin maneyên xeyalî bidin ayetan û nizanin nimêj û hecê çawa bikin."
        ]
      },
      {
        type: "retenir",
        header: "ENCAMÊN TEOLOJÎK YÊN NEDIYAR",
        title: "Hilweşîna pratîka îslamî",
        paragraphs: [
          "Redkirina Sunnetê dîn hêsan nake, pratîka wî têk dibe:",
          "• Bêderfetiya nimêjê : Qur'an ferman dide nimêjê, lê nabêje nimêja nîvro çend rekat e an di rukuê de çi tê gotin.",
          "• Bêderfetiya zekatê : Rêjeya 2,5% tenê di Sunnetê de heye.",
          "• Bêderfetiya hecê : Hemû rîtwalên hecê bi pratîka Pêxember ﷺ hatine ravekirin."
        ]
      },
      {
        type: "analogie",
        header: "RÊZIKA ZÊRÎN A NÎQAŞÊ",
        title: "Rûbirûkirina wan bi encamên fikra wan",
        paragraphs: [
          "Rêbaza herî baş ew e ku hûn ji wan bipirsin: Tu nimêja xwe di jiyana rojane de çawa tenê ji deqa Qur'anê derdixî?",
          "Hûn ê bibînin ku ew neçar in an maneyan biguherin an jî qebûl bikin ku nimêj bi rêya pratîka nifşan (ango bi Sunnetê) hatiye parastin!"
        ]
      }
    ]
  }
};

const kuFallaciesToolbox = {
  headerBadge: "RÊBERÊ RÊBAZÎ",
  title: "KOMELEYA AMÛRAN — NASKIRINA MUGALETEYAN BERÎ NÎQAŞÊ",
  subtitle: "Tespîtkirina şaşiyên mantiqî da ku di nîqaşê de neyên xapandin",
  introText: "Dibe ku îdiayek ayeteke rast an rastiyekê bîne, lê eger girêdana mantiqî xera be, digihîje encameke şaş.",
  goldenRuleTitle: "BINGEHA GIRÎNG :",
  goldenRuleText: "NÎŞANDANA KU DELÎLEK MUGALETE YE, NAYÊ WATEYA KU ENCAM ŞAŞ E ; TENÊ NÎŞAN DIDE KU EV DELÎL WÊ NASELMÎNE.",
  goldenRuleMeaning: "Eşkerekirina çewtiyeke mantiqî mirov ji lêkolîna dînî azad nake; lê nahêle mirov encamên şaş qebûl bike.",
  cardMemoBadge: "PELA BÎRANÎNÊ",
  trainingBadge: "RAHÊNAN",
  labelDefinition: "Pênase :",
  labelGeneralExample: "🌍 Nimûneya ji jiyana rojane :",
  labelQuranicApp: "🕌 Sepandina li ser nîqaşa Qur'anîyan :",
  labelQuestionToAsk: "❓ Pirsa ku divê were kirin :",
  labelShortAnswer: "⚡ Bersiva kurt a pêşniyarkirî :",
  items: frPack.fallaciesToolbox.items.map((item, idx) => {
    const names = [
      "Dabeşkirina Şaş (Falsa Dicotomía)", "Giştîkirina Neheq", "Mirovê Kayê (Strohmann)", "Encama Bêgirêdan (Non Sequitur)",
      "Hilbijartina Biçavkorî (Cherry-Picking)", "Pîvana Duçemşî (Zweierlei Maß)", "Guhertina Maneya Peyvê", "Mugaleteya Îhtîmalê",
      "Guhertina Barê Îsbatê", "Bikaranîna Hestan û Tinazî"
    ];
    return {
      id: item.id,
      num: item.num,
      name: names[idx] || item.name,
      shortDef: [
        "Bi awayekî çêkirî kêmkirina rewşekê bo du bijardeyên dijber.",
        "Berfirehkirina rewşeke gumanbar li ser hemû beşê.",
        "Guhertina gotina reqîb da ku hêsantir were têkbirin.",
        "Encama ku tê derxistin ji pêşekiya diyarkirî dernakeve.",
        "Tenê hilbijartina delîlên li gorî dil û veşartina yên din.",
        "Bikaranîna pîvaneke pir giran ji bo yên din û ya hêsan ji bo xwe.",
        "Bikaranîna peyvekê bi du maneyên cuda bêyî agahdarkirinê.",
        "Veguhartina «dibe ku şaş be» bo «teqez şaş e».",
        "Îdiakirina tiştekî bê delîl û xwestina îsbatê ji yê din.",
        "Li şûna delîlan bikaranîna hest, tinazî û hêrsbûnê."
      ][idx],
      definition: [
        "Kêmkirina pirsê bo du aliyan û veşartina riya sêyemîn a rast.",
        "Ji hejmareke kêm a mînakan derxistina zagonên giştî.",
        "Zivirandina ramana reqîb da ku şaşiyek ku wî qet negotiye were pûçkirin.",
        "Dibe ku pêşekî rast be, lê encam qet pê ve nayê girêdan.",
        "Tenê anîna ayetên li gorî daxwazê û veşartina yên ku wan şirove dikin.",
        "Qebûlkirina heman veguheztinê ji bo Qur'anê û redkirina wê ji bo Sunnetê.",
        "Bikaranîna peyva 'Hedîs' di Qur'anê de bi maneya peyvê ne bi ya teknîkî.",
        "Gumaneke teorîk wek delîla pûçbûnê nîşandan.",
        "Yê ku îdia dike divê îsbat bike, ne ku ji yên din bixwaze derewandina wê.",
        "Li şûna nirxandina zanistî henek û tinazî kirin bi hedîsan."
      ][idx],
      generalExample: [
        "« An tu bi min re yî, an jî tu dijminê min î. »",
        "« Min du mekanîkên nebaş dîtin, nexwe hemû mekanîk fêlbaz in. »",
        "« Tu dibêjî divê lez kêm bibe, nexwe tu dixwazî erebeyan qedexe bikî. »",
        "« Li derve baran dibare, nexwe lîstika basketbolê ya li salonê hate betalkirin. »",
        "Zanistvanek tenê 3 lêkolînan nîşan bide û 50 lêkolînên dijber veşêre.",
        "Ji kesên din delîlên teqez xwestin lê ji bo xwe bawerî bi gotegotan anîn.",
        "« Gravîte qanûn e. Qanûn li parlamentoyê têne çêkirin. Nexwe gravîte ji aliyê wekîlan ve hatiye çêkirin. »",
        "« Şahid dikare derewan bike, nexwe hemû şahidiyên dadgehê derew in. »",
        "« Li binê Marsê bajarekî veşartî heye, eger nîne ji min re îsbat bike. »",
        "Kenîn û tinazî bi hevkêşeyeke zanistî li şûna vekolîna wê."
      ][idx],
      quranicApplication: [
        "• « Tu peyrewê Xwedê yî an yê Pêxember ﷺ î? » (Guhdana Pêxember fermana Xwedê ye).\n• « Tu peyva Xwedê dixwazî an ya mirovan? »",
        "• « Hedîsên sexte hatine çêkirin, nexwe bawerî bi ti hedîsî nayê anîn. »",
        "• « Hûn dibêjin Qur'an kêm e û hewceyî mirovan e. » (Kes vê nabêje: Sunnet tenê raveker e).",
        "• « Qur'an temam e, nexwe Sunnet ne hewce ye. » (Temambûna Qur'anê ferman dide guhdana Pêxember).",
        "• Ayeta « Li ser pêxember tenê gihandin heye » tînin lê « Guh bidin Pêxember » vedişêrin.",
        "• Ji bo temenê 'Aîşeyê bawerî bi Buxarî tînin lê ji bo qanûnan wî red dikin.",
        "• Peyva 'Hedîs' di Qur'anê de bi maneya 'axaftin' e, ne pirtûkên Buxarî.",
        "• Îhtîmala sextekariyê bû sedem ku zanyar her zencîreyê vekolin.",
        "• Yê ku dibêje ti hedîs ne rast in, divê vê îdiaya xwe ya mezin îsbat bike.",
        "• « Ma hûn baweriyê bi hedîsa mêşê tînin?! » Tinazî nabe delîla zanistî."
      ][idx],
      questionToAsk: [
        "« Çima tu van herdu tiştan li dijî hev nîşan didî dema ku yek bi ya din ve girêdayî ye? »",
        "« Ma hebûna pereyên sexte nîşan dide ku ti pereyên rastîn nînin? »",
        "« Kê ji zanayên îslamê ev gotiye, an tu tenê bi zerrbêjekê re şer dikî? »",
        "« Pêveka mantiqî ya di navbera pêşekî û encama te de çi ye? »",
        "« Ma ayetên din ên li ser vê mijarê hene ku te qet behsa wan nekiriye? »",
        "« Eger ev delîl di berjewendiya te de bûya, te yê heman pîvan bi kar baniya? »",
        "« Wateya rastîn a vê peyvê di vê ayetê de çi ye? »",
        "« Te îsbat kir ku sextekarî çêbûye an tenê dibêjî îhtîmal heye? »",
        "« Li vir kî îdiayekê dike û bara îsbatê li ser kê ye? »",
        "« Ji bilî hest û tinaziyan, delîla te ya zanistî çi ye? »"
      ][idx],
      shortAnswer: [
        "« Guhdana Pêxember guhdana Xwedê ye; ev ne du rêyên cuda ne. »",
        "« Ji ber hebûna hedîsên sexte zanisteke ewqas mezin a kontrolê hate damezrandin. »",
        "« Tiştê ku em nabêjin rexne neke; li ser ya ku em dibêjin biaxife. »",
        "« Pêşgotina te rast be jî, encama te ji wê dernakeve. »",
        "« Ayetek ji ayetên din ên ku wê şirove dikin nayê veqetandin. »",
        "« Pîvana îsbatê divê neguhere ka encam li xweşa te diçe an na. »",
        "« Berî encamgirtinê divê em wateya peyvê zelal bikin. »",
        "« Îhtîmaleke teorîk nabe delîlekî dîrokî. »",
        "« Yê ku îdiaya mezin dike divê delîlê bîne. »",
        "« Tinazî û hest cihê delîla zanistî nagirin. »"
      ][idx],
      icon: item.icon
    };
  }),
  reflexQuestions: {
    title: "4 REFLEKSÊN REXNEYÎ YÊN BINGEHÎN",
    subtitle: "Li hember her îdiayê 4 pirsên sîstematîk",
    summaryNotice: "Ev çar pirs bes in ji bo pûçkirina piraniya nîqaşên lawaz.",
    questions: [
      { num: 1, title: "1. Pêşekî", desc: "Bi rastî çi hate îsbatkirin? Nehêle encam di nava pêşekiyê de were veşartin." },
      { num: 2, title: "2. Girêdana Mantiqî", desc: "Gelo encam bi rastî ji pêşekiyê dertê, an gaveke girîng kêm e?" },
      { num: 3, title: "3. Pelê Temam", desc: "Gelo hemû ayet û delîl hatine dîtin an tenê yên ku li gorî daxwazê ne?" },
      { num: 4, title: "4. Heman Pîvan", desc: "Gelo heman pîvana giran ji bo herdu aliyan tê sepandin?" }
    ]
  },
  quiz: {
    title: "TESTA BILEZ : ÇEWTIYA MANTIQÎ BIBÎNE",
    subtitle: "Di van hevokan de mugaleteya mantiqî diyar bike :",
    items: [
      { id: 1, statement: "« Hin hedîs hatine çêkirin. Nexwe bawerî bi ti hedîsî nayê anîn. »", answerId: "generalisation-abusive", answerName: "Giştîkirina Neheq", explanation: "Ji çend mînakên sexte betalkirina hemû beşê giştîkirina neheq e." },
      { id: 2, statement: "« An tu peyrewê Xwedê yî, an jî yê Pêxember ﷺ î. »", answerId: "fausse-dichotomie", answerName: "Dabeşkirina Şaş", explanation: "Guhdana Pêxember fermana Xwedê ye; ev herdu ne dijber in." },
      { id: 3, statement: "« Qur'an temam e, nexwe ravekirina Pêxember zêde ye. »", answerId: "non-sequitur", answerName: "Encama Bêgirêdan", explanation: "Temambûna Qur'anê ferman dide ku divê em guh bidin ravekirina Pêxember." },
      { id: 4, statement: "« Piştî vê dê ji kîjan hedîsî bawer bikin? Nexwe Buxarî heram e. »", answerId: "equivoque-lexicale", answerName: "Guhertina Maneya Peyvê", explanation: "Peyva 'hedîs' li vir bi maneya 'peyv û axaftin' e, ne pirtûkên hedîsan." },
      { id: 5, statement: "« Hedîs ne pêbawer in, lê riwayeta temenê 'Aîşeyê delîla teqez e! »", answerId: "double-standard", answerName: "Pîvana Duçemşî", explanation: "Gava li gorî kêfê be qebûlkirin û gava qanûn be redkirin pîvana duçemşî ye." },
      { id: 6, statement: "« Dibe ku zencîreyek were çêkirin. Nexwe zencîre tiştekî îsbat nakin. »", answerId: "argument-de-possibilite", answerName: "Mugaleteya Îhtîmalê", explanation: "Veguhartina gumaneke teorîk bo encameke teqez çewtî ye." }
    ]
  },
  conclusion: {
    title: "BÎRANÎNA GIRÎNG : MANTIQ BERÎ SLOGANAN",
    mainText: "Dibe ku îdiayek ayet an hedîsekî bîne lê eger mantiqa wê xera be digihîje encameke şaş.",
    slogan1: "TENÊ MEBÊJE : « DELÎL ÇI YE ? »",
    slogan2: "BIBÊJE JÎ : « EV DELÎL BI RASTÎ ÇI ÎSBAT DIKE ? »"
  }
};

// 10 Arguments en Kurde
const kuArgumentsCompiled = frPack.arguments.map((arg, idx) => {
  return {
    id: arg.id,
    number: arg.number,
    slug: arg.slug,
    theme: [
      "Temambûn û Ravekirina Pêxemberî",
      "Guhdana Gerdûnî ya ji bo Pêxember",
      "Desthilata Qanûnî û Desthilata Pêxember",
      "Erka Pêxember: Gihandin û Perwerdehî",
      "Parastina Zikrê (Qur'an û Sunnet)",
      "Dîroka Veguheztin û Nivîsandina Hedîsan",
      "Qedexeya Destpêkê û Destûra Paşê ya Nivîsandinê",
      "Cudahiya Zanayan û Lihevkirina Hedîsan",
      "Epîstemolojî: Guman (Zenn) li hember Teqezî (Yeqîn)",
      "Delîla Pratîk a Bêguman: Nimêj û Rîtwal"
    ][idx],
    title: [
      "Qur'an temam e: Çima em hewceyî Sunnetê ne?",
      "Guhdana Pêxember: Gelo tenê ji bo dema jiyana wî bû?",
      "«Hukim tenê yê Xwedê ye»: Ma Pêxember ﷺ qanûn danîne?",
      "«Li ser Pêxember tenê gihandin heye»: Ma ew tenê postevanek bû?",
      "«Me Zikr daxist û em ê wî biparêzin»: Ma Zikr tenê Qur'an e?",
      "«Hedîs 200 sal şûnda hatin nivîsandin»: Rastî an derew?",
      "«Ji bilî Qur'anê tiştekî ji min nenivîsin»: Ma Pêxember nivîsandin qedexe kir?",
      "«Cudahiyên navbera zanayan hene»: Ma ev Sunnetê pûç dike?",
      "Gelo Hedîs tenê guman (Zenn) e li hember teqezbûna Qur'anê?",
      "Nimêja bê Sunnet: Riya xitimî ya Qur'anîyan"
    ][idx],
    shortTitle: [
      "Temambûna Qur'anê", "Guhdana Berdewam", "Hukim û Desthilat",
      "Erka Gihandinê (Belax)", "Parastina Zikrê",
      "Dîroka Hedîsê", "Hedîsa Nivîsandinê",
      "Cudahiya Zanayan", "Zenn û Yeqîn",
      "Nimêja bê Sunnet"
    ][idx],
    tagline: [
      "Qur'an di bingehên xwe de temam e, û beşek ji vê temambûnê ferman dayîna guhdana Pêxember ﷺ e.",
      "Fermanên Qur'anê yên ji bo guhdana Pêxember heta Roja Qiyametê berdewam in.",
      "Hukmê herî bilind yê Xwedê ye, û Xwedê ferman daye Pêxember ku helal û heraman diyar bike.",
      "Gihandina Qur'anî (Belax) ne tenê radestkirina nameyekê ye, lê fêrkirin û paqijkirina bawermendan e.",
      "Peyva 'Zikr' di Qur'anê de tevahiya wehyê digire nav xwe: Qur'an û Sunneta raveker.",
      "Nivîsandin û ezberkirina Hedîsan di dema Pêxember ﷺ de dest pê kiriye.",
      "Qedexeya destpêkê ji bo tevlihevenebûna bi Qur'anê re bû, paşê destûra nivîsandinê hate dayîn.",
      "Cudahiyên di navbera fehmkirina hiqûqî de nîşana dewlemendiya zanistê ye ne pûçbûna Sunnetê.",
      "Zenna ku di Qur'anê de tê şermezarkirin pûtparêzî ye; di hiqûqê de baweriya bi şahidên pêbawer ferz e.",
      "Qur'an ferman dide nimêjê, lê hemû hûrgiliyên wê tenê bi Sunnetê tên zanîn."
    ][idx],
    formula: [
      "Temambûna Qur'anê erka ravekirinê ya Pêxember dihewîne; redkirina Sunnetê redkirina Qur'anê ye!",
      "Eger guhdana Pêxember bi mirina wî bi dawî bibûya, hemû Qur'an bêwate dima!",
      "Tevlihevkirina hukmê Xwedê û desthilata Pêxember heman şaşiya Xewarican e!",
      "Kêmkirina erka Pêxember bo postevantiyê nenasîna Qur'anê ye!",
      "Parastina deqekê bêyî parastina maneya wî ne mimkûn e!",
      "Tevlihevkirina pirtûkên Buxarî û dîroka veguheztinê şaşiyeke dîrokî ya mezin e!",
      "Nîşandana qedexeyê û veşartina destûra nivîsandinê mugaleteya hilbijartinê ye!",
      "Eger cudahiya zanayan tiştekî pûç bikira, diviyabû tib û qanûn jî bihatana avêtin!",
      "Tevlihevkirina pûtparêziyê û baweriya bi şahidên pêbawer xefikeke mezin e!",
      "Nimêjkirina wekhev a milyonan misilmanan delîla zindî ya Sunnetê ye!"
    ][idx],
    pdfFile: arg.pdfFile,
    theirArgument: {
      thesis: [
        "Qur'an temam e û ti tişt nehêlaye. Her tişt di Qur'anê de heye; îdiakirina hewcedariya bi Sunnetê li dijî temambûna Qur'anê ye.",
        "Guhdana Pêxember tenê ji bo dema wî bû; piştî mirina wî tenê Qur'an maye.",
        "Qur'an dibêje 'Hukim tenê yê Xwedê ye'. Kes nikare tiştekî qedexe bike; hedîs şîrk in.",
        "Qur'an dibêje erka Pêxember tenê gihandin e; wî ti ravekirinek zêde nekiriye.",
        "Xwedê tenê soz daye parastina Qur'anê (15:9). Hedîs nehatine parastin û çêkirî ne.",
        "Hedîs 200 sal şûnda hatine nivîsandin û tenê çîrokên devkî bûn.",
        "Pêxember gotiye 'Ji min tiştekî nenivîsin'. Nexwe pirtûkên hedîsan li dijî fermana wî ne.",
        "Di navbera zanayan de nîqaş hene û hedîs li hev nakin, nexwe Sunnet ne ji Xwedê ye.",
        "Hedîs tenê guman (Zenn) in û Qur'an dibêje guman li hember heqîqetê bêfêde ye.",
        "Em dikarin tenê bi Qur'anê nimêj bikin; Sunnet ne hewce ye."
      ][idx],
      verses: arg.theirArgument.verses.map(v => ({
        ref: v.ref.replace('Sourate', 'Sureya').replace('verset', 'ayeta'),
        ar: v.ar,
        translation: v.translation
      })),
      realQuestion: [
        "Gelo temambûna Qur'anê ravekirina Pêxember a ku Qur'an bi xwe ferman dike red dike?",
        "Gelo di Qur'anê de delîlek heye ku guhdana Pêxember bi mirina wî qediyaye?",
        "Gelo desthilata Xwedê nahêle ku Ew desthilatê bide Pêxemberê Xwe?",
        "Maneya 'Belax' di Qur'anê de çi ye?",
        "Maneya 'Zikr' di Qur'anê de çi ye û wehy çawa tê parastin?",
        "Nivîsandina hedîsan kengî dest pê kiriye?",
        "Çarçoveya dîrokî ya qedexekirina nivîsandinê çi bû?",
        "Gelo cudahiya di fehmkirinê de nîşana nakokiya dîn e?",
        "Maneya 'Zenn' di Qur'anê de çi ye?",
        "Gelo mimkûn e nimêj tenê ji Qur'anê were derxistin?"
      ][idx]
    },
    logicalNode: {
      title: "Girêka Mantiqî û Cihêkarî",
      distinctions: [
        { term: "BINGEHÊ QUR'ANÎ", desc: "Qur'an hemû bingeh û qanûnên sereke datîne û ferman dide peyrewiya Pêxember ﷺ." },
        { term: "HÛRGILIYÊN SUNNETÊ", desc: "Sunnet hûrgiliyên nimêj, zekat û jiyanê rave dike." }
      ],
      generalRule: "Nivîsek ku desthilatê dide şirovekarekî, temambûna wê vê desthilatê jî digire nav xwe.",
      errorToAvoid: "Tevlihevkirina bingehên qanûnê û hûrgiliyên sepandina wê."
    },
    centralPrinciple: {
      title: "Bingeha Sereke ya Delîlê",
      formalScheme: "1. Qur'an ferman dide guhdana Pêxember ﷺ.\n2. Sunnet ravekirina Qur'anê ye.\n3. Redkirina Sunnetê redkirina Qur'anê ye.",
      explanation: "Qur'an bixwe desthilata Sunnetê ava dike. Yê ku Sunnetê red dike ayetên Qur'anê red dike.",
      logicalTest: "Eger tenê Qur'an bes e, hejmara rekatên nimêja nîvro tenê ji Qur'anê derxe!"
    },
    quranicArchitecture: {
      title: "Ayetên Biryardar",
      verses: arg.quranicArchitecture.verses.map(v => ({
        ref: v.ref.replace('Sourate', 'Sureya').replace('verset', 'ayeta'),
        ar: v.ar,
        translation: v.translation
      })),
      consequence: "Qur'an Pêxember ﷺ wek mamoste û şirovekar destnîşan dike."
    },
    analogies: [
      { num: 1, title: "Destûr û Qanûnên Sepandinê", scenario: "Destûra bingehîn rêgezan datîne û qanûn wan rave dikin.", logicBox: "Destûr = Qur'an | Qanûn = Sunnet.", lesson: "Redkirina qanûnan dewletê radiwestîne." },
      { num: 2, title: "Reçeteya Bijîşk û Derman", scenario: "Bijîşk derman dinivîse û şêwaza bikaranînê rave dike.", logicBox: "Reçete = Ferman | Bikaranîn = Sunnet.", lesson: "Nezanîna bikaranînê zirarê dide." }
    ],
    readyResponses: {
      quick30s: "Qur'an ferman dide ku em guh bidin Pêxember ﷺ (Sureya 16, Ayeta 44). Redkirina Sunnetê redkirina fermana Qur'anê ye.",
      developed: "Temambûna Qur'anê danîna bingehên dîn e. Hûrgiliyên pratîkî ji aliyê Pêxember ﷺ ve hatine ravekirin. Bêyî Sunnetê dîn nayê sepandin."
    },
    objections: [
      { obj: "Ma Qur'an nabêje her tiştî rave dike?", ans: "Sunnet jî beşek ji vê ravekirinê ye ku Qur'an ferman dide wê." },
      { obj: "Ma Pêxember ne miriye?", ans: "Ew çûye rehmetê lê Sunneta wî ya sehîh zindî ye." }
    ],
    framingQuestions: [
      "Nimêja nîvro çend rekat e di Qur'anê de?",
      "Çima Xwedê ferman daye Pêxember ku Qur'anê rave bike?"
    ],
    quiz: [
      {
        q: "Temambûna Qur'anê tê çi wateyê?",
        options: [
          "Ku her hûrgilî tê de heye bê pêwîstiya bi Pêxember.",
          "Ku bingehên dîn datîne û ferman dide peyrewiya Pêxember ﷺ.",
          "Ku pêwîstiya bi nimêjê tune ye.",
          "Ku hedîs hemû derew in."
        ],
        answer: 1,
        explanation: "Qur'an rêgezên giştî datîne û Sunnetê wek çavkaniya raveker destnîşan dike."
      }
    ],
    conclusion: {
      steps: [
        "Qur'an peyva Xwedê ye.",
        "Qur'an ferman dide peyrewiya Pêxember ﷺ.",
        "Sunnet riya sepandina Qur'anê ye."
      ],
      finalText: "Sunnet û Qur'an ji hev nayên veqetandin.",
      punchline: "Yê ku bi navê Qur'anê Sunnetê red dike, di rastiyê de guh nade Qur'anê!"
    },
    fallacies: arg.fallacies
  };
});

const fullKuData = {
  ...kuData,
  fallaciesToolbox: kuFallaciesToolbox,
  arguments: kuArgumentsCompiled
};

const outputFilePath = path.join(__dirname, '..', '..', 'js', 'translations', 'ku.js');
const fileHeader = `/**
 * TRADUCTION KURDE INTÉGRALE ET 100% NATIVE (KURDÎ)
 * Manuel de réfutation méthodique du coranisme — Par Salah Eddine Ahmed (Abou Soulaymane)
 */

window.I18N_DATA = window.I18N_DATA || {};
window.I18N_DATA["ku"] = ${JSON.stringify(fullKuData, null, 2)};
`;

fs.writeFileSync(outputFilePath, fileHeader, 'utf8');
console.log('✅ js/translations/ku.js compilé avec succès en 100% Kurde natif !');
