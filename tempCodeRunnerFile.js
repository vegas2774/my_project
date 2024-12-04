document.getElementById("about").addEventListener("click", function () {
  ArrowUp.currentScreens = 1;
  webV.style.transform = "translateY(-" + currentScreens * 100 + "vh)";
  updateHeadTitle();
});

document.getElementById("screen2").addEventListener("click", function () {
  ArrowUp.currentScreensV = 2;
  webV.style.transform = "translateY(-" + currentScreensV * 100 + "vh)";
  updateHeadTitle();
});

document.getElementById("screen3").addEventListener("click", function () {
  ArrowUp.currentScreensV = 3;
  webV.style.transform = "translateY(-" + currentScreensV * 100 + "vh)";
  updateHeadTitle();
});

document.getElementById("screen4").addEventListener("click", function () {
  ArrowUp.currentScreensV = 4;
  webV.style.transform = "translateY(-" + currentScreensV * 100 + "vh)";
  updateHeadTitle();
});
console.log(currentScreensV);