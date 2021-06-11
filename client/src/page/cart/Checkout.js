import React, { useState, useEffect } from 'react';
import './Checkout.css';
import {
  Link, useHistory,
} from "react-router-dom";

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import {
  updateCart,
} from '../../redux/actions/cart';

import * as apiInvoice from '../../api/invoice'

function Checkout() {
  const store = useSelector(state => state);
  const history = useHistory();
  const dispatch = useDispatch()
  const [infoUser, setInfoUser] = useState();
  const [checkout, setCheckout] = useState();
  const [cart, setCart] = useState()
  const [isLogged, setIsLogged] = useState(-1)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    setIsLogged(store.user.isLogged);
    setInfoUser(store.user.infoUser);
    if (store.cart.items)
    setCheckout({ ...store.cart, items: store.cart.items.filter(item => item.checked == 1) })
    setCart(store.cart)
  }, [store])


  useEffect(() => {
    if (isLogged === false) {
      history.push('/')
    }
  }, [isLogged])

  function formatCash(str) {
    return str.split('').reverse().reduce((prev, next, index) => {
      return ((index % 3) ? next : (next + ',')) + prev
    })
  }
  const [payment, setPayment] = useState(false)
  const clickShip = () => {
    setPayment(!payment)
  }

  useEffect(() => {
    let sum = 0;
    if (payment) sum = 30000; else sum = 12000;
    if (checkout) {
      checkout.items.forEach(element => {
        sum += element.price * element.quantity * element.checked;
      });
      setTotal(sum)
    }
  }, [payment, infoUser])

  const btnCheckout = () => {
    console.log('btn checkout');

    let invoice = {}
    invoice.name = infoUser.name;
    invoice.address = infoUser.address;
    invoice.email = infoUser.email;
    invoice.phone = infoUser.phone;
    invoice.total = total;
    if (payment) invoice.ship_price = 30000; else invoice.ship_price = 12000
    invoice.sum_price = invoice.total - invoice.ship_price;
    invoice.items = cart.items.filter(item => item.checked == 1)
    let newItems = cart.items.filter(item => item.checked == 0)
    dispatch(updateCart({items: newItems, count: newItems.length}));
    apiInvoice.createInvoice(invoice);
  }
 
  return (isLogged && infoUser && checkout) ? (
    <div className="CheckoutContainer">
      <link rel="https://cdnjs.cloudflare.com/ajax/libs/font-aweson/4.7.0/css/font-aweson.min.css" />
      <h2 className="h2-checkout">Chi Tiết Hóa Đơn</h2>
      <div className="CheckoutContainer-row">
        <div className="col-75">
          <div className="CheckoutContainer-container">
            <form action="">
              <div className="CheckoutContainer-row">
                <div className="col-58">
                  <h3 className="h3-checkout">Thông tin địa chỉ</h3>
                  <label for="fname"><i className="fa fa-user"></i><span className="icon-kc">Họ và Tên</span></label>
                  <input className="input-checkout" type="text" id="fname" name="firstname" readOnly value={infoUser.name} />

                  <label for="email"><i className="fa fa-envelope"></i><span className="icon-kc">Email</span></label>
                  <input className="input-checkout" type="text" id="email" name="email" readOnly value={infoUser.email} />

                  <label for="adr"><i className="fa fa-home"></i><span className="icon-kc">Địa chỉ</span></label>
                  <input className="input-checkout" type="text" id="adr" name="address" value={infoUser.address} />

                  <label for="city"><i className="fa fa-mobile-alt"></i><span className="icon-kc">Số điện thoại</span></label>
                  <input className="input-checkout" type="text" id="city" name="city" value={infoUser.phone} readOnly />
                </div>
                <label>
                  <input type="checkbox" name="sameadr" onChange={() => clickShip(payment)} />Giao hàng nhanh trong vòng 2 giờ
                </label>
              </div>
            </form>
          </div>
        </div>
        <div className="col-25">
          <div className="CheckoutContainer-container">
            <h3 className="h3-checkout">Giỏ hàng</h3>
            {checkout.items.map((item, idx) => (
              <div className="cart-item">
                <div className='form'>
                    <div className="cart-product">
                        <div className="cart-image">
                            <img className="cart-image" src={item.image}></img>
                        </div>
                        <div className="cart-product-infor">
                            <p className="cart-product-name">{item.name}</p>
                            <p className="cart-price-sm">x {item.quantity}</p>
                            <p className="cart-price-sm">{formatCash(String(item.price))}<span>đ</span></p>
                        </div>
                    </div>
                    <div className="cart-unit-price">
                        <h4>{formatCash(String(item.price*item.quantity))}<span>đ</span></h4>
                    </div>
                </div>
              </div>
            ))}
            <div className="CheckoutContainer-phi-van-chuyen-inline">
              <div className="CheckoutContainer-phi-van-chuyen">Phí vận chuyển: <span className="CheckoutContainer-phi-van-chuyen-span">{formatCash(String(payment ? 30000 : 12000))}đ</span></div>
            </div>
            <br />
            <div className="CheckoutContainer-tong-tien-inline">
              <div className="CheckoutContainer-tong-tien">Tổng tiền: <span className="CheckoutContainer-phi-van-chuyen-span">{formatCash(String(total))}đ</span></div>
            </div>
            
          </div>
        </div>
      </div>
      <div className="container-btn-checkout">
        <button className="btn-checkout" onClick={() => btnCheckout()}>Đặt hàng</button>
      </div>
    </div>
  ) : null;
}

export default Checkout;