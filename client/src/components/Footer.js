import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='FooterContainer'>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
      <footer className = "footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>chúng tôi</h4>
              <ul>
                <li><a href="#">Địa chỉ:</a></li>
                <li><a href="#">TP. Hồ Chí Minh</a></li>
                <li><a href="#">về chúng tôi</a></li>
                <li><a href="#">chính sách</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>hỗ trợ</h4>
              <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">vận chuyển</a></li>
                <li><a href="#">trả hàng</a></li>
                <li><a href="#">tình trạng đơn</a></li>
                <li><a href="#">thanh toán</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>liên hệ</h4>
              <ul>
                <li><a href="#">+ (028) 999 999</a></li>
                <li><a href="#">+ (028) 888 999</a></li>
                <li><a href="#">sweetheartuit.com</a></li>
                <li><a href="#">bsbookuit@gmail.com</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>truyền thông</h4>
              <div className="social-links">
                <a href="#"><i className="fab fa-facebook"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;



