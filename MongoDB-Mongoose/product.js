import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost:27017/shopApp')
.then(()=>{
    console.log("CONNECTION SUCCESS");
})
.catch(err=>{
    console.log("CONNECTION ERROR");
    console.log(err);
})

//creating schema for product
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        min: 0,
    },
    season: {
        type: String,
        enum: ['Spring','Summer','Fall','Winter']
    },
    onSale: {
        type: Boolean,
        default: false
    },
    // categories: [String]
    categories: {
        type: [String],
        default: ['Item']
    },
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            deafult: 0
        }
    }

    ///.... Learn more about vaidators on the docs: lowercase, maxLength, match, enum etc
})
//creating model for product
const Product = new mongoose.model('Product',productSchema);
//creating instance of product
const bike = new Product({ name:"Tree", price: 10, season: 'Spring'});
//saving instance of product
bike.save()
.then(data=>{
    console.log("IT WORKED");
    console.log(data);
})
.catch(err=>{
    console.log("OH NO ERROR");
    console.log(err);
})

// Validating Mongoose updates.. We need to specify the runValidators: true option to run the validators
// and also set new: true to display the updated document instead of the old one
Product.findOneAndUpdate(
    {name: "Tree"}, 
    {name: "Tree", price: -100, season: 'Spring', onSale: true},
    {new: true, runValidators: true}
)
.then(data=>{
    console.log("IT WORKED");
    console.log(data);
})
.catch(err=>{
    console.log("OH NO ERROR");
    console.log(err);
})

