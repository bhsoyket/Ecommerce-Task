const { check }    = require('express-validator');

module.exports.productsValidator = [
	check('name')
		.exists({ checkNull: true, checkFalsy: true }).withMessage('Name can\'t be empty').bail()
		.isString().withMessage('Name must be a string'),
	check('image')
		.optional().exists({ checkNull: true, checkFalsy: true }).bail().isString().withMessage('Image must be a string'),
	check('unit')
		.optional().exists({ checkNull: true, checkFalsy: true }).bail().isString().withMessage('Unit must be a string'),
	check('price')
		.optional().exists({ checkNull: true, checkFalsy: true }).bail().isNumeric().withMessage('Price must be a string'),
];

