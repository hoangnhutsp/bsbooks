import React from 'react'

import { DataPurchase } from './DataPurchase'
import ItemPurchase from './components/ItemPurchase'
import './Pruchase.css'

import iconShopping from './icons/shopping.svg'
function Purchase() {

    const ListItemPurchase = (data) => {
        console.log(data);
        return (
            <div>
                {data.map((val, key) => {
                    return (
                        <ItemPurchase data={val} />
                    )
                })}
            </div>

        )
    }

    const ListItemPurchaseIsEmpty = () => {
        return(
            <div className="purchase-list-item-purchase-is-empty">
                <img className="icons-shopping-cart" src={iconShopping} />
                <p className="content">Chưa có đơn hàng</p>
            </div>
        )
    }
    return (
        <div className="container-user-purchase">
            <div className="user-title">
                <h1>Don hang</h1>
                <p>Tat ca don hang</p>
            </div>
            <hr className="break-title-and-info" />
            <div className="list-item-purchase">
                {
                    DataPurchase ? 
                    ListItemPurchase(DataPurchase) :
                    <ListItemPurchaseIsEmpty />
                }
            </div>
            
        </div>
    )
}

export default Purchase
