# Journal des modifications — i18n, KU/CE et gate de production

**Date :** 29 août 2026  
**Périmètre :** toutes les modifications réalisées dans cette séquence de travail sur l'internationalisation, les revues de versets kurmanji/tchétchène et la publication contrôlée des langues.

> Les modifications préexistantes du répertoire de travail qui ne relèvent pas de cette séquence ne sont pas décrites ici.

## 1. Audit et contrat i18n

- Inventaire des clés d'interface et du contenu des packs de traduction.
- Ajout d'outils d'audit et de réparation contrôlée :
  - `scripts/audit_i18n_inventory.cjs`
  - `scripts/repair_i18n_contract.cjs`
  - `scripts/validate_i18n.cjs`
  - `scripts/i18n-audit-report.json`
- Le validateur vérifie notamment les clés UI réellement consommées, la présence des contenus attendus, les fuites françaises et anglaises, et les traductions de versets identiques à la référence française.
- Les audits de rendu et de complétude ont été adaptés pour lire la politique centrale des locales et ne tester en production que les langues publiées :
  - `scripts/test_dom_i18n.cjs`
  - `scripts/validate_100_percent_i18n.cjs`

## 2. Préparation des revues de versets KU et CE

- Création de paquets de revue distincts des packs de production :
  - `scripts/review/ku_translation_review.json` et `.csv`
  - `scripts/review/ce_translation_review.json` et `.csv`
  - `scripts/review/native_translation_review_summary.json`
- Chaque entrée de revue contient l'identifiant, la clé, la référence, le texte arabe inchangé, les sources française/anglaise, la traduction cible, le statut et les notes.
- Les 35 traductions de versets kurmanji et les 35 traductions de versets tchétchènes ont été renseignées dans `targetTranslation` pour revue humaine.
- Les **70 statuts restent `needs_native_review`** : aucune entrée n'a été déclarée validée sans relecture native et religieuse.
- Le générateur `scripts/prepare_native_translation_review.cjs` préserve désormais une traduction et un statut de revue déjà saisis lorsque l'ID, la clé, l'arabe et la source française n'ont pas changé.
- L'importeur `scripts/import_native_translations.cjs` n'importe que les entrées explicitement `validated`, vérifie les clés, le texte arabe et la cohérence de la source, et effectue une sauvegarde avant tout import. Il n'a importé aucune traduction pendant cette séquence.

## 3. Mise en attente de KU et CE en production

- Ajout de `js/locale-config.js`, source de vérité unique :
  - `enabledLocales` : `fr`, `ar`, `ary`, `en`, `es`, `de`, `it`, `pt`, `ur`, `ta`, `ps`.
  - `pendingLocales` : `ku`, `ce`.
  - locale par défaut : `fr`.
- `index.html` charge cette configuration avant le moteur i18n.
- Les cartes KU et CE ont été retirées de la passerelle de langues. Il reste exactement 11 cartes publiques.
- `js/i18n.js` construit le sélecteur uniquement avec les 11 langues activées.
- Une valeur KU/CE provenant du stockage local, d'une demande programmatique ou d'un autre état obsolète est résolue vers la locale publique par défaut ; aucun pack KU/CE en attente ne peut alors être chargé ni affiché.
- Le moteur i18n protège aussi les changements asynchrones de langue contre l'application tardive d'une requête devenue obsolète.
- Les packs `js/translations/ku.js` et `js/translations/ce.js` ainsi que les scripts et paquets de revue sont conservés : aucune donnée KU/CE n'a été supprimée.

## 4. Ajustements des packs et du rendu i18n

- Les corrections de contrat i18n et de contenu effectuées durant l'audit ont concerné les packs de traduction nécessaires à la conformité du rendu, notamment `de`, `es`, `it`, `pt`, `ku` et `ce`.
- Le texte arabe, les IDs, les clés, les références de sourates et la structure des données de versets n'ont pas été modifiés par le travail de revue.
- `js/i18n.js` met également à jour les métadonnées localisées (titre, descriptions, Open Graph, Twitter et JSON-LD) après le chargement d'une langue publique.

## 5. Validation effectuée

Commandes exécutées avec succès :

```powershell
node scripts/validate_100_percent_i18n.cjs
node scripts/test_dom_i18n.cjs
node scripts/validate_i18n.cjs
```

Résultats :

- 11 langues publiques : toutes conformes, sans fuite française ou anglaise détectée.
- Tests de rendu : **55 réussis, 0 échec**.
- Gate de production : `enabled=11`, `French leaks=0`, `English leaks=0`, `empty translations=0`.
- KU : 35 fuites françaises de versets identifiées et correctement marquées en attente de validation native.
- CE : 35 fuites françaises de versets identifiées et correctement marquées en attente de validation native.
- L'exécution `node scripts/validate_i18n.cjs --all` retourne volontairement un échec de gate complet tant que KU/CE sont en attente ; elle ne les présente jamais comme validées.
- Vérification statique : 11 cartes de passerelle, sans carte KU/CE ; packs et fichiers de revue KU/CE présents.

## 6. Réactivation future de KU ou CE

1. Faire relire chaque entrée par un locuteur natif compétent sur le plan religieux.
2. Passer uniquement les entrées approuvées à `status: "validated"`.
3. Exécuter `node scripts/import_native_translations.cjs`.
4. Exécuter les validateurs stricts, dont `node scripts/validate_i18n.cjs --all`.
5. Déplacer le code concerné de `pendingLocales` vers `enabledLocales` dans `js/locale-config.js`.
6. Relancer les tests de rendu et la validation de production.

## 7. Décision de release

**GO pour les 11 langues publiques.**  
**KU et CE : non publiées, en attente de revue native (35 entrées chacune).**
