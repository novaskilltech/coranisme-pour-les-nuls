# 📋 CSP HARDENING INVENTORY — anti-coranisme.novaskill.tech

**Mission :** NOVASQUAD — SUPPRESSION DE 'unsafe-inline' DANS script-src  
**Date :** 27 Août 2026  
**Responsable d'inventaire :** NOVA-SEC (Revue : NOVA-ARCH, NOVA-QA)  

---

## 1. Inventaire des Scripts

| Fichier | Ligne | Type de Script | Contenu / Rôle | Statut CSP | Stratégie de Traitement |
|---|---|---|---|---|---|
| `index.html` | L48 | `<script type="application/ld+json">` | Données structurées Schema.org (JSON-LD non exécutable) | **Non bloqué par script-src** | Conservé tel quel (standard W3C / SEO) |
| `index.html` | L368 | `<script src="js/data.js">` | Chargement du catalogue statique immuable | **Conforme `script-src 'self'`** | Conservé externe |
| `index.html` | L369 | `<script src="js/app.js">` | Logique applicative SPA, recherche et modales | **Conforme `script-src 'self'`** | Conservé externe |
| `arguments/*.html` | — | Aucun script inline ni externe | Pages statiques pures avec CSS | **Conforme** | Aucun script |

---

## 2. Inventaire Exhaustif des Handlers d'Événements Inline (`onclick=`)

### A. Dans `index.html` (Statique Principal)

| Ligne | Élément HTML | Attribut Inline | Action Déclenchée | Stratégie de Migration (Délégation / Data-action) |
|---|---|---|---|---|
| L108 | `<button class="btn-enter-site">` | `onclick="closePortal()"` | Ferme le splash Al-Barbahari | `data-action="close-portal"` |
| L132 | `<button class="btn-search-trigger">` | `onclick="openSearchModal()"` | Ouvre la modale de recherche | `data-action="open-search"` |
| L137 | `<button class="btn-action-topbar">` | `onclick="openPortal()"` | Ouvre le splash Al-Barbahari | `data-action="open-portal"` |
| L142 | `<button class="btn-action-topbar">` | `onclick="openModal('contact-modal')"` | Ouvre la modale Contact | `data-action="open-modal" data-modal-id="contact-modal"` |
| L147 | `<button class="btn-action-topbar sadaqa-pill-btn">` | `onclick="openModal('legal-modal')"` | Ouvre la modale Legal/Partage | `data-action="open-modal" data-modal-id="legal-modal"` |
| L160 | `<div class="drawer-backdrop" id="drawer-backdrop">` | `onclick="toggleDrawer(false)"` | Ferme le drawer mobile | `data-action="toggle-drawer" data-drawer-state="false"` |
| L171 | `<button class="btn-close-drawer-mobile">` | `onclick="toggleDrawer(false)"` | Ferme le drawer mobile | `data-action="toggle-drawer" data-drawer-state="false"` |
| L192 | `<button class="btn-sidebar-contact">` | `onclick="openModal('contact-modal')"` | Ouvre la modale Contact | `data-action="open-modal" data-modal-id="contact-modal"` |
| L210 | `<button class="btn-close-modal">` | `onclick="closeSearchModal()"` | Ferme la modale de recherche | `data-action="close-search"` |
| L228 | `<button class="btn-close-modal">` | `onclick="closeModal('contact-modal')"` | Ferme la modale Contact | `data-action="close-modal" data-modal-id="contact-modal"` |
| L267 | `<button class="btn-close-modal">` | `onclick="closeModal('legal-modal')"` | Ferme la modale Legal | `data-action="close-modal" data-modal-id="legal-modal"` |
| L341 | `<button class="footer-btn-link">` | `onclick="openModal('legal-modal')"` | Ouvre la modale Legal | `data-action="open-modal" data-modal-id="legal-modal"` |
| L344 | `<button class="footer-btn-link">` | `onclick="openModal('contact-modal')"` | Ouvre la modale Contact | `data-action="open-modal" data-modal-id="contact-modal"` |
| L347 | `<button class="footer-btn-link">` | `onclick="openPortal()"` | Ouvre le splash Al-Barbahari | `data-action="open-portal"` |

---

### B. Dans `js/app.js` (Templates Dynamiques de la SPA)

