//Permet d'aller chercher dans le document HTML le(s) élément(s) portant la classe "fenêtre", et les stocke dans la variable "modal".
var modal = document.getElementsByClassName("fenetre")[0];

//Permet d'aller chercher dans le document HTML tous les éléments dont la classe commence par "image".
var allButtons = document.querySelectorAll('div[class^=image]');
//Permet d'afficher dans la console du navigateur le nombre d'éléments détectés.
console.log(allButtons.length, "éléments dont la classe commence par 'image' ont été trouvés.");
//Répète l'instruction tant que la valeur de la variable "a" est inférieure à la longueur de la liste contenant tous les éléments "image", et inrcrémente la variable "a".
for (var a = 0; a < allButtons.length; a++) {
  //Permet d'ajouter l'événement "onclick" à l'élément "image" situé à la position "a" de la liste "allButtons", et définit la fonction qui va être éxecutée quand l'événement "onclick" est appelé.
  allButtons[a].addEventListener('click', function() {
    //Permet d'effacer le contenu de la console du navigateur.
    console.clear();
    //Permet d'afficher dans la console du navigateur la ligne de code du document HTML contenant l'élément cliqué.
    console.log(this.innerHTML);

    //Permet de changer la proprimété CSS "display" de l'élément contenu dans la variable "modal" pour "block", le rendant ainsi visible.
    modal.style.display = "block";
    //Permet d'insérer dans le code HTML, dans l'élément portant l'identifiant "quest" ce que renvoie la fonction "getQuestion" avec le paramètre "question_possible".
    document.getElementById("quest").innerHTML = getQuestion(question_possible);
    });
}

//Permet d'aller chercher dans le document HTML l'élément portant l'identifianr "ok", et le stocke dans la variable "span".
var span = document.getElementById("ok");
//Permet d'aller chercher dans le document HTML l'élément portant l'identifianr "idk", et le stocke dans la variable "span2".
var span2 = document.getElementById("idk");

//Permet de définir la fonction exécutée quand l'utilisateur clique sur l'élément contenu dans la variable "span".
span.onclick = function() {
  //Permet de changer la proprimété CSS "display" de l'élément contenu dans la variable "modal" pour "none", le rendant ainsi invisible.
  modal.style.display = "none";
}

//Permet de définir la fonction exécutée quand l'utilisateur clique sur l'élément contenu dans la variable "span2".
span2.onclick = function() {
  //Permet de changer la proprimété CSS "display" de l'élément contenu dans la variable "modal" pour "none", le rendant ainsi invisible.
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  //Permet de vérifier si La sible de l'événement est l'élément contenu dans la variable "modal".
  if (event.target == modal) {
    //Permet de changer la proprimété CSS "display" de l'élément contenu dans la variable "modal" pour "none", le rendant ainsi invisible.
    modal.style.display = "none";
    }
}

//Permet de créer une liste, contenue dans la variable "question_possible", contenant toutes les questions.
var question_possible = [
  "Savez-vous quel(le) chercheur(se) a été la pionnière  dans le domaine de la micro informatique?",
  "Savez-vous quel(le) chercheur(se) a été le fondateur de la société Microsoft?",
  "Savez-vous quel(le) chercheur(se) a été le fondateur de la société Apple?",
  "Savez-vous quel(le) chercheur(se) a été le pionnier de l'avènement du smartphone?",
  "Savez-vous quel(le) chercheur(se) est le cofondateur du site web de réseau social Facebook?",
  "Savez-vous quel(le) chercheur(se) a une fortune personnelle estimée à 74,1 milliards de dollard ?",
  "Savez-vous quel(le) chercheur(se) a réalisé le premier véritable programme informatique?",
  "Savez-vous quel(le) chercheur(se) est considéré comme le premier programmeur du monde?",
  "Savez-vous quel(le) chercheur(se) informatique a permis à l’Homme de marcher sur la Lune?",
  "Savez-vous quel(le) chercheur(se) informatique a révolutionné l’ingénierie logicielle et la conception de programmes complexes?",
  "Savez-vous quel(le) chercheur(se) informatique a cracké les communications allemandes chiffrées par la machine enigma?",
  "Savez-vous quel(le) chercheur(se) informatique a été retrouvé mort par empoisonnement au cyanure?",
  "Savez-vous quel(le) chercheur(se) informatique serait à l’origine du langage HTML?",
  "Savez-vous quel(le) chercheur(se) informatique s’est fait chevalier par la reine Elizabeth II pour ses travaux apportés au CERN?",
  "Savez-vous quel(le) chercheur(se) informatique serait à l’origine de la société Linux?",
  "Savez-vous quel(le) chercheur(se) informatique prône l’utilisation de logiciels libres?",
  "Savez-vous quel(le) chercheur(se) informatique est à l’origine du langage C?",
  "Savez-vous quel(le) chercheur(se) informatique est à l’origine du système d’exploitation UNIX?",
  "Savez-vous quel(le) chercheur(se) informatique est le fondateur de la théorie de l'information?"
];

//Permet de définir une fonction "Ren" prenant en paramètre un maximum.
function Rng(max) {
  //Renvoie une valeur aléatoire contenue entre 0 et le maximum indiqué.
  return Math.floor(Math.random() * Math.floor(max));
}

//Permet de créer une fonction "getQuestion" prenant en paramètre une liste.
function getQuestion(liste) {
  //Permet de créer une variable "i" contenant ce que renvoie la fonction "Rng" avec pour paramètre la longeur de la liste indiquée dans le paramètre de la fonction.
  i = Rng(liste.length);
  //Renvoie l'élément à la position "i" dans la liste indiquée dans le paramètre de la fonction.
  return liste[i];
}
