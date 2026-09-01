const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'css', 'style.css');
const indexPath = path.join(__dirname, 'index.html');
const appJsPath = path.join(__dirname, 'js', 'app.js');

// 1. Append CSS
const bookCss = `

/* ==========================================================================
   MODAL PROMO 3D : LE CORANISTE REPENTI
   ========================================================================== */
.btn-book-promo-topbar {
  background: linear-gradient(135deg, #1e293b, #0f172a);
  color: #fed100 !important;
  border: 2px solid #fed100 !important;
  box-shadow: 0 2px 8px rgba(254, 209, 0, 0.25);
  font-weight: 800;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}

.btn-book-promo-topbar:hover {
  background: #fed100 !important;
  color: #111827 !important;
  transform: translateY(-2px);
  box-shadow: 0 4px 14px rgba(254, 209, 0, 0.45);
}

.book-promo-modal-card {
  max-width: 920px !important;
  width: 95% !important;
  background: radial-gradient(circle at top, #1e293b 0%, #0b0f19 100%) !important;
  color: #f8fafc !important;
  border: 2px solid #fed100 !important;
  border-radius: var(--radius-lg);
  box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 40px rgba(254, 209, 0, 0.15) !important;
  padding: 0;
  overflow: hidden;
}

.book-promo-header {
  background: rgba(15, 23, 42, 0.85);
  border-bottom: 1px solid rgba(254, 209, 0, 0.25);
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.book-promo-header h3 {
  color: #fed100;
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 900;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.book-promo-header .btn-close-modal {
  color: #94a3b8;
  background: transparent;
  border: 1px solid #334155;
  border-radius: 50%;
  width: 34px;
  height: 34px;
  font-size: 1.2rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.book-promo-header .btn-close-modal:hover {
  color: #fff;
  border-color: #fed100;
  background: rgba(254, 209, 0, 0.15);
}

.book-promo-grid {
  display: grid;
  grid-template-columns: 1fr 1.25fr;
  gap: 2rem;
  padding: 2rem;
  align-items: center;
}

/* 3D BOOK STAGE */
.book-3d-stage {
  perspective: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
}

.book-3d-wrapper {
  position: relative;
  width: 250px;
  height: 365px;
  transform-style: preserve-3d;
  transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s ease;
  cursor: pointer;
  animation: bookFloat 5s ease-in-out infinite alternate;
}

.book-3d-wrapper:hover {
  transform: scale(1.05) rotateY(-12deg) rotateX(6deg) translateZ(25px);
  box-shadow: -20px 25px 40px rgba(0, 0, 0, 0.7);
}

.book-3d-wrapper.is-flipped {
  transform: rotateY(180deg) scale(1.04) !important;
}

@keyframes bookFloat {
  0% {
    transform: translateY(0px) rotateY(-8deg) rotateX(4deg);
  }
  100% {
    transform: translateY(-12px) rotateY(4deg) rotateX(-2deg);
  }
}

.book-3d-face {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px 14px 14px 8px;
  overflow: hidden;
  backface-visibility: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.6), inset 3px 0 6px rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(254, 209, 0, 0.3);
}

.book-3d-face img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.book-3d-front {
  z-index: 2;
  transform: rotateY(0deg);
}

.book-3d-back {
  transform: rotateY(180deg);
  z-index: 1;
}

.book-3d-controls {
  margin-top: 1.25rem;
  display: flex;
  gap: 0.75rem;
  justify-content: center;
}

.btn-book-flip {
  background: rgba(30, 41, 59, 0.85);
  border: 1px solid #475569;
  color: #cbd5e1;
  font-size: 0.85rem;
  font-weight: 700;
  padding: 0.45rem 0.9rem;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.2s;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}

.btn-book-flip:hover {
  background: rgba(254, 209, 0, 0.2);
  border-color: #fed100;
  color: #fed100;
}

/* DETAILS & CTA */
.book-promo-details {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.book-promo-badge {
  align-self: flex-start;
  background: #065f46;
  color: #34d399;
  border: 1px solid #059669;
  font-size: 0.75rem;
  font-weight: 800;
  padding: 0.25rem 0.65rem;
  border-radius: 999px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.book-promo-title {
  font-family: var(--font-display);
  font-size: 1.85rem;
  font-weight: 900;
  line-height: 1.2;
  color: #ffffff;
  margin: 0;
}

.book-promo-title span {
  color: #fed100;
  display: block;
  font-size: 1.15rem;
  font-weight: 700;
  margin-top: 0.35rem;
}

.book-promo-author {
  font-size: 0.95rem;
  color: #94a3b8;
  margin: 0;
}

.book-promo-author strong {
  color: #e2e8f0;
}

.book-promo-desc {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #cbd5e1;
  background: rgba(15, 23, 42, 0.5);
  border-left: 3px solid #fed100;
  padding: 0.75rem 1rem;
  border-radius: 0 8px 8px 0;
  margin: 0;
}

.book-promo-meta {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  font-size: 0.85rem;
  color: #94a3b8;
}

.book-promo-meta span {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  background: rgba(30, 41, 59, 0.6);
  padding: 0.3rem 0.65rem;
  border-radius: 6px;
  border: 1px solid #334155;
}

.book-promo-actions {
  display: flex;
  gap: 0.85rem;
  flex-wrap: wrap;
  margin-top: 0.5rem;
}

.btn-book-download {
  background: #fed100;
  color: #0f172a !important;
  font-weight: 900;
  font-size: 1.05rem;
  padding: 0.85rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 4px 15px rgba(254, 209, 0, 0.4);
  transition: all 0.25s ease;
  border: none;
  cursor: pointer;
}

.btn-book-download:hover {
  background: #ffe04d;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(254, 209, 0, 0.55);
}

.btn-book-dismiss {
  background: transparent;
  color: #94a3b8;
  border: 1px solid #475569;
  font-weight: 700;
  font-size: 0.95rem;
  padding: 0.85rem 1.25rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-book-dismiss:hover {
  background: rgba(255, 255, 255, 0.05);
  color: #f1f5f9;
  border-color: #94a3b8;
}

@media (max-width: 768px) {
  .book-promo-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 1.25rem;
  }
  .book-3d-wrapper {
    width: 180px;
    height: 265px;
  }
  .book-promo-title {
    font-size: 1.45rem;
  }
  .btn-book-download {
    width: 100%;
    justify-content: center;
  }
  .btn-book-dismiss {
    width: 100%;
    text-align: center;
  }
}
`;

