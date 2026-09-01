/*
 * One-shot migration for the two historical UI schemas.
 *
 * Older packs expose the keys consumed by app.js. Newer packs used equivalent
 * names, which made the application silently render its French literals. This
 * script preserves the reviewed local wording and publishes it under the
 * runtime contract instead of copying French text into another locale.
 */
const fs = require('fs');
const path = require('path');

const directory = path.join(__dirname, '..', 'js', 'translations');
const locales = ['es', 'de', 'it', 'pt', 'ku', 'ce'];
const canonicalSlugs = ['1-coran-complet', '2-obeissance-messager', '3-allah-seul-legifere', '4-mission-messager-transmettre', '5-preservation-coran-hadiths', '6-compilation-tardive-hadiths', '7-interdiction-ecrire-paroles', '8-coran-condamne-hadiths', '9-corrections-divines', '10-priere-pratique-communautaire'];

const goldenStatements = {
  es: 'IDENTIFICAR UNA FALACIA ≠ PROBAR QUE LA CONCLUSIÓN ES FALSA',
  de: 'EINEN TRUGSCHLUSS ZU ERKENNEN ≠ ZU BEWEISEN, DASS DIE SCHLUSSFOLGERUNG FALSCH IST',
  it: 'INDIVIDUARE UNA FALLACIA ≠ DIMOSTRARE CHE LA CONCLUSIONE È FALSA',
  pt: 'IDENTIFICAR UMA FALÁCIA ≠ PROVAR QUE A CONCLUSÃO É FALSA',
  ku: 'MUGALETEYÊ NASKIRIN ≠ ÎSBATKIRINA ÇEWTIYA ENCAMA',
  ce: 'ХАРЦО КАРОР ≠ ТӀАЬХЬАЛОН ХАРЦ ХИЛАР ДОКАЗ ДАР'
};

const italianVerses = {
  'Sura An-Nisâʾ, versetto 59': '« Obbedite ad Allah e obbedite al Messaggero. »',
  'Sura An-Nisâʾ, versetto 65': '« No, per il tuo Signore! Non crederanno finché non ti prenderanno come giudice nelle loro controversie e non troveranno in sé alcun disagio per ciò che hai deciso, sottomettendosi pienamente. »',
  'Sura An-Naḥl, versetto 44': '« Affinché tu renda chiaro agli uomini ciò che è stato fatto scendere per loro. »',
  'Sura Al-Aḥzâb, versetto 21': '« Avete certamente nel Messaggero di Allah un eccellente esempio. »',
  'Sura An-Nûr, versetto 63': '« Coloro che si oppongono al suo comando stiano in guardia... »',
  'Sura Al-Aḥzâb, versetto 36': '« Non spetta a un credente né a una credente, quando Allah e il Suo Messaggero hanno deciso una questione, avere ancora scelta... »',
  'Sura Al-Aʿrâf, versetto 157': '« Egli rende loro lecite le cose buone e vieta loro quelle cattive. »',
  'Sura Al-Baqarah, versetto 151': '« Egli vi recita i Nostri versetti, vi purifica e vi insegna il Libro e la Sapienza. »',
  'Sura Al-Jâthiyah, versetto 6': '« In quale discorso, dopo Allah e i Suoi versetti, crederanno dunque? »',
  'Sura An-Najm, versettos 3-4': '« Egli non parla per capriccio: non è che una rivelazione ispirata. »',
  'Sura Al-Ḥâqqah, versettos 44-46': '« Se avesse inventato contro di Noi alcune parole, lo avremmo afferrato con la mano destra e poi gli avremmo reciso l’aorta. »'
};

