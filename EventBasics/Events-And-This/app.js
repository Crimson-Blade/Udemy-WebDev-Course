const buttons = document.querySelectorAll("button");
const h1s = document.querySelectorAll("h1");
for (let button of buttons) {
  button.addEventListener('click', colorzise)
}
for (let h1 of h1s) {
  h1.addEventListener('click', colorzise)
}
function colorzise() {
  this.style.backgroundColor = getRandomColour();
  this.style.color = getRandomColour();
}
function getRandomColour() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
}