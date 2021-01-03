// Get the modal
var modal = document.getElementById("fenetre");

// Get the button that opens the modal
//var btn = document.getElementsByClassName("images");

// Get the <span> element that closes the modal
var span = document.getElementById("ok");
var span2 = document.getElementById("idk");

var i = 0;


var allButtons = document.querySelectorAll('div[class^=image]');
console.log("Found", allButtons.length, "div which class starts with 'image'.");
for (var a = 0; a < allButtons.length; a++) {
  allButtons[a].addEventListener('click', function() {
    console.clear();
    console.log("You clicked:", this.innerHTML);
    modal.style.display = "block";
    document.getElementById("quest").innerHTML = getQuestion(question_possible);
  });
}


// When the user clicks the button, open the modal
//btn.onclick = function() {
//  modal.style.display = "block";
//  document.getElementById("qst").innerHTML = getQuestion(question_possible);
//}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

span2.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
      modal.style.display = "none";
    }
}

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

function Rng(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getQuestion(liste) {
  i = Rng(liste.length);
  console.log(liste[i]);
  return liste[i];
}
