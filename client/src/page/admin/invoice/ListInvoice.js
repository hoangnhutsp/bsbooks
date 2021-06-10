import React, { useEffect, useState } from 'react'
import iconcompeteinvoice from './icon/complete_invoice.png'
import iconCheck from './icon/check.png'
import iconTransport from './icon/transport.png'

import './ListInvoice.css'




export default function ListInvoice() {
    // const [allInvoice, setAllInvoice] = useState([])
    // useEffect(async () => {
    //     const data = await getInvoiceLists('')
    //     console.log(data['Invoice']);
    //     setAllInvoice(data.Invoice)
    // }, [])
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
                TỔNG QUAN
            </div>
        <div className="ListInvoice-container">
            <div className="ListInvoice">
                <div className="Invoice-row-1">
                    <div className="Invoice-row-1-col-1">
                        <p className="label-special">TỔNG SỐ ĐƠN HÀNG</p>
                        <p className="number-special">8</p>
                    </div>
                    <div className="Invoice-row-1-col-2">
                        <p className="label-special">TỔNG THU</p>
                        <p className="number-special">10.000.000 VNĐ</p>
                    </div>
                </div>

                <div className="Invoice-row-2">
                    <div className="Invoice-row-2-col-1">
                    <div className="label-special label-icon">
                            <p className="label-special">CHỜ XÁC NHẬN</p>
                            <span className="icon-compete-invoice">
                                <img className="icon-check-invoice" src = {iconCheck}></img>
                            </span>
                        </div>
                        <p className="number-special">80</p>
                    </div>
                    <div className="Invoice-row-2-col-2">
                    <div className="label-special label-icon">
                            <p className="label-special">ĐANG GIAO</p>
                            <span className="icon-compete-invoice">
                                <img className="icon-transport-invoice" src = {iconTransport}></img>
                            </span>
                        </div>
                        <p className="number-special">10</p>
                    </div>
                    <div className="Invoice-row-2-col-3">
                        <div className="label-special label-icon">
                            <p className="label-special">HOÀN THÀNH</p>
                            <span className="icon-compete-invoice">
                                <img className="icon-compete-invoice" src = {iconcompeteinvoice}></img>
                            </span>
                        </div>
                        <p className="number-special">90</p>
                    </div>
                </div>
            </div>
            <div className="ListInvoice-header-frist">
                QUẢN LÝ ĐƠN HÀNG
            </div>
            <div className="ListInvoice-2">
                <div className="ListInvoice-header">
                    <p>Mã đơn hàng</p>
                    <p>Ngày bán</p>
                    <p>Khách hàng</p>
                    <p>Tổng tiền</p>
                    <p>Trạng thái</p>
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
                                    <div className="Invoice-status">{item.status}</div>
                                </div>
                            </div>
                        )

                    })
                }
            </div>
            <div className="ListInvoice-detail" >

            </div>


        </div>
        </div>
    )

}
