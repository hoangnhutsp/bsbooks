import axios from 'axios';
axios.defaults.withCredentials = true


const localhost = 'http://localhost:5000/';

export const getNotificationByIdUser = (_id) => {
    let token = localStorage.getItem('token');

    if (token) {
        const URL = localhost + 'notification';
        return axios.get(
            URL,
            _id, 
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


export const updateStatus = (_id) => {
    let token = localStorage.getItem('token');
    if (token) {
        const URL = localhost + 'notification/status';
        return axios.post(
            URL,
            _id,
            {headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }}
        )
    }
}