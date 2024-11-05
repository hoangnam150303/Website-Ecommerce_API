const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        name:{type: String, required: true, unique: true},
        image:{type: String, reuqired: true},
        type:{type: String, reuqired: true},
        price:{type: Number, reuqired: true},
        counInStock:{type: Number, required: true},
        ratting: {type: Number, required: true},
        description:{type: String}
    },
    {
        timestamps:true
    }
);

const Product = mongoose.model('Product',productSchema);
module.exports = Product;