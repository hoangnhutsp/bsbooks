import React, {useState} from 'react';
import './NotificationBox.css';

function NotificationBox() {

  const [down, setDown] = useState(false)
  const toggleNotifi = () => {
    setDown(!down)
    if (down){
      let row = document.getElementById('box');
      row.height = '0px'
    }
  }
  return (
    <div className='NotificationContainer'>
        <div className="icon-notifacations">
          <i class="far fa-bell" onClick={() => toggleNotifi()}></i>
        </div>
        {
          down&&(
            <div className="NotificationContainer-notifi-box" id="box">
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
          </div>
  
          )
        }
    </div>
  );
}

export default NotificationBox;



