# 🛡️ ATTACK SURFACE MAPPING — anti-coranisme.novaskill.tech

**Mission :** NOVASQUAD — AUDIT DE SÉCURITÉ & HARDENING DE PRODUCTION  
**Date :** 27 Août 2026  
**Cible :** `https://anti-coranisme.novaskill.tech` (et alias `https://coranisme-pour-les-nuls.vercel.app`)  
**Responsable d'audit :** NOVA-SEC  
**Supervision :** NOVA-LEAD & NOVA-ARCH  

---

## 1. Cartographie de l'Architecture Technique

| Composant | Détails & Technologies |
|---|---|
| **Type d'Application** | Application Web Statique (Jamstack) + SPA Hybride (Vanilla JS + HTML5 + CSS3) |
| **Hébergeur & CDN** | Vercel Edge Network (Région iad1 / Washington D.C., Edge Caching global) |
| **Domaines de Production** | `anti-coranisme.novaskill.tech`, `coranisme-pour-les-nuls.vercel.app` |
| **Backend & API** | Aucun backend dynamique / Aucune API serverless / Aucune base de données |
| **Base de Données** | Aucune (Données statiques pré-compilées dans `js/data.js` et HTML statiques dans `arguments/`) |
| **Authentification / Sessions** | Aucune (Accès public anonyme, zéro compte utilisateur, zéro cookie de session) |
| **Paiement / Transactions** | Aucun (Œuvre de diffusion pédagogique non commerciale) |
| **Fonctionnalités IA** | Aucune |
| **Ressources Externes** | Google Fonts (`fonts.googleapis.com`, `fonts.gstatic.com`), GitHub Raw (`raw.githubusercontent.com` pour Open Graph) |

---

## 2. Inventaire des Points d'Entrée & Surface d'Attaque

```
                               ┌──────────────────────────────────────────────┐
                               │   CLIENT INTERNET (Navigateur, Crawler)      │
                               └──────────────────────┬───────────────────────┘
                                                      │ HTTPS (TLS 1.3)
                                                      ▼
                               ┌──────────────────────────────────────────────┐
                               │             VERCEL EDGE NETWORK              │
                               │  - Routage & Clean URLs                      │
                               │  - En-têtes HTTP de sécurité                 │
                               │  - Cache CDN & DDoS Protection L3/L4        │
                               └──────────────────────┬───────────────────────┘
                                                      │
                       ┌──────────────────────────────┴──────────────────────────────┐
                       ▼                                                             ▼
       ┌───────────────────────────────┐                             ┌───────────────────────────────┐
       │     PAGES STATIQUES HTML      │                             │   ASSETS & SCRIPTS STATIQUES  │
       │ - /index.html (SPA Hub)       │                             │ - /css/style.css              │
       │ - /arguments/*.html (10 fiches│                             │ - /js/data.js                 │
       │ - /pdf/*.pdf (10 fascicules)  │                             │ - /js/app.js (Recherche DOM)  │
       └───────────────────────────────┘                             └───────────────────────────────┘
```

### Détail des vecteurs d'analyse :

1. **Vecteur 1 — En-têtes HTTP & Transport TLS (Vercel)**
   - *Risque :* Absence de Content-Security-Policy (CSP), Referrer-Policy, Permissions-Policy, COOP, CORP.
   - *Impact :* Vulnérabilité aux injections de scripts tiers, fuite de referrers, clickjacking sur navigateurs obsolètes.

2. **Vecteur 2 — Manipulation du DOM Côté Client (DOM XSS dans `js/app.js`)**
   - *Point d'entrée :* Champ de recherche instantanée (`#search-modal-input`).
   - *Mécanisme :* Récupération de la valeur saisie par l'utilisateur via `input.value` et concaténation directe dans `resultsContainer.innerHTML = ... « ${query} » ...` en cas d'absence de résultat.
   - *Impact :* Injection de code HTML / script malveillant dans le contexte de l'utilisateur (DOM XSS).

3. **Vecteur 3 — Fichiers Sensibles & Informations Divulguées**
   - *Contrôle :* Exposition potentielle de `.env`, `.git/config`, `.vercel`, `package.json`, sauvegardes `.zip` ou dumps `.sql`.
   - *Résultat vérifié :* Tous les fichiers sensibles retournent HTTP 404 sur l'infrastructure Vercel.

4. **Vecteur 4 — Dépendances & Supply Chain**
   - *Contrôle :* Projet sans dépendances runtime `node_modules` en production (Vanilla JS natif pur).
   - *Risque Supply Chain :* Nul en production.

5. **Vecteur 5 — Données Personnelles & Conformité RGPD**
   - *Contrôle :* Zéro collecte de formulaire, zéro stockage de données personnelles, zéro cookie publicitaire ou traceur tiers.

---

## 3. Matrice Initiale des Risques Identifiés

| ID | Composant | Vulnérabilité / Finding | Sévérité | Statut |
|---|---|---|:---:|:---:|
| **SEC-01** | `js/app.js:636` | **DOM-based XSS** lors du rendu du message "aucun résultat" dans la recherche rapide | **HIGH** | `CONFIRMED` |
| **SEC-02** | `vercel.json` | **Absence de Content-Security-Policy (CSP)** stricte | **MEDIUM** | `CONFIRMED` |
| **SEC-03** | `vercel.json` | **En-têtes de sécurité HTTP manquants** (Referrer-Policy, Permissions-Policy, COOP, CORP, HSTS preload) | **LOW** | `CONFIRMED` |
| **SEC-04** | `js/app.js:526` | Utilisation de `innerHTML` non sécurisée pour les notifications Toast | **LOW** | `CONFIRMED` |
| **SEC-05** | `html/static` | Hardening des liens externes (`rel="noopener noreferrer"`) | **LOW** | `CONFIRMED` |

---

## 4. Definition of Ready (DoR) — Validation NOVA-LEAD

- [x] Architecture cartographiée et surface d'attaque comprise.
- [x] Périmètre et cibles validés (`anti-coranisme.novaskill.tech`).
- [x] Environnement de production confirmé sans risque de régression destructive.
- [x] Findings initiaux reproduits et qualifiés.

**Verdict DoR : READY FOR BUILD & REMEDIATION ✅**
