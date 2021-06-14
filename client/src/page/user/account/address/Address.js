import React, { useEffect, useState } from 'react'
import ItemAddress from '../../components/ItemAddress'

import iconAddress from '../../icons/address.svg'

import ListIsEmpty from '../../components/ListIsEmpty'
import NotificationConfirm from '../../../../components/NotificationConfirm'
import * as api from '../../../../api/address'
import { Link, useParams, useHistory } from 'react-router-dom'

import './Address.css';
function Address() {
    const [address, setAdress] = useState([])
    const [def, setDef] = useState()
    const [isOpenConfirmNotifcation, setIsOpenConfirmNotifcation] = useState(0)
    const history = useHistory();

    useEffect(() => {
        api.getAddress()
            .then(res => res.data)
            .then(data => {
                setAdress(data.result)
                let idx = data.result.findIndex(e => e.is_default === 1)
                setDef(idx);
            })
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        console.log(def);
    }, [def])

    const setAddressDefault = (_id, idx) => {
        console.log(_id, idx);
        if (idx !== def) {
            api.setAddressDefault(_id)
                .then(res => res.data)
                .then(data => {
                    let newAddress = address;
                    newAddress[def].is_default = 0;
                    newAddress[idx].is_default = 1;

                    setAdress(newAddress);
                    setDef(idx);
                })
                .catch(err => console.log(err))
        }
    }
    const [itemDel, setItemDel] = useState({})
    const delAdress = async (_id, idx) => {
        setIsOpenConfirmNotifcation(1);
        setItemDel({ _id, idx })

    }

    const setNotificationConfirm = async val => {
        setIsOpenConfirmNotifcation(0);
        if (val === 1) {
            try {
                const idx = itemDel.idx;
                const _id = itemDel._id;
                if (address[idx].is_default === 1) {
                    return;
                }
                await api.deleteAddress(_id)
                    .then(res => res.data)
                    .then(data => {
                        let newAddress = address.filter(ar => ar._id !== _id);
                        setAdress(newAddress);
                    })
                    .catch(err => console.log(err))
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <div className="container-user-address">
            {(isOpenConfirmNotifcation!==0) && <NotificationConfirm title={'Bạn có muốn xóa địa chỉ ?'} setNotificationConfirm={setNotificationConfirm} />}
            <div className="container-title">
                <div className="user-title">
                    <h1>Địa Chỉ Của Tôi</h1>
                    <p>Quản lý thông tin địa chỉ nhận hàng </p>
                </div>
                <div className="btn-add-new-address">
                    <button onClick={() => history.push('/user/address/create')}>Thêm địa chỉ mới</button>

                </div>
            </div>
            <div className="underline-container-user-profile"></div>
            {address && address.length > 0 ? address.map(
                (val, key) => {
                    return (
                        <ItemAddress data={val} idx={key}
                            setAddressDefaul={setAddressDefault}
                            delAdress={delAdress} />
                    )
                }
            ) : <ListIsEmpty icon={iconAddress} title={"Chưa có dia chi"} />}
        </div>
    )
}

export default Address
