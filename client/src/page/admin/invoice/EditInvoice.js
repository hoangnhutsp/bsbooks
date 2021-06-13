import React, { useEffect } from 'react';
import { useState } from 'react'
import '../../../page/user/account/Profile.css';
import { useParams } from 'react-router-dom'
import './EditInvoice.css'

import * as apiInvoice from '../../../api/invoice'


function EditInvoice() {
    // const statusType = (item) => {
    //     if (item.status_invoice === 0) return ("Chờ xác nhận")
    //     if (item.status_invoice === 1) return ("Giao cho DVVC")
    //     if (item.status_invoice === 2) return ("Đang giao")
    //     if (item.status_invoice === 3) return ("Đã giao")
    //     if (item.status_invoice === 4) return ("Đã hủy")
    // }
    const { id } = useParams();

    const [invoice, setInvoice] = useState({})

    const submitHanler = async e => {
        e.preventDefault();
        await apiInvoice.updateInvoice(id)
            .then(res => res.data)
            .then(data => {
                if (data.status) {
                    setInvoice(data.invoice)

                }
            })
            .catch(err => console.log(err));
    }

    const [status_invoice, setStatus_invoice] = useState(0)
    // const changeStatus = (newstatus) => {
    //     setStatus_invoice(newstatus)
    // }
    const changeStatus = (item) => {
        if (item.status_invoice === 0) {
            return (
                <div >
                    <label className="admin-invoice-status-label">Giao cho DVVC</label>
                </div>
            )
        }
        if (item.status_invoice === 1) {
            return (
                <div >
                    <label className="admin-invoice-status-label">Đang giao</label>
                </div>
            )
        }
        if (item.status_invoice === 2) {
            return (
                <div >
                    <label className="admin-invoice-status-label">Đã giao</label>
                </div>
            )
        }
    }
    useEffect(async () => {
        await apiInvoice.getInvoiceByID(id)
            .then(res => res.data)
            .then(data => {
                console.log(data.invoice);
                setInvoice(data.invoice)
                setStatus_invoice(data.invoice.status_invoice)
            })
            .catch(err => console.log(err))
    }, [])
    return invoice && (
        <div className="container-user-invoicee">
            <div className="user-title">
                <h1>Chi tiết hóa đơn của mã số hóa đơn {invoice._id}</h1>
                <p>Quản lý thông tin hóa đơn để bảo mật tài khoản </p>
            </div>
            <hr />

            <form onSubmit={submitHanler} className="form-display-user-invoicee">
                <div className="form-user-invoicee">
                    <div className="container-info-user-invoicee">
                        <table id="table-info-user-invoicee">
                            <tbody>

                                <tr className="form-group-text">
                                    <td>Mã số hóa đơn</td>
                                    <td>
                                        <p>{invoice._id}</p>
                                    </td>
                                </tr>
                                <tr className="form-group-text">
                                    <td>Khách hàng</td>
                                    <td>
                                        <p>{invoice.name}</p>
                                    </td>
                                </tr>
                                <tr className="form-group-text">
                                    <td>Số điện thoại</td>
                                    <td>
                                        <p>{invoice.phone}</p>
                                    </td>
                                </tr>

                                <tr className="form-group-radio">
                                    <td>Địa chỉ</td>
                                    <td>
                                        <p>{invoice.address}</p>
                                    </td>
                                </tr>
                                <tr className="form-group-radio">
                                    <td>Ngày tạo hóa đơn</td>
                                    <td>
                                        <p>{invoice.createdAt}</p>
                                    </td>
                                </tr>
                                <tr className="form-group-radio">
                                    <td>Tình trạng</td>
                                    <td>
                                        <div>{changeStatus(invoice)}</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Danh sách sản phẩm</td>
                                    <td>
                                        <div>{invoice.items && invoice.items.map((item) => {
                                            return (
                                                <div className="View-Invoice-contraiter">
                                                    <img className="control-image" src={item.image}></img>
                                                    <div className="View-Invoice-product-name">{item.name}</div>
                                                    <div className="View-Invoice-product-price">{item.price}</div>
                                                    <div className="View-Invoice-product-quantity">{item.quantity}</div>
                                                </div>
                                            )
                                        })}</div>
                                    </td>
                                </tr>
                                <tr className="form-group-radio">
                                    <td>Tổng Tiền</td>
                                    <td>
                                        <p>{invoice.total}</p>
                                    </td>
                                </tr>

                            </tbody>

                        </table>

                    </div>
                </div>
                <div className="form-group-radio">
                    <div>Thông báo</div>
                    <div className="form-notification-admin-invoice-contrainer">
                        <form>
                            <label for="fname">Tiêu đề: </label>
                            <input type="text" id="fname"  name="tieu de" placeholder="Nhập tiêu đề.."></input>
                            <label for="lname">Nội dung: </label>
                            <input type="text" id="lname" name="lastname" placeholder="Nhập nội dung.."></input>
                        </form>
                    </div>
                </div>
                <div className="button-final">
                <button 
                type="submit" 
                className="button-update-product color-green" 
                >Xác nhận</button>
                <button type="submit" className="button-update-product color-red">Hủy đơn</button>
                </div>
                

            </form>
        </div>

    )
}

export default EditInvoice
