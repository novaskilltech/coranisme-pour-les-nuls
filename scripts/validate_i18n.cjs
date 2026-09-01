/* Release gate: checks the runtime i18n contract without suppressing defects. */
const fs = require('fs');
const path = require('path');
const localeConfigSandbox = {};
new Function('window', 'sandbox', `${fs.readFileSync(path.join(__dirname, '..', 'js', 'locale-config.js'), 'utf8')}\nsandbox.policy = window.I18N_LOCALE_POLICY;`)({}, localeConfigSandbox);
const localePolicy = localeConfigSandbox.policy;
const enabledLocales = localePolicy.enabledLocales;
const pendingLocales = localePolicy.pendingLocales;
const locales = [...enabledLocales, ...pendingLocales];
const fullAudit = process.argv.includes('--all');
const translationDir = path.join(__dirname, '..', 'js', 'translations');
const runtimeUiKeys = [...new Set([...fs.readFileSync(path.join(__dirname, '..', 'js', 'app.js'), 'utf8'), ...fs.readFileSync(path.join(__dirname, '..', 'js', 'i18n.js'), 'utf8')].join('').matchAll(/ui\.([A-Za-z0-9_]+)/g))].map(match => match[1]);
const knownFrench = [/Obéissez à Allah/i, /Afin que tu exposes/i, /Vous avez certes/i, /Comment démasquer et réfuter/i, /Tesis de los coranistes/i];
const knownEnglish = [/\bOpen Educational Resource\b/i, /\bReady-to-Use\b/i, /\bFallacies Detected\b/i, /\bTranslation of the meaning\b/i];
const aliases = {
  topbarBarbahari: ['barbahariBtn', 'footerBtnPortal'], topbarContact: ['contactBtn', 'footerBtnContact'],
  topbarLegal: ['legalBtn', 'footerBtnLegal'], sidebarTitle: ['summaryTitle'], sidebarCount: ['rubriquesCount'],
  legalSharingP1: ['legalSharingMainText'], sidebarHome: ['btnSidebarHome'], sidebarContact: ['btnSidebarContact'],
  shareCopyLink: ['btnCopy'], metaDescription: ['heroDesc']
};
let failed = false;
let frenchLeakTotal = 0;
let englishLeakTotal = 0;
let pendingFrenchLeakTotal = 0;
let pendingEnglishLeakTotal = 0;
let emptyTotal = 0;
const frenchSandbox = {};
new Function('window', 'sandbox', `${fs.readFileSync(path.join(translationDir, 'fr.js'), 'utf8')}\nsandbox.pack = window.I18N_DATA.fr;`)({}, frenchSandbox);
const windowlessFrench = frenchSandbox.pack;

for (const code of locales) {
  const isPending = pendingLocales.includes(code);
  const sandbox = {};
  const file = path.join(translationDir, `${code}.js`);
  try {
    new Function('window', 'sandbox', `${fs.readFileSync(file, 'utf8')}\nsandbox.pack = window.I18N_DATA[${JSON.stringify(code)}];`)({}, sandbox);
  } catch (error) {
    console.error(`[${code}] invalid JavaScript: ${error.message}`);
    if (!isPending || fullAudit) failed = true;
    continue;
  }
  const pack = sandbox.pack;
  const missingUi = runtimeUiKeys.filter(key => pack.ui?.[key] === undefined || pack.ui[key] === '').filter(key => !(aliases[key] || []).some(alias => pack.ui?.[alias]));
  const missingContent = !pack.preface || !pack.intro || !pack.fallaciesToolbox || !Array.isArray(pack.arguments) || pack.arguments.length !== 10;
  // Keep the path, rather than the string value, as the identity of a leak.
  // The same French rendering can legitimately occur in more than one verse.
  const leaks = new Set();
  const englishLeaks = [];
  if (code !== 'fr') {
    const walk = (value, currentPath = '') => {
      if (typeof value === 'string' && knownFrench.some(pattern => pattern.test(value))) leaks.add(currentPath);
      if (typeof value === 'string' && code !== 'en' && knownEnglish.some(pattern => pattern.test(value))) englishLeaks.push(value);
      else if (Array.isArray(value)) value.forEach((child, index) => walk(child, `${currentPath}[${index}]`));
      else if (value && typeof value === 'object') Object.entries(value).forEach(([key, child]) => { if (key !== 'ar' && key !== 'fr') walk(child, currentPath ? `${currentPath}.${key}` : key); });
    };
    walk(pack);
    // A verse translation identical to the French reference is an explicit
    // leak. Arabic source text is deliberately excluded from this test.
    for (const [argumentIndex, argument] of (pack.arguments || []).entries()) {
      for (const section of ['theirArgument', 'quranicArchitecture']) {
        for (const [verseIndex, verse] of (argument[section]?.verses || []).entries()) {
          const frenchVerse = (windowlessFrench.arguments[argumentIndex]?.[section]?.verses || [])[verseIndex];
          if (verse.translation && verse.translation === frenchVerse?.translation) {
            leaks.add(`arguments[${argumentIndex}].${section}.verses[${verseIndex}].translation`);
          }
          if (verse.translation === '') emptyTotal++;
        }
      }
    }
  }
  const status = !missingUi.length && !missingContent && !leaks.size && !englishLeaks.length;
  if (isPending) {
    pendingFrenchLeakTotal += leaks.size;
    pendingEnglishLeakTotal += englishLeaks.length;
  } else {
    frenchLeakTotal += leaks.size;
    englishLeakTotal += englishLeaks.length;
  }
  if (isPending) {
    console.log(`PENDING ${code}: native validation required; UI missing=${missingUi.length}; content=${missingContent ? 'missing' : 'ok'}; French leaks=${leaks.size}; English leaks=${englishLeaks.length}`);
    if (fullAudit) failed = true;
  } else {
    console.log(`${status ? 'PASS' : 'FAIL'} ${code}: UI missing=${missingUi.length}; content=${missingContent ? 'missing' : 'ok'}; French leaks=${leaks.size}; English leaks=${englishLeaks.length}`);
    if (!status) failed = true;
  }
}
console.log(`PRODUCTION GATE: enabled=${enabledLocales.length}; French leaks=${frenchLeakTotal}; English leaks=${englishLeakTotal}; empty translations=${emptyTotal}`);
console.log(`PENDING AUDIT: locales=${pendingLocales.join(',')}; French leaks=${pendingFrenchLeakTotal}; English leaks=${pendingEnglishLeakTotal}`);
if (fullAudit) console.log('FULL AUDIT: pending locales remain intentionally non-releasable until native validation.');
if (failed) process.exitCode = 1;
