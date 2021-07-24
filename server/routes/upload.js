const express = require('express');
const router = express.Router();

const { protect, admin } = require('../middlewares/authMiddleware');

// * controllers
const uploadImgs = require('../controllers/Upload/uploadMultipleImg.js');

router.post('/uploadimages', uploadImgs.array('file'), (req, res, next) => {
	const paths = req.files.map((f) => `/${f.path}`);
	console.log(paths);

	res.send(paths);
});
module.exports = router;
