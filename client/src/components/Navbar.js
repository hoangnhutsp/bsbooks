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
function Navbar() {

    const userStore = useSelector(state => state.user);
    let initData = {}
    initData.status = userStore.isLogged;
    if (userStore.isLogged) {
        initData.name = userStore.infoUser.name;
        initData.url = userStore.infoUser.avatar;
    } else {
        initData.name = '';
        initData.url = '';
    }
    const [countCart, setCountCart] = useState(0)
    const [userNavbar, setUserNavbar] = useState(
        initData
    );

    useEffect(() => {
        if ( userStore.isLogged){
            let status =  userStore.isLogged;
            let name = userStore.infoUser.name;
            let url = userStore.infoUser.avatar;
            setUserNavbar({status, name, url})
        }
    }, [userStore])

    const UserIsLogin = () => {
        return (   
            <Link  to='/user'>
                <div className='navbar-user'>
                    <img alt="avatar user" className="navbar-user-avatar" src={userNavbar.url} />
                    <span className="navbar-user-name">{userNavbar.name}</span>
                </div>
            </Link>
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
        </div>
    )
}

export default Navbar
