const router = require('express').Router();

const {
	createCategory,
	getCategories,
	updateCategory,
	removeCategory,
} = require('../controllers/Category/categoryController');

router.route('/category').post(createCategory).get(getCategories);
router.route('/category/:slug').put(updateCategory).delete(removeCategory);

module.exports = router;
