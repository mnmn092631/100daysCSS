const menuIcon = document.querySelector(".menu-icon");
const lines = document.querySelectorAll(".menu-icon div");

menuIcon.addEventListener("click", () => {
  for (i = 0; i < lines.length; i++) {
    lines[i].classList.toggle("animate");
    lines[i].classList.remove("start");
  }
});
