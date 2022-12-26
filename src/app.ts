/**
 * Navbar Toggle
 */

const overlay = document.querySelector<HTMLDivElement>("[data-overlay]");
const navbar = document.querySelector<HTMLDivElement>("[data-navbar]");
const navToggleBtn = document.querySelector<HTMLButtonElement>(
  "[data-nav-toggle-btn]"
);
const navbarLinks =
  document.querySelectorAll<HTMLAnchorElement>("[data-nav-link]");

const navToggleFunc = () => {
  navToggleBtn!.classList.toggle("active");
  navbar!.classList.toggle("active");
  overlay!.classList.toggle("active");
};

navToggleBtn!.addEventListener("click", navToggleFunc);
overlay!.addEventListener("click", navToggleFunc);

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", navToggleFunc);
}

export {};
