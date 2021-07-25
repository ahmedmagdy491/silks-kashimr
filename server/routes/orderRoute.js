const router = require('express').Router();
const {
	addOrderItems,
	getOrderById,
	updateOrderToPaid,
	updateOrderToDelivered,
	getAllOrders,
	getMyOrders,
	addNote,
} = require('../controllers/Order/orderController');
const { protect, admin } = require('../middlewares/authMiddleware');

router
	.route('/orders')
	.post(protect, addOrderItems)
	.get(protect, admin, getAllOrders);
router.route('/orders/myorders').get(protect, admin, getMyOrders);
router.route('/orders/:id').get(protect, getOrderById);
router.route('/orders/:id/pay').put(protect, admin, updateOrderToPaid);
router.route('/orders/:id/deliver').put(protect, admin, updateOrderToDelivered);
router.route('/orders/:id/note').put(protect, addNote);

module.exports = router;
