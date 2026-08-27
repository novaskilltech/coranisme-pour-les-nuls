/**
 * Module d'Internationalisation (i18n) - Réfutation du Coranisme
 * Support de 11 langues : FR, AR, EN, ES, DE, IT, PT, UR, TA, PS, ARY
 * Gestion du sens de lecture LTR / RTL et persistance du choix utilisateur.
 */

const I18N_LANGUAGES = [
  { code: 'fr', name: 'Français', native: 'Français', flag: '🇫🇷', dir: 'ltr' },
  { code: 'ar', name: 'Arabe', native: 'العربية', flag: '🇸🇦', dir: 'rtl' },
  { code: 'en', name: 'English', native: 'English', flag: '🇬🇧', dir: 'ltr' },
  { code: 'es', name: 'Espagnol', native: 'Español', flag: '🇪🇸', dir: 'ltr' },
  { code: 'de', name: 'Allemand', native: 'Deutsch', flag: '🇩🇪', dir: 'ltr' },
  { code: 'it', name: 'Italien', native: 'Italiano', flag: '🇮🇹', dir: 'ltr' },
  { code: 'pt', name: 'Portugais', native: 'Português', flag: '🇵🇹', dir: 'ltr' },
  { code: 'ur', name: 'Ourdou', native: 'اردو', flag: '🇵🇰', dir: 'rtl' },
  { code: 'ta', name: 'Tamoul', native: 'தமிழ்', flag: '🇮🇳', dir: 'ltr' },
  { code: 'ps', name: 'Pachto', native: 'پښتو', flag: '🇦🇫', dir: 'rtl' },
  { code: 'ary', name: 'Darija', native: 'الدارجة المغربية', flag: '🇲🇦', dir: 'rtl' }
];

window.CURRENT_LANG = 'fr';
window.I18N_DATA = window.I18N_DATA || {};

/**
 * Initialisation du module i18n
 */
function initI18n() {
  renderLanguageSwitchers();
  bindLangEvents();

  // Détecter la langue enregistrée ou la langue du navigateur
  const savedLang = localStorage.getItem('refutation_lang');
  const browserLang = (navigator.language || navigator.userLanguage || 'fr').split('-')[0].toLowerCase();
  
  const initialLang = savedLang || (I18N_LANGUAGES.some(l => l.code === browserLang) ? browserLang : 'fr');
  
  setLanguage(initialLang, false);
}

/**
 * Rendu des sélecteurs de langue (Topbar Desktop et Drawer Mobile)
 */
