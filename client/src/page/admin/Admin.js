import React, {useState, useEffect} from 'react'
import { Route, Switch, useRouteMatch } from 'react-router';
import "./User.css";
import {
    useSelector
} from 'react-redux';


import UserSidebar from './UserSidebar'

import ControlProduct from './products/ProductList';
import EditProduct from './products/EditProduct'
import ControlUser from './user/UserList'
import EditUser from './user/EditUser'
import ViewUser from './user/ViewUser'
import AddAdmin from './admin/AddAdminForm'
import AddProduct from './products/AddProduct'
import Profile from './account/Profile';
import Product from '../../page/Product'
import Order from './notifications/Order';
import Dashboad from './dashboad/Dashboard'
import ListInvoice from './invoice/ListInvoice'
import ViewInvoice from './invoice/ViewInvoice';
import EditInvoice from './invoice/EditInvoice';
import NotAllowed from './components/NotAllowed'
function Admin() {

    const user = useSelector(state => state.user);
    let { path } = useRouteMatch();
    const [isAdmin, setIsAdmin] = useState(0)
    const [isMaster, setIsMaster] = useState(0)
    useEffect(() => {
        if (user.isLogged){
            setIsAdmin(user.isAdmin);
            setIsMaster(user.isMaster);
        }
    }, [user])
    return (isAdmin||isMaster)?(
        <div className="User">
            <div className="user-usersidebar">
                <UserSidebar />
            </div>
            <div className="user-content">
                <Switch>
                    <Route exact path={path}>
                        <Dashboad />
                    </Route>
                    {/* <Route exact path={`${path}/dashboad`}>
                        <Dashboad />
                    </Route> */}

                    <Route exact path={`${path}/products`}>
                        <ControlProduct />
                    </Route>
                    <Route exact path={`${path}/product-details/:id`}>
                        <Product/>
                    </Route>
                    <Route exact path={`${path}/edit-product/:id`}>
                        <EditProduct/>
                    </Route>
                    <Route exact path={`${path}/new-product`}>
                        <AddProduct/>
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
                    <Route exact path={`${path}/new-user`}>
                        <AddAdmin/>
                    </Route>
                    <Route exact path={`${path}/invoice`}>
                        <ListInvoice />
                    </Route>
                    <Route exact path={`${path}/invoice/:id`}> 
                        <ViewInvoice/>
                    </Route>
                    <Route exact path={`${path}/edit-invoice/:id`}>
                        <EditInvoice/>
                    </Route>
                </Switch>
            </div>
        </div>
    ):<NotAllowed />
}

export default Admin
