import axios from 'axios';
axios.defaults.withCredentials = true


const localhost = 'http://localhost:5000/';

export const createAddress = (data) => {
    let token = localStorage.getItem('token');
    const URL = localhost + 'address/'; 
    return axios.post(URL, data,
        {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
}
export const updateAddress = (data, id) => {
    let token = localStorage.getItem('token');
    const URL = localhost + `address/update/${id}`; 
    return axios.post(URL, data,
        {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
}
export const getAddress = () => {
    let token = localStorage.getItem('token');
    const URL = localhost + 'address/user'
    return axios.get(URL,
        {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
}
export const getAddressById = (id) => {
    console.log('get by id');
    console.log(id);
    let token = localStorage.getItem('token');
    const URL = localhost + `address/${id}`
    return axios.get(URL,
        {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
}

export const setAddressDefault = (_id) => {
    let token = localStorage.getItem('token');
    const URL = localhost + `address/default/${_id}`

    console.log('set address default');
    return axios.post(URL, {_id},
        {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
}

export const deleteAddress = (_id) => {

    console.log('api');
    console.log(_id);
    let id = _id;
    let token = localStorage.getItem('token');
    const URL = localhost + `address/delete/${id}`

    console.log('set address default');
    return axios.delete(URL,
        {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
}