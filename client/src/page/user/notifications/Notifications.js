import React, {useState} from 'react'
import './Notifications.css'
import { 
    useDispatch,
    useSelector, 
} from 'react-redux';
import {deleteNotification} from './../../../redux/actions/notification';
import NotificationEmptyInUser from './../../../components/NotificationEmptyInUser';
import NotificationConfirm from './../../../components/NotificationConfirm'
function Notifications() {
    const notification = useSelector(state => state.notification)
    const dispatch = useDispatch();
    const deleteNoti = (_id) => {
        console.log(_id);
        dispatch(deleteNotification(_id));
    }
    const [idDel, setIdDel] = useState('');
    const [isOpen, setIsOpen] = useState(0);

    const setNotificationConfirm = val => {
        if (val) {
            if (idDel !== '') deleteNoti(idDel)
        }

        setIsOpen(0);
    }
    return (
        <div>
            {isOpen===1&&<NotificationConfirm setNotificationConfirm={setNotificationConfirm} title={'Xóa thông báo ?'}/>}
            {(notification&&notification.notis.length===0)&&<NotificationEmptyInUser />}
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
                                <button className="Notification-user-delete-button" onClick={() => {
                                    setIdDel(item._id);
                                    setIsOpen(1);
                                }}>Xóa</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Notifications
