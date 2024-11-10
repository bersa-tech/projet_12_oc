// Sélectionnez l'élément .projets-span et ajoutez un événement de clic
document.querySelector(".projets-span").addEventListener("click", openModal);

// Ouvrir la modal
function openModal() {
  document.getElementById("projectModal").style.display = "flex";
}

// Fermer la modal
function closeModal() {
  document.getElementById("projectModal").style.display = "none";
}

// Gestion du carrousel
let currentSlide = 0;
const items = document.querySelectorAll(".carousel-item");

function showSlide(index) {
  items.forEach((item, i) => {
    item.classList.remove("active");
    if (i === index) item.classList.add("active");
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % items.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + items.length) % items.length;
  showSlide(currentSlide);
}

// Fermer la modal si l’utilisateur clique en dehors de la modal-content
window.onclick = function (event) {
  const modal = document.getElementById("projectModal");
  if (event.target === modal) {
    closeModal();
  }
};

// Afficher le premier élément par défaut
showSlide(currentSlide);
