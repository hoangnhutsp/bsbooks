import React from 'react'


import {
    Link
} from "react-router-dom";

function Navbar() {

    // NAVBAR --------------

    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/user">User</Link>
                </li>
                <li>
                    <Link to="/search">Search</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
