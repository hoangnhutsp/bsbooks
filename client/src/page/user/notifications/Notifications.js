import React from 'react'
import './Notifications.css'
import { 
    useDispatch,
    useSelector, 
} from 'react-redux';
import {deleteNotification} from './../../../redux/actions/notification';

function Notifications() {
    const notification = useSelector(state => state.notification)
    const dispatch = useDispatch();
    const deleteNoti = (_id) => {
        console.log(_id);
        dispatch(deleteNotification(_id));
    }
    return (
        <div>
            <p>{`Thong bao: ${notification.notis.length}`}</p>
            {
                notification&&notification.notis.map((item) => {
                    return (
                        <div className="Notification-user-container">
                            <div className="Notification-user-img">
                                <img className="Noti-user-img" src = {item.image}></img>
                            </div>
                            <div className="Notification-user-text">
                                <h1 className="Notification-user-text-title">{item.title}</h1>
                                <div className="Notification-user-text-description">{item.description}</div>
                            </div>
                            <div className="Notification-user-delete">
                                <button className="Notification-user-delete-button" onClick={() => deleteNoti(item._id)}>Xóa</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Notifications
