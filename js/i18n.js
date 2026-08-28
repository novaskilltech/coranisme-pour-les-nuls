/**
 * Module d'Internationalisation (i18n) - Réfutation du Coranisme
 * Support exhaustif de 13 langues : FR, AR, ARY, EN, ES, DE, IT, PT, UR, TA, PS, KU, CE
 * Gestion du sens de lecture LTR / RTL, persistance et mise à jour DOM dynamique complète.
 */

const I18N_LANGUAGES = [
  { code: 'fr', name: 'Français', native: 'Français', flag: '🇫🇷', dir: 'ltr' },
  { code: 'ar', name: 'Arabe', native: 'العربية', flag: '🇸🇦', dir: 'rtl' },
  { code: 'ary', name: 'Darija', native: 'الدارجة المغربية', flag: '🇲🇦', dir: 'rtl' },
  { code: 'en', name: 'English', native: 'English', flag: '🇬🇧', dir: 'ltr' },
  { code: 'es', name: 'Espagnol', native: 'Español', flag: '🇪🇸', dir: 'ltr' },
  { code: 'de', name: 'Allemand', native: 'Deutsch', flag: '🇩🇪', dir: 'ltr' },
  { code: 'it', name: 'Italien', native: 'Italiano', flag: '🇮🇹', dir: 'ltr' },
  { code: 'pt', name: 'Portugais', native: 'Português', flag: '🇵🇹', dir: 'ltr' },
  { code: 'ur', name: 'Ourdou', native: 'اردو', flag: '🇵🇰', dir: 'rtl' },
  { code: 'ta', name: 'Tamoul', native: 'தமிழ்', flag: '🇮🇳', dir: 'ltr' },
  { code: 'ps', name: 'Pachto', native: 'پښتو', flag: '🇦🇫', dir: 'rtl' },
  { code: 'ku', name: 'Kurde', native: 'Kurdî', flag: '☀️', dir: 'ltr' },
  { code: 'ce', name: 'Tchétchène', native: 'Нохчийн', flag: '🟢', dir: 'ltr' }
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
 * Rendu du sélecteur de langue (Topbar Header)
 */
function renderLanguageSwitchers() {
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
  if (barbahariBtnText && ui.barbahariBtn) barbahariBtnText.textContent = ui.barbahariBtn;

  const contactBtnText = document.querySelector('button[data-modal-id="contact-modal"] .desktop-only-text');
  if (contactBtnText && ui.contactBtn) contactBtnText.textContent = ui.contactBtn;

  const licenseBtnText = document.querySelector('button[data-modal-id="legal-modal"] .desktop-only-text');
  if (licenseBtnText && (ui.legalBtn || ui.navLicense)) licenseBtnText.textContent = ui.legalBtn || ui.navLicense;

  // Sidebar
  const sidebarHeaderTitle = document.querySelector('.sidebar-header h3');
  if (sidebarHeaderTitle && ui.summaryTitle) sidebarHeaderTitle.textContent = `📚 ${ui.summaryTitle}`;

  const sidebarCount = document.querySelector('.sidebar-count');
  if (sidebarCount && ui.rubriquesCount) sidebarCount.textContent = ui.rubriquesCount;

  // Encart Diffusion Pédagogique dans la Sidebar
  const sadaqaHeader = document.querySelector('.sidebar-sadaqa-box .sadaqa-header');
  if (sadaqaHeader && ui.sidebarSadaqaHeader) {
    sadaqaHeader.innerHTML = `<span>🌿</span> ${ui.sidebarSadaqaHeader}`;
  }

  const sadaqaText = document.querySelector('.sidebar-sadaqa-box p');
  if (sadaqaText && ui.sidebarSadaqaText) {
    sadaqaText.textContent = ui.sidebarSadaqaText;
  }

  const authorTag = document.querySelector('.sidebar-sadaqa-box .author-tag');
  if (authorTag && ui.labelAuthor) {
    authorTag.innerHTML = `${ui.labelAuthor} <strong>${ui.authorName || 'Salah Eddine Ahmed'}</strong>`;
  }

  const btnSidebarHome = document.querySelector('.btn-sidebar-home');
  if (btnSidebarHome && ui.btnSidebarHome) {
    btnSidebarHome.innerHTML = `<span>🏠</span> ${ui.btnSidebarHome}`;
  }

  const btnSidebarContact = document.querySelector('.btn-sidebar-contact');
  if (btnSidebarContact && ui.btnSidebarContact) {
    btnSidebarContact.innerHTML = `<span>✉️</span> ${ui.btnSidebarContact}`;
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
          ${ui.authorName || "Salah Eddine Ahmed"}
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
        <strong>${ui.labelAuthor || "Auteur :"}</strong> ${ui.authorName || "Salah Eddine Ahmed"}<br>
        <strong>${ui.footerContactLabel || "Contact :"}</strong> ideoise@gmail.com
      </div>
    `;
  }

  // Footer
  const footerBrand = document.querySelector('.footer-brand');
  if (footerBrand && ui.brandTitle) footerBrand.textContent = ui.brandTitle;

  const footerTagline = document.querySelector('.footer-top p');
  if (footerTagline && (ui.heroAuthor || ui.footerSubtitle)) {
    footerTagline.innerHTML = `${ui.heroAuthor || "Par Salah Eddine Ahmed"} • <strong>${ui.footerSubtitle || "10 arguments majeurs examinés et réfutés méthodiquement"}</strong>`;
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
}

// Initialisation dès que le DOM est prêt
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initI18n);
} else {
  initI18n();
}
