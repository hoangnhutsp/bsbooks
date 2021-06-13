import * as apiNotification from '../../api/notification';

export const getNotificationByIdUser = (_id) => async (dispatch) => {
    try {
        console.log('CALL GET NOTIFI');
        const {data} = await apiNotification.getNotificationByIdUser()
        
        console.log(data);
        dispatch({type: 'GET_NOTIFICATION', payload: data})
    } catch (err) {
        console.log(err.message);
    }
}

export const addNotification = (notification) => async (dispatch) => {
    try {
        dispatch({type: 'ADD_NOTIFICATION', payload: notification})
    } catch (error) {
        console.log(error.message);
    }
}

export const updateStatus = () => async (dispatch) => {
    try {
        await apiNotification.updateStatus();
        console.log('CALL UPDATE_NOTIFICATION');
        dispatch({type: 'UPDATE_NOTIFICATION'})
    } catch (error) {
        console.log(error.message);
    }
}


export const deleteNotification = (_id) => async (dispatch) => {
    try {
        await apiNotification.deleteNotification(_id);
        console.log('_ID');
        console.log(_id);
        dispatch({type: 'DELETE_NOTIFICATION', payload: _id})
    } catch (error) {
        console.log(error.message);
    }
}


