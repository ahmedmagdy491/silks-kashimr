const multer = require('multer');
const sharp = require('sharp');
const { v4: uuidv4 } = require('uuid');
const path = require('path');

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, path.join(__dirname, '..', '..', '/public/uploads'));
	},
	filename: function (req, file, cb) {
		cb(null, `${file.originalname}${path.extname(file.originalname)}`);
	},
});

const uploadImgs = multer({
	limits: {
		fileSize: 10_000_000,
	},
	fileFilter(req, file, cb) {
		if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
			return cb(new Error('Please upload a png, jpg or jpeg image.'));
		}

		cb(undefined, true);
	},
	storage: storage,
});

module.exports = uploadImgs;
