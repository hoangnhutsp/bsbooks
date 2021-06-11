import React from 'react'
import { useState } from 'react'
import './ItemAddress.css'
function ItemAddress({ data }) {

    const [address, setAddress] = useState(data)

    console.log(data);
    return (
        <div className="container-item-address">
            <div className="container-info-address">
                <table className="table-info-address">
                    <tr>
                        <td className="info-address-lable">Họ và tên</td>
                        <td className="info-address-val">{address.name}</td>
                    </tr>
                    <tr>
                        <td className="info-address-lable">Số điện thoại</td>
                        <td className="info-address-val">{address.phone}</td>
                    </tr>
                    <tr>
                        <td className="info-address-lable">Địa chỉ</td>
                        <td>{address.address}</td>
                    </tr>
                </table>
                <div className="edit-info-address">
                    <button>Sửa</button>
                    <button>Xóa</button>
                </div>
            </div>


            <button className="btn-make-default">Đặt làm mặc định</button>

        </div>
    )
}

export default ItemAddress
