import axios from 'axios';
axios.defaults.withCredentials = true


const localhost = 'http://localhost:5000/';

export const getRecentlyViewed = async () => {

    const URL = localhost + 'recently_viewd';
    return await axios.get(URL)
}


