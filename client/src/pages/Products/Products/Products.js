import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../assets/Product.css';
import { listCatProduct } from '../../../actions/catActions';
import Skeleton from './../../../components/Loader/Skeleton';
import Product from './Product';
import { Row } from 'react-bootstrap';

const Products = ({ match }) => {
	const dispatch = useDispatch();
	const { catProductList } = useSelector((state) => ({ ...state }));
	const { loading, error, products } = catProductList;
	let catSlug = match.params.slug;

	useEffect(() => {
		dispatch(listCatProduct(catSlug));
	}, [dispatch, match, catSlug]);

	return (
		<Row>
			{loading ? (
				<Skeleton />
			) : (
				products &&
				products.map((product) => (
					<Product
						key={product._id}
						product={product}
						catSlug={catSlug}
					/>
				))
			)}
		</Row>
	);
};

export default Products;
