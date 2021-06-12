import React, {useState} from 'react';
import './NotificationBox.css';
import NotNotification from './NotNotification'

function NotificationBox() {

  const [down, setDown] = useState(false)
  const toggleNotifi = () => {
    setDown(!down)
    if (down){
      let row = document.getElementById('box');
      row.height = '0px'
    }
  }


  const [noti, setNoti] = useState(0)

  const NotifiForm = () => {

    return (
      <div className="NotificationContainer-notifi-box" id="box">
      {
        noti?
      <div>
      <h2>Thông báo <span>17</span></h2>
      <div className="NotificationContainer-notifi-item">
        <img alt="img" src="./assets/0000_base_url.png" />
        <div className="NotificationContainer-text">
          <h4>Sách giảm giá 20%</h4>
          <p>Đây là sách giảm giá rất sâu trong ngày hôm nay</p>
        </div>
      </div>
      <div className="NotificationContainer-notifi-item">
        <img alt="img" src="./assets/0000_base_url.png" />
        <div className="NotificationContainer-text">
          <h4>Sách giảm giá 20%</h4>
          <p>Đây là sách giảm giá rất sâu trong ngày hôm nay</p>
        </div>
      </div>
      <div className="NotificationContainer-notifi-item">
        <img alt="img" src="./assets/0000_base_url.png" />
        <div className="NotificationContainer-text">
          <h4>Sách giảm giá 20%</h4>
          <p>Đây là sách giảm giá rất sâu trong ngày hôm nay</p>
        </div>
      </div>
      </div>: <NotNotification />
  }
    </div>
    )
  }
  return (
    <div className='NotificationContainer'>
        <div className="icon-notifacations">
          <i class="far fa-bell" onClick={() => toggleNotifi()}></i>
        </div>
        {
          down&&<NotifiForm />
        }
    </div>
  );
}

export default NotificationBox;



