const button = document.getElementById("klik_knap");
button.addEventListener("click", () => {
  document.querySelector(".magazine").classList.add("flip");
  setTimeout(() => {
    window.location.href = "indholdsfortegnelse.html";
  }, 700); // Vent 1 sekund, før den skifter side
});
