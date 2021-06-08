import React from 'react';
import { useState } from 'react';
import './HeaderPurchase.css'
function HeaderPurchase({typeOfPurchase, filter, setFilter}) {
    return (    
        <div className="container-header">
        {typeOfPurchase.map((type, idx) => 
            <div 
                className={(idx===filter)?'item-in-row seleted':'item-in-row'}
                onClick={() => setFilter(idx)}
            >
                {type}
            </div>)}
        </div>
    )
}

export default HeaderPurchase
