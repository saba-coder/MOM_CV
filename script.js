var acc = document.getElementsByClassName("accordion-button");

for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    /* // Hide all panels
    for (var j = 0; j < acc.length; j++) {
      var panel = acc[j].nextElementSibling;
      panel.style.display = "none";
      acc[j].classList.remove("active");
    } */
    //toggle
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}