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
