import {
	CAT_LIST_REQUEST,
	CAT_LIST_FAIL,
	CAT_LIST_SUCCESS,
	CAT_PRODUCT_LIST_REQUEST,
	CAT_PRODUCT_LIST_SUCCESS,
	CAT_PRODUCT_LIST_FAIL,
	CREATE_CAT_REQUEST,
	CREATE_CAT_SUCCESS,
	CREATE_CAT_FAIL,
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

export const createCatAction = (name, image) => async (dispatch) => {
	try {
		dispatch({ type: CREATE_CAT_REQUEST });

		const { data } = await axios.post(`${url}/category`, {
			name,
			image,
		});
		console.log('res from create cat action --->', data);
		dispatch({
			type: CREATE_CAT_SUCCESS,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: CREATE_CAT_FAIL,
			payload:
				err.response && err.response.data
					? err.response.data
					: err.data,
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
