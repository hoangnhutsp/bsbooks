import React from 'react';
import { useState } from 'react';
import './ItemPurchase.css'

function ItemPurchase({ data }) {
    const [Item, setItem] = useState(data);
    return (
        <div className="container-item-purchase">
            <div className="title-item-purchase">
                <div className="date-item-purchase">
                    Ngay giao: {Item.date}
                </div>
                <div className="status-item-purchase">
                    {Item.status}
                </div>
            </div>
            <br />
            {Item.products.map((val, key) => {
                return (
                    <div>
                        <div className="container-product-purchase">
                            <img alt="not-found" src={val.url}></img>
                            <div className="info-product-purchase">
                                <p>{val.name}</p>
                                <span>x{val.quantity}</span>
                            </div>
                            <p className="price-product-purchase">{val.price}</p>
                        </div>
                        <hr className="hr-break-items"></hr>
                    </div>
                )
            })}
            <div className="total-lable">
                <p >Tong so tien:</p>
                <p className="price">{Item.sumPrice}</p>
            </div>
            <hr className="hr-break-purchase"/>
        </div>
    )
}

export default ItemPurchase
