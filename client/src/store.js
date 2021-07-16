import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
	catListReducer,
	catProductListReducer,
} from './reducers/categoryReducer';
import {
	productCreateReducer,
	productListReducer,
	productDetailsReducer,
} from './reducers/productReducer';

import { cartReducer } from './reducers/cartReducer';
import {
	userSignUpReducer,
	userLoginReducer,
	userDetailsReducer,
	userUpdateProfileReducer,
	userListReducer,
	userDeleteReducer,
	userUpdateReducer,
} from './reducers/userReducers.js';
const reducer = combineReducers({
	userSignup: userSignUpReducer,
	userLogin: userLoginReducer,
	userDetails: userDetailsReducer,
	userUpdateProfile: userUpdateProfileReducer,
	userList: userListReducer,
	userDelete: userDeleteReducer,
	userUpdate: userUpdateReducer,
	catList: catListReducer,
	productCreate: productCreateReducer,
	productList: productListReducer,
	catProductList: catProductListReducer,
	productDetails: productDetailsReducer,
	cart: cartReducer,
});

const userInfoFromStorge = localStorage.getItem('userInfo')
	? JSON.parse(localStorage.getItem('userInfo'))
	: null;

const cartItemsFormStorge = localStorage.getItem('cartItems')
	? JSON.parse(localStorage.getItem('cartItems'))
	: [];

const shippingAddressFormStorge = localStorage.getItem('shippingAddress')
	? JSON.parse(localStorage.getItem('shippingAddress'))
	: {};

const initialState = {
	userLogin: { userInfo: userInfoFromStorge },
	cart: {
		cartItems: cartItemsFormStorge,
		shippingAddress: shippingAddressFormStorge,
	},
};

const middleware = [thunk];
// create store
const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
