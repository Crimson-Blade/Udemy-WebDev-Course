const mongoose = require('mongoose');

const farmSchema = new mongoose.Schema({
  name:{
    type: String,
    required: [true, "Farm must have a name"]
  },
  city:{
    type: String,
    required: [true, "Farm must have a city"]
  },
  email:{
    type: String,
    required: [true, "Farm must have an email"],
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$  , 'Please fill a valid email address']
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product'
    }
  ]
})

const Farm = mongoose.model('Farm', farmSchema);
 
module.exports = Farm;