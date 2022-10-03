const frame = document.querySelector(".frame");
const white = document.querySelector(".white");
const green = document.querySelector(".green");

frame.addEventListener("click", () => {
  white.classList.toggle("normal");
  white.classList.toggle("big");
  green.classList.toggle("small");
  green.classList.toggle("normal");
});
