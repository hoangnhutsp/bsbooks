import React from 'react';
import './Checkout.css';

function Checkout() {
    return (
      <div className='CheckoutContainer'>
        <link rel="https://cdnjs.cloudflare.com/ajax/libs/font-aweson/4.7.0/css/font-aweson.min.css"/>
        <h2>Chi Tiết Hóa Đơn</h2>
        <div className="row">
            <div className="col-75">
                <div className="container">
                  <form action="">
                    <div className="row">
                      <div className="col-58">
                        <h3>Thông tin địa chỉ</h3>
                        <label for="fname"><i className="fa fa-user"></i>Họ và Tên</label>
                        <input type="text" id="fname" name="firstname" readOnly/>

                        <label for="email"><i className="fa fa-envelope"></i>Email</label>
                        <input type="text" id="email" name="email" readOnly/>

                        <label for="adr"><i className="fa fa-home"></i>Địa chỉ</label>
                        <input type="text" id="adr" name="address" readOnly/>

                        <label for="city"><i className="fa fa-mobile-alt"></i>Số điện thoại</label>
                        <input type="text" id="city" name="city" readOnly/>
                      </div>
                      <label>
                        <input type="checkbox" checked="checked" name="sameadr">Giao hàng nhanh trong vòng 2 giờ</input>
                      </label>
                    </div>
                  </form>
                </div>
            </div>
            <div className="col-25">
              <div className="container">
                <h4>Giỏ hàng</h4>
                <p><a href="">Sách hay</a><span className="price">40</span></p>
                <hr/>
                <p>Phí vận chuyển<span>15000</span></p>
                <p>Tổng tiền<span>15000</span></p>
              </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default Checkout;