function renderLanguageSwitchers() {
  // 1. Dropdown Topbar Desktop
  const topbarMenu = document.getElementById('lang-dropdown-menu');
  if (topbarMenu) {
    topbarMenu.innerHTML = I18N_LANGUAGES.map(l => `
      <button class="lang-dropdown-item ${l.code === window.CURRENT_LANG ? 'active' : ''}" data-lang="${l.code}">
        <span class="lang-flag">${l.flag}</span>
        <span class="lang-name">${l.native}</span>
        <span class="lang-code-badge">${l.code.toUpperCase()}</span>
      </button>
    `).join('');
  }

  // 2. Grille Drawer Mobile
  const drawerGrid = document.getElementById('drawer-lang-grid');
  if (drawerGrid) {
    drawerGrid.innerHTML = I18N_LANGUAGES.map(l => `
      <button class="drawer-lang-btn ${l.code === window.CURRENT_LANG ? 'active' : ''}" data-lang="${l.code}">
        <span style="font-size: 1.25rem;">${l.flag}</span>
        <span>${l.native}</span>
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

  // Écouteur global pour changement de langue
  document.addEventListener('click', (e) => {
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
  const langConfig = I18N_LANGUAGES.find(l => l.code === langCode) || I18N_LANGUAGES[0];
  const actualCode = langConfig.code;

  // Charger le fichier de traduction s'il n'est pas encore en mémoire
  if (!window.I18N_DATA[actualCode]) {
    loadLangScript(actualCode, () => {
      applyLanguage(langConfig, notify);
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
    if (code !== 'fr') setLanguage('fr', false);
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

  // Mise à jour du libellé du bouton trigger dans la topbar
  const currentFlag = document.querySelector('.lang-flag-current');
  const currentName = document.querySelector('.lang-name-current');
  if (currentFlag) currentFlag.textContent = langConfig.flag;
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

  // Réactualiser la navigation latérale et la vue courante
  if (typeof renderSidebarNav === 'function') {
    renderSidebarNav();
  }
  if (typeof handleRouting === 'function') {
    handleRouting();
  }

  // Notification Toast facultative
  if (notify && typeof showToast === 'function') {
    showToast(`${langConfig.flag} ${langConfig.native}`);
  }
}

/**
 * Remplacement des chaînes statiques clés dans le DOM
 */
function updateStaticDOM(ui) {
  if (!ui) return;

  // Topbar
  const brandBadge = document.querySelector('.brand-badge');
  if (brandBadge) brandBadge.textContent = ui.brandBadge;
  
  const brandTitle = document.querySelector('.brand-title');
  if (brandTitle) brandTitle.textContent = ui.brandTitle;

  const brandSubtitle = document.querySelector('.brand-subtitle');
  if (brandSubtitle) brandSubtitle.textContent = ui.brandSubtitle;

  const searchBtnText = document.querySelector('.btn-search-trigger .desktop-only-text');
  if (searchBtnText) searchBtnText.textContent = ui.searchBtn;

  // Sidebar
  const sidebarHeaderTitle = document.querySelector('.sidebar-header h3');
  if (sidebarHeaderTitle) sidebarHeaderTitle.textContent = `📚 ${ui.summaryTitle}`;

  const sidebarCount = document.querySelector('.sidebar-count');
  if (sidebarCount) sidebarCount.textContent = ui.rubriquesCount;

  // Splash Portal Al-Barbahari
  const portalWarning = document.querySelector('.portal-warning-badge');
  if (portalWarning) portalWarning.innerHTML = `<span>⚠️</span> ${ui.portalWarningBadge}`;

  const portalHeaderTitle = document.querySelector('.portal-header h2');
  if (portalHeaderTitle) portalHeaderTitle.textContent = ui.portalTitle;

  const portalEnterBtn = document.querySelector('.btn-enter-site');
  if (portalEnterBtn) portalEnterBtn.innerHTML = `<span>📖</span> ${ui.portalEnterBtn}`;

  const portalAuthor = document.querySelector('.portal-author-badge');
  if (portalAuthor) portalAuthor.textContent = ui.portalAuthorBadge;

  const portalSource = document.querySelector('.portal-source-ref');
  if (portalSource) portalSource.textContent = ui.portalSourceRef;

  const portalDisclaimer = document.querySelector('.portal-disclaimer');
  if (portalDisclaimer) portalDisclaimer.innerHTML = ui.portalDisclaimer;

  // Search Modal
  const searchModalTitle = document.querySelector('#search-modal .modal-header h3');
  if (searchModalTitle) searchModalTitle.textContent = `🔍 ${ui.searchModalTitle}`;

  const searchInput = document.getElementById('search-modal-input');
  if (searchInput) searchInput.placeholder = ui.searchPlaceholder;

  // Contact Modal
  const contactModalTitle = document.querySelector('#contact-modal .modal-header h3');
  if (contactModalTitle) contactModalTitle.textContent = `✉️ ${ui.contactModalTitle}`;

  // Footer
  const footerQuote = document.querySelector('.footer-quote-text');
  if (footerQuote) footerQuote.textContent = ui.footerQuote;

  const footerQuoteAuthor = document.querySelector('.footer-quote-author');
  if (footerQuoteAuthor) footerQuoteAuthor.textContent = ui.footerAuthorRef;

  const footerNotice = document.querySelector('.footer-bottom div:first-child');
  if (footerNotice) footerNotice.textContent = ui.footerNotice;

  const footerNotice2 = document.querySelector('.footer-bottom div:last-child');
  if (footerNotice2) footerNotice2.textContent = ui.footerNotice2;
}

// Initialisation dès que le DOM est prêt
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initI18n);
} else {
  initI18n();
}
