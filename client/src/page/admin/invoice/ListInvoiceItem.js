import React from 'react'
import { Link } from 'react-router-dom'
import './ListInvoiceItem.css'


export default function ListInvoiceItem(item, user) {
    return (
            <div className="invoice-item">
                <div class='invoice-form'>
                    <Link to='' className="invoice-id">
                    <div className="invoice-id">{item._id}</div>
                    </Link>
                    <div>{item.date}</div>
                    <div>xx</div>
                    <div>{item.total_amount}</div>
                    <div>{item.status}</div>
                </div>
            </div>
    )
}
