import {
	CAT_LIST_REQUEST,
	CAT_LIST_FAIL,
	CAT_LIST_SUCCESS,
	CAT_PRODUCT_LIST_REQUEST,
	CAT_PRODUCT_LIST_SUCCESS,
	CAT_PRODUCT_LIST_FAIL,
} from '../constants/catConst';
import axios from 'axios';
let url = process.env.REACT_APP_API;

export const listCats = () => async (dispatch) => {
	try {
		dispatch({ type: CAT_LIST_REQUEST });

		const { data } = await axios.get(`${url}/category`);

		dispatch({
			type: CAT_LIST_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: CAT_LIST_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const listCatProduct = (slug) => async (dispatch) => {
	try {
		dispatch({ type: CAT_PRODUCT_LIST_REQUEST });

		const { data } = await axios.get(`${url}/cat/${slug}`);
		console.log(data);
		dispatch({
			type: CAT_PRODUCT_LIST_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: CAT_PRODUCT_LIST_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
