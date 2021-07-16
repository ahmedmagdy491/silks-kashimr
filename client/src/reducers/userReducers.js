export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case 'USER_LOGIN_REQUIST':
            return { loading: true };
        case 'USER_LOGIN_SUCCESS':
            return { loading: false, userInfo: action.payload };
        case 'USER_LOGIN_FAIL':
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const userSignUpReducer = (state = {}, action) => {
    switch (action.type) {
        case 'USER_SIGNUP_REQUIST':
            return { loading: true };
        case 'USER_SIGNUP_SUCCESS':
            return { loading: false, userInfo: action.payload };
        case 'USER_SIGNUP_FAIL':
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const userDetailsReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case 'USER_DETAILS_REQUEST':
            return { loading: true };
        case 'USER_DETAILS_SUCCESS':
            return { loading: false, user: action.payload };
        case 'USER_DETAILS_FAIL':
            return { loading: false, error: action.payload };
        case 'USER_DETAILS_RESET':
            return { user: {} };
        default:
            return state;
    }
};

export const userUpdateProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case 'USER_UPDATE_PROFILE_REQUEST':
            return { loading: true };
        case 'USER_UPDATE_PROFILE_SUCCESS':
            return { loading: false, success: true, userInfo: action.payload };
        case 'USER_UPDATE_PROFILE_FAIL':
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const userListReducer = (state = { users: [] }, action) => {
    switch (action.type) {
        case 'USER_LIST_REQUEST':
            return { loading: true };
        case 'USER_LIST_SUCCESS':
            return { loading: false, users: action.payload };
        case 'USER_LIST_FAIL':
            return { loading: false, error: action.payload };
        case 'USER_LIST_RESET':
            return { users: [] };
        default:
            return state;
    }
};

export const userDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case 'USER_DELETE_REQUEST':
            return { loading: true };
        case 'USER_DELETE_SUCCESS':
            return { loading: false, success: true };
        case 'USER_DELETE_FAIL':
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const userUpdateReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case 'USER_UPDATE_REQUEST':
            return { loading: true };
        case 'USER_UPDATE_SUCCESS':
            return { loading: false, success: true };
        case 'USER_UPDATE_FAIL':
            return { loading: false, error: action.payload };
        case 'USER_UPDATE_RESET':
            return { user: {} };
        default:
            return state;
    }
};
