const router				=	require('express').Router();
const health				=	require('./controllers/health');
const productsController	=	require('./controllers/productsController');
const orderController	    =	require('./controllers/orderController');

const productsValidator		=	require('./middlewares/productsValidator');
const orderValidator		=	require('./middlewares/orderValidator');
const { checkInvalid }		=	require('./middlewares/validationReject');

// System Routes
router.get('/', health.loopback);
router.get('/health', health.check);

// Order Routes
router.post('/api/order', orderValidator.orderValidator, checkInvalid, orderController.createOrder);
router.get('/api/order', orderController.getOrders);
router.get('/api/order/:id', orderController.getOrderById);
router.put('/api/order/:id', orderController.updateOrderById);

// Product Routes
router.post('/api/product', productsValidator.productsValidator, checkInvalid, productsController.createProduct);
router.get('/api/product', productsController.getProducts);
router.get('/api/product/:id', productsController.getProductById);
router.put('/api/product/:id', productsController.updateProductById);

module.exports = router;
