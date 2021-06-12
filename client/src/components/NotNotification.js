import React, {useState} from 'react';
import './NotNotification.css';

function NotNotification() {

  const [down, setDown] = useState(false)
  const toggleNotifi = () => {
    setDown(!down)
    if (down){
      let row = document.getElementById('box');
      row.height = '0px'
    }
  }
  return (
    <div className='NotNotificationContainer'>
        {/*<div className="icon-notifacations">
          <i class="far fa-bell" onClick={() => toggleNotifi()}></i>
  </div>*/}
        {/*
          down&&(
            <div className="NotNotificationContainer-notifi-box" id="box">
            <div className="NotNotificationContainer-notifi-item">
              <img alt="img" src="./assets/bag-empty.svg" />
              <div className="NotNotificationContainer-text">
                <h4>Sách giảm giá 20%</h4>
                <p>Đây là sách giảm giá rất sâu trong ngày hôm nay</p>
              </div>
            </div>
          </div>
  
          )
          */}
          <div className="NotNotificationContainer-notifi-box" id="box">
              <div className="NotNotificationContainer-notifi-item">
                  <img alt="img" src="./assets/Not-Notification.png" />
                  <div className="NotNotificationContainer-notifi-text">
                      <h4>Không có thông báo nào!!!</h4>
                      <a href="#">Quay lại</a>
                  </div>
              </div>
          </div>
    </div>
  );
}

export default NotNotification;



