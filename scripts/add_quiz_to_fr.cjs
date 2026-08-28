/**
 * Ajout des quiz interactifs aux 10 arguments de fr.js pour harmonisation complète
 */

const fs = require('fs');
const path = require('path');

const frPath = path.join(__dirname, '..', 'js', 'translations', 'fr.js');
const frRaw = fs.readFileSync(frPath, 'utf8');
const frSandbox = {};
new Function('window', 'sandbox', frRaw + '\nsandbox.DATA = window.I18N_DATA["fr"];')({}, frSandbox);
const FR = frSandbox.DATA;

const QUIZZES_FR = [
  // Arg 1
  [
    {
      q: "Que signifie la complétude du Coran dans le cadre législatif islamique ?",
      options: [
        "Qu'il détaille chaque modalité pratique sans besoin d'explication prophétique.",
        "Qu'il pose les fondements et institue l'obligation d'obéir aux clarifications du Prophète ﷺ.",
        "Qu'il rend la Sunna obsolète.",
        "Qu'il est un simple livre d'histoire."
      ],
      answer: 1,
      explanation: "La complétude du Coran inclut l'ordre formel de suivre l'explication et les jugements du Prophète ﷺ."
    }
  ],
  // Arg 2
  [
    {
      q: "Comment s'accomplit l'obéissance au Messager ﷺ après sa mort ?",
      options: [
        "En considérant les versets d'obéissance comme historiquement caducs.",
        "En se conformant à sa Sunna authentique et à ses enseignements préservés.",
        "En interprétant le Coran selon ses opinions subjectives.",
        "En rejetant tout récit historique."
      ],
      answer: 1,
      explanation: "L'obéissance au Messager après sa mort s'exerce par la fidélité à sa Sunna authentique."
    }
  ],
  // Arg 3
  [
    {
      q: "Quel verset établit que le Prophète rend licites les bonnes choses et illicites les impures ?",
      options: [
        "Sourate Al-A'râf, verset 157",
        "Sourate Al-Baqarah, verset 1",
        "Sourate Al-Ikhlâs, verset 1",
        "Sourate An-Nâs, verset 1"
      ],
      answer: 0,
      explanation: "La Sourate 7:157 confirme explicitement ce mandat législatif délégué au Messager."
    }
  ],
  // Arg 4
  [
    {
      q: "Quelles missions le Coran assigne-t-il au Prophète en Sourate 2:151 et 62:2 ?",
      options: [
        "Réciter les versets, purifier les croyants, enseigner le Livre et la Sagesse (Sunna).",
        "Se contenter de distribuer des feuilles écrites.",
        "Diriger uniquement des armées sans enseignement religieux.",
        "Aucune mission d'enseignement."
      ],
      answer: 0,
      explanation: "Le Coran détaille la transmission comme récitation, purification et enseignement du Livre et de la Sagesse."
    }
  ],
  // Arg 5
  [
    {
      q: "Quel verset affirme l'engagement divin d'assurer l'explication du Coran ?",
      options: [
        "Sourate Al-Qiyâmah, verset 19 : « Puis, c'est à Nous qu'incombe son explication »",
        "Sourate Al-Baqarah, verset 2",
        "Sourate Al-Fâtihah, verset 1",
        "Sourate Al-Falaq, verset 1"
      ],
      answer: 0,
      explanation: "La Sourate 75:19 garantit l'explication (Bayân) du Coran par Allah à travers Son Messager."
    }
  ],
  // Arg 6
  [
    {
      q: "Quel manuscrit de hadiths du 1er siècle de l'Hégire subsiste aujourd'hui comme preuve historique ?",
      options: [
        "La Sahîfah de Hammâm ibn Munabbih (élève d'Abû Hurayrah).",
        "Un recueil du XIXe siècle.",
        "Un code de lois romain.",
        "Aucun manuscrit n'existe."
      ],
      answer: 0,
      explanation: "La Sahîfah de Hammâm ibn Munabbih (mort vers 101 H) est conservée et correspond mot à mot aux recueils postérieurs."
    }
  ],
  // Arg 7
  [
    {
      q: "Qu'a ordonné le Prophète ﷺ lorsqu'Abû Shâh a demandé une copie écrite de son sermon ?",
      options: [
        "« Écrivez pour Abû Shâh ! »",
        "« L'écriture est strictement interdite. »",
        "« Quittez la mosquée. »",
        "Il n'a pas répondu."
      ],
      answer: 0,
      explanation: "Le Prophète a explicitement ordonné dans le Sahîh Al-Bukhârî : « Écrivez pour Abû Shâh ! »"
    }
  ],
  // Arg 8
  [
    {
      q: "Comment le Coran qualifie-t-il sa propre révélation dans la Sourate Az-Zumar, verset 23 ?",
      options: [
        "Ahsan al-Hadîth (Le meilleur des récits / de la parole)",
        "Lahw al-Hadîth (Distraction)",
        "Une fable",
        "Une poésie ordinaire"
      ],
      answer: 0,
      explanation: "Dans la Sourate 39:23, Allah qualifie le Coran lui-même de 'Ahsan al-Hadîth'."
    }
  ],
  // Arg 9
  [
    {
      q: "Que prouvent les versets d'orientation divine comme la Sourate 'Abasa ?",
      options: [
        "Que la mission prophétique était sous une vigilance divine directe et permanente.",
        "Qu'il ne faut plus obéir au Prophète.",
        "Que le Prophète a écrit le Coran.",
        "Que le Coran est incomplet."
      ],
      answer: 0,
      explanation: "Ces versets attestent que tout ce qui a été maintenu et enseigné par le Prophète jouit de l'approbation divine infaillible."
    }
  ],
  // Arg 10
  [
    {
      q: "Que prouve le fait que les musulmans du monde entier prient 5 fois par jour de manière identique ?",
      options: [
        "La préservation parfaite et vivante de la Sunna pratique (Tawâtur 'Amalî).",
        "Que le Coran mentionne le nombre exact de chaque rak'ah.",
        "Que chacun peut prier selon son inspiration individuelle.",
        "Une simple coïncidence."
      ],
      answer: 0,
      explanation: "C'est la preuve éclatante de la transmission ininterrompue de la Sunna vivante."
    }
  ]
];

FR.arguments.forEach((arg, idx) => {
  if (QUIZZES_FR[idx]) {
    arg.quiz = QUIZZES_FR[idx];
  }
});

const outputFr = `/**
 * Pack de Langue : Français (FR) - Français
 * Traduction Exhaustive et Intégrale (UI, Préface, Intro, 10 Arguments, Modales)
 */
window.I18N_DATA = window.I18N_DATA || {};
window.I18N_DATA['fr'] = ${JSON.stringify(FR, null, 2)};
`;

fs.writeFileSync(frPath, outputFr, 'utf8');
console.log('✅ js/translations/fr.js harmonisé avec les quiz interactifs !');
