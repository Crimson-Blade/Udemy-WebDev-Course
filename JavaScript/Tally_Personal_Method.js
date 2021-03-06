function findOdd(A = []) {
  const container = {};
  for (let num of A) {
    container[num] = container[num] + 1 || 1;
  }
  const asArray = Object.entries(container);
  const filteredEntires = asArray.filter(([key, value]) => {
    return value % 2 != 0;
  });
  return filteredEntires[0][0];
}
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
for (let i = 0; i < 100; i++) {
  console.log(findOdd(makeTestArray(300)));
}