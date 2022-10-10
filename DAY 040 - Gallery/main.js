const pics = document.querySelectorAll(".pic");

pics.forEach((pic) => {
  pic.addEventListener("click", (e) => {
    pics.forEach((pic) => pic.classList.toggle("away"));
    e.currentTarget.classList.remove("away");
    e.currentTarget.classList.toggle("active");
  });
});
