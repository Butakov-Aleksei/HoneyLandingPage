const burgerMenu = document.querySelector(".burger-menu");
const mainNav = document.querySelector(".main-nav");
const mainNavLinks = mainNav.querySelectorAll(".main-nav__link");
const mainEl = document.querySelector("main");

burgerMenu.addEventListener("click", (e) => {
  e.currentTarget.classList.toggle("burger-menu--open");
  e.currentTarget.setAttribute(
    "aria-expanded",
    e.currentTarget.getAttribute("aria-expanded") === "false"
      ? "true"
      : "false",
  );
  mainNav.classList.toggle("main-nav--open");

  if (mainNav.classList.contains("main-nav--open")) {
    mainEl.setAttribute("inert", "");
  } else {
    mainEl.removeAttribute("inert");
  }
});

mainNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    burgerMenu.classList.toggle("burger-menu--open");
    burgerMenu.setAttribute(
      "aria-expanded",
      burgerMenu.getAttribute("aria-expanded") === "false" ? "true" : "false",
    );
    mainNav.classList.toggle("main-nav--open");

    if (mainNav.classList.contains("main-nav--open")) {
      mainEl.setAttribute("inert", "");
    } else {
      mainEl.removeAttribute("inert");
    }
  });
});
