import React from 'react'
import { useState, useEffect, useContext } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom"

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BackTop from './components/BackTop'

import Home from './page/Home'
import User from './page/user/User'
import Admin from './page/admin/Admin'
import NotificationConfirm from './components/NotificationConfirm'
import Search from './page/Search'
import TermsPage from './page/TermsPage'
import SecurityPage from './page/SecurityPage'
import FandAPage from './page/FandAPage'
import AboutUs from './page/AboutUs'
import ContactPage from './page/ContactPage'
//import FormComment from './page/FormComment'

import PageNotFound from './page/PageNotFound'
import Product from './page/Product'
import Login from './page/login/Login'
import Signup from './page/login/Signup'
import ForgotPassword from './page/login/ForgotPassword'
import ResetPassword from './page/login/ResetPassword';
import ProductPage from './page/productPage'

import Cart from './page/cart/Cart';
import Checkout from './page/cart/Checkout';

import InfoTransport from './components/InfoTransport';

import TestSocket from './components/Test_Socket.js';
import { SocketContext } from './SocketContext.js'

import {
  useSelector,
  useDispatch,
} from 'react-redux';

import {addNotification} from './redux/actions/notification'
import { getCart } from './redux/actions/cart';
import { getNotificationByIdUser } from './redux/actions/notification.js';
//user socket


const App = () => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  useEffect(() => {
      console.log('get cart && get notification');
      dispatch(getCart());
      dispatch(getNotificationByIdUser());
  }, [user.isLogged])
  let token = localStorage.getItem('token');
  
  const socket = useContext(SocketContext)
  //tạo room của riêng user khi truy cập
  useEffect(() => {
    if (socket) {
        //tạo room của riêng user khi truy cập

      socket.on('connect', () => {
        console.log("I'm connected with the back-end");
        socket.emit('joinRoom', token);
      })

        //lắng nghe khi có thông báo mới

      socket.on('ServerSendNotification', data => {
        console.log('???');
        dispatch(addNotification(data))
      })

    }
  }, [socket])


  return (
    <>
      <link rel="https://cdnjs.cloudflare.com/ajax/libs/font-aweson/4.7.0/css/font-aweson.min.css" />
      <Router>
        <div>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/user">
              <User />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/product/:id_cate">
              <ProductPage />
            </Route>
            <Route path="/product-details/:id">
              <Product />
            </Route>
            <Route path="/user">
              <User />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path='/forgot-password'>
              <ForgotPassword />
            </Route>
            <Route path="/reset-password/:token">
              <ResetPassword />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route path="/dieu-khoan">
              <TermsPage />
            </Route>
            <Route path="/chinh-sach-bao-mat">
              <SecurityPage />
            </Route>
            <Route path="/faq">
              <FandAPage />
            </Route>
            <Route path="/about-us">
              <AboutUs />
            </Route>
            <Route path="/contact">
              <ContactPage />
            </Route>
            <Route path="/test-socket">
              <TestSocket />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>

          <BackTop></BackTop>
          <InfoTransport />
          <Footer></Footer>
        </div>
      </Router>
    </>
  )
}


export default App
