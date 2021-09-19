let maxNumber = parseInt(prompt("Enter the max number"));
while (!maxNumber) {
    maxNumber = parseInt(prompt("Enter the max number"));

}
const answer = Math.ceil(Math.random() * maxNumber);
let guess = prompt("Enter your guess or 'q' to quit")
let counter = 1;
while (!(guess === 'q')) {
    // console.log(answer);
    // console.log(guess);
    guess = parseInt(guess);
    if (guess === answer) break;
    else if (guess > answer) guess = prompt("To High. Guess again");
    else guess = prompt("Too low. Guess again");
    counter++;
}
console.log(`It took you ${counter} guesses`);