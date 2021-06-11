import React, {useEffect} from 'react'
import { useState } from 'react'
import './EditAddress.css'
import * as api from '../../../../api/address'
import { Link, useParams, useHistory } from 'react-router-dom'


function EditAddress({type}) {
    const { id } = useParams();
    const history = useHistory();
    const [address, setAddress] = useState({})

    useEffect(() => {
        if (type === 'edit'){
            api.getAddressById(id)
            .then(res => res.data)
            .then(data => {
                setAddress(data)
            })
        }
    }, [])
    const checkAddress = () => true
    const submitHanler = async e => {
        e.preventDefault();
        if (!checkAddress) return;
        if (type === 'create'){
            console.log('create');
            await api.createAddress(address)
        } else {
            console.log('edit');
            await api.updateAddress(address, id);

        }
        history.push('/user/address')
    }

    return (
        <div className="container-edit-address">
        
            <form onSubmit={submitHanler}>
                <table id="table-edit-address">
                    <tr className="form-group-text">
                        <td>Địa chỉ</td>
                        <td>
                            <input
                                type="text"
                                name="address"
                                id="address"
                                value={address.address}
                                required
                                onChange={(e) => setAddress({...address, address: e.target.value})}

                            />
                        </td>
                    </tr>
                    <tr className="form-group-text">
                        <td className="lable-table">Tên</td>
                        <td>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={address.name}
                                onChange={(e) => setAddress({...address, name: e.target.value})}

                                required
                            />

                        </td>
                    </tr>
                    <tr className="form-group-text">
                        <td className="lable-table">Số điện thoại</td>
                        <td>
                            <input
                                type="text"
                                name="phone"
                                id="phone"
                                value={address.phone}
                                onChange={(e) => setAddress({...address, phone: e.target.value})}

                                required
                            />

                        </td>
                    </tr>
                </table>

                <div className="btn-submit">
                    <button type="submit" id="submit">Xác nhận</button>
                </div>

            </form>

        </div>
    )
}

export default EditAddress
