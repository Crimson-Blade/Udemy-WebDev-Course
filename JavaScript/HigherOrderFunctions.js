
// Passing a function to a function that accepts a function
function saySomething() {
  console.log("Hello, i'm running");
}

function callTwice(func) {
  func();
  func();
}

// calling callTwice and passing a funciton to it
callTwice(saySomething);

//making a function return a function

function makeLifeWorse() {
  let randValue = Math.ceil(Math.random() * 2);
  console.log(randValue);
  if (randValue > 1) {
    return function () {
      console.log("You win the lottery! CONGRATS");
    }
  }
  else {
    return function () {
      console.log("YOU HAVE A VIRAUS ON YAUR PC");
    }
  }
}
// assigning the returned function to a variable
const accceptedFunction = makeLifeWorse();
// running the function
accceptedFunction();

//This is useful to make functions that are tailor made for specific values(without having to pass these values as arguments everytime it's called)
function makeBetweenFunction(min, max) {
  return function (num) {
    return num >= min && num <= max;
  }
}
//example usage
const isBetween = makeBetweenFunction(1, 6);
isBetween(4); //returns true





