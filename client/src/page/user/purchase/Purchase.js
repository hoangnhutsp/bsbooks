import React from 'react'
import {
    useState,
    useEffect,
} from 'react';

import { DataPurchase } from './DataPurchase'
import ItemPurchase from './components/ItemPurchase'
import HeaderPurchase from './components/HeaderPurchase.js'
import iconShopping from './icons/shopping.svg'

import * as api from './../../../api/invoice'

import './Pruchase.css'
import {typeOfPurchase} from './constain'


function Purchase() {

    const [filter, setFilter] = useState(0)
    const [fullData, setFullData] = useState([])
    const [currData, setCurrData] = useState([])

    useEffect(() => {
        api.getInvoice()
        .then(res => res.data)
        .then(data => {
            setFullData(data.invoice);
            setCurrData(data.invoice);
        })
        .catch(err => console.log(err))
    }, [])

    const titleSta = [
        'Cho xac nhan',
        'Cho xac nhan',
        'Dang giao',
        'Da giao',
        'Da huy',
    ]

    useEffect(() => {
        if (fullData&&fullData.length) {
            if (filter === 0){
                setCurrData(fullData);
            }else{
                let fil = filter;
                // if (filter<=1) {
                //     fil = 1;
                //     setCurrData(fullData.filter(item => item.status_invoice <= fil))

                // } else {
                    setCurrData(fullData.filter(item => item.status_invoice === fil))
                    fil = filter;
                // }
            }
        }
    }, [filter])


    const ListItemPurchaseIsEmpty = () => {
        return(
            <div className="purchase-list-item-purchase-is-empty">
                <img alt="icon" className="icons-shopping-cart" src={iconShopping} />
                <p className="content">Chưa có đơn hàng</p>
            </div>
        )
    }
    return (
        <div className="container-user-purchase">
            <div className="user-title">
                <h1>Đơn hàng</h1>
                <p>Tất cả đơn hàng</p>
            </div>
            

            <HeaderPurchase typeOfPurchase={typeOfPurchase} filter={filter} setFilter={setFilter} />

            <div className="list-item-purchase">
                {
                    (currData&&currData.length)>0?currData.map((val, key) => <ItemPurchase invoiceData={val} />):
                    <ListItemPurchaseIsEmpty />
                }
            </div>
            
        </div>
    )
}

export default Purchase
