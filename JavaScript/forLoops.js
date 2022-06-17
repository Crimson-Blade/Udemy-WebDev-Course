for (let i = 1; i <= 5; i++) {
    console.log(i * 2);
}
const arr = ['cringe', 'Books', 'Fan Art', 'Speed', 'Hololive'];
for (let item of arr) {
    console.log(item);
}

const activities = [
    ['Work', 9],
    ['Eat', 1],
    ['Commute', 2],
    ['Play Game', 1],
    ['Sleep', 7]
];

// To itterate through this array, we can either use for or for..of loops
console.log("USING FOR LOOP");
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 2; j++)
        console.log(activities[i][j]);
}
console.log("USING FOR..OF LOOP");
for (let row of activities) {
    for (let item of row)
        console.log(item);
}

// We CANNOT itterate over Object Literals using for..of loops. We use for..in loops instead
let objLit = {
    dogs: 10,
    cats: 20,
    cows: 16,
    chicken: 14
}
// animal will contain the keys, not values
for (let animal in objLit)
    console.log(`${animal}: ${objLit[animal]}`);
console.log("Iterating using Object class (converting objlit to array");
for (let animal of Object.values(objLit))
    console.log(animal);