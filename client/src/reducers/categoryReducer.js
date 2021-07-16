import {
	CAT_LIST_REQUEST,
	CAT_LIST_FAIL,
	CAT_LIST_SUCCESS,
	CAT_PRODUCT_LIST_REQUEST,
	CAT_PRODUCT_LIST_SUCCESS,
	CAT_PRODUCT_LIST_FAIL,
} from '../constants/catConst';

export const catListReducer = (state = { cats: [] }, action) => {
	switch (action.type) {
		case CAT_LIST_REQUEST:
			return { loading: true, cats: [] };
		case CAT_LIST_SUCCESS:
			return { loading: false, cats: action.payload };
		case CAT_LIST_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const catProductListReducer = (state = { products: [] }, action) => {
	switch (action.type) {
		case CAT_PRODUCT_LIST_REQUEST:
			return { loading: true, products: [] };
		case CAT_PRODUCT_LIST_SUCCESS:
			return { loading: false, products: action.payload };
		case CAT_PRODUCT_LIST_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
