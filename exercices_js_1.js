/**
* Exercices sur les variables et les fonctions
**/

// ----
// Ecrire une fonction 'hello' qui affiche dans la console "Hello World!"

function hello() {
console.log("Hello World");
}

hello();

// ----
// écrire des fonctions suivante:
// addition(a, b)

function addition (a,b) {
a+b;
}
return addition(5,3);

// soustraction(a, b)

function soustraction (a,b) {
return a-b;
}
soustraction(5,2);

// multiplication(a, b)

function multiplication (a,b) {
return a*b;
}
multiplication(10,2);
// division(a, b)

function division (a,b) {
return a/b;
}
division(10,2);
// concatenation(str1, str2)

function concatenation (str1,str2){
  return str1 + str2;
}


console.log(concatenation("salut"+"anne-so "));


// moyenne(a1, a2, a3)

function moyenne (a1,a2,a3) {
var moyenne = (a1+a2+a3)/3;
return moyenne;
}
console.log("voici ta moyenne " + moyenne(10,12,18));
// Chaque fonction devra effectuer l'opération correspondant à son nom, et renvoyer le résultat.
// Celui-ci sera stocké dans une variable, qui sera ensuite affichée dans la console

// ----
// Déclarer deux variables a et b, de valeurs respectives 5 et 12
// A l'aide d'une variable intermédiaire, inverser les deux valeurs pour que a ait pour valeur 12 et b pour valeur 5
// Afficher le résultat de a et b dans la console sous la forme d'une phrase: "A vaut : xxx et B vaut yyy"
var a, b;
a=5;
b=12;
var tmp;
tmp=b;
b=a;
a=tmp;
console.log("A vaut : " + a + " et B vaut : " + b);

// ----
// Ecrire une fonction 'isDivisibleBy5' qui reçoit un nombre en paramètre, et qui vérifie que ce nombre est divisible par 5.
function isDivisibleBy5 (a) {

if (a%5==0) {
  return true;

}
else
{
  return false;
}
}

console.log(isDivisibleBy5(10));



// ----
// Ecrire une fonction 'isDivisibleByN' qui reçoit deux nombres entiers x et n, et qui vérifie si x est divisible par n.

// Cette fonction doit renvoyer un booléen
function isDivisibleByN(x, n) {
  if (x%n==0) {
    return true;

  }
  else
  {
    return false;
  }
  }

  console.log(isDivisibleByN(10,5));

// ----
// Générer un nombre décimal compris entre 0 et 1, et le stocker dans une variable
// Changer la valeur de cette variable pour qu'elle vaille le nombre initial arrondi à 2 décimales
// Afficher dans la console

function genereEtArrondit() {
var a = Math.random();
a = a.toFixed(2);
return a;
}

console.log(genereEtArrondit());

/**
* Exercices sur les chaînes de caractères
**/

// ----
// Ecrire une fonction qui reçoit une chaîne de caractères, et qui renvoie la position
// de la première occurence de la lettre 'e' dans cette chaîne
function caractere() {
var chaine = "bonjour";
var e = chaine.charAt(0);
return e;
}

console.log(caractere());

// ----
// Ecrire une fonction qui reçoit une chaîne de caractères, et qui renvoie la position
// de la dernière occurence de la lettre 'e' dans cette chaîne
function occurence() {
var chaine = "hello";
  var e = chaine.lastIndexOf("l");
console.log(e);
}

occurence();



// ----
// Ecrire une fonction qui reçoit une chaîne de caractères contenant une prhase entière,
// et qui renvoie un tableau contenant chacun des différents mots dans la phrase
function tableau(phrase) {

var tableau = phrase.split(" ");
return tableau;

}

console.log(tableau("coucou ca va "));


// ----
// Ecrire une fonction qui reçoit une chaîne de caractère, qui transforme
// la première lettre en majuscule, et qui renvoie la nouvelle chaîne

function maj(phrase) {

var phrase = phrase.substr(0,1).toUpperCase()+phrase.substring(1,phrase.length).toLowerCase();
return phrase;
}

console.log(maj("LA PREMIERE LETTRE EN MAJUSCULE LE RESTE EN MINUSCULE "));



/**
* Exercices sur les fonctions natives javascript
**/

// ----
// Ecrire une fonction qui stocke vos noms et prénoms dans deux variables firstName et lastName
// Afficher dans une popup la concaténation des deux


// ----
// Ecrire une fonction qui respecte les étapes suivantes:
// Demander à l'utilisateur de saisir une valeur numérique par le biais d'une popup
// Stocker cette valeur dans une variable
// Afficher sa valeur dans la console

// ----
// Ecrire une fonction qui respecte les étapes suivantes:
// Demander à l'utilisateur de saisir deux valeurs numériques grâce à une popup de saisie
// L'alerter grâce à une popup si la valeur saisie n'est pas un nombre
// Afficher dans la console la somme des deux valeurs


/**
* Exercices sur les tableaux
**/

// ----
// Ecrire une fonction qui prend en argument un tableau de nombres et en calcule la somme.
// Valeurs initiales:
var numTab = [45, 99, 357, -33, 1, 8, -78];
function computeSumOfArray(tab) {
	// WRITE YOUR CODE HERE
};

/**
* Exercices sur les structures de contrôles et de boucles
**/

// ----
// 1)
// 	- construire un tableau vide initialement
// 	- rajouter l'une après l'autre 10 valeurs quelconques (nombres, string) dans ce tableau
// 	- utiliser une boucle for pour afficher toutes les valeurs du tableau dans la console

// 2)
// 	- reprendre le tableau construit précédemment
// 	- utiliser une boucle while pour afficher toutes les valeurs du tableau dans la console

// ----
// Ecrire une fonction qui réalise les étapes suivantes:
// Utiliser une fonction de type 'random' pour générer une liste de nombre aléatoires
// Utiliser une boucle for, et l'instruction 'if' pour afficher dans la console uniquement les nombres impairs de ce tableau

// ----
// Ecrire une fonction qui réalise les étapes suivantes:
// Sur 50 itérations:
//     - générer un entier de façon aléatoire
//     - si l'entier est divisible par 5, le stocker dans le tableau
// Afficher avec une boucle for le contenu du tableau dans la console


/**
* Exercices sur les objets
**/

// ----
// Construire un objet :
// - ayant deux propriéts: nom, prénom
// - dont les valeurs sont votre nom et votre prénom
// - rajouter dynamiquement une propriété âge
// - modifier dynamiquement le prénom de cet objet

// ----
// Ecrire une fonction qui reçoit un objet, et qui renvoie la longueur de cet objet
var getObjLength = function(obj) {
	// WRITE YOUR CODE HERE
};
// Tester cette fonction avec un objet de votre choix que vous aurez écrit

// ----
// Pour résoudre les exercices précédents vous avez écrit des fonctions.
// Vous devez maintenant construire un objet ayant plusieurs propriétés dont:
// - le nom de la propriété s'appelle 'solution_N', où N est le numéro de l'exercice
// - la valeur de la propriété est la fonction qui résoud l'exercice N
