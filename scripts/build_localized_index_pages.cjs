/**
 * Générateur de Pages Statiques Localisées pour chaque langue (/fr, /ar, /de, /en, etc.)
 * Garantit :
 * 1. Open Graph & Twitter Cards natifs par langue pour les partages WhatsApp, Twitter, Facebook, Telegram, etc.
 * 2. URL canoniques propres /${langCode} avec support complet des crawlers et bots de prévisualisation.
 * 3. Démarrage instantané dans la langue demandée sans portail intermédiaire.
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.join(__dirname, '..');
const TRANSLATIONS_DIR = path.join(ROOT_DIR, 'js', 'translations');
const BASE_HTML_PATH = path.join(ROOT_DIR, 'index.html');

const LOCALE_MAP = {
  fr: 'fr_FR',
  ar: 'ar_SA',
  ary: 'ar_MA',
  en: 'en_US',
  es: 'es_ES',
  de: 'de_DE',
  it: 'it_IT',
  pt: 'pt_PT',
  ur: 'ur_PK',
  ta: 'ta_IN',
  ps: 'ps_AF',
  ku: 'ku_TR',
  ce: 'ce_RU'
};

const LANG_CODES = Object.keys(LOCALE_MAP);

if (!fs.existsSync(BASE_HTML_PATH)) {
  console.error("Erreur : index.html introuvable !");
  process.exit(1);
}

const baseHtml = fs.readFileSync(BASE_HTML_PATH, 'utf8');

// Générer les balises hreflang complètes
const hreflangTags = LANG_CODES.map(code => 
  `  <link rel="alternate" hreflang="${code}" href="https://anti-coranisme.novaskill.tech/${code}">`
).join('\n') + '\n  <link rel="alternate" hreflang="x-default" href="https://anti-coranisme.novaskill.tech/">';

LANG_CODES.forEach(code => {
  const transPath = path.join(TRANSLATIONS_DIR, `${code}.js`);
  if (!fs.existsSync(transPath)) {
    console.warn(`[WARN] Fichier de traduction ${code}.js introuvable.`);
    return;
  }

  const rawTrans = fs.readFileSync(transPath, 'utf8');
  const sandbox = {};
  new Function('window', 'sandbox', rawTrans + `\nsandbox.DATA = window.I18N_DATA["${code}"];`)({}, sandbox);
  const pack = sandbox.DATA;
  if (!pack || !pack.ui) {
    console.warn(`[WARN] Données invalides pour ${code}`);
    return;
  }

  const ui = pack.ui;
  const dir = pack.dir || (['ar', 'ary', 'ur', 'ps'].includes(code) ? 'rtl' : 'ltr');
  const title = [ui.brandTitle, ui.brandSubtitle].filter(Boolean).join(' — ') || "Réfutation du Coranisme";
  const desc = ui.metaDescription || ui.heroDesc || ui.brandSubtitle || "Manuel pratique et méthodique de réfutation du coranisme et défense de la Sunna.";
  const siteName = ui.brandTitle || "Réfutation du Coranisme";
  const locale = LOCALE_MAP[code] || 'fr_FR';
  const canonicalUrl = `https://anti-coranisme.novaskill.tech/${code}`;

  let localizedHtml = baseHtml;

  // 1. Remplacement de la balise <html ...>
  localizedHtml = localizedHtml.replace(/<html[^>]*>/i, `<html lang="${code}" dir="${dir}">`);

  // 2. Injection de <base href="/"> dans le <head>
  if (!localizedHtml.includes('<base href="/">')) {
    localizedHtml = localizedHtml.replace('<head>', '<head>\n  <base href="/">');
  }

  // 3. Mise à jour du <title>
  localizedHtml = localizedHtml.replace(/<title>.*?<\/title>/i, `<title>${title}</title>`);

  // 4. Mise à jour des balises Meta Description
  localizedHtml = localizedHtml.replace(/<meta name="description" content=".*?">/i, `<meta name="description" content="${desc.replace(/"/g, '&quot;')}">`);

  const ogImageUrl = `https://anti-coranisme.novaskill.tech/assets/og-image-${code}.jpg`;

  // 5. Mise à jour des balises Open Graph
  localizedHtml = localizedHtml.replace(/<meta property="og:site_name" content=".*?">/i, `<meta property="og:site_name" content="${siteName.replace(/"/g, '&quot;')}">`);
  localizedHtml = localizedHtml.replace(/<meta property="og:title" content=".*?">/i, `<meta property="og:title" content="${title.replace(/"/g, '&quot;')}">`);
  localizedHtml = localizedHtml.replace(/<meta property="og:description" content=".*?">/i, `<meta property="og:description" content="${desc.replace(/"/g, '&quot;')}">`);
  localizedHtml = localizedHtml.replace(/<meta property="og:url" content=".*?">/i, `<meta property="og:url" content="${canonicalUrl}">`);
  localizedHtml = localizedHtml.replace(/<meta property="og:locale" content=".*?">/i, `<meta property="og:locale" content="${locale}">`);
  localizedHtml = localizedHtml.replace(/<meta property="og:image" content=".*?">/i, `<meta property="og:image" content="${ogImageUrl}">`);
  localizedHtml = localizedHtml.replace(/<meta property="og:image:secure_url" content=".*?">/i, `<meta property="og:image:secure_url" content="${ogImageUrl}">`);
  
  // 6. Mise à jour des balises Twitter & Microdata
  localizedHtml = localizedHtml.replace(/<meta name="twitter:title" content=".*?">/i, `<meta name="twitter:title" content="${title.replace(/"/g, '&quot;')}">`);
  localizedHtml = localizedHtml.replace(/<meta name="twitter:description" content=".*?">/i, `<meta name="twitter:description" content="${desc.replace(/"/g, '&quot;')}">`);
  localizedHtml = localizedHtml.replace(/<meta name="twitter:image" content=".*?">/i, `<meta name="twitter:image" content="${ogImageUrl}">`);
  localizedHtml = localizedHtml.replace(/<meta itemprop="image" content=".*?">/i, `<meta itemprop="image" content="${ogImageUrl}">`);
  localizedHtml = localizedHtml.replace(/<link rel="image_src" href=".*?">/i, `<link rel="image_src" href="${ogImageUrl}">`);

  // 7. Canonical & Hreflang
  localizedHtml = localizedHtml.replace(/<link rel="canonical" href=".*?">/i, `<link rel="canonical" href="${canonicalUrl}">\n${hreflangTags}`);

  // 8. Injection du script de démarrage spécifique à la langue
  const initScript = `
  <!-- Initialisation directe dans la langue ${code.toUpperCase()} -->
  <script>
    window.INITIAL_PAGE_LANG = "${code}";
    try { sessionStorage.setItem('has_closed_gateway', 'true'); } catch(e) {}
  </script>
  <script src="js/translations/${code}.js?v=2.7"></script>
`;

  localizedHtml = localizedHtml.replace('<script src="js/data.js?v=2.5"></script>', `${initScript}  <script src="js/data.js?v=2.5"></script>`);

  // 9. Écriture dans le dossier de langue
  const langDir = path.join(ROOT_DIR, code);
  if (!fs.existsSync(langDir)) {
    fs.mkdirSync(langDir, { recursive: true });
  }

  const outputPath = path.join(langDir, 'index.html');
  fs.writeFileSync(outputPath, localizedHtml, 'utf8');
  console.log(`[OK] Page générée pour /${code} (${pack.name} - ${pack.native}) -> ${outputPath}`);
});

console.log("\n✅ Toutes les pages localisées (/fr, /ar, /de, /en, etc.) ont été générées avec succès !");
