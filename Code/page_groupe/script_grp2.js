// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementsByClassName("images");

// Get the <span> element that closes the modal
var je_sais = document.getElementById("ok")[0];
var jsp = document.getElementById("idk")[0];

// When the user clicks the button, open the modal
var btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
je_sais.onclick = function() {
  modal.style.display = "none";
}

jsp.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function choix_question() {
  var question_possible = [
    "1",
    "2",
    "3",
  ];
  return choix_question[Math.floor((Math.random() * 2))];
}

question = choix_question();
document.getElementById("qst").innerHTML = question;
