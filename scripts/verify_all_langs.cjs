const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '..', 'js', 'translations');
const codes = ['fr', 'ar', 'ary', 'en', 'es', 'de', 'it', 'pt', 'ur', 'ta', 'ps', 'ku', 'ce'];

codes.forEach(c => {
  const p = path.join(dir, c + '.js');
  const raw = fs.readFileSync(p, 'utf8');
  const sb = {};
  new Function('window', 'sandbox', raw + `\nsandbox.DATA = window.I18N_DATA["${c}"];`)({}, sb);
  const data = sb.DATA;
  
  const argsCount = data.arguments ? data.arguments.length : 0;
  const uiKeys = data.ui ? Object.keys(data.ui).length : 0;
  const hasPreface = !!data.preface;
  const hasIntro = !!data.intro;
  
  // Vérifier qu'aucun argument n'a de champ manquant
  let completeArgs = 0;
  if (data.arguments) {
    data.arguments.forEach(arg => {
      if (arg.theirArgument && arg.logicalNode && arg.centralPrinciple && arg.analogies && arg.readyResponses && arg.objections && arg.conclusion) {
        completeArgs++;
      }
    });
  }

  console.log(`[${c.toUpperCase()}] ${data.name || c} : ${argsCount}/10 arguments complets (${completeArgs} valides), ${uiKeys} clés UI, Préface: ${hasPreface ? 'OK' : 'KO'}, Intro: ${hasIntro ? 'OK' : 'KO'}`);
});
