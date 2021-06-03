import React from 'react'
import { useState } from 'react'
import SearchBox from './SearchBox';

import './Navbar.css'
import {
    Link,
    Route
} from "react-router-dom";

import iconShoppingCart from './../icons/shopping-cart.svg'
function Navbar() {

    const [countCart, setCountCart] = useState(0)

    const [user, setUser] = useState({
        status: 0,
        url: 'http://localhost:5000/upload/images/vevj2BUMEa1CUZCAJmr-1622614415000.png',
        name: 'Nhut Trang Hoang'
    })

    const UserIsLogin = () => {
        return (
            <div className='navbar-user'>
                <img className="navbar-user-avatar" src={user.url} />
                <span className="navbar-user-name">{user.name}</span>
            </div>
        )
    }

    return (
        <div className="container-navbar">
            <div className="container-mini-navbar">
                {
                    user.status
                        ? <UserIsLogin />
                        : <div className="navbar-login-signup">
                            <Link className="narbar-login" to="/login">
                                Dang nhap
                            </Link >
                            <Link className="narbar-signup" to="/signup">
                                Dang ky
                            </Link >
                        </div>
                }

            </div>
            <div className="container-main-navbar">
                <div className="container-navbar-brand">
                    <Link className="narbar-brand" to="/">
                        Bsbooks
                    </Link >
                </div>
                <div>
                    <SearchBox />
                </div>
                <div className="container-navbar-cart">
                    <Link to="/cart">
                        <div>
                            <img className="navbar-icon-shopping-cart" src={iconShoppingCart} />
                            {countCart>0&&<span className="navbar-cart-number">{countCart}</span>}
                        </div>
                    </Link >
                </div>

            </div>
        </div>
    )
}

export default Navbar
