function makeTestArray(times) {
  const arr1 = [];
  //making sorted array
  for (let j = 0; j < times; j++) {
    for (let i = 1; i <= 20; i++) {
      arr1.push(i);
    }
  }
  arr1.push(Math.ceil(Math.random() * 20));
  //obscuring array
  arr1.sort(() => Math.random() > 0.5 ? 1 : -1);

  return arr1;
}
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
for (let i = 0; i < 100; i++) {
  console.log(findOdd(makeTestArray(300)));
}
