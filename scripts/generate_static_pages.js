const fs = require('fs');
const path = require('path');
const { ARGUMENTS_DATA } = require('../js/data.js');

const outputDir = path.join(__dirname, '..', 'arguments');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

ARGUMENTS_DATA.forEach((arg, index) => {
  const prevArg = ARGUMENTS_DATA[index - 1];
  const nextArg = ARGUMENTS_DATA[index + 1];

  const html = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <title>Argument ${arg.number} : ${arg.title} — Réfutation du Coranisme</title>
  
  <!-- SEO & Description -->
  <meta name="description" content="Réfutation de l'Argument ${arg.number} : ${arg.title}. ${arg.tagline}. Manuel pratique par Salah Eddine Ahmed.">
  <meta name="author" content="Salah Eddine Ahmed">
  <meta name="robots" content="index, follow">
  <meta name="theme-color" content="#FED100">

  <!-- Open Graph -->
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="Réfutation du Coranisme">
  <meta property="og:title" content="Argument ${arg.number} : ${arg.title}">
  <meta property="og:description" content="${arg.formula}">
  <meta property="og:image" content="https://raw.githubusercontent.com/novaskilltech/coranisme-pour-les-nuls/main/assets/og-image.jpg">
  <meta property="og:locale" content="fr_FR">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Argument ${arg.number} : ${arg.title}">
  <meta name="twitter:description" content="${arg.formula}">
  <meta name="twitter:image" content="https://raw.githubusercontent.com/novaskilltech/coranisme-pour-les-nuls/main/assets/og-image.jpg">

  <!-- Styles -->
  <link rel="stylesheet" href="../css/style.css">
  <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 fill=%22%23FED100%22 rx=%2216%22/><text y=%2268%22 font-size=%2250%22 font-family=%22sans-serif%22 font-weight=%22900%22 x=%2250%22 text-anchor=%22middle%22 fill=%22%23161616%22>RÉFUT</text></svg>">
</head>
<body>

  <!-- TOPBAR -->
  <header class="nuls-topbar">
    <div class="topbar-container">
      <div class="brand-logo">
        <a href="../index.html#home" style="display: flex; align-items: center; gap: 0.75rem;">
          <div class="brand-badge">MANUEL PRATIQUE</div>
          <div class="brand-title-wrap">
            <span class="brand-title">RÉFUTATION DU CORANISME</span>
            <span class="brand-subtitle">Comment démasquer et réfuter la secte des coranistes</span>
          </div>
        </a>
      </div>

      <div class="topbar-actions">
        <a href="../index.html#home" class="btn-action-topbar" title="Sommaire des 10 arguments">
          <span>🏠</span>
          <span class="desktop-only-text">Sommaire</span>
        </a>
        <a href="../pdf/${arg.pdfFile}" download class="btn-action-topbar" title="Télécharger le PDF original">
          <span>📥</span>
          <span class="desktop-only-text">PDF original</span>
        </a>
        <button class="btn-action-topbar" onclick="window.print()" title="Imprimer la fiche">
          <span>🖨️</span>
          <span class="desktop-only-text">Imprimer</span>
        </button>
      </div>
    </div>
  </header>

  <!-- CONTENU PRINCIPAL DE L'ARGUMENT -->
  <div class="app-container" style="max-width: 1000px; margin: 2rem auto; padding: 0 1rem;">
    <main class="app-main" style="width: 100%;">
      
      <article class="argument-detail-view" id="arg-view-${arg.id}">
        
        <!-- HEADER BANDEAU JAUNE -->
        <header class="arg-header-bandeau">
          <div class="arg-header-top">
            <span class="arg-badge-giant">ARGUMENT ${arg.number} / 10</span>
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
              <a href="../pdf/${arg.pdfFile}" download class="arg-download-badge" title="Télécharger le fascicule PDF original">
                <span>📥</span> Télécharger le PDF original
              </a>
              <button onclick="window.print()" class="arg-download-badge btn-print-page" title="Imprimer ou enregistrer cette fiche en PDF">
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

        <!-- CORPS DE LA FICHE -->
        <div class="arg-body-content">

          <!-- SECTION 1 : LEUR ARGUMENT -->
          <section id="section-their-thesis" class="nuls-callout callout-adverse">
            <div class="callout-header">
              <span>🔴</span> 1. Leur Thèse (Formulation coraniste)
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

          <!-- SECTION 6 : RÉPONSES PRÊTES -->
          <section id="section-30s" class="nuls-callout callout-chrono">
            <div class="callout-header">
              <span>⏱️</span> 6. Réponses Prêtes (Spécial Débat & Réseaux)
            </div>
            <div class="quick-response-container">
              <h3 style="font-family: var(--font-display); font-size: 1.25rem; font-weight: 800; color: var(--nuls-black);">
                Réponse Synthétique en 30 Secondes
              </h3>
              <div class="quick-response-text">
                ${arg.readyResponses.quick30s}
              </div>

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
                  <div style="font-weight: 800; color: #1E3A8A; margin-bottom: 0.35rem;">
                    Objection ${idx + 1} : ${o.obj}
                  </div>
                  <div style="padding-left: 0.75rem; border-left: 3px solid #3B82F6; font-size: 0.95rem; line-height: 1.5;">
                    <strong>Réponse :</strong> ${o.ans}
                  </div>
                </div>
              `).join('')}
            </div>

            <h3 style="font-family: var(--font-display); font-size: 1.2rem; font-weight: 800; margin-top: 2rem; margin-bottom: 0.75rem; color: #1E3A8A;">
              Questions de Cadrage
            </h3>
            <ul style="padding-left: 1.5rem; display: flex; flex-direction: column; gap: 0.6rem; font-weight: 700; color: #1E293B;">
              ${arg.framingQuestions.map(q => `<li>${q}</li>`).join('')}
            </ul>
          </section>

          <!-- SECTION 8 : CONCLUSION -->
          <section class="nuls-callout callout-retenir">
            <div class="callout-header">
              <span>🏁</span> 8. Conclusion en Chaîne Logique
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

          <!-- PAGINATION -->
          <div class="arg-pagination-bar">
            ${prevArg ? `
              <a href="${prevArg.slug}.html" class="btn-pag-nav">
                ⬅ Argument ${prevArg.number} : ${prevArg.shortTitle}
              </a>
            ` : `
              <a href="../index.html#home" class="btn-pag-nav">
                🏠 Retour au sommaire
              </a>
            `}

            <a href="../index.html#home" class="btn-hero-secondary" style="font-size: 0.85rem; padding: 0.5rem 1rem;">
              Sommaire des 10 arguments
            </a>

            ${nextArg ? `
              <a href="${nextArg.slug}.html" class="btn-pag-nav">
                Argument ${nextArg.number} : ${nextArg.shortTitle} ➔
              </a>
            ` : `
              <a href="../index.html#home" class="btn-pag-nav">
                🎉 Fin du parcours
              </a>
            `}
          </div>

        </div>
      </article>

    </main>
  </div>

  <!-- FOOTER -->
  <footer class="nuls-footer">
    <div class="footer-container">
      <div class="footer-bottom">
        <div>Réfutation du Coranisme • Par Salah Eddine Ahmed • Usage personnel et pédagogique libre avec mention de l'auteur.</div>
        <div><a href="mailto:ideoise@gmail.com" style="color: var(--nuls-yellow);">ideoise@gmail.com</a></div>
      </div>
    </div>
  </footer>

</body>
</html>`;

  fs.writeFileSync(path.join(outputDir, `${arg.slug}.html`), html, 'utf8');
  console.log(`Page générée : arguments/${arg.slug}.html`);
});
