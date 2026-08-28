/**
 * NETTOYAGE FINAL DES LIGNES ANGLAISES DANS TA.JS (TAMIL)
 */

const fs = require('fs');
const path = require('path');

const taPath = path.join(__dirname, '..', '..', 'js', 'translations', 'ta.js');
let content = fs.readFileSync(taPath, 'utf8');

const replacements = [
  {
    target: `"portalQuoteTransLabel": "Translation of the meaning:",`,
    replace: `"portalQuoteTransLabel": "கருத்து மொழிபெயர்ப்பு:",`
  },
  {
    target: `"portalQuoteText": "If you hear a man who, upon having an athar (transmitted tradition) cited to him, rejects it saying: \\"Leave this and bring us the Quran\\", do not doubt that he is a man steeped in heresy. Stand up and leave his gathering!",`,
    replace: `"portalQuoteText": "ஒரு மனிதரிடம் நபிமொழி அல்லது ஓர் ஆதாரம் முன்வைக்கப்படும் போது, அவர் அதை நிராகரித்து \\"இதை விட்டுவிட்டு எங்களிடம் திருக்குர்ஆனை மட்டும் கொண்டு வாருங்கள்\\" என்று கூறுவதை நீங்கள் கேட்டால், அவர் வழிகேட்டிலும் பித்அத்திலும் மூழ்கியுள்ளார் என்பதில் சிறிதும் சந்தேகப்படாதீர்கள். அவரது அவையிலிருந்து எழுந்து அவரை விட்டும் விலகிவிடுங்கள்!",`
  },
  {
    target: `"contactAuthorHeader": "Author of the Manual",`,
    replace: `"contactAuthorHeader": "நூலாசிரியர்",`
  },
  {
    target: `"Downloading, printing, reading, and free sharing of the factsheets.",`,
    replace: `"ஆய்வுத் தாள்களை இலவசமாகப் பதிவிறக்குதல், அச்சிடுதல், வாசித்தல் மற்றும் பகிர்ந்துகொள்ளுதல்.",`
  },
  {
    target: `"Use in study circles, courses, debates, and social networks.",`,
    replace: `"வகுப்புகள், ஆய்வுக் கூடங்கள், விவாதங்கள் மற்றும் சமூக ஊடகங்களில் பயன்படுத்துதல்.",`
  },
  {
    target: `"Any commercial exploitation or distorting alteration is strictly prohibited without prior permission."`,
    replace: `"முன் அனுமதியின்றி வணிக ரீதியான பயன்பாடோ அல்லது நூலின் உள்ளடக்கத்தை மாற்றுவதோ முற்றிலும் தடைசெய்யப்பட்டுள்ளது."`
  },
  {
    target: `"legalPrivacyBullet2": "Fonts & resources: Secure loading of Google Fonts.",`,
    replace: `"legalPrivacyBullet2": "எழுத்துருக்கள் மற்றும் வளங்கள்: கூகுள் எழுத்துருக்களின் பாதுகாப்பான ஏற்றுதல்.",`
  },
  {
    target: `"legalCreditsBookTitle": "How to Expose and Refute the Quranist Sect",`,
    replace: `"legalCreditsBookTitle": "குர்ஆனியர்கள் பிரிவை எவ்வாறு அம்பலப்படுத்தி மறுப்பது — வழிமுறை, வாதங்கள் மற்றும் பதில்கள்",`
  },
  {
    target: `"footerSubtitle": "10 major arguments examined and methodically refuted",`,
    replace: `"footerSubtitle": "10 முக்கிய வாதங்கள் முறையாக ஆராயப்பட்டு மறுக்கப்பட்டுள்ளன",`
  },
  {
    target: `"footerBtnPortal": "📜 Words of Al-Barbahârî",`,
    replace: `"footerBtnPortal": "📜 இமாம் அல்-பர்பஹாரியின் பொன்மொழி",`
  },
  {
    target: `"fallaciesBadgeTitle": "FALLACIES DETECTED IN THIS ARGUMENT:",`,
    replace: `"fallaciesBadgeTitle": "இவ்வாதத்தில் கண்டறியப்பட்ட தர்க்கப் பிழைகள் :",`
  },
  {
    target: `"btnOpenToolbox": "Open in Fallacy Toolbox",`,
    replace: `"btnOpenToolbox": "கருவிப்பெட்டியில் காண்க",`
  },
  {
    target: `"Were there not weak narrations and human errors in transmission?",`,
    replace: `"அறிவிப்பில் பலவீனமான செய்திகளும் மனிதத் தவறுகளும் இருக்கவில்லையா?",`
  },
  {
    target: `"The science of Hadith terminology and biographical evaluation established the most rigorous historical verification system in human history, isolating errors and safeguarding divine guidance."`,
    replace: `"ஹதீஸ் கலை மற்றும் அறிவிப்பாளர் மதிப்பீட்டு அறிவியல் மனித வரலாற்றிலேயே மிகவும் கடுமையான சரிபார்ப்பு முறையை நிறுவி, தவறுகளைப் பிரித்தெடுத்து வழிகாட்டலைப் பாதுகாத்தது."`
  },
  {
    target: `"The goal is not to memorize obscure jargon, but to pinpoint exactly where an argument ceases to be logically sound.",`,
    replace: `"நோக்கம் கலைச்சொற்களை மனனம் செய்வதல்ல, மாறாக ஒரு வாதம் எங்கே தர்க்கரீதியாகப் பலவீனமடைகிறது என்பதைத் துல்லியமாகக் கண்டறிவதாகும்.",`
  },
  {
    target: `"Exposing a flaw in reasoning merely demonstrates that the argument presented is insufficient to establish its conclusion.",`,
    replace: `"ஒரு தர்க்கப் பிழையை வெளிப்படுத்துவது என்பது முன்வைக்கப்பட்ட வாதம் முடிவை நிரூபிக்கப் போதாது என்பதையே காட்டுகிறது.",`
  },
  {
    target: `"If someone says: “All swans are white because I have observed ten white swans,” the deduction is flawed (ten observations cannot establish a universal law). However, pointing out this generalization does not prove that black swans exist; it merely calls for valid evidence.",`,
    replace: `"«பத்து வெள்ளை அன்னப்பறவைகளைப் பார்த்ததால் அனைத்து அன்னப்பறவைகளும் வெள்ளையே» என்று ஒருவர் கூறினால், அது ஒரு பொதுமைப்படுத்தல் பிழையாகும். ஆனால் அதைச் சுட்டிக்காட்டுவது கருப்பு அன்னப்பறவைகள் இருப்பதை நிரூபித்துவிடாது; தகுந்த ஆதாரத்தைக் கோருகிறது.",`
  },
  {
    target: `"Never replace bad reasoning with another faulty claim. In debate, simply crying “fallacy!” is never enough: one must explicitly demonstrate which logical link is missing or which term has shifted in meaning.",`,
    replace: `"தவறான வாதத்திற்குப் பதிலாக மற்றொரு தவறான கூற்றை வைக்காதீர்கள். விவாதத்தில் வெறும் «தர்க்கப் பிழை!» எனக் கூறுவது போதாது: விடுபட்ட தர்க்க இணைப்பு எது என்பதைத் தெளிவாக விளக்க வேண்டும்.",`
  }
];

replacements.forEach(r => {
  content = content.replace(r.target, r.replace);
});

// Supprimer les parenthèses anglaises dans ta.js
content = content.replace(/ \(False Dilemma\)/g, "");
content = content.replace(/ \(Hasty Generalization\)/g, "");
content = content.replace(/ \(Straw Man\)/g, "");
content = content.replace(/ \(Non Sequitur\)/g, "");
content = content.replace(/ \(Cherry-picking\)/g, "");
content = content.replace(/ \(Double Standard\)/g, "");
content = content.replace(/ \(Equivocation\)/g, "");
content = content.replace(/ \(Possibility Fallacy\)/g, "");
content = content.replace(/ \(Shifting Burden of Proof\)/g, "");
content = content.replace(/ \(Appeal to Emotion\)/g, "");

fs.writeFileSync(taPath, content, 'utf8');
console.log('✅ ta.js nettoyé à 100% de tout anglais !');
