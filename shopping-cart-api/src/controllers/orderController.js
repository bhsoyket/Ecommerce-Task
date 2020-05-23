const orderCrud   			= require('../services/orderCrud');
const colors       			= require('colors');
const _p       				= require('../helpers/simpleasync');
const { createResponse }    = require('../utils/responseGenerate');

//create order: 
module.exports.createOrder = async (req, res,next) => {
	const [error,order] = await _p(orderCrud.createOrder(req.body));

	if (error) {
		console.log(error.red);
		return next(new Error('order creation failed' ));
	}
	
	return res.status(200).json(createResponse({token}, 'order created successfully'));
};

//get all orders
module.exports.getOrders = async (req, res,next) => {
	const [error,orders] = await _p(orderCrud.getOrders(req.query));

	if(error) {
		console.log(error.red);
		return next(new Error('order fetch error'));
	}
	return res.status(200).json(createResponse(orders));
};

//get order by order id
module.exports.getOrderById = async (req, res,next) => {
	const [error,order] = await _p(orderCrud.getOrderById(req.params.id));

	if(error) {
		console.log(error.red);
		return next(new Error('order fetch error'));
	}

	if(!order) {
		return res.status(200).json(createResponse(null, 'order not found'));
	}
	return res.status(200).json(createResponse(order));
};

//update order by order id
module.exports.updateOrderById = async (req, res,next) => {
	let [error,order] = await _p(orderCrud.updateOrderById(req.params.id, req.body));

	if(error) {
		console.log(error.red);
		return next(new Error('order access error'));
	}
	if(!order) {
		return res.status(200).json(createResponse(null, 'order not found'));
	}
	return res.status(200).json(createResponse(order, 'order updated successfully'));
};
