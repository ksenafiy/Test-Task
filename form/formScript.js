"use strict";

// Запрет перезагрузки станицы при отправки формы
const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

// Создание нового блока для отображения данных из формы
const dataDisplay = document.createElement("div");
document.getElementById("form").appendChild(dataDisplay);

// Функция для отправки формы
function sendForm() {
  const data = new FormData(form); // Сбор данных из формы
  // Преобразование к json-формату
  let object = {};
  data.forEach((value, key) => {
    object[key] = value;
  });
  let json = JSON.stringify(object);
  dataDisplay.innerHTML = `<p>${json}</p>`; // Вывод данных в блок

  // Отправка GET-запроса
  const request = new XMLHttpRequest();
  const url = "server.json";
  request.open("GET", url);
  request.send();

  // Полная отправка запроса
  request.onload = function () {
    if (request.status == 200) {
      alert("send");
    }
  };

  // Ошибка при отправке запроса
  request.onerror = function () {
    console.log("Ошибка запроса");
  };

  form.reset(); // Сброс формы
}

// Получение и обработка кнопки для отправки формы
const btnSend = document.querySelector(".btnSend");
btnSend.addEventListener("click", sendForm);
