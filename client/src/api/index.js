import axios from 'axios';
axios.defaults.withCredentials = true


const localhost = 'http://localhost:5000/';

export const getProfile = (token) => {
    const URL = localhost + 'user/profile'
    return axios.get(URL, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
}

export const userLogin = (info) => {
    const URL = localhost + 'user/login';
    return axios.post(URL, info);
}


export const userUpdateInfo = (info, token) => {
    const URL = localhost + 'user/update';
    return axios.post(
        URL, 
        info, 
        {headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        }},
    )
}

export const userSignup = (info) => {
    const URL = localhost + 'user/signup';
    return axios.post(URL, info, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
}