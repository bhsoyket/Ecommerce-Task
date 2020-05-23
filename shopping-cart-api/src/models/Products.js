const mongoose 		= require('mongoose'); //const db = require('../db/db');
const { Schema } 	= mongoose;
const objectID      = Schema.ObjectId;
mongoose.Promise 	= global.Promise;

const productsSchema = new Schema({
    name: {
        type: String,
        required: 'Please enter a category name',
        trim: true
    },
    image: {
        type: String,
        trim: true
    },
    unit: {
        type: String,
        trim: true
    },
    price: {
        type: Number
    }
}, { timestamps: true });

module.exports = mongoose.model('Products', productsSchema);
