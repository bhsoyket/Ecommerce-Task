const { check }    = require('express-validator');

module.exports.orderValidator = [
	check('products')
		.optional().exists({ checkNull: true, checkFalsy: true }).withMessage('Name can\'t be empty').bail().isString().withMessage('Products id must be a string'),
	check('totalPrice')
		.optional().exists({ checkNull: true, checkFalsy: true }).bail().isString().withMessage('Total price must be a string')
];

