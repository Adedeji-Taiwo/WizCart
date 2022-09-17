import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userLoginReducer, userRegisterReducer, userRegisterCompleteReducer, userPasswordResetReducer } from './reducers/userReducer';


const rootReducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userRegisterComplete: userRegisterCompleteReducer,
    userPasswordReset: userPasswordResetReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;