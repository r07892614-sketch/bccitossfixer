let t = 60;
const timer = document.getElementById("timer");

const counter = setInterval(() => {
  t--;
  timer.textContent = t;

  if (t <= 0) {
    clearInterval(counter);
    timer.textContent = "Ready!";
  }
}, 1000);

// Fade animation for button
const btn = document.getElementById("joinBtn");
let toggle = true;

setInterval(() => {
  btn.style.opacity = toggle ? "0.85" : "1";
  toggle = !toggle;
}, 1200);

// Redirect to Telegram
btn.addEventListener("click", () => {
  window.open("https://t.me/+XEC2LKNIvQtiZmY9", "_blank");
});
