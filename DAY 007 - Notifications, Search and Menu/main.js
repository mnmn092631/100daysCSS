const searchIcon = document.querySelector(".fa-magnifying-glass");
const searchInput = document.querySelector(".search-input");

searchIcon.addEventListener("click", () => {
  searchInput.classList.toggle("active");
});

const menuIcon = document.querySelector(".menu-icon");
const panel = document.querySelector(".panel");
const menu = document.querySelector(".menu");

menuIcon.addEventListener("click", () => {
  panel.classList.toggle("show-menu");
  menu.classList.toggle("active");
});
