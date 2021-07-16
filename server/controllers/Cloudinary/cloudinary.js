/* const cloudinary = require('cloudinary');
const Async = require('express-async-handler');
// ? config
cloudinary.config({
	cloud_name: process.env.CLOUDINARY_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

exports.upload = Async(async (req, res) => {
	let { image } = req.body;
	let result = await cloudinary.uploader.upload(image, {
		public_id: `${Date.now()}`,
		resource_type: 'auto',
	});
	res.json({
		public_id: result.public_id,
		url: result.secure_url,
	});
});
exports.remove = (req, res) => {
	let image_id = req.body.public_id;

	cloudinary.uploader.destroy(image_id, (err, result) => {
		if (err) return res.json({ success: false, err });
		res.send('ok');
	});
}; */
