const profiles = document.querySelectorAll(".section");
const detail = document.querySelector(".detail");
const closeBtn = document.querySelector(".close");

for (i = 0; i < profiles.length; i++) {
  profiles[i].addEventListener("click", () => {
    detail.classList.add("active");
  });
}

closeBtn.addEventListener("click", () => {
  detail.classList.remove("active");
});
