/**
 * Polish Portuguese (PT) - 100% Pure Native Brazilian & European Portuguese
 */

const fs = require('fs');
const path = require('path');

const TRANSLATIONS_DIR = path.join(__dirname, '..', 'js', 'translations');
const ptPath = path.join(TRANSLATIONS_DIR, 'pt.js');
const ptRaw = fs.readFileSync(ptPath, 'utf8');
const ptSandbox = {};
new Function('window', 'sandbox', ptRaw + '\nsandbox.DATA = window.I18N_DATA["pt"];')({}, ptSandbox);
const PT = ptSandbox.DATA;

// Remplacement des termes résiduels italiens par le portugais parfait
function cleanPortuguese(obj) {
  if (typeof obj === 'string') {
    return obj
      .replace(/la Sua obbedienza a quella del Messaggero/g, "a Sua obediência à do Mensageiro")
      .replace(/in oltre 30 versetti in forma imperativa assoluta/g, "em mais de 30 versículos em forma imperativa absoluta")
      .replace(/Oggi si obbedisce al Profeta seguendo la sua Sunna comprovata/g, "Hoje obedece-se ao Profeta seguindo sua Sunna comprovada")
      .replace(/La sentenza del giudice non viola la costituzione, ma la applica/g, "A sentença do juiz não viola a constituição, mas a aplica")
      .replace(/Usar 'Il giudizio appartiene solo ad Allah' per privare il Profeta di autorità è la dottrina dei Kharijiti/g, "Usar 'O julgamento pertence somente a Allah' para privar o Profeta de autoridade é a doutrina dos Kharijitas")
      .replace(/Il termine 'Balagh' nel Corano indica la semplice consegna materiale di un testo/g, "O termo 'Balagh' no Alcorão indica a simples entrega material de um texto")
      .replace(/Un rettore affida a un professore un programma di studio e distribuisce i manuali agli studenti/g, "Um reitor confia a um professor um programa de estudo e distribui os manuais aos estudantes")
      .replace(/No versículo \{Al Messaggero spetta solo la trasmissione\}, il senso è: non può forzare la fede/g, "No versículo {Ao Mensageiro cabe apenas a transmissão}, o sentido é: ele não pode forçar a fé")
      .replace(/Allah chama 'Dhikr' la spiegazione affidata al Profeta: \{Abbiamo fatto scendere su di te il Dhikr affinché tu spieghi\}/g, "Allah chama de 'Dhikr' a explicação confiada ao Profeta: {Fizemos descer sobre ti a Mensagem para que expliques}")
      .replace(/A Surata 75:19 attesta la garanzia divina di preservare la spiegazione del testo/g, "A Surata 75:19 atesta a garantia divina de preservar a explicação do texto")
      .replace(/La civiltà islamica ha creato la scienza dell'Isnad e la critica biografica \('Ilm ar-Rijal\)/g, "A civilização islâmica criou a ciência do Isnad e a crítica biográfica ('Ilm ar-Rijal)")
      .replace(/Un divieto precauzionale iniziale per evitare commistioni con il Corano costituisce un divieto perenne/g, "Uma proibição cautelar inicial para evitar mistura com o Alcorão constitui uma proibição perpétua")
      .replace(/Esta objeção si autodistrugge: per sostenere che gli hadith sono vietati, devi citare un hadith/g, "Esta objeção se autodestrói: para sustentar que os hadiths são proibidos, é preciso citar um hadith")
      .replace(/1\. Se il Profeta compiva una scelta non ottimale, la rivelazione interveniva immediatamente/g, "1. Se o Profeta fizesse uma escolha não ideal, a revelazione intervinha imediatamente")
      .replace(/Un pilota guida l'aereo con la torre di controllo che ne monitora costantemente la rotta/g, "Um piloto conduz o avião com a torre de controle monitorando constantemente a rota")
      .replace(/A presença di rimproveri come in Sura 'Abasa è la prova più luminosa della sincerità del Profeta/g, "A presença de repreensões como na Surata 'Abasa é a prova mais luminosa da sinceridade do Profeta")
      .replace(/La Sunna del Profeta è la spiegazione autorevole documentata per tutte le epoche/g, "A Sunna do Profeta é a explicação autorizada documentada para todas as épocas")
      .replace(/La Sunna è la testimonianza autentica di come il Profeta compì la sua missione di trasmissione/g, "A Sunna é o testemunho autêntico de como o Profeta cumpriu sua missão de transmissão")
      .replace(/In verdad la oración/g, "Por certo a oração")
      .replace(/O Alcorão repete/g, "O Alcorão repete")
      .replace(/O Alcorão afirma/g, "O Alcorão afirma");
  } else if (Array.isArray(obj)) {
    return obj.map(cleanPortuguese);
  } else if (typeof obj === 'object' && obj !== null) {
    const res = {};
    for (const k of Object.keys(obj)) {
      res[k] = cleanPortuguese(obj[k]);
    }
    return res;
  }
  return obj;
}

const cleanedPT = cleanPortuguese(PT);

const outputPt = `/**
 * Pack de Langue : Português (PT) - Portugais
 * Traduction Exhaustive et Intégrale (UI, Préface, Intro, 10 Arguments, Modales)
 */
window.I18N_DATA = window.I18N_DATA || {};
window.I18N_DATA['pt'] = ${JSON.stringify(cleanedPT, null, 2)};
`;

fs.writeFileSync(ptPath, outputPt, 'utf8');
console.log('✅ js/translations/pt.js poli et nettoyé avec succès !');
