import * as api from '../../api';
import {getCart} from '../../api/cart'

const getToken = () => {
    return localStorage.getItem('token');
}
const clearToken = () => {
    localStorage.clear();
}

export const getProfile = () => async (dispatch) => {

    const token = getToken();
    if (!token) return;
    
    try {
        const {data} = await api.getProfile(token);
        dispatch({type: 'GET_PROFILE', payload: data})
    } catch (error) {
        console.log(error.message);
    }
}
export const userLogin = (info, setErrorResponse) => async (dispatch) => {
    try {
        await api.userLogin(info)
        .then(res =>res.data)
        .then((data) => {
            if (data.status)
            {
                const profile = {
                    infoUser: data.user,
                    isLogged: true,
                    isAdmin: data.user.role==='ADMIN',
                    token: data.token,
                }
                window.localStorage.setItem('token', data.token);
                dispatch({type: 'LOGIN', payload: profile})
                getCart()
                .then(res => res.data)
                .then(data => {
                    dispatch({type: 'GET_CART', payload: data})
                })

                setErrorResponse(data)
            } else {
                setErrorResponse({status: 0, message: data.message})
            }
        })
        .catch(err => {
            setErrorResponse({status: 0, message: 'Loi he thong'})
        })
    } catch (error) {
        console.log({status: 0, message: error.message});
    }
}


export const userUpdateInfo = (info, setErrorResponse) => async (dispatch) =>{
    const token = getToken();
    if (!token) return;
    await api.userUpdateInfo(info, token)
    .then(res => setErrorResponse({status: 1, message: 'Cap nhat thong tin thanh cong'}))
    .catch(err => setErrorResponse({status: 1, message: 'Loi he thong'}))
    dispatch({ type: 'UPDATE_PROFILE', payload: info})
}

export const userSignup = (info, setErrorResponse) => async (dispatch) =>{
    api.userSignup(info)
    .then(res => res.data)
    .then(data=> {
        console.log(data);
        if (data.status){
            const profile = {
                infoUser: data.user,
                isLogged: true,
                isAdmin: data.user.role==='ADMIN',
                token: data.token,
            }
            window.localStorage.setItem('token', data.token);
            dispatch({type: 'SIGNUP', payload: profile})
            setErrorResponse({status: data.status, message:'succes'})
        }
        setErrorResponse(data) 
    })
    .catch(err => {
        console.log(err);
        setErrorResponse({status: 0, message:err.message});
    })
}


export const userLoginGoogle = (tokenId, setErrorResponse) => async (dispatch) =>{
    api.userLoginGoogle(tokenId)
    .then(res => res.data)
    .then(data=> {
        if (data.status){
            const profile = {
                infoUser: data.user,
                isLogged: true,
                isAdmin: data.user.role==='ADMIN',
                token: data.token,
            }
            window.localStorage.setItem('token', data.token);
            dispatch({type: 'LOGIN', payload: profile})
            setErrorResponse({status: data.status, message:'succes'});
        }
        setErrorResponse({status: 0, message:'succes'}) 
    })
    .catch(err => {
        setErrorResponse({status: 0, message:err.message});
    })
}


export const userLoginFacebook = ({accessToken, userID}, setErrorResponse) => async (dispatch) =>{
    api.userLoginFacebook({accessToken, userID})
    .then(res => res.data)
    .then(data => {
        if (data.status){
            const profile = {
                infoUser: data.user,
                isLogged: true,
                isAdmin: data.user.role==='ADMIN',
                token: data.token,
            }
            window.localStorage.setItem('token', data.token);
            dispatch({type: 'LOGIN', payload: profile})
            setErrorResponse({status: data.status, message:'succes'});
        }
        setErrorResponse({status: data.status, message:'wr'}) 
    })
    .catch(err => {
        setErrorResponse({status: 0, message:err.message});
    })
}

