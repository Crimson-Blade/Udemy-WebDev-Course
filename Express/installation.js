import express from 'express'
const app  = express();
let PORT = 3000
app.listen(PORT,()=>{
    console.log(`Listening on ${PORT}`);
})
app.get("/r/:subreddit/",(req,res)=>{
    console.log(req.params)
    let {  subreddit, postSort } = req.params;
    res.send(`Hello, browsing on ${subreddit}`)

})
app.get("/r/:subreddit/:postSort",(req,res)=>{
    console.log(req.params)
    let {  subreddit, postSort } = req.params;
    res.send(`Hello, browsing on ${subreddit} and posts are ordered by ${postSort}`)

})
app.get("/search",(req,res)=>{
    console.log(req.query)
    let { q } = req.query;
    if(q)
    res.send(`Showing results for query: ${q}`)
    else
    res.send(`No results for no search`)
})
app.get("*",(req,res)=>{
    res.status(404).send("404 - Not Found")
})