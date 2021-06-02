export default (carts = [], action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return carts;
        case 'UPDATE_CART':
            return carts;
        default:
            return products;
    }
}