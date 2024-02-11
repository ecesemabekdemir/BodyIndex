//------- BODY MASS INDEX

// kilo
// size

let weight = Number(prompt("Enter your weight:"));
let size = Number(prompt("Please enter your height in meters:"));

let result = weight / (size * 2);

if (result < 18.5) {
  alert("You are under your ideal weight" + result);
} else if (result >= 18.5 && result <= 24.9) {
  alert("You are under your ideal weight" + result);
} else if (result >= 25 && result <= 29.9) {
  alert("ideal weight " + result);
} else if (result >= 30 && result <= 39.9) {
  alert("You are way above your ideal weight (obese)" + result);
} else if (result >= 40) {
  alert("You are way above your ideal weight(morbidly obese)" + result);
}
