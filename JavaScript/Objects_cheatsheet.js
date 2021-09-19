// To make an object literal:
const dog = {
    name: "Rusty",
    breed: "unknown",
    isAlive: false,
    age: 7
}
// All keys will be turned into strings!

// To retrieve a value:
dog.age; //7
dog["age"]; //7

//updating values
dog.breed = "mutt";
dog["age"] = 8;

//Arrays are also similar to object literals( where each entry has a key identical to it's index) and can host object literals
let listOfCustomers = [
    {
        name: "Lance",
        DOB: "05/05/2003",
        productType: "Basic"
    },
    {
        name: "Steve",
        DOB: "02/06/2103",
        productType: "Premium"
    },
    {
        name: "Liana",
        DOB: "08/02/1903",
        productType: "Free"
    },
    {
        name: "Shane",
        DOB: "25/07/2013",
        productType: "Enterprise"
    }
]
console.log(listOfCustomers[1].name, listOfCustomers['1']['name']);
listOfCustomers[1].name; //steve
listOfCustomers['1']['name']; //steve

//Converting Object Literals to Arrays
console.log(Object.keys(listOfCustomers)); //1D array of keys
console.log(Object.values(listOfCustomers)); //1D array of values
console.log(Object.entries(listOfCustomers)); //2D array with keys and values