import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getInvoiceLists } from '../../../api/invoice/invoice_list';
import './ListInvoice.css'




export default function ListInvoice() {

    const [dataInvoiceDelete, setDataInvoiceDelete] = useState('');
    const [dataDataStatus, setDataStatus] = useState('');
    const Items = [
        {
            _id: 12,
            status_invoice: 0,
            name: "la van le thi",
            date: "24-04-2020",
            total: 1000000,
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
            status_invoice: 1,
            name: "la van le",
            date: "24-04-2020",
            total: 1000000,

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
    const statusType = (item) =>{
        if (item.status_invoice===0) return ("Chờ xác nhận")
        if (item.status_invoice===1) return ("Đang giao")
        if (item.status_invoice===2) return ("Đã giao")
        if (item.status_invoice===3) return ("Đã hủy")
    }
    
    const [listInvoice, setListInvoice] = useState([])

    useEffect(async () => {
        const data = await getInvoiceLists()
        console.log('data')
        console.log(data);
        setListInvoice(data)
    }, [])
    return (
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <div className="ListInvoice-header-frist">
                QUẢN LÝ ĐƠN HÀNG
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <div class="main-card mb-3 card">
                        <div class="card-body">
                            <table class="mb-0 table">
                                <thead>

                                    <th>Mã Đơn Hàng</th>

                                    <th>Khách Hàng</th>

                                    <th>Trạng Thái</th>
                                    <th></th>
                                    <th></th>
                                    <th>Hủy Đơn</th>

                                </thead>

                                {
                                    Items.map((item) => {
                                        return (
                                            <tbody>
                                                <td className="Invoice-id"> {item._id}</td>

                                                <td className="Invoice-user-name">{item.name}</td>

                                                <td className="Invoice-status">
                                                    {statusType(item)}
                                                </td>
                                                <td>
                                                    <Link to={`invoice/${item._id}`} className="Invoice-View">
                                                        <span className="Invoice-View">Xem</span>
                                                    </Link>
                                                </td>
                                                <td>
                                                    <Link to={`edit-invoice/${item._id}`} className="Invoice-Edit">
                                                        <span className="Invoice-Edit">Sửa</span>
                                                    </Link>
                                                </td>
                                                <td>
                                                    <button className="Invoice-cancel" onClick={() => setDataInvoiceDelete(item._id)}>
                                                        <span className="Invoice-cancel">X</span>
                                                    </button></td>
                                            </tbody>

                                        )

                                    })
                                }
                            </table>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
