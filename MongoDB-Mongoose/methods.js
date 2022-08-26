import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost:27017/methodDemo')
.then(()=>{
    console.log("CONNECTION SUCCESS");
})
.catch(err=>{
    console.log("CONNECTION ERROR");
    console.log(err);
})

//creating schema
const todoSchema = new mongoose.Schema({
    name: {
        type: Number,
        required: true,
    },
    doDate: {
        type: Date,
        default: Date.now
    }
})
const l = Date.
