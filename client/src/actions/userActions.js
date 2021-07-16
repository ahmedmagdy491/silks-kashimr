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

export const signup = (name, email, password) => async (dispatch) => {
    try {
        dispatch({
            type: 'USER_SIGNUP_REQUIST',
        });

        console.log({ name, email, password });

        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const { data } = await axios.post(
            `${url}/user/register`,
            { name, email, password },
            config
        );

        dispatch({
            type: 'USER_SIGNUP_SUCCESS',
            payload: data,
        });

        dispatch({
            type: 'USER_LOGIN_SUCCESS',
            payload: data,
        });

        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        console.log(error.response);
        dispatch({
            type: 'USER_SIGNUP_FAIL',
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const logout = () => async (dispatch) => {
    localStorage.removeItem('userInfo');
    // localStorage.removeItem('cartItems');
    // localStorage.removeItem('shippingAddress');
    // localStorage.removeItem('paymentMethod');

    dispatch({ type: 'USER_LOGOUT' });
    dispatch({ type: 'USER_DETAILS_RESET' });
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

export const listUsers = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: 'USER_LIST_REQUEST',
        });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
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
