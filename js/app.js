/**
 * Moteur Applicatif - Réfutation du Coranisme
 * Gestion du routage SPA, du rendu dynamique des 10 fiches,
 * de la Boîte à Outils des Sophismes (source PDF) en 13 langues (i18n),
 * de la recherche instantanée, de la copie rapide 30s et par section,
 * du partage natif / réseaux sociaux (WhatsApp, Telegram, X, Facebook, etc.),
 * des quiz interactifs et du support multi-langues (i18n).
 * Par Salah Eddine Ahmed (Abou Soulaymane)
 */

function getActiveArgumentsData() {
  return window.ARGUMENTS_DATA || (typeof ARGUMENTS_DATA !== 'undefined' ? ARGUMENTS_DATA : []);
}

function getActiveUI() {
  const currentLang = window.CURRENT_LANG || 'fr';
  if (window.I18N_DATA && window.I18N_DATA[currentLang] && window.I18N_DATA[currentLang].ui) {
    return window.I18N_DATA[currentLang].ui;
  }
  return {};
}

function escapeHTML(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

const STATIC_PREFACE_FALLBACK = document.getElementById('preface')?.outerHTML || '';
const STATIC_INTRO_FALLBACK = document.getElementById('coranisme-intro')?.outerHTML || '';

function renderPrefaceHTML() {
  const currentLang = window.CURRENT_LANG || 'fr';
  const ui = getActiveUI();
  const data = (window.I18N_DATA && window.I18N_DATA[currentLang] && window.I18N_DATA[currentLang].preface)
    ? window.I18N_DATA[currentLang].preface
    : (window.I18N_DATA && window.I18N_DATA['fr'] && window.I18N_DATA['fr'].preface ? window.I18N_DATA['fr'].preface : null);

  if (!data) return STATIC_PREFACE_FALLBACK;

  return `
    <section id="preface" class="nuls-callout callout-cadrage" style="margin: 2rem 0;" aria-labelledby="preface-title">
      <div class="callout-header"><span>📝</span> ${data.badge || "OUVERTURE DE L'OUVRAGE"}</div>
      <button class="btn-copy-callout" data-action="copy-section" data-target="preface" title="${ui.btnCopySection || "Copier cette section"}">
        <span>📋</span> <span class="btn-copy-text">${ui.btnCopy || "Copier"}</span>
      </button>

      <header class="section-header-wrap" style="margin: 0 0 1.25rem;">
        <div>
          <h2 class="section-header-title" id="preface-title">${data.title || "PRÉFACE"}</h2>
          <p style="font-weight: 700; color: var(--text-muted); margin-top: 0.4rem;">${data.subtitle || "Pourquoi cet ouvrage ?"}</p>
        </div>
        <span class="card-number-badge">${data.introTag || "AVANT DE COMMENCER"}</span>
      </header>

      <div class="verse-item" style="margin-bottom: 1.25rem;">
        <div class="verse-arabic" lang="ar" dir="rtl">${data.basmala || "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ"}</div>
      </div>

      ${data.sections.map((sec, sIdx) => `
        <section id="preface-sec-${sIdx}" class="nuls-callout callout-${sec.type}" style="margin-top: 1.25rem;">
          <div class="callout-header"><span>${sec.type === 'adverse' ? '🔴' : (sec.type === 'retenir' ? '💡' : (sec.type === 'analogie' ? '📚' : (sec.type === 'cadrage' ? '📖' : '⏱️')))}</span> ${sec.header}</div>
          <button class="btn-copy-callout" data-action="copy-section" data-target="preface-sec-${sIdx}" title="${ui.btnCopySection || "Copier cette section"}">
            <span>📋</span> <span class="btn-copy-text">${ui.btnCopy || "Copier"}</span>
          </button>
          <h3 style="font-family: var(--font-display); font-size: 1.35rem; font-weight: 800; margin: 1rem 0 0.75rem;">${sec.title}</h3>
          ${sec.paragraphs.map(p => `<p style="margin-bottom: 0.75rem;">${p}</p>`).join('')}
          ${sec.distinctions ? `
            <div class="distinction-grid" style="margin-top: 1rem;">
              ${sec.distinctions.map(d => `
                <div class="distinction-card">
                  <div class="distinction-term">${d.term}</div>
                  <div class="distinction-desc">${d.desc}</div>
                </div>
              `).join('')}
            </div>
          ` : ''}
          ${sec.signature ? `
            <div style="background: #FFFFFF; border: 2px solid var(--nuls-black); border-radius: var(--radius-sm); margin-top: 1rem; padding: 1rem; text-align: center; font-family: var(--font-display); font-weight: 800; line-height: 1.6; white-space: pre-line;">
              ${sec.signature}
            </div>
          ` : ''}
        </section>
      `).join('')}
    </section>
  `;
}

function renderCoranismeIntroHTML() {
  const currentLang = window.CURRENT_LANG || 'fr';
  const ui = getActiveUI();
  const data = (window.I18N_DATA && window.I18N_DATA[currentLang] && window.I18N_DATA[currentLang].intro)
    ? window.I18N_DATA[currentLang].intro
    : (window.I18N_DATA && window.I18N_DATA['fr'] && window.I18N_DATA['fr'].intro ? window.I18N_DATA['fr'].intro : null);

  if (!data) return STATIC_INTRO_FALLBACK;

  return `
    <section id="coranisme-intro" class="nuls-callout callout-cadrage" style="margin: 2rem 0;" aria-labelledby="coranisme-intro-title">
      <div class="callout-header">
        <span>📖</span> ${data.header || "CONTEXTE INTRODUCTIF"}
      </div>
      <button class="btn-copy-callout" data-action="copy-section" data-target="coranisme-intro" title="${ui.btnCopySection || "Copier cette section"}">
        <span>📋</span> <span class="btn-copy-text">${ui.btnCopy || "Copier"}</span>
      </button>

      <header class="section-header-wrap" style="margin: 0 0 1.25rem;">
        <div>
          <h2 class="section-header-title" id="coranisme-intro-title">${data.title || "QUI SONT LES CORANISTES ?"}</h2>
          <p style="font-weight: 700; color: var(--text-muted); margin-top: 0.4rem;">${data.subtitle || "Définition et repères"}</p>
        </div>
        <span class="card-number-badge">${data.badge || "REPÈRES HISTORIQUES"}</span>
      </header>

      ${data.sections.map((sec, sIdx) => `
        <section id="intro-sec-${sIdx}" class="nuls-callout callout-${sec.type}" style="margin-top: 1.25rem;">
          <div class="callout-header"><span>${sec.type === 'adverse' ? '🔴' : (sec.type === 'retenir' ? '💡' : (sec.type === 'analogie' ? '⚖️' : '🗓️'))}</span> ${sec.header}</div>
          <button class="btn-copy-callout" data-action="copy-section" data-target="intro-sec-${sIdx}" title="${ui.btnCopySection || "Copier cette section"}">
            <span>📋</span> <span class="btn-copy-text">${ui.btnCopy || "Copier"}</span>
          </button>
          <h3 style="font-family: var(--font-display); font-size: 1.35rem; font-weight: 800; margin: 1rem 0 0.75rem;">${sec.title}</h3>
          ${sec.paragraphs ? sec.paragraphs.map(p => `<p style="margin-bottom: 0.75rem;">${p}</p>`).join('') : ''}
          ${sec.hadiths ? `
            <div class="verses-container" style="margin-top: 1rem;">
              ${sec.hadiths.map(h => `
                <div class="verse-item">
                  <div class="verse-header-ref"><span class="verse-ref-badge">${h.ref}</span></div>
                  <div class="verse-arabic" lang="ar" dir="rtl">${h.ar}</div>
                  <div class="verse-translation">${h.translation}</div>
                </div>
              `).join('')}
            </div>
          ` : ''}
          ${sec.distinctions ? `
            <div class="distinction-grid" style="margin-top: 1rem;">
              ${sec.distinctions.map(d => `
                <div class="distinction-card">
                  <div class="distinction-term">${d.term}</div>
                  <div class="distinction-desc">${d.desc}</div>
                </div>
              `).join('')}
            </div>
          ` : ''}
        </section>
      `).join('')}
    </section>
  `;
}

/**
 * Rendu de la Boîte à Outils des Sophismes (Entièrement localisée selon la langue active)
 */
function renderFallaciesToolboxHTML() {
  const currentLang = window.CURRENT_LANG || 'fr';
  const pack = (window.I18N_DATA && window.I18N_DATA[currentLang]) ? window.I18N_DATA[currentLang] : (window.I18N_DATA ? window.I18N_DATA['fr'] : null);
  const data = (pack && pack.fallaciesToolbox) ? pack.fallaciesToolbox : (window.FALLACIES_FRENCH || null);
  const ui = getActiveUI();

  if (!data) return '';

  return `
    <section id="boite-a-outils" class="nuls-callout callout-retenir fallacies-toolbox-section" style="margin: 2.5rem 0;" aria-labelledby="fallacies-toolbox-title">
      <div class="callout-header">
        <span>🧠</span> ${data.headerBadge || "GUIDE MÉTHODOLOGIQUE"}
      </div>
      <button class="btn-copy-callout" data-action="copy-section" data-target="boite-a-outils" title="${ui.btnCopySection || "Copier cette section"}">
        <span>📋</span> <span class="btn-copy-text">${ui.btnCopy || "Copier"}</span>
      </button>

      <header class="section-header-wrap" style="margin: 0 0 1.25rem;">
        <div>
          <h2 class="section-header-title" id="fallacies-toolbox-title">${data.title || "BOÎTE À OUTILS"}</h2>
          <p style="font-weight: 800; color: var(--nuls-black); margin-top: 0.4rem; font-size: 1.1rem;">${data.subtitle || "Reconnaître les sophismes avant de débattre"}</p>
        </div>
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
          <a href="pdf/${data.pdfFileName || 'Boite_a_outils_Sophismes_Coranisme.pdf'}" download class="btn-hero-primary" style="padding: 0.45rem 0.85rem; font-size: 0.85rem;" title="${data.pdfDownloadBtn || "Télécharger la Boîte à Outils (PDF)"}">
            <span>📥</span> ${data.pdfDownloadBtn || "Télécharger le PDF"}
          </a>
        </div>
      </header>

      <!-- INTRODUCTION DU PDF -->
      <div style="background: #FFFFFF; border: 2px solid var(--nuls-black); border-radius: var(--radius-sm); padding: 1.25rem; margin-bottom: 1.5rem;">
        <h4 style="font-family: var(--font-display); font-size: 1.05rem; font-weight: 900; color: var(--nuls-black); margin-bottom: 0.5rem;">
          ${data.introTitle || "POURQUOI CETTE BOÎTE À OUTILS ?"}
        </h4>
        <p style="font-size: 0.95rem; color: #1F2937; line-height: 1.6; margin-bottom: 0.85rem;">
          ${data.introText}
        </p>
        <div style="background: #FAF9F5; border-left: 3px solid var(--nuls-black); padding: 0.75rem 1rem; margin-bottom: 0.85rem;">
          <strong>${data.definitionTitle || "DÉFINITION SIMPLE :"}</strong> ${data.definitionText}
        </div>
        <div style="background: var(--nuls-yellow); color: var(--nuls-black); padding: 0.75rem 1rem; border-radius: var(--radius-sm); font-weight: 900; text-align: center;">
          ⚡ ${data.reflexQuestionTitle || "LA QUESTION RÉFLEXE :"} ${data.reflexQuestionText}
        </div>
        <p style="font-size: 0.85rem; color: var(--text-muted); font-weight: 700; margin-top: 0.6rem; text-align: center;">
          ${data.reflexPurpose}
        </p>
      </div>

      <!-- RÈGLE D'OR ENCADRÉE (ESSENTIELLE) -->
      <div class="golden-rule-fallacy-box">
        <div class="golden-rule-fallacy-header">
          <span>👑</span> ${data.goldenRuleTitle || "LA RÈGLE D'OR MÉTHODOLOGIQUE"}
        </div>
        <div class="golden-rule-fallacy-quote">
          « ${data.goldenRuleStatement} »
        </div>
        <p style="font-size: 0.95rem; color: #1F2937; line-height: 1.6; margin-bottom: 0.75rem; font-weight: 700;">
          ${data.goldenRuleMeaning}
        </p>
        <div style="background: #FFFFFF; border: 2px solid var(--nuls-black); border-radius: var(--radius-sm); padding: 0.85rem 1rem; font-size: 0.9rem; line-height: 1.5; margin-bottom: 0.75rem;">
          💡 <strong>${data.goldenRuleExample}</strong>
        </div>
        <p style="font-size: 0.88rem; color: #374151; line-height: 1.5;">
          ${data.goldenRuleGoal}
        </p>
      </div>

      <!-- GRILLE DES 10 CARTES DE SOPHISMES -->
      <h3 style="font-family: var(--font-display); font-size: 1.25rem; font-weight: 900; margin: 1.5rem 0 1rem;">
        ${data.sectionTitle10Cards || "📚 Les 10 Sophismes Fréquents en 10 Cartes Interactives"}
      </h3>

      <div class="fallacies-grid">
        ${data.items.map(f => `
          <div class="fallacy-card" id="fallacy-card-${f.id}">
            <div class="fallacy-card-header" data-action="toggle-fallacy-card" data-fallacy-id="${f.id}">
              <div class="fallacy-card-top-line">
                <span class="fallacy-card-title">
                  <span>${f.icon || '⚡'}</span> ${f.num}. ${escapeHTML(f.name)}
                </span>
                <button class="btn-toggle-fallacy" aria-expanded="false" aria-controls="fallacy-body-${f.id}">
                  <span>${data.btnDetails || "Détails"}</span> <span>▼</span>
                </button>
              </div>
              <p class="fallacy-card-shortdef">${escapeHTML(f.shortDef)}</p>
            </div>
            
            <div class="fallacy-card-body" id="fallacy-body-${f.id}">
              <div class="fallacy-detail-block">
                <div class="fallacy-detail-label">${data.labelDefinition || "📖 Définition"}</div>
                <p>${escapeHTML(f.definition)}</p>
              </div>
              
              <div class="fallacy-detail-block" style="background-color: #FFFFFF;">
                <div class="fallacy-detail-label">${data.labelGeneralExample || "🌍 Exemple Général"}</div>
                <p>${escapeHTML(f.generalExample)}</p>
              </div>

              <div class="fallacy-detail-block" style="background-color: var(--nuls-yellow-tint); border-color: var(--nuls-black);">
                <div class="fallacy-detail-label">${data.labelQuranicApp || "🕌 Application au Débat sur le Coranisme"}</div>
                <p style="white-space: pre-line; font-weight: 600;">${escapeHTML(f.quranicApplication)}</p>
              </div>

              <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                <div style="background: #FFFFFF; border: 2px solid var(--nuls-blue); padding: 0.65rem 0.85rem; border-radius: var(--radius-sm); font-size: 0.88rem;">
                  <strong style="color: var(--nuls-blue);">${data.labelQuestionToAsk || "❓ Question réflexe à poser :"}</strong><br>
                  ${escapeHTML(f.questionToAsk)}
                </div>
                <div style="background: #FFFFFF; border: 2px solid var(--nuls-green); padding: 0.65rem 0.85rem; border-radius: var(--radius-sm); font-size: 0.88rem;">
                  <strong style="color: var(--nuls-green);">${data.labelShortAnswer || "💬 Réponse courte :"}</strong><br>
                  ${escapeHTML(f.shortAnswer)}
                </div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- LES 4 QUESTIONS RÉFLEXES (CARTE MÉMO COMPACTE) -->
      <div style="background: #FFFFFF; border: var(--border-thick); border-radius: var(--radius-md); padding: 1.5rem; margin: 2rem 0; box-shadow: var(--shadow-hard);">
        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.75rem;">
          <h4 style="font-family: var(--font-display); font-size: 1.15rem; font-weight: 900; color: var(--nuls-black);">
            🎯 ${data.reflexQuestions.title}
          </h4>
          <span class="card-number-badge">${data.cardMemoBadge || "CARTE MÉMO"}</span>
        </div>
        <p style="font-size: 0.92rem; color: #4B5563; font-weight: 700; margin-bottom: 1rem;">
          ${data.reflexQuestions.subtitle} — ${data.reflexQuestions.summaryNotice}
        </p>
        <div class="reflex-grid">
          ${data.reflexQuestions.questions.map(q => `
            <div class="reflex-card">
              <div class="reflex-card-title">${escapeHTML(q.title)}</div>
              <div class="reflex-card-desc">${escapeHTML(q.desc)}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- TEST RAPIDE INTERACTIF -->
      <div class="quiz-section-wrap" style="margin: 2rem 0;">
        <div class="quiz-header">
          <h3>📝 ${data.quiz.title}</h3>
          <span class="card-number-badge">${data.trainingBadge || "ENTRAÎNEMENT"}</span>
        </div>
        <p style="font-size: 0.95rem; font-weight: 700; color: var(--text-muted); margin-bottom: 1.25rem;">
          ${data.quiz.subtitle}
        </p>
        <div class="quiz-items-list">
          ${data.quiz.items.map(item => `
            <div class="quiz-item" style="margin-bottom: 1.25rem; padding-bottom: 1.25rem;">
              <div class="quiz-question" style="font-size: 1rem; font-weight: 800; margin-bottom: 0.75rem;">
                ${item.id}. ${escapeHTML(item.statement)}
              </div>
              <div style="display: flex; flex-wrap: wrap; gap: 0.4rem;">
                ${data.items.slice(0, 6).map(f => `
                  <button class="quiz-option-btn" data-action="fallacy-quiz-answer" data-quiz-id="${item.id}" data-selected-id="${f.id}" data-correct-id="${item.answerId}" data-explanation="${escapeHTML(item.explanation)}" style="padding: 0.4rem 0.75rem; font-size: 0.82rem;">
                    ${escapeHTML(f.name)}
                  </button>
                `).join('')}
              </div>
              <div class="quiz-feedback" id="fallacy-quiz-feedback-${item.id}"></div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- CARTOUCHE CONCLUSION -->
      <div style="background: var(--nuls-black); color: var(--nuls-yellow); border-radius: var(--radius-sm); padding: 1.5rem; text-align: center;">
        <h4 style="font-family: var(--font-display); font-size: 1.25rem; font-weight: 900; margin-bottom: 0.5rem;">
          ${data.conclusion.title}
        </h4>
        <p style="font-size: 0.95rem; color: #FFFFFF; max-width: 700px; margin: 0 auto 1rem; line-height: 1.6;">
          ${data.conclusion.mainText}
        </p>
        <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap; margin-bottom: 1rem;">
          <span style="background: rgba(255,255,255,0.1); padding: 0.4rem 0.8rem; border-radius: 4px; font-weight: 800; font-size: 0.85rem; border: 1px solid var(--nuls-yellow);">
            ${data.conclusion.slogan1}
          </span>
          <span style="background: var(--nuls-yellow); color: var(--nuls-black); padding: 0.4rem 0.8rem; border-radius: 4px; font-weight: 900; font-size: 0.85rem;">
            ${data.conclusion.slogan2}
          </span>
        </div>
        <p style="font-size: 0.85rem; color: #D1D5DB; font-style: italic;">
          ${data.conclusion.finalNote}
        </p>
      </div>

    </section>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

function initApp() {
  renderSidebarNav();
  handleRouting();

  // Écouteur de changement d'URL (Hash Routing)
  window.addEventListener('hashchange', handleRouting);

  // Gestion de la recherche
  initSearchModal();

  // Gestion du partage
  initShareModal();

  // Gestion du menu drawer mobile
  initMobileDrawer();
  initBookPromo3D();

  // Initialisation du compteur de visites et du compteur de téléchargements (RGPD - 0 cookie)
  initVisitsCounter();
  initDownloadsCounter();
  initLanding3D();
}

/**
 * Initialisation des effets 3D et interactions de la Landing Page
 */
function initLanding3D() {
  const langCard = document.getElementById('card-lang-trigger');
  const triggerBtn = document.getElementById('btn-lang-trigger');
  if (langCard && triggerBtn) {
    langCard.addEventListener('click', (e) => {
      e.stopPropagation();
      triggerBtn.click();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  const cards = document.querySelectorAll('.landing-card-3d');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;

      card.style.transform = `perspective(1000px) translateY(-8px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale(1.02)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

/**
 * Compteur de téléchargements du livre "Le Coraniste Repenti" (PDF) avec tracking temps réel
 */
function initDownloadsCounter() {
  const dlValEl = document.getElementById('counter-downloads-value');
  if (!dlValEl) return;

  const currentLang = window.CURRENT_LANG || 'fr';
  const localeMap = {
    fr: 'fr-FR',
    ar: 'ar-EG',
    ary: 'ar-MA',
    en: 'en-US',
    es: 'es-ES',
    de: 'de-DE',
    it: 'it-IT',
    pt: 'pt-PT',
    ur: 'ur-PK',
    ta: 'ta-IN',
    ps: 'ps-AF',
    ku: 'ku-TR',
    ce: 'ru-RU'
  };
  const activeLocale = localeMap[currentLang] || 'fr-FR';

  function formatCount(num) {
    try {
      return num.toLocaleString(activeLocale);
    } catch (e) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
  }

  function animateCountUp(target) {
    const start = Math.max(0, target - 35);
    const duration = 1000;
    const startTime = performance.now();

    function step(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(start + (target - start) * easeOut);
      dlValEl.textContent = formatCount(current);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        dlValEl.textContent = formatCount(target);
      }
    }
    requestAnimationFrame(step);
  }

  const BASE_DOWNLOADS = 3480;
  const localSaved = parseInt(localStorage.getItem('anti_coranisme_downloads') || BASE_DOWNLOADS.toString(), 10);
  const fallbackCount = Math.max(BASE_DOWNLOADS, localSaved);

  fetch('/api/downloads')
    .then(res => {
      if (!res.ok) throw new Error('API offline');
      return res.json();
    })
    .then(data => {
      if (data && typeof data.count === 'number' && data.count > 0) {
        window.LAST_DOWNLOAD_COUNT = data.count;
        localStorage.setItem('anti_coranisme_downloads', data.count.toString());
        animateCountUp(data.count);
      } else {
        window.LAST_DOWNLOAD_COUNT = fallbackCount;
        animateCountUp(fallbackCount);
      }
    })
    .catch(() => {
      window.LAST_DOWNLOAD_COUNT = fallbackCount;
      animateCountUp(fallbackCount);
    });

  // Tracking universel sur tous les déclencheurs de téléchargement du livre PDF
  if (!window.HAS_BOUND_DOWNLOAD_TRACKING) {
    window.HAS_BOUND_DOWNLOAD_TRACKING = true;
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href*="LE_CORANISTE_REPENTI_EDITION_FINALE.pdf"], .btn-book-download, .btn-sidebar-book-dl');
      if (link) {
        const current = (window.LAST_DOWNLOAD_COUNT || fallbackCount) + 1;
        window.LAST_DOWNLOAD_COUNT = current;
        localStorage.setItem('anti_coranisme_downloads', current.toString());
        if (dlValEl) dlValEl.textContent = formatCount(current);

        try {
          fetch('/api/downloads', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ event: 'download', book: 'LE_CORANISTE_REPENTI_EDITION_FINALE.pdf' })
          }).catch(() => {});
        } catch (err) {}
      }
    });
  }
}

/**
 * Compteur de visites anonymisé (RGPD - 0 cookie) avec animation progressive
 */
function initVisitsCounter() {
  const counterValEl = document.getElementById('counter-value');
  if (!counterValEl) return;

  const currentLang = window.CURRENT_LANG || 'fr';
  const localeMap = {
    fr: 'fr-FR',
    ar: 'ar-EG',
    ary: 'ar-MA',
    en: 'en-US',
    es: 'es-ES',
    de: 'de-DE',
    it: 'it-IT',
    pt: 'pt-PT',
    ur: 'ur-PK',
    ta: 'ta-IN',
    ps: 'ps-AF',
    ku: 'ku-TR',
    ce: 'ru-RU'
  };
  const activeLocale = localeMap[currentLang] || 'fr-FR';

  function formatCount(num) {
    try {
      return num.toLocaleString(activeLocale);
    } catch (e) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
  }

  function animateCountUp(target) {
    const start = Math.max(0, target - 50);
    const duration = 1000;
    const startTime = performance.now();

    function step(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(start + (target - start) * easeOut);
      counterValEl.textContent = formatCount(current);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        counterValEl.textContent = formatCount(target);
      }
    }
    requestAnimationFrame(step);
  }

  const BASE_VISITS = 14725;
  const localSaved = parseInt(localStorage.getItem('anti_coranisme_visits') || BASE_VISITS.toString(), 10);
  const fallbackCount = Math.max(BASE_VISITS, localSaved);

  fetch('/api/visits')
    .then(res => {
      if (!res.ok) throw new Error('API offline');
      return res.json();
    })
    .then(data => {
      if (data && typeof data.count === 'number' && data.count > 0) {
        window.LAST_VISIT_COUNT = data.count;
        localStorage.setItem('anti_coranisme_visits', data.count.toString());
        animateCountUp(data.count);
      } else {
        window.LAST_VISIT_COUNT = fallbackCount;
        animateCountUp(fallbackCount);
      }
    })
    .catch(() => {
      window.LAST_VISIT_COUNT = fallbackCount;
      animateCountUp(fallbackCount);
    });
}

/**
 * Rendu du menu de navigation latéral
 */
function renderSidebarNav() {
  const navList = document.getElementById('sidebar-nav-list');
  if (!navList) return;

  const currentArgs = getActiveArgumentsData();
  const ui = getActiveUI();

  navList.innerHTML = `
    <li>
      <a href="#preface" class="sidebar-nav-item" id="nav-item-preface">
        <span class="nav-arg-num">00</span>
        <span class="nav-arg-title">${ui.navPreface || ui.sidebarPreface || "Préface de l'Auteur"}</span>
      </a>
    </li>
    <li>
      <a href="#coranisme-intro" class="sidebar-nav-item" id="nav-item-coranisme-intro">
        <span class="nav-arg-num">00</span>
        <span class="nav-arg-title">${ui.navIntro || ui.sidebarIntro || "Qui sont les coranistes ?"}</span>
      </a>
    </li>
    <li>
      <a href="#boite-a-outils" class="sidebar-nav-item" id="nav-item-boite-a-outils">
        <span class="nav-arg-num">00</span>
        <span class="nav-arg-title">🧠 ${ui.navFallacies || "Boîte à outils — Reconnaître les sophismes avant de débattre"}</span>
      </a>
    </li>
    ${currentArgs.map(arg => `
      <li>
        <a href="#arg-${arg.id}" class="sidebar-nav-item" id="nav-item-${arg.id}">
          <span class="nav-arg-num">${arg.number}</span>
          <span class="nav-arg-title">${escapeHTML(arg.title)}</span>
        </a>
      </li>
    `).join('')}
  `;
}

/**
 * Routeur SPA selon le hash de l'URL
 */
function handleRouting() {
  const hash = window.location.hash.trim() || '#home';
  const mainContainer = document.getElementById('app-main-content');
  if (!mainContainer) return;

  const currentArgs = getActiveArgumentsData();
  const ui = getActiveUI();

  // Les liens de la barre de repères d'une fiche sont des ancres internes
  const sectionTargetId = hash.startsWith('#section-') ? hash.slice(1) : '';
  const sectionTarget = sectionTargetId ? document.getElementById(sectionTargetId) : null;
  if (sectionTarget) {
    requestAnimationFrame(() => {
      sectionTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    return;
  }

  // Mise à jour de l'état actif dans la sidebar
  document.querySelectorAll('.sidebar-nav-item').forEach(el => el.classList.remove('active'));

  const introductoryChapterIds = ['preface', 'coranisme-intro', 'boite-a-outils', 'sophismes'];
  const requestedIntroChapter = hash.replace('#', '');
  if (introductoryChapterIds.includes(requestedIntroChapter)) {
    const targetElementId = (requestedIntroChapter === 'sophismes') ? 'boite-a-outils' : requestedIntroChapter;
    document.title = `${ui.brandTitle || "Réfutation du Coranisme"} — ${ui.brandSubtitle || "Manuel Pratique"}`;
    renderHomeView(mainContainer);
    const activeNav = document.getElementById(`nav-item-${targetElementId}`);
    if (activeNav) activeNav.classList.add('active');
    requestAnimationFrame(() => {
      document.getElementById(targetElementId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    return;
  }

  if (hash.startsWith('#arg-') || hash.startsWith('#/arguments/')) {
    let argId;
    if (hash.startsWith('#arg-')) {
      argId = parseInt(hash.replace('#arg-', ''), 10);
    } else {
      const slug = hash.replace('#/arguments/', '');
      const matched = currentArgs.find(a => a.slug === slug || a.id.toString() === slug);
      if (matched) argId = matched.id;
    }

    const arg = currentArgs.find(a => a.id === argId);

    if (arg) {
      document.title = `${ui.argBadgeGiant || "Argument"} ${arg.number} : ${arg.title} — ${ui.brandTitle || "Réfutation du Coranisme"}`;
      const activeNav = document.getElementById(`nav-item-${arg.id}`);
      if (activeNav) activeNav.classList.add('active');
      renderArgumentView(arg, mainContainer);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
  }

  // Par défaut : Vue Accueil / Hub
  document.title = `${ui.brandTitle || "Réfutation du Coranisme"} — ${ui.brandSubtitle || "Manuel Pratique"}`;
  renderHomeView(mainContainer);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Rendu de la vue d'accueil (Hub des 10 arguments)
 */
function renderHomeView(container) {
  const currentArgs = getActiveArgumentsData();
  const ui = getActiveUI();

  container.innerHTML = `
    <!-- HERO PRINCIPAL -->
    <section class="hero-nuls">
      <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem;">
        <div class="hero-tag">
          <span>📖</span> ${ui.heroTag1 || "Manuel Pratique de Réfutation"}
        </div>
        <div class="hero-tag" style="background-color: #065F46; color: #ECFDF5; border: 2px solid #047857;">
          <span>🌿</span> ${ui.heroTag2 || "Diffusion Pédagogique Ouverte"}
        </div>
      </div>
      <h1 class="hero-title">
        ${ui.heroTitleMain || "Réfutation"} <span>${ui.heroTitleSpan || "du Coranisme"}</span>
      </h1>
      <p style="font-size: 1.05rem; font-weight: 800; color: var(--nuls-black); margin-bottom: 0.5rem;">
        ${ui.heroAuthor || "Par Salah Eddine Ahmed (Abou Soulaymane)"}
      </p>
      <p class="hero-description">
        ${ui.heroDesc || "Déconstruisez pas à pas les sophismes du coranisme avec rigueur logique."}
      </p>
      <div class="hero-actions">
        <a href="#arg-1" class="btn-hero-primary">
          <span>🚀</span> ${ui.btnStartArg1 || "Débuter par l'Argument 1"}
        </a>
        <a href="#boite-a-outils" class="btn-hero-secondary">
          <span>🧠</span> ${ui.navFallacies || "Boîte à outils — Reconnaître les sophismes avant de débattre"}
        </a>
        <button class="btn-hero-secondary" data-action="open-search">
          <span>🔍</span> ${ui.btnSearchModal || "Rechercher"}
        </button>
        <button class="btn-hero-secondary" data-action="share-arg" data-arg-id="1">
          <span>📤</span> ${ui.btnShare || "Partager"}
        </button>
      </div>
    </section>

    ${renderPrefaceHTML()}

    ${renderCoranismeIntroHTML()}

    <!-- BOÎTE À OUTILS DES SOPHISMES (AVANT LES 10 ARGUMENTS) -->
    ${renderFallaciesToolboxHTML()}

    <!-- SOMMAIRE DES 10 ARGUMENTS -->
    <div class="section-header-wrap">
      <h2 class="section-header-title">${ui.sommaireTitle || "Les 10 Grands Arguments Décryptés"}</h2>
      <span class="card-number-badge">${ui.sommaireBadge || "10 Fiches Prêtes à l'Emploi"}</span>
    </div>

    <div class="arguments-grid">
      ${currentArgs.map(arg => `
        <article class="argument-card">
          <div>
            <div class="card-top">
              <span class="card-number-badge">${ui.argBadgeGiant || "ARGUMENT"} ${arg.number}</span>
              <span class="card-theme-tag">${escapeHTML(arg.theme)}</span>
            </div>
            <h3 class="card-title">${escapeHTML(arg.title)}</h3>
            <p class="card-tagline">${escapeHTML(arg.tagline)}</p>
            <div class="card-formula-box">
              ⚡ ${escapeHTML(arg.formula)}
            </div>
          </div>
          <div class="card-footer-actions">
            <a href="#arg-${arg.id}" class="btn-read-arg">
              <span>${ui.btnReadCard || "Consulter la fiche"}</span> ➔
            </a>
            <div style="display: flex; gap: 0.35rem; align-items: center;">
              <button data-action="share-arg" data-arg-id="${arg.id}" title="${ui.btnShare || "Partager sur WhatsApp, etc."}" class="btn-download-pdf-sm">
                📤
              </button>
              <a href="pdf/${arg.pdfFile}" download title="${ui.btnDownloadPdf || "Télécharger le fascicule PDF original"}" class="btn-download-pdf-sm">
                📥
              </a>
              <button data-action="print-arg-direct" data-arg-id="${arg.id}" title="${ui.btnPrintCard || "Imprimer ou enregistrer la fiche en PDF"}" class="btn-download-pdf-sm">
                🖨️
              </button>
            </div>
          </div>
        </article>
      `).join('')}
    </div>

    <!-- CARTOUCHE METHODE GENERALE -->
    <div class="nuls-callout callout-retenir" style="margin-top: 2rem;">
      <div class="callout-header">
        <span>💡</span> ${ui.goldenRuleHeader || "Règle d'or pour débattre avec un coraniste"}
      </div>
      <h3 style="font-family: var(--font-display); font-size: 1.25rem; font-weight: 800; margin-bottom: 0.75rem; color: var(--nuls-black);">
        ${ui.goldenRuleTitle || "Ne jamais laisser l'interlocuteur déplacer le sujet"}
      </h3>
      <p style="font-size: 1rem; color: #1F2937; margin-bottom: 1rem;">
        ${ui.goldenRuleDesc || "La plupart des arguments coranistes reposent sur des glissements."}
      </p>
      <div style="background: #FFFFFF; border: 2px solid #161616; padding: 1rem; border-radius: var(--radius-sm); font-weight: 700;">
        ${ui.goldenRuleStep1 || "1. Établir d'abord ce que le Coran ordonne."}<br>
        ${ui.goldenRuleStep2 || "2. Démontrer qu'une autorité déléguée ne concurrence jamais la souveraineté divine."}<br>
        ${ui.goldenRuleStep3 || "3. Traiter ensuite méthodiquement la chaîne de transmission."}
      </div>
    </div>
  `;
}

/**
 * Rendu de la page dédiée à un argument
 */
function renderArgumentView(arg, container) {
  const currentArgs = getActiveArgumentsData();
  const ui = getActiveUI();
  const currentLang = window.CURRENT_LANG || 'fr';
  const pack = (window.I18N_DATA && window.I18N_DATA[currentLang]) ? window.I18N_DATA[currentLang] : (window.I18N_DATA ? window.I18N_DATA['fr'] : null);
  const fallaciesItems = (pack && pack.fallaciesToolbox && pack.fallaciesToolbox.items) ? pack.fallaciesToolbox.items : (window.FALLACIES_DATA || []);

  const prevArg = currentArgs.find(a => a.id === arg.id - 1);
  const nextArg = currentArgs.find(a => a.id === arg.id + 1);

  container.innerHTML = `
    <article class="argument-detail-view" id="arg-view-${arg.id}">
      
      <!-- HEADER BANDEAU JAUNE -->
      <header class="arg-header-bandeau">
        <div class="arg-header-top">
          <span class="arg-badge-giant">${ui.argBadgeGiant || "ARGUMENT"} ${arg.number} / 10</span>
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
            <button data-action="share-arg" data-arg-id="${arg.id}" class="arg-share-badge" title="${ui.btnShare || "Partager sur WhatsApp, Twitter, etc."}">
              <span>📤</span> ${ui.btnShare || "Partager"}
            </button>
            <a href="pdf/${arg.pdfFile}" download class="arg-download-badge" title="${ui.btnDownloadOriginalPdf || "Télécharger le PDF original"}">
              <span>📥</span> ${ui.btnDownloadOriginalPdf || "Télécharger le PDF original"}
            </a>
            <button data-action="print-page" class="arg-download-badge btn-print-page" title="${ui.btnPrintPage || "Imprimer / Exporter PDF"}">
              <span>🖨️</span> ${ui.btnPrintPage || "Imprimer / Exporter PDF"}
            </button>
          </div>
        </div>
        <h1 class="arg-main-title">${escapeHTML(arg.title)}</h1>
        <p class="arg-subtitle-tagline">✦ ${escapeHTML(arg.tagline)}</p>
      </header>

      <!-- FORMULE BANNER -->
      <div class="formula-banner">
        <span>⚡ ${ui.formulaRetenir || "FORMULE À RETENIR :"}</span> ${escapeHTML(arg.formula)}
      </div>

      <!-- STICKY TOC BAR -->
      <nav class="arg-sticky-bar">
        <ul class="arg-toc-links">
          <li><a href="#section-their-thesis" class="arg-toc-link">1. ${ui.tocThesis || "Leur Thèse"}</a></li>
          <li><a href="#section-logical-node" class="arg-toc-link">2. ${ui.tocLogical || "Nœud Logique"}</a></li>
          <li><a href="#section-central-principle" class="arg-toc-link">3. ${ui.tocPrinciple || "Principe Central"}</a></li>
          ${arg.quranicArchitecture.verses.length > 0 ? `<li><a href="#section-verses" class="arg-toc-link">4. ${ui.tocQuranic || "Architecture Coranique"}</a></li>` : ''}
          <li><a href="#section-analogies" class="arg-toc-link">5. ${ui.tocAnalogies || "Analogies"}</a></li>
          <li><a href="#section-30s" class="arg-toc-link">6. ${ui.tocResponses || "Réponses Prêtes"}</a></li>
          <li><a href="#section-objections" class="arg-toc-link">7. ${ui.tocObjections || "Objections"}</a></li>
          ${arg.quiz ? `<li><a href="#section-quiz" class="arg-toc-link">8. ${ui.tocQuiz || "Quiz"}</a></li>` : ''}
        </ul>
      </nav>

      <!-- CORPS DE LA FICHE -->
      <div class="arg-body-content">

        <!-- SECTION 1 : LEUR ARGUMENT -->
        <section id="section-their-thesis" class="nuls-callout callout-adverse">
          <div class="callout-header">
            <span>🔴</span> ${ui.sec1Header || "1. LEUR THÈSE & LES VERSETS QU'ILS DÉTOURNENT"}
          </div>
          <button class="btn-copy-callout" data-action="copy-section" data-target="section-their-thesis" title="${ui.btnCopySection || "Copier cette section"}">
            <span>📋</span> <span class="btn-copy-text">${ui.btnCopy || "Copier"}</span>
          </button>
          <div class="adverse-thesis">
            « ${escapeHTML(arg.theirArgument.thesis)} »
          </div>
          
          ${arg.theirArgument.verses.length > 0 ? `
            <div class="verses-container">
              ${arg.theirArgument.verses.map(v => `
                <div class="verse-item">
                  <div class="verse-header-ref">
                    <span class="verse-ref-badge">${escapeHTML(v.ref)}</span>
                  </div>
                  <div class="verse-arabic" lang="ar" dir="rtl">${v.ar}</div>
                  <div class="verse-translation">${v.translation || ''}</div>
                </div>
              `).join('')}
            </div>
          ` : ''}

          <div style="background: #FFFFFF; border: 2px solid var(--nuls-red); padding: 1rem; border-radius: var(--radius-sm); margin-top: 1rem;">
            <strong style="color: var(--nuls-red); text-transform: uppercase; font-size: 0.85rem;">${ui.sec1QuestionTitle || "La question réelle à poser :"}</strong>
            <p style="font-weight: 700; font-size: 1rem; margin-top: 0.35rem;">
              ${escapeHTML(arg.theirArgument.realQuestion)}
            </p>
          </div>
        </section>

        <!-- BLOC SOPHISMES REPÉRÉS (LOCALISÉ SELON LA LANGUE ACTIVE) -->
        ${arg.fallacies && arg.fallacies.length > 0 ? `
          <div class="arg-fallacies-box">
            <div class="arg-fallacies-header">
              <span>🧠</span> <strong>${ui.fallaciesBadgeTitle || "SOPHISMES REPÉRÉS DANS CET ARGUMENT :"}</strong>
            </div>
            <div class="arg-fallacies-badges">
              ${arg.fallacies.map(fId => {
                const fObj = fallaciesItems.find(f => f.id === fId) || { name: fId, icon: "⚡" };
                return `
                  <button class="fallacy-badge" data-action="open-fallacy" data-fallacy-id="${fId}" aria-label="${escapeHTML(fObj.name)}">
                    <span>${fObj.icon || "⚡"}</span> <span>${escapeHTML(fObj.name)}</span>
                  </button>
                `;
              }).join('')}
            </div>
          </div>
        ` : ''}

        <!-- SECTION 2 : LE NŒUD LOGIQUE -->
        <section id="section-logical-node" class="nuls-callout callout-retenir">
          <div class="callout-header">
            <span>💡</span> ${ui.sec2Header || "2. LE NŒUD LOGIQUE DU PROBLÈME"}
          </div>
          <button class="btn-copy-callout" data-action="copy-section" data-target="section-logical-node" title="${ui.btnCopySection || "Copier cette section"}">
            <span>📋</span> <span class="btn-copy-text">${ui.btnCopy || "Copier"}</span>
          </button>
          <h3 style="font-family: var(--font-display); font-size: 1.35rem; font-weight: 800; margin-bottom: 1rem; color: var(--nuls-black);">
            ${escapeHTML(arg.logicalNode.title)}
          </h3>

          <div class="distinction-grid">
            ${arg.logicalNode.distinctions.map(d => `
              <div class="distinction-card">
                <div class="distinction-term">${escapeHTML(d.term)}</div>
                <div class="distinction-desc">${escapeHTML(d.desc)}</div>
              </div>
            `).join('')}
          </div>

          <div style="background: #FFFFFF; border: 2px solid var(--nuls-black); padding: 1rem; border-radius: var(--radius-sm); margin-bottom: 1rem;">
            <strong>📌 ${ui.sec2GeneralRule || "RÈGLE GÉNÉRALE :"}</strong> ${escapeHTML(arg.logicalNode.generalRule)}
          </div>

          <div class="nuls-callout callout-piege" style="box-shadow: none; padding: 1.25rem;">
            <div class="callout-header">
              <span>⚠️</span> ${ui.sec2ErrorAvoid || "Erreur & Sophisme à Éviter"}
            </div>
            <p style="font-weight: 700; color: #991B1B;">
              ${escapeHTML(arg.logicalNode.errorToAvoid)}
            </p>
          </div>
        </section>

        <!-- SECTION 3 : PRINCIPE CENTRAL -->
        <section id="section-central-principle" class="nuls-callout callout-analogie">
          <div class="callout-header">
            <span>⚙️</span> ${ui.sec3Header || "3. LE PRINCIPE CENTRAL DE RÉFUTATION"}
          </div>
          <button class="btn-copy-callout" data-action="copy-section" data-target="section-central-principle" title="${ui.btnCopySection || "Copier cette section"}">
            <span>📋</span> <span class="btn-copy-text">${ui.btnCopy || "Copier"}</span>
          </button>
          <h3 style="font-family: var(--font-display); font-size: 1.35rem; font-weight: 800; margin-bottom: 1rem;">
            ${escapeHTML(arg.centralPrinciple.title)}
          </h3>
          <pre style="background: #FAF9F5; border: 2px solid #161616; padding: 1.25rem; border-radius: var(--radius-sm); font-family: inherit; font-size: 0.95rem; font-weight: 700; white-space: pre-wrap; line-height: 1.6; margin-bottom: 1rem;">${escapeHTML(arg.centralPrinciple.formalScheme)}</pre>
          <p style="font-size: 1rem; color: #1F2937; margin-bottom: 1rem;">
            ${escapeHTML(arg.centralPrinciple.explanation)}
          </p>
          <div style="background: var(--nuls-yellow-tint); border: 2px solid var(--nuls-black); padding: 1rem; border-radius: var(--radius-sm); font-weight: 800;">
            🧪 ${ui.sec3LogicalTest || "TEST LOGIQUE :"} ${escapeHTML(arg.centralPrinciple.logicalTest)}
          </div>
        </section>

        <!-- SECTION 4 : ARCHITECTURE CORANIQUE -->
        ${arg.quranicArchitecture.verses.length > 0 ? `
          <section id="section-verses" class="nuls-callout callout-retenir">
            <div class="callout-header">
              <span>📖</span> ${ui.sec4Header || "4. L'ARCHITECTURE CORANIQUE COMPLÈTE"}
            </div>
            <button class="btn-copy-callout" data-action="copy-section" data-target="section-verses" title="${ui.btnCopySection || "Copier cette section"}">
              <span>📋</span> <span class="btn-copy-text">${ui.btnCopy || "Copier"}</span>
            </button>
            <h3 style="font-family: var(--font-display); font-size: 1.35rem; font-weight: 800; margin-bottom: 1rem;">
              ${escapeHTML(arg.quranicArchitecture.title)}
            </h3>
            <div class="verses-container">
              ${arg.quranicArchitecture.verses.map(v => `
                <div class="verse-item">
                  <div class="verse-header-ref">
                    <span class="verse-ref-badge">${escapeHTML(v.ref)}</span>
                  </div>
                  <div class="verse-arabic" lang="ar" dir="rtl">${v.ar}</div>
                  <div class="verse-translation">${v.translation || ''}</div>
                </div>
              `).join('')}
            </div>
            <div style="background: #FFFFFF; border: 2px solid var(--nuls-black); padding: 1rem; border-radius: var(--radius-sm); font-weight: 700; margin-top: 1rem;">
              ⚖️ ${ui.sec4Consequence || "CONSÉQUENCE :"} ${escapeHTML(arg.quranicArchitecture.consequence)}
            </div>
          </section>
        ` : ''}

        <!-- SECTION 5 : LES ANALOGIES DU MANUEL -->
        <section id="section-analogies" class="nuls-callout callout-analogie">
          <div class="callout-header">
            <span>⚖️</span> ${ui.sec5Header || "5. LES ANALOGIES PÉDAGOGIQUES"}
          </div>
          <button class="btn-copy-callout" data-action="copy-section" data-target="section-analogies" title="${ui.btnCopySection || "Copier cette section"}">
            <span>📋</span> <span class="btn-copy-text">${ui.btnCopy || "Copier"}</span>
          </button>
          <div class="analogies-list">
            ${arg.analogies.map(a => `
              <div class="analogie-card">
                <div class="analogie-title">
                  <span style="background: var(--nuls-black); color: var(--nuls-yellow); padding: 0.15rem 0.5rem; border-radius: 4px; font-size: 0.8rem;">#${a.num}</span>
                  ${escapeHTML(a.title)}
                </div>
                <div class="analogie-scenario">
                  <strong>${ui.labelSituation || "Situation :"}</strong> ${escapeHTML(a.scenario)}
                </div>
                <div class="analogie-logic-box">
                  <strong>${ui.labelLogic || "Mécanisme logique :"}</strong> ${escapeHTML(a.logic)}
                </div>
                <div class="analogie-lesson">
                  <strong>${ui.labelLesson || "Enseignement :"}</strong> ${escapeHTML(a.lesson)}
                </div>
                <div style="font-size: 0.85rem; font-weight: 700; color: var(--nuls-black); border-top: 1px solid #E5E7EB; padding-top: 0.5rem;">
                  <strong>${ui.labelApplication || "Application au débat :"}</strong> ${escapeHTML(a.application)}
                </div>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- SECTION 6 : RÉPONSE PRÊTE EN 30 SECONDES -->
        <section id="section-30s" class="nuls-callout callout-chrono">
          <div class="callout-header">
            <span>⏱️</span> ${ui.sec6Header || "6. RÉPONSES PRÊTES À L'EMPLOI"}
          </div>
          <button class="btn-copy-callout" data-action="copy-section" data-target="section-30s" title="${ui.btnCopySection || "Copier cette section"}">
            <span>📋</span> <span class="btn-copy-text">${ui.btnCopy || "Copier"}</span>
          </button>
          <div class="quick-response-container">
            <h3 style="font-family: var(--font-display); font-size: 1.25rem; font-weight: 800; color: var(--nuls-black);">
              ${ui.sec6QuickTitle || "Réponse Éclair (30 Secondes)"}
            </h3>
            <div class="quick-response-text" id="quick-text-${arg.id}">
              ${escapeHTML(arg.readyResponses.quick30s)}
            </div>
            <button class="btn-copy-fast" data-action="copy-30s" data-arg-id="${arg.id}">
              <span>📋</span> ${ui.btnCopyQuick || "Copier la réponse 30s en 1 clic"}
            </button>

            <h4 style="font-family: var(--font-display); font-size: 1.1rem; font-weight: 800; margin-top: 1.5rem; color: var(--nuls-black);">
              ${ui.sec6DevTitle || "Réponse Développée & Argumentée"}
            </h4>
            <div style="background: #FAF9F5; padding: 1.25rem; border-radius: var(--radius-sm); border: var(--border-medium); font-size: 1rem; line-height: 1.6;">
              ${escapeHTML(arg.readyResponses.developed)}
            </div>
          </div>
        </section>

        <!-- SECTION 7 : OBJECTIONS & CADRAGE -->
        <section id="section-objections" class="nuls-callout callout-cadrage">
          <div class="callout-header">
            <span>🎯</span> ${ui.sec7Header || "7. OBJECTIONS CORANISTES & LEURS RÉPONSES"}
          </div>
          <button class="btn-copy-callout" data-action="copy-section" data-target="section-objections" title="${ui.btnCopySection || "Copier cette section"}">
            <span>📋</span> <span class="btn-copy-text">${ui.btnCopy || "Copier"}</span>
          </button>
          
          <div class="objections-list">
            ${arg.objections.map((o, idx) => `
              <div class="objection-item">
                <button class="objection-title-btn" data-action="toggle-objection">
                  <span><strong>${ui.labelObjection || "Objection"} ${idx + 1} :</strong> ${escapeHTML(o.obj)}</span>
                  <span>▼</span>
                </button>
                <div class="objection-content">
                  <strong>${ui.labelMethodicAnswer || "Réponse méthodique :"}</strong> ${escapeHTML(o.ans)}
                </div>
              </div>
            `).join('')}
          </div>

          <h3 style="font-family: var(--font-display); font-size: 1.2rem; font-weight: 800; margin-top: 2rem; margin-bottom: 0.75rem; color: #1E3A8A;">
            ${ui.sec7DirectQuestions || "Questions de cadrage directes :"}
          </h3>
          <ul style="padding-left: 1.5rem; display: flex; flex-direction: column; gap: 0.6rem; font-weight: 700; color: #1E293B;">
            ${arg.framingQuestions.map(q => `<li>${escapeHTML(q)}</li>`).join('')}
          </ul>
        </section>

        <!-- SECTION 8 : QUIZ INTERACTIF -->
        ${arg.quiz ? `
          <section id="section-quiz" class="quiz-section-wrap">
            <div class="quiz-header">
              <h3>📝 ${ui.sec8Header || "8. TESTEZ VOTRE COMPRÉHENSION"}</h3>
              <span class="card-number-badge">${ui.sec8Sub || "Quiz"}</span>
            </div>
            <div class="quiz-items-list">
              ${arg.quiz.map((item, qIdx) => `
                <div class="quiz-item" data-qidx="${qIdx}">
                  <div class="quiz-question">${qIdx + 1}. ${escapeHTML(item.q)}</div>
                  <div class="quiz-options">
                    ${item.options.map((opt, oIdx) => `
                      <button class="quiz-option-btn" data-action="quiz-answer" data-arg-id="${arg.id}" data-q-idx="${qIdx}" data-o-idx="${oIdx}">
                        ${String.fromCharCode(65 + oIdx)}. ${escapeHTML(opt)}
                      </button>
                    `).join('')}
                  </div>
                  <div class="quiz-feedback" id="quiz-feedback-${arg.id}-${qIdx}"></div>
                </div>
              `).join('')}
            </div>
          </section>
        ` : ''}

        <!-- SECTION 9 : CONCLUSION EN CHAÎNE LOGIQUE -->
        <section id="section-conclusion" class="nuls-callout callout-retenir">
          <div class="callout-header">
            <span>🏁</span> ${ui.sec9Header || "9. CONCLUSION EN CHAÎNE LOGIQUE"}
          </div>
          <button class="btn-copy-callout" data-action="copy-section" data-target="section-conclusion" title="${ui.btnCopySection || "Copier cette section"}">
            <span>📋</span> <span class="btn-copy-text">${ui.btnCopy || "Copier"}</span>
          </button>
          <div style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1.25rem;">
            ${arg.conclusion.steps.map((s, idx) => `
              <div style="background: #FFFFFF; border: var(--border-medium); padding: 0.75rem 1rem; border-radius: var(--radius-sm); font-weight: 700; display: flex; align-items: center; gap: 0.75rem;">
                <span style="background: var(--nuls-black); color: var(--nuls-yellow); width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; flex-shrink: 0;">${idx + 1}</span>
                <span>${escapeHTML(s)}</span>
              </div>
            `).join('')}
          </div>

          <div style="background: var(--nuls-black); color: var(--nuls-yellow); padding: 1.25rem; border-radius: var(--radius-sm); text-align: center; font-size: 1.1rem; font-weight: 900; margin-bottom: 1rem;">
            ${escapeHTML(arg.conclusion.finalText)}
          </div>

          <div style="background: #FFFFFF; border: 3px solid var(--nuls-red); padding: 1rem; border-radius: var(--radius-sm); text-align: center; font-weight: 800; color: var(--nuls-red); font-size: 1.05rem;">
            📢 « ${escapeHTML(arg.conclusion.punchline)} »
          </div>
        </section>

        <!-- BANDEAU DE PARTAGE DE LA FICHE -->
        <div class="arg-share-footer-card" style="background: var(--nuls-yellow-tint); border: 2px solid var(--nuls-black); border-radius: var(--radius-md); padding: 1.25rem; margin-top: 2rem; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 1rem;">
          <div>
            <h4 style="font-family: var(--font-display); font-size: 1.15rem; font-weight: 900; color: var(--nuls-black);">
              ${ui.shareCardTitle || "Partager cette réfutation"}
            </h4>
            <p style="font-size: 0.9rem; color: #4B5563; font-weight: 600;">
              ${ui.shareCardDesc || "Diffusez cette fiche pour l'étude et la défense de la Sunna sur WhatsApp, Telegram ou les réseaux."}
            </p>
          </div>
          <button class="btn-hero-primary" data-action="share-arg" data-arg-id="${arg.id}" style="padding: 0.65rem 1.25rem; font-size: 0.95rem;">
            <span>📤</span> ${ui.btnShare || "Partager la fiche"}
          </button>
        </div>

        <!-- PAGINATION BAR (PRECEDENT / SUIVANT) -->
        <div class="arg-pagination-bar">
          ${prevArg ? `
            <a href="#arg-${prevArg.id}" class="btn-pag-nav">
              ⬅ ${ui.navPrevArg || "Argument précédent"} (${prevArg.number})
            </a>
          ` : `
            <a href="#home" class="btn-pag-nav">
              🏠 ${ui.navBackSummary || "Retour au sommaire"}
            </a>
          `}

          <a href="#home" class="btn-hero-secondary" style="font-size: 0.85rem; padding: 0.5rem 1rem;">
            ${ui.summaryTitle || "Sommaire"}
          </a>

          ${nextArg ? `
            <a href="#arg-${nextArg.id}" class="btn-pag-nav">
              ${ui.navNextArg || "Argument suivant"} (${nextArg.number}) ➔
            </a>
          ` : `
            <a href="#home" class="btn-pag-nav">
              🎉 ${ui.navEndManual || "Fin du Manuel"}
            </a>
          `}
        </div>

      </div>
    </article>
  `;
}

/**
 * Modale de consultation rapide d'un sophisme (Entièrement localisée selon la langue active)
 */
window.openFallacyModal = function(fallacyId) {
  window.LAST_OPENED_FALLACY_ID = fallacyId;
  const currentLang = window.CURRENT_LANG || 'fr';
  const pack = (window.I18N_DATA && window.I18N_DATA[currentLang]) ? window.I18N_DATA[currentLang] : (window.I18N_DATA ? window.I18N_DATA['fr'] : null);
  const data = (pack && pack.fallaciesToolbox) ? pack.fallaciesToolbox : null;
  const items = data ? data.items : (window.FALLACIES_DATA || []);
  const f = items.find(item => item.id === fallacyId) || items[0];
  if (!f) return;

  const modal = document.getElementById('fallacy-modal');
  const titleEl = document.getElementById('fallacy-modal-title');
  const bodyEl = document.getElementById('fallacy-modal-body');
  const ui = getActiveUI();

  if (titleEl) titleEl.innerHTML = `<span>${f.icon || '🧠'}</span> ${f.num ? f.num + '. ' : ''}${escapeHTML(f.name)}`;
  if (bodyEl) {
    bodyEl.innerHTML = `
      <div class="nuls-callout callout-retenir" style="margin-bottom: 1.25rem;">
        <div class="callout-header"><span>📖</span> ${data?.labelDefinition || "Définition"}</div>
        <p style="font-size: 1rem; font-weight: 700; color: var(--nuls-black); line-height: 1.5;">
          ${escapeHTML(f.definition)}
        </p>
      </div>

      <div class="fallacy-detail-block" style="margin-bottom: 1rem; background-color: #FFFFFF;">
        <div class="fallacy-detail-label">${data?.labelGeneralExample || "🌍 Exemple Général"}</div>
        <p style="font-size: 0.95rem; color: #374151; line-height: 1.5;">
          ${escapeHTML(f.generalExample)}
        </p>
      </div>

      <div class="fallacy-detail-block" style="margin-bottom: 1rem; background-color: var(--nuls-yellow-tint); border: 2px solid var(--nuls-black);">
        <div class="fallacy-detail-label">${data?.labelQuranicApp || "🕌 Application au Débat"}</div>
        <p style="font-size: 0.95rem; color: #111827; line-height: 1.6; white-space: pre-line; font-weight: 600;">
          ${escapeHTML(f.quranicApplication)}
        </p>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0.65rem; margin-bottom: 1.25rem;">
        <div style="background: #FFFFFF; border: 2px solid var(--nuls-blue); padding: 0.75rem 1rem; border-radius: var(--radius-sm); font-size: 0.9rem;">
          <strong style="color: var(--nuls-blue);">${data?.labelQuestionToAsk || "❓ Question réflexe à poser :"}</strong><br>
          ${escapeHTML(f.questionToAsk)}
        </div>
        <div style="background: #FFFFFF; border: 2px solid var(--nuls-green); padding: 0.75rem 1rem; border-radius: var(--radius-sm); font-size: 0.9rem;">
          <strong style="color: var(--nuls-green);">${data?.labelShortAnswer || "💬 Réponse courte :"}</strong><br>
          ${escapeHTML(f.shortAnswer)}
        </div>
      </div>

      <div style="text-align: center; border-top: 1px solid #E5E7EB; padding-top: 1rem;">
        <a href="#boite-a-outils" class="btn-hero-secondary" data-action="close-modal" data-modal-id="fallacy-modal" style="display: inline-flex; font-size: 0.9rem; padding: 0.5rem 1rem;">
          <span>📚</span> ${ui.btnOpenToolbox || "Consulter toute la Boîte à outils"}
        </a>
      </div>
    `;
  }

  if (modal) modal.classList.add('open');
};

/**
 * Déplier / replier une carte de sophisme en accordéon
 */
function toggleFallacyCard(triggerElement) {
  const card = triggerElement.closest('.fallacy-card');
  if (!card) return;
  const body = card.querySelector('.fallacy-card-body');
  const btn = card.querySelector('.btn-toggle-fallacy');
  if (!body) return;

  const currentLang = window.CURRENT_LANG || 'fr';
  const pack = (window.I18N_DATA && window.I18N_DATA[currentLang]) ? window.I18N_DATA[currentLang] : (window.I18N_DATA ? window.I18N_DATA['fr'] : null);
  const data = (pack && pack.fallaciesToolbox) ? pack.fallaciesToolbox : null;
  const btnDetailsText = (data && data.btnDetails) ? data.btnDetails : "Détails";
  const btnHideText = (data && data.btnHide) ? data.btnHide : "Masquer";

  const isOpen = body.classList.toggle('open');
  if (btn) {
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    btn.innerHTML = isOpen ? `<span>${escapeHTML(btnHideText)}</span> <span>▲</span>` : `<span>${escapeHTML(btnDetailsText)}</span> <span>▼</span>`;
  }
}

/**
 * Gestion du quiz interactif sur les sophismes
 */
function handleFallacyQuizAnswer(quizId, selectedId, correctId, explanation, btn) {
  const parent = btn.parentElement;
  const allBtns = parent.querySelectorAll('.quiz-option-btn');
  const feedbackEl = document.getElementById(`fallacy-quiz-feedback-${quizId}`);
  if (!feedbackEl) return;

  allBtns.forEach(b => b.disabled = true);

  if (selectedId === correctId) {
    btn.classList.add('correct');
    feedbackEl.className = 'quiz-feedback show correct';
    feedbackEl.innerHTML = `✅ <strong>Bravo !</strong> ${escapeHTML(explanation)}`;
  } else {
    btn.classList.add('wrong');
    const correctBtn = parent.querySelector(`[data-selected-id="${correctId}"]`);
    if (correctBtn) correctBtn.classList.add('correct');
    feedbackEl.className = 'quiz-feedback show wrong';
    feedbackEl.innerHTML = `❌ <strong>Incorrect.</strong> ${escapeHTML(explanation)}`;
  }
}

/**
 * Copie d'une section entière avec mise en forme propre et attribution
 */
function copySection(targetId, btn) {
  const section = document.getElementById(targetId);
  if (!section) return;

  const ui = getActiveUI();

  // Cloner l'élément pour nettoyer les boutons et contrôles interactifs
  const clone = section.cloneNode(true);
  clone.querySelectorAll('button, .btn-copy-callout, .btn-copy-fast, .quiz-options, .quiz-feedback').forEach(el => el.remove());

  const cleanText = clone.innerText.trim();
  const currentHash = window.location.hash || '#home';
  const attribution = `\n\n📖 [Manuel de Réfutation du Coranisme — Par Salah Eddine Ahmed (Abou Soulaymane)]\n🔗 https://anti-coranisme.novaskill.tech/${currentHash}`;
  const fullText = cleanText + attribution;

  navigator.clipboard.writeText(fullText).then(() => {
    showToast(ui.toastSectionCopied || "✅ Section copiée dans le presse-papier !");
    if (btn) {
      const originalHTML = btn.innerHTML;
      btn.innerHTML = `<span>✅</span> <span class="btn-copy-text">${ui.copied || "Copié !"}</span>`;
      btn.classList.add('copied');
      setTimeout(() => {
        btn.innerHTML = originalHTML;
        btn.classList.remove('copied');
      }, 2000);
    }
  }).catch(err => {
    console.error("Erreur lors de la copie :", err);
    showToast("⚠️ Impossible de copier automatiquement.");
  });
}

/**
 * Copie dans le presse-papier avec confirmation Toast (Réponse 30s)
 */
function copyToClipboard(argId) {
  const textEl = document.getElementById(`quick-text-${argId}`);
  if (!textEl) return;

  const ui = getActiveUI();
  const cleanText = textEl.innerText.trim();
  const attribution = `\n\n📖 [Manuel de Réfutation du Coranisme — Par Salah Eddine Ahmed (Abou Soulaymane)]\n🔗 https://anti-coranisme.novaskill.tech/#arg-${argId}`;
  const fullText = cleanText + attribution;

  navigator.clipboard.writeText(fullText).then(() => {
    showToast(ui.toastCopySuccess || "✅ Réponse 30s copiée dans le presse-papier !");
  }).catch(err => {
    console.error("Erreur copie", err);
    showToast("⚠️ Impossible de copier automatiquement.");
  });
}

/**
 * Gestion du partage natif (Web Share API) et fallback modale sociale
 */
function shareArgument(argId) {
  const currentArgs = getActiveArgumentsData();
  const ui = getActiveUI();
  const idNum = parseInt(argId, 10);
  const arg = currentArgs.find(a => a.id === idNum) || currentArgs[0];

  const shareTitle = `${ui.argBadgeGiant || "Argument"} ${arg ? arg.number : ''} : ${arg ? arg.title : 'Réfutation du Coranisme'}`;
  const shareText = arg 
    ? `« ${arg.title} »\n⚡ ${arg.formula}\n\n📖 Manuel de Réfutation du Coranisme — Par Salah Eddine Ahmed (Abou Soulaymane)`
    : `Manuel de Réfutation du Coranisme — Par Salah Eddine Ahmed (Abou Soulaymane)`;
  const lang = window.CURRENT_LANG || 'fr';
  const shareUrl = arg ? `https://anti-coranisme.novaskill.tech/${lang}#arg-${arg.id}` : `https://anti-coranisme.novaskill.tech/${lang}`;

  if (navigator.share) {
    navigator.share({
      title: shareTitle,
      text: shareText,
      url: shareUrl
    }).catch(err => {
      if (err.name !== 'AbortError') {
        openShareModal(shareTitle, shareText, shareUrl);
      }
    });
  } else {
    openShareModal(shareTitle, shareText, shareUrl);
  }
}

function openShareModal(title, text, url) {
  const modal = document.getElementById('share-modal');
  if (!modal) return;

  const encText = encodeURIComponent(`${text}\n\n${url}`);
  const encUrl = encodeURIComponent(url);
  const encTitle = encodeURIComponent(title);

  const waBtn = document.getElementById('share-link-whatsapp');
  if (waBtn) waBtn.href = `https://api.whatsapp.com/send?text=${encText}`;

  const tgBtn = document.getElementById('share-link-telegram');
  if (tgBtn) tgBtn.href = `https://t.me/share/url?url=${encUrl}&text=${encodeURIComponent(text)}`;

  const twBtn = document.getElementById('share-link-twitter');
  if (twBtn) twBtn.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encUrl}`;

  const fbBtn = document.getElementById('share-link-facebook');
  if (fbBtn) fbBtn.href = `https://www.facebook.com/sharer/sharer.php?u=${encUrl}`;

  const emBtn = document.getElementById('share-link-email');
  if (emBtn) emBtn.href = `mailto:?subject=${encTitle}&body=${encText}`;

  const inputUrl = document.getElementById('share-input-url');
  if (inputUrl) inputUrl.value = url;

  modal.classList.add('open');
}

function initShareModal() {
  const copyBtn = document.getElementById('share-btn-copy-url');
  const copyInlineBtn = document.getElementById('share-btn-copy-inline');
  const inputUrl = document.getElementById('share-input-url');
  const ui = getActiveUI();

  const handleCopy = () => {
    if (inputUrl && inputUrl.value) {
      navigator.clipboard.writeText(inputUrl.value).then(() => {
        showToast(ui.toastLinkCopied || "✅ Lien copié dans le presse-papier !");
      });
    }
  };

  if (copyBtn) copyBtn.addEventListener('click', handleCopy);
  if (copyInlineBtn) copyInlineBtn.addEventListener('click', handleCopy);
}

function showToast(message) {
  let toast = document.getElementById('app-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'app-toast';
    toast.className = 'toast-notification';
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

/**
 * Gestion du quiz interactif des fiches
 */
function handleQuizAnswer(argId, qIdx, selectedIdx, btn) {
  const currentArgs = getActiveArgumentsData();
  const ui = getActiveUI();
  const arg = currentArgs.find(a => a.id === argId);
  if (!arg || !arg.quiz || !arg.quiz[qIdx]) return;

  const question = arg.quiz[qIdx];
  const feedbackEl = document.getElementById(`quiz-feedback-${argId}-${qIdx}`);
  const parentOptions = btn.parentElement;
  const allBtns = parentOptions.querySelectorAll('.quiz-option-btn');

  allBtns.forEach(b => b.disabled = true);

  if (selectedIdx === question.answer) {
    btn.classList.add('correct');
    if (feedbackEl) {
      feedbackEl.className = 'quiz-feedback show correct';
      feedbackEl.innerHTML = `✅ <strong>${ui.quizBravo || "Bravo !"}</strong> ${escapeHTML(question.explanation)}`;
    }
  } else {
    btn.classList.add('wrong');
    allBtns[question.answer].classList.add('correct');
    if (feedbackEl) {
      feedbackEl.className = 'quiz-feedback show wrong';
      feedbackEl.innerHTML = `❌ <strong>${ui.quizIncorrect || "Incorrect."}</strong> ${escapeHTML(question.explanation)}`;
    }
  }
}

/**
 * Accordéons Objections
 */
function toggleObjection(btn) {
  const content = btn.nextElementSibling;
  if (!content) return;

  if (content.style.display === 'none' || content.style.display === '') {
    content.style.display = 'block';
    btn.querySelector('span:last-child').textContent = '▲';
  } else {
    content.style.display = 'none';
    btn.querySelector('span:last-child').textContent = '▼';
  }
}

/**
 * Module de Recherche Rapide
 */
function initSearchModal() {
  const modal = document.getElementById('search-modal');
  const input = document.getElementById('search-modal-input');
  const resultsContainer = document.getElementById('search-results-list');

  if (!modal || !input || !resultsContainer) return;

  window.openSearchModal = function() {
    modal.classList.add('open');
    input.value = '';
    input.focus();
    renderSearchResults('');
  };

  window.closeSearchModal = function() {
    modal.classList.remove('open');
  };

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeSearchModal();
  });

  input.addEventListener('input', (e) => {
    renderSearchResults(e.target.value.toLowerCase().trim());
  });

  function renderSearchResults(query) {
    const currentArgs = getActiveArgumentsData();
    const ui = getActiveUI();
    const labelArg = ui.argBadgeGiant || 'Argument';

    if (!query) {
      resultsContainer.innerHTML = currentArgs.map(arg => `
        <div class="search-result-item" data-action="jump-arg" data-arg-id="${arg.id}">
          <h4>${escapeHTML(labelArg)} ${arg.number} : ${escapeHTML(arg.title)}</h4>
          <p>${escapeHTML(arg.tagline)}</p>
        </div>
      `).join('');
      return;
    }

    const filtered = currentArgs.filter(arg => {
      const titleMatch = arg.title.toLowerCase().includes(query);
      const taglineMatch = arg.tagline.toLowerCase().includes(query);
      const formulaMatch = arg.formula.toLowerCase().includes(query);
      const thesisMatch = arg.theirArgument.thesis.toLowerCase().includes(query);
      const versesMatch = arg.theirArgument.verses.some(v => 
        (v.ref && v.ref.toLowerCase().includes(query)) ||
        (v.ar && v.ar.toLowerCase().includes(query)) ||
        (v.translation && v.translation.toLowerCase().includes(query))
      );
      const quranicVersesMatch = arg.quranicArchitecture.verses.some(v => 
        (v.ref && v.ref.toLowerCase().includes(query)) ||
        (v.ar && v.ar.toLowerCase().includes(query)) ||
        (v.translation && v.translation.toLowerCase().includes(query))
      );
      return titleMatch || taglineMatch || formulaMatch || thesisMatch || versesMatch || quranicVersesMatch;
    });

    if (filtered.length === 0) {
      resultsContainer.innerHTML = `
        <div style="text-align: center; padding: 2rem; color: var(--text-muted); font-weight: 700;">
          ${ui.searchNoResults || "Aucun résultat trouvé pour cette recherche."}
        </div>
      `;
      return;
    }

    resultsContainer.innerHTML = filtered.map(arg => `
      <div class="search-result-item" data-action="jump-arg" data-arg-id="${arg.id}">
        <h4>${escapeHTML(labelArg)} ${arg.number} : ${escapeHTML(arg.title)}</h4>
        <p>${escapeHTML(arg.formula)}</p>
        <span style="font-size: 0.75rem; font-weight: 700; color: var(--nuls-black); background: var(--nuls-yellow); padding: 0.15rem 0.4rem; border-radius: 3px;">
          ${escapeHTML(arg.theme)}
        </span>
      </div>
    `).join('');
  }

  window.jumpToArg = function(id) {
    closeSearchModal();
    window.location.hash = `#arg-${id}`;
  };
}

/**
 * Mobile Drawer Menu
 */
window.toggleDrawer = function(shouldOpen) {
  const sidebar = document.getElementById('app-sidebar');
  const backdrop = document.getElementById('drawer-backdrop');
  if (!sidebar) return;

  const isOpen = shouldOpen !== undefined ? shouldOpen : !sidebar.classList.contains('drawer-open');
  if (isOpen) {
    sidebar.classList.add('drawer-open');
    if (backdrop) backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  } else {
    sidebar.classList.remove('drawer-open');
    if (backdrop) backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }
};

function initMobileDrawer() {
  const toggleBtn = document.getElementById('btn-toggle-drawer');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => toggleDrawer());
  }

  // Fermer le drawer lors d'un clic sur un lien
  document.querySelectorAll('.sidebar-nav-item, .btn-sidebar-home, .btn-sidebar-contact').forEach(item => {
    item.addEventListener('click', () => {
      toggleDrawer(false);
    });
  });
}

/**
 * Fonctions génériques pour les Modaux
 */
window.openModal = function(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.add('open');
};

window.closeModal = function(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove('open');
};

window.closePortal = function() {
  window.closeModal('barbahari-modal');
};

window.openPortal = function() {
  window.openModal('barbahari-modal');
};

window.openLangGateway = function() {
  const gate = document.getElementById('lang-gateway');
  if (gate) {
    gate.style.display = 'flex';
    requestAnimationFrame(() => {
      gate.style.opacity = '1';
      gate.style.pointerEvents = 'auto';
    });
  }
};

window.closeLangGateway = function() {
  const gate = document.getElementById('lang-gateway');
  if (gate) {
    gate.style.opacity = '0';
    gate.style.pointerEvents = 'none';
    setTimeout(() => {
      gate.style.display = 'none';
    }, 350);
  }
};

/**
 * Gestion centralisée des événements (Event Delegation)
 */
document.addEventListener('click', (e) => {
  const target = e.target.closest('[data-action]');
  if (!target) return;

  const action = target.getAttribute('data-action');

  switch (action) {
    case 'open-lang-gateway':
      if (typeof window.openLangGateway === 'function') window.openLangGateway();
      break;

    case 'open-search':
      if (typeof window.openSearchModal === 'function') window.openSearchModal();
      break;

    case 'close-search':
      if (typeof window.closeSearchModal === 'function') window.closeSearchModal();
      break;

    case 'open-portal':
      if (typeof window.openModal === 'function') window.openModal('barbahari-modal');
      break;

    case 'close-portal':
      if (typeof window.closeModal === 'function') window.closeModal('barbahari-modal');
      break;

    case 'open-modal': {
      const modalId = target.getAttribute('data-modal-id');
      if (modalId && typeof window.openModal === 'function') window.openModal(modalId);
      break;
    }

    case 'flip-book': {
      const bookEl = document.getElementById('book-3d-interactive');
      if (bookEl) {
        bookEl.classList.toggle('is-flipped');
        if (!bookEl.classList.contains('is-flipped')) {
          bookEl.style.transform = '';
        }
      }
      break;
    }

    case 'close-modal': {
      const modalId = target.getAttribute('data-modal-id');
      if (modalId && typeof window.closeModal === 'function') window.closeModal(modalId);
      break;
    }

    case 'toggle-drawer': {
      const state = target.getAttribute('data-drawer-state');
      const shouldOpen = state !== null ? state === 'true' : undefined;
      if (typeof window.toggleDrawer === 'function') window.toggleDrawer(shouldOpen);
      break;
    }

    case 'copy-section': {
      const targetId = target.getAttribute('data-target');
      if (targetId && typeof copySection === 'function') copySection(targetId, target);
      break;
    }

    case 'share-arg': {
      const argId = target.getAttribute('data-arg-id');
      if (typeof shareArgument === 'function') shareArgument(argId || '1');
      break;
    }

    case 'copy-30s': {
      const argId = target.getAttribute('data-arg-id');
      if (argId && typeof copyToClipboard === 'function') copyToClipboard(parseInt(argId, 10));
      break;
    }

    case 'open-fallacy': {
      const fallacyId = target.getAttribute('data-fallacy-id');
      if (fallacyId && typeof window.openFallacyModal === 'function') {
        window.openFallacyModal(fallacyId);
      }
      break;
    }

    case 'toggle-fallacy-card': {
      if (typeof toggleFallacyCard === 'function') {
        toggleFallacyCard(target);
      }
      break;
    }

    case 'fallacy-quiz-answer': {
      const qId = target.getAttribute('data-quiz-id');
      const sId = target.getAttribute('data-selected-id');
      const cId = target.getAttribute('data-correct-id');
      const exp = target.getAttribute('data-explanation');
      if (typeof handleFallacyQuizAnswer === 'function') {
        handleFallacyQuizAnswer(qId, sId, cId, exp, target);
      }
      break;
    }

    case 'toggle-objection':
      if (typeof toggleObjection === 'function') toggleObjection(target);
      break;

    case 'quiz-answer': {
      const argId = parseInt(target.getAttribute('data-arg-id'), 10);
      const qIdx = parseInt(target.getAttribute('data-q-idx'), 10);
      const oIdx = parseInt(target.getAttribute('data-o-idx'), 10);
      if (typeof handleQuizAnswer === 'function') handleQuizAnswer(argId, qIdx, oIdx, target);
      break;
    }

    case 'jump-arg': {
      const argId = target.getAttribute('data-arg-id');
      if (argId && typeof window.jumpToArg === 'function') window.jumpToArg(argId);
      break;
    }

    case 'print-page':
      window.print();
      break;

    case 'print-arg-direct': {
      const argId = target.getAttribute('data-arg-id');
      if (argId) {
        window.location.hash = `#arg-${argId}`;
        setTimeout(() => {
          window.print();
        }, 300);
      }
      break;
    }

    default:
      break;
  }
});


/**
 * Initialisation et logique du livre 3D "Le Coraniste Repenti"
 */
function initBookPromo3D() {
  const bookCard = document.getElementById('book-3d-interactive');
  if (bookCard) {
    // 3D Parallax Tilt sur Desktop
    const stage = bookCard.closest('.book-3d-stage');
    if (stage) {
      stage.addEventListener('mousemove', (e) => {
        if (bookCard.classList.contains('is-flipped')) return;
        const rect = stage.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const rotY = (x / (rect.width / 2)) * 18;
        const rotX = -(y / (rect.height / 2)) * 18;
        bookCard.style.transform = `scale(1.05) rotateY(${rotY}deg) rotateX(${rotX}deg) translateZ(30px)`;
      });

      stage.addEventListener('mouseleave', () => {
        if (!bookCard.classList.contains('is-flipped')) {
          bookCard.style.transform = '';
        }
      });
    }
  }

  // Ouverture automatique intelligente après le choix de langue ou premier chargement
  const hasSeenBookPromo = sessionStorage.getItem('has_seen_book_promo_v1');
  const hasDirectArgHash = window.location.hash && window.location.hash.startsWith('#arg-');
  const hasGateway = document.getElementById('lang-gateway');
  const isGatewayVisible = hasGateway && (hasGateway.style.display === 'flex' || (!sessionStorage.getItem('has_closed_gateway') && !hasDirectArgHash));

  if (!hasSeenBookPromo && !hasDirectArgHash) {
    if (!isGatewayVisible) {
      setTimeout(() => {
        if (typeof window.openModal === 'function') {
          window.openModal('book-promo-modal');
          sessionStorage.setItem('has_seen_book_promo_v1', 'true');
        }
      }, 700);
    }
  }
}

// Extension du trigger de fermeture de gateway pour déclencher la promo
const origCloseGateway = window.closeLangGateway;
window.closeLangGateway = function() {
  if (typeof origCloseGateway === 'function') origCloseGateway();
  if (!sessionStorage.getItem('has_seen_book_promo_v1') && !(window.location.hash && window.location.hash.startsWith('#arg-'))) {
    setTimeout(() => {
      if (typeof window.openModal === 'function') {
        window.openModal('book-promo-modal');
        sessionStorage.setItem('has_seen_book_promo_v1', 'true');
      }
    }, 450);
  }
};
