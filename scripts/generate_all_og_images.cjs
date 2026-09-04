/**
 * Générateur automatisé de bannières Open Graph HD (1200x675) pour les 13 langues
 * Utilise Headless Chrome pour un rendu typographique et graphique parfait.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT_DIR = path.join(__dirname, '..');
const ASSETS_DIR = path.join(ROOT_DIR, 'assets');
const TRANSLATIONS_DIR = path.join(ROOT_DIR, 'js', 'translations');
const COVER_PATH = path.join(ROOT_DIR, 'couverture livre.png');

if (!fs.existsSync(ASSETS_DIR)) {
  fs.mkdirSync(ASSETS_DIR, { recursive: true });
}

// Convertir les couvertures en base64
const ARABIC_COVER_PATH = path.join(ROOT_DIR, 'couverture_arabe.png');
const defaultCoverBase64 = fs.existsSync(COVER_PATH) 
  ? `data:image/png;base64,${fs.readFileSync(COVER_PATH).toString('base64')}` 
  : '';
const arabicCoverBase64 = fs.existsSync(ARABIC_COVER_PATH)
  ? `data:image/png;base64,${fs.readFileSync(ARABIC_COVER_PATH).toString('base64')}`
  : defaultCoverBase64;

const CHROME_PATH = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
if (!fs.existsSync(CHROME_PATH)) {
  console.error("Chrome introuvable à l'emplacement standard.");
  process.exit(1);
}

const LANG_CONFIGS = [
  { code: 'fr', flag: '🇫🇷', pill1: '10 Arguments Réfutés', pill2: 'Livre PDF Offert', pill3: '100% Gratuit' },
  { code: 'ar', flag: '🇸🇦', pill1: '١٠ شبهات مفندة', pill2: 'كتاب PDF مجاني', pill3: 'دفاعاً عن السنة' },
  { code: 'ary', flag: '🇲🇦', pill1: '10 شبهات مفندة', pill2: 'كتاب PDF فابور', pill3: 'دفاعاً على السنة' },
  { code: 'en', flag: '🇬🇧', pill1: '10 Refuted Arguments', pill2: 'Free PDF Book', pill3: 'Defending the Sunnah' },
  { code: 'es', flag: '🇪🇸', pill1: '10 Argumentos Refutados', pill2: 'Libro PDF Gratuito', pill3: 'Defensa de la Sunna' },
  { code: 'de', flag: '🇩🇪', pill1: '10 Widerlegte Argumente', pill2: 'Kostenloses PDF-Buch', pill3: 'Verteidigung der Sunna' },
  { code: 'it', flag: '🇮🇹', pill1: '10 Argomenti Confutati', pill2: 'Libro PDF Gratuito', pill3: 'Difesa della Sunna' },
  { code: 'pt', flag: '🇵🇹', pill1: '10 Argumentos Refutados', pill2: 'Livro PDF Gratuito', pill3: 'Defesa da Sunnah' },
  { code: 'ur', flag: '🇵🇰', pill1: '١٠ شبہات کا رد', pill2: 'مفت پی ڈی ایف کتاب', pill3: 'دفاع سنت' },
  { code: 'ta', flag: '🇮🇳', pill1: '10 மறுக்கப்பட்ட வாதங்கள்', pill2: 'இலவச PDF நூல்', pill3: 'சுன்னாவின் பாதுகாப்பு' },
  { code: 'ps', flag: '🇦🇫', pill1: '۱۰ رد شوي شبهات', pill2: 'وړیا PDF کتاب', pill3: 'د سنت دفاع' },
  { code: 'ku', flag: '🇹🇷', pill1: '10 Delîlên Betalkirî', pill2: 'Pirtûka PDF Belaş', pill3: 'Parastina Sunnetê' },
  { code: 'ce', flag: '🇷🇺', pill1: '10 Бакъдоцург дастаран', pill2: 'Маьхза PDF книга', pill3: 'Суннат лардар' }
];

console.log("🚀 Démarrage de la génération des bannières Open Graph pour les 13 langues...\n");

LANG_CONFIGS.forEach(item => {
  const code = item.code;
  const transFile = path.join(TRANSLATIONS_DIR, `${code}.js`);
  if (!fs.existsSync(transFile)) {
    console.warn(`[WARN] Fichier traduction ${code}.js introuvable.`);
    return;
  }

  const raw = fs.readFileSync(transFile, 'utf8');
  const sandbox = {};
  new Function('window', 'sandbox', raw + `\nsandbox.DATA = window.I18N_DATA["${code}"];`)({}, sandbox);
  const pack = sandbox.DATA;
  if (!pack || !pack.ui) return;

  const ui = pack.ui;
  const dir = pack.dir || (['ar', 'ary', 'ur', 'ps'].includes(code) ? 'rtl' : 'ltr');
  const isRtl = dir === 'rtl';

  const brandBadge = ui.brandBadge || (isRtl ? "دليل منهجي" : "MANUEL PRATIQUE");
  const brandTitle = ui.brandTitle || (isRtl ? "رد على القرآنيين" : "RÉFUTATION DU CORANISME");
  const brandSubtitle = ui.brandSubtitle || (isRtl ? "كيف تكشف وترد على شبهات منكري السنة النبوية" : "Comment démasquer et réfuter la secte des coranistes");
  const author = "Salah Eddine Ahmed (Abou Soulaymane)";
  const bookName = "Le Coraniste Repenti";

  // Police selon la langue
  let fontFamily = "'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
  if (['ar', 'ary'].includes(code)) {
    fontFamily = "'Noto Naskh Arabic', 'Traditional Arabic', Tahoma, sans-serif";
  } else if (code === 'ur') {
    fontFamily = "'Noto Nastaliq Urdu', 'Jameel Noori Nastaleeq', 'Urdu Typesetting', Tahoma, sans-serif";
  } else if (code === 'ta') {
    fontFamily = "'Noto Sans Tamil', 'Latha', 'Tamil Sangam MN', sans-serif";
  } else if (code === 'ps') {
    fontFamily = "'Noto Naskh Arabic', 'Bahij Pashto', Tahoma, sans-serif";
  }

  const tempHtmlPath = path.join(__dirname, `temp_og_${code}.html`);
  const outputPngPath = path.join(ASSETS_DIR, `og-image-${code}.jpg`);

  const currentCoverBase64 = (code === 'ar' || code === 'ary') ? arabicCoverBase64 : defaultCoverBase64;

  const htmlContent = `<!DOCTYPE html>
<html lang="${code}" dir="${dir}">
<head>
  <meta charset="UTF-8">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700;900&family=Outfit:wght@400;600;700;800;900&family=Noto+Naskh+Arabic:wght@600;700;800;900&family=Noto+Nastaliq+Urdu:wght@700&family=Noto+Sans+Tamil:wght@600;700;800&display=swap');

    * { box-sizing: border-box; margin: 0; padding: 0; }
    
    body {
      width: 1200px;
      height: 675px;
      overflow: hidden;
      background-color: #0B1120;
      background-image: 
        radial-gradient(circle at ${isRtl ? '25%' : '75%'} 50%, rgba(254, 209, 0, 0.16) 0%, rgba(15, 23, 42, 0.95) 60%),
        radial-gradient(circle at 50% 0%, rgba(30, 41, 59, 0.6) 0%, transparent 70%);
      font-family: ${fontFamily};
      color: #FFFFFF;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 50px 70px;
      position: relative;
    }

    /* Cadre doré extérieur */
    .outer-border {
      position: absolute;
      top: 20px;
      left: 20px;
      right: 20px;
      bottom: 20px;
      border: 2px solid rgba(254, 209, 0, 0.4);
      border-radius: 20px;
      pointer-events: none;
      box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.6);
    }

    /* Décoration coins */
    .corner-decor {
      position: absolute;
      width: 18px;
      height: 18px;
      border-color: #FED100;
      border-style: solid;
    }
    .c-tl { top: 28px; left: 28px; border-width: 3px 0 0 3px; }
    .c-tr { top: 28px; right: 28px; border-width: 3px 3px 0 0; }
    .c-bl { bottom: 28px; left: 28px; border-width: 0 0 3px 3px; }
    .c-br { bottom: 28px; right: 28px; border-width: 0 3px 3px 0; }

    .content-side {
      flex: 1;
      max-width: 680px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 18px;
      z-index: 2;
    }

    .badge-row {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .main-badge {
      background: #FED100;
      color: #000000;
      font-weight: 900;
      font-size: 15px;
      padding: 6px 16px;
      border-radius: 6px;
      letter-spacing: 1px;
      text-transform: uppercase;
      box-shadow: 0 4px 12px rgba(254, 209, 0, 0.35);
    }

    .flag-badge {
      font-size: 26px;
      display: inline-flex;
      align-items: center;
    }

    .title {
      font-family: ${['ar', 'ary', 'ur', 'ps'].includes(code) ? fontFamily : "'Cinzel', 'Outfit', serif"};
      font-weight: 900;
      font-size: ${brandTitle.length > 30 ? '38px' : '48px'};
      line-height: 1.15;
      color: #FED100;
      text-shadow: 0 4px 15px rgba(0, 0, 0, 0.8), 0 0 25px rgba(254, 209, 0, 0.3);
      letter-spacing: ${isRtl ? '0' : '0.5px'};
    }

    .subtitle {
      font-size: 21px;
      font-weight: 600;
      line-height: 1.4;
      color: #E2E8F0;
      text-shadow: 0 2px 8px rgba(0, 0, 0, 0.7);
    }

    .author-box {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: rgba(15, 23, 42, 0.75);
      border: 1.5px solid rgba(254, 209, 0, 0.35);
      padding: 8px 18px;
      border-radius: 9999px;
      width: fit-content;
      color: #F1F5F9;
      font-weight: 700;
      font-size: 16px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
    }

    .pills-row {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 6px;
    }

    .pill {
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.2);
      padding: 6px 14px;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 700;
      color: #CBD5E1;
    }

    .pill-gold {
      background: rgba(254, 209, 0, 0.15);
      border-color: rgba(254, 209, 0, 0.5);
      color: #FED100;
    }

    .domain-tag {
      font-size: 15px;
      font-weight: 800;
      color: #94A3B8;
      letter-spacing: 0.5px;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    /* Côté visuel 3D du livre */
    .visual-side {
      width: 360px;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 2;
      position: relative;
    }

    .book-3d-wrap {
      position: relative;
      transform: perspective(1000px) rotateY(${isRtl ? '18deg' : '-18deg'}) rotateX(6deg);
      transition: transform 0.5s;
    }

    .book-cover-img {
      width: 250px;
      height: 365px;
      object-fit: cover;
      border-radius: 8px 14px 14px 8px;
      box-shadow: 
        ${isRtl ? '15px' : '-15px'} 20px 40px rgba(0, 0, 0, 0.85),
        0 0 35px rgba(254, 209, 0, 0.35);
      border: 2px solid rgba(254, 209, 0, 0.6);
      display: block;
    }

    .book-free-badge {
      position: absolute;
      top: -12px;
      ${isRtl ? 'left: -12px;' : 'right: -12px;'}
      background: #FED100;
      color: #000;
      font-weight: 900;
      font-size: 12px;
      padding: 6px 12px;
      border-radius: 9999px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
      text-transform: uppercase;
      letter-spacing: 0.5px;
      border: 2px solid #000;
    }
  </style>
</head>
<body>
  <div class="outer-border"></div>
  <div class="corner-decor c-tl"></div>
  <div class="corner-decor c-tr"></div>
  <div class="corner-decor c-bl"></div>
  <div class="corner-decor c-br"></div>

  <div class="content-side">
    <div class="badge-row">
      <span class="main-badge">${brandBadge}</span>
      <span class="flag-badge">${item.flag}</span>
    </div>

    <div class="title">${brandTitle}</div>
    <div class="subtitle">${brandSubtitle}</div>

    <div class="author-box">
      <span>✍️</span>
      <span>${author}</span>
    </div>

    <div class="pills-row">
      <span class="pill pill-gold">✨ ${item.pill1}</span>
      <span class="pill">📥 ${item.pill2}</span>
      <span class="pill">🛡️ ${item.pill3}</span>
    </div>

    <div class="domain-tag">
      <span>🌐</span>
      <span>anti-coranisme.novaskill.tech/${code}</span>
    </div>
  </div>

  <div class="visual-side">
    <div class="book-3d-wrap">
      <img class="book-cover-img" src="${currentCoverBase64}" alt="Livre">
      <div class="book-free-badge">${(code === 'ar' || code === 'ary') ? 'كتاب مجاني' : 'PDF Gratuit'}</div>
    </div>
  </div>
</body>
</html>`;

  fs.writeFileSync(tempHtmlPath, htmlContent, 'utf8');

  try {
    const fileUrl = `file:///${tempHtmlPath.replace(/\\/g, '/')}`;
    const cmd = `"${CHROME_PATH}" --headless --disable-gpu --window-size=1200,675 --screenshot="${outputPngPath}" "${fileUrl}"`;
    execSync(cmd, { stdio: 'ignore' });
    console.log(`[OK] Vignette Open Graph générée : assets/og-image-${code}.jpg (${pack.name})`);
  } catch (err) {
    console.error(`[ERR] Erreur de génération pour ${code}:`, err.message);
  } finally {
    if (fs.existsSync(tempHtmlPath)) fs.unlinkSync(tempHtmlPath);
  }
});

// Générer également og-image.jpg par défaut (copie du français)
const defaultOg = path.join(ASSETS_DIR, 'og-image-fr.jpg');
const mainOg = path.join(ASSETS_DIR, 'og-image.jpg');
const rootOg = path.join(ROOT_DIR, 'og-image.jpg');
if (fs.existsSync(defaultOg)) {
  fs.copyFileSync(defaultOg, mainOg);
  fs.copyFileSync(defaultOg, rootOg);
  console.log("\n[OK] og-image.jpg racine mis à jour avec la version standard.");
}

console.log("\n🎉 Génération complète de toutes les bannières Open Graph terminée !");
