document.addEventListener("DOMContentLoaded", () => {
  // Sélectionne l'élément à afficher en fonction de la taille d'écran
  const isMobile = window.innerWidth <= 768;
  const elements = isMobile
    ? document.querySelectorAll(".title-mobile, .main-content .offer span")
    : document.querySelectorAll(".title-main, .main-content .offer span");

  const config = {
    typingSpeed: 100,
    erasingSpeed: 100,
    pauseTime: 2000,
  };

  class TypeWriter {
    constructor(element, config) {
      this.element = element;
      this.text = element.textContent;
      this.config = config;
      this.index = 0;
      this.isErasing = false;

      // Vider le contenu initial
      this.element.textContent = "";

      // Ajouter le curseur clignotant
      this.cursor = document.createElement("span");
      this.cursor.className = "cursor";
      this.cursor.textContent = "_";
      this.element.parentNode.appendChild(this.cursor);

      // Démarrer l'animation
      this.type();
    }

    type() {
      if (!this.isErasing && this.index < this.text.length) {
        // Ajoute une lettre
        this.element.textContent = this.text.substring(0, this.index + 1);
        this.index++;
        setTimeout(() => this.type(), this.config.typingSpeed);
      } else if (this.isErasing && this.index > 0) {
        // Enlève une lettre
        this.element.textContent = this.text.substring(0, this.index - 1);
        this.index--;
        setTimeout(() => this.type(), this.config.erasingSpeed);
      } else if (this.index === this.text.length) {
        // Pause avant effacement
        setTimeout(() => {
          this.isErasing = true;
          this.type();
        }, this.config.pauseTime);
      } else {
        // Redémarre l'animation
        this.isErasing = false;
        this.index = 0;
        setTimeout(() => this.type(), this.config.typingSpeed);
      }
    }
  }

  // Initialiser l'effet pour chaque élément
  elements.forEach((element) => new TypeWriter(element, config));

  // Gérer le redimensionnement de la fenêtre
  window.addEventListener("resize", () => {
    // Nettoyer les curseurs existants avant le rechargement
    document.querySelectorAll(".cursor").forEach((cursor) => cursor.remove());
    location.reload();
  });
});
