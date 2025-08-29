const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".header__nav-links");
hamburger.onclick = () => {
  navLinks.classList.toggle("active");
};
