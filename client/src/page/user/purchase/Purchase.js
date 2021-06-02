import React from 'react'

import {DataPurchase} from './DataPurchase'
import ItemPurchase from './components/ItemPurchase'
import './Pruchase.css'
function Purchase() {


    return (
        <div className="container-user-purchase">
            <div className="user-title">
                <h1>Don hang</h1>
                <p>Tat ca don hang</p>
            </div>
            <hr />
            <div className="list-item-purchase">
                {DataPurchase.map((val, key) => {
                    return(
                        <ItemPurchase data={val} />
                    )
                })
                }
            </div>  
        </div>
    )
}

export default Purchase
