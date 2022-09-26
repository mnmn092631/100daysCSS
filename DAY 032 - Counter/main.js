const number = document.querySelector(".number");
let count = 0;

const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");

minus.addEventListener("click", () => {
  updateCount(-1);
});

plus.addEventListener("click", () => {
  updateCount(1);
});

function updateCount(value) {
  count += value;

  const fadeOutDown = number.querySelector(".fadeOutDown");
  fadeOutDown && fadeOutDown.remove();

  const fadeOutUp = number.querySelector(".fadeOutUp");
  fadeOutUp && fadeOutUp.remove();

  number.querySelector("span").className = "";

  if (value > 0) {
    number.querySelector("span").classList.add("fadeOutUp");

    const span = document.createElement("span");
    span.classList.add("fadeInUp");
    span.innerHTML = `${count}`;
    number.append(span);
  } else {
    number.querySelector("span").classList.add("fadeOutDown");

    const span = document.createElement("span");
    span.classList.add("fadeInDown");
    span.innerHTML = `${count}`;
    number.append(span);
  }
}
