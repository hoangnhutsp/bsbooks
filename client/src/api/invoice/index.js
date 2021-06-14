import axios from 'axios';
import {getInvoiceLists} from './invoice_list'
axios.defaults.withCredentials = true


const localhost = 'http://localhost:5000/';


// userID:
// items:   
//  [ _id, String, Number, quantity, 
//    image, discount_rate: Number ]
//
// update: [Date],
// status_invoice,
// name
// phone
// address,
// sum_price
// ship_price
// total


export const createInvoice = (invoice) => {
    let token = localStorage.getItem('token');
    const URL = localhost + 'invoice/create'
    return axios.post(URL, invoice,
        {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
}

export const updateInvoice = (id) => {
    console.log('api - updateinvoice');
    let token = localStorage.getItem('token');
    console.log('token');
    console.log(token);
    const URL = localhost + `invoice/update/${id}`;
    return axios.post(URL,{},{
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }}
    );
}


export const cancelInvoice = (id) => {
    console.log(id);
    console.log('api - cancle');
    let token = localStorage.getItem('token');
    console.log('token');
    console.log(token);
    const URL = localhost + `invoice/cancel/${id}`;
    return axios.post(URL,{},{
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }}
    );
}

export const getInvoice = () => {
    let token = localStorage.getItem('token');
    const URL = localhost + 'invoice/user';
    return axios.get(
        URL, 
        {headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        }},
    )
}
export const getInvoiceByID = (id) => {
    let token = localStorage.getItem('token');
    const URL = localhost + `invoice/${id}`;
    return axios.get(
        URL, 
        {headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        }},
    )
}

export const getAllInvoice = () => {
    let token = localStorage.getItem('token');
    const URL = localhost + `invoice/getall`;
    return axios.get(
        URL, 
        {headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        }},
    )
}

export default {
    getInvoiceLists
}


