const INITIAL_STATE = {
    cathidden: true,
    feathidden: true,
    brandhidden: true,
    itemhidden: true
};

const categoriesReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'TOGGLE_ITEM_HIDDEN':
            return {
                ...state,
                itemhidden: !state.itemhidden
            }
        case 'TOGGLE_CATEGORY_HIDDEN':
            return {
                ...state,
                cathidden: !state.cathidden
            }
        case 'TOGGLE_FEATURE_HIDDEN':
            return {
                ...state,
                feathidden: !state.feathidden
            }
        case 'TOGGLE_BRAND_HIDDEN':
            return {
                ...state,
                brandhidden: !state.brandhidden
            }
        default:
            return state;
    }
}

export default categoriesReducer;