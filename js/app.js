/**
 * Moteur Applicatif - Réfutation du Coranisme
 * Gestion du routage SPA, du rendu dynamique des 10 fiches,
 * de la recherche instantanée, de la copie rapide 30s et des quiz interactifs.
 * Par Salah Eddine Ahmed
 */

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

  listContainer.innerHTML = ARGUMENTS_DATA.map(arg => `
    <li>
      <a href="#arg-${arg.id}" class="sidebar-nav-item" id="nav-item-${arg.id}" data-id="${arg.id}">
        <span class="sidebar-nav-num">${arg.number}</span>
        <span class="sidebar-nav-title" title="${arg.title}">${arg.shortTitle || arg.title}</span>
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

  // Mise à jour de l'état actif dans la sidebar
  document.querySelectorAll('.sidebar-nav-item').forEach(el => el.classList.remove('active'));

  if (hash.startsWith('#arg-') || hash.startsWith('#/arguments/')) {
    let argId;
    if (hash.startsWith('#arg-')) {
      argId = parseInt(hash.replace('#arg-', ''), 10);
    } else {
      const slug = hash.replace('#/arguments/', '');
      const matched = ARGUMENTS_DATA.find(a => a.slug === slug || a.id.toString() === slug);
      if (matched) argId = matched.id;
    }

    const arg = ARGUMENTS_DATA.find(a => a.id === argId);

    if (arg) {
      document.title = `Argument ${arg.number} : ${arg.title} — Réfutation du Coranisme`;
      const activeNav = document.getElementById(`nav-item-${arg.id}`);
      if (activeNav) activeNav.classList.add('active');
      renderArgumentView(arg, mainContainer);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
  }

  // Par défaut : Vue Accueil / Hub
  document.title = "Réfutation du Coranisme — Comment démasquer et réfuter la secte des coranistes";
  renderHomeView(mainContainer);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Rendu de la vue d'accueil (Hub des 10 arguments)
 */
function renderHomeView(container) {
  container.innerHTML = `
    <!-- HERO PRINCIPAL -->
    <section class="hero-nuls">
      <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem;">
        <div class="hero-tag">
          <span>📖</span> Manuel Pratique de Réfutation
        </div>
        <div class="hero-tag" style="background-color: #065F46; color: #ECFDF5; border: 2px solid #047857;">
          <span>🌿</span> Diffusion Pédagogique Ouverte
        </div>
      </div>
      <h1 class="hero-title">
        Réfutation <span>du Coranisme</span>
      </h1>
      <p style="font-size: 1.05rem; font-weight: 800; color: var(--nuls-black); margin-bottom: 0.5rem;">
        Par <strong>Salah Eddine Ahmed</strong> — <em>Comment démasquer et réfuter la secte des coranistes : 10 arguments majeurs examinés et réfutés méthodiquement</em>
      </p>
      <p class="hero-description">
        Déconstruisez pas à pas les sophismes du coranisme avec rigueur logique, analogies pédagogiques, versets arabes vocalisés et réponses synthétiques en 30 secondes. Partage et diffusion libres à des fins d'étude et de défense de la vérité.
      </p>
      <div class="hero-actions">
        <a href="#arg-1" class="btn-hero-primary">
          <span>🚀</span> Débuter par l'Argument 1
        </a>
        <button class="btn-hero-secondary" data-action="open-search">
          <span>🔍</span> Rechercher un sujet / verset
        </button>
        <button class="btn-hero-secondary" data-action="open-modal" data-modal-id="contact-modal">
          <span>✉️</span> Contacter l'auteur
        </button>
      </div>
    </section>

    <!-- SOMMAIRE DES 10 ARGUMENTS -->
    <div class="section-header-wrap">
      <h2 class="section-header-title">Les 10 Grands Arguments Décryptés</h2>
      <span class="card-number-badge">10 Fiches Prêtes à l'Emploi</span>
    </div>

    <div class="arguments-grid">
      ${ARGUMENTS_DATA.map(arg => `
        <article class="argument-card">
          <div>
            <div class="card-top">
              <span class="card-number-badge">ARGUMENT ${arg.number}</span>
              <span class="card-theme-tag">${arg.theme}</span>
            </div>
            <h3 class="card-title">${arg.title}</h3>
            <p class="card-tagline">${arg.tagline}</p>
            <div class="card-formula-box">
              ⚡ ${arg.formula}
            </div>
          </div>
          <div class="card-footer-actions">
            <a href="#arg-${arg.id}" class="btn-read-arg">
              <span>Consulter la fiche</span> ➔
            </a>
            <div style="display: flex; gap: 0.35rem;">
              <a href="pdf/${arg.pdfFile}" download title="Télécharger le fascicule PDF original" class="btn-download-pdf-sm">
                📥
              </a>
              <button data-action="print-arg-direct" data-arg-id="${arg.id}" title="Imprimer ou enregistrer la fiche en PDF" class="btn-download-pdf-sm">
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
        <span>💡</span> Règle d'or pour débattre avec un coraniste
      </div>
      <h3 style="font-family: var(--font-display); font-size: 1.25rem; font-weight: 800; margin-bottom: 0.75rem; color: var(--nuls-black);">
        Ne jamais laisser l'interlocuteur déplacer le sujet
      </h3>
      <p style="font-size: 1rem; color: #1F2937; margin-bottom: 1rem;">
        La plupart des arguments coranistes reposent sur des glissements : confondre le principe de la <strong>Sunna</strong> (instituée par le Coran) avec la question de la <strong>transmission historique</strong> des recueils postérieurs.
      </p>
      <div style="background: #FFFFFF; border: 2px solid #161616; padding: 1rem; border-radius: var(--radius-sm); font-weight: 700;">
        1. Établir d'abord ce que le Coran ordonne (Obéissance, Jugement, Bayân, Exemplarité).<br>
        2. Démontrer ensuite qu'une autorité déléguée ne concurrence jamais la souveraineté divine.<br>
        3. Traiter ensuite méthodiquement la chaîne de transmission historique.
      </div>
    </div>
  `;
}

/**
 * Rendu de la page dédiée à un argument
 */
function renderArgumentView(arg, container) {
  const prevArg = ARGUMENTS_DATA.find(a => a.id === arg.id - 1);
  const nextArg = ARGUMENTS_DATA.find(a => a.id === arg.id + 1);

  container.innerHTML = `
    <article class="argument-detail-view" id="arg-view-${arg.id}">
      
      <!-- HEADER BANDEAU JAUNE -->
      <header class="arg-header-bandeau">
        <div class="arg-header-top">
          <span class="arg-badge-giant">ARGUMENT ${arg.number} / 10</span>
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
            <a href="pdf/${arg.pdfFile}" download class="arg-download-badge" title="Télécharger le fascicule PDF original">
              <span>📥</span> Télécharger le PDF original
            </a>
            <button data-action="print-page" class="arg-download-badge btn-print-page" title="Imprimer ou enregistrer cette fiche en PDF">
              <span>🖨️</span> Imprimer / Exporter PDF
            </button>
          </div>
        </div>
        <h1 class="arg-main-title">${arg.title}</h1>
        <p class="arg-subtitle-tagline">✦ ${arg.tagline}</p>
      </header>

      <!-- FORMULE BANNER -->
      <div class="formula-banner">
        <span>⚡ FORMULE À RETENIR :</span> ${arg.formula}
      </div>

      <!-- STICKY TOC BAR -->
      <nav class="arg-sticky-bar">
        <ul class="arg-toc-links">
          <li><a href="#section-their-thesis" class="arg-toc-link">1. Leur Thèse</a></li>
          <li><a href="#section-logical-node" class="arg-toc-link">2. Nœud Logique</a></li>
          <li><a href="#section-central-principle" class="arg-toc-link">3. Principe Central</a></li>
          ${arg.quranicArchitecture.verses.length > 0 ? '<li><a href="#section-verses" class="arg-toc-link">4. Versets Clés</a></li>' : ''}
          <li><a href="#section-analogies" class="arg-toc-link">5. Analogies</a></li>
          <li><a href="#section-30s" class="arg-toc-link">6. En 30 Secondes</a></li>
          <li><a href="#section-objections" class="arg-toc-link">7. Objections</a></li>
          ${arg.quiz ? '<li><a href="#section-quiz" class="arg-toc-link">8. Quiz</a></li>' : ''}
        </ul>
      </nav>

      <!-- CORPS DE LA FICHE -->
      <div class="arg-body-content">

        <!-- SECTION 1 : LEUR ARGUMENT -->
        <section id="section-their-thesis" class="nuls-callout callout-adverse">
          <div class="callout-header">
            <span>🔴</span> 1. Leur Thèse (Formulation la plus forte)
          </div>
          <div class="adverse-thesis">
            « ${arg.theirArgument.thesis} »
          </div>
          
          ${arg.theirArgument.verses.length > 0 ? `
            <div class="verses-container">
              ${arg.theirArgument.verses.map(v => `
                <div class="verse-item">
                  <div class="verse-header-ref">
                    <span class="verse-ref-badge">${v.ref}</span>
                    <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-muted);">Verset invoqué</span>
                  </div>
                  <div class="verse-arabic">${v.ar}</div>
                  <div class="verse-translation">${v.fr}</div>
                </div>
              `).join('')}
            </div>
          ` : ''}

          <div style="background: #FFFFFF; border: 2px solid var(--nuls-red); padding: 1rem; border-radius: var(--radius-sm); margin-top: 1rem;">
            <strong style="color: var(--nuls-red); text-transform: uppercase; font-size: 0.85rem;">La question réelle à poser :</strong>
            <p style="font-weight: 700; font-size: 1rem; margin-top: 0.35rem;">
              ${arg.theirArgument.realQuestion}
            </p>
          </div>
        </section>

        <!-- SECTION 2 : LE NŒUD LOGIQUE -->
        <section id="section-logical-node" class="nuls-callout callout-retenir">
          <div class="callout-header">
            <span>💡</span> 2. Le Nœud Logique Démasqué
          </div>
          <h3 style="font-family: var(--font-display); font-size: 1.35rem; font-weight: 800; margin-bottom: 1rem; color: var(--nuls-black);">
            ${arg.logicalNode.title}
          </h3>

          <div class="distinction-grid">
            ${arg.logicalNode.distinctions.map(d => `
              <div class="distinction-card">
                <div class="distinction-term">${d.term}</div>
                <div class="distinction-desc">${d.desc}</div>
              </div>
            `).join('')}
          </div>

          <div style="background: #FFFFFF; border: 2px solid var(--nuls-black); padding: 1rem; border-radius: var(--radius-sm); margin-bottom: 1rem;">
            <strong>📌 RÈGLE GÉNÉRALE :</strong> ${arg.logicalNode.generalRule}
          </div>

          <div class="nuls-callout callout-piege" style="box-shadow: none; padding: 1.25rem;">
            <div class="callout-header">
              <span>⚠️</span> Erreur & Sophisme à Éviter
            </div>
            <p style="font-weight: 700; color: #991B1B;">
              ${arg.logicalNode.errorToAvoid}
            </p>
          </div>
        </section>

        <!-- SECTION 3 : PRINCIPE CENTRAL -->
        <section id="section-central-principle" class="nuls-callout callout-analogie">
          <div class="callout-header">
            <span>⚙️</span> 3. Principe Central & Schéma Formel
          </div>
          <h3 style="font-family: var(--font-display); font-size: 1.35rem; font-weight: 800; margin-bottom: 1rem;">
            ${arg.centralPrinciple.title}
          </h3>
          <pre style="background: #FAF9F5; border: 2px solid #161616; padding: 1.25rem; border-radius: var(--radius-sm); font-family: inherit; font-size: 0.95rem; font-weight: 700; white-space: pre-wrap; line-height: 1.6; margin-bottom: 1rem;">${arg.centralPrinciple.formalScheme}</pre>
          <p style="font-size: 1rem; color: #1F2937; margin-bottom: 1rem;">
            ${arg.centralPrinciple.explanation}
          </p>
          <div style="background: var(--nuls-yellow-tint); border: 2px solid var(--nuls-black); padding: 1rem; border-radius: var(--radius-sm); font-weight: 800;">
            🧪 TEST LOGIQUE : ${arg.centralPrinciple.logicalTest}
          </div>
        </section>

        <!-- SECTION 4 : ARCHITECTURE CORANIQUE -->
        ${arg.quranicArchitecture.verses.length > 0 ? `
          <section id="section-verses" class="nuls-callout callout-retenir">
            <div class="callout-header">
              <span>📖</span> 4. L'Architecture Coranique (Les Textes Clés)
            </div>
            <h3 style="font-family: var(--font-display); font-size: 1.35rem; font-weight: 800; margin-bottom: 1rem;">
              ${arg.quranicArchitecture.title}
            </h3>
            <div class="verses-container">
              ${arg.quranicArchitecture.verses.map(v => `
                <div class="verse-item">
                  <div class="verse-header-ref">
                    <span class="verse-ref-badge">${v.ref}</span>
                    <span style="font-size: 0.8rem; font-weight: 800; color: var(--nuls-green);">Preuve textuelle</span>
                  </div>
                  <div class="verse-arabic">${v.ar}</div>
                  <div class="verse-translation">${v.fr}</div>
                </div>
              `).join('')}
            </div>
            <div style="background: #FFFFFF; border: 2px solid var(--nuls-black); padding: 1rem; border-radius: var(--radius-sm); font-weight: 700; margin-top: 1rem;">
              ⚖️ CONSÉQUENCE : ${arg.quranicArchitecture.consequence}
            </div>
          </section>
        ` : ''}

        <!-- SECTION 5 : LES ANALOGIES DU MANUEL -->
        <section id="section-analogies" class="nuls-callout callout-analogie">
          <div class="callout-header">
            <span>⚖️</span> 5. Les Analogies Pédagogiques du Manuel
          </div>
          <p style="font-weight: 600; color: var(--text-muted); margin-bottom: 1rem;">
            Des situations concrètes du quotidien pour rendre le sophisme immédiatement visible :
          </p>
          <div class="analogies-list">
            ${arg.analogies.map(a => `
              <div class="analogie-card">
                <div class="analogie-title">
                  <span style="background: var(--nuls-black); color: var(--nuls-yellow); padding: 0.15rem 0.5rem; border-radius: 4px; font-size: 0.8rem;">#${a.num}</span>
                  ${a.title}
                </div>
                <div class="analogie-scenario">
                  <strong>Situation :</strong> ${a.scenario}
                </div>
                <div class="analogie-logic-box">
                  <strong>Mécanisme logique :</strong> ${a.logic}
                </div>
                <div class="analogie-lesson">
                  <strong>Ce que l'analogie montre :</strong> ${a.lesson}
                </div>
                <div style="font-size: 0.85rem; font-weight: 700; color: var(--nuls-black); border-top: 1px solid #E5E7EB; padding-top: 0.5rem;">
                  <strong>Application au débat :</strong> ${a.application}
                </div>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- SECTION 6 : RÉPONSE PRÊTE EN 30 SECONDES (AVEC BOUTON COPIER) -->
        <section id="section-30s" class="nuls-callout callout-chrono">
          <div class="callout-header">
            <span>⏱️</span> 6. Réponses Prêtes (Spécial Débat & Réseaux)
          </div>
          <div class="quick-response-container">
            <h3 style="font-family: var(--font-display); font-size: 1.25rem; font-weight: 800; color: var(--nuls-black);">
              Réponse Express en 30 Secondes
            </h3>
            <div class="quick-response-text" id="quick-text-${arg.id}">
              ${arg.readyResponses.quick30s}
            </div>
            <button class="btn-copy-fast" data-action="copy-30s" data-arg-id="${arg.id}">
              <span>📋</span> Copier la réponse 30s en 1 clic
            </button>

            <h4 style="font-family: var(--font-display); font-size: 1.1rem; font-weight: 800; margin-top: 1.5rem; color: var(--nuls-black);">
              Réponse Développée & Argumentée
            </h4>
            <div style="background: #FAF9F5; padding: 1.25rem; border-radius: var(--radius-sm); border: var(--border-medium); font-size: 1rem; line-height: 1.6;">
              ${arg.readyResponses.developed}
            </div>
          </div>
        </section>

        <!-- SECTION 7 : OBJECTIONS & CADRAGE -->
        <section id="section-objections" class="nuls-callout callout-cadrage">
          <div class="callout-header">
            <span>🎯</span> 7. Objections Anticipées & Questions de Cadrage
          </div>
          
          <h3 style="font-family: var(--font-display); font-size: 1.2rem; font-weight: 800; margin-bottom: 0.75rem; color: #1E3A8A;">
            Réponses aux répliques attendues
          </h3>
          <div class="objections-list">
            ${arg.objections.map((o, idx) => `
              <div class="objection-item">
                <button class="objection-title-btn" data-action="toggle-objection">
                  <span><strong>Objection ${idx + 1} :</strong> ${o.obj}</span>
                  <span>▼</span>
                </button>
                <div class="objection-content">
                  <strong>Réponse méthodique :</strong> ${o.ans}
                </div>
              </div>
            `).join('')}
          </div>

          <h3 style="font-family: var(--font-display); font-size: 1.2rem; font-weight: 800; margin-top: 2rem; margin-bottom: 0.75rem; color: #1E3A8A;">
            Questions de Cadrage (qui obligent à préciser la thèse)
          </h3>
          <ul style="padding-left: 1.5rem; display: flex; flex-direction: column; gap: 0.6rem; font-weight: 700; color: #1E293B;">
            ${arg.framingQuestions.map(q => `<li>${q}</li>`).join('')}
          </ul>
        </section>

        <!-- SECTION 8 : QUIZ INTERACTIF (SI DISPONIBLE) -->
        ${arg.quiz ? `
          <section id="section-quiz" class="quiz-section-wrap">
            <div class="quiz-header">
              <h3>📝 Teste ta compréhension (Quiz interactif)</h3>
              <span class="card-number-badge">Auto-évaluation</span>
            </div>
            <div class="quiz-items-list">
              ${arg.quiz.map((item, qIdx) => `
                <div class="quiz-item" data-qidx="${qIdx}">
                  <div class="quiz-question">${qIdx + 1}. ${item.q}</div>
                  <div class="quiz-options">
                    ${item.options.map((opt, oIdx) => `
                      <button class="quiz-option-btn" data-action="quiz-answer" data-arg-id="${arg.id}" data-q-idx="${qIdx}" data-o-idx="${oIdx}">
                        ${String.fromCharCode(65 + oIdx)}. ${opt}
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
            <span>🏁</span> 9. Conclusion en Chaîne Logique
          </div>
          <div style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1.25rem;">
            ${arg.conclusion.steps.map((s, idx) => `
              <div style="background: #FFFFFF; border: var(--border-medium); padding: 0.75rem 1rem; border-radius: var(--radius-sm); font-weight: 700; display: flex; align-items: center; gap: 0.75rem;">
                <span style="background: var(--nuls-black); color: var(--nuls-yellow); width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; flex-shrink: 0;">${idx + 1}</span>
                <span>${s}</span>
              </div>
            `).join('')}
          </div>

          <div style="background: var(--nuls-black); color: var(--nuls-yellow); padding: 1.25rem; border-radius: var(--radius-sm); text-align: center; font-size: 1.1rem; font-weight: 900; margin-bottom: 1rem;">
            ${arg.conclusion.finalText}
          </div>

          <div style="background: #FFFFFF; border: 3px solid var(--nuls-red); padding: 1rem; border-radius: var(--radius-sm); text-align: center; font-weight: 800; color: var(--nuls-red); font-size: 1.05rem;">
            📢 « ${arg.conclusion.punchline} »
          </div>
        </section>

        <!-- PAGINATION BAR (PRECEDENT / SUIVANT) -->
        <div class="arg-pagination-bar">
          ${prevArg ? `
            <a href="#arg-${prevArg.id}" class="btn-pag-nav">
              ⬅ Argument ${prevArg.number} : ${prevArg.shortTitle}
            </a>
          ` : `
            <a href="#home" class="btn-pag-nav">
              🏠 Retour au sommaire
            </a>
          `}

          <a href="#home" class="btn-hero-secondary" style="font-size: 0.85rem; padding: 0.5rem 1rem;">
            Sommaire des 10 arguments
          </a>

          ${nextArg ? `
            <a href="#arg-${nextArg.id}" class="btn-pag-nav">
              Argument ${nextArg.number} : ${nextArg.shortTitle} ➔
            </a>
          ` : `
            <a href="#home" class="btn-pag-nav">
              🎉 Fin du parcours
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

  const text = textEl.innerText.trim();
  navigator.clipboard.writeText(text).then(() => {
    showToast("✅ Réponse 30s copiée dans le presse-papier ! Prête à coller.");
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
  const arg = ARGUMENTS_DATA.find(a => a.id === argId);
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
      feedbackEl.innerHTML = `✅ <strong>Bravo !</strong> ${question.explanation}`;
    }
  } else {
    btn.classList.add('wrong');
    allBtns[question.answer].classList.add('correct');
    if (feedbackEl) {
      feedbackEl.className = 'quiz-feedback show wrong';
      feedbackEl.innerHTML = `❌ <strong>Incorrect.</strong> ${question.explanation}`;
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
    if (!query) {
      resultsContainer.innerHTML = ARGUMENTS_DATA.map(arg => `
        <div class="search-result-item" data-action="jump-arg" data-arg-id="${arg.id}">
          <h4>Argument ${arg.number} : ${arg.title}</h4>
          <p>${arg.tagline}</p>
        </div>
      `).join('');
      return;
    }

    const filtered = ARGUMENTS_DATA.filter(arg => {
      const matchTitle = arg.title.toLowerCase().includes(query);
      const matchTagline = arg.tagline.toLowerCase().includes(query);
      const matchFormula = arg.formula.toLowerCase().includes(query);
      const matchThesis = arg.theirArgument.thesis.toLowerCase().includes(query);
      const matchAdverseVerses = arg.theirArgument.verses.some(v => 
        v.ref.toLowerCase().includes(query) || v.fr.toLowerCase().includes(query) || v.ar.includes(query)
      );
      const matchQuranicVerses = arg.quranicArchitecture.verses.some(v => 
        v.ref.toLowerCase().includes(query) || v.fr.toLowerCase().includes(query) || v.ar.includes(query)
      );
      const match30s = arg.readyResponses.quick30s.toLowerCase().includes(query);
      return matchTitle || matchTagline || matchFormula || matchThesis || matchAdverseVerses || matchQuranicVerses || match30s;
    });

function escapeHTML(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

    if (filtered.length === 0) {
      const safeQuery = escapeHTML(query);
      resultsContainer.innerHTML = `
        <div style="text-align: center; padding: 2rem; color: var(--text-muted); font-weight: 600;">
          Aucun résultat pour « <strong>${safeQuery}</strong> ». Essayez un autre mot-clé (ex: prière, Sourate An-Nahl verset 44, transmission, autorité).
        </div>
      `;
      return;
    }

    resultsContainer.innerHTML = filtered.map(arg => `
      <div class="search-result-item" data-action="jump-arg" data-arg-id="${arg.id}">
        <h4>Argument ${arg.number} : ${arg.title}</h4>
        <p>${arg.formula}</p>
        <span style="font-size: 0.75rem; font-weight: 700; color: var(--nuls-black); background: var(--nuls-yellow); padding: 0.15rem 0.4rem; border-radius: 3px;">
          ${arg.theme}
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
 * Fonctions génériques pour les Modaux (Contact, Mentions Légales, etc.)
 */
window.openModal = function(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('open');
  }
};

window.closeModal = function(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('open');
  }
};

// Fermer les modaux au clic sur l'arrière-plan ou touche Échap
document.addEventListener('click', (e) => {
  if (e.target.classList && e.target.classList.contains('modal-backdrop')) {
    e.target.classList.remove('open');
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-backdrop.open').forEach(m => m.classList.remove('open'));
    const portal = document.getElementById('portal-gate');
    if (portal && !portal.classList.contains('hidden')) {
      closePortal();
    }
  }
});

/**
 * Fonctions de gestion du Portail d'accueil (Citation Al-Barbahari)
 */
window.openPortal = function() {
  const portal = document.getElementById('portal-gate');
  if (portal) {
    portal.classList.remove('hidden');
  }
};

window.closePortal = function() {
  const portal = document.getElementById('portal-gate');
  if (portal) {
    portal.classList.add('hidden');
    try {
      sessionStorage.setItem('portal_seen', 'true');
    } catch(e){}
  }
};

/**
 * Impression et Export PDF direct d'une fiche argument
 */
window.printArgumentDirect = function(id) {
  if (window.location.hash !== `#arg-${id}`) {
    window.location.hash = `#arg-${id}`;
    setTimeout(() => {
      window.print();
    }, 300);
  } else {
    window.print();
  }
};

/**
 * Délégation globale d'événements (Architecture CSP P2 sans 'unsafe-inline')
 */
document.addEventListener('click', (e) => {
  const trigger = e.target.closest('[data-action]');
  if (!trigger) return;

  const action = trigger.dataset.action;
  switch (action) {
    case 'open-search':
      if (typeof window.openSearchModal === 'function') window.openSearchModal();
      break;
    case 'close-search':
      if (typeof window.closeSearchModal === 'function') window.closeSearchModal();
      break;
    case 'open-modal':
      if (trigger.dataset.modalId && typeof window.openModal === 'function') {
        window.openModal(trigger.dataset.modalId);
      }
      break;
    case 'close-modal':
      if (trigger.dataset.modalId && typeof window.closeModal === 'function') {
        window.closeModal(trigger.dataset.modalId);
      }
      break;
    case 'open-portal':
      if (typeof window.openPortal === 'function') window.openPortal();
      break;
    case 'close-portal':
      if (typeof window.closePortal === 'function') window.closePortal();
      break;
    case 'toggle-drawer':
      if (typeof window.toggleDrawer === 'function') {
        window.toggleDrawer(trigger.dataset.drawerState === 'true');
      }
      break;
    case 'print-page':
      window.print();
      break;
    case 'print-arg-direct':
      if (trigger.dataset.argId && typeof window.printArgumentDirect === 'function') {
        window.printArgumentDirect(parseInt(trigger.dataset.argId, 10));
      }
      break;
    case 'copy-30s':
      if (trigger.dataset.argId && typeof copyToClipboard === 'function') {
        copyToClipboard(trigger.dataset.argId);
      }
      break;
    case 'toggle-objection':
      if (typeof toggleObjection === 'function') {
        toggleObjection(trigger);
      }
      break;
    case 'quiz-answer':
      if (typeof handleQuizAnswer === 'function') {
        handleQuizAnswer(
          parseInt(trigger.dataset.argId, 10),
          parseInt(trigger.dataset.qIdx, 10),
          parseInt(trigger.dataset.oIdx, 10),
          trigger
        );
      }
      break;
    case 'jump-arg':
      if (trigger.dataset.argId && typeof window.jumpToArg === 'function') {
        window.jumpToArg(parseInt(trigger.dataset.argId, 10));
      }
      break;
  }
});

