const mongoose 		= require('mongoose');
const { Schema } 	= mongoose;
const objectID      = Schema.ObjectId;
mongoose.Promise 	= global.Promise;

const orderSchema = new Schema({
	products: [{
		type: objectID,
		ref: 'Products'
	}],
	totalPrice: {
		type: Number
	}
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);


