const productsCrud   		= require('../services/productsCrud');
const colors       			= require('colors');
const _p       				= require('../helpers/simpleasync');
const { createResponse }    = require('../utils/responseGenerate');

//create product
module.exports.createProduct = async (req, res,next) => {
	const [error,product] = await _p(productsCrud.createProduct(req.body));

	if (error) {
		console.log(error.red);
		return next(new Error('product creation failed' ));
	}
	return res.status(200).json(createResponse(product, 'product created successfully'));
};

//get all products
module.exports.getProducts = async (req, res,next) => {
	const [error,products] = await _p(productsCrud.getProducts(req.query));

	if(error) {
		console.log(error.red);
		return next(new Error('product fetch error'));
	}
	return res.status(200).json(createResponse(products));
};

//get product by product id
module.exports.getProductById = async (req, res,next) => {
	const [error,product] = await _p(productsCrud.getProductById(req.params.id));

	if(error) {
		console.log(error.red);
		return next(new Error('product fetch error'));
	}

	if(!product) {
		return res.status(200).json(createResponse(null, 'product not found'));
	}
	return res.status(200).json(createResponse(product));
};

//update product by product id
module.exports.updateProductById = async (req, res,next) => {
	let [error,product] = await _p(productsCrud.updateProductById(req.params.id, req.body));

	if(error) {
		console.log(error.red);
		return next(new Error('product access error'));
	}
	if(!product) {
		return res.status(200).json(createResponse(null, 'product not found'));
	}
	return res.status(200).json(createResponse(product, 'product updated successfully'));
};
