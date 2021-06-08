import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router';
import "./User.css";

import UserSidebar from './UserSidebar'

// 
import Profile from './account/Profile';
import Address from './account/Address';
import Password from './account/Password';
import Order from './notifications/Order';
import Promotion from './notifications/Promotion';
import Billstatus from './purchase/order/Billstatus'
import PurchaseController from './purchase/PurchaseController'
function User() {
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
                    <Route exact path={`${path}/profile`}>
                        <Profile />
                    </Route>
                    <Route exact path={`${path}/address`}>
                        <Address />
                    </Route>

                    <Route exact path={`${path}/password`}>
                        <Password />
                    </Route>
                    <Route exact path={`${path}/promotion`}>
                        <Promotion />
                    </Route>
                    <Route path={`${path}/purchase`}>
                        <PurchaseController />
                    </Route>
                </Switch>
            </div>
        </div>

        </div>

    )
}

export default User
