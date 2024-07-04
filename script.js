function debounce(func, wait) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      func.apply(context, args);
    }, wait);
  };
}

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

function draw(event) {
  const x = event.clientX;
  const y = event.clientY;
  context.fillStyle = "red";
  context.beginPath();
  context.arc(x, y, 5, 0, Math.PI * 2, true);
  context.fill();
}

canvas.addEventListener("mousemove", debounce(draw, 10000)); // 100ms задержка
