import React from 'react'
import { Route, Switch, useRouteMatch, Router } from 'react-router';

import Address from './Address'
import EditAddress from './EditAddress'

function AddressController() {
    let { path } = useRouteMatch();
    return (
        <div>    
            <Switch>
                <Route exact path={path}>
                    <Address />
                </Route>
                <Route path={`${path}/edit/:id`}>
                    <EditAddress type='edit'/>
                </Route>
                <Route path={`${path}/create`}>
                    <EditAddress type='create' />
                </Route>
                
            </Switch>
        </div>


    )
}

export default AddressController
