const router = require('express').Router();
const {
	loginUser,
	registerUser,
	getUserProfile,
	updateUserProfile,
	deleteUser,
	getUserById,
	updateUser,
	getUsers,
	addToWishList,
} = require('../controllers/User/userController.js');

const { admin, protect } = require('../middlewares/authMiddleware.js');

router.route('/user').get(protect, admin, getUsers);
router.route('/user/register').post(registerUser);
router.route('/user/login').post(loginUser);
router
	.route('/user/profile')
	.get(protect, getUserProfile)
	.put(protect, updateUserProfile);
router
	.route('/user/:id')
	.delete(protect, admin, deleteUser)
	.get(protect, admin, getUserById)
	.put(protect, admin, updateUser);
router.route('/user/wishlist').post(protect, addToWishList);

module.exports = router;
