import React from 'react';
import {
    useEffect,
} from 'react';
import { useState } from 'react';
import './ItemPurchase.css'
import {typeOfPurchase} from '../constain'

function ItemPurchase({ invoiceData }) {

    const [invoice, setItem] = useState()
    useEffect(() => {
        setItem(invoiceData);
    }, [invoiceData])

    const ComponentPrice = ({price}) => {
        return(
            <div className="price row">
                <div className="price">{price}</div>
            </div>
        )
    }
    return invoice ? (
        <div className="container-item-purchase">
         
                <div className="status-item-purchase">
                    {typeOfPurchase[invoice.status_invoice]}
                </div>
            <br />
            {invoice.items.map((val, key) => {
                return (
                    <div>
                        <div className="container-product-purchase">
                            <img alt="not-found" src={val.image}></img>
                            <div className="info-product-purchase">
                                <p>{val.name}</p>
                                <span>x{val.quantity}</span>
                            </div>
                            <div>
                                <ComponentPrice price={val.price} />
                            </div>
                        </div>
                        <hr className="hr-break-items"></hr>
                    </div>
                )
            })}
            <div className="total-lable">
                <p >Tổng số tiền:</p>
                <p className="price">{invoice.total}</p>
            </div>
            <hr className="hr-break-purchase"/>
        </div>
    ):null;
}

export default ItemPurchase
