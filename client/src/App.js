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
import Search from './page/Search'
import PageNotFound from './page/PageNotFound'
import Product from './page/Product'
import Login from './page/login/Login'
import Signup from './page/login/Signup'
import ProductPage from './page/productPage'


import {getProfile} from './redux/actions/user';
import {
  useDispatch,
} from 'react-redux';

const App = () => {

  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(getProfile())
  }, [dispatch])

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
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/product">
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
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
          <Cart></Cart>
          <Checkout></Checkout>
          <Footer></Footer>
        </div>
      </Router>
    </>
  )
}


export default App
