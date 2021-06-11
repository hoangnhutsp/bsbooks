import React, { useEffect } from 'react';
import { useState} from 'react'
import '../../../page/user/account/Profile.css';
import { useParams} from 'react-router-dom'
import './EditInvoice.css'
import { updateInvoice } from '../../../api/invoice';




function EditInvoice() {
// userID:
// items:   
//  [ _id, String, Number, quantity, 
//    image, discount_rate: Number ]
//
// update: [Date],
// status_invoice,
// name
// phone
// address,
// sum_price
// ship_price
// total
    const { id } = useParams();
    const [status_invoice, setSatus_invoice]   = useState('')
    const [invoice, setInvoice] = useState({
    
            _id: 12,
            status_invoice: 0,
            name: "la van le thi",
            phone:"1234567880",
            date: "24-04-2020",
            address:"ghghghghghjksdhgu",
            total: 1000000,
            items: [
                {
                    thumbnail_url: "http://localhost:5000/upload/images/51577b8e7eeb27545e2d5016151793ca.jpg",
                    name: "sach ABC",
                    quantity: 1,
                    price: 100000,
                },
                {
                    thumbnail_url: "http://localhost:5000/upload/images/51577b8e7eeb27545e2d5016151793ca.jpg",
                    name: "BCND",
                    quantity: 10,
                    price: 12123124,
                }
            ]
        
    })
    // useEffect(async() => {
    //     const invoice = await getInvoiceDetail(id)
    //     console.log(invoice)

    //     if (invoice) {
    //         invoice.status_invoice = EditStatus_Invoice()      
    //     }

    // }, [])
    const submitHanler = e => {
        e.preventDefault();
        console.log(invoice);
    }
    return (
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
                                        <select>
                                            <option onChange = {()=>{setSatus_invoice(invoice.status_invoice=0)}}>Chờ xác nhận</option>
                                            <option onChange = {()=>{setSatus_invoice(invoice.status_invoice=1)}}>Đang giao</option>
                                            <option onChange = {()=>{setSatus_invoice(invoice.status_invoice=2)}}>Đã giao</option>
                                            <option onChange = {()=>{setSatus_invoice(invoice.status_invoice=3)}}>Đã hủy</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Danh sách sản phẩm</td>
                                    <td>
                                        <div>{invoice.items.map((item)=>{
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
            </form>
            <button type="submit" className="button-update-product" onClick={() => updateInvoice()}>Cập Nhật</button>
        </div>

    )
}

export default EditInvoice
