import React, {useState} from 'react';
import './NotNotification.css';
import iconNotNotification from './../assets/Not-Notification.png';
import { useHistory } from 'react-router-dom';
function NotNotification() {
  const history = useHistory();
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
          <div className="NotNotificationContainer-notifi-box" id="box">
              <div className="NotNotificationContainer-notifi-item">
                  <img alt="img" src={iconNotNotification} />
                  <div className="NotNotificationContainer-notifi-text">
                      <h4>Không có thông báo nào!!!</h4>
                      <p onClick={() => history.push('/')}>Quay lại</p>
                  </div>
              </div>
          </div>
    </div>
  );
}

export default NotNotification;



