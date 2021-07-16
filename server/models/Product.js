const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			trim: true,
			required: true,
			maxlength: 50,
			text: true,
		},
		slug: {
			type: String,
			unique: true,
			lowercase: true,
			index: true,
			required: true,
		},
		description: {
			type: String,
			trim: true,
			required: true,
			// maxlength: 150,
		},
		price: {
			type: Number,
			required: true,
			maxlength: 2000,
			text: true,
		},
		category: {
			type: mongoose.Schema.Types.String,
			ref: 'Category',
			required: true,
		},

		quantity: { type: Number, required: true },
		sold: {
			type: Number,
			default: 0,
		},

		shipping: {
			type: String,
			enum: ['Yes', 'No'],
			required: true,
		},
		color: {
			type: String,
			required: true,
		},
		brand: {
			type: String,
			required: true,
		},
		images: {
			type: Array,
		},
		ratings: [
			{
				star: Number,
				postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
			},
		],
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('Product', productSchema);
