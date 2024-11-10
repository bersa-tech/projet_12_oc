document.addEventListener("DOMContentLoaded", () => {
  const darkModeToggle = document.getElementById("darkModeToggle");

  // Vérifie si le bouton existe pour éviter des erreurs
  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode-active");
    });
  } else {
    console.error("Élément introuvable");
  }
});
