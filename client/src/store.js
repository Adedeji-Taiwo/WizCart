import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userLoginReducer, userRegisterReducer, userRegisterCompleteReducer, userPasswordResetReducer, userPasswordUpdateReducer } from './reducers/userReducer';
import { userSidebarReducer } from './reducers/userSideBarReducer';
import { addCategoryReducer, deleteCategoryReducer, updateCategoryReducer } from './reducers/categoryReducer';



const rootReducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userRegisterComplete: userRegisterCompleteReducer,
    userPasswordReset: userPasswordResetReducer,
    userPasswordUpdate: userPasswordUpdateReducer,

    userSidebar: userSidebarReducer,

    addCategory: addCategoryReducer,
    deleteCategory: deleteCategoryReducer,
    updateCategory: updateCategoryReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;