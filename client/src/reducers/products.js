export default (products = [], action) => {
    switch (action.type) {
        case 'GET_PRODUCT':
            
            return products;
        default:
            return products;
    }
}