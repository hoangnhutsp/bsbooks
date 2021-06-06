import * as api from '../../api';

let token = localStorage.getItem('token');

export const addToCart = (item) => async (dispatch) => {
    try {
        dispatch({type: 'ADD_TO_CART', payload: item})
    } catch (error) {
        console.log(error.message);
    }
}

export const updateCart = (items) => async (dispatch) => {
    try {
        dispatch({type: 'UPDATE_CART', payload: items})
    } catch (err) {
        console.log(err.message);
    }
}