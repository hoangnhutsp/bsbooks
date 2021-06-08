import React from 'react'

import {
    useState,
    useEffect,
} from 'react';

import "./UserSidebar.css";
import {
    Link,
    useRouteMatch
} from "react-router-dom";

import avt from './avt.png'
import { SidebarData } from './UserSidebarData'


import {
    useSelector
} from 'react-redux';


function SideBarLink({ exact, to, children }) {

    const match = useRouteMatch({
        exact,
        path: to
    })

    
    return (
        <div
            className={match ? "customize-link-active" : "customize-link-normal"}
        >
            <Link to={to}>
                {children}
            </Link>
        </div>

    )
}
function UserSidebar() {
    let { url } = useRouteMatch();

    const user = useSelector(state => state.user)
    const [userSidebarData, setUserSidebarData] = useState({
        name: '',
        url: avt,
    });

    useEffect(() => {
        if ( user.isLogged){
            let name = user.infoUser.name;
            let url = user.infoUser.avatar;
            setUserSidebarData({name, url})
        }
    }, [user])

    return (
        <div className="sidebar-container">
            <ul className="sidebar-list">
                {SidebarData.map((val, key) => {
                        return (
                            <li
                                key={key}
                                className="row-user-sidebar"
                            >
                                <SideBarLink to={`${url}/${val.link}`}>
                                    {val.title}
                                </SideBarLink>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    )
}


export default UserSidebar
