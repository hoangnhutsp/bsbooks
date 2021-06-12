import React from 'react'
import './Notifications.css'
const data = [
    {
        title: 'Thong bao 1',
        descriptiion: 'thông báo: idUser, hình, title, descriptiion',
        image: 'http://localhost:5000/default/images/default-avatar-profile.jpg',
        status: 1,
    },
    {
        title: 'Thong bao 2',
        descriptiion: 'thông báo: idUser, hình, title, descriptiion',
        image: 'http://localhost:5000/default/images/default-avatar-profile.jpg',
        status: 0,
    },
    {
        title: 'Thong bao 3',
        descriptiion: 'thông báo: idUser, hình, title, descriptiion',
        image: 'http://localhost:5000/default/images/default-avatar-profile.jpg',
        status: 1,
    },
    {
        title: 'Thong bao 4',
        descriptiion: 'thông báo: idUser, hình, title, descriptiion',
        img: 'http://localhost:5000/default/images/default-avatar-profile.jpg',
        status: 0,
    }
]
function Notifications() {
    const deleteNotification = () => {
        
    }
    return (
        <div>
            {
                data.map((item) => {
                    return (
                        <div className="Notification-user-container">
                            <div className="Notification-user-img">
                                <img className="Noti-user-img" src = {item.image}></img>
                            </div>
                            <div className="Notification-user-text">
                                <h1 className="Notification-user-text-title">{item.title}</h1>
                                <div className="Notification-user-text-description">{item.descriptiion}</div>
                            </div>
                            <div className="Notification-user-delete">
                                <button className="Notification-user-delete-button" onClick={deleteNotification()}>Xóa</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Notifications
