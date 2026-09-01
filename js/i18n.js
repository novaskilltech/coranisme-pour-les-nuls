/**
 * Module d'Internationalisation (i18n) - Réfutation du Coranisme
 * 11 langues sont publiées ; KU et CE restent en attente de relecture native.
 * Drapeaux vectoriels SVG haute fidélité pour un rendu parfait sur TOUS les systèmes (Windows, Mac, Linux, iOS, Android).
 * Gestion LTR / RTL, persistance et mise à jour DOM dynamique complète.
 */

const I18N_LANGUAGES = [
  { 
    code: 'fr', 
    name: 'Français', 
    native: 'Français', 
    flagSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag-icon"><g fill-rule="evenodd" stroke-width="1pt"><path fill="#fff" d="M0 0h640v480H0z"/><path fill="#00267f" d="M0 0h213.3v480H0z"/><path fill="#f31830" d="M426.7 0H640v480H426.7z"/></g></svg>`,
    dir: 'ltr' 
  },
  { 
    code: 'ar', 
    name: 'Arabe', 
    native: 'العربية', 
    flagSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag-icon"><path fill="#006c35" d="M0 0h640v480H0z"/><path fill="#fff" d="M140 280h360v20H140zm220-40c-25 0-45-18-45-40s20-40 45-40 45 18 45 40-20 40-45 40z"/><path fill="#fff" d="M220 310l200-5-20 20-180-15z"/></svg>`,
    dir: 'rtl' 
  },
  { 
    code: 'ary', 
    name: 'Darija', 
    native: 'الدارجة المغربية', 
    flagSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag-icon"><path fill="#c1272d" d="M0 0h640v480H0z"/><path fill="none" stroke="#006233" stroke-width="22" stroke-linejoin="round" d="m320 150 40 120-100-75h120l-100 75z"/></svg>`,
    dir: 'rtl' 
  },
  { 
    code: 'en', 
    name: 'English', 
    native: 'English', 
    flagSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag-icon"><path fill="#012169" d="M0 0h640v480H0z"/><path fill="#fff" d="m75 0 245 180L565 0h75v50L440 200l200 150v50h-75L320 220 75 400H0v-50l200-150L0 50V0h75z"/><path fill="#c8102e" d="m424 280 216 160v40L370 280h54zM640 0v10L420 175h-50L640 0zM0 480v-10l220-165h50L0 480zm0-480 270 200h-54L0 40V0z"/><path fill="#fff" d="M240 0h160v480H240zM0 160h640v160H0z"/><path fill="#c8102e" d="M267 0h106v480H267zM0 187h640v106H0z"/></svg>`,
    dir: 'ltr' 
  },
  { 
    code: 'es', 
    name: 'Espagnol', 
    native: 'Español', 
    flagSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag-icon"><path fill="#aa151b" d="M0 0h640v480H0z"/><path fill="#f1bf00" d="M0 120h640v240H0z"/><rect x="150" y="190" width="40" height="55" rx="10" fill="#aa151b"/><circle cx="170" cy="180" r="12" fill="#aa151b"/></svg>`,
    dir: 'ltr' 
  },
  { 
    code: 'de', 
    name: 'Allemand', 
    native: 'Deutsch', 
    flagSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag-icon"><path fill="#ffce00" d="M0 320h640v160H0z"/><path fill="#000" d="M0 0h640v160H0z"/><path fill="#d00" d="M0 160h640v160H0z"/></svg>`,
    dir: 'ltr' 
  },
  { 
    code: 'it', 
    name: 'Italien', 
    native: 'Italiano', 
    flagSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag-icon"><path fill="#009246" d="M0 0h213.3v480H0z"/><path fill="#fff" d="M213.3 0h213.4v480H213.3z"/><path fill="#ce2b37" d="M426.7 0H640v480H426.7z"/></svg>`,
    dir: 'ltr' 
  },
  { 
    code: 'pt', 
    name: 'Portugais', 
    native: 'Português', 
    flagSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag-icon"><path fill="#ff0000" d="M240 0h400v480H240z"/><path fill="#006600" d="M0 0h240v480H0z"/><circle cx="240" cy="240" r="60" fill="#ffff00"/><circle cx="240" cy="240" r="45" fill="#ffffff"/><rect x="230" y="210" width="20" height="30" fill="#00267f"/></svg>`,
    dir: 'ltr' 
  },
  { 
    code: 'ur', 
    name: 'Ourdou', 
    native: 'اردو', 
    flagSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag-icon"><path fill="#01411c" d="M160 0h480v480H160z"/><path fill="#fff" d="M0 0h160v480H0z"/><path fill="#fff" d="M410 160a90 90 0 1 0 70 145 75 75 0 1 1-70-145zm55 35 15 45 45-15-30 35 30 35-45-15-15 45-15-45-45 15 30-35-30-35 45 15z"/></svg>`,
    dir: 'rtl' 
  },
  { 
    code: 'ta', 
    name: 'Tamoul', 
    native: 'தமிழ்', 
    flagSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag-icon"><path fill="#f93" d="M0 0h640v160H0z"/><path fill="#fff" d="M0 160h640v160H0z"/><path fill="#128807" d="M0 320h640v160H0z"/><circle cx="320" cy="240" r="45" fill="none" stroke="#000080" stroke-width="8"/><circle cx="320" cy="240" r="10" fill="#000080"/></svg>`,
    dir: 'ltr' 
  },
  { 
    code: 'ps', 
    name: 'Pachto', 
    native: 'پښتو', 
    flagSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag-icon"><path fill="#000" d="M0 0h213.3v480H0z"/><path fill="#d32011" d="M213.3 0h213.4v480H213.3z"/><path fill="#007a3d" d="M426.7 0H640v480H426.7z"/><circle cx="320" cy="240" r="50" fill="none" stroke="#fff" stroke-width="10"/><path fill="#fff" d="M300 220h40v40h-40z"/></svg>`,
    dir: 'rtl' 
  },
  { 
    code: 'ku', 
    name: 'Kurde', 
    native: 'Kurdî', 
    flagSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag-icon"><path fill="#e4312b" d="M0 0h640v160H0z"/><path fill="#fff" d="M0 160h640v160H0z"/><path fill="#149e49" d="M0 320h640v160H0z"/><circle cx="320" cy="240" r="55" fill="#fec10d"/><g stroke="#fec10d" stroke-width="8"><line x1="320" y1="155" x2="320" y2="325"/><line x1="235" y1="240" x2="405" y2="240"/><line x1="260" y1="180" x2="380" y2="300"/><line x1="260" y1="300" x2="380" y2="180"/></g></svg>`,
    dir: 'ltr' 
  },
  { 
    code: 'ce', 
    name: 'Tchétchène', 
    native: 'Нохчийн', 
    flagSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="flag-icon"><path fill="#169b43" d="M0 0h640v280H0z"/><path fill="#fff" d="M0 280h640v40H0z"/><path fill="#d9241b" d="M0 320h640v160H0z"/><path fill="#fff" d="M0 0h100v480H0z"/><circle cx="50" cy="240" r="30" fill="#d4af37"/></svg>`,
    dir: 'ltr' 
  }
];

const LOCALE_POLICY = window.I18N_LOCALE_POLICY || {
  defaultLocale: 'fr',
  enabledLocales: ['fr', 'ar', 'ary', 'en', 'es', 'de', 'it', 'pt', 'ur', 'ta', 'ps'],
  pendingLocales: ['ku', 'ce']
};
const ENABLED_I18N_LANGUAGES = I18N_LANGUAGES.filter(language => LOCALE_POLICY.enabledLocales.includes(language.code));

window.CURRENT_LANG = LOCALE_POLICY.defaultLocale;
window.I18N_DATA = window.I18N_DATA || {};
let languageRequestId = 0;

/**
 * Initialisation du module i18n
 */
function initI18n() {
  renderLanguageSwitchers();
  bindLangEvents();

  // Détecter la langue enregistrée ou la langue du navigateur
  const savedLang = localStorage.getItem('refutation_lang');
  const browserLang = (navigator.language || navigator.userLanguage || 'fr').split('-')[0].toLowerCase();
  
  const initialLang = savedLang || (LOCALE_POLICY.enabledLocales.includes(browserLang) ? browserLang : LOCALE_POLICY.defaultLocale);
  
  setLanguage(initialLang, false);

  // Gestion de l'affichage du portail d'accueil (Language Gateway)
  const hasClosedGateway = sessionStorage.getItem('has_closed_gateway') === 'true';
  const hasDirectArgHash = window.location.hash && window.location.hash.startsWith('#arg-');

  const gatewayEl = document.getElementById('lang-gateway');
  if (gatewayEl) {
    if (hasClosedGateway || hasDirectArgHash) {
      gatewayEl.style.display = 'none';
      gatewayEl.style.opacity = '0';
      gatewayEl.style.pointerEvents = 'none';
    } else {
      gatewayEl.style.display = 'flex';
      gatewayEl.style.opacity = '1';
      gatewayEl.style.pointerEvents = 'auto';
    }
  }
}

/**
 * Rendu du sélecteur de langue (Topbar Header)
 */
function renderLanguageSwitchers() {
  const topbarMenu = document.getElementById('lang-dropdown-menu');
  if (topbarMenu) {
    topbarMenu.innerHTML = ENABLED_I18N_LANGUAGES.map(l => `
      <button class="lang-dropdown-item ${l.code === window.CURRENT_LANG ? 'active' : ''}" data-lang="${l.code}">
        <span class="lang-flag">${l.flagSvg}</span>
        <span class="lang-name">${l.native}</span>
        <span class="lang-code-badge">${l.code.toUpperCase()}</span>
      </button>
    `).join('');
  }
}

/**
 * Attachement des événements sur les sélecteurs de langue
 */
function bindLangEvents() {
  const triggerBtn = document.getElementById('btn-lang-trigger');
  const dropdownMenu = document.getElementById('lang-dropdown-menu');
  const selectorWrap = document.getElementById('lang-selector-wrap');

  if (triggerBtn && dropdownMenu) {
    triggerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = dropdownMenu.classList.toggle('open');
      triggerBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Fermer le dropdown en cliquant à l'extérieur
    document.addEventListener('click', (e) => {
      if (selectorWrap && !selectorWrap.contains(e.target)) {
        dropdownMenu.classList.remove('open');
        triggerBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Écouteur global pour sélection depuis le portail d'entrée (Gateway)
  document.addEventListener('click', (e) => {
    const gateBtn = e.target.closest('[data-gate-lang]');
    if (gateBtn) {
      const targetLang = gateBtn.getAttribute('data-gate-lang');
      if (targetLang) {
        setLanguage(targetLang, false);
        sessionStorage.setItem('has_closed_gateway', 'true');
        if (typeof window.closeLangGateway === 'function') {
          window.closeLangGateway();
        }
      }
      return;
    }

    const langBtn = e.target.closest('[data-lang]');
    if (langBtn) {
      const targetLang = langBtn.getAttribute('data-lang');
      if (targetLang && targetLang !== window.CURRENT_LANG) {
        setLanguage(targetLang, true);
      }
      if (dropdownMenu) {
        dropdownMenu.classList.remove('open');
        if (triggerBtn) triggerBtn.setAttribute('aria-expanded', 'false');
      }
    }
  });
}

/**
 * Changement de langue avec chargement dynamique et mise à jour du DOM
 */
function setLanguage(langCode, notify = true) {
  // A stale URL, localStorage value or programmatic request for KU/CE resolves
  // to the default published locale and never loads a pending pack.
  const langConfig = ENABLED_I18N_LANGUAGES.find(l => l.code === langCode)
    || ENABLED_I18N_LANGUAGES.find(l => l.code === LOCALE_POLICY.defaultLocale)
    || ENABLED_I18N_LANGUAGES[0];
  const actualCode = langConfig.code;
  const requestId = ++languageRequestId;

  // Charger le fichier de traduction s'il n'est pas encore en mémoire
  if (!window.I18N_DATA[actualCode]) {
    loadLangScript(actualCode, () => {
      if (requestId === languageRequestId) applyLanguage(langConfig, notify);
    });
  } else {
    applyLanguage(langConfig, notify);
  }
}

/**
 * Chargement dynamique d'un script de traduction
 */
function loadLangScript(code, callback) {
  const script = document.createElement('script');
  script.src = `js/translations/${code}.js`;
  script.onload = () => {
    if (callback) callback();
  };
  script.onerror = () => {
    console.error(`Erreur de chargement de la langue : ${code}`);
    // Keep the currently rendered locale: a failed request must not reveal
    // French content after the user selected another language.
  };
  document.body.appendChild(script);
}

/**
 * Application de la langue au DOM et réactualisation des vues
 */
function applyLanguage(langConfig, notify) {
  const code = langConfig.code;
  window.CURRENT_LANG = code;
  localStorage.setItem('refutation_lang', code);

  // Mise à jour de la direction et de la langue dans <html>
  document.documentElement.lang = code;
  document.documentElement.dir = langConfig.dir;

  // Mise à jour du drapeau SVG et du libellé dans le bouton de la topbar
  const currentFlag = document.querySelector('.lang-flag-current');
  const currentName = document.querySelector('.lang-name-current');
  if (currentFlag) currentFlag.innerHTML = langConfig.flagSvg;
  if (currentName) currentName.textContent = langConfig.native;

  // Mise à jour de l'état actif dans les sélecteurs
  document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === code);
  });

  const langPack = window.I18N_DATA[code];
  if (!langPack) return;

  // Mise à jour de la base de données active pour le routeur
  if (langPack.arguments && Array.isArray(langPack.arguments)) {
    window.ARGUMENTS_DATA = langPack.arguments;
  }

  // Mettre à jour les textes d'interface statiques
  updateStaticDOM(langPack.ui);
  updateLocalizedMetadata(langPack.ui, langConfig);

  // Réactualiser la navigation latérale et la vue courante
  if (typeof renderSidebarNav === 'function') {
    renderSidebarNav();
  }
  if (typeof handleRouting === 'function') {
    handleRouting();
  }

  // Si la modale des sophismes est ouverte, rafraîchir son contenu avec la nouvelle langue
  const fallacyModal = document.getElementById('fallacy-modal');
  if (fallacyModal && fallacyModal.classList.contains('open') && window.LAST_OPENED_FALLACY_ID && typeof window.openFallacyModal === 'function') {
    window.openFallacyModal(window.LAST_OPENED_FALLACY_ID);
  }

  // Notification Toast facultative
  if (notify && typeof showToast === 'function') {
    showToast(`${langConfig.native}`);
  }
}

function updateLocalizedMetadata(ui, langConfig) {
  const localeMap = { fr: 'fr_FR', ar: 'ar_AR', ary: 'ar_MA', en: 'en_US', es: 'es_ES', de: 'de_DE', it: 'it_IT', pt: 'pt_PT', ur: 'ur_PK', ta: 'ta_IN', ps: 'ps_AF', ku: 'ku_TR', ce: 'ce_RU' };
  const title = [ui.brandTitle, ui.brandSubtitle].filter(Boolean).join(' — ');
  const description = ui.metaDescription || ui.heroDesc || ui.brandSubtitle || '';
  const setMeta = (selector, value) => {
    const element = document.querySelector(selector);
    if (element && value) element.setAttribute('content', value);
  };
  if (title) document.title = title;
  setMeta('meta[name="description"]', description);
  setMeta('meta[property="og:site_name"]', ui.brandTitle);
  setMeta('meta[property="og:title"]', title);
  setMeta('meta[property="og:description"]', description);
  setMeta('meta[property="og:locale"]', localeMap[langConfig.code]);
  setMeta('meta[name="twitter:title"]', title);
  setMeta('meta[name="twitter:description"]', description);
  setMeta('meta[itemprop="name"]', ui.brandTitle);
  setMeta('meta[itemprop="description"]', description);
  document.querySelectorAll('script[type="application/ld+json"]').forEach(node => {
    try {
      const data = JSON.parse(node.textContent);
      (data['@graph'] || [data]).forEach(entry => {
        if (ui.brandTitle) entry.name = ui.brandTitle;
        if (description) entry.description = description;
        entry.inLanguage = langConfig.code;
      });
      node.textContent = JSON.stringify(data);
    } catch (_) { /* Preserve any authored JSON-LD that cannot be parsed. */ }
  });
}

/**
 * Remplacement exhaustif des chaînes statiques clés dans le DOM
 */
function updateStaticDOM(ui) {
  if (!ui) return;

  // Topbar
  const brandBadge = document.querySelector('.brand-badge');
  if (brandBadge && ui.brandBadge) brandBadge.textContent = ui.brandBadge;
  
  const brandTitle = document.querySelector('.brand-title');
  if (brandTitle && ui.brandTitle) brandTitle.textContent = ui.brandTitle;

  const brandSubtitle = document.querySelector('.brand-subtitle');
  if (brandSubtitle && ui.brandSubtitle) brandSubtitle.textContent = ui.brandSubtitle;

  const searchBtnText = document.querySelector('.btn-search-trigger .desktop-only-text');
  if (searchBtnText && ui.searchBtn) searchBtnText.textContent = ui.searchBtn;

  const barbahariBtnText = document.querySelector('button[data-action="open-portal"] .desktop-only-text');
  if (barbahariBtnText && (ui.barbahariBtn || ui.topbarBarbahari || ui.footerBtnPortal)) {
    barbahariBtnText.textContent = ui.barbahariBtn || ui.topbarBarbahari || ui.footerBtnPortal;
  }

  const contactBtnText = document.querySelector('button[data-modal-id="contact-modal"] .desktop-only-text');
  if (contactBtnText && (ui.contactBtn || ui.topbarContact || ui.footerBtnContact)) {
    contactBtnText.textContent = ui.contactBtn || ui.topbarContact || ui.footerBtnContact;
  }

  const licenseBtnText = document.querySelector('button[data-modal-id="legal-modal"] .desktop-only-text');
  if (licenseBtnText && (ui.legalBtn || ui.navLicense || ui.topbarLegal || ui.footerBtnLegal)) {
    licenseBtnText.textContent = ui.legalBtn || ui.navLicense || ui.topbarLegal || ui.footerBtnLegal;
  }

  // Sidebar
  const sidebarHeaderTitle = document.querySelector('.sidebar-header h3');
  if (sidebarHeaderTitle && (ui.summaryTitle || ui.sidebarTitle)) {
    sidebarHeaderTitle.textContent = ui.sidebarTitle || `📚 ${ui.summaryTitle}`;
  }

  const sidebarCount = document.querySelector('.sidebar-count');
  if (sidebarCount && (ui.rubriquesCount || ui.sidebarCount)) {
    sidebarCount.textContent = ui.sidebarCount || ui.rubriquesCount;
  }

  // Encart Diffusion Pédagogique dans la Sidebar
  const sadaqaHeader = document.querySelector('.sidebar-sadaqa-box .sadaqa-header');
  if (sadaqaHeader && (ui.sidebarSadaqaHeader || ui.heroTag2 || ui.legalSharingHeader)) {
    sadaqaHeader.innerHTML = `<span>🌿</span> ${ui.sidebarSadaqaHeader || ui.heroTag2 || ui.legalSharingHeader}`;
  }

  const sadaqaText = document.querySelector('.sidebar-sadaqa-box p');
  if (sadaqaText && (ui.sidebarSadaqaText || ui.legalSharingP1 || ui.heroDesc)) {
    sadaqaText.textContent = ui.sidebarSadaqaText || ui.legalSharingP1 || ui.heroDesc;
  }

  const authorTag = document.querySelector('.sidebar-sadaqa-box .author-tag');
  if (authorTag) {
    const authorPrefix = ui.labelAuthor || ui.contactAuthorHeader || 'Auteur :';
    const authorVal = ui.authorName || 'Salah Eddine Ahmed (Abou Soulaymane)';
    authorTag.innerHTML = `${authorPrefix} <strong>${authorVal}</strong>`;
  }

  const btnSidebarHome = document.querySelector('.btn-sidebar-home');
  if (btnSidebarHome && (ui.btnSidebarHome || ui.sidebarHome || ui.navBackSummary)) {
    btnSidebarHome.innerHTML = `<span>🏠</span> ${ui.btnSidebarHome || ui.sidebarHome || ui.navBackSummary}`;
  }

  const btnSidebarContact = document.querySelector('.btn-sidebar-contact');
  if (btnSidebarContact && (ui.btnSidebarContact || ui.sidebarContact || ui.topbarContact || ui.footerBtnContact)) {
    btnSidebarContact.innerHTML = `<span>✉️</span> ${ui.btnSidebarContact || ui.sidebarContact || ui.topbarContact || ui.footerBtnContact}`;
  }

  // Liens de navigation dans la Sidebar
  const navPreface = document.querySelector('#nav-item-preface .sidebar-nav-title, #nav-item-preface .nav-arg-title');
  if (navPreface && (ui.navPreface || ui.sidebarPreface)) {
    navPreface.textContent = ui.navPreface || ui.sidebarPreface;
  }

  const navIntro = document.querySelector('#nav-item-coranisme-intro .sidebar-nav-title, #nav-item-coranisme-intro .nav-arg-title');
  if (navIntro && (ui.navIntro || ui.sidebarIntro)) {
    navIntro.textContent = ui.navIntro || ui.sidebarIntro;
  }

  const navFallacies = document.querySelector('#nav-item-boite-a-outils .sidebar-nav-title, #nav-item-boite-a-outils .nav-arg-title');
  if (navFallacies && ui.navFallacies) {
    navFallacies.textContent = ui.navFallacies;
  }

  // Mise à jour des 10 arguments dans la sidebar si présents
  if (window.ARGUMENTS_DATA && Array.isArray(window.ARGUMENTS_DATA)) {
    window.ARGUMENTS_DATA.forEach(arg => {
      const argNavItem = document.querySelector(`#nav-item-${arg.id} .sidebar-nav-title, #nav-item-${arg.id} .nav-arg-title`);
      if (argNavItem) {
        argNavItem.textContent = arg.title;
        if (arg.title) argNavItem.setAttribute('title', arg.title);
      }
    });
  }

  // Splash Portal Al-Barbahari
  const portalWarning = document.querySelector('.portal-warning-badge');
  if (portalWarning && ui.portalWarningBadge) portalWarning.innerHTML = `<span>⚠️</span> ${ui.portalWarningBadge}`;

  const portalHeaderTitle = document.querySelector('.portal-header h2');
  if (portalHeaderTitle && ui.portalTitle) portalHeaderTitle.textContent = ui.portalTitle;

  const portalQuoteFr = document.querySelector('.portal-fr-quote');
  if (portalQuoteFr && ui.portalQuoteText) {
    portalQuoteFr.innerHTML = `<strong>${ui.portalQuoteTransLabel || 'Traduction du sens :'}</strong><br>« ${ui.portalQuoteText} »`;
  }

  const portalEnterBtn = document.querySelector('.btn-enter-site');
  if (portalEnterBtn && ui.portalEnterBtn) portalEnterBtn.innerHTML = `<span>📖</span> ${ui.portalEnterBtn}`;

  const portalAuthor = document.querySelector('.portal-author-badge');
  if (portalAuthor && ui.portalAuthorBadge) portalAuthor.textContent = ui.portalAuthorBadge;

  const portalSource = document.querySelector('.portal-source-ref');
  if (portalSource && ui.portalSourceRef) portalSource.innerHTML = `📖 ${ui.portalSourceRef}`;

  const portalDisclaimer = document.querySelector('.portal-disclaimer');
  if (portalDisclaimer && ui.portalDisclaimer) portalDisclaimer.innerHTML = ui.portalDisclaimer;

  // Search Modal
  const searchModalTitle = document.querySelector('#search-modal .modal-header h3');
  if (searchModalTitle && ui.searchModalTitle) searchModalTitle.textContent = `🔍 ${ui.searchModalTitle}`;

  const searchInput = document.getElementById('search-modal-input');
  if (searchInput && ui.searchPlaceholder) searchInput.placeholder = ui.searchPlaceholder;

  // Contact Modal
  const contactModalTitle = document.querySelector('#contact-modal .modal-header h3');
  if (contactModalTitle && ui.contactModalTitle) contactModalTitle.textContent = `✉️ ${ui.contactModalTitle}`;

  const contactModalBody = document.querySelector('#contact-modal .modal-body');
  if (contactModalBody && ui.contactAuthorBio) {
    contactModalBody.innerHTML = `
      <div class="nuls-callout callout-retenir" style="margin-bottom: 1.25rem;">
        <div class="callout-header">
          <span>✍️</span> ${ui.contactAuthorHeader || "Auteur de l'Ouvrage"}
        </div>
        <p style="font-weight: 800; font-size: 1.15rem; color: var(--nuls-black); margin-bottom: 0.35rem;">
          ${ui.authorName || "Salah Eddine Ahmed (Abou Soulaymane)"}
        </p>
        <p style="font-size: 0.95rem; color: #374151; line-height: 1.5;">
          ${ui.contactAuthorBio}
        </p>
      </div>

      <div style="background: #FAF9F5; border: var(--border-medium); border-radius: var(--radius-md); padding: 1.5rem; text-align: center; margin-bottom: 1.25rem;">
        <div style="font-size: 2rem; margin-bottom: 0.5rem;">📧</div>
        <h4 style="font-family: var(--font-display); font-size: 1.15rem; font-weight: 900; margin-bottom: 0.5rem;">
          ${ui.contactEmailBoxTitle || "Boîte Mail de Contact Officielle :"}
        </h4>
        <a href="mailto:ideoise@gmail.com" class="btn-hero-primary" style="display: inline-flex; text-decoration: none; font-size: 1.1rem; margin-top: 0.5rem; letter-spacing: 0.5px;">
          ideoise@gmail.com
        </a>
      </div>

      <div style="background: var(--nuls-green-light); border: 2px solid var(--nuls-green); border-radius: var(--radius-sm); padding: 1rem; color: #065F46; font-size: 0.9rem; font-weight: 700; display: flex; align-items: center; gap: 0.6rem;">
        <span>💡</span> ${ui.contactSuggestions || "Vous pouvez envoyer vos retours, suggestions ou questions par e-mail à ideoise@gmail.com."}
      </div>
    `;
  }

  // Legal / License Modal
  const legalModalTitle = document.querySelector('#legal-modal .modal-header h3');
  if (legalModalTitle && ui.legalModalTitle) legalModalTitle.textContent = `⚖️ ${ui.legalModalTitle}`;

  const legalModalBody = document.querySelector('#legal-modal .modal-body');
  if (legalModalBody && ui.legalSharingMainText) {
    const usesList = Array.isArray(ui.legalAuthorizedUsesList)
      ? ui.legalAuthorizedUsesList.map(u => `• ${u}<br>`).join('')
      : (ui.legalAuthorizedUses || "• Téléchargement, impression, lecture et partage gratuit.");

    legalModalBody.innerHTML = `
      <div class="nuls-callout callout-retenir" style="margin-bottom: 1.5rem;">
        <div class="callout-header">
          <span>🌿</span> ${ui.legalSharingHeader || "Conditions de Partage & Diffusion Pédagogique"}
        </div>
        <h4 style="font-family: var(--font-display); font-size: 1.2rem; font-weight: 900; margin-bottom: 0.5rem; color: var(--nuls-black);">
          ${ui.legalSharingTitle || "Diffusion et Partage Pédagogique Ouverts"}
        </h4>
        <p style="font-size: 0.95rem; color: #1F2937; line-height: 1.6; margin-bottom: 0.75rem;">
          <strong>${ui.legalSharingMainText}</strong>
        </p>
        <div style="background: #FFFFFF; border: 2px solid var(--nuls-black); padding: 1rem; border-radius: var(--radius-sm); font-weight: 700; line-height: 1.5;">
          ✅ <strong>${ui.legalAuthorizedUsesHeader || "Usages autorisés :"}</strong><br>
          ${usesList}
        </div>
      </div>

      <div class="nuls-callout callout-cadrage" style="margin-bottom: 1.5rem;">
        <div class="callout-header">
          <span>🔒</span> ${ui.legalPrivacyHeader || "Données Techniques & Confidentialité"}
        </div>
        <h4 style="font-family: var(--font-display); font-size: 1.1rem; font-weight: 800; margin-bottom: 0.5rem; color: #1E3A8A;">
          ${ui.legalPrivacyTitle || "Politique de Confidentialité Conforme aux Fonctionnalités Réelles"}
        </h4>
        <p style="font-size: 0.9rem; color: #1E293B; line-height: 1.6; margin-bottom: 0.75rem;">
          ${ui.legalPrivacyText || "Le site ne demande aucune création de compte et ne collecte volontairement aucune donnée personnelle."}
        </p>
        <ul style="font-size: 0.85rem; color: #1E293B; display: flex; flex-direction: column; gap: 0.35rem; padding-left: 1.25rem;">
          <li><strong>${ui.legalPrivacyBullet1 || "Aucun cookie publicitaire tiers : Zéro pixel de tracking commercial."}</strong></li>
          <li><strong>${ui.legalPrivacyBullet2 || "Polices et ressources : Chargement sécurisé des polices Google Fonts."}</strong></li>
        </ul>
      </div>

      <div style="background: #FAF9F5; border: var(--border-medium); border-radius: var(--radius-sm); padding: 1rem; font-size: 0.85rem; color: var(--text-muted);">
        <strong>${ui.legalCreditsHeader || "Ouvrage :"}</strong> ${ui.legalCreditsBookTitle || "Comment démasquer et réfuter la secte des coranistes"}<br>
        <strong>${ui.labelAuthor || "Auteur :"}</strong> ${ui.authorName || "Salah Eddine Ahmed (Abou Soulaymane)"}<br>
        <strong>${ui.footerContactLabel || "Contact :"}</strong> ideoise@gmail.com
      </div>
    `;
  }

  // Share Modal
  const shareModalTitle = document.querySelector('#share-modal-title');
  if (shareModalTitle && ui.shareModalTitle) shareModalTitle.textContent = ui.shareModalTitle;

  const shareModalDesc = document.querySelector('#share-modal-desc');
  if (shareModalDesc && ui.shareModalDesc) shareModalDesc.textContent = ui.shareModalDesc;

  const shareCopyLabel = document.querySelector('#share-copy-label');
  if (shareCopyLabel && (ui.shareCopyLink || ui.btnCopy)) shareCopyLabel.textContent = ui.shareCopyLink || ui.btnCopy;

  const shareBtnCopyInline = document.querySelector('#share-btn-copy-inline');
  if (shareBtnCopyInline && ui.btnCopy) shareBtnCopyInline.textContent = ui.btnCopy;

  // Footer
  const footerBrand = document.querySelector('.footer-brand');
  if (footerBrand && ui.brandTitle) footerBrand.textContent = ui.brandTitle;

  const footerTagline = document.querySelector('.footer-top p');
  if (footerTagline && (ui.heroAuthor || ui.footerSubtitle)) {
    footerTagline.innerHTML = `${ui.heroAuthor || "Par Salah Eddine Ahmed (Abou Soulaymane)"} • <strong>${ui.footerSubtitle || "10 arguments majeurs examinés et réfutés méthodiquement"}</strong>`;
  }

  const footerQuote = document.querySelector('.footer-quote-text') || document.querySelector('.footer-quote');
  if (footerQuote && ui.footerQuote) footerQuote.textContent = ui.footerQuote;

  const footerQuoteAuthor = document.querySelector('.footer-quote-author');
  if (footerQuoteAuthor && ui.footerAuthorRef) footerQuoteAuthor.textContent = ui.footerAuthorRef;

  // Footer Links
  const footerLegalBtn = document.querySelector('.footer-middle button[data-modal-id="legal-modal"]');
  if (footerLegalBtn && ui.footerBtnLegal) footerLegalBtn.textContent = ui.footerBtnLegal;

  const footerContactBtn = document.querySelector('.footer-middle button[data-modal-id="contact-modal"]');
  if (footerContactBtn && ui.footerBtnContact) footerContactBtn.textContent = ui.footerBtnContact;

  const footerPortalBtn = document.querySelector('.footer-middle button[data-action="open-portal"]');
  if (footerPortalBtn && ui.footerBtnPortal) footerPortalBtn.textContent = ui.footerBtnPortal;

  const footerContactLabel = document.querySelector('.footer-middle div:last-child');
  if (footerContactLabel && ui.footerContactLabel) {
    footerContactLabel.innerHTML = `${ui.footerContactLabel} <a href="mailto:ideoise@gmail.com" style="color: var(--nuls-yellow); font-weight: 800; text-decoration: underline;">ideoise@gmail.com</a>`;
  }

  const footerNotice = document.querySelector('.footer-bottom div:first-child');
  if (footerNotice && ui.footerNotice) footerNotice.textContent = ui.footerNotice;

  const footerNotice2 = document.querySelector('.footer-bottom div:last-child');
  if (footerNotice2 && ui.footerNotice2) footerNotice2.textContent = ui.footerNotice2;

  // Compteur de visites dans le footer
  const counterLabel = document.getElementById('counter-label');
  if (counterLabel && ui.footerVisitsLabel) {
    counterLabel.textContent = ui.footerVisitsLabel;
  }
  const counterPrivacyTag = document.getElementById('counter-privacy-tag');
  if (counterPrivacyTag && ui.footerVisitsPrivacy) {
    counterPrivacyTag.textContent = ui.footerVisitsPrivacy;
  }
  const counterBadge = document.getElementById('footer-counter-badge');
  if (counterBadge && ui.footerVisitsTooltip) {
    counterBadge.setAttribute('title', ui.footerVisitsTooltip);
  }
  const counterVal = document.getElementById('counter-value');
  if (counterVal && window.LAST_VISIT_COUNT) {
    const localeMap = {
      fr: 'fr-FR', ar: 'ar-EG', ary: 'ar-MA', en: 'en-US', es: 'es-ES',
      de: 'de-DE', it: 'it-IT', pt: 'pt-PT', ur: 'ur-PK', ta: 'ta-IN',
      ps: 'ps-AF', ku: 'ku-TR', ce: 'ru-RU'
    };
    const activeLocale = localeMap[window.CURRENT_LANG || 'fr'] || 'fr-FR';
    try {
      counterVal.textContent = window.LAST_VISIT_COUNT.toLocaleString(activeLocale);
    } catch (e) {}
  }
}

// Initialisation dès que le DOM est prêt
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initI18n);
} else {
  initI18n();
}
