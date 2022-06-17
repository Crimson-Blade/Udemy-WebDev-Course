import express from 'express'
const app  = express();
let PORT = 3000
app.use(()=> {
    console.log("Recieved a request");
})
app.listen(PORT,()=>{
    console.log(`Listening on ${PORT}`);
})