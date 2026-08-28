/**
 * Ajout des traductions du compteur de visites pour les 13 langues
 */

const fs = require('fs');
const path = require('path');

const TRANSLATIONS_DIR = path.join(__dirname, '..', 'js', 'translations');

const COUNTER_I18N = {
  fr: {
    footerVisitsLabel: "Visites totales :",
    footerVisitsPrivacy: "100% Anonyme • RGPD",
    footerVisitsTooltip: "Compteur de visites anonymisé et respectueux de la vie privée (RGPD - 0 cookie)"
  },
  ar: {
    footerVisitsLabel: "إجمالي الزيارات :",
    footerVisitsPrivacy: "مجهول ١٠٠٪ • آمن",
    footerVisitsTooltip: "عداد زيارات مجهول الهوية يحترم الخصوصية تماماً (صفر كوكيز)"
  },
  ary: {
    footerVisitsLabel: "مجموع الزيارات :",
    footerVisitsPrivacy: "مجهول 100% • خصوصية",
    footerVisitsTooltip: "عداد زيارات كيحترم الخصوصية 100% بلا كوكيز"
  },
  en: {
    footerVisitsLabel: "Total Visits:",
    footerVisitsPrivacy: "100% Anonymous • GDPR",
    footerVisitsTooltip: "Privacy-friendly anonymous visit counter (GDPR compliant - 0 cookies)"
  },
  es: {
    footerVisitsLabel: "Visitas totales:",
    footerVisitsPrivacy: "100% Anónimo • RGPD",
    footerVisitsTooltip: "Contador anónimo respetuoso con la privacidad (RGPD - 0 cookies)"
  },
  de: {
    footerVisitsLabel: "Gesamtbesuche:",
    footerVisitsPrivacy: "100% Anonym • DSGVO",
    footerVisitsTooltip: "Datenschutzkonformer, anonymisierter Besucherzähler (DSGVO - 0 Cookies)"
  },
  it: {
    footerVisitsLabel: "Visite totali:",
    footerVisitsPrivacy: "100% Anonimo • GDPR",
    footerVisitsTooltip: "Contatore anonimo conforme alla privacy (GDPR - 0 cookie)"
  },
  pt: {
    footerVisitsLabel: "Visitas totais:",
    footerVisitsPrivacy: "100% Anônimo • RGPD",
    footerVisitsTooltip: "Contador anônimo com privacidade garantida (RGPD - 0 cookies)"
  },
  ur: {
    footerVisitsLabel: "کل زیارتیں :",
    footerVisitsPrivacy: "١٠٠٪ گمنام • محفوظ",
    footerVisitsTooltip: "پرائیویسی دوست گمنام وزیٹر کاؤنٹر (بغیر کوکیز)"
  },
  ta: {
    footerVisitsLabel: "மொத்த வருகைகள்:",
    footerVisitsPrivacy: "100% அநாமதேய • GDPR",
    footerVisitsTooltip: "தனியுரிமைக்கு மதிப்பளிக்கும் பார்வையாளர் எண்ணிக்கை"
  },
  ps: {
    footerVisitsLabel: "ټول لیدونکي :",
    footerVisitsPrivacy: "۱۰۰٪ نامعلوم • خوندي",
    footerVisitsTooltip: "د لیدونکو پټ او خوندي شمېرونکی"
  },
  ku: {
    footerVisitsLabel: "Hemû Serdan:",
    footerVisitsPrivacy: "100% Anonîm • GDPR",
    footerVisitsTooltip: "Hejmara serdanan a parastî ya taybetmendiyê"
  },
  ce: {
    footerVisitsLabel: "Йукъара хьовсарш:",
    footerVisitsPrivacy: "100% Къайлаха • GDPR",
    footerVisitsTooltip: "Хьовсархойн къайлаха ларар"
  }
};

const LANG_CODES = Object.keys(COUNTER_I18N);

LANG_CODES.forEach(code => {
  const filePath = path.join(TRANSLATIONS_DIR, `${code}.js`);
  if (!fs.existsSync(filePath)) return;

  const raw = fs.readFileSync(filePath, 'utf8');
  const sandbox = {};
  new Function('window', 'sandbox', raw + `\nsandbox.DATA = window.I18N_DATA["${code}"];`)({}, sandbox);
  const pack = sandbox.DATA;
  if (!pack) return;

  const counterTrans = COUNTER_I18N[code] || COUNTER_I18N.en;
  pack.ui.footerVisitsLabel = counterTrans.footerVisitsLabel;
  pack.ui.footerVisitsPrivacy = counterTrans.footerVisitsPrivacy;
  pack.ui.footerVisitsTooltip = counterTrans.footerVisitsTooltip;

  const output = `/**
 * Pack de Langue : ${pack.name} (${pack.code.toUpperCase()}) - ${pack.native}
 * Traduction Exhaustive et Intégrale (UI, Préface, Intro, 10 Arguments, Boîte à Outils des Sophismes, Modales)
 */
window.I18N_DATA = window.I18N_DATA || {};
window.I18N_DATA['${pack.code}'] = ${JSON.stringify(pack, null, 2)};
`;
  fs.writeFileSync(filePath, output, 'utf8');
  console.log(`✅ Fichier js/translations/${code}.js mis à jour avec les clés du compteur.`);
});

console.log('\n🎉 Les 13 fichiers de traduction intègrent les libellés du compteur de visites.');
