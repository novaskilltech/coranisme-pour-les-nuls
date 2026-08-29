# 📋 JOURNAL DES DÉCISIONS & MODIFICATIONS TECHNIQUES (DECISION LOG)
**Projet** : *Manuel Pratique de Réfutation Méthodique du Coranisme*  
**Auteur de l'ouvrage** : Salah Eddine Ahmed (Abou Soulaymane)  
**Ingénierie & Architecture** : NOVA SQUAD (Nova Lead, Nova Genius, Nova Prompt, Nova DevOps, Nova Sec, Nova DPO)  
**Domaine de production** : [https://anti-coranisme.novaskill.tech](https://anti-coranisme.novaskill.tech)  
**Dépôt Git** : `https://github.com/novaskilltech/coranisme-pour-les-nuls.git`  
**Dernière mise à jour** : 29 Août 2026  

---

## 1. VUE D'ENSEMBLE DU PROJET & OBJECTIFS

Ce projet constitue la plateforme interactive officielle du manuel de réfutation méthodique du coranisme (mouvement rejetant l'autorité de la Sunna prophétique). La mission technique a consisté à :
1. Développer une application monopage (SPA) statique ultra-rapide, accessible, responsive et sécurisée (zéro tracking commercial, respect strict du RGPD).
2. Fournir une couverture linguistique intégrale en **13 langues**, écrites à **100% en langue native pure** sans aucun mélange linguistique (*zéro Franglais, zéro Spanglish, zéro texte de substitution*).
3. Intégrer la **Boîte à outils des 10 sophismes**, interconnectée avec les 10 fiches d'arguments via des badges dynamiques et des fiches modales.
4. Assurer un déploiement continu et automatisé sur **Vercel** avec un nom de domaine de production personnalisé.

---

## 2. CHRONOLOGIE DES DÉCISIONS MAJEURES & INTERVENTIONS

### 🎯 Décision 1 : Intégration de la Boîte à Outils des Sophismes & Badges Interactifs
- **Besoin** : Intégrer l'ouvrage complémentaire *« Boîte à outils — Sophismes / Coranisme »* au site existant.
- **Modifications réalisées** :
  - Création de la section `#boite-a-outils` affichant la règle d'or méthodologique, les 10 cartes de sophismes interactives dépliables, les 4 réflexes critiques, le quiz interactif et la conclusion.
  - Connexion bidirectionnelle entre les 10 arguments et les sophismes via des badges cliquables (`.fallacy-badge`) ouvrant directement la fiche explicative correspondante.
  - Téléchargement dédié du document PDF original ([`Boite_a_outils_Sophismes_Coranisme.pdf`](file:///c:/Users/P%20C/Documents/Mes%20ouvrages/MANUEL%20DE%20REFUTATION%20DU%20CORANISME/Boite_a_outils_Sophismes_Coranisme.pdf)).
  - **Fichiers impactés** : `js/app.js`, `css/style.css`, `index.html`, `js/data.js`.

---

### 🌍 Décision 2 : Internationalisation (i18n) Intégrale en 13 Langues Natives
- **Besoin** : Rendre l'ensemble de la plateforme (10 arguments, préface, introduction, sophismes, quiz, navigation, modales et pieds de page) disponible dans 13 langues avec fidélité théologique absolue.
- **Langues couvertes (13)** :
  1. **Français (FR)** — Langue source de l'ouvrage.
  2. **العربية (AR)** — Arabe littéraire avec support bidirectionnel RTL (`dir="rtl"`).
  3. **English (EN)** — Anglais académique.
  4. **Español (ES)** — Espagnol castillan pur.
  5. **Italiano (IT)** — Italien classique et soutenu.
  6. **Português (PT)** — Portugais standard.
  7. **Deutsch (DE)** — Allemand théologique et philosophique.
  8. **اردو (UR)** — Ourdou soutenu avec typographie Nastaliq RTL.
  9. **தமிழ் (TA)** — Tamoul littéraire.
  10. **الدارجة المغربية (ARY)** — Arabe marocain dialectal / Darija RTL.
  11. **پښتو (PS)** — Pachto avec typographie orientale RTL.
  12. **Kurdî (KU)** — Kurde (Kurmancî).
  13. **Нохчийн (CE)** — Tchétchène littéraire.
- **Fichiers impactés** : `js/i18n.js`, `js/translations/*.js` (13 fichiers autonomes).

---

### 🛡️ Décision 3 : Éradication Totale des Fuites Linguistiques (0 Anglais / 0 Français résiduel)
- **Constat** : Présence de termes anglais ou français mélangés dans certaines versions (ex: Espagnol, Italien, Tamoul, Ourdou, Kurde, Tchétchène) provenant de matrices de traduction antérieures.
- **Actions entreprises** :
  - Réécriture intégrale des 10 fiches d'arguments, des objections, des analogies et des 10 sophismes par lots rigoureux.
  - Élimination des parenthèses translitérées superflues.
  - Création de scripts de compilation et d'audit automatisé (`scripts/check_zero_english_leakage.cjs`).
  - **Résultat de l'audit** : **Score parfait (0 fuite linguistique résiduelle)** validé sur l'intégralité des 13 fichiers de langues.

---

### 🚩 Décision 4 : Résolution du Bug d'Affichage des Drapeaux & Passerelle de Bienvenue (Language Gateway)
- **Constat** : Sur Windows (navigateurs Chrome/Edge/Firefox), les émojis drapeaux Unicode s'affichaient sous forme de code texte brut (`FR`, `SA`, `MA`, `GB`, `ES`, `DE`, etc.) au lieu d'icônes graphiques.
- **Solution apportée** :
  - Remplacement de tous les émojis par des **drapeaux vectoriels SVG haute définition** intégrés directement dans le DOM (`index.html`) et la feuille de style (`css/style.css`).
  - Amélioration de l'écran d'accueil plein écran (`#lang-gateway`) avec 13 cartes interactives rétroéclairées, bordures contrastées et transitions fluides.
  - **Fichiers impactés** : `index.html`, `css/style.css`, `js/i18n.js`.

---

### 📊 Décision 5 : Compteur de Visites Anonymisé & Conforme RGPD (0 Cookies)
- **Besoin** : Disposer d'une métrique d'impact et de lecture réelle du manuel sans exposer les utilisateurs ni enfreindre le RGPD.
- **Architecture technique** :
  - Endpoint Serverless API Vercel : [`api/counter.js`](file:///c:/Users/P%20C/Documents/Mes%20ouvrages/MANUEL%20DE%20REFUTATION%20DU%20CORANISME/api/counter.js).
  - Stockage persistant sécurisé : Vercel KV / Redis via tokens d'environnement sécurisés.
  - Hachage cryptographique SHA-256 avec salage quotidien pour dédupliquer les requêtes sans jamais stocker d'adresse IP en clair.
  - Zéro cookie tiers, zéro pixel de traçage commercial.
  - Affichage discret dans le footer avec infobulle légale et synchronisation dans les 13 langues.

---

### 📤 Décision 6 : Boutons de Copie Rapide & Modal de Partage Social 1-Clic
- **Fonctionnalités** :
  - Boutons de copie rapide sur chaque bloc (Argument adverse, Nœud logique, Principe central, Analogies, Réponse 30s, Objections, Conclusion).
  - Modal de partage multi-plateforme (`#share-modal`) compatible avec WhatsApp, Telegram, X (Twitter), Facebook, Email et Copie directe du lien avec feedback toast temporisé.
  - **Fichiers impactés** : `index.html`, `css/style.css`, `js/app.js`.

---

### 🔒 Décision 7 : Hardening de Sécurité & Conformité CSP
- **Actions de durcissement** :
  - Mise en place d'en-têtes HTTP de sécurité stricts dans [`vercel.json`](file:///c:/Users/P%20C/Documents/Mes%20ouvrages/MANUEL%20DE%20REFUTATION%20DU%20CORANISME/vercel.json) :
    - `Content-Security-Policy` (CSP) robuste.
    - `X-Frame-Options: DENY` (anti-clickjacking).
    - `X-Content-Type-Options: nosniff`.
    - `Referrer-Policy: strict-origin-when-cross-origin`.
    - `Permissions-Policy: interest-cohort=()` (désactivation de FLoC/pistage).
  - Élimination des gestionnaires d'événements `onclick` en ligne au profit de la délégation d'événements JavaScript `data-action`.
  - **Rapports générés** : [`SECURITY-AUDIT.md`](file:///c:/Users/P%20C/Documents/Mes%20ouvrages/MANUEL%20DE%20REFUTATION%20DU%20CORANISME/SECURITY-AUDIT.md), [`SECURITY-COUNTER-AUDIT.md`](file:///c:/Users/P%20C/Documents/Mes%20ouvrages/MANUEL%20DE%20REFUTATION%20DU%20CORANISME/SECURITY-COUNTER-AUDIT.md), [`CSP-HARDENING-REPORT.md`](file:///c:/Users/P%20C/Documents/Mes%20ouvrages/MANUEL%20DE%20REFUTATION%20DU%20CORANISME/CSP-HARDENING-REPORT.md).

---

### 🚀 Décision 8 : Déploiement Continu & Redéploiement Vercel Production
- **Infrastructure** : Vercel CLI (Node.js 22).
- **Domaine officiel** : [https://anti-coranisme.novaskill.tech](https://anti-coranisme.novaskill.tech)
- **Configuration DNS/Aliasing** : Production Alias configuré sur le projet `coranisme-pour-les-nuls`.
- **Validation** : Déploiement en ligne vérifié et fonctionnel avec code HTTP 200 et temps de chargement < 300ms.

---

## 3. INVENTAIRE DES FICHIERS DU PROJET

| Répertoire / Fichier | Rôle & Contenu |
| :--- | :--- |
| [`index.html`](file:///c:/Users/P%20C/Documents/Mes%20ouvrages/MANUEL%20DE%20REFUTATION%20DU%20CORANISME/index.html) | Structure principale, Passerelle de langue (`#lang-gateway`), Modales de recherche, contact, mentions légales, partage et Al-Barbahârî. |
| [`css/style.css`](file:///c:/Users/P%20C/Documents/Mes%20ouvrages/MANUEL%20DE%20REFUTATION%20DU%20CORANISME/css/style.css) | Système de design complet (charte « Pour les Nuls » jaune/noir, composants modulaires, responsive mobile, support RTL, animations). |
| [`js/app.js`](file:///c:/Users/P%20C/Documents/Mes%20ouvrages/MANUEL%20DE%20REFUTATION%20DU%20CORANISME/js/app.js) | Logique applicative : routeur SPA hash (`#arg-1`, `#boite-a-outils`, etc.), rendu dynamique des fiches, quiz interactifs, recherche plein texte, gestion des modales. |
| [`js/i18n.js`](file:///c:/Users/P%20C/Documents/Mes%20ouvrages/MANUEL%20DE%20REFUTATION%20DU%20CORANISME/js/i18n.js) | Moteur d'internationalisation : sélecteur de langue, bascule dynamique LTR/RTL, mise à jour en temps réel du DOM statique (`updateStaticDOM`). |
| [`js/translations/*.js`](file:///c:/Users/P%20C/Documents/Mes%20ouvrages/MANUEL%20DE%20REFUTATION%20DU%20CORANISME/js/translations/) | 13 packs de dictionnaires complets (`fr.js`, `ar.js`, `en.js`, `es.js`, `it.js`, `pt.js`, `de.js`, `ur.js`, `ta.js`, `ary.js`, `ps.js`, `ku.js`, `ce.js`). |
| [`api/counter.js`](file:///c:/Users/P%20C/Documents/Mes%20ouvrages/MANUEL%20DE%20REFUTATION%20DU%20CORANISME/api/counter.js) | API Serverless Vercel de comptage anonyme des visites avec protection anti-spam. |
| [`vercel.json`](file:///c:/Users/P%20C/Documents/Mes%20ouvrages/MANUEL%20DE%20REFUTATION%20DU%20CORANISME/vercel.json) | Configuration de déploiement Vercel, règles de réécriture SPA et en-têtes HTTP de sécurité. |
| [`scripts/`](file:///c:/Users/P%20C/Documents/Mes%20ouvrages/MANUEL%20DE%20REFUTATION%20DU%20CORANISME/scripts/) | Scripts d'automatisation, compilateurs de langues et outils d'audit linguistique (`check_zero_english_leakage.cjs`, `enrich_all_ui_keys.cjs`). |
| [`pdf/`](file:///c:/Users/P%20C/Documents/Mes%20ouvrages/MANUEL%20DE%20REFUTATION%20DU%20CORANISME/pdf/) | 10 fascicules PDF originaux des arguments + PDF de la boîte à outils des sophismes. |

---

## 4. MATRICE DE VÉRIFICATION & STATUT QUALITÉ

| Composant / Exigence | Statut | Commentaire de validation |
| :--- | :---: | :--- |
| **10 Arguments Réfutés** | ✅ OK | Contenu doctrinal complet, citations coraniques arabes vérifiées, analogies et réfutations. |
| **Boîte à Outils Sophismes** | ✅ OK | 10 sophismes interactifs, 4 réflexes, quiz pratique et badges interconnectés. |
| **Pureté Linguistique (13 langues)** | ✅ OK | Zéro fuite d'anglais ou de français détectée sur l'ensemble des 13 langues (Audit 100%). |
| **Affichage Drapeaux (Windows/Mac/Mobile)** | ✅ OK | Drapeaux vectoriels SVG intégrés, résolution complète des glyphes manquants. |
| **Support RTL (Arabe, Ourdou, Darija, Pachto)** | ✅ OK | Inversion automatique des directions, polices adaptées (Noto Naskh, Noto Nastaliq). |
| **Sécurité & Confidentialité RGPD** | ✅ OK | Zéro cookie publicitaire, hachage IP anonymisé, en-têtes CSP stricts. |
| **Déploiement Production** | ✅ OK | En ligne sur `https://anti-coranisme.novaskill.tech` (Vercel Production). |

---
*Document généré et maintenu par NOVA SQUAD pour l'ouvrage de Salah Eddine Ahmed (Abou Soulaymane).*
