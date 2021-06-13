import * as apiNotification from '../../api/notification';

export const getNotificationByIdUser = (_id) => async (dispatch) => {
    try {
        const {data} = await apiNotification.getNotificationByIdUser(_id)
        dispatch({type: 'GET_NOTIFICATION', payload: data})
    } catch (err) {
        console.log(err.message);
    }
}

export const addNotification = (data) => async (dispatch) => {
    try {
        await apiNotification.addNotification(data);
        dispatch({type: 'ADD_NOTIFICATION', payload: data})
    } catch (error) {
        console.log(error.message);
    }
}

export const updateStatus = (_id) => async (dispatch) => {
    try {
        await apiNotification.addNotification(data);
        dispatch({type: 'UPDATE_NOTIFICATION'})
    } catch (error) {
        console.log(error.message);
    }
}

