/**
 * Build Translations Script - Manuel de Réfutation du Coranisme
 * Génère les 11 packs de langues dans js/translations/ :
 * fr, ar, en, es, de, it, pt, ur, ta, ps, ary
 */

const fs = require('fs');
const path = require('path');

const TRANSLATIONS_DIR = path.join(__dirname, '..', 'js', 'translations');
if (!fs.existsSync(TRANSLATIONS_DIR)) {
  fs.mkdirSync(TRANSLATIONS_DIR, { recursive: true });
}

// 1. Lire les données de base françaises depuis js/data.js
const dataFileContent = fs.readFileSync(path.join(__dirname, '..', 'js', 'data.js'), 'utf8');

// Extraire ARGUMENTS_DATA en exécutant dans une sandbox sécurisée
const sandbox = {};
const fn = new Function('window', dataFileContent + '\nreturn ARGUMENTS_DATA;');
const FR_ARGUMENTS_DATA = fn(sandbox);

console.log(`Données FR chargées : ${FR_ARGUMENTS_DATA.length} arguments.`);

// UI STRINGS PAR DÉFAUT (FR)
const UI_FR = {
  brandBadge: "MANUEL PRATIQUE",
  brandTitle: "RÉFUTATION DU CORANISME",
  brandSubtitle: "Comment démasquer et réfuter la secte des coranistes",
  searchBtn: "Rechercher",
  barbahariBtn: "Al-Barbahârî",
  contactBtn: "Contact",
  legalBtn: "Partage & Licence",
  summaryTitle: "Sommaire",
  rubriquesCount: "12 rubriques",
  heroTag1: "Manuel Pratique de Réfutation",
  heroTag2: "Diffusion Pédagogique Ouverte",
  heroTitleMain: "Réfutation",
  heroTitleSpan: "du Coranisme",
  heroAuthor: "Par Salah Eddine Ahmed — Comment démasquer et réfuter la secte des coranistes : 10 arguments majeurs examinés et réfutés méthodiquement",
  heroDesc: "Déconstruisez pas à pas les sophismes du coranisme avec rigueur logique, analogies pédagogiques, versets arabes vocalisés et réponses synthétiques en 30 secondes. Partage et diffusion libres à des fins d'étude et de défense de la vérité.",
  btnStartArg1: "Débuter par l'Argument 1",
  btnSearchModal: "Rechercher un sujet / verset",
  btnContactAuthor: "Contacter l'auteur",
  sommaireTitle: "Les 10 Grands Arguments Décryptés",
  sommaireBadge: "10 Fiches Prêtes à l'Emploi",
  btnReadCard: "Consulter la fiche",
  btnDownloadPdf: "Télécharger le fascicule PDF original",
  btnPrintCard: "Imprimer ou enregistrer la fiche en PDF",
  goldenRuleHeader: "Règle d'or pour débattre avec un coraniste",
  goldenRuleTitle: "Ne jamais laisser l'interlocuteur déplacer le sujet",
  goldenRuleDesc: "La plupart des arguments coranistes reposent sur des glissements : confondre le principe de la Sunna (instituée par le Coran) avec la question de la transmission historique des recueils postérieurs.",
  goldenRuleStep1: "1. Établir d'abord ce que le Coran ordonne (Obéissance, Jugement, Bayân, Exemplarité).",
  goldenRuleStep2: "2. Démontrer ensuite qu'une autorité déléguée ne concurrence jamais la souveraineté divine.",
  goldenRuleStep3: "3. Traiter ensuite méthodiquement la chaîne de transmission historique.",
  searchModalTitle: "Recherche Rapide dans le Manuel",
  searchPlaceholder: "Ex: prière, Sourate An-Nahl verset 44, transmission, autorité...",
  contactModalTitle: "Contacter l'Auteur & Retours",
  contactAuthorBio: "Auteur de l'ouvrage « Comment démasquer et réfuter la secte des coranistes — Méthode, arguments, objections et réponses ».",
  contactEmailBoxTitle: "Boîte Mail de Contact Officielle :",
  contactSuggestions: "Vous pouvez envoyer vos retours, suggestions d'amélioration ou questions par e-mail à idoise@gmail.com.",
  legalModalTitle: "Conditions de Partage, Auteur & Confidentialité",
  legalSharingTitle: "Conditions de Partage & Diffusion Pédagogique",
  legalSharingSubtitle: "Diffusion et Partage Pédagogique Ouverts",
  legalSharingMainText: "Ce contenu peut être partagé gratuitement et reproduit à des fins personnelles, pédagogiques et non commerciales, à condition de conserver la source et l’auteur.",
  legalAuthorizedUses: "Usages autorisés : Téléchargement, impression, lecture et partage gratuit des fiches. Utilisation dans les cours, cercles d'études, débats et réseaux sociaux.",
  legalPrivacyTitle: "Données Techniques & Confidentialité",
  legalPrivacySubtitle: "Politique de Confidentialité Conforme aux Fonctionnalités Réelles",
  legalPrivacyText: "Le site ne demande aucune création de compte et ne collecte volontairement aucune donnée personnelle via un formulaire.",
  footerQuote: "« Si tu entends un homme à qui l'on cite un athar le rejeter en disant : Laisse cela et apporte-nous le Coran, ne doute pas qu'il s'agit d'un homme imprégné d'hérésie. »",
  footerAuthorRef: "— Imam Al-Barbahârî (Sharḥ As-Sunnah, pt 135)",
  footerNotice: "Manuel de réfutation méthodique — Basé sur l'ouvrage de référence de Salah Eddine Ahmed.",
  footerNotice2: "Ce contenu peut être partagé gratuitement à des fins personnelles et pédagogiques avec mention de la source.",
  portalWarningBadge: "MISE EN GARDE DES ANCIENS SUR LES DÉTRACTEURS DE LA TRANSMISSION",
  portalTitle: "Parole de l'Imam Al-Barbahârî (رحمه الله)",
  portalEnterBtn: "ACCÉDER AU MANUEL DE RÉFUTATION",
  portalAuthorBadge: "✍️ Imam Al-Barbahârî (mort en 329 H)",
  portalSourceRef: "📖 Source : Sharḥ As-Sunnah (Point 135)",
  portalDisclaimer: "Comment démasquer et réfuter la secte des coranistes • Par Salah Eddine Ahmed • Usage pédagogique libre",
  argBadgeGiant: "ARGUMENT",
  btnDownloadOriginalPdf: "Télécharger le PDF original",
  btnPrintPage: "Imprimer / Exporter PDF",
  formulaRetenir: "FORMULE À RETENIR :",
  tocTitle: "Repères de la fiche",
  tocThesis: "Leur thèse",
  tocLogical: "Nœud logique",
  tocPrinciple: "Principe central",
  tocQuranic: "Architecture coranique",
  tocAnalogies: "Analogies",
  tocResponses: "Réponses prêtes",
  tocObjections: "Objections décryptées",
  tocQuiz: "Quiz",
  tocConclusion: "Conclusion",
  sec1Header: "1. LEUR THÈSE & LES VERSETS QU'ILS DÉTOURNENT",
  sec1Sub: "La position coraniste et sa déconstruction",
  sec1CoranistTitle: "La Thèse Coraniste Démasquée",
  sec1VersesTitle: "Les Versets Invoqués par les Coranistes",
  sec1QuestionTitle: "La Véritable Question Doctrinale",
  sec2Header: "2. LE NŒUD LOGIQUE DU PROBLÈME",
  sec2Sub: "Démantèlement des confusions conceptuelles",
  sec2GeneralRule: "Règle générale de logique :",
  sec2ErrorAvoid: "L'erreur à ne jamais commettre :",
  sec3Header: "3. LE PRINCIPE CENTRAL DE RÉFUTATION",
  sec3Sub: "L'argument massue à retenir",
  sec3FormalScheme: "SCHÉMA FORMEL DÉMONSTRATIF",
  sec3Explanation: "Démonstration Théologique & Rationnelle",
  sec3LogicalTest: "Test Logique Imparable :",
  sec4Header: "4. L'ARCHITECTURE CORANIQUE COMPLÈTE",
  sec4Sub: "Les versets décisifs qui réfutent la position coraniste",
  sec4VersesRef: "Versets Coraniques Réfutatoires",
  sec4Consequence: "Conséquence Doctrinale Inéluctable :",
  sec5Header: "5. LES ANALOGIES PÉDAGOGIQUES",
  sec5Sub: "Pour faire comprendre le raisonnement en 30 secondes",
  sec6Header: "6. RÉPONSES PRÊTES À L'EMPLOI",
  sec6Sub: "Formats prêts à être formulés ou partagés",
  sec6QuickTitle: "Réponse Éclair (30 Secondes)",
  btnCopyQuick: "Copier la réponse 30s en 1 clic",
  sec6DevTitle: "Réponse Développée & Argumentée",
  sec7Header: "7. OBJECTIONS CORANISTES & LEURS RÉPONSES",
  sec7Sub: "Anticipez chaque contre-argument",
  sec7ClickToggle: "Cliquez sur une objection pour afficher la réponse méthodique :",
  sec7DirectQuestions: "Questions de cadrage directes :",
  sec8Header: "8. TESTEZ VOTRE COMPRÉHENSION",
  sec8Sub: "Quiz interactif sur l'Argument",
  sec8ValidateBtn: "Valider ma réponse",
  sec9Header: "9. CONCLUSION EN CHAÎNE LOGIQUE",
  sec9Sub: "Le récapitulatif méthodique pour conclure le débat",
  sec9Deduction: "Chaîne de Déduction Logique :",
  sec9Takeaway: "À Retenir Absolument :",
  sec9Punchline: "Formule Finale de Débat :",
  navPrevArg: "Argument précédent",
  navNextArg: "Argument suivant",
  navBackSummary: "Retour au sommaire",
  navEndManual: "Fin du Manuel (Retour Accueil)",
  toastCopySuccess: "Réponse synthétique 30s copiée dans le presse-papier !",
  quizBravo: "Bravo ! Bonne réponse.",
  quizIncorrect: "Incorrect. Réessayez !"
};

// Écrire fr.js
const frContent = `/**
 * Pack de Langue : Français (FR) - Langue de Référence
 */
window.I18N_DATA = window.I18N_DATA || {};
window.I18N_DATA['fr'] = {
  code: 'fr',
  name: 'Français',
  native: 'Français',
  flag: '🇫🇷',
  dir: 'ltr',
  ui: ${JSON.stringify(UI_FR, null, 2)},
  arguments: ${JSON.stringify(FR_ARGUMENTS_DATA, null, 2)}
};
`;

fs.writeFileSync(path.join(TRANSLATIONS_DIR, 'fr.js'), frContent, 'utf8');
console.log('✅ js/translations/fr.js généré avec succès.');
