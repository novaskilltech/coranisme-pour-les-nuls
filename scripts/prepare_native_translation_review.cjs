/*
 * Generates human-review packages for untranslated KU and CE verse entries.
 * This script is intentionally read-only with respect to i18n production packs.
 */
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const packsDir = path.join(root, 'js', 'translations');
const reviewDir = path.join(__dirname, 'review');
const locales = ['ku', 'ce'];

function loadPack(code) {
  const sandbox = {};
  const file = path.join(packsDir, `${code}.js`);
  new Function('window', 'sandbox', `${fs.readFileSync(file, 'utf8')}\nsandbox.pack = window.I18N_DATA[${JSON.stringify(code)}];`)({}, sandbox);
  return sandbox.pack;
}

function escapeCsv(value) {
  const text = value === undefined || value === null ? '' : String(value);
  return `"${text.replace(/"/g, '""')}"`;
}

function splitReference(ref) {
  const match = String(ref).match(/^(.*?),\s*(?:ayeta|ayetas|аят|аятs)\s*([0-9-]+)$/iu);
  return { surahName: match ? match[1] : String(ref), verseNumber: match ? match[2] : '' };
}

function findEnglishByArabic(pack) {
  const translations = new Map();
  for (const argument of pack.arguments || []) {
    for (const sectionId of ['theirArgument', 'quranicArchitecture']) {
      for (const verse of argument[sectionId]?.verses || []) {
        if (verse.ar && verse.translation) translations.set(verse.ar, verse.translation);
      }
    }
  }
  return translations;
}

function buildReview(locale, pack, frenchPack, englishByArabic) {
  const entries = [];
  for (const [argumentIndex, argument] of (pack.arguments || []).entries()) {
    for (const sectionId of ['theirArgument', 'quranicArchitecture']) {
      for (const [verseIndex, verse] of (argument[sectionId]?.verses || []).entries()) {
        const frenchVerse = frenchPack.arguments[argumentIndex]?.[sectionId]?.verses?.[verseIndex];
        if (!frenchVerse || !verse.translation || verse.translation !== frenchVerse.translation) continue;
        const reference = splitReference(verse.ref);
        const key = `arguments[${argumentIndex}].${sectionId}.verses[${verseIndex}].translation`;
        entries.push({
          id: `${locale}:argument-${argument.id}:${sectionId}:verse-${verseIndex + 1}`,
          locale,
          argumentId: argument.id,
          sectionId,
          key,
          surahName: reference.surahName,
          verseNumber: reference.verseNumber,
          arabic: verse.ar,
          sourceFrench: frenchVerse.translation,
          sourceEnglish: englishByArabic.get(verse.ar) || '',
          currentTarget: verse.translation,
          targetTranslation: '',
          status: 'needs_native_review',
          notes: 'Traduction française détectée dans le pack actif. Traduction native et relecture religieuse requises avant import.'
        });
      }
    }
  }
  const ids = new Set(entries.map(entry => entry.id));
  if (ids.size !== entries.length) throw new Error(`${locale}: duplicate review IDs detected`);
  return entries;
}

function loadExistingReviewEntries(file) {
  if (!fs.existsSync(file)) return new Map();
  const existing = JSON.parse(fs.readFileSync(file, 'utf8'));
  if (!Array.isArray(existing)) throw new Error(`${file}: review JSON must contain an array`);
  return new Map(existing.map(entry => [entry.id, entry]));
}

function preserveHumanReviewFields(entries, existingEntries) {
  for (const entry of entries) {
    const previous = existingEntries.get(entry.id);
    // Preserve a human decision only when the source identity is unchanged.
    if (!previous || previous.key !== entry.key || previous.arabic !== entry.arabic || previous.sourceFrench !== entry.sourceFrench) continue;
    entry.targetTranslation = previous.targetTranslation || '';
    entry.status = previous.status || 'needs_native_review';
    entry.notes = previous.notes || entry.notes;
  }
}

function flatten(value, base = '', result = new Map()) {
  if (Array.isArray(value)) value.forEach((child, index) => flatten(child, `${base}[${index}]`, result));
  else if (value && typeof value === 'object') Object.entries(value).forEach(([key, child]) => flatten(child, base ? `${base}.${key}` : key, result));
  else result.set(base, { type: value === null ? 'null' : typeof value });
  return result;
}

