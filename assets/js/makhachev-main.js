// Sélectionner la div qui contient l'image de fond et la div cible
const divTarget = document.querySelector(".design__main__droite__0__2");
const divBackground = document.querySelector(".design__main__droite__0");

// position de l'image
divTarget.addEventListener("click", (e) => {
  e.stopPropagation(); // Empêcher la propagation de l'événement pour éviter que le clic sur .design__main__droite__0__2 déclenche le gestionnaire sur le document
  divBackground.classList.toggle("is-bottom"); // Alterner la classe is-bottom pour changer la position de l'image
});

// rotation de l'image
const divMain0 = document.querySelector(".design__main__droite__0");
const divToggleImage = document.querySelector(".design__main__droite__0__3");

divToggleImage.addEventListener("click", (e) => {
  e.stopPropagation();
  divMain0.classList.toggle("flipped");
});
