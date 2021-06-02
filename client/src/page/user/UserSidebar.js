import React from 'react'
import "./UserSidebar.css";
import {
    Link,
    useRouteMatch
} from "react-router-dom";

import avt from './avt.png'
import { SidebarData } from './UserSidebarData'
import { Children } from 'react';


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
    let { path, url } = useRouteMatch();

    return (
        <div className="sidebar-container">
                <div className="sidebar-profile">
                    <img id="sidebar-avatar" src={avt}></img>
                    <div id="sidebar-name">Trang Hoang Nhut</div>
                </div>
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
