const toggleBtn = document.querySelector(".navbar__toggleBtn");
const menu = document.querySelector(".navbar__menu");
const navBar = document.querySelector(".navbar");

toggleBtn.addEventListener("click", () => {
  navBar.classList.toggle("active");
  menu.classList.toggle("active");
});
