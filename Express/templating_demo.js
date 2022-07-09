import express from 'express'
import path from 'path'
// The following lines are required to define __dirname which doesn't exist in ESM but used to work in CommonJS
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views')) //setting the views folder explicitly incase the CWD isn't the parent folder
app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})

//get requests

app.get("/",(req,res)=>{
    res.render("home")
})
app.get('/random',(req,res)=>{
    let randomNumber = parseInt(Math.random()*100)
    res.render('rand',{randomNumber}); // here, both the key and value in the object are the same hence ':' is not required
})
app.get('/r/:subreddit',(req,res)=>{
    let { subreddit } = req.params;
    res.render('subreddit', {subreddit: subreddit.toLowerCase()})
})
