const Product = require('../../models/Product');
const Async = require('express-async-handler');
const slugify = require('slugify');

const createProduct = Async(async (req, res) => {
	req.body.slug = slugify(req.body.name);
	res.json(await new Product(req.body).save());
});

const getProducts = Async(async (req, res) => {
	let products = await Product.find()
		.sort([['cratedAt', 'desc']])
		.exec();
	res.json(products);
});

const getCatProduct = Async(async (req, res) => {
	let { slug } = req.params;

	res.json(
		await Product.find({ category: slug })
			.sort([['cratedAt', 'desc']])
			.exec()
	);
});
const getProductDetails = Async(async (req, res) => {
	const { slug } = req.params;
	res.json(await Product.findOne({ slug }));
});
module.exports = {
	createProduct,
	getProducts,
	getCatProduct,
	getProductDetails,
};
