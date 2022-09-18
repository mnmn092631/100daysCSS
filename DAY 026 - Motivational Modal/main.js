const buttons = document.querySelectorAll(".button");
const cards = document.querySelectorAll(".card");

let active = 0;

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    cards[active].classList.remove("active");
    cards[active].classList.add("inactive");
    if (active == 2) {
      active = -1;
    }
    active++;
    cards[active].classList.remove("inactive");
    cards[active].classList.add("active");
  });
}
