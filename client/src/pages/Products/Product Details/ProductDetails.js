import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productDetailsAction } from './../../../actions/productActions';
import Loader from './../../../components/Loader/Loader';
import RelatedProducts from '../Related Products/RelatedProducts';
import { listCatProduct } from '../../../actions/catActions';
import AppoveScreen from './AppoveScreen';
import TabsLayout from './Tabs/Tabs';
import '../assets/Product.css';

const ProductDetails = ({ match }) => {
	const dispatch = useDispatch();
	const { productDetails, catProductList } = useSelector((state) => ({
		...state,
	}));
	const { loading, error, productInfo } = productDetails;
	const { products } = catProductList;

	useEffect(() => {
		dispatch(productDetailsAction(match.params.productSlug));
		dispatch(listCatProduct(match.params.catSlug));
	}, [dispatch, match]);

	return (
		<div className="product-details-screen">
			{loading ? (
				<Loader />
			) : (
				productInfo && (
					<div className="w-100">
						<AppoveScreen productInfo={productInfo} />
						<hr />
						<TabsLayout />
						<RelatedProducts products={products} />
					</div>
				)
			)}
		</div>
	);
};

export default ProductDetails;
