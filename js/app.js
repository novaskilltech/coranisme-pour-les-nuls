/**
 * Moteur Applicatif - Réfutation du Coranisme
 * Gestion du routage SPA, du rendu dynamique des 10 fiches,
 * de la recherche instantanée, de la copie rapide 30s,
 * des quiz interactifs et du support multi-langues (i18n).
 * Par Salah Eddine Ahmed
 */

function getActiveArgumentsData() {
  return window.ARGUMENTS_DATA || (typeof ARGUMENTS_DATA !== 'undefined' ? ARGUMENTS_DATA : []);
}

function getActiveUI() {
  const currentLang = window.CURRENT_LANG || 'fr';
  if (window.I18N_DATA && window.I18N_DATA[currentLang] && window.I18N_DATA[currentLang].ui) {
    return window.I18N_DATA[currentLang].ui;
  }
  if (window.I18N_DATA && window.I18N_DATA['fr'] && window.I18N_DATA['fr'].ui) {
    return window.I18N_DATA['fr'].ui;
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
  const data = (window.I18N_DATA && window.I18N_DATA[currentLang] && window.I18N_DATA[currentLang].preface)
    ? window.I18N_DATA[currentLang].preface
    : (window.I18N_DATA && window.I18N_DATA['fr'] && window.I18N_DATA['fr'].preface ? window.I18N_DATA['fr'].preface : null);

  if (!data) return STATIC_PREFACE_FALLBACK;

  return `
    <section id="preface" class="nuls-callout callout-cadrage" style="margin: 2rem 0;" aria-labelledby="preface-title">
      <div class="callout-header"><span>📝</span> ${data.badge || "OUVERTURE DE L'OUVRAGE"}</div>
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

      ${data.sections.map(sec => `
        <section class="nuls-callout callout-${sec.type}" style="margin-top: 1.25rem;">
          <div class="callout-header"><span>${sec.type === 'adverse' ? '🔴' : (sec.type === 'retenir' ? '💡' : (sec.type === 'analogie' ? '📚' : (sec.type === 'cadrage' ? '📖' : '⏱️')))}</span> ${sec.header}</div>
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
  const data = (window.I18N_DATA && window.I18N_DATA[currentLang] && window.I18N_DATA[currentLang].intro)
    ? window.I18N_DATA[currentLang].intro
    : (window.I18N_DATA && window.I18N_DATA['fr'] && window.I18N_DATA['fr'].intro ? window.I18N_DATA['fr'].intro : null);

  if (!data) return STATIC_INTRO_FALLBACK;

  return `
    <section id="coranisme-intro" class="nuls-callout callout-cadrage" style="margin: 2rem 0;" aria-labelledby="coranisme-intro-title">
      <div class="callout-header">
        <span>📖</span> ${data.header || "CONTEXTE INTRODUCTIF"}
      </div>

      <header class="section-header-wrap" style="margin: 0 0 1.25rem;">
        <div>
          <h2 class="section-header-title" id="coranisme-intro-title">${data.title || "QUI SONT LES CORANISTES ?"}</h2>
          <p style="font-weight: 700; color: var(--text-muted); margin-top: 0.4rem;">${data.subtitle || "Définition et repères"}</p>
        </div>
        <span class="card-number-badge">${data.badge || "REPÈRES HISTORIQUES"}</span>
      </header>

      ${data.sections.map(sec => `
        <section class="nuls-callout callout-${sec.type}" style="margin-top: 1.25rem;">
          <div class="callout-header"><span>${sec.type === 'adverse' ? '🔴' : (sec.type === 'retenir' ? '💡' : (sec.type === 'analogie' ? '⚖️' : '🗓️'))}</span> ${sec.header}</div>
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

  // Gestion du menu drawer mobile
  initMobileDrawer();
}

/**
 * Rendu du menu de navigation latéral
 */
function renderSidebarNav() {
  const listContainer = document.getElementById('sidebar-nav-list');
  if (!listContainer) return;

  const currentArgs = getActiveArgumentsData();

  const introductoryChapters = [
    { id: 'preface', icon: '✦', title: window.CURRENT_LANG === 'ar' || window.CURRENT_LANG === 'ary' ? 'المقدمة' : (window.CURRENT_LANG === 'en' ? 'Preface' : 'Préface') },
    { id: 'coranisme-intro', icon: 'ℹ', title: window.CURRENT_LANG === 'ar' || window.CURRENT_LANG === 'ary' ? 'من هم القرآنيون ؟' : (window.CURRENT_LANG === 'en' ? 'Who are the Quranists?' : 'Qui sont les coranistes ?') }
  ];

  listContainer.innerHTML = introductoryChapters.map(chapter => `
    <li>
      <a href="#${chapter.id}" class="sidebar-nav-item" id="nav-item-${chapter.id}">
        <span class="sidebar-nav-num">${chapter.icon}</span>
        <span class="sidebar-nav-title">${chapter.title}</span>
      </a>
    </li>
  `).join('') + currentArgs.map(arg => `
    <li>
      <a href="#arg-${arg.id}" class="sidebar-nav-item" id="nav-item-${arg.id}" data-id="${arg.id}">
        <span class="sidebar-nav-num">${arg.number}</span>
        <span class="sidebar-nav-title" title="${escapeHTML(arg.title)}">${escapeHTML(arg.shortTitle || arg.title)}</span>
      </a>
    </li>
  `).join('');
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

  const introductoryChapterIds = ['preface', 'coranisme-intro'];
  const requestedIntroChapter = hash.replace('#', '');
  if (introductoryChapterIds.includes(requestedIntroChapter)) {
    document.title = `${ui.brandTitle || "Réfutation du Coranisme"} — ${ui.brandSubtitle || "Manuel Pratique"}`;
    renderHomeView(mainContainer);
    const activeNav = document.getElementById(`nav-item-${requestedIntroChapter}`);
    if (activeNav) activeNav.classList.add('active');
    requestAnimationFrame(() => {
      document.getElementById(requestedIntroChapter)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
        ${ui.heroAuthor || "Par Salah Eddine Ahmed"}
      </p>
      <p class="hero-description">
        ${ui.heroDesc || "Déconstruisez pas à pas les sophismes du coranisme avec rigueur logique."}
      </p>
      <div class="hero-actions">
        <a href="#arg-1" class="btn-hero-primary">
          <span>🚀</span> ${ui.btnStartArg1 || "Débuter par l'Argument 1"}
        </a>
        <button class="btn-hero-secondary" data-action="open-search">
          <span>🔍</span> ${ui.btnSearchModal || "Rechercher un sujet / verset"}
        </button>
        <button class="btn-hero-secondary" data-action="open-modal" data-modal-id="contact-modal">
          <span>✉️</span> ${ui.btnContactAuthor || "Contacter l'auteur"}
        </button>
      </div>
    </section>

    ${renderPrefaceHTML()}

    ${renderCoranismeIntroHTML()}

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
            <div style="display: flex; gap: 0.35rem;">
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

  const prevArg = currentArgs.find(a => a.id === arg.id - 1);
  const nextArg = currentArgs.find(a => a.id === arg.id + 1);

  container.innerHTML = `
    <article class="argument-detail-view" id="arg-view-${arg.id}">
      
      <!-- HEADER BANDEAU JAUNE -->
      <header class="arg-header-bandeau">
        <div class="arg-header-top">
          <span class="arg-badge-giant">${ui.argBadgeGiant || "ARGUMENT"} ${arg.number} / 10</span>
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
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
                  <div class="verse-translation">${v.fr || v.translation || ''}</div>
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

        <!-- SECTION 2 : LE NŒUD LOGIQUE -->
        <section id="section-logical-node" class="nuls-callout callout-retenir">
          <div class="callout-header">
            <span>💡</span> ${ui.sec2Header || "2. LE NŒUD LOGIQUE DU PROBLÈME"}
          </div>
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
                  <div class="verse-translation">${v.fr || v.translation || ''}</div>
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
          <div class="analogies-list">
            ${arg.analogies.map(a => `
              <div class="analogie-card">
                <div class="analogie-title">
                  <span style="background: var(--nuls-black); color: var(--nuls-yellow); padding: 0.15rem 0.5rem; border-radius: 4px; font-size: 0.8rem;">#${a.num}</span>
                  ${escapeHTML(a.title)}
                </div>
                <div class="analogie-scenario">
                  <strong>Situation :</strong> ${escapeHTML(a.scenario)}
                </div>
                <div class="analogie-logic-box">
                  <strong>Mécanisme logique :</strong> ${escapeHTML(a.logic)}
                </div>
                <div class="analogie-lesson">
                  <strong>Enseignement :</strong> ${escapeHTML(a.lesson)}
                </div>
                <div style="font-size: 0.85rem; font-weight: 700; color: var(--nuls-black); border-top: 1px solid #E5E7EB; padding-top: 0.5rem;">
                  <strong>Application au débat :</strong> ${escapeHTML(a.application)}
                </div>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- SECTION 6 : RÉPONSE PRÊTE EN 30 SECONDES (AVEC BOUTON COPIER) -->
        <section id="section-30s" class="nuls-callout callout-chrono">
          <div class="callout-header">
            <span>⏱️</span> ${ui.sec6Header || "6. RÉPONSES PRÊTES À L'EMPLOI"}
          </div>
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
          
          <div class="objections-list">
            ${arg.objections.map((o, idx) => `
              <div class="objection-item">
                <button class="objection-title-btn" data-action="toggle-objection">
                  <span><strong>Objection ${idx + 1} :</strong> ${escapeHTML(o.obj)}</span>
                  <span>▼</span>
                </button>
                <div class="objection-content">
                  <strong>Réponse méthodique :</strong> ${escapeHTML(o.ans)}
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

        <!-- SECTION 8 : QUIZ INTERACTIF (SI DISPONIBLE) -->
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

        <!-- SECTION 9 : CONCLUSION & CHAÎNE LOGIQUE -->
        <section class="nuls-callout callout-retenir">
          <div class="callout-header">
            <span>🏁</span> ${ui.sec9Header || "9. CONCLUSION EN CHAÎNE LOGIQUE"}
          </div>
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
 * Copie dans le presse-papier avec confirmation Toast
 */
function copyToClipboard(argId) {
  const textEl = document.getElementById(`quick-text-${argId}`);
  if (!textEl) return;

  const ui = getActiveUI();
  const text = textEl.innerText.trim();
  navigator.clipboard.writeText(text).then(() => {
    showToast(ui.toastCopySuccess || "✅ Réponse 30s copiée dans le presse-papier !");
  }).catch(err => {
    console.error("Erreur copie", err);
    showToast("⚠️ Impossible de copier automatiquement.");
  });
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
 * Gestion du quiz interactif
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

    if (!query) {
      resultsContainer.innerHTML = currentArgs.map(arg => `
        <div class="search-result-item" data-action="jump-arg" data-arg-id="${arg.id}">
          <h4>Argument ${arg.number} : ${escapeHTML(arg.title)}</h4>
          <p>${escapeHTML(arg.tagline)}</p>
        </div>
      `).join('');
      return;
    }

    const filtered = currentArgs.filter(arg => {
      const matchTitle = (arg.title || '').toLowerCase().includes(query);
      const matchTagline = (arg.tagline || '').toLowerCase().includes(query);
      const matchFormula = (arg.formula || '').toLowerCase().includes(query);
      const matchThesis = (arg.theirArgument?.thesis || '').toLowerCase().includes(query);
      const matchAdverseVerses = arg.theirArgument?.verses?.some(v => 
        (v.ref || '').toLowerCase().includes(query) || (v.fr || '').toLowerCase().includes(query) || (v.ar || '').includes(query)
      );
      const matchQuranicVerses = arg.quranicArchitecture?.verses?.some(v => 
        (v.ref || '').toLowerCase().includes(query) || (v.fr || '').toLowerCase().includes(query) || (v.ar || '').includes(query)
      );
      const match30s = (arg.readyResponses?.quick30s || '').toLowerCase().includes(query);
      return matchTitle || matchTagline || matchFormula || matchThesis || matchAdverseVerses || matchQuranicVerses || match30s;
    });

    if (filtered.length === 0) {
      const safeQuery = escapeHTML(query);
      resultsContainer.innerHTML = `
        <div style="text-align: center; padding: 2rem; color: var(--text-muted); font-weight: 600;">
          Aucun résultat pour « <strong>${safeQuery}</strong> ».
        </div>
      `;
      return;
    }

    resultsContainer.innerHTML = filtered.map(arg => `
      <div class="search-result-item" data-action="jump-arg" data-arg-id="${arg.id}">
        <h4>Argument ${arg.number} : ${escapeHTML(arg.title)}</h4>
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
  const gate = document.getElementById('portal-gate');
  if (gate) {
    gate.style.opacity = '0';
    gate.style.pointerEvents = 'none';
    setTimeout(() => {
      gate.style.display = 'none';
    }, 300);
  }
};

window.openPortal = function() {
  const gate = document.getElementById('portal-gate');
  if (gate) {
    gate.style.display = 'flex';
    setTimeout(() => {
      gate.style.opacity = '1';
      gate.style.pointerEvents = 'auto';
    }, 10);
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
    case 'open-search':
      if (typeof window.openSearchModal === 'function') window.openSearchModal();
      break;

    case 'close-search':
      if (typeof window.closeSearchModal === 'function') window.closeSearchModal();
      break;

    case 'open-portal':
      if (typeof window.openPortal === 'function') window.openPortal();
      break;

    case 'close-portal':
      if (typeof window.closePortal === 'function') window.closePortal();
      break;

    case 'open-modal': {
      const modalId = target.getAttribute('data-modal-id');
      if (modalId && typeof window.openModal === 'function') window.openModal(modalId);
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

    case 'copy-30s': {
      const argId = target.getAttribute('data-arg-id');
      if (argId && typeof copyToClipboard === 'function') copyToClipboard(parseInt(argId, 10));
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