const reviewedVerseTranslations = {
  de: {
    'أَطِيعُوا اللَّهَ وَأَطِيعُوا الرَّسُولَ': '« Gehorcht Allah und gehorcht dem Gesandten. »',
    'حَتَّىٰ يُحَكِّمُوكَ فِيمَا شَجَرَ بَيْنَهُمْ': '« bis sie dich zum Richter über ihre Streitigkeiten machen. »',
    'لِتُبَيِّنَ لِلنَّاسِ مَا نُزِّلَ إِلَيْهِمْ': '« damit du den Menschen klar darlegst, was zu ihnen herabgesandt wurde. »',
    'لَّقَدْ كَانَ لَكُمْ فِي رَسُولِ اللَّهِ أُسْوَةٌ حَسَنَةٌ': '« Im Gesandten Allahs habt ihr gewiss ein schönes Vorbild. »',
    'أَطِيعُوا اللَّهَ وَأَطِيعُوا الرَّسُولَ وَأُولِي الْأَمْرِ مِنكُمْ': '« O ihr, die ihr glaubt, gehorcht Allah und gehorcht dem Gesandten und denjenigen unter euch, die Befehlsgewalt besitzen. »',
    'وَأَنزَلْنَا إِلَيْكَ الذِّكْرَ لِتُبَيِّنَ لِلنَّاسِ مَا نُزِّلَ إِلَيْهِمْ': '« Und Wir haben zu dir die Ermahnung herabgesandt, damit du den Menschen klar darlegst, was zu ihnen herabgesandt wurde. »',
    'فَلَا وَرَبِّكَ لَا يُؤْمِنُونَ حَتَّىٰ يُحَكِّمُوكَ فِيمَا شَجَرَ بَيْنَهُمْ ثُمَّ لَا يَجِدُوا فِي أَنفُسِهِمْ حَرَجًا مِّمَّا قَضَيْتَ وَيُسَلِّمُوا تَسْلِيمًا': '« Nein, bei deinem Herrn! Sie werden nicht glauben, bis sie dich zum Richter über ihre Streitigkeiten machen, dann in sich keinen Widerstand gegen deine Entscheidung finden und sich völlig fügen. »',
    'فَلْيَحْذَرِ الَّذِينَ يُخَالِفُونَ عَنْ أَمْرِهِ': '« Diejenigen, die sich seinem Befehl widersetzen, sollen sich in Acht nehmen... »',
    'وَمَا كَانَ لِمُؤْمِنٍ وَلَا مُؤْمِنَةٍ إِذَا قَضَى اللَّهُ وَرَسُولُهُ أَمْرًا أَن يَكُونَ لَهُمُ الْخِيَرَةُ مِنْ أَمْرِهِمْ': '« Es steht weder einem gläubigen Mann noch einer gläubigen Frau zu, noch eine Wahl in ihrer Angelegenheit zu haben, wenn Allah und Sein Gesandter eine Sache entschieden haben... »',
    'وَيُحِلُّ لَهُمُ الطَّيِّبَاتِ وَيُحَرِّمُ عَلَيْهِمُ الْخَبَائِثَ': '« Er erlaubt ihnen die guten Dinge und verbietet ihnen die schlechten. »',
    'يَتْلُو عَلَيْكُمْ آيَاتِنَا وَيُزَكِّيكُمْ وَيُعَلِّمُكُمُ الْكِتَابَ وَالْحِكْمَةَ': '« Er trägt euch Unsere Verse vor, läutert euch und lehrt euch das Buch und die Weisheit. »',
    'فَبِأَيِّ حَدِيثٍ بَعْدَ اللَّهِ وَآيَاتِهِ يُؤْمِنُونَ': '« An welche Rede werden sie nach Allah und Seinen Versen denn glauben? »',
    'وَمَا يَنطِقُ عَنِ الْهَوَىٰ إِنْ هُوَ إِلَّا وَحْيٌ يُوحَىٰ': '« Er spricht nicht aus eigener Neigung; es ist nichts anderes als eine Offenbarung, die eingegeben wird. »',
    'وَلَوْ تَقَوَّلَ عَلَيْنَا بَعْضَ الْأَقَاوِيلِ لَأَخَذْنَا مِنْهُ بِالْيَمِينِ ثُمَّ لَقَطَعْنَا مِنْهُ الْوَتِينَ': '« Hätte er Uns einige Worte angedichtet, hätten Wir ihn an der rechten Hand ergriffen und ihm dann die Hauptschlagader durchtrennt. »'
  },
  pt: {
    'أَطِيعُوا اللَّهَ وَأَطِيعُوا الرَّسُولَ': '« Obedecei a Allah e obedecei ao Mensageiro. »',
    'حَتَّىٰ يُحَكِّمُوكَ فِيمَا شَجَرَ بَيْنَهُمْ': '« até que te tomem por juiz nas suas disputas. »',
    'لِتُبَيِّنَ لِلنَّاسِ مَا نُزِّلَ إِلَيْهِمْ': '« para que expliques claramente aos homens o que lhes foi revelado. »',
    'لَّقَدْ كَانَ لَكُمْ فِي رَسُولِ اللَّهِ أُسْوَةٌ حَسَنَةٌ': '« Tendes, certamente, no Mensageiro de Allah um excelente exemplo. »',
    'أَطِيعُوا اللَّهَ وَأَطِيعُوا الرَّسُولَ وَأُولِي الْأَمْرِ مِنكُمْ': '« Ó vós que credes, obedecei a Allah, obedecei ao Mensageiro e aos que detêm autoridade entre vós. »',
    'وَأَنزَلْنَا إِلَيْكَ الذِّكْرَ لِتُبَيِّنَ لِلنَّاسِ مَا نُزِّلَ إِلَيْهِمْ': '« E fizemos descer sobre ti a Mensagem, para que expliques claramente aos homens o que lhes foi revelado. »',
    'فَلَا وَرَبِّكَ لَا يُؤْمِنُونَ حَتَّىٰ يُحَكِّمُوكَ فِيمَا شَجَرَ بَيْنَهُمْ ثُمَّ لَا يَجِدُوا فِي أَنفُسِهِمْ حَرَجًا مِّمَّا قَضَيْتَ وَيُسَلِّمُوا تَسْلِيمًا': '« Não, pelo teu Senhor! Eles não crerão até que te tomem por juiz nas suas disputas, não sintam em si qualquer constrangimento com a tua decisão e se submetam plenamente. »',
    'فَلْيَحْذَرِ الَّذِينَ يُخَالِفُونَ عَنْ أَمْرِهِ': '« Que aqueles que se opõem à sua ordem se acautelem... »',
    'وَمَا كَانَ لِمُؤْمِنٍ وَلَا مُؤْمِنَةٍ إِذَا قَضَى اللَّهُ وَرَسُولُهُ أَمْرًا أَن يَكُونَ لَهُمُ الْخِيَرَةُ مِنْ أَمْرِهِمْ': '« Não cabe a um crente nem a uma crente, quando Allah e o Seu Mensageiro decidem uma questão, terem ainda escolha no seu assunto... »',
    'وَيُحِلُّ لَهُمُ الطَّيِّبَاتِ وَيُحَرِّمُ عَلَيْهِمُ الْخَبَائِثَ': '« Ele torna lícitas para eles as coisas boas e lhes proíbe as más. »',
    'يَتْلُو عَلَيْكُمْ آيَاتِنَا وَيُزَكِّيكُمْ وَيُعَلِّمُكُمُ الْكِتَابَ وَالْحِكْمَةَ': '« Ele recita para vós os Nossos versículos, purifica-vos e vos ensina o Livro e a Sabedoria. »',
    'فَبِأَيِّ حَدِيثٍ بَعْدَ اللَّهِ وَآيَاتِهِ يُؤْمِنُونَ': '« Em que discurso, depois de Allah e dos Seus versículos, acreditarão então? »',
    'وَمَا يَنطِقُ عَنِ الْهَوَىٰ إِنْ هُوَ إِلَّا وَحْيٌ يُوحَىٰ': '« Ele não fala por capricho; não é senão uma revelação inspirada. »',
    'وَلَوْ تَقَوَّلَ عَلَيْنَا بَعْضَ الْأَقَاوِيلِ لَأَخَذْنَا مِنْهُ بِالْيَمِينِ ثُمَّ لَقَطَعْنَا مِنْهُ الْوَتِينَ': '« Se tivesse inventado contra Nós algumas palavras, tê-lo-íamos agarrado pela mão direita e depois lhe teríamos cortado a aorta. »'
  },
  ku: {
    'لِتُبَيِّنَ لِلنَّاسِ مَا نُزِّلَ إِلَيْهِمْ': '« Da ku tu ji mirovan re tiştê ku ji wan re hatiye daxistin eşkere bikî. »',
    'وَأَنزَلْنَا إِلَيْكَ الذِّكْرَ لِتُبَيِّنَ لِلنَّاسِ مَا نُزِّلَ إِلَيْهِمْ': '« Û me Bîranîn (Zikr) ji te re daxist da ku tu ji mirovan re tiştê ku ji wan re hatiye daxistin eşkere bikî. »'
  },
  ce: {
    'لِتُبَيِّنَ لِلنَّاسِ مَا نُزِّلَ إِلَيْهِمْ': '« Хьоьга нахана билгалдаккхийта а цаьрга доссош хилларг (Делан хьукманаш). »',
    'وَأَنزَلْنَا إِلَيْكَ الذِّكْرَ لِتُبَيِّنَ لِلنَّاسِ مَا نُزِّلَ إِلَيْهِمْ': '« Билгалонашца а, жайнашца… Хьоьга боссийна Оха хьехам, хьоьга нахана билгалдаккхийта а цаьрга доссош хилларг (Делан хьукманаш)‚ уьш ойла еш хилийта а. »'
  }
};

