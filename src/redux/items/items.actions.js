export const allTheItems = itemList => ({
    type: 'ALL_ITEMS_LIST',
    payload: itemList
});
console.log(allTheItems.payload);