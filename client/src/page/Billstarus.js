import React, { useState } from 'react';
import './Billstatus.css';

function Billstatus() {

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

    const test = [{
      "id" :1,
      "status" : "đang chuẩn bị"
    },
    {
      "id" :2,
      "status" : "đang giao"
    },
    {
      "id" :3,
      "status" : "đang đã giao"
    }]

    function formatCash(str) {
      return str.split('').reverse().reduce((prev, next, index) => {
          return ((index % 3) ? next : (next + ',')) + prev
      })
    }

    return (
      <div className="BillstatusContainer">

        <link rel="https://cdnjs.cloudflare.com/ajax/libs/font-aweson/4.7.0/css/font-aweson.min.css" />

        <div className="container-billstatus">

            <div className="container-order-tracking">

              <div className="header-comback">
                <div className="come-back">
                  <i class="fas fa-chevron-left"></i>
                  <span className="icon-fas-fa-chevron-left">TRỞ LẠI</span>
                </div>

                <div className="id-order-tracking">
                  <span>ID ĐƠN HÀNG 123</span>
                  <span className="bulkhead">|</span>
                  <span className="status-order">TÌNH TRẠNG ĐƠN</span>
                </div>
              </div>

              <div className="order-tracking">
                <ul className="ul-order-tracking">
                  <li>
                    <img src="./assets/0000_base_url.png"/> <br/>
                    <i className="fa fa-check"></i>
                    <p>Hoàn Hàng Đã Đặt</p>
                  </li>
                  <li>
                    <img src="./assets/0000_base_url.png"/> <br/>
                    <i className="fa fa-check"></i>
                    <p>Xác Nhận Đơn Hàng</p>
                  </li>
                  <li>
                    <img src="./assets/0000_base_url.png"/> <br/> 
                    <i class="fas fa-sync-alt"></i>
                    <p>Đã Giao Cho ĐVVC</p>
                  </li>
                  <li>
                    <img src="./assets/0000_base_url.png"/> <br/>
                    <i className="fa fa-times"></i>
                    <p>Đang Vận Chuyển</p>
                  </li>
                  <li>
                    <img src="./assets/0000_base_url.png"/> <br/>
                    <i className="fa fa-times"></i>
                    <p>Nhận Được Hàng</p>
                  </li>
                </ul>
              </div>
              <div className="cart-total-holder">
                <div className="cart-action-button">
                  <a href="/">Mua Lại</a>
                  <button className="btn-main">Liên Hệ Shop</button>
                </div>
              </div>
            </div>

            <div className="ifo-user-and-time-freight-forwarding">
              <div className="underline"></div>
              <div className="address-delivery-address">
                <div className = "infor-delivery-address">
                  <div className="word-delivery-address">
                    Địa Chỉ Nhận Hàng
                  </div>
                </div>
                <div className="content-and-time-delivery-address">
                  <div className="content-delivery-address">
                    <div className="name-user-delivery-address">Ngọc Quí</div>
                    <div className="phone-and-delivery">
                      <span>0344445655</span>
                      <br/>
                      "tổ 10, linh trung thủ đức"
                    </div>
                  </div>
                  <div className="detail-time-delivery-address">
                    <div className="div-display-block">
                      <div className="branch-detail-time-delivery-address">
                        <div className="first-branch-detail-time-delivery-address"></div>
                        {test.map((te, idx) => (
                        <div className="detail-first-branch-detail-time-delivery-address">
                          <div className="dots-first-branch-detail-time-delivery-address"></div>
                          <div className="first-branch-detail-time-delivery-address">{te.status}</div>
                        </div>))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="list-product-details-bill">
              <div className="underline"></div>
              <div className="cart-list-product-details-bill">
                <div>
                  {data.map((item, idx) => (
                    <div className="cart-item-list-product-details-bill">
                      <form action="">
                        <div className="cart-product-list-product-details-bill">
                          <div className="cart-image">
                            <img className="cart-image" src={item.image}></img>
                          </div>
                          <div className="cart-product-infor">
                            <p className="cart-product-name">{item.fullName}</p>
                            <p className="cart-price-sm">{item.price}</p>
                            <span>x {item.count}</span>
                          </div>
                        </div>
                        <div className="cart-list-product-details-bill-unit-price">
                          <h4>{formatCash(String(item.price * item.count))}</h4>
                        </div>
                      </form>
                    </div>
                  ))}
                  <div className="cart-total-holder-list-product-details-bill">
                    <div className="cart-total-list-product-details-bill">
                      <p>Phí vận chuyển</p>
                      <p></p>
                    </div>
                    <div className="cart-total-list-product-details-bill">
                      <p>Tổng tiền</p>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  }


export default Billstatus;