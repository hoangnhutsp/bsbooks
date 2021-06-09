import React from 'react'
import { useState, useEffect } from 'react'
import SearchBox from './SearchBox';

import './Navbar.css'
import {
    Link,
} from "react-router-dom";

import {
    useSelector
} from 'react-redux';

import iconShoppingCart from './../icons/shopping-cart.svg'

import AllCategories from './all_categories';
function Navbar() {

    const Store = useSelector(state => state);

    const [countCart, setCountCart] = useState(0)

    const [userNavbar, setUserNavbar] = useState({
        name : '',
        url : '',
    });

    useEffect(() => {
        if (Store.user.isLogged) {
            let status = Store.user.isLogged;
            let name = Store.user.infoUser.name;
            let url = Store.user.infoUser.avatar;
            setUserNavbar({ status, name, url })
        }

        if (Store.cart) {
            setCountCart(Store.cart.count)
        }
    }, [Store])
    const Logout = () => {
        localStorage.clear();
        window.location.reload();

    }
    const UserIsLogin = () => {
        return (
                <div className='dropdown'>
                    <div className='navbar-user'>
                        <img alt="avatar user" className="navbar-user-avatar" src={userNavbar.url} />
                        <span className="navbar-user-name">{userNavbar.name}</span>
                    </div>
                    <div className='dropdown-content'>
                        <div className='dropdown-content-item'>
                            <Link to='/user'>Thong tin ca nhan</Link><br/>
                        </div>
                        <div className='dropdown-content-item'>
                            <Link ext to='/user/purchase'>Don hang</Link><br/>
                        </div>
                        <div className='dropdown-content-item' onClick={Logout}>
                            <Link to='/'>Dang xuat</Link>
                        </div>

                    </div>
                </div>
        )
    }

    return (
        <div className="container-navbar">
            <div className="container-mini-navbar">
                {
                    userNavbar.status
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
                            <img alt="icon-shopping-cart" className="navbar-icon-shopping-cart" src={iconShoppingCart} />
                            {countCart > 0 && <span className="navbar-cart-number">{countCart}</span>}
                        </div>
                    </Link >
                </div>

            </div>
            <div className="container-main-navbar">
                <AllCategories />
            </div>
        </div>
    )
}

export default Navbar
