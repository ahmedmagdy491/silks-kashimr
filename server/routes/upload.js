const express = require('express');
const router = express.Router();

// * controllers
const uploadImgs = require('../controllers/Upload/uploadMultipleImg.js');

router.post('/uploadimages', uploadImgs.array('file'), (req, res, next) => {
	res.end();
});
module.exports = router;
