import axios from 'axios';

const localhost = 'http://localhost:5000/';

export const login = () => {
    const URL = localhost + '/'
    return axios.get(URL);
}

