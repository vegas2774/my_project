let screens = Array.from(document.getElementsByClassName("scrin"));
let numberScreens = screens.length;
let web = document.getElementById("web");
let currentScreens = 0;
let headTitle = document.getElementById("headTitle");
let nav = document.getElementById("inf1");

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

window.addEventListener("wheel", function (event) {
  if (event.deltaY > 0) {
    if (currentScreens < numberScreens) {
      currentScreens++;
      web.style.left = -currentScreens * 100 + "vw";
      headTitle.style.transition = 0.2 + "s";
      headTitle.style.top = "0%";
    }
  } else if (event.deltaY < 0) {
    if (currentScreens > 0) {
      currentScreens--;
      web.style.left = -currentScreens * 100 + "vw";
      headTitle.style.transition = 0.2 + "s";
      headTitle.style.top = "0%";
    }
  }
  if (currentScreens == 0) {
    headTitle.style.transition = 0.2 + "s";
    headTitle.style.top = "45%";
  }
});

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

// создаем изменение размеров нашей области при наведении мыши
let targetMouse = document.getElementById("note1");
let targetMouse1 = document.getElementById("noteLearning");

targetMouse.addEventListener("mouseover", function () {
  targetMouse.style.width = "640px";
  targetMouse.style.transition = "0.4s";
  targetMouse.style.fontSize = "24px";
});
targetMouse.addEventListener("mouseout", function () {
  targetMouse.style.width = "320px";
  targetMouse.style.transition = "0.4s";
  targetMouse.style.fontSize = "18px";
});

targetMouse1.addEventListener("mouseover", function () {
  targetMouse1.style.width = "640px";
  targetMouse1.style.transition = "0.4s";
  targetMouse1.style.fontSize = "24px";
});
targetMouse1.addEventListener("mouseout", function () {
  targetMouse1.style.width = "320px";
  targetMouse1.style.transition = "0.4s";
  targetMouse1.style.fontSize = "18px";
});

// Создаем обращение к ссылке после нажатия на которую будет изменяться текст контент

// let textInf = 0;
// let appeal = document.getElementById("noteJS");

// function linkAbout(num) {
//   textInf = num;
//   appeal.style.border = "2px solid rgb(250, 1, 1)";
//   appeal.style.padding = "20px";
//   appeal.style.margin = "40px 20px";
//   appeal.style.backgroundColor = "yellow";
//   appeal.style.borderRadius = "8px";
//   appeal.style.width = "640px";
//   appeal.style.width = "320px";
//   appeal.style = textAlign = "left";
// }
// console.log(textInf);
