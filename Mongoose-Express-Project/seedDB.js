const mongoose = require('mongoose');
const Product = require('./models/product')

// Connecting to MongoDB
mongoose.connect('mongodb://localhost:27017/FarmDB')
.then(()=>{
    console.log('Connected to Mongo');
})
.catch((err)=>{
    console.log(err);
})

// Seeding Database

Product.insertMany([
    
])