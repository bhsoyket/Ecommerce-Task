const { check }    = require('express-validator');

module.exports.orderValidator = [
	check('products')
		.optional().exists({ checkNull: true, checkFalsy: true }).withMessage('Name can\'t be empty').bail().isArray().withMessage('Products id must be a array'),
	check('totalPrice')
		.optional().exists({ checkNull: true, checkFalsy: true }).bail().isNumeric().withMessage('Total price must be a number')
];

