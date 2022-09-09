//constants
const express = require('express');
const app = express();
const path = require('path');
const PORT = 3001;
const mongoose = require('mongoose');
const methodOverride = require('method-override')
const Product = require('./models/product');
// const { urlencoded } = require('express');
// const { readSync } = require('fs');

// Setting Views and Public folders explicitly incase the CWD isn't the parent folder
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))
app.use(express.static(path.join(__dirname, '/public')))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(methodOverride('_method'))

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})
// Connecting to MongoDB
mongoose.connect('mongodb://localhost:27017/farmStand')
.then(()=>{
    console.log('Connected to Mongo');
}) 
.catch((err)=>{
    console.log(err);
})
// Pulling list of categories for ejs
const categories = Product.schema.path('category').enumValues
// Implementing CRUD using Mongoose and Express
// index
app.get('/products', async (req,res) => {
    console.log("GET /products");
    const Products = await Product.find({});
    res.render('products/index',{Products})
})
// show`
app.get('/product/:id',async (req,res)=>{
    console.log("GET /products/show");
    const product = await Product.findById( req.params.id);
    res.render('products/show', {product});

})
// new
app.get('/products/new', async (req,res)=>{
    res.render('products/new', {categories});
})
// new
app.post('/products', async (req,res)=>{
    console.log(req.body);
    let product;
    if(req.body.name){
        product = new Product(req.body);
        await product.save();
        res.redirect(`product/${product._id}`);
    }
    else
        
    res.redirect('products/new')
})
// update
app.get('/product/:id/update', async (req,res) =>{
    const product = await Product.findById(req.params.id);
    res.render('products/update', {product, categories});
})
app.put('/product/:id', async (req,res)=>{
    const data = req.body;
    await Product.findOneAndUpdate({_id:req.params.id},data,{runValidators:true, new:true})
    res.redirect(`/product/${req.params.id}`)
})
// delete
app.delete('/product/:id/', async (req,res)=>{
    console.log('here!');
     await Product.findOneAndDelete({_id:req.params.id})
    res.redirect('/products')
})
app.get('*', (req,res)=>{
    res.sendStatus(404);
})  