function collectArrays(value, base = '', result = new Map()) {
  if (Array.isArray(value)) {
    result.set(base, value.length);
    value.forEach((child, index) => collectArrays(child, `${base}[${index}]`, result));
  } else if (value && typeof value === 'object') {
    Object.entries(value).forEach(([key, child]) => collectArrays(child, base ? `${base}.${key}` : key, result));
  }
  return result;
}

function structuralReport(reference, candidate) {
  const refLeaves = flatten(reference);
  const candidateLeaves = flatten(candidate);
  const refArrays = collectArrays(reference);
  const candidateArrays = collectArrays(candidate);
  const missingPaths = [...refLeaves.keys()].filter(key => !candidateLeaves.has(key) && !key.endsWith('.fr'));
  const extraPaths = [...candidateLeaves.keys()].filter(key => !refLeaves.has(key));
  const typeMismatches = [...refLeaves.keys()].filter(key => candidateLeaves.has(key) && refLeaves.get(key).type !== candidateLeaves.get(key).type);
  const arrayLengthDifferences = [...refArrays.keys()]
    .filter(key => candidateArrays.has(key) && refArrays.get(key) !== candidateArrays.get(key))
    .map(key => ({ path: key, referenceLength: refArrays.get(key), localeLength: candidateArrays.get(key) }));
  const referenceArgumentIds = new Set((reference.arguments || []).map(argument => argument.id));
  const localeArgumentIds = new Set((candidate.arguments || []).map(argument => argument.id));
  const referenceFallacyIds = new Set((reference.fallaciesToolbox?.items || []).map(item => item.id));
  const localeFallacyIds = new Set((candidate.fallaciesToolbox?.items || []).map(item => item.id));
  return {
    missingIds: {
      argumentIds: [...referenceArgumentIds].filter(id => !localeArgumentIds.has(id)),
      fallacyIds: [...referenceFallacyIds].filter(id => !localeFallacyIds.has(id))
    },
    missingSections: [...new Set(missingPaths.map(key => key.split('.')[0]))],
    missingPaths,
    extraPaths,
    arrayLengthDifferences,
    typeMismatches
  };
}

fs.mkdirSync(reviewDir, { recursive: true });
const frenchPack = loadPack('fr');
const englishByArabic = findEnglishByArabic(loadPack('en'));
const summary = {};

for (const locale of locales) {
  const jsonFile = path.join(reviewDir, `${locale}_translation_review.json`);
  const entries = buildReview(locale, loadPack(locale), frenchPack, englishByArabic);
  preserveHumanReviewFields(entries, loadExistingReviewEntries(jsonFile));
  const csvFile = path.join(reviewDir, `${locale}_translation_review.csv`);
  fs.writeFileSync(jsonFile, JSON.stringify(entries, null, 2) + '\n', 'utf8');
  const header = ['ID', 'Langue', 'Argument', 'Section', 'Clé', 'Sourate', 'Verset', 'Arabe', 'Français', 'Anglais', 'Traduction cible', 'Statut', 'Notes'];
  const rows = entries.map(entry => [entry.id, entry.locale, entry.argumentId, entry.sectionId, entry.key, entry.surahName, entry.verseNumber, entry.arabic, entry.sourceFrench, entry.sourceEnglish, entry.targetTranslation, entry.status, entry.notes].map(escapeCsv).join(','));
  fs.writeFileSync(csvFile, `${header.join(',')}\n${rows.join('\n')}\n`, 'utf8');
  summary[locale] = {
    totalEntries: entries.length,
    surahs: [...new Set(entries.map(entry => entry.surahName))],
    arguments: [...new Set(entries.map(entry => entry.argumentId))]
  };
}

const allLocales = ['ar', 'ary', 'en', 'es', 'de', 'it', 'pt', 'ur', 'ta', 'ps', 'ku', 'ce'];
const gaps = Object.fromEntries(allLocales.map(locale => [locale, structuralReport(frenchPack, loadPack(locale))]));
fs.writeFileSync(path.join(reviewDir, 'editorial_contract_gaps.json'), JSON.stringify(gaps, null, 2) + '\n', 'utf8');
fs.writeFileSync(path.join(reviewDir, 'native_translation_review_summary.json'), JSON.stringify(summary, null, 2) + '\n', 'utf8');
console.log(JSON.stringify(summary, null, 2));
