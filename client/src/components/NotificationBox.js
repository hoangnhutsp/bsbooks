import React from 'react';
import './NotificationBox.css';

function NotificationBox() {
  /*var box = document.getElementById('box');
  var down = false;


  function toggleNotifi() {
    if (down) {
      box.style.height = '0px';
      box.style.opacity = 0;
      down = false;
    } else {
      box.style.height = 'auto';
      box.style.opacity = 1;
      down = true;
    }
  }*/
  return (
    <div className='CommentProductContainer'>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
      <nav className="CommentProductContainer-nav">
        <div className="CommentProductContainer-logo">BSBOOKS</div>
        <div className="CommentProductContainer-icon">
          <i class="fas fa-bell"></i> <span>17</span>
        </div>
        <div className="CommentProductContainer-notifi-box" id="box">
          <h2>Thông báo <span>17</span></h2>
          <div className="CommentProductContainer-notifi-item">
            <img alt="img" src="./assets/0000_base_url.png" />
            <div className="CommentProductContainer-text">
              <h4>Sách giảm giá 20%</h4>
              <p>Đây là sách giảm giá rất sâu trong ngày hôm nay</p>
            </div>
          </div>
          <div className="CommentProductContainer-notifi-item">
            <img alt="img" src="./assets/0000_base_url.png" />
            <div className="CommentProductContainer-text">
              <h4>Sách giảm giá 20%</h4>
              <p>Đây là sách giảm giá rất sâu trong ngày hôm nay</p>
            </div>
          </div>
          <div className="CommentProductContainer-notifi-item">
            <img alt="img" src="./assets/0000_base_url.png" />
            <div className="CommentProductContainer-text">
              <h4>Sách giảm giá 20%</h4>
              <p>Đây là sách giảm giá rất sâu trong ngày hôm nay</p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NotificationBox;



