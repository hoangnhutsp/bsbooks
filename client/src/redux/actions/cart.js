import * as api from '../../api/cart';

export const addToCart = (item) => async (dispatch) => {
    try {
        await api.addToCart(item);
        dispatch({type: 'ADD_TO_CART', payload: item})
    } catch (error) {
        console.log(error.message);
    }
}

export const updateCart = (cart) => async (dispatch) => {
    try {
        await api.updateCart(cart)
        dispatch({type: 'UPDATE_CART', payload: cart})
    } catch (err) {
        console.log(err.message);
    }
}

export const getCart = () => async (dispatch) => {
    try {
        const {data} =await api.getCart();
        dispatch({type: 'GET_CART', payload: data})
    } catch (error) {
        console.log(error.message);
    }
}

export const updateCartStatus = (cart, status) => async (dispatch) => {
    try {
        await api.updateCart(cart)
        dispatch({type: 'UPDATE_CART', payload: cart})
    } catch (err) {
        console.log(err.message);
    }
}