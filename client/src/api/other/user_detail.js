import axios from 'axios';
axios.defaults.withCredentials = true


const localhost = 'http://localhost:5000/admin/one_user';

export const getUserDetail = async (id) => {
    let URL = localhost +`?id=${id}`
    let token = localStorage.getItem('token');
    if (token) {
        return axios.get(
            URL,
            {headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }}
        )
    }
}