| Ligne | Template Généré | Attribut Inline Actuel | Action Déclenchée | Stratégie de Migration (Délégation globale) |
|---|---|---|---|---|
| L110 | Header Hero | `onclick="openSearchModal()"` | Ouvre recherche | `data-action="open-search"` |
| L113 | Header Hero | `onclick="openModal('contact-modal')"` | Ouvre contact | `data-action="open-modal" data-modal-id="contact-modal"` |
| L147 | Grille Accueil | `onclick="printArgumentDirect(${arg.id})"` | Impression directe fiche | `data-action="print-arg-direct" data-arg-id="${arg.id}"` |
| L194 | Vue Argument | `onclick="window.print()"` | Impression page courante | `data-action="print-page"` |
| L377 | Encadré 30s | `onclick="copyToClipboard('${arg.id}')"` | Copie texte argument | `data-action="copy-30s" data-arg-id="${arg.id}"` |
| L402 | Accordéons Objections | `onclick="toggleObjection(this)"` | Déroule objection | `data-action="toggle-objection"` |
| L434 | Options Quiz | `onclick="handleQuizAnswer(...)"` | Réponse quiz | `data-action="quiz-answer" data-arg-id="${arg.id}" data-q-idx="${qIdx}" data-o-idx="${oIdx}"` |
| L612 | Recherche résultat | `onclick="jumpToArg(${arg.id})"` | Aller vers fiche | `data-action="jump-arg" data-arg-id="${arg.id}"` |
| L656 | Recherche filtrée | `onclick="jumpToArg(${arg.id})"` | Aller vers fiche | `data-action="jump-arg" data-arg-id="${arg.id}"` |

---

### C. Dans `arguments/*.html` (10 Fiches Statiques HTML) & Scripts de Génération

| Fichier | Ligne | Attribut Inline | Action | Stratégie |
|---|---|---|---|---|
| `arguments/*.html` (x10) | L57 | `onclick="window.print()"` | Impression topbar | Remplacé par `class="btn-action-topbar btn-print-page" data-action="print"` et gestionnaire JS ou suppression du onclick inline |
| `arguments/*.html` (x10) | L79 | `onclick="window.print()"` | Impression badge | Remplacé par `class="arg-download-badge btn-print-page" data-action="print"` |
| `scripts/generate_static_pages.cjs` | L78, L100 | `onclick="window.print()"` | Template génération | Remplacé par script de print sans inline onclick |

---

## 3. Architecture Cible de Délégation d'Événements

Un unique gestionnaire d'événements centralisé et délégué sur `document` dans `js/app.js` prendra en charge tous les `data-action` de manière propre, performante et sans attacher des listeners multiples :

```javascript
document.addEventListener('click', (e) => {
  const trigger = e.target.closest('[data-action]');
  if (!trigger) return;

  const action = trigger.dataset.action;
  switch (action) {
    case 'open-search':
      openSearchModal();
      break;
    case 'close-search':
      closeSearchModal();
      break;
    case 'open-modal':
      openModal(trigger.dataset.modalId);
      break;
    case 'close-modal':
      closeModal(trigger.dataset.modalId);
      break;
    case 'open-portal':
      openPortal();
      break;
    case 'close-portal':
      closePortal();
      break;
    case 'toggle-drawer':
      toggleDrawer(trigger.dataset.drawerState === 'true');
      break;
    case 'print-page':
      window.print();
      break;
    case 'print-arg-direct':
      printArgumentDirect(parseInt(trigger.dataset.argId, 10));
      break;
    case 'copy-30s':
      copyToClipboard(trigger.dataset.argId);
      break;
    case 'toggle-objection':
      toggleObjection(trigger);
      break;
    case 'quiz-answer':
      handleQuizAnswer(
        parseInt(trigger.dataset.argId, 10),
        parseInt(trigger.dataset.qIdx, 10),
        parseInt(trigger.dataset.oIdx, 10),
        trigger
      );
      break;
    case 'jump-arg':
      jumpToArg(parseInt(trigger.dataset.argId, 10));
      break;
  }
});
```

---

## 4. Definition of Ready — Migration CSP P2

- [x] 100% des occurrences d'inline scripts et inline handlers répertoriées.
- [x] Architecture de délégation d'événements prête sans introduction de dépendances ni de `eval`.
- [x] Aucun impact sur l'accessibilité native des `<button>`.

**Verdict DoR : READY FOR IMPLEMENTATION ✅**
