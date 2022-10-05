export const userLoginReducer = (state={ loading: false,  visible: false, showPassword: false, userInfo: null }, action) => {
    switch(action.type) {
        case "USER_LOGIN_DETAILS": 
            return { userInfo: action.payload };
        case "USER_LOGOUT": 
            return { userInfo: action.payload };
        case 'USER_LOGIN_REQUEST':
            return { loading: true };
        case 'USER_LOGIN_SUCCESS':
            return { loading: false };
        case 'USER_LOGIN_FAIL':
            return { loading: false };
        case 'TOGGLE_PASSWORD':
            return { visible: true, showPassword: !state.showPassword };
        case 'SET_VISIBLE':
            return { visible: true }
        default:
            return state;
    }
}

export const userRegisterReducer = (state={ loading: false }, action) => {
    switch(action.type) {
        case 'USER_REGISTER_REQUEST':
            return { loading: true };
        case 'USER_REGISTER_SUCCESS':
            return { loading: false };
        case 'USER_REGISTER_FAIL':
            return { loading: false };
        default:
            return state;
    }
}

export const userRegisterCompleteReducer = (state={ loading: false, visible: false, showPassword: false,  userInfo: null }, action) => {
    switch(action.type) {
        case 'USER_REGISTER_COMPLETE_DETAILS':
            return { userInfo: action.payload }
        case 'USER_REGISTER_COMPLETE_REQUEST':
            return { loading: true };
        case 'USER_REGISTER_COMPLETE_SUCCESS':
            return { loading: false };
        case 'USER_REGISTER_COMPLETE_FAIL':
            return { loading: false };
        case 'TOGGLE_PASSWORD':
            return { visible: true, showPassword: !state.showPassword };
        case 'SET_VISIBLE':
            return { visible: true }
        default:
            return state;
    }
}

export const userPasswordResetReducer = (state={ loading: false }, action) => {
    switch(action.type) {
        case "USER_PASSWORD_RESET_REQUEST":
            return {loading: true};
        case "USER_PASSWORD_RESET_SUCCESS":
            return { loading: false };
        case "USER_PASSWORD_RESET_FAIL":
            return { loading: false };
        default:
            return state;
    }
}


export const userPasswordUpdateReducer = (state={ loading: false, visible: false, showPassword: false}, action) => {
    switch(action.type) {
        case "USER_PASSWORD_UPDATE_REQUEST":
            return {loading: true};
        case "USER_PASSWORD_UPDATE_SUCCESS":
            return { loading: false };
        case "USER_PASSWORD_UPDATE_FAIL":
            return { loading: false };
        case 'TOGGLE_PASSWORD_UPDATE':
            return { visible: true, showPassword: !state.showPassword };
        case 'SET_VISIBLE_UPDATE':
            return { visible: true }
        default:
            return state;
    }
}



