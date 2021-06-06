import axios from 'axios';
import { responseSuccessGoogle } from './loginFBGG';
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

export const userLoginGoogle = (tokenId) => {
    const URL = localhost + 'user/login-google';

    return axios.post(URL, {tokenId}, {
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
        },
    })
}

export const userLoginFacebook = ({accessToken, userID}) => {
    const URL = localhost + 'user/login-facebook';
    return axios.post(URL, {accessToken, userID}, {
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
        },
    })
}