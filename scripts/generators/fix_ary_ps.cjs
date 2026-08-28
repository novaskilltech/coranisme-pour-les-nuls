/**
 * NETTOYAGE ET CORRECTION DE ARY.JS (DARIJA) ET PS.JS (PACHTO)
 */

const fs = require('fs');
const path = require('path');

const TRANSLATIONS_DIR = path.join(__dirname, '..', '..', 'js', 'translations');

// 1. ARY.JS (DARIJA)
const aryPath = path.join(TRANSLATIONS_DIR, 'ary.js');
let aryContent = fs.readFileSync(aryPath, 'utf8');

const aryReplacements = [
  {
    target: `"portalQuoteTransLabel": "Translation of the meaning:",`,
    replace: `"portalQuoteTransLabel": "ترجمة المعنى بالدارجة:",`
  },
  {
    target: `"portalQuoteText": "If you hear a man who, upon having an athar (transmitted tradition) cited to him, rejects it saying: \\"Leave this and bring us the Quran\\", do not doubt that he is a man steeped in heresy. Stand up and leave his gathering!",`,
    replace: `"portalQuoteText": "إلا سمعتي شي راجل كيتجبد ليه الأثر (الحديث المروي) وهو كيرفضو وكيقول: \\"خلّي عليك هادشي وجيب لينا غي القرآن\\"، ما تشكش أبدًا بلي راه غارق فالبدعة والضلال. نوض من المجلس ديالو وبعد منو!",`
  },
  {
    target: `"contactAuthorHeader": "Author of the Manual",`,
    replace: `"contactAuthorHeader": "مولّف الكتاب",`
  },
  {
    target: `"Downloading, printing, reading, and free sharing of the factsheets.",`,
    replace: `"التيليشارجومون، الطباعة، القراءة، والبارطاج فابور ديال هاد الجذاذات.`,
  },
  {
    target: `"Use in study circles, courses, debates, and social networks.",`,
    replace: `"الاستعمال فالحلقات التعليمية، الدروس، النقاشات ومواقع التواصل الاجتماعي.`,
  },
  {
    target: `"Any commercial exploitation or distorting alteration is strictly prohibited without prior permission."`,
    replace: `"ممنوع منعا كليا أي استغلال تجاري أو تبديل وتحريف فالمحتوى بلا إذن مسبق."`
  },
  {
    target: `"legalPrivacyBullet2": "Fonts & resources: Secure loading of Google Fonts.",`,
    replace: `"legalPrivacyBullet2": "الخطوط والموارد: تحميل آمن من Google Fonts.",`
  },
  {
    target: `"legalCreditsBookTitle": "How to Expose and Refute the Quranist Sect",`,
    replace: `"legalCreditsBookTitle": "كيفاش تفضح وترد على فرقة القرآنيين — المنهج، الحجج، الشبهات والأجوبة",`
  },
  {
    target: `"footerSubtitle": "10 major arguments examined and methodically refuted",`,
    replace: `"footerSubtitle": "10 ديال الشبهات الكبار مفككين ومردود عليهم بالمنطق والدليل",`
  },
  {
    target: `"footerBtnPortal": "📜 Words of Al-Barbahârî",`,
    replace: `"footerBtnPortal": "📜 كلام الإمام البربهاري",`
  }
];

aryReplacements.forEach(r => {
  aryContent = aryContent.replace(r.target, r.replace);
});

aryContent = aryContent.replace(/ \(Straw Man\)/g, "");
aryContent = aryContent.replace(/ \(Non sequitur\)/g, "");
aryContent = aryContent.replace(/ \(Cherry-picking\)/g, "");
aryContent = aryContent.replace(/ \(Double standard\)/g, "");

fs.writeFileSync(aryPath, aryContent, 'utf8');
console.log('✅ ary.js nettoyé avec succès !');


// 2. PS.JS (PACHTO)
const psPath = path.join(TRANSLATIONS_DIR, 'ps.js');
let psContent = fs.readFileSync(psPath, 'utf8');

const psReplacements = [
  {
    target: `"portalQuoteTransLabel": "Translation of the meaning:",`,
    replace: `"portalQuoteTransLabel": "د مفهوم پښتو ژباړه:",`
  },
  {
    target: `"portalQuoteText": "If you hear a man who, upon having an athar (transmitted tradition) cited to him, rejects it saying: \\"Leave this and bring us the Quran\\", do not doubt that he is a man steeped in heresy. Stand up and leave his gathering!",`,
    replace: `"که تاسو کوم سړی واورئ چې د حدیث یا اثر په وړاندې کولو سره هغه رد کړي او ووایي: \\"دا پرېږده او یوازې قرآن راوړه\\"، نو هېڅ شک مه کوئ چې هغه په ګمراهۍ او بدعت کې ډوب شوی سړی دی. د هغه له مجلس څخه پاڅېږئ او ځان ترې لرې وساتئ!",`
  },
  {
    target: `"contactAuthorHeader": "Author of the Manual",`,
    replace: `"contactAuthorHeader": "د کتاب لیکوال",`
  },
  {
    target: `"Downloading, printing, reading, and free sharing of the factsheets.",`,
    replace: `"د مطالعې د پاڼو وړیا کښته کول، چاپول، لوستل او شریکول.`,
  },
  {
    target: `"Use in study circles, courses, debates, and social networks.",`,
    replace: `"په درسونو، علمي حلقو، بحثونو او ټولنیزو شبکو کې کارول.`,
  },
  {
    target: `"Any commercial exploitation or distorting alteration is strictly prohibited without prior permission."`,
    replace: `"له مخکینۍ اجازې پرته هر ډول سوداګریز کارول یا په متن کې بدلون راوستل په کلکه منع دي."`
  },
  {
    target: `"legalPrivacyBullet2": "Fonts & resources: Secure loading of Google Fonts.",`,
    replace: `"legalPrivacyBullet2": "فونټونه او سرچینې: د ګوګل فونټونو خوندي پورته کول.",`
  },
  {
    target: `"legalCreditsBookTitle": "How to Expose and Refute the Quranist Sect",`,
    replace: `"legalCreditsBookTitle": "د قرآنیانو ډلې رسوا کول او ردول — کړنلاره، دلایل او ځوابونه",`
  },
  {
    target: `"footerSubtitle": "10 major arguments examined and methodically refuted",`,
    replace: `"footerSubtitle": "۱۰ سترې شبهې چې په منطقي او مستند ډول رد شوې دي",`
  },
  {
    target: `"footerBtnPortal": "📜 Words of Al-Barbahârî",`,
    replace: `"footerBtnPortal": "📜 د امام بربهاري وینا",`
  }
];

psReplacements.forEach(r => {
  psContent = psContent.replace(r.target, r.replace);
});

psContent = psContent.replace(/ \(Straw Man\)/g, "");
psContent = psContent.replace(/ \(False Dilemma\)/g, "");
psContent = psContent.replace(/ \(Non Sequitur\)/g, "");
psContent = psContent.replace(/ \(Cherry-picking\)/g, "");

fs.writeFileSync(psPath, psContent, 'utf8');
console.log('✅ ps.js nettoyé avec succès !');
