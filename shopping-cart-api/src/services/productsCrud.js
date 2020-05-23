const Products 	= require('../models/Products');
const _p 		= require('../helpers/simpleasync');

//create product
module.exports.createProduct = async productInfo => {    
	return new Promise(async (resolve, reject) => {
		const [error, saveProductInfo] = await _p(Products.create(productInfo));

		if (!error) {
			return resolve(saveProductInfo);
		} else {
			return reject(error.message);
		}
	});
};

//get all products
module.exports.getProducts = async query => {
	return new Promise(async (resolve, reject) => {
		const pageNum = query.page ? query.page : 1;
		const Limit = 10;
		const skip = Limit * (pageNum - 1);

		if(query.page) delete query.page;

		const [error, products] = await _p(Products.find( query )
			.limit(Limit)
			.skip(skip)
			.sort({createdAt: 'desc'}));

		if(!error) {
			return resolve(products);
		} else {
			return reject(error.message);
		}
	});
};

//get product by product id
module.exports.getProductById = async id => {
	return new Promise(async (resolve, reject) => {
		const [error, product] = await _p(Products.findOne({ _id: id }));

		if(!error) {
			return resolve(product);
		} else {
			return reject(error.message);
		}
	});
};

//update product by product id
module.exports.updateProductById = async (id, productInfo) => {
	return new Promise(async (resolve, reject) => {
		const [error, updateProductInfo] = await _p(Products.findOneAndUpdate({ _id: id }, productInfo, { new: true	}));

		if (!error) {
			return resolve(updateProductInfo);
		} else {
			return reject(error.message);
		}
	});
};
