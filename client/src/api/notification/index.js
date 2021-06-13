import axios from 'axios';
axios.defaults.withCredentials = true


const localhost = 'http://localhost:5000/';

export const getNotificationByIdUser = () => {
    let token = localStorage.getItem('token');

    if (token) {
        const URL = localhost + 'notification';
        return axios.get(
            URL,
            {headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }}
        )
    
    } else return null;
}

export const addNotification = (data) => {
    let token = localStorage.getItem('token');
    if (token) {
        const URL = localhost + 'notification';
        return axios.post(
            URL,
            data, 
            {headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }}
        )
    
    } else return null;
}


export const updateStatus = () => {
    let token = localStorage.getItem('token');
    if (token) {
        const URL = localhost + 'notification/status';
        return axios.post(
            URL,
            {},
            {headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }}
        )
    }
}

export const deleteNotification = (_id) => {
    let token = localStorage.getItem('token');
    if (token) {
        const URL = localhost + `notification/${_id}`;
        return axios.delete(
            URL,
            {headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }}
        )
    }
}