let currentCss = fs.readFileSync(cssPath, 'utf8');
if (!currentCss.includes('MODAL PROMO 3D')) {
  fs.writeFileSync(cssPath, currentCss + bookCss, 'utf8');
  console.log('CSS updated successfully');
}

// 2. Update index.html
let currentHtml = fs.readFileSync(indexPath, 'utf8');

const bookModalHtml = `
  <!-- MODAL PROMO 3D : LE CORANISTE REPENTI -->
  <div class="modal-backdrop" id="book-promo-modal" role="dialog" aria-modal="true" aria-labelledby="book-promo-title">
    <div class="modal-card book-promo-modal-card">
      <div class="book-promo-header">
        <h3 id="book-promo-title">✨ NOUVEAU LIVRE — ÉDITION OFFICIELLE</h3>
        <button class="btn-close-modal" data-action="close-modal" data-modal-id="book-promo-modal" aria-label="Fermer">✕</button>
      </div>
      <div class="book-promo-grid">
        <!-- 3D INTERACTIVE BOOK -->
        <div class="book-3d-stage">
          <div class="book-3d-wrapper" id="book-3d-interactive" data-action="flip-book" title="Cliquer pour retourner le livre (Recto / Verso)">
            <div class="book-3d-face book-3d-front">
              <img src="couverture livre.png" alt="Couverture - Le Coraniste Repenti" loading="lazy" decoding="async">
            </div>
            <div class="book-3d-face book-3d-back">
              <img src="arriere livre.png" alt="4ème de couverture - Le Coraniste Repenti" loading="lazy" decoding="async">
            </div>
          </div>
          <div class="book-3d-controls">
            <button class="btn-book-flip" data-action="flip-book">
              🔄 Retourner le livre (4e de couverture)
            </button>
          </div>
        </div>

        <!-- DETAILS & ACTIONS -->
        <div class="book-promo-details">
          <div class="book-promo-badge">Témoignage Spirituel & Pédagogique</div>
          <h2 class="book-promo-title">
            LE CORANISTE REPENTI
            <span>Comment un adepte du « Coran seul » a redécouvert la Sunna, le Messager ﷺ et le chemin du retour</span>
          </h2>
          <p class="book-promo-author">Par <strong>Salah Eddine Ahmed</strong></p>
          <p class="book-promo-desc">
            Ce livre suit le cheminement d’un ancien coraniste fictif qui raconte, étape après étape, comment il a redécouvert la place du Messager d’Allah ﷺ, la fonction de la Sunna et la nécessité d’une recherche sincère, humble et méthodique. Un récit sur l’égarement, la remise en question, le retour et la miséricorde.
          </p>
          <div class="book-promo-meta">
            <span>📄 Format PDF Complet</span>
            <span>⚡ Haute Résolution</span>
            <span>🎁 Accès 100% Libre & Gratuit</span>
          </div>
          <div class="book-promo-actions">
            <a href="LE_CORANISTE_REPENTI_EDITION_FINALE.pdf" download="LE_CORANISTE_REPENTI_EDITION_FINALE.pdf" class="btn-book-download" id="btn-download-book">
              📥 Télécharger le livre (PDF)
            </a>
            <button class="btn-book-dismiss" data-action="close-modal" data-modal-id="book-promo-modal">
              Continuer vers le site
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

// Insert before closing body / before toast
if (!currentHtml.includes('id="book-promo-modal"')) {
  currentHtml = currentHtml.replace('  <!-- TOAST NOTIFICATION -->', bookModalHtml + '\n  <!-- TOAST NOTIFICATION -->');
  
  // Add Topbar Button
  const topbarButton = `
        <button class="btn-action-topbar btn-book-promo-topbar" data-action="open-modal" data-modal-id="book-promo-modal" title="Découvrir le livre 'Le Coraniste Repenti'">
          <span>📖</span>
          <span class="desktop-only-text">Livre Offert (PDF)</span>
        </button>
