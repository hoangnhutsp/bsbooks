import React from 'react'
import './NotificationEmptyInUser.css';
import iconNotificationEmptyInUser from './../assets/appointment-reminders.png';
import { useHistory } from 'react-router-dom';


function NotificationEmptyInUser() {
    const history = useHistory();
    return (
    <div className='NotificationEmptyInUserContainer'>
        <div className="NotificationEmptyInUserContainer-Container">
            <img className="NotificationEmptyInUserContainer-Container-img" src={iconNotificationEmptyInUser}></img>
            <div className="NotificationEmptyInUserContainer-Container-wrapper">
                <h1>Không Có Thông Báo Nào!!!</h1>
            </div>
            <p className="NotificationEmptyInUserContainer-Container-p"
                onClick={() => {history.push('/')}}
            >Quay lại trang chủ</p>
        </div>
    </div>
    )
}

export default NotificationEmptyInUser
