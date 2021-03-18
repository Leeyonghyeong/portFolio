const toggleBtn = document.querySelector(".navbar__toggleBtn");
const menu = document.querySelector(".navbar__menu");
const navBar = document.querySelector(".navbar");

toggleBtn.addEventListener("click", () => {
  navBar.classList.toggle("active");
  menu.classList.toggle("active");
});

const aboutToggle = document.querySelectorAll(".about__header__tag .html--tag");
const aboutP = document.querySelectorAll(".about__body p");

aboutToggle.forEach((about) => {
  about.addEventListener("click", () => {
    aboutP.forEach((p) => {
      p.classList.toggle("toggle");
    });
  });
});

const skillToggle = document.querySelectorAll(".skill__header__tag .html--tag");
const skillP = document.querySelector(".skill__body p");
const skillImage = document.querySelectorAll(".skill__body img");

skillToggle.forEach((skill) => {
  skill.addEventListener("click", () => {
    skillImage.forEach((img) => {
      img.classList.toggle("toggle");
    });
    skillP.classList.toggle("toggle");
  });
});

const projectToggle = document.querySelectorAll(
  ".project__header__tag .html--tag"
);
const projectP = document.querySelector(".project__body p");
const projectCard = document.querySelectorAll(".project__body .project__card");

projectToggle.forEach((project) => {
  project.addEventListener("click", () => {
    projectCard.forEach((card) => {
      card.classList.toggle("toggle");
    });
    projectP.classList.toggle("toggle");
  });
});
