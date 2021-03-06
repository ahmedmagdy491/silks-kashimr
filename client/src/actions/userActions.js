import { notification } from 'antd';
import axios from 'axios';

let url = process.env.REACT_APP_API;

export const login = (email, password) => async (dispatch) => {
	try {
		dispatch({
			type: 'USER_LOGIN_REQUIST',
		});

		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		const { data } = await axios.post(
			`${url}/user/login`,
			{ email, password },
			config
		);

		dispatch({
			type: 'USER_LOGIN_SUCCESS',
			payload: data,
		});

		localStorage.setItem('userInfo', JSON.stringify(data));
	} catch (error) {
		console.log(error.response);
		dispatch({
			type: 'USER_LOGIN_FAIL',
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const signup = (email) => async (dispatch) => {
	try {
		const { data } = await axios.post(`${url}/user/register`, { email });

		if (data.success) {
			notification.success({
				message: 'Done !',
				description: 'the user have been created successfully',
				placement: 'bottomLeft',
			});
		}

		console.log(data);
	} catch (error) {
		console.log(error.response);
	}
};

export const logout = () => async (dispatch) => {
	localStorage.removeItem('userLogin');
	localStorage.removeItem('cartItems');
	localStorage.removeItem('shippingAddress');
	localStorage.removeItem('paymentMethod');

	dispatch({ type: 'USER_LOGOUT' });
	dispatch({ type: 'CART_RESET_ITEM' });
	dispatch({ type: 'USER_DETAILS_RESET' });
	dispatch({ type: 'ORDER_LIST_MY_RESET' });
	dispatch({ type: 'ORDER_DETAILS_RESET' });
	dispatch({ type: 'USER_LIST_RESET' });
};

export const getUserDetails = (id) => async (dispatch, getState) => {
	try {
		dispatch({
			type: 'USER_DETAILS_REQUEST',
		});

		const {
			userLogin: { userInfo },
		} = getState();

		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		const { data } = await axios.get(`${url}/user/${id}`, config);

		dispatch({
			type: 'USER_DETAILS_SUCCESS',
			payload: data,
		});
	} catch (error) {
		if (error.message === 'Not authorized, token failed') {
			dispatch(logout());
		}
		dispatch({
			type: 'USER_DETAILS_FAIL',
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const updateUserProfile = (user) => async (dispatch, getState) => {
	try {
		dispatch({
			type: 'USER_UPDATE_PROFILE_REQUEST',
		});

		const {
			userLogin: { userInfo },
		} = getState();

		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		const { data } = await axios.put(`${url}/user/profile`, user, config);

		dispatch({
			type: 'USER_UPDATE_PROFILE_SUCCESS',
			payload: data,
		});
	} catch (error) {
		if (error.message === 'Not authorized, token failed') {
			dispatch(logout());
		}
		dispatch({
			type: 'USER_UPDATE_PROFILE_FAIL',
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const updateUser = (user) => async (dispatch, getState) => {
	try {
		dispatch({
			type: 'USER_UPDATE_REQUEST',
		});

		const {
			userLogin: { userInfo },
		} = getState();

		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		const { data } = await axios.put(`${url}/user/${user._id}`, user);

		dispatch({
			type: 'USER_UPDATE_SUCCESS',
		});

		dispatch({
			type: 'USER_DETAILS_SUCCESS',
			payload: data,
		});
	} catch (error) {
		if (error.message === 'Not authorized, token failed') {
			dispatch(logout());
		}
		dispatch({
			type: 'USER_UPDATE_FAIL',
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const listUsers = (authtoken) => async (dispatch) => {
	try {
		dispatch({
			type: 'USER_LIST_REQUEST',
		});

		const config = {
			headers: {
				authtoken,
			},
		};

		const { data } = await axios.get(`${url}/user`, config);

		dispatch({
			type: 'USER_LIST_SUCCESS',
			payload: data,
		});
	} catch (error) {
		if (error.message === 'Not authorized, token failed') {
			dispatch(logout());
		}
		dispatch({
			type: 'USER_LIST_FAIL',
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const deleteUser = (id) => async (dispatch, getState) => {
	try {
		dispatch({
			type: 'USER_DELETE_REQUEST',
		});

		const {
			userLogin: { userInfo },
		} = getState();

		const config = {
			headers: {
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		await axios.delete(`${url}/user/${id}`, config);

		dispatch({
			type: 'USER_DELETE_SUCCESS',
		});
	} catch (error) {
		if (error.message === 'Not authorized, token failed') {
			dispatch(logout());
		}
		dispatch({
			type: 'USER_DELETE_FAIL',
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const addToWishListAction = (product) => async (dispatch, getState) => {
	try {
		dispatch({
			type: 'REQ_ADD_WISHLIST_ITEM',
		});

		const {
			userLogin: { userInfo },
		} = getState();
		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${userInfo.token}`,
			},
		};
		const { data } = await axios.post(
			`${url}/wishlist`,
			{ product },
			config
		);
		console.log(data);
		dispatch({
			type: 'ADD_WISHLIST_ITEM',
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: 'FAIL_ADD_WISHLIST_ITEM',
			payload:
				error.response && error.response.data
					? error.response.data
					: error.data,
		});
	}
};

export const createOrUpdateUserAction = (authtoken) => async (dispatch) => {
	try {
		dispatch({
			type: 'USER_CREATE_OR_UPDATE_REQUEST',
		});

		const config = {
			headers: {
				authtoken,
			},
		};

		const { data } = await axios.post(
			`${url}/create-or-login-user`,
			{},
			config
		);

		if (data.success) {
			notification.success({
				message: 'Done !',
				description: 'the user have been created successfully',
				placement: 'bottomLeft',
			});
		}

		console.log('form asdasd', data);

		dispatch({
			type: 'USER_CREATE_OR_UPDATE_SUCCESS',
			payload: {
				name: data.name,
				email: data.email,
				token: authtoken,
				role: data.role,
				_id: data._id,
			},
		});

		localStorage.setItem(
			'userInfo',
			JSON.stringify({ ...data, token: authtoken })
		);
	} catch (error) {
		console.log(error.response);
		dispatch({
			type: 'USER_CREATE_OR_UPDATE_FAIL',
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const currentUser = (authtoken) => async (dispatch) => {
	try {
		const config = {
			headers: {
				authtoken,
			},
		};

		const { data } = await axios.post(`${url}/current-user`, {}, config);
		dispatch({
			type: 'CURRENT_USER_SUCCESS',
			payload: {
				name: data.name,
				email: data.email,
				token: authtoken,
				role: data.role,
				_id: data._id,
			},
		});
		console.log('from current', data);
	} catch (error) {
		console.log(error.response);
		dispatch({
			type: 'CURRENT_USER_FAIL',
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
