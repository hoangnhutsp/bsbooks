import React, { useEffect } from 'react';
import { useState} from 'react'
import '../../../page/user/account/Profile.css';
import { useParams} from 'react-router-dom'
import './EditInvoice.css'

import * as apiInvoice from '../../../api/invoice'

function EditInvoice() {
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


    useEffect(async () => {
        await apiInvoice.getInvoiceByID(id)
        .then(res => res.data)
        .then(data => {
            console.log(data.invoice);
            setInvoice(data.invoice)
        })
        .catch(err => console.log(err))
    }, [])
    return invoice&&(
        <div className="container-user-profile">
            <div className="user-title">
                <h1>Chi tiết hóa đơn của mã số hóa đơn {invoice._id}</h1>
                <p>Quản lý thông tin hóa đơn để bảo mật tài khoản </p>
            </div>
            <hr />

            <form onSubmit={submitHanler} className="form-display-user-profile">
                <div className="form-user-profile">
                    <div className="container-info-user-profile">
                        <table id="table-info-user-profile">
                            <tbody>

                                <tr className="form-group-text">
                                    <td>Mã số hóa đơn</td>
                                    <td>
                                        <p>{invoice._id}</p>
                                    </td>
                                </tr>
                                <tr className="form-group-text">
                                    <td>Họ và tên khách hàng</td>
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
                                        <p>{invoice.date}</p>
                                    </td>
                                </tr>
                                <tr className="form-group-radio">
                                    <td>Tình trạng</td>
                                    <td>
                                            {invoice.status_invoice}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Danh sách sản phẩm</td>
                                    <td>
                                        <div>{invoice.items&&invoice.items.map((item)=>{
                                            return (
                                            <div className = "View-Invoice-contraiter">
                                                <img className="control-image" src={item.thumbnail_url}></img>
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
                <button type="submit" className="button-update-product" >Xac nhan</button>

            </form>
        </div>

    )
}

export default EditInvoice
