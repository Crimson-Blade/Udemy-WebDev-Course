const button = document.querySelector('button');
const h1 = document.querySelector('h1');
button.addEventListener('click', function () {
  let colorArray = getRandomColour();
  let rgbText = `rgb(${colorArray[0]},${colorArray[1]},${colorArray[2]})`;
  h1.innerText = rgbText;
  document.body.style.transition = "background-color 1s";
  button.style.transition = "background-color 1s";
  document.body.style.backgroundColor = rgbText;
  button.style.backgroundColor = `rgb(${colorArray[0] + 25},${colorArray[1] + 25},${colorArray[2] + 25})`;

  //changing text color of h1 if too dark
  if (colorArray[0] + colorArray[1] + colorArray[2] < 255) {
    h1.style.color = 'white';
  }
})


function getRandomColour() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return [r, g, b];
}