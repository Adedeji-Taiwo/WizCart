export const addCategoryReducer = (state={ loading: false, categories: [], filter: '' }, action) => {
    switch(action.type) {
        case "LOAD_CATEGORY":
            return {categories: action.payload, filter: ''};
        case "ADD_CATEGORY_REQUEST":
            return {loading: true, categories: action.payload, filter: ''};
        case "ADD_CATEGORY_SUCCESS":
            return { loading: false, categories: action.payload, filter: '' };
        case "ADD_CATEGORY_FAIL":
            return { loading: false, categories: action.payload, filter: '' };
        case "FILTER_CATEGORY":
            return { categories: action.data, filter: action.payload };
        default:
            return state;
    }
}


export const deleteCategoryReducer = (state={ loading: false, categories: [] }, action) => {
    switch(action.type) {
        case "DELETE_CATEGORY_REQUEST":
            return {loading: true};
        case "DELETE_CATEGORY_SUCCESS":
            return { loading: false };
        case "DELETE_CATEGORY_FAIL":
            return { loading: false };
        default:
            return state;
    }
}



export const updateCategoryReducer = (state={ loading: false, category: '' }, action) => {
    switch(action.type) {
        case "UPDATE_CATEGORY_REQUEST":
            return {loading: true};
        case "UPDATE_CATEGORY_SUCCESS":
            return { loading: false };
        case "UPDATE_CATEGORY_FAIL":
            return { loading: false };
        default:
            return state;
    }
}

