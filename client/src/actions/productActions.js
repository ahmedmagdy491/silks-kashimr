import {
	PRODUCT_LIST_REQUEST,
	PRODUCT_LIST_SUCCESS,
	PRODUCT_LIST_FAIL,
	PRODUCT_CREATE_REQUEST,
	PRODUCT_CREATE_SUCCESS,
	PRODUCT_CREATE_FAIL,
	PRODUCT_DETAILS_REQUEST,
	PRODUCT_DETAILS_SUCCESS,
	PRODUCT_DETAILS_FAIL,
} from '../constants/productConst';
import axios from 'axios';

let url = process.env.REACT_APP_API;
const config = {
	headers: {
		'Content-Type': 'application/json',
	},
};

export const productListAction = () => async (dispatch) => {
	try {
		dispatch({ type: PRODUCT_LIST_REQUEST });

		const { data } = await axios.get(`${url}/product`);
		console.log('data from action', data);
		dispatch({
			type: PRODUCT_LIST_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: PRODUCT_LIST_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const productCreate =
	(
		productName,
		productDescription,
		price,
		category,
		quantity,
		color,
		brand
	) =>
	async (dispatch) => {
		try {
			dispatch({ type: PRODUCT_CREATE_REQUEST });

			const { data } = await axios.post(
				`${url}/product`,
				{
					productName,
					productDescription,
					price,
					category,
					quantity,
					color,
					brand,
				},
				config
			);
			console.log('data from action', data);
			dispatch({
				type: PRODUCT_CREATE_SUCCESS,
				payload: data,
			});
		} catch (error) {
			dispatch({
				type: PRODUCT_CREATE_FAIL,
				payload:
					error.response && error.response.data.message
						? error.response.data.message
						: error.message,
			});
		}
	};

export const productDetailsAction = (slug) => async (dispatch) => {
	try {
		dispatch({ type: PRODUCT_DETAILS_REQUEST });

		const { data } = await axios.get(`${url}/product/${slug}`);
		console.log('data from action', data);
		dispatch({
			type: PRODUCT_DETAILS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: PRODUCT_DETAILS_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
