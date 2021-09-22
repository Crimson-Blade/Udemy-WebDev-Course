let person = {
  names: "",
  age: 0,
  weight: 0,
  acceptName: function (x) {
    this.names = x;
  },
  acceptAge: function (x) {
    this.age = x;
  },
  acceptWeight: function (x) {
    this.weight = x;
  },
}

//ALTERNATE SYNTAX - shorthand for writting methods within object literals
let animal = {
  names: "",
  age: 0,
  weight: 0,
  acceptName(x) {
    this.names = x;
  },
  acceptAge(x) {
    this.age = x;
  },
  acceptWeight(x) {
    this.weight = x;
  },
}
// However the value of this depends on the invocation context of the function it is used in
//example
let obj = {
  //meow: function() {
  meow() {
    return this; // returns obj
  }
}
function meow() {
  return this; // returns window i.e the default namespace / top level object
}