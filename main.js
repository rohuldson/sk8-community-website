const btnMenu = document.querySelector(".cabecalho__menu");
const menu = document.querySelector(".menu__lateral");

btnMenu.addEventListener("click", () => {
  menu.classList.toggle("menu__lateral-active");
});
