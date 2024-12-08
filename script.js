let screens = Array.from(document.getElementsByClassName("scrin"));
let numberScreens = screens.length;
let web = document.getElementById("web");
let currentScreens = 0;
let headTitle = document.getElementById("headTitle");
let nav = document.getElementById("inf1");
let body = document.getElementsByTagName("body")[0];

let arc = Array.from(document.getElementsByClassName("arc"));
let menu = Array.from(document.querySelectorAll('nav ul li'));
let ancorMenu = Array.from(document.querySelectorAll('nav ul li a'));
console.log(menu);
let protoSubmenuCircle = Array.from(document.getElementsByClassName("submenu-circle"));
let submenuCircle = [];   for (let i = 0; i <4;i++) submenuCircle[i] = [protoSubmenuCircle[i*4],protoSubmenuCircle[i*4+1], protoSubmenuCircle[i*4+2],protoSubmenuCircle[i*4+3]];

        //const bodyBcgSize = parseFloat(window.getComputedStyle(body).backgroundSize);

// Анимации для выплывания подмкеню при наведении на элементы меню

menu.forEach((menuItem, index) => {
  menuItem.addEventListener("mouseenter", () => {
    arc[index].style.width = "171px";
    arc[index].style.height = "310px";
    arc[index].style.transform = `rotate(${28}deg)`;
    arc[index].style.opacity = "1";
    
    ancorMenu[index].style.height = "220px";

      submenuCircle[index].forEach((submenuItem, subIndex) => {
          submenuItem.style.opacity = "1";
          submenuItem.style.transform = `translate(${170 - subIndex*subIndex*10 }px, ${subIndex*63 - 10}px)`;
      });
  });

  menuItem.addEventListener("mouseleave", () => {
    setTimeout(() => {    
      arc[index].style.width = "133px";
      arc[index].style.height = "213px";
      arc[index].style.transform = `rotate(${10}deg)`;
      arc[index].style.opacity = "0";
  
      ancorMenu[index].style.height = "260px";

      submenuCircle[index].forEach((submenuItem) => {
      submenuItem.style.opacity = "0";
      submenuItem.style.transform = "translate(0, 0)";
    });} ,150);

  });
});

////////////////////////////////////////////////////////////////


$(document).ready(function () {
  $('.trigger').hover(
      function () {
          $('.target').stop().animate({
              opacity: 1, // Плавное появление
              left: "+=70px", // Перемещение вправо
              top: "+=30px"  // Перемещение вниз
          }, 500); // Длительность анимации
      },
      function () {
          $('.target').stop().animate({
              opacity: 0, // Плавное исчезновение
              left: "-=70px", // Возврат на исходное место
              top: "-=30px"  // Возврат на исходное место
          }, 500); // Длительность анимации
      }
  );
});

// Функция для скринов горизонтальной развертки
function move(num) {
  currentScreens = num;
  web.style.left = -currentScreens * 100 + "vw";
  web.style.transition = 0.4 + "s";
}

function updateHeadTitle() {
  if (currentScreens === 0) {
    headTitle.style.top = "45%";
    headTitle.style.transition = "0.2s";
  } else {
    headTitle.style.top = "0%";
  }
}
// добавили скрины по горизонтали (прокрутка колесом)
window.addEventListener("wheel", function (event) {
  if (event.deltaY > 0) {
    if (currentScreens < numberScreens) {
      currentScreens++;
      web.style.left = -currentScreens * 100 + "vw";
      headTitle.style.transition = 0.2 + "s";
      headTitle.style.top = "0%";
      body.style.backgroundPosition =  100 * currentScreens / (numberScreens) + "%";
      //console.log(100 * currentScreens / (numberScreens) + "%");

    }
  } else if (event.deltaY < 0) {
    if (currentScreens > 0) {
      currentScreens--;
      web.style.left = -currentScreens * 100 + "vw";
      headTitle.style.transition = 0.2 + "s";
      headTitle.style.top = "0%";
      body.style.backgroundPosition = 100 * currentScreens / (numberScreens) + "%";
    }
  }
  if (currentScreens == 0) {
    headTitle.style.transition = 0.2 + "s";
    headTitle.style.top = "45%";
  }
});

//прокрутка скринов по горизонтали (при помощи нажатия кнопки на главной панели)
document.getElementById("homeBtn").addEventListener("click", function () {
  currentScreens = 0;
  web.style.left = -currentScreens * 100 + "vw";
  updateHeadTitle();
});

document.getElementById("aboutBtn").addEventListener("click", function () {
  currentScreens = 1;
  web.style.left = -currentScreens * 100 + "vw";
  updateHeadTitle();
});

document.getElementById("portfolioBtn").addEventListener("click", function () {
  currentScreens = 2;
  web.style.left = -currentScreens * 100 + "vw";
  updateHeadTitle();
});

document.getElementById("contactBtn").addEventListener("click", function () {
  currentScreens = 3;
  web.style.left = -currentScreens * 100 + "vw";
  updateHeadTitle();
});

// Сщздаем всплываюшее окно с нужной нам информацией

let explanationJS = Array.from(
  document.getElementsByClassName("explanationJS")
);
let isShowJS = false;
function linkJS(numJS) {
  if (isShowJS === false) {
    explanationJS[numJS].style.opacity = "1";
    explanationJS[numJS].style.transform = "scale(1)";
    isShowJS = true;
  } else {
    explanationJS[numJS].style.opacity = "0";
    explanationJS[numJS].style.transform = "scale(0)";
    isShowJS = false;
  }
}

let explanationHTML = Array.from(
  document.getElementsByClassName("explanationHTML")
);
let isShowHTML = false;
function linkHTML(numHTML) {
  if (isShowHTML === false) {
    explanationHTML[numHTML].style.opacity = "1";
    explanationHTML[numHTML].style.transform = "scale(1)";
    isShowHTML = true;
  } else {
    explanationHTML[numHTML].style.opacity = "0";
    explanationHTML[numHTML].style.transform = "scale(0)";
    isShowHTML = false;
  }
}

let explanationCSS = Array.from(
  document.getElementsByClassName("explanationCSS")
);
let isShowCSS = false;
function linkCSS(numCSS) {
  if (isShowCSS === false) {
    explanationCSS[numCSS].style.opacity = "1";
    explanationCSS[numCSS].style.transform = "scale(1)";
    isShowCSS = true;
  } else {
    explanationCSS[numCSS].style.opacity = "0";
    explanationCSS[numCSS].style.transform = "scale(0)";
    isShowCSS = false;
  }
}

let explanationProj = Array.from(
  document.getElementsByClassName("explanationProj")
);
let isShowProj = false;
function linkProj(numProj) {
  if (isShowProj === false) {
    explanationProj[numProj].style.opacity = "1";
    explanationProj[numProj].style.transform = "scale(1)";
    isShowProj = true;
  } else {
    explanationProj[numProj].style.opacity = "0";
    explanationProj[numProj].style.transform = "scale(0)";
    isShowProj = false;
  }
}
//Map
document.addEventListener("DOMContentLoaded", (event) => {
  // Координаты вашего местоположения (замените на ваши координаты)
  var lat = 33.000185; // Широта
  var lon = -96.641757; // Долгота

  // Создание карты
  var map = L.map("map").setView([lat, lon], 13);

  // Добавление слоя карты
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
  }).addTo(map);

  // Добавление маркера на карту
  var marker = L.marker([lat, lon])
    .addTo(map)
    .bindPopup("<b>3500 Northstar Rd, Richardson, Texas 75082</b>")
    .openPopup();
});
