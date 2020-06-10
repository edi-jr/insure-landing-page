const toggle = document.querySelector(".header__toggle");
const nav = document.querySelector(".header__nav");
const header = document.querySelector(".header");
let hidden = true;

function handleClick() {
  toggle.innerHTML = hidden
    ? "<img src='assets/images/icon-close.svg' alt='click to close menu'>"
    : "<img src='assets/images/icon-hamburger.svg' alt='click to show menu'>";
  hidden = !hidden;
  nav.classList.toggle("nav-hidden");
}

function shadowHeader() {
  if (window.scrollY >= 1) {
    header.classList.add("header-fixed");
  } else {
    header.classList.remove("header-fixed");
  }
}

shadowHeader();

toggle.addEventListener("click", handleClick);
window.addEventListener("scroll", shadowHeader);