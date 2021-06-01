import axios from 'axios';

const localhost = 'http://localhost:5000/';

export const getProducts = () => {
    const URL = localhost + 'product/'
    return axios.get(URL);
}

