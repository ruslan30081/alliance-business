// Подключение функционала "Чертоги Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
window.addEventListener("load", function() {
    document.body.classList.remove("load");
  });

  const header = document.querySelector('header.header');
  const mtheader = document.querySelector('.mtheader');
  if (header && mtheader) {
    const headerHeight = header.offsetHeight;
    mtheader.style.marginTop = `${headerHeight}px`;
  }
  
