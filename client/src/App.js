import React from 'react'
import {  useEffect } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom"

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CommentProduct from './components/CommentProduct'
import NotificationBox from './components/NotificationBox'

import ShowComment from './components/ShowComment'

import Home from './page/Home'
import User from './page/user/User'
import Admin from './page/admin/Admin'

import Search from './page/Search'
import TermsPage from './page/TermsPage'
import SecurityPage from './page/SecurityPage'
import FandAPage from './page/FandAPage'
import AboutUs from './page/AboutUs'
//import FormComment from './page/FormComment'
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
          <CommentProduct></CommentProduct>
          <NotificationBox></NotificationBox>
          <TermsPage></TermsPage>
          <SecurityPage></SecurityPage>
          <FandAPage></FandAPage>
          <AboutUs></AboutUs>
          <InfoTransport />
          <ShowComment></ShowComment>
          <Footer></Footer>
        </div>
      </Router>
    </>
  )
}


export default App
