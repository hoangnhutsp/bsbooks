import React from 'react'
import ItemAddress from './../components/ItemAddress'

import { dataAddress } from './dataAddress'

import './Address.css';
function Address() {
    console.log(dataAddress);
    return (
        <div className="container-user-address">
            <div className="container-title">
                <div className="user-title">
                    <h1>Địa Chỉ Của Tôi</h1>
                    <p>Quản lý thông tin dia chi nhan hang </p>
                </div>
                <div className="btn-add-new-address">
                    <button>Them dia chi moi</button>

                </div>
            </div>
            <hr />
            {dataAddress.map(
                (val, key) => {
                    return (
                        <ItemAddress data={val} />
                    )
                }
            )}

        </div>
    )
}

export default Address
