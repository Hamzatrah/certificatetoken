const acc = document.getElementById("accordion");
 acc.addEventListener("click", function() {
     console.log("click");
     const arrow = document.getElementById("carron");
     arrow.classList.toggle("rotate");
     const panel = this.nextElementSibling;
     panel.style.display === "block" ? panel.style.display = "none" : panel.style.display = "block";
 });
