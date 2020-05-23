const Order	= require('../models/Order');
const _p	= require('../helpers/simpleasync');

//create order
module.exports.createOrder = async orderInfo => {    
	return new Promise(async (resolve, reject) => {
		const [error, saveOrderInfo] = await _p(Order.create(orderInfo));

		if (!error) {
			return resolve(saveOrderInfo);
		} else {
			return reject(error.message);
		}
	});
};

//get all orders
module.exports.getOrders = async query => {
	return new Promise(async (resolve, reject) => {
		const pageNum = query.page ? query.page : 1;
		const Limit = 10;
		const skip = Limit * (pageNum - 1);

		if(query.page) delete query.page;

		const [error, orders] = await _p(Order.find( query )
			.limit(Limit)
			.skip(skip)
			.sort({createdAt: 'desc'}));

		if(!error) {
			return resolve(orders);
		} else {
			return reject(error.message);
		}
	});
};

//get order by order id
module.exports.getOrderById = async id => {
	return new Promise(async (resolve, reject) => {
		const [error, order] = await _p(Order.findOne({ _id: id }));

		if(!error) {
			return resolve(order);
		} else {
			return reject(error.message);
		}
	});
};

//update order by order id
module.exports.updateOrderById = async (id, orderInfo) => {
	return new Promise(async (resolve, reject) => {
		const [error, updateOrderInfo] = await _p(Order.findOneAndUpdate({ _id: id }, orderInfo, { new: true	}));

		if (!error) {
			return resolve(updateOrderInfo);
		} else {
			return reject(error.message);
		}
	});
};
