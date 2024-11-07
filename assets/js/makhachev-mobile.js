const divTarget1 = document.querySelector(".design__mobile__0__2");
const divBackground1 = document.querySelector(".design__mobile__0");

// Ajouter un écouteur d'événements pour le clic sur .design__mobile__0__2
divTarget1.addEventListener("click", (e) => {
  e.stopPropagation(); // Empêche la propagation de l'événement
  divBackground1.classList.toggle("is-bottom"); // Alterner la classe is-bottom
});

// // Ajouter un écouteur d'événements sur le document pour détecter les clics ailleurs
// document.addEventListener("click", (e) => {
//   // Vérifie si l'élément cliqué est divToggleImage1, sinon retire la classe
//   if (divToggleImage1 && !divToggleImage1.contains(e.target)) {
//     if (divBackground1.classList.contains("is-bottom")) {
//       divBackground1.classList.remove("is-bottom");
//     }
//   }
// });

// Ajouter un écouteur d'événements pour la rotation de l'image
const divMain01 = document.querySelector(".design__mobile__0");
const divToggleImage1 = document.querySelector(".design__mobile__0__3");

divToggleImage1.addEventListener("click", (e) => {
  e.stopPropagation(); // Empêche la propagation de l'événement
  divMain01.classList.toggle("flipped"); // Alterne la classe 'flipped' pour appliquer la rotation
});
