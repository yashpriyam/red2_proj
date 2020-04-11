const INITIAL_STATE = {
    items: null
};

const allItemsReducer = (state = INITIAL_STATE, action) => {
    console.log(action.payload);
    switch(action.type){
        case 'ALL_ITEMS_LIST':
            return {
                ...state,
                items: action.payload
            }
        default:
            return state;
    }
}

export default allItemsReducer;