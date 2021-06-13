import React, { useState, useContext, useEffect } from 'react'
import { SocketContext } from '../SocketContext.js'
import {
    useSelector,
    useDispatch
} from 'react-redux';

import * as apiNotification from '../api/notification'
import {updateStatus} from '../redux/actions/notification.js'
function TestSocket() {
    const dispatch = useDispatch()
    const socket = useContext(SocketContext)
    const user = useSelector(state => state.user);
    const notification = useSelector(state => state.notification);

    const [noti, setNoti] = useState({})
    useEffect(() => {
        setNoti(notification)
    }, [notification])
    // thông báo mới

    const Submit = async () => {
       // console.log(data);
       const noti = {
        id_user : user.infoUser._id,
        title: "NHUTNHUT la socket HIHI",
        description: "Day la noi dung socket",
       }
       let token = localStorage.getItem('token');

       await apiNotification.addNotification(noti)
       .then(res => res.data)
       .then(data => {
            console.log('add Notificaiton');
            data.token = token;

         
            socket.emit('addNotification', data)
       })
       .catch(err => console.log(err))
    }

    const UpdateNotification = () => {
        dispatch(updateStatus())
    }
    return (
        <div>
            <button onClick={() => Submit()}>Test_Socket</button>
            <button onClick={() => console.log(noti)}>Shownoti</button>
            <button onClick={() => UpdateNotification()}>Update Notificaiton</button>

        </div>
    )

}
export default TestSocket