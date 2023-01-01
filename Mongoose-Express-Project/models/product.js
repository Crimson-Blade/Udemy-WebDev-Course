const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        min: 0
    },
    category: {
        type: String,
        enum: ['vegetable', 'dairy', 'fruit'],
        lowercase: true
    },
    farm: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Farm'
    }
})

const Product = new mongoose.model("Product", productSchema);

module.exports = Product;
