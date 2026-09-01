/* Imports only explicitly validated KU/CE human translations, atomically. */
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const packsDir = path.join(root, 'js', 'translations');
const reviewDir = path.join(__dirname, 'review');
const locales = ['ku', 'ce'];

function loadPackWithRaw(code) {
  const file = path.join(packsDir, `${code}.js`);
  const raw = fs.readFileSync(file, 'utf8');
  const sandbox = {};
  new Function('window', 'sandbox', `${raw}\nsandbox.pack = window.I18N_DATA[${JSON.stringify(code)}];`)({}, sandbox);
  const assignment = `window.I18N_DATA[${JSON.stringify(code)}] = `;
  const assignmentOffset = raw.indexOf(assignment);
  if (assignmentOffset < 0) throw new Error(`${code}: unsupported pack assignment`);
  return { code, file, raw, prefix: raw.slice(0, assignmentOffset + assignment.length), pack: sandbox.pack };
}

function serializePack(item) {
  return `${item.prefix}${JSON.stringify(item.pack, null, 2)};\n`;
}

function parseKey(key) {
  const match = String(key).match(/^arguments\[(\d+)\]\.(theirArgument|quranicArchitecture)\.verses\[(\d+)\]\.translation$/);
  if (!match) throw new Error(`Unsupported review key: ${key}`);
  return { argumentIndex: Number(match[1]), sectionId: match[2], verseIndex: Number(match[3]) };
}

function loadReviews(code) {
  const file = path.join(reviewDir, `${code}_translation_review.json`);
  const entries = JSON.parse(fs.readFileSync(file, 'utf8'));
  if (!Array.isArray(entries)) throw new Error(`${code}: review JSON must contain an array`);
  const ids = new Set();
  entries.forEach(entry => {
    if (entry.locale !== code || !entry.id || ids.has(entry.id)) throw new Error(`${code}: invalid or duplicate review ID`);
    ids.add(entry.id);
  });
  return entries;
}

const staged = locales.map(loadPackWithRaw);
const changes = [];

try {
  // The packs are generated JSON assignments. Refuse to rewrite if a no-op
  // serialization would change anything: imports must be content-local.
  for (const item of staged) {
    if (serializePack(item) !== item.raw) throw new Error(`${item.code}: pack format is not safe for a content-local import`);
  }
  for (const item of staged) {
    for (const entry of loadReviews(item.code)) {
      if (entry.status !== 'validated') continue;
      if (typeof entry.targetTranslation !== 'string' || !entry.targetTranslation.trim()) throw new Error(`${entry.id}: validated entry has no targetTranslation`);
      if (entry.targetTranslation === entry.sourceFrench) throw new Error(`${entry.id}: targetTranslation must not equal sourceFrench`);
      const location = parseKey(entry.key);
      const verse = item.pack.arguments?.[location.argumentIndex]?.[location.sectionId]?.verses?.[location.verseIndex];
      if (!verse) throw new Error(`${entry.id}: translation key does not exist in ${item.code}.js`);
      if (verse.ar !== entry.arabic) throw new Error(`${entry.id}: Arabic source changed; review file is stale`);
      if (verse.translation === entry.targetTranslation) continue; // idempotent no-op
      if (verse.translation !== entry.currentTarget) throw new Error(`${entry.id}: current target text changed; regenerate and review the package`);
      verse.translation = entry.targetTranslation.trim();
      changes.push({ item, entry });
    }
  }
} catch (error) {
  console.error(`IMPORT ABORTED: ${error.message}`);
  process.exitCode = 1;
  return;
}

if (!changes.length) {
  console.log('No validated translation to import. No files were changed.');
  return;
}

const backupDir = path.join(reviewDir, 'backups');
fs.mkdirSync(backupDir, { recursive: true });
const stamp = new Date().toISOString().replace(/[:.]/g, '-');
for (const item of staged) {
  if (!changes.some(change => change.item === item)) continue;
  fs.writeFileSync(path.join(backupDir, `${item.code}-before-native-import-${stamp}.js`), item.raw, 'utf8');
}
for (const item of staged) {
  if (!changes.some(change => change.item === item)) continue;
  fs.writeFileSync(item.file, serializePack(item), 'utf8');
}
console.log(`Imported ${changes.length} validated native translation(s). Backups: ${backupDir}`);
