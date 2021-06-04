import * as api from '../../api';



export const getProfile = () => async (dispatch) => {
    let token = localStorage.getItem('token');
    if (!token){
        return;
    }
    try {
        const {data} = await api.getProfile(token);
        dispatch({type: 'GET_PROFILE', payload: data})
    } catch (error) {
        console.log(error.message);
    }
}
export const userLogin = (info) => async (dispatch) => {
    try {
        api.userLogin(info)
        .then(res => res.data)
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
            }
        })
        .catch(err => console.log(err.message))
    } catch (error) {
        console.log(error.message);
    }
}