/**
 * Script de mise à jour des pages statiques d'arguments dans arguments/*.html
 * Ajout des blocs de sophismes repérés, des badges cliquables, de la modale et du lien sidebar
 */

const fs = require('fs');
const path = require('path');

const ARGUMENTS_DIR = path.join(__dirname, '..', 'arguments');

const FALLACIES_MAP = {
  1: ["non-sequitur", "fausse-dichotomie"],
  2: ["homme-de-paille", "cherry-picking", "non-sequitur"],
  3: ["fausse-dichotomie", "non-sequitur"],
  4: ["cherry-picking", "homme-de-paille", "non-sequitur"],
  5: ["non-sequitur", "generalisation-abusive", "double-standard"],
  6: ["generalisation-abusive", "argument-de-possibilite", "double-standard"],
  7: ["cherry-picking", "non-sequitur"],
  8: ["equivoque-lexicale", "cherry-picking", "non-sequitur"],
  9: ["generalisation-abusive", "fausse-dichotomie", "non-sequitur"],
  10: ["fausse-dichotomie", "double-standard", "deplacement-charge-preuve"]
};

const FALLACIES_DICT = {
  "homme-de-paille": { name: "L'Homme de paille", icon: "🌾" },
  "fausse-dichotomie": { name: "La Fausse dichotomie", icon: "⚖️" },
  "generalisation-abusive": { name: "La Généralisation abusive", icon: "🔍" },
  "non-sequitur": { name: "Le Non sequitur", icon: "⚡" },
  "cherry-picking": { name: "Le Cherry-picking", icon: "🍒" },
  "double-standard": { name: "Le Double standard", icon: "🔄" },
  "equivoque-lexicale": { name: "L'Équivoque lexicale", icon: "🔀" },
  "argument-de-possibilite": { name: "L'Argument de possibilité", icon: "🎲" },
  "deplacement-charge-preuve": { name: "La Charge de la preuve", icon: "⚖️" },
  "appel-emotion": { name: "L'Appel à l'émotion", icon: "🎭" }
};

const files = fs.readdirSync(ARGUMENTS_DIR).filter(f => f.endsWith('.html'));

files.forEach(filename => {
  const filePath = path.join(ARGUMENTS_DIR, filename);
  let content = fs.readFileSync(filePath, 'utf8');

  // Trouver l'ID de l'argument (1 à 10)
  let argId = null;
  for (let id = 1; id <= 10; id++) {
    if (filename.startsWith(`${id}-`) || filename.startsWith(`${id}.`)) {
      argId = id;
      break;
    }
  }
  if (!argId) return;

  const fallacies = FALLACIES_MAP[argId] || [];

  // 1. Ajouter le lien dans la sidebar s'il n'est pas déjà présent
  if (!content.includes('id="nav-item-boite-a-outils"')) {
    content = content.replace(
      /(<a href="\.\.\/index\.html#coranisme-intro"[^>]*>[\s\S]*?<\/li>)/,
      `$1\n\n        <li>\n          <a href="../index.html#boite-a-outils" class="sidebar-nav-item" id="nav-item-boite-a-outils">\n            <span class="sidebar-nav-num">🧠</span>\n            <span class="sidebar-nav-title">Boîte à outils — Sophismes</span>\n          </a>\n        </li>`
    );
  }

  // 2. Générer le bloc des sophismes repérés
  const fallaciesBadgesHTML = `
          <!-- BLOC SOPHISMES REPÉRÉS (ENTRE LEUR ARGUMENT ET LE NŒUD LOGIQUE) -->
          <div class="arg-fallacies-box">
            <div class="arg-fallacies-header">
              <span>🧠</span> <strong>SOPHISMES REPÉRÉS DANS CET ARGUMENT :</strong>
            </div>
            <div class="arg-fallacies-badges">
              ${fallacies.map(fId => {
                const fObj = FALLACIES_DICT[fId] || { name: fId, icon: "⚡" };
                return `<button class="fallacy-badge" data-action="open-fallacy" data-fallacy-id="${fId}" aria-label="Voir la définition du sophisme ${fObj.name}"><span>${fObj.icon}</span> <span>${fObj.name}</span></button>`;
              }).join('\n              ')}
            </div>
          </div>
`;

  // Insérer entre </section> (section-their-thesis) et <!-- SECTION 2 : LE NŒUD LOGIQUE -->
  if (!content.includes('class="arg-fallacies-box"')) {
    content = content.replace(
      /(<\/section>\s*<!-- SECTION 2 : LE NŒUD LOGIQUE -->)/,
      `</section>\n${fallaciesBadgesHTML}\n          <!-- SECTION 2 : LE NŒUD LOGIQUE -->`
    );
  }

  // 3. Ajouter la modale de sophisme si non présente
  if (!content.includes('id="fallacy-modal"')) {
    const modalHTML = `
  <!-- MODAL DÉFINITION D'UN SOPHISME (AU CLIC SUR BADGE) -->
  <div class="modal-backdrop" id="fallacy-modal">
    <div class="modal-card" style="max-width: 640px; max-height: 85vh;">
      <div class="modal-header">
        <h3 id="fallacy-modal-title">🧠 Fiche Sophisme</h3>
        <button class="btn-close-modal" data-action="close-modal" data-modal-id="fallacy-modal">✕</button>
      </div>
      <div class="modal-body" id="fallacy-modal-body" style="padding: 1.5rem; overflow-y: auto;">
        <!-- Contenu dynamique -->
      </div>
    </div>
  </div>
`;
    content = content.replace('</body>', `${modalHTML}\n</body>`);
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✅ Page statique arguments/${filename} mise à jour avec succès.`);
});

console.log('🎉 Toutes les pages statiques ont été synchronisées !');
