$(document).ready(function() {
  var modal = document.getElementById("loginModal");

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  $(".goToSite").click(function() {
    $(".lightbox").fadeOut(2200);
  });
});

var i = 0;
var txt = "Aldossary, Abdullah Email: aaldossary@una.edu.";
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("showMyInfo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
