import { combineReducers } from 'redux';
import categoriesReducer from './categories/categories.reducer';
import allItemsReducer from './items/items.reducer';

export default combineReducers({
    category: categoriesReducer,
    itemlist: allItemsReducer
});
console.log(combineReducers.itemlist,combineReducers.category);