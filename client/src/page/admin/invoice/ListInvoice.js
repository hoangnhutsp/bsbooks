import React, { useEffect, useState } from 'react'
import iconcompeteinvoice from './icon/complete_invoice.png'
import iconCheck from './icon/check.png'
import iconTransport from './icon/transport.png'

import './ListInvoice.css'

export default function ListInvoice() {
    const Items = [
        {
            _id: 12,
            status: 0,
            date: "24-04-2020",
            total_amount: 1000000,
            products: [
                {
                    url: "http://localhost:5000/upload/images/00000_thumbnail_url.png",
                    name: "sach ABC",
                    quantity: 1,
                    price: 100000,
                },
                {
                    url: "http://localhost:5000/upload/images/00000_thumbnail_url.png",
                    name: "BCND",
                    quantity: 10,
                    price: 12123124,
                }
            ]
        },
        {
            _id: 13,
            status: 1,
            date: "24-04-2020",
            total_amount: 1000000,

            products: [
                {
                    url: "http://localhost:5000/upload/images/00000_thumbnail_url.png",
                    name: "Sach hihi",
                    quantity: 1,
                    price: 100000,
                },

            ]
        },
    ]
    return (
        <div>
                <div className="ListInvoice-header-frist">
                    QUẢN LÝ ĐƠN HÀNG
            </div>
                <div className="ListInvoice-2">
                    <div className="ListInvoice-header">
                        <p>Mã Đơn Hàng</p>
                        <p>Thời Gian</p>
                        <p>Khách Hàng</p>
                        <p>Tổng Tiền</p>
                        <p>Trạng Thái</p>
                        <p>Hủy Đơn</p>
                    </div>
                    <div className="ListInvoice-underline"></div>
                    {
                        Items.map((item) => {
                            return (

                                <div className="Invoice-Item">
                                    <div className="Invoice-Form">
                                        <div className="Invoice-id"> {item._id}</div>
                                        <div className="Invoice-date">{item.date}</div>
                                        <div className="Invoice-user-name">Le van luiuiu</div>
                                        <div className="Invoice-totalmoney">{item.total_amount}</div>
                                        <div className="Invoice-status">
                                            {item.status}
                                        </div>
                                        <div className="Invoice-cancel">
                                            X
                                    </div>
                                    </div>
                                </div>
                            )

                        })
                    }
                </div>
                <div className="ListInvoice-detail" >
                </div>
            </div>
       
    )

}
