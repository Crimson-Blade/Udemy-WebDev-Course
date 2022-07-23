import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/test')
.catch(err => console.log(err))
.then(()=>{
    console.log("CONNECTION SUCCESS");
})

