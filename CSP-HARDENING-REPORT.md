# 🛡️ RAPPORT DE DURCISSEMENT CSP (P2) — PRODUCTION

**Projet :** Manuel de Réfutation du Coranisme  
**Domaine Principal :** [https://anti-coranisme.novaskill.tech](https://anti-coranisme.novaskill.tech/)  
**Alias Vercel :** [https://coranisme-pour-les-nuls.vercel.app](https://coranisme-pour-les-nuls.vercel.app/)  
**Date :** 27 Août 2026  
**Responsable d'audit :** NOVA-SEC (Supervision : NOVA-LEAD)  

---

## 1. Contexte & Objectif

L'audit de sécurité initial et le contre-audit indépendant avaient identifié comme risque résiduel P2 la présence de la directive `'unsafe-inline'` dans `script-src` de la Content Security Policy (CSP).

Cette mission a accompli avec succès :
1. L'inventaire de 100% des scripts et attributs d'événements inline (`onclick=`).
2. La refactorisation complète vers une architecture de **Délégation d'Événements Globale** (`data-action`, `data-modal-id`, `data-arg-id`).
3. La régénération des pages statiques d'arguments sans aucun handler inline.
4. La suppression définitive de `'unsafe-inline'` dans `script-src` sur l'Edge Vercel.
5. Le déploiement et la validation en environnement de production réel.

---

## 2. En-tête CSP Déployé en Production

```http
Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https://raw.githubusercontent.com; connect-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self' mailto:; frame-ancestors 'none'; upgrade-insecure-requests;
```

### Analyse des Directives :
- `default-src 'self'` : Restriction stricte des flux par défaut.
- `script-src 'self'` : **Zéro script inline exécutable, zéro eval autorisé**. Seuls les fichiers JS externes servis par l'origine (`js/data.js`, `js/app.js`) sont admis.
- `style-src 'self' 'unsafe-inline' https://fonts.googleapis.com` : Permet les variables CSS dynamiques et polices Google Fonts.
- `font-src 'self' https://fonts.gstatic.com data:` : Chargement légitime des polices Google Fonts.
- `object-src 'none'` : Neutralisation absolue des plugins legacy (Flash, Java, Silverlight).
- `base-uri 'self'` : Protection anti-détournement de base URL.
- `form-action 'self' mailto:` : Protection anti-exfiltration de formulaires.
- `frame-ancestors 'none'` : Protection anti-Clickjacking totale.

---

## 3. Matrice de Migration des Événements & Non-Régression

| Composant | Ancien Code (Inline) | Nouveau Code (Délégation Propre) | Vérification Prod |
|---|---|---|---|
| Splash Al-Barbahari | `onclick="closePortal()"` / `openPortal()` | `data-action="close-portal"` / `open-portal` | ✅ Validé |
| Recherche Modale | `onclick="openSearchModal()"` / `closeSearchModal()` | `data-action="open-search"` / `close-search` | ✅ Validé |
| Modales Contact / Legal | `onclick="openModal('...')"` / `closeModal(...)` | `data-action="open-modal" data-modal-id="..."` | ✅ Validé |
| Menu Drawer Mobile | `onclick="toggleDrawer(...)"` | `data-action="toggle-drawer" data-drawer-state="..."` | ✅ Validé |
| Copie Réponse 30s | `onclick="copyToClipboard('...')"` | `data-action="copy-30s" data-arg-id="..."` | ✅ Validé (Toast OK) |
| Accordéons Objections | `onclick="toggleObjection(this)"` | `data-action="toggle-objection"` | ✅ Validé (Dépliage OK) |
| Quiz Interactif | `onclick="handleQuizAnswer(...)"` | `data-action="quiz-answer" data-arg-id="..."` | ✅ Validé (Feedback OK) |
| Navigation Recherche | `onclick="jumpToArg(...)"` | `data-action="jump-arg" data-arg-id="..."` | ✅ Validé (Route SPA OK) |
| Impression / Export PDF | `onclick="window.print()"` / `printArgumentDirect(...)` | `data-action="print-page"` / `print-arg-direct` | ✅ Validé |

---

## 4. Conclusion de NOVA-SEC

La suppression de `'unsafe-inline'` dans `script-src` élève le niveau de protection contre le Cross-Site Scripting (XSS) au plus haut standard de l'industrie pour les applications statiques/SPA. Aucune régression fonctionnelle ni visuelle n'a été constatée.

**Statut Global : P2 CSP HARDENING TERMINE ET VALIDE EN PRODUCTION (100%)** ✅
