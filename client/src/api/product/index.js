import axios from 'axios';
axios.defaults.withCredentials = true


const localhost = 'http://localhost:5000/';

export const updateProduct = (product) => {
    let token = localStorage.getItem('token');
    console.log('token: ', token);
    if (token) {
        const URL = localhost + 'product/update';
        return axios.post(
            URL,
            product, 
            {headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }}
        )
    
    } else return null;
}

export const createProduct = ({newProduct, newProductDetail, image}) => {
    console.log('create Product');
    let token = localStorage.getItem('token');
    console.log('token: ', token);
    if (token) {
        const URL = localhost + 'product/';
        return axios.post(
            URL,
            {newProduct, newProductDetail, image}, 
            {headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }}
        )
    
    } else return null;
}