import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/Product.css';
import { Card, Avatar } from 'antd';
import { GoSettings } from 'react-icons/go';
import { BsHeart, BsEye } from 'react-icons/bs';
import { RiMoneyEuroCircleLine } from 'react-icons/ri';
import { FiShoppingCart } from 'react-icons/fi';
import IconList from './IconsList';
import Details from './Details';

const { Meta } = Card;

const Product = ({ product, catSlug, productSlug }) => {
	return (
		<div className="parent-product col-md-3">
			<div className="product-card">
				<Link to={`/${catSlug}/${productSlug}`} className="w-100">
					<img
						src={product.image}
						alt={product.name}
						className="product-image w-100"
					/>
				</Link>
				<span className="product-options ">
					<ul>
						<IconList item={<GoSettings />} />
						<IconList item={<FiShoppingCart />} />
						<IconList item={<BsHeart />} />
						<IconList item={<BsEye />} />
					</ul>
				</span>
			</div>
			<div className="mt-2">
				<Details product={product} />
			</div>
		</div>
	);
};

export default Product;
