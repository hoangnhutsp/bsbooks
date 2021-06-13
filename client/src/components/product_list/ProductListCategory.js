import React, { useState, useEffect } from 'react'
import Item from '../item/index.js'
import './RecentlyView.css'
import { Link } from 'react-router-dom'
import * as apiProduct from '../../api/product'

const ProductListCategory = ({category}) => {
   
    const [dataCate, setDataCate] = useState({})
    useEffect( async () => {
        await apiProduct.getProductByCategoryLimit({category, limit: 5})
        .then(res => res.data)
        .then(data => {
            setDataCate(data)
        })
        .catch(err => console.log(err));
    }, [])


    return (dataCate)?(
        <div className='container-recently-view'>
            <div className=''>
                <div className='title-recently-view'>
                    <h2>{dataCate.title}</h2>
                </div>
                <div className='container-product-recently-view'>
                    {dataCate.product&&dataCate.product.map(item => {
                        return <Item data={item}></Item>
                    })}
                </div>
            </div>
        </div>
    ):null;
}
export default ProductListCategory;
