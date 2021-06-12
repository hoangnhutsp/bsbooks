import React, { useState, useEffect } from 'react';
import './Billstatus.css';
import * as api from './../../../../api/invoice'
import { useHistory, useParams } from 'react-router-dom';
import iconCancelBill from './../../../../assets/cancel-bill-icon.png'
import h1 from './img/2.jpg'
function Billstatus() {
  const history = useHistory()
  const [invoice, setInvoice] = useState()
  const { id } = useParams();

  useEffect(() => {
    api.getInvoiceByID(id)
      .then(res => res.data)
      .then(data => {
        console.log(data);
        setInvoice(data.invoice);
      })
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    console.log(invoice);
  }, [invoice])


  const test = [{
    "id": 1,
    "status": "đang chuẩn bị"
  },
  {
    "id": 2,
    "status": "đang giao"
  },
  {
    "id": 3,
    "status": "đang đã giao"
  }]

  const statusInvoice = [
    "Don hang Đã Đặt",
    "Cho Xác Nhận",
    "Đã Giao ĐVVC",
    "Nhan dc hang",
  ]

  const statusState = [
    'Cho xac nhan',
    'Giao DVVC',
    'Dang giao',
    'Nhan hang thanh cong',
    'Da Huy',
  ]

  const icons = {
    check: "fa fa-check",
    times: "fa fa-times",
    sync: "fas fa-sync-alt",
  }

  function formatCash(str) {
    return str.split('').reverse().reduce((prev, next, index) => {
      return ((index % 3) ? next : (next + ',')) + prev
    })
  }
  const CancelBill = () => {
    return (
      <div className='billstatus-cancel-bill-component'>
        <div>
        <img src={iconCancelBill} alt='Cancel Bill' className="billstatus-cancel-bill-component-img"/>
        <p className="al-center">HUY</p>

        </div>
      </div>
    )
  }
  return invoice ? (
    <div className="BillstatusContainer">

      <link rel="https://cdnjs.cloudflare.com/ajax/libs/font-aweson/4.7.0/css/font-aweson.min.css" />

      <div className="container-billstatus">

        <div className="container-order-tracking">

          <div className="header-comback">
            <div className="come-back" onClick={() => history.push(`/user/purchase`)}>
              <i class="fas fa-chevron-left"></i>
              <span className="icon-fas-fa-chevron-left">TRỞ LẠI</span>
            </div>

            <div className="id-order-tracking">
              <span>ID ĐƠN HÀNG {invoice._id}</span>
              <span className="bulkhead">|</span>
              <span className="status-order">{statusState[invoice.status_invoice]}</span>
            </div>
          </div>

          <div className="order-tracking">
            {invoice.status_invoice===4
            ?<CancelBill />
            :<ul className="ul-order-tracking">
              {statusInvoice.map((item, key) => {
                let icon = icons.check;
                let status_invoice = invoice.status_invoice;
                if (status_invoice + 1 === key) icon = icons.sync;
                if (status_invoice + 1 < key) icon = icons.times

                console.log(icon);
                return (
                  <li className='li-pass-status'>
                    <img src={h1} /> <br />
                    <i className={icon}></i>
                    <p>{item}</p>
                  </li>
                )
              })
              }
            </ul>}
          </div>
          <div className="cart-total-holder">
            <div className="cart-action-button">
              {/* <a href="/>Mua Lại</a> */}
              {/* <button className="btn-main">Da Nhan Hang</button> */}
            </div>
          </div>
        </div>

        <div className="ifo-user-and-time-freight-forwarding">
          <div className="underline"></div>
          <div className="address-delivery-address">
            <div className="infor-delivery-address">
              <div className="word-delivery-address">
                Địa Chỉ Nhận Hàng
              </div>
            </div>
            <div className="content-and-time-delivery-address">
              <div className="content-delivery-address">
                <div className="name-user-delivery-address">{invoice.name}</div>
                <div className="phone-and-delivery">
                  <span>{invoice.phone}</span>
                  <br />
                  {invoice.address}
                </div>
              </div>
              {/* <div className="detail-time-delivery-address">
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
              </div> */}
            </div>
          </div>
        </div>

        <div className="list-product-details-bill">
          <div className="underline"></div>
          <div className="cart-list-product-details-bill">
            <div>
              {invoice.items.map((item, idx) => {
                console.log(item.price);
                return (
                  <div className="cart-item-list-product-details-bill">
                    <form action="">
                      <div className="cart-product-list-product-details-bill">
                        <div className="cart-image">
                          <img className="cart-image" src={item.image}></img>
                        </div>
                        <div className="cart-product-infor">
                          <p className="cart-product-name">{item.name}</p>
                          <p className="cart-price-sm">{item.price}</p>
                          <span>x {item.quantity}</span>
                        </div>
                      </div>
                      <div className="cart-list-product-details-bill-unit-price">
                        <h4>{formatCash(String(item.price * item.quantity))}</h4>
                      </div>
                    </form>
                  </div>
                )
              })}
              <div className="cart-total-holder-list-product-details-bill">
                <div className="cart-total-list-product-details-bill">
                  <p>Phí vận chuyển </p>
                  <p>{invoice.ship_price}</p>
                </div>
                <div className="cart-total-list-product-details-bill">
                  <p>Tổng tiền</p>
                  <p>{invoice.total}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}


export default Billstatus;