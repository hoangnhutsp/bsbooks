import React from 'react'
import { useState } from 'react'
import './ItemAddress.css'
import { Link, useParams, useHistory } from 'react-router-dom'

function ItemAddress({ data , idx,  setAddressDefaul, delAdress}) {
    const history = useHistory();


    

    return (
        <div className="container-item-address">
            <div className="container-info-address">
                <table className="table-info-address">
                    <tr>
                        <td className="info-address-lable">Ho va ten</td>
                        <td className="info-address-val">{data.name}</td>
                    </tr>
                    <tr>
                        <td className="info-address-lable">So dien thoai</td>
                        <td className="info-address-val">{data.phone}</td>
                    </tr>
                    <tr>
                        <td className="info-address-lable">Dia chi</td>
                        <td>{data.address}</td>
                    </tr>
                </table>
                <div className="edit-info-address">
                    {data.is_default===1&&<span className="is-default-address">Mac dinh</span>}
                    <button 
                        className="btn-edit-address"
                        onClick={()=>history.push(`/user/address/edit/${data._id}`)}
                    
                    >Sua</button>
                    <button className="btn-edit-address"
                        onClick={() => {
                            delAdress(data._id, idx);
                        }}
                    >Xoa</button>
                </div>
            </div>


            {(data.is_default===0)&&<button className="btn-make-default" onClick={() => setAddressDefaul(data._id, idx)}>Dat lam mac dinh</button>}
            <hr></hr>
        </div>
    )
}

export default ItemAddress