function load(code) {
  const file = path.join(directory, `${code}.js`);
  const sandbox = {};
  const raw = fs.readFileSync(file, 'utf8');
  new Function('window', 'sandbox', `${raw}\nsandbox.data = window.I18N_DATA[${JSON.stringify(code)}];`)({}, sandbox);
  return { file, pack: sandbox.data };
}

function first(...values) {
  return values.find(value => value !== undefined && value !== null && value !== '');
}

for (const code of locales) {
  const { file, pack } = load(code);
  const ui = pack.ui;
  const toolbox = pack.fallaciesToolbox || {};
  const defaults = {
    barbahariBtn: ui.navBarbahari || ui.footerBtnPortal,
    contactBtn: ui.navContact || ui.sidebarContact || ui.footerBtnContact,
    legalBtn: ui.navLicense || ui.footerBtnLegal,
    summaryTitle: ui.sidebarTitle,
    rubriquesCount: ui.sidebarCount,
    btnContactAuthor: ui.sidebarContact || ui.footerBtnContact,
    goldenRuleHeader: toolbox.goldenRuleTitle,
    goldenRuleTitle: toolbox.goldenRuleTitle,
    goldenRuleDesc: toolbox.goldenRuleMeaning,
    goldenRuleStep1: toolbox.goldenRuleStatement || goldenStatements[code],
    goldenRuleStep2: toolbox.goldenRuleMeaning,
    goldenRuleStep3: first(toolbox.goldenRuleGoal, toolbox.goldenRuleMeaning),
    contactEmailBoxTitle: ui.contactEmailNotice,
    contactSuggestions: ui.contactEmailNotice,
    legalSharingTitle: ui.legalSharingMain,
    legalSharingSubtitle: ui.legalSharingHeader,
    legalSharingMainText: ui.legalSharingP1,
    legalAuthorizedUses: ui.legalAllowedTitle,
    legalAuthorizedUsesHeader: ui.legalAllowedTitle,
    legalAuthorizedUsesList: [ui.legalAllowedBullet1, ui.legalAllowedBullet2, ui.legalAllowedBullet3].filter(Boolean),
    legalPrivacyTitle: ui.legalPrivacyMain,
    legalPrivacySubtitle: ui.legalPrivacyHeader,
    legalPrivacyText: ui.legalPrivacyP1,
    footerQuote: toolbox.goldenRuleStatement || goldenStatements[code],
    footerAuthorRef: ui.authorName || 'Salah Eddine Ahmed',
    footerNotice: ui.legalSharingP1,
    footerNotice2: ui.legalSharingP1,
    tocTitle: ui.tocSummary,
    tocPrinciple: ui.tocPrincipe,
    sec1Sub: ui.sec2ThesisLabel,
    sec1CoranistTitle: ui.sec2ThesisLabel,
    sec1VersesTitle: ui.sec2VersesLabel,
    sec2Sub: ui.sec2RealQuestionLabel,
    sec3Sub: ui.sec3GeneralRuleLabel,
    sec3FormalScheme: ui.sec4FormalSchemeLabel,
    sec3Explanation: ui.sec4ExplanationLabel,
    sec4Sub: ui.sec4TestLabel,
    sec4VersesRef: ui.sec2VersesLabel,
    sec5Sub: ui.sec5ConsequenceLabel,
    sec6Sub: ui.sec7QuickResponseLabel,
    sec7Sub: ui.sec8DirectQuestionsLabel,
    sec7ClickToggle: ui.sec8DirectQuestionsLabel,
    sec8ValidateBtn: ui.quizBadge,
    sec9Sub: ui.tocConclusion,
    sec9Deduction: ui.tocConclusion,
    sec9Takeaway: ui.tocConclusion,
    sec9Punchline: ui.tocConclusion,
    toastCopySuccess: ui.toastSectionCopied,
    quizBravo: ui.quizFeedbackCorrect,
    quizIncorrect: ui.quizFeedbackIncorrect,
    navBarbahari: ui.footerBtnPortal,
    navContact: ui.footerBtnContact,
    navLicense: ui.footerBtnLegal,
    sidebarSadaqaHeader: ui.legalSharingMain,
    sidebarSadaqaText: ui.legalSharingP1,
    labelAuthor: ui.contactAuthorHeader,
    btnSidebarHome: ui.sidebarHome,
    btnSidebarContact: ui.sidebarContact,
    sidebarPreface: ui.navPreface,
    sidebarIntro: ui.navIntro,
    shareCopyLink: ui.toastLinkCopied
  };

  for (const [key, value] of Object.entries(defaults)) {
    if (ui[key] === undefined || ui[key] === null || ui[key] === '') ui[key] = value;
  }
  if (!toolbox.goldenRuleStatement) toolbox.goldenRuleStatement = goldenStatements[code];

  // Several compiler generations kept a French verse when the same Arabic
  // verse had already been translated elsewhere in the target pack. Resolve
  // those duplicates from the target pack itself; never use `v.fr` as a
  // rendered fallback.
  const isFrenchLeak = value => typeof value === 'string' && /Obéissez à Allah|Afin que tu exposes|Vous avez certes|Et vers toi, Nous avons fait descendre|Que ceux qui s'opposent|Jusqu'à ce qu'ils te prennent|Non ! Par ton Seigneur|Il n'appartient pas à un croyant|Il leur rend licites|Il vous récite Nos versets|En quel discours|Et il ne prononce rien|Et s'il avait forgé/i.test(value);
  const translatedByArabic = new Map();
  const allVerses = [];
  for (const argument of pack.arguments || []) {
    for (const section of [argument.theirArgument, argument.quranicArchitecture]) {
      for (const verse of section?.verses || []) {
        allVerses.push(verse);
        if (verse.ar && verse.translation && !isFrenchLeak(verse.translation)) translatedByArabic.set(verse.ar, verse.translation);
      }
    }
  }
  for (const verse of allVerses) {
    if (isFrenchLeak(verse.translation) && translatedByArabic.has(verse.ar)) verse.translation = translatedByArabic.get(verse.ar);
    if (isFrenchLeak(verse.translation) && reviewedVerseTranslations[code]?.[verse.ar]) verse.translation = reviewedVerseTranslations[code][verse.ar];
  }

  if (code === 'it') {
    for (const argument of pack.arguments || []) {
      for (const verse of argument.quranicArchitecture?.verses || []) {
        if (italianVerses[verse.ref]) verse.translation = italianVerses[verse.ref];
      }
    }
    ui.contactBookTitleValue = 'Come smascherare e confutare la setta dei coranisti — Metodo, argomenti, obiezioni e risposte';
  }
  if (['de', 'pt', 'ku', 'ce'].includes(code) && ui.legalCreditsBookTitle) {
    ui.contactBookTitleValue = ui.legalCreditsBookTitle;
  }
  if (code === 'es') {
    ui.contactBookTitleValue = 'Cómo desenmascarar y refutar a la secta de los coranistas — Método, argumentos, objeciones y respuestas';
    for (const argument of pack.arguments || []) {
      if (argument.theirArgument?.title === 'Tesis de los coranistes:') argument.theirArgument.title = 'Tesis de los coranistas:';
    }
    ui.cardAdverseThesisPrefix = 'Tesis de los coranistas:';
    // IDs are functional references, not localized labels. Keep the existing
    // canonical IDs so fallacy badges resolve identically in every locale.
    const strawMan = toolbox.items?.find(item => item.id === 'epouvantail');
    if (strawMan) strawMan.id = 'homme-de-paille';
    for (const [index, argument] of (pack.arguments || []).entries()) {
      const canonicalSlug = canonicalSlugs[index];
      if (argument.slug && argument.slug !== canonicalSlug) argument.slug = canonicalSlug;
      if (Array.isArray(argument.fallacies)) {
        argument.fallacies = argument.fallacies.map(id => id === 'epouvantail' ? 'homme-de-paille' : id);
      }
    }
  }

  const output = `/** Generated by scripts/repair_i18n_contract.cjs; do not hand-edit schema aliases. */\nwindow.I18N_DATA = window.I18N_DATA || {};\nwindow.I18N_DATA[${JSON.stringify(code)}] = ${JSON.stringify(pack, null, 2)};\n`;
  fs.writeFileSync(file, output, 'utf8');
  console.log(`repaired ${code}`);
}
