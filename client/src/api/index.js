import axios from 'axios';

const localhost = 'http://localhost:5000/';

export const getProfile = () => {
    const URL = localhost + 'user/'
    return axios.get(URL);
}

