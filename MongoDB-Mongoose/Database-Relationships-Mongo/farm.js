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
const productSchema = new Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ['Spring', 'Summer', 'Fall', 'Winter']
    }
});
const Product = new mongoose.model('Product', productSchema);
//creating a schema for Farms
const farmSchema = new Schema({
    name: String,
    city: String,
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
})
//! Above, we are setting the products value type to that of the inbuilt mongoose type, ObjectID.
const Farm = new mongoose.model('Farm', farmSchema);
// const tempProduct = new Product({
//     name:"Tomato",
//     price: 6.99,
//     season:"Summer"
// });
// await tempProduct.save();
// eslint-disable-next-line no-unused-vars
const makeFarm = async () => {
    const tomato = await Product.findOne({ name: "Tomato" });
    const tempFarm = new Farm({
        name: "Hungry Farms",
        city: "Margao, GA"
    });
    // console.log(tomato);
    tempFarm.products.push(tomato)
    // console.log(tempFarm);
    // tempFarm.save();
}
// makeFarm();
//! Even though we're pushing the entire product object to Farm.products array, mongoose will only take the ObjectID.

Farm.findOne({name:"Hungry Farms"}).then(farm => console.log(farm));
Farm.findOne({name:"Hungry Farms"}).populate('products').then(farm => console.log(farm));