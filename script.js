const bodyContainer = document.querySelector(".body-container")
const background = document.querySelector(".background");
const menuBtn = document.querySelector(".menu-btn");
const btnImg = document.querySelector("#btn-img");
const navLinks = document.querySelector(".nav-links");

let iconMenu = "assets/images/icon-menu.svg";
let iconMenuClose = "assets/images/icon-menu-close.svg";

let overflowHidden = "hidden"
let overflowVisible = "auto"

function trocar() {
    document.querySelector("#btn-img").src = iconMenuClose;
    let aux = iconMenu;
    iconMenu = iconMenuClose;
    iconMenuClose = aux;

    bodyContainer.style.overflow = overflowHidden;
    let aux2 = overflowVisible;
    overflowVisible = overflowHidden;
    overflowHidden = aux2;
}


menuBtn.addEventListener("click", (e) => {
    e.preventDefault();

    navLinks.classList.toggle("active")
    background.classList.toggle("blur")

    trocar()
})