import React, { useState, useEffect } from 'react';
import './NotificationBox.css';
import NotNotification from './NotNotification'
import {
  useSelector,
  useDispatch,
} from 'react-redux';
import { useHistory } from 'react-router-dom';
import {updateStatus} from '../redux/actions/notification'


function NotificationBox() {
  const dispatch = useDispatch();
  const history = useHistory();
  const Store = useSelector(state => state);
  const [down, setDown] = useState(false)
  const toggleNotifi = () => {
    setDown(!down)
    if (down) {
      let row = document.getElementById('box');
      row.height = '0px'
    }
  }

  const [countNoti, setCountNoti] = useState(0)
  const [notis, setNotis] = useState([])
  useEffect(() => {
    setCountNoti(Store.notification.count)
    setNotis(Store.notification.notis)
  }, [Store])

  const [needUpdate, setNeedUpdate] = useState(0)
  useEffect(() => {
    if (needUpdate === 2) dispatch(updateStatus())
  }, [needUpdate])
  useEffect(() => {
    if (down || needUpdate) setNeedUpdate(needUpdate+1);
  }, [down])

  const NotifiForm = () => {

    return (
      <div className="NotificationContainer-notifi-box" id="box">
        {
          notis.length>0 ?
            <div>
              <h2>Thông báo <span>{countNoti}</span></h2>
              {notis.map((val, idx) => {
                return (idx<=2)&&(
                  <div className="NotificationContainer-notifi-item">
                    <img alt="img" src={val.image} />
                    <div className="NotificationContainer-text">
                      <h4>{val.title}</h4>
                      <p >{val.description}</p>
                    </div>
                  </div>
                )
              })}
              <div className="viewmore-notification" onClick={() => {setDown(0); history.push('/user/notifications')}}>Xem them</div>
            </div> : <NotNotification down={down} setDown={setDown} />
        }
      </div>
    )
  }
  return (
    <div className='NotificationContainer'>
      <div className="icon-notifacations">
        {countNoti > 0 ?
          <span className="fa-stack" data-count={countNoti}>
            <i class="far fa-bell" onClick={() => toggleNotifi()}></i>
          </span>
          : <i class="far fa-bell" onClick={() => toggleNotifi()}></i>}
      </div>

      {
        (down==1)?<NotifiForm />:null
      }
    </div>
  );
}

export default NotificationBox;



