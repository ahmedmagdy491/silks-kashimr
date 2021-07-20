import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../assets/Product.css';
import { GoSettings } from 'react-icons/go';
import { BsHeart, BsEye } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import IconList from './IconsList';
import Details from './Details';
import { Image, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToWishListAction } from '../../../actions/userActions';

const Product = ({ product, catSlug }) => {
	const [src, setSrc] = useState(product.images[0]);
	const history = useHistory();
	const addItem = () => {
		history.push(`/cart/${product.slug}?quantity=${1}`);
	};
	const showDetails = () => {
		history.push(`/${catSlug}/${product.slug}`);
	};
	const dispatch = useDispatch();
	const addToWishList = () => {
		dispatch(addToWishListAction(product._id));
	};
	return (
		<Col xs={12} sm={6} md={4} xl={3} className="product-card">
			<Image
				className="product-image w-100 h-75"
				src={src}
				alt={product.name}
				onMouseEnter={() => setSrc(product.images[1])}
				onMouseLeave={() => setSrc(product.images[0])}
				onClick={showDetails}
			/>
			<span className="product-options ">
				<ul>
					<IconList item={<GoSettings />} />
					<Link className="add-to-cart" onClick={addItem}>
						<IconList
							item={<FiShoppingCart />}
							className="shop-cart w-100"
						/>
					</Link>
					<IconList item={<BsHeart onClick={addToWishList} />} />
					<IconList item={<BsEye />} />
				</ul>
			</span>

			<Details product={product} />
		</Col>
	);
};

export default Product;
