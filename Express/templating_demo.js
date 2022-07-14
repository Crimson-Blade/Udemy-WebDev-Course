import express from 'express'
const app = express();

// ES module doesn't support importing json files yet so we need to create the 'require' function and use that
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const redditData = require("./data.json")

// The following lines are required to define __dirname which doesn't exist in ESM but used to work in CommonJS
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//constants
const PORT = 3000;

//Express setup
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views')) //setting the views folder explicitly incase the CWD isn't the parent folder
app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})
app.use(express.static(path.join(__dirname, '/public')))

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
    let data = redditData[subreddit]
    if(data){
        let online = parseInt(Math.random()*data.subscribers)
        data.online = online;
        res.render('subreddit', {...data})
    }
    else {
    res.status(404).render('pageNotFound')
    
    }
    })
app.get('/api/random',(req,res)=>{
    let randomNumber = parseInt(Math.random()*100)
    res.send({randomNumber}); // here, both the key and value in the object are the same hence ':' is not required
})
