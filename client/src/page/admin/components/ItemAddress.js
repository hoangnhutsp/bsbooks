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
                        <td className="info-address-lable">Ho va ten</td>
                        <td className="info-address-val">{address.name}</td>
                    </tr>
                    <tr>
                        <td className="info-address-lable">So dien thoai</td>
                        <td className="info-address-val">{address.phone}</td>
                    </tr>
                    <tr>
                        <td className="info-address-lable">Dia chi</td>
                        <td>{address.address}</td>
                    </tr>
                </table>
                <div className="edit-info-address">
                    <button>Sua</button>
                    <button>Xoa</button>
                </div>
            </div>


            <button className="btn-make-default">Dat lam mac dinh</button>

        </div>
    )
}

export default ItemAddress
