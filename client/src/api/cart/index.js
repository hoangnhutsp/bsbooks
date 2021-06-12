import axios from 'axios';
axios.defaults.withCredentials = true


const localhost = 'http://localhost:5000/';

export const addToCart = (item) => {
    let token = localStorage.getItem('token');
    console.log('token: ', token);
    if (token) {
        const URL = localhost + 'cart';
        return axios.post(
            URL,
            item, 
            {headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }}
        )
    
    } else return null;
}

export const updateCart = (cart) => {
    let token = localStorage.getItem('token');
    if (token) {
        const URL = localhost + 'cart/update';
        return axios.post(
            URL,
            cart, 
            {headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }}
        )
    
    } else return null;
}


export const getCart = () => {

    console.log('API GET CART');

    let token = localStorage.getItem('token');

    console.log(token);
    if (token) {
        const URL = localhost + 'cart';
        return axios.get(
            URL,
            {headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }}
        )
    }
}