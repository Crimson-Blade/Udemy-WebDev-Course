async function changeBackgroundColorAsync(color, delay) {
  setTimeout(() => {
    document.body.style.backgroundColor = color;
    return 0;
  }, delay)
  return "ha";
}
function changeBackgroundColorPromise(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
    }, delay)
    resolve();
  });
}
async function raindbowAsync() {
  await changeBackgroundColorAsync("red", 1000);
  await changeBackgroundColorAsync("orange", 1000);
  await changeBackgroundColorAsync("yellow", 1000);
  await changeBackgroundColorAsync("green", 1000);
  await changeBackgroundColorAsync("blue", 1000);
  await changeBackgroundColorAsync("indigo", 1000);
  await changeBackgroundColorAsync("violet", 1000);
  return "Complete!";
}
async function raindbowPromise() {
  await changeBackgroundColorPromise("red", 1000);
  await changeBackgroundColorPromise("orange", 1000);
  await changeBackgroundColorPromise("yellow", 1000);
  await changeBackgroundColorPromise("green", 1000);
  await changeBackgroundColorPromise("blue", 1000);
  await changeBackgroundColorPromise("indigo", 1000);
  await changeBackgroundColorPromise("violet", 1000);
  return "Complete!";
}
