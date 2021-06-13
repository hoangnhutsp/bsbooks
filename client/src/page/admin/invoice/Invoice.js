import React from 'react'
import {
    useState,
    useEffect,
} from 'react';




import * as api from './../../../api/invoice'


import {typeOfPurchase} from './constain'
import ListInvoice from './ListInvoice';


function Invoice() {

  
    const [fullData, setFullData] = useState([])
    const [currData, setCurrData] = useState([])

    useEffect(() => {
        api.getInvoice()
        .then(res => res.data)
        .then(data => {
            setFullData(data.invoice);
            setCurrData(data.invoice);
        })
        .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        if (fullData.length) {
            if (filter === 0){
                setCurrData(fullData);
            }else{
                let fil = 0;
                if (filter===1) fil = 0; else fil = filter;
                setCurrData(fullData.filter(item => item.status_invoice === fil))
            }
        }
    }, [filter])


    
    return (
       

            <div className="l">
                {
                    
                    <ListInvoice />
                }
            </div>
            
       
    )
}

export default Invoice