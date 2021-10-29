// Type 1
const buttonV2 = document.querySelector("#v2");
buttonV2.onclick = () => {
  alert("You clicked v2!!");
  buttonV2.style.color = "red";
}
// Type 2
buttonV2.onmouseover = () => {
  buttonV2.style.transition = "margin-right 2s, color 1s, padding 2s";
  buttonV2.style.color = "green";
  buttonV2.style.marginRight = "20px";
  buttonV2.style.padding = "50px";
}
// Type 3
const buttonV3 = document.querySelector("#v3");
buttonV3.addEventListener('click', () => {
  alert("Clicked! (check log)");
})

function twist() {
  console.log("twist!!!");
}
function shout() {
  console.log("shout!!!");
}
//options can be passed in using an options object
buttonV3.addEventListener('click', twist, { once: true });
buttonV3.addEventListener('click', shout);
