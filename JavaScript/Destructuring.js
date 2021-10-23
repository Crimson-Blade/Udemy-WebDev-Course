function input([first, second, ...rest], ...notInAnArray) {
  console.log(first);
  console.log(second);
  console.log(rest);
  console.log(`Stuff that isn't in an array: ${notInAnArray}`);
}

let sampleObject = {
  initialisingValue: 2231,
  secretCode: 6969,
  selfDestructCode: 1234,
  revealSecretCode() {
    return this.secretCode();
  }
}

let collector = ({ secretCode: password, selfDestructCode: delNumber = 0 } = {}) => {
  return password + delNumber;
}