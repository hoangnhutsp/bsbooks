import React, { useEffect,  useContext} from 'react';
import { useState } from 'react'
import '../../../page/user/account/Profile.css';
import { useParams } from 'react-router-dom'
import './EditInvoice.css'
import NotificationConfirm from '../../../components/NotificationConfirm'
import * as apiInvoice from '../../../api/invoice'
import { SocketContext } from '../../../SocketContext.js'

import * as apiNotification from '../../../api/notification'
import dataNotification from './dataNotification';
function EditInvoice() {
    const socket = useContext(SocketContext)
    const [isOpenNoConfirm, setIsOpenNoConfirm] = useState(0)
    const statusType = (status_invoice) => {
        if (status_invoice === 0) return ("Chờ xác nhận")
        if (status_invoice === 1) return ("Giao cho DVVC")
        if (status_invoice === 2) return ("Đang giao")
        if (status_invoice === 3) return ("Đã giao thành công")
        if (status_invoice === 4) return ("Đã hủy")
    }
    const statusButton = (status_invoice) => {
        if (status_invoice === 0) return ("Xác nhận")
        if (status_invoice === 1) return ("Đã giao cho DVVC")
        if (status_invoice === 2) return ("Xác nhận giao thành công")
    }
    const { id } = useParams();

    const [invoice, setInvoice] = useState({})
    const [noti, setNoti] = useState({})

    const addNotificationSocket = async (noti) => {
        let token = localStorage.getItem('token');
 
        await apiNotification.addNotification(noti)
        .then(res => res.data)
        .then(data => {
             data.token = token;
             console.log('socket addNotification');
             socket.emit('addNotification', data)
        })
        .catch(err => console.log(err))
     }

    const submitHanler = async e => {
        e.preventDefault();
        await addNotificationSocket(noti)
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

    useEffect(() => {
        if (invoice.userID){
            console.log(dataNotification[invoice.status_invoice]);

            

            try {
                let id_user = invoice.userID;
            let title = dataNotification[invoice.status_invoice].title;
            let description =dataNotification[invoice.status_invoice].description;
                setNoti({...noti, id_user, title, description})
                
            } catch (error) {
            }
       
        }

    }, [invoice])

    const cancelInvoicePEO = async () => {
        if (noti.title&&noti.description) {
            console.log('HUY DON HANG');
            await addNotificationSocket(noti);
            await apiInvoice.cancelInvoice(invoice._id)
            .then(res => res.data)
            .then(data => {
                console.log('data - huuy don hang');
                setInvoice(data.invoice)
            })
            .catch(er => console.log(er))

        }
    }

    const setNotificationConfirm = val => {
        console.log(val);
        if (val === 1) {
            cancelInvoicePEO();
        }
        setIsOpenNoConfirm(0);
    }
    return invoice && (
        <div className="container-user-invoicee">
            {isOpenNoConfirm===1&& <NotificationConfirm title={'Bạn có muốn hủy đơn hàng?'} setNotificationConfirm={setNotificationConfirm}/>}
            <div className="user-title">
                <h1>Chi tiết hóa đơn của mã số hóa đơn {invoice._id}</h1>
                <p>Quản lý thông tin hóa đơn để bảo mật tài khoản </p>
            </div>
            <div className="underline-container-user-invoicee"></div>

            <form onSubmit={submitHanler} className="form-display-user-invoicee">
                <div className="form-user-invoicee">
                    <div className="container-info-user-invoicee">
                        <table id="table-info-user-invoicee">
                            <tbody>
                                <tr className="form-group-radio">
                                    <td className="bold">Tình trạng</td>
                                    <td>
                                        <div className=" color-status-invoice">{statusType(invoice.status_invoice)}</div>
                                    </td>
                                </tr>
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

                                <tr>
                                    <td>Sản phẩm</td>
                                    <td>
                                        <div>{invoice.items && invoice.items.map((item) => {
                                            return (
                                                <div className="View-Invoice-contraiter">
                                                    <img className="control-image" src={item.image}></img>
                                                    <div className="View-Invoice-product-name">{item.name}</div>
                                                    <div className="View-Invoice-product-quantity">x{item.quantity}</div>

                                                    <div className="View-Invoice-product-price">{item.price}</div>
                                                </div>
                                            )
                                        })}</div>
                                    </td>
                                </tr>
                                <tr className="form-group-radio">
                                    <td>Phí ship</td>
                                    <td>
                                        <p>{invoice.ship_price}</p>
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
                {invoice.status_invoice < 3 &&
                    <div>

                        <div className="form-group-radio">
                            <div className="notification-for-user">Thông báo đến người dùng</div>

                            <div className="form-notification-admin-invoice-contrainer">
                                <table>
                                    <tr>

                                        <td><label >Tiêu đề: </label></td>
                                        <td>
                                            <input required placeholder="Nhập tiêu đề.." className="input-notificaion-user"
                                            onChange={(e) => setNoti({...noti, title: e.target.value})}
                                            value={noti.title}

                                        ></input></td>

                                    </tr>
                                    <tr>
                                        <td><label>Nội dung: </label></td>
                                        <td><input required placeholder="Nhập nội dung.." className="input-notificaion-user"
                                        onChange={(e) => setNoti({...noti, description: e.target.value})}
                                        value={noti.description}
                                        ></input></td>

                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div className="button-final">
                            <button
                                type="submit"
                                className="button-update-product color-green">{statusButton(invoice.status_invoice)}</button>
                        </div>
                    </div>}

            </form>
            {invoice.status_invoice < 3&&<button className="button-update-product-edit-invoice" onClick={() => setIsOpenNoConfirm(1)}>Hủy đơn</button>}

        </div>

    )
}

export default EditInvoice
