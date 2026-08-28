/**
 * Standardisation et consolidation finale des 13 packs de langues
 * - Injection systématique de id, number, slug, pdfFile pour les 10 arguments
 * - Consolidation des 2 objections complètes pour l'argument 5
 * - Ajout des clés UI manquantes (navBarbahari, navContact, navLicense)
 */

const fs = require('fs');
const path = require('path');

const TRANSLATIONS_DIR = path.join(__dirname, '..', 'js', 'translations');

const META_ARGS = [
  { id: 1, number: "01", slug: "1-coran-complet", pdfFile: "Comment_demasquer_et_refuter_la_secte_des_coranistes_Argument_1.pdf" },
  { id: 2, number: "02", slug: "2-obeissance-messager", pdfFile: "Comment_demasquer_et_refuter_la_secte_des_coranistes_Argument_2.PDF" },
  { id: 3, number: "03", slug: "3-allah-seul-legifere", pdfFile: "Comment_demasquer_et_refuter_la_secte_des_coranistes_Argument_3.PDF" },
  { id: 4, number: "04", slug: "4-mission-messager-transmettre", pdfFile: "Comment_demasquer_et_refuter_la_secte_des_coranistes_Argument_4.pdf" },
  { id: 5, number: "05", slug: "5-preservation-coran-hadiths", pdfFile: "Comment_demasquer_et_refuter_la_secte_des_coranistes_Argument_5.pdf" },
  { id: 6, number: "06", slug: "6-compilation-tardive-hadiths", pdfFile: "Comment_demasquer_et_refuter_la_secte_des_coranistes_Argument_6.pdf" },
  { id: 7, number: "07", slug: "7-interdiction-ecrire-paroles", pdfFile: "Comment_demasquer_et_refuter_la_secte_des_coranistes_Argument_7.pdf" },
  { id: 8, number: "08", slug: "8-coran-condamne-hadiths", pdfFile: "Comment_demasquer_et_refuter_la_secte_des_coranistes_Argument_8.pdf" },
  { id: 9, number: "09", slug: "9-corrections-divines", pdfFile: "Comment_demasquer_et_refuter_la_secte_des_coranistes_Argument_9.pdf" },
  { id: 10, number: "10", slug: "10-priere-pratique-communautaire", pdfFile: "Comment_demasquer_et_refuter_la_secte_des_coranistes_Argument_10.pdf" }
];

const UI_EXTRA = {
  fr: { navBarbahari: "Al-Barbahârî", navContact: "Contact", navLicense: "Partage & Licence" },
  ar: { navBarbahari: "البربهاري", navContact: "اتصل بنا", navLicense: "المشاركة والترخيص" },
  ary: { navBarbahari: "البربهاري", navContact: "تواصل معنا", navLicense: "المشاركة والترخيص" },
  en: { navBarbahari: "Al-Barbahari", navContact: "Contact", navLicense: "Sharing & License" },
  es: { navBarbahari: "Al-Barbahârî", navContact: "Contacto", navLicense: "Difusión y Licencia" },
  de: { navBarbahari: "Al-Barbahari", navContact: "Kontakt", navLicense: "Teilen & Lizenz" },
  it: { navBarbahari: "Al-Barbahari", navContact: "Contatto", navLicense: "Condivisione e Licenza" },
  pt: { navBarbahari: "Al-Barbahari", navContact: "Contato", navLicense: "Compartilhamento & Licença" },
  ur: { navBarbahari: "البربہاری", navContact: "رابطہ", navLicense: "اشتراک اور لائسنس" },
  ta: { navBarbahari: "அல்-பர்பஹாரி", navContact: "தொடர்பு", navLicense: "பகிர்வு & உரிமம்" },
  ps: { navBarbahari: "البربهاري", navContact: "اړیکه", navLicense: "شریکول او جواز" },
  ku: { navBarbahari: "El-Berbeharî", navContact: "Têkilî", navLicense: "Parvekirin & Destûr" },
  ce: { navBarbahari: "Аль-Барбахари", navContact: "ЗӀе", navLicense: "ДӀасадаржор а, лицензи а" }
};

const LANGS = ['fr', 'ar', 'ary', 'en', 'es', 'de', 'it', 'pt', 'ur', 'ta', 'ps', 'ku', 'ce'];

LANGS.forEach(code => {
  const filePath = path.join(TRANSLATIONS_DIR, `${code}.js`);
  if (!fs.existsSync(filePath)) return;

  const raw = fs.readFileSync(filePath, 'utf8');
  const sandbox = {};
  new Function('window', 'sandbox', raw + `\nsandbox.DATA = window.I18N_DATA["${code}"];`)({}, sandbox);
  const pack = sandbox.DATA;
  if (!pack) return;

  // 1. Ajouter les clés UI supplémentaires
  const extra = UI_EXTRA[code] || UI_EXTRA.fr;
  pack.ui = { ...pack.ui, ...extra };

  // 2. Garantir les métadonnées pour chacun des 10 arguments
  if (Array.isArray(pack.arguments)) {
    pack.arguments.forEach((arg, idx) => {
      const meta = META_ARGS[idx];
      if (meta) {
        arg.id = meta.id;
        arg.number = meta.number;
        arg.slug = meta.slug;
        arg.pdfFile = meta.pdfFile;
      }

      // S'assurer de 2 objections pour l'argument 5
      if (idx === 4 && arg.objections && arg.objections.length === 1) {
        if (code === 'ar' || code === 'ary' || code === 'ur' || code === 'ps') {
          arg.objections.push({
            obj: "ألا يزعم البعض أن تدوين الحديث شابه بعض الوهم والخطأ البشري؟",
            ans: "علم مصطلح الحديث ونقد الرجال وضع أدق معايير التوثيق في التاريخ، فميز بين الصحيح والضعيف بدقة متناهية تحفظ الشريعة من أي تحريف."
          });
        } else if (code === 'es') {
          arg.objections.push({
            obj: "¿No hubo relatos débiles o discrepancias humanas en las transmisiones?",
            ans: "La ciencia del Isnad y la crítica biográfica de narradores (Ilm ar-Rijal) estableció el método histórico más riguroso jamás creado, clasificando cada grado de fiabilidad con exactitud matemática."
          });
        } else {
          arg.objections.push({
            obj: "Were there not weak narrations and human errors in transmission?",
            ans: "The science of Hadith terminology and biographical evaluation established the most rigorous historical verification system in human history, isolating errors and safeguarding divine guidance."
          });
        }
      }
    });
  }

  // 3. Sauvegarder
  const output = `/**
 * Pack de Langue : ${pack.name || code} (${code.toUpperCase()}) - ${pack.native || code}
 * Traduction Complète et Exhaustive (UI, Préface, Intro, 10 Arguments, Modales)
 */
window.I18N_DATA = window.I18N_DATA || {};
window.I18N_DATA['${code}'] = ${JSON.stringify(pack, null, 2)};
`;

  fs.writeFileSync(filePath, output, 'utf8');
  console.log(`✅ ${code}.js standardisé (id, number, slug, pdfFile, objections, UI OK).`);
});

console.log('🎉 Standardisation des 13 langues terminée.');
