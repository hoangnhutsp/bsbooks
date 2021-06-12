import React from 'react'
import {
    useState,
    useEffect,
} from 'react';

import { Link, useLocation } from 'react-router-dom';
import './Breadcrumb.css'
import iconHomepage from './../icons/home_page.svg'
function Breadcrumb( {breadcrumb, title}) {

    const [data, setData] = useState([]);
    useEffect(() => {
        setData(breadcrumb)
    }, [breadcrumb])

    return data?(
        <div className='breadcrumb-block'>
            {/* <img src={iconHomepage} className="img-size-icons-home"/> */}

            <ul className='mz-breadcrumb-block__list'>
                {data.map((pa, idx) => {
                    let name = pa.name + '  /'

                    console.log(pa.path);
                    return(<li className="breadcrum-item-name" key={idx}>
                        <div className="nhutrang">
                        <Link  to={pa.path}>{name}&nbsp;</Link>

                        </div>
                    </li>)
                })}
                <li className="title-breadcrum">{title}</li>

            </ul>
        </div>
    ):null
}

export default Breadcrumb
