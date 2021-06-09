import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router';
import "./User.css";

import UserSidebar from './UserSidebar'

// 
import Profile from './account/Profile';
import ControlProduct from './products/ProductList';
import EditProduct from './products/EditProduct'
import ControlUser from './user/UserList'
import EditUser from './user/EditUser'
import ViewUser from './user/ViewUser'
import Product from '../../page/Product'
import Password from './account/Password';
import Order from './notifications/Order';
import Promotion from './notifications/Promotion';
import Purchase from './purchase/Purchase'
function Admin() {
    let { path } = useRouteMatch();

    return (
        <div className="container-user">

        <div className="User">
            <div className="user-usersidebar">
                <UserSidebar />
            </div>
            <div className="user-content">
                <Switch>
                    <Route exact path={path}>
                        <Profile />
                    </Route>
                    <Route exact path={`${path}/dashboad`}>
                        <Profile />
                    </Route>
                    <Route exact path={`${path}/products`}>
                        <ControlProduct />
                    </Route>
                    <Route exact path={`${path}/product-details/:id`}>
                        <Product/>
                    </Route>
                    <Route exact path={`${path}/edit-product/:id`}>
                        <EditProduct/>
                    </Route>
                    <Route exact path={`${path}/users`}>
                        <ControlUser />
                    </Route>
                    <Route exact path={`${path}/edit-users/:id`}>
                        <EditUser/>
                    </Route>
                    <Route exact path={`${path}/users/:id`}>
                        <ViewUser/>
                    </Route>
                    <Route exact path={`${path}/invoice`}>
                        <Order />
                    </Route>
                    
                </Switch>
            </div>
        </div>

        </div>

    )
}

export default Admin
