/**
 * COMPILATEUR ET GÉNÉRATEUR FINAL DE ES.JS (100% ESPAGNOL PUR)
 */

const fs = require('fs');
const path = require('path');

const esBase = require('./generate_es_base.cjs');
const esArgs1to4 = require('./generate_es_args_1_4.cjs');
const esArgs5to10 = require('./generate_es_args_5_10.cjs');

const fullEsData = {
  ...esBase,
  arguments: [...esArgs1to4, ...esArgs5to10]
};

const outputFilePath = path.join(__dirname, '..', '..', 'js', 'translations', 'es.js');

const fileHeader = `/**
 * TRADUCTION ESPAGNOLE INTÉGRALE ET 100% NATIVE (ESPAÑOL)
 * Manuel de réfutation méthodique du coranisme — Par Salah Eddine Ahmed (Abou Soulaymane)
 * Conforme à la charte doctrinale et sans aucun reliquat de langue étrangère.
 */

window.I18N_DATA = window.I18N_DATA || {};
window.I18N_DATA["es"] = ${JSON.stringify(fullEsData, null, 2)};
`;

fs.writeFileSync(outputFilePath, fileHeader, 'utf8');
console.log('✅ js/translations/es.js a été généré avec succès en 100% Espagnol natif !');
