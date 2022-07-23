//CONSTANTS
const PORT = 3000

// The following lines are required to define __dirname which doesn't exist in ESM but used to work in CommonJS
import * as url from 'url';
import path from 'path'
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

//Express setup
import express from "express";
const app = express();
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views')) //setting the views folder explicitly incase the CWD isn't the parent folder
app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})
app.use(express.static(path.join(__dirname, '/public')))
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

//Requests
app.get("/food",(req,res)=>{
    res.render("getpost.ejs");

})
app.post('/food',(req,res)=>{
    const postBody = req.body
    console.log(postBody);
})