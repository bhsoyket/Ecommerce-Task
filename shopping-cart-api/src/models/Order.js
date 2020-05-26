const mongoose 		= require('mongoose');
const { Schema } 	= mongoose;
const objectID      = Schema.ObjectId;
mongoose.Promise 	= global.Promise;

const orderSchema = new Schema({
	products: {
		type: Array,
		"default" : []
	},
	totalPrice: {
		type: Number
	}
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);


