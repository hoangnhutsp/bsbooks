import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='FooterContainer'>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
      <footer className = "frame-footer">
        <div className="container-footer">
          <div className="container-footer-row">
            <div className="container-footer-col">
              <h4>chúng tôi</h4>
              <ul>
                <li><a href="http://localhost:3000/">Địa chỉ:</a></li>
                <li><a href="http://localhost:3000/">TP. Hồ Chí Minh</a></li>
                <li><a href="http://localhost:3000/">về chúng tôi</a></li>
                <li><a href="http://localhost:3000/">chính sách</a></li>
              </ul>
            </div>
            <div className="container-footer-col">
              <h4>hỗ trợ</h4>
              <ul>
                <li><a href="http://localhost:3000/">FAQ</a></li>
                <li><a href="http://localhost:3000/">vận chuyển</a></li>
                <li><a href="http://localhost:3000/">trả hàng</a></li>
                <li><a href="http://localhost:3000/">tình trạng đơn</a></li>
                <li><a href="http://localhost:3000/">thanh toán</a></li>
              </ul>
            </div>
            <div className="container-footer-col">
              <h4>liên hệ</h4>
              <ul>
                <li><a href="http://localhost:3000/">+ (028) 999 999</a></li>
                <li><a href="http://localhost:3000/">+ (028) 888 999</a></li>
                <li><a href="http://localhost:3000/">sweetheartuit.com</a></li>
                <li><a href="http://localhost:3000/">bsbookuit@gmail.com</a></li>

              </ul>
            </div>
            <div className="container-footer-col">
              <h4>truyền thông</h4>
              <div className="social-links">
                <a href="http://localhost:3000/"><i className="fab fa-facebook"></i></a>
                <a href="http://localhost:3000/"><i className="fab fa-twitter"></i></a>
                <a href="http://localhost:3000/"><i className="fab fa-instagram"></i></a>
                <a href="http://localhost:3000/"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;



