import axios from 'axios';
axios.defaults.withCredentials = true


const localhost = 'http://localhost:5000/invoice';

export const getInvoiceLists = async (query) => {
    let URL = localhost + query;
    console.log(URL);
    let {data} = await axios.get(URL)
    return data;
}



export const getInvoiceDetail = async (id) => {
    let URL = localhost + id
    console.log(URL);
    let {data} = await axios.get(URL)
    return data;
}