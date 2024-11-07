// Sélectionner la div qui contient l'image de fond et la div cible
const divTarget = document.querySelector(".design__main__droite__0__2");
const divBackground = document.querySelector(".design__main__droite__0");

// Ajouter un écouteur d'événements pour le clic sur .design__main__droite__0__2
divTarget.addEventListener("click", (e) => {
  // Empêcher la propagation de l'événement pour éviter que le clic sur .design__main__droite__0__2 déclenche le gestionnaire sur le document
  e.stopPropagation();

  // Alterner la classe is-bottom pour changer la position de l'image
  divBackground.classList.toggle("is-bottom");
});

// Ajouter un écouteur d'événements sur le document pour détecter les clics ailleurs
document.addEventListener("click", (e) => {
  // Vérifie si l'élément cliqué est .design__main__droite__0__3, dans ce cas, on ne retire pas la classe 'is-bottom'
  if (!divToggleImage.contains(e.target)) {
    // Si la classe is-bottom est présente, la retirer
    if (divBackground.classList.contains("is-bottom")) {
      divBackground.classList.remove("is-bottom");
    }
  }
});

// Ajouter un écouteur d'événements pour la rotation de l'image
const divMain0 = document.querySelector(".design__main__droite__0");
const divToggleImage = document.querySelector(".design__main__droite__0__3");

divToggleImage.addEventListener("click", (e) => {
  // Empêcher la propagation de l'événement pour éviter que le clic sur .design__main__droite__0__3 déclenche l'événement document
  e.stopPropagation();

  // Ajouter ou enlever la classe 'flipped' pour appliquer la rotation
  divMain0.classList.toggle("flipped");
});
