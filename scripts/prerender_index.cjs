const fs = require('fs');
const path = require('path');

const dataCode = fs.readFileSync(path.join(__dirname, '..', 'js', 'data.js'), 'utf8');
const fn = new Function('module', 'exports', dataCode + '\nreturn typeof ARGUMENTS_DATA !== "undefined" ? ARGUMENTS_DATA : (module.exports ? module.exports.ARGUMENTS_DATA : null);');
const ARGUMENTS_DATA = fn({}, {});

if (!ARGUMENTS_DATA || !Array.isArray(ARGUMENTS_DATA)) {
  console.error("Erreur de chargement d'ARGUMENTS_DATA !");
  process.exit(1);
}

// 1. Rendu du contenu HTML statique de la page d'accueil (Sommaire + 10 fiches)
const homeHeroHTML = `
    <section class="hero-section" id="home-hero">
      <div class="hero-tags-row">
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
        <a href="arguments/1-coran-complet.html" class="btn-hero-primary">
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
            <a href="arguments/${arg.slug}.html" class="btn-read-arg">
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

// 2. Rendu de la sidebar pré-rendue
const sidebarNavHTML = ARGUMENTS_DATA.map(arg => `
        <li>
          <a href="arguments/${arg.slug}.html" class="sidebar-nav-item" id="nav-item-${arg.id}" data-id="${arg.id}">
            <span class="sidebar-nav-num">${arg.number}</span>
            <span class="sidebar-nav-title" title="${arg.title}">${arg.shortTitle || arg.title}</span>
          </a>
        </li>
`).join('');

// 3. Injection dans index.html
const indexPath = path.join(__dirname, '..', 'index.html');
let indexContent = fs.readFileSync(indexPath, 'utf8');

// Injecter dans sidebar-nav-list
indexContent = indexContent.replace(
  /<ul class="sidebar-nav-list" id="sidebar-nav-list">[\s\S]*?<\/ul>/,
  `<ul class="sidebar-nav-list" id="sidebar-nav-list">\n${sidebarNavHTML}\n      </ul>`
);

// Injecter dans app-main
indexContent = indexContent.replace(
  /<main class="app-main" id="app-main-content">[\s\S]*?<\/main>/,
  `<main class="app-main" id="app-main-content">\n${homeHeroHTML}\n    </main>`
);

fs.writeFileSync(indexPath, indexContent, 'utf8');
console.log("index.html pré-rendu avec succès pour le SEO et les crawlers sans JS !");
