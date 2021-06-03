"use strict";
import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import EditProfile from './components/Test'

import Home from './page/Home'
import Checkout from './page/Checkout'
import Cart from './page/Cart'
import User from './page/user/User'
import Search from './page/Search'
import PageNotFound from './page/PageNotFound'
import Product from './page/Product'
import Login from './page/login/Login'
import Signup from './page/login/Signup'
const App = () => {

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
          <Footer></Footer>
        </div>
      </Router>
    </>
  )
}


export default App
