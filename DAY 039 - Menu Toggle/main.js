const icon = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");

icon.addEventListener("click", () => {
  icon.classList.remove("paused");
  icon.classList.add("active");
  menu.classList.remove("paused");
  menu.classList.add("active");
});

menu.addEventListener("click", () => {
  icon.classList.remove("active");
  menu.classList.remove("active");
});
