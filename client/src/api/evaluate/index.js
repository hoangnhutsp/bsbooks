import axios from 'axios';
axios.defaults.withCredentials = true


const localhost = 'http://localhost:5000/';

export const addEvaluate = (comment) => {
    console.log('ADD EVALUATE');
    console.log(comment);
    let token = localStorage.getItem('token');
    if (token) {
        const URL = localhost + 'evaluate/';
        return axios.post(
            URL,
            comment, 
            {headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }}
        )
    
    } else return null;
}

export const getEvaluateToProduct = ({idProduct}) => {

    console.log('API: getEvaluateToProduct');
    console.log(idProduct);
        const URL = localhost + `evaluate/${idProduct}`;
        console.log(URL);
        return axios.get(
            URL   
        )
    
}


export const getCart = () => {
    let token = localStorage.getItem('token');
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