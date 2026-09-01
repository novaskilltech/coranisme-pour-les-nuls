/*
 * Single source of truth for public locale availability.
 * KU and CE stay in the repository but are intentionally hidden from visitors
 * until native reviewers validate the 35 pending Qur'an translations per locale.
 */
const I18N_LOCALE_POLICY = Object.freeze({
  defaultLocale: 'fr',
  enabledLocales: Object.freeze(['fr', 'ar', 'ary', 'en', 'es', 'de', 'it', 'pt', 'ur', 'ta', 'ps']),
  pendingLocales: Object.freeze(['ku', 'ce'])
});

if (typeof window !== 'undefined') window.I18N_LOCALE_POLICY = I18N_LOCALE_POLICY;