`;
  currentHtml = currentHtml.replace('<button class="btn-search-trigger"', topbarButton + '        <button class="btn-search-trigger"');
  
  // Add hero button
  const heroBookBtn = `
        <button class="btn-hero-secondary" data-action="open-modal" data-modal-id="book-promo-modal" style="background: linear-gradient(135deg, #1e293b, #0f172a); color: #fed100; border-color: #fed100;">
          <span>📖</span> Télécharger le livre (PDF)
        </button>
`;
  currentHtml = currentHtml.replace('</section>\n\n    <!-- PRÉFACE -->', '</div>\n    </section>\n\n    <!-- PRÉFACE -->');
  currentHtml = currentHtml.replace('<button class="btn-hero-secondary" data-action="open-modal" data-modal-id="contact-modal">', heroBookBtn + '        <button class="btn-hero-secondary" data-action="open-modal" data-modal-id="contact-modal">');

  fs.writeFileSync(indexPath, currentHtml, 'utf8');
  console.log('index.html updated successfully');
}

// 3. Update app.js logic
let currentAppJs = fs.readFileSync(appJsPath, 'utf8');

const bookPromoJs = `
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
        bookCard.style.transform = \`scale(1.05) rotateY(\${rotY}deg) rotateX(\${rotX}deg) translateZ(30px)\`;
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
`;

if (!currentAppJs.includes('initBookPromo3D')) {
  // Add flip-book action
  currentAppJs = currentAppJs.replace("case 'close-modal': {", `case 'flip-book': {
      const bookEl = document.getElementById('book-3d-interactive');
      if (bookEl) {
        bookEl.classList.toggle('is-flipped');
        if (!bookEl.classList.contains('is-flipped')) {
          bookEl.style.transform = '';
        }
      }
      break;
    }

    case 'close-modal': {`);

  // Call initBookPromo3D in initApp()
  currentAppJs = currentAppJs.replace('initMobileDrawer();', 'initMobileDrawer();\n  initBookPromo3D();');

  // Append JS helper
  currentAppJs += '\n' + bookPromoJs;

  fs.writeFileSync(appJsPath, currentAppJs, 'utf8');
  console.log('app.js updated successfully');
}
