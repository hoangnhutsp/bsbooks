import React, {useEffect} from 'react'
import axios from 'axios';

import {checkSessionId} from './../middlewares/checkSessionId'


function Cart() {

    checkSessionId();

    useEffect(() => {
        axios.get('http://localhost:5000/session', {
            withCredentials: true,
        })
            .then(res => console.log(res.data))
    }, [])

    const data = {
        "_id": "607a8f6f9ee5ffb1c7cd5cf7",
        "quantity": 3,
        "name": "SIu pro",
        "price": 1000000000000
    }

    const addToCart = () => {
        let url = 'http://localhost:5000/cart'
        axios.post(url, data, { withCredentials: true})
            .then(res => console.log(res))
    }
    return (
        <div>
            <button onClick = {addToCart}>hihi</button>
        </div>
    )
}

export default Cart
