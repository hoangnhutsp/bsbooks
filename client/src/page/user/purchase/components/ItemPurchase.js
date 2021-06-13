import React from 'react';
import {
    useEffect,
} from 'react';
import { useState } from 'react';
import './ItemPurchase.css'
import {typeOfPurchase} from '../constain'
import { useHistory } from 'react-router-dom';

function ItemPurchase({ invoiceData }) {

    function formatCash(str) {
        return str.split('').reverse().reduce((prev, next, index) => {
          return ((index % 3) ? next : (next + ',')) + prev
        })
      }

    const history = useHistory();
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
                            <span className="info-product-purchase-price"><ComponentPrice price={formatCash(String(val.price))} /></span>
                        </div>
                        <div className="hr-break-items"></div>
                    </div>
                )
            })}
            <div className="total-lable">
                <p >Tổng số tiền:</p>
                <p className="price">{formatCash(String(invoice.total))}đ</p>
            </div>
            <button className="total-lable-button" onClick={() => history.push(`/user/purchase/order/${invoice._id}`)}>
                <p >Xem chi tiết</p>
            </button>
            <hr className="hr-break-purchase"/>
        </div>
    ):null;
}

export default ItemPurchase
