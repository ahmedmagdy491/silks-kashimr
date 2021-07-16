const router = require('express').Router();
const {
	createProduct,
	getProducts,
	getCatProduct,
	getProductDetails,
} = require('../controllers/Product/productController');

router.route('/product').post(createProduct).get(getProducts);
router.route('/cat/:slug').get(getCatProduct);
router.route('/product/:slug').get(getProductDetails);

module.exports = router;
