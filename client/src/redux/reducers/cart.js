
const initCart = {
    count: 0,
    items: [], // {_id, name, quantity, image, price, checked}
}

const Cart = (cart = initCart, action) => {
    
    switch (action.type) {
        case 'ADD_TO_CART':
            let item = action.payload;
            let quantity = item.quantity;
            let count = cart.count;
            const inCart = cart.items.find((val) => 
                val._id === item._id ? true : false
            ) || false;

            let newCart = cart;
            newCart = inCart 
                 ? newCart.items.map(item => item._id === item._id 
                    ? {...item, quantity: item.quantity + quantity}: 
                    item
                ) 
                : [...newCart.items, item]

            if (!inCart){
                count++;
            }   
            return  {...cart, items: newCart, count};
        case 'UPDATE_CART':
            return action.payload;
        case 'GET_CART':
            return cart;
        default:
            return cart;
    }
}

export default Cart;