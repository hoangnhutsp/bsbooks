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
import NotificationBox from './NotificationBox'
import AllCategories from './all_categories';

import LogoBsBooks from './assets/logo-bsbooks.png'
function Navbar() {

    const Store = useSelector(state => state);

    const [countCart, setCountCart] = useState(0)

    const [userNavbar, setUserNavbar] = useState({
        name : '',
        url : '',
        isAdmin: 0,
        isMaster: 0,
    });

    useEffect(() => {
        console.log('store change');
        if (Store.user.isLogged) {
            let status = Store.user.isLogged;
            let name = Store.user.infoUser.name;
            let url = Store.user.infoUser.avatar;
            let isAdmin = Store.user.isAdmin;
            let isMaster = Store.user.isMaster;
            setUserNavbar({ status, name, url, isAdmin, isMaster})
        }

        if (Store.cart) {
            setCountCart(Store.cart.count)
        }
    }, [Store])
    const Logout = () => {
        localStorage.clear();
        window.location.reload();

    }

    const getName = (name, isAdmin) => {
        if (userNavbar.isMaster) return `${name} (Master)`;
        if (userNavbar.isAdmin) return `${name} (Admin)`;
        return name;
    }
    const UserIsLogin = () => {
        return (
                <div className='dropdown'>
                    <div className='navbar-user'>
                        <img alt="avatar user" className="navbar-user-avatar" src={userNavbar.url} />
                        <span className="navbar-user-name">{getName(userNavbar.name)}</span>
                    </div>
                    <div className='dropdown-content'>
                        {(userNavbar.isAdmin||userNavbar.isMaster)&&
                        <div className='dropdown-content-item'>
                            <Link to='/admin'>Admin</Link><br/>
                        </div>}
                        <div className='dropdown-content-item'>
                            <Link to='/user'>Th??ng tin c?? nh??n</Link><br/>
                        </div>
                        <div className='dropdown-content-item'>
                            <Link ext to='/user/purchase'>????n h??ng</Link><br/>
                        </div>
                        <div className='dropdown-content-item' onClick={Logout}>
                            <Link to='/'>????ng xu???t</Link>
                        </div>

                    </div>
                </div>
        )
    }

    return (
        <div className="container-navbar">
            
            <div className="container-mini-navbar">
                <div className="container-item-on-top">
                        
                    {
                    userNavbar.status
                        ? <UserIsLogin />
                        : <div className="navbar-login-signup">
                            <Link className="narbar-login" to="/login">
                                ????ng nh???p
                            </Link >
                            <Link className="narbar-signup" to="/signup">
                                ????ng k??
                            </Link >
                        </div>
                }
             
                </div>

            </div>
            <div className="container-main-navbar">
                <div className="container-navbar-brand">
                    <Link className="narbar-brand" to="/">
                        BSBooks
                    </Link >
                </div>
                <div>
                    <SearchBox />
                </div>
                <div className="container-navbar-cart row-center">
                    <NotificationBox />
                    <Link to="/cart">
                            <img alt="icon-shopping-cart" className="navbar-icon-shopping-cart" src={iconShoppingCart} />
                            {countCart > 0 && <span className="navbar-cart-number">{countCart}</span>}
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
