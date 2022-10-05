export const userSidebarReducer = (state={ click:false, profileClick:false }, action) => {
    switch (action.type) {
        case 'SIDEBAR_TOGGLE':
            return {click: !state.click};
            case 'SIDEBAR_CLOSE':
                return {click: false};
        case 'SIDEBAR_PROFILE_TOGGLE':
            return {profileClick: !state.profileClick};
        default:
            return state;
    }
}