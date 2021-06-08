import React from 'react'
import {
    useState,
    useEffect,
} from 'react';

import { Link, useLocation } from 'react-router-dom';
import './Breadcrumb.css'
import iconHomepage from './../icons/homepage.svg'
function Breadcrumb( {breadcrumb}) {

    const [data, setData] = useState([]);
    useEffect(() => {
        setData(breadcrumb)
    }, [breadcrumb])

    return data?(
        <div className='breadcrumb-block'>
            <img src={iconHomepage} className="img-size-icons-home"/>

            <ul className='mz-breadcrumb-block__list'>
                {data.map((pa, idx) => {
                    let name = pa.name
                    if (idx != data.length-1) name += ` /`;
                    return(<li className={idx!==data.length-1?"breadcrum-item-name":"breadcrum-item-name-end"}>
                        
                        <Link to={pa.path}>{name}&nbsp;</Link>
                    </li>)
                })}

            </ul>
        </div>
    ):null
}

export default Breadcrumb
