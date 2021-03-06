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
                <li><a href="http://localhost:3000/about-us">về chúng tôi</a></li>
              </ul>
            </div>
            <div className="container-footer-col">
              <h4>hỗ trợ</h4>
              <ul>
                <li><a href="http://localhost:3000/faq">FAQ</a></li>
                <li><a href="http://localhost:3000/user/purchase">tình trạng đơn</a></li>
                <li><a href="http://localhost:3000/cart/checkout">thanh toán</a></li>
              </ul>
            </div>
            <div className="container-footer-col">
              <h4>Chính sách</h4>
              <ul>
                <li><a href="http://localhost:3000/dieu-khoan">Điều khoản dịch vụ</a></li>
                <li><a href="http://localhost:3000/chinh-sach-bao-mat">Chính sách bảo mật</a></li>
           

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



