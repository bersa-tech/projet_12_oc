const divTarget1 = document.querySelector(".design__mobile__0__2");
const divBackground1 = document.querySelector(".design__mobile__0");

// position de l'image
divTarget1.addEventListener("click", (e) => {
  e.stopPropagation();
  divBackground1.classList.toggle("is-bottom");
});

// rotation de l'image
const divMain01 = document.querySelector(".design__mobile__0");
const divToggleImage1 = document.querySelector(".design__mobile__0__3");

divToggleImage1.addEventListener("click", (e) => {
  e.stopPropagation();
  divMain01.classList.toggle("flipped");
});
