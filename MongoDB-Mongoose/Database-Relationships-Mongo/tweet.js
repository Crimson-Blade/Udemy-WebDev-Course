//? Demonstration of One to Bajillions
//? Demonstration of One to Many

import mongoose from 'mongoose';
const { Schema } = mongoose;
mongoose.connect('mongodb://localhost:27017/database-relationships')
    .then(() => {
        console.log("CONNECTION SUCCESS");
    })
    .catch(err => {
        console.log("CONNECTION ERROR");
        console.log(err);
    })
//creating a schema for Products
const userSchema = new Schema({
    username: String,
    age: Number
});
const User = new mongoose.model('User', userSchema);
// const tempUser = new User({username:"John",age:20});
// tempUser.save();
//creating a schema for Farms
const tweetSchema = new Schema({
    text: String,
    likes: Number,
    user: { type: Schema.Types.ObjectId, ref: 'User' }
})
const Tweet = new mongoose.model('tweet', tweetSchema);
//! Above, we are setting the products value type to that of the inbuilt mongoose type, ObjectID.

//Make Tweets
const makeTweets = async () =>{
    const user = await User.findOne({username:"John"});
    const tweet1 = new Tweet({text:"Hello World",likes:0});
    tweet1.user = user;
    tweet1.save();
    const tweet2 = new Tweet({text:"Hello World Again",likes:0});
    tweet2.user = user;
    tweet2.save();
    const tweet3 = new Tweet({text:"Hello World Again Again",likes:0});
    tweet3.user = user;
    tweet3.save();
}
// makeTweets();
//! Even though we're assigning the entire user to the user reference in the tweet, mongoose will only take the ObjectID.
// Tweet.find({text:"Hello World"}).then(farm => console.log(farm));
Tweet.find({}).populate('user','username').then(farm => console.log(farm));
//! Here, populate takes the name of the field to be populated and the fields of that object.