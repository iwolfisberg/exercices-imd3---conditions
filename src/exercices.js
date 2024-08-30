/*
Exercice 1:
-------------
Implémenter la fonction canVote(age).
Retourner un booléan (true / false) indiquant si la personne à l'age de voter.
NOTE: utiliser la syntaxe if / else
*/

function canVote(age) {
  // TODO: implémenter la fonction
}

// -----------------------------------------------------------------------------------

/*
Exercice 2:
-------------
Implémenter la fonction isOdd(number).
Si le nombre est pair, retourner la phrase "Le nombre est pair". Si le chiffre est impair, retourner la phrase "Le nombre est impair"
NOTE: utiliser la syntaxe if / else
NOTE2: l'opérateur modulo pourrait vous aider 😉
*/

function isOdd(number) {
  // TODO: implémenter la fonction
}

// -----------------------------------------------------------------------------------

/*
Exercice 3:
-------------
Implémenter la fonction rateGrade(grade).
Écrire une fonction qui prend en entrée une note (entre 0 et 6) et retourne la mention correspondante :
- "Très bien" si la note est supérieure ou égale à 5.5.
- "Bien" si la note est entre 4.5 et 5 inclus.
- "Assez bien" si la note est égale à 4.
- "Insuffisant" si la note est inférieure à 4.
NOTE: utiliser la syntaxe if / else / elseif
*/

function rateGrade(grade) {
  // TODO: implémenter la fonction
}

// <!----- NE PAS TOUCHER - UTILISER POUR LES TESTS ------------!>
module.exports = {};
module.exports.canVote = typeof canVote !== "undefined" ? canVote : undefined;
module.exports.isOdd = typeof isOdd !== "undefined" ? isOdd : undefined;
module.exports.rateGrade =
  typeof rateGrade !== "undefined" ? rateGrade : undefined;
