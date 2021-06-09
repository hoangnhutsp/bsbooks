import React, { useState, useEffect } from 'react'
import Item from '../item/index.js'
import './RecentlyView.css'
import { Link } from 'react-router-dom'

import {getRecentlyViewed} from '../../api/recently_viewd/index.js'

const RecentlyView = () => {
    const [recentlyData, setRecentlyData] = useState()

    useEffect(() => {
        getRecentlyViewed()
        .then(res => res.data)
        .then(data => {
            setRecentlyData(data);
        })
        .catch(err => console.log(err));
    }, [])
    
    return recentlyData?(
        <div className='container-recently-view'>
            <div className=''>
                <div className='title-recently-view'>DANH SÁCH XEM GẦN ĐÂY</div>
                <div className='container-product-recently-view'>
                    {recentlyData.map(item => {
                        return <Item data={item}></Item>
                    })}
                </div>
            </div>
        </div>
    ):null;
}
export default RecentlyView;
