import React, { useState } from 'react';
import './Checkout.css';

function Checkout() {

  const data = [{
    "id": 1,
    "image": "./assets/0000_base_url.png",
    "fullName": "Sách hay",
    "price": 40,
    "count": 1
  },
  {
    "id": 2,
    "image": "./assets/0000_base_url.png",
    "fullName": "Sách vui",
    "price": 45,
    "count": 5
  },
  {
    "id": 3,
    "image": "./assets/0000_base_url.png",
    "fullName": "Sách nhộn",
    "price": 50,
    "count": 1
  }]

  const usercurrent = {
    "name": "Nguyen Ngoc Qui",
    "address": "Hồ Chí Minh",
    "phone": "0123456789",
    "email": "1234@gmail.com"
  }

  //định dạng tiền
  function formatCash(str) {
    return str.split('').reverse().reduce((prev, next, index) => {
        return ((index % 3) ? next : (next + ',')) + prev
    })
}
  const [payment, setPayment] = useState(false)
  const clickShip = () =>{
    let temp = payment;
    if(temp === true)
    {
      setPayment(false);
    }
    else{
      setPayment(true);
    }
  }
  return (
    <div className="CheckoutContainer">
      <link rel="https://cdnjs.cloudflare.com/ajax/libs/font-aweson/4.7.0/css/font-aweson.min.css" />
      <h2 className="h2-checkout">Chi Tiết Hóa Đơn</h2>
      <div className="row">
        <div className="col-75">
          <div className="container">
            <form action="">
              <div className="row">
                <div className="col-58">
                  <h3 className="h3-checkout">Thông tin địa chỉ</h3>
                  <label for="fname"><i className="fa fa-user"></i><span className="icon-kc">Họ và Tên</span></label>
                  <input className="input-checkout" type="text" id="fname" name="firstname" readOnly value={usercurrent.name} />

                  <label for="email"><i className="fa fa-envelope"></i><span className="icon-kc">Email</span></label>
                  <input className="input-checkout" type="text" id="email" name="email" readOnly value={usercurrent.email}/>

                  <label for="adr"><i className="fa fa-home"></i><span className="icon-kc">Địa chỉ</span></label>
                  <input className="input-checkout" type="text" id="adr" name="address" value={usercurrent.address}/>

                  <label for="city"><i className="fa fa-mobile-alt"></i><span className="icon-kc">Số điện thoại</span></label>
                  <input className="input-checkout" type="text" id="city" name="city" value={usercurrent.phone} readOnly/>
                </div>
                <label>
                  <input type="checkbox" name="sameadr" onChange={() => clickShip(payment)}/>Giao hàng nhanh trong vòng 2 giờ
                </label>
              </div>
            </form>
          </div>
        </div>
        <div className="col-25">
          <div className="container">
            <h3 className="h3-checkout">Giỏ hàng</h3>
            {data.map((item, idx) => (
              <div className="cart-item">
                <form action="">
                  <div className="cart-product">
                    <div className="cart-image">
                      <img className="cart-image" src={item.image}></img>
                    </div>
                    <div className="cart-product-infor">
                      <p className="cart-product-name">{item.fullName}</p>
                      <p className="cart-price-sm">{item.price}</p>
                      <span>x {item.count}</span>
                    </div>
                  </div>
                  <div className="cart-unit-price">
                    <h4>{formatCash(String(item.price * item.count))}</h4>
                  </div>
                </form>
              </div>
            ))}
            <div>Phí vận chuyển <span>{formatCash(String(payment ? 30000 : 12000))}</span></div>
            <br/>
            <div>Tổng tiền</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;