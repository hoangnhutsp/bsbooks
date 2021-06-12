import React, { useState, useEffect } from 'react'
import Item from '../item/index.js'
import './RecentlyView.css'
import { Link } from 'react-router-dom'
import iconBack from './icon/left-arrow.png'
import iconNext from './icon/next.png'

import * as apiProduct from '../../api/product'

const ProductListSame = ({ category, currentProductName }) => {
    //Giá trị số sản phẩm sẽ hiện trên khung:
    const number = 5;
    const [count, setCount] = useState(0)
    //Giảm giá trị count
    const ClickBack = () => {
        if (count > 0) {
            let temp = count;
            setCount(temp - 1)
        }
    }

    const ClickNext = () => {
        if (count < indexMax) {
            let temp = count;
            setCount(temp + 1)
        }
        console.log(count)
    }

    const [indexMax, setIndexMax] = useState(4)
    const [dataCate, setDataCate] = useState([])
    useEffect(async () => {
        await apiProduct.getProductByCategoryLimit({ category, limit: 100 })
            .then(res => res.data)
            .then(data => {
                let arrProduct = data.product.filter(item => item.name != currentProductName)
                setDataCate(arrProduct)
                console.log('arrProduct', arrProduct)
                let index = data.product.length - number - 1;
                setIndexMax(index);
            })
            .catch(err => console.log(err));
    }, [])

    return (dataCate) ? (
        <div className='container-recently-view'>
            
            <div className=''>
                <div className='title-recently-view'>
                    <h2>SẢN PHẨM TƯƠNG TỰ</h2>
                </div>
                <div className='class-container-same-product-list'>
                    <div className='container-product-recently-view'>
                        {(count === 0)? null: <img className="class-icon-back-in-same-product-list" src={iconBack} onClick={() => ClickBack()}></img>}
                        {dataCate && dataCate.map((item, idx) => {
                            return (idx >= count && idx <= count + number - 1) ? (<Item data={item}></Item>) : null
                        })}
                        {(count === indexMax)? null:<img className="class-icon-next-in-same-product-list" src={iconNext} onClick={() => ClickNext()}></img>}
                    </div>
                </div>
            </div>
        </div>
    ) : null;
}
export default ProductListSame;