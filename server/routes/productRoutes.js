const router = require('express').Router();
const {
	createProduct,
	getProducts,
	getCatProduct,
	getProductDetails,
	createProductReview,
} = require('../controllers/Product/productController');
const { protect } = require('../middlewares/authMiddleware');
router.route('/product').post(createProduct).get(getProducts);
router.route('/cat/:slug').get(getCatProduct);
router.route('/product/:slug').get(getProductDetails);
router.route('/product/:slug/reviews').post(protect, createProductReview);

module.exports = router;
