import axios from 'axios';
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
    let token = localStorage.getItem('token');
    const URL = localhost + `invoice/update/${id}`;
    return axios.post(URL,{
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }}
    );
}

export const getInvoice = () => {
    let token = localStorage.getItem('token');
    const URL = localhost + 'invoice/';
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
