import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import './ListInvoice.css'

import * as apiInvoice from '../../../api/invoice'



export default function ListInvoice() {

    const statusType = (item) => {
        if (item.status_invoice === 0) return ("Chờ xác nhận")
        if (item.status_invoice === 1) return ("Giao cho DVVC")
        if (item.status_invoice === 2) return ("Đang giao")
        if (item.status_invoice === 3) return ("Đã giao")
        if (item.status_invoice === 4) return ("Đã hủy")
    }

    const [listInvoice, setListInvoice] = useState([])

    useEffect(async () => {
        await apiInvoice.getAllInvoice()
            .then(res => res.data)
            .then(data => {
                console.log(data);
                if (data.status)
                    setListInvoice(data.invoice)
            })
            .catch(err => console.log(err))
    }, [])
    const cancleInvoice = async (id) => {
        console.log('call cancle');
        await apiInvoice.cancelInvoice(id)
            .then(res => res.data)
            .then(data => {
                console.log(data);
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
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
                                </thead>
                                {
                                    listInvoice.map((item) => {
                                        return (
                                            <tbody>
                                                <td className="Invoice-id"> {item._id}</td>
                                                <td className="Invoice-user-name">{item.name}</td>
                                                <td className="Invoice-status">
                                                    {statusType(item)}
                                                </td>
                                                <td>
                                                    <Link to={`edit-invoice/${item._id}`} className="Invoice-Edit">
                                                        <span className="Invoice-Edit">Sửa</span>
                                                    </Link>
                                                </td>
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
