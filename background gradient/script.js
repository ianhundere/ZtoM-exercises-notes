const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
const bodygradient = window.getComputedStyle(body).background;

// function to change colors on user input
function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  css.textContent = body.style.background + ";";
}

// function to generate random hex values
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  const rand1 = "#",
    rand2 = "#";
  for (var i = 0; i < 6; i++) {
    rand1 += letters[Math.floor(Math.random() * 16)];
    rand2 += letters[Math.floor(Math.random() * 16)];
  }
  return setRandom(rand1, rand2);
}

// function to set random colors
function setRandom(num1, num2) {
  body.style.background =
    "linear-gradient(to right, " + num1 + ", " + num2 + ")";
  color1.value = num1;
  color2.value = num2;
  css.textContent = body.style.background;
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

body.onload = setGradient;

btn.onclick = getRandomColor;

// console.log(getRandomColor);
