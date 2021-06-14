import axios from 'axios';
axios.defaults.withCredentials = true


const localhost = 'http://localhost:5000/';

export const addAdmin = (info) => {
    console.log('api admin');
    let token = localStorage.getItem('token');
    const URL = localhost + 'admin/add-admin';
    return axios.post(
        URL,
        info,
        {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        }
    )
}