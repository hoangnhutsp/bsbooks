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


export const changePassword = async ({currentPassword, newPassword}, setErrorResponse) => {
    let token = localStorage.getItem('token');
    const URL = localhost + 'user/change-password';
    await axios.post(URL, {currentPassword, newPassword}, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    })
    .then(res => res.data)
    .then(data => setErrorResponse(data))
    .catch( err => setErrorResponse({status: 0, message: err.message}))

}

export const resetPassword = async ({token, password}) => {
    console.log(token, password);
    const URL = localhost + `user/reset-password/${token}`
    console.log(URL);
    return await axios.post(URL, {password})
}

