import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost:27017/test')
.then(()=>{
    console.log("CONNECTION SUCCESS");
})
.catch(err=>{
    console.log("CONNECTION ERROR");
    console.log(err);
})

//creating schema
const personSchema = new mongoose.Schema({
        firstName: String,
        lastName: String
})
// creating virtual
personSchema.virtual('fullName').get(
    function(){
        return this.firstName + ' ' + this.lastName;
    }
).set(
    function(name){
        const parts = name.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
})
//creating model
const Person = new mongoose.model('Person',personSchema);

// creating instance of model
const person = new Person({firstName: "John", lastName: "Doe"});
person.save();
// get full name
console.log(person.fullName);
// set full name
console.log(person.fullName = "Jane Doe");
//get full name
console.log(person.fullName);