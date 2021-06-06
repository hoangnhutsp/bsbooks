import * as api from '../../api';

let token = localStorage.getItem('token');

export const addToCart = (item) => async (dispatch) => {
    try {
        console.log(item);
        dispatch({type: 'ADD_TO_CART', payload: item})
    } catch (error) {
        console.log(error.message);
    }
}

export const updateCart = (cart) => async (dispatch) => {
    try {
        console.log(cart);
        dispatch({type: 'UPDATE_CART', payload: cart})
    } catch (err) {
        console.log(err.message);
    }
}