/* Min oprindelige plan med min side, var at inplimentere en animation på funktionsknappen, 
når skifter fra den ene html side til den anden html side (Read more, Read less).
Dette viste sig hurtigt at være meget sværre end jeg troede - nedenfor har jeg fået Chatgpt til at prøve at hjælpe mig.
Animation endte med at virke på side 1 til 2, men opførte sig derefter utroligt mærkeligt på de andre sider.
Derfor har jeg valgt at droppe animationen.*/

const button = document.getElementById("klik_knap");
const currentPage = window.location.pathname.split("/").pop(); // Få nuværende side (f.eks. "side2.html")

// Map sider til deres næste sider
const pageMap = {
  "index.html": "indholdsfortegnelse.html",
  "indholdsfortegnelse.html": "tema1_side1.html",
  "tema1_side1.html": "tema1_side2.html",
  "tema1_side2.html": "tema1_side3.html",
  "tema1_side3.html": "tema2_side1.html",
  "tema2_side1.html": "tema2_side2.html",
  "tema2_side2.html": "tema2_side3.html",
  "tema2_side3.html": "tema3_side1.html",
  "tema3_side1.html": "tema3_side2.html",
  "tema3_side2.html": "tema3_side3.html",
  "tema3_side3.html": "tema4_side1.html",
  "tema4_side1.html": "tema4_side2.html",
  "tema4_side2.html": "tema4_side3.html",
  "tema4_side3.html": "tema5_side1.html",
  "tema5_side1.html": "tema5_side2.html",
  "tema5_side2.html": "tema5_side3.html",
  "tema5_side3.html": "om_mig.html",
  "om_mig.html": "index.html",
};

// Find den næste side baseret på nuværende side
const nextPage = pageMap[currentPage] || "index.html"; // Standard til index.html, hvis ikke fundet

button.addEventListener("click", () => {
  // Tilføj animationen
  document.querySelector(".magazine").classList.add("flip");

  // Gem animationstilstand
  sessionStorage.setItem("animate", "true");

  // Vent og skift til næste side
  setTimeout(() => {
    window.location.href = nextPage;
  }, 700); // Vent 0.7 sekund før skift
});

// Kontroller animationstilstand ved sideindlæsning
window.addEventListener("DOMContentLoaded", () => {
  if (sessionStorage.getItem("animate") === "true") {
    document.querySelector(".magazine").classList.add("flip");
    sessionStorage.removeItem("animate"); // Ryd animationstilstand
  }
});
