import * as api from '../api';

const getUser = () => async (dispatch) => {
    try {
        const {data} = await api.getProfile();
        dispatch({type: 'GET_PROFILE', payload: data});
    } catch (error) {
        console.log(error.message);
    }
}