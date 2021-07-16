import React, { Fragment, useState } from 'react';
import { Alert, Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { FaCheckCircle, FaEuroSign } from 'react-icons/fa';
import { useHistory, useParams } from 'react-router-dom';
const Details = ({ productInfo }) => {
	const [quantity, setQuantity] = useState(0);
	let available = productInfo && productInfo.quantity - productInfo.sold;

	const history = useHistory();
	const params = useParams();
	console.log(params);
	const addItem = () => {
		history.push(`/cart/${params.productSlug}?quantity=${quantity}`);
	};
	return (
		<div>
			<h1 className="text-center">{productInfo.name}</h1>
			<Row className="justify-content-between ">
				<div
					style={{
						fontSize: '1rem',
						fontWeight: 'bold',
					}}
				>
					<FaEuroSign /> {productInfo.price}
				</div>
				{available !== 0 && (
					<div className="text-success font-weight-bolder">
						<FaCheckCircle
							style={{ fontSize: '18px', fontWeight: 'bolder' }}
						/>{' '}
						IN STOCK
					</div>
				)}
			</Row>
			<h5 className="text-warning">
				{available <= 8 && (
					<Alert variant="warning">
						The product is available with only {available} pieces
					</Alert>
				)}
			</h5>

			<Button variant="" className="mt-3 text-danger">
				<AiOutlineHeart /> Add to wishlist
			</Button>
			<Button
				variant="outline-info ml-3"
				className="mt-3"
				onClick={addItem}
				disabled={productInfo.quantity === 0}
			>
				<AiOutlineShoppingCart /> Add to Cart
			</Button>
			<select
				value={quantity}
				onChange={(e) => {
					setQuantity(e.target.value);
				}}
			>
				{[...Array(available).keys()].map((x) => (
					<option key={x + 1} value={x + 1}>
						{x + 1}
					</option>
				))}
				<option></option>
			</select>
		</div>
	);
};

export default Details;
