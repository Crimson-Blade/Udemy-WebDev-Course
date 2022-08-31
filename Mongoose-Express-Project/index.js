//constants
const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const mongoose = require('mongoose');

// Setting Views and Public folders explicitly incase the CWD isn't the parent folder
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))
app.use(express.static(path.join(__dirname, '/public')))

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})

// Connecting to MongoDB
mongoose.connect('mongodb://localhost:27017/FarmDB')
.then(()=>{
    console.log('Connected to Mongo');
})
.catch((err)=>{
    console.log(err);
})
