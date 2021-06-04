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
export const userLogin = (info, setErr) => async (dispatch) => {
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
                setErr('')
            } else {
                setErr(data.message)
            }
        })
        .catch(err => {
            setErr('wr')
        })
    } catch (error) {
        console.log(error.message);
    }
}

export const userUpdateInfo = (info, notiRES) => async (dispatch) =>{
    let token = localStorage.getItem('token');
    if (!token){
        return;
    }
    api.userUpdateInfo(info, token)
    .then(res => res.data)
    .then(data=> {
        notiRES({status: 'succes'});
        console.log('test --------');
        console.log(info);
        dispatch({ type: 'UPDATE_PROFILE', payload: info})
    })
    .catch(err => {
        console.log(err);
    })
}