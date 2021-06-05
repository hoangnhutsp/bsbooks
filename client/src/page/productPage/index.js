import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../../App.css'
import './styles.css'
// api
import  {getProductLists} from '../../api/product/product_list'
// custom component
import Rate from '../../components/rate'
import Item from '../../components/item'

//
import {queryStringSortType} from './constantQuery'

const ProductPage = () => {
    const [fromValue, setFromValue] = useState(0)
    const [toValue, setToValue] = useState(0)
    const [rating, setRating] = useState(0)
    const [sortType, setSortType] = useState(0)
    const [curData, setCurData] = useState([])
    const [cache, setCache] = useState({}) // Caching data

 


    useEffect(async() => {
        await sortData(sortType) // default is soft by pop
    }, [])

    useEffect(() => {
        sortData();
    }, [sortType])


    const sortData = async () => {
        let queryString = queryStringSortType[sortType].query;
        if (toValue || fromValue) {
            queryString += `&price=${fromValue},${toValue}`;
        }
        if (rating) {
            queryString += `&rating=${rating}`;
        }
        
        console.log(`query: ${queryString}`);
        const data = await getProductLists(queryString)
        setCurData(data.product)  
    }

   
    return (
        <div className="productPage">
            <div className="container-f90 row">

                <div className="col-2">
                    <p className="bold uppercase">Đánh giá</p>
                    <br></br>
                    <div className="row align-center hover" onClick={() => setRating(5)}>
                        <Rate number={5} />
                        <p>Từ 5 sao</p>
                    </div>
                    <div className="row align-center hover" onClick={() => setRating(4)}>
                        <Rate number={4} />
                        <p>Từ 4 sao</p>
                    </div>
                    <div className="row align-center hover" onClick={() => setRating(3)}>
                        <Rate number={3} />
                        <p>Từ 3 sao</p>
                    </div>
                    <br></br>
                    <p className="bold uppercase">Giá</p>
                    <div className="tagItem" 
                        onClick={e => {
                            setFromValue(0);
                            setToValue(70000);
                        }}
                    >
                        <span className="white tag sml-text hover">Dưới 70.000</span>
                    </div>
                    <div className="tagItem"
                        onClick={e => {
                            setFromValue(70000);
                            setToValue(110000);
                        }}
                    >
                        <span className="white tag sml-text hover">Từ 70.000 Đến 110.000</span>
                    </div>
                    <div className="tagItem"
                        onClick={e => {
                            setFromValue(110000);
                            setToValue(220000);
                        }}
                    >
                        <span className="white tag sml-text hover">Từ 110.000 Đến 220.000</span>
                    </div>
                    <div className="tagItem"
                        onClick={e => {
                            setFromValue(220000);
                            setToValue(0);
                        }}
                    >
                        <span className="white tag sml-text hover">Trên 220.000</span>
                    </div>

                    <p className="sml-text">Chọn khoảng giá</p>
                    <br></br>
                    <input className="input" placeholder={0} value={fromValue} onChange={(event) => {
                        const value = event.target.value
                        if (!isNaN(parseFloat(value)) && isFinite(value)) {
                            setFromValue(event.target.value)
                        }
                    }}></input>
                    <span > - </span>
                    <input className="input" placeholder={0} value={toValue} onChange={(event) => {
                        const value = event.target.value
                        if (!isNaN(parseFloat(value)) && isFinite(value)) {
                            setToValue(event.target.value)
                        }
                    }}></input>
                </div>

                <div className="col-10">
                    <div className="row">
                        <span className={sortType === 0 ? "sort-item hover selected" : "sort-item hover"}
                            onClick={() => setSortType(0)} >Phổ biến</span>
                        <span className={sortType === 1 ? "sort-item hover selected" : "sort-item hover"}
                            onClick={() => setSortType(1)}>Bán chạy</span>
                        <span className={sortType === 2 ? "sort-item hover selected" : "sort-item hover"}
                            onClick={() => setSortType(2)}>Hàng mới</span>
                        <span className={sortType === 3 ? "sort-item hover selected" : "sort-item hover"}
                            onClick={() => setSortType(3)}>Giá thấp</span>
                        <span className={sortType === 4 ? "sort-item hover selected" : "sort-item hover"}
                            onClick={() => setSortType(4)}>Giá cao</span>
                    </div>
                    <br></br>
                    <div className="row wrap justify-center">
                        {curData.map(item=> {
                            return <Item data={item}></Item>
                        })}
                    </div>
                    

                </div>
            </div>
        </div>
    )
}


export default ProductPage

