const searchField = document.querySelector(".search-field");
const suggestions = document.querySelector(".suggestions");

searchField.addEventListener("keyup", (e) => {
  const text = e.currentTarget.value;

  if (text.length) {
    suggestions.classList.add("active");
    suggestions.innerHTML = `<li><strong>${text}</strong></li>
    <li>Veritatis et <strong>${text}</strong></li>
    <li>ut aliquid ex <strong>${text}</strong> vero eos</li>`;
  } else {
    suggestions.classList.remove("active");
    suggestions.innerHTML = "";
  }
});
