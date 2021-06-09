import React from 'react'
import {  useEffect } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom"

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './page/Home'
import User from './page/user/User'
import Admin from './page/admin/Admin'

import Search from './page/Search'
import PageNotFound from './page/PageNotFound'
import Product from './page/Product'
import Login from './page/login/Login'
import Signup from './page/login/Signup'
import ProductPage from './page/productPage'

import Cart from './page/cart/Cart';
import Checkout from './page/cart/Checkout';

import InfoTransport from './components/InfoTransport';


import {getProfile} from './redux/actions/user';
import {getCart} from './redux/actions/cart'
import {
  useDispatch,
} from 'react-redux';
import ListInvoice from './page/admin/invoice/ListInvoice';


const App = () => {

  // const dispatch = useDispatch()
  // useEffect(() => {
  //     dispatch(getProfile());
  //     dispatch(getCart);
  // }, [dispatch])

  return (
    <>
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
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
          <ListInvoice/>
          <InfoTransport />
          <Footer></Footer>
        </div>
      </Router>
    </>
  )
}


export default App
