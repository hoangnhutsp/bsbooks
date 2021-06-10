import React from 'react'
import { Route, Switch, useRouteMatch, Router } from 'react-router';

import Purchase from './Purchase.js'
import Billstatus from './order/Billstatus.js'

function PurchaseController() {
    let { path } = useRouteMatch();
    return (
        <div>    
            <Switch>
                <Route exact path={path}>
                    <Purchase />
                </Route>
                <Route path={`${path}/order/:id`}>
                    <Billstatus />
                </Route>
                
            </Switch>
        </div>


    )
}

export default PurchaseController
