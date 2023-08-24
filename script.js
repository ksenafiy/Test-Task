"use strict";

// Скрывание и появление блока с надписью

const btnHideOpen = document.querySelector(".row3__btn1");
btnHideOpen.addEventListener("click", () => {
  const divH1 = document.querySelector(".row1");
  divH1.classList.toggle("active");
});

// Поменять блоки местами

const btnChangeBlocks = document.querySelector(".row3__btn2");
btnChangeBlocks.addEventListener("click", () => {
  const row2BlocksParent = document.querySelector(".row2");
  const row2Blocks = document.querySelectorAll(".row2__block");
  row2BlocksParent.insertBefore(row2Blocks[1], row2Blocks[0]);
});

// Появление модального окна при открывании страницы спустя 1 секунду

setTimeout("document.getElementById('popup').style.display='block'", 1000);
