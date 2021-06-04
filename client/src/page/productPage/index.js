import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../../App.css'
import './styles.css'
// api
import  {getProductLists} from '../../api/product/product_list'
// custom component
import Rate from '../../components/rate'
import Item from '../../components/item'


const ProductPage = () => {
    const [fromValue, setFromValue] = useState()
    const [toValue, setToValue] = useState()
    const [sortType, setSortType] = useState(0)
    const [curData, setCurData] = useState([])
    const [cache, setCache] = useState({}) // Caching data

    useEffect(async() => {
        await sortByPop() // default is soft by pop
    }, [])

    const sortByPop = async () => {
        if (!cache.popular) { // load data when not load yet
            const data = await getProductLists()
            const newData = {
                ...cache,
                "popular": data.product
            }
            console.log({newData});
            setCurData(data.product)
            setCache({
                ...cache,
                "popular": data.product
            })
        }
    }

    const sortByHeighPrice = async () => { // sort data from heigh to low
        if (!cache.hight) { // load data when not load yet
            const data = await getProductLists()
            setCache({
                ...cache,
                "high": data
            })
        }
    }

    const sortByLowPrice = async () => { // sort data from heigh to low
        if (!cache.low) { // load data when not load yet
            const data = await getProductLists()
            setCache({
                ...cache,
                "low": data
            })
        }
    }

    const getLowList = async() => { // sort data from heigh to low
        if (!cache.hight) { // load data when not load yet
            await getProductLists()
        }
    }

    return (
        <div className="productPage">
            <div className="container-f90 row">

                <div className="col-2">
                    <p className="bold uppercase">Đánh giá</p>
                    <br></br>
                    <div className="row align-center hover">
                        <Rate number={5} />
                        <p>Từ 5 sao</p>
                    </div>
                    <div className="row align-center hover">
                        <Rate number={4} />
                        <p>Từ 4 sao</p>
                    </div>
                    <div className="row align-center hover">
                        <Rate number={3} />
                        <p>Từ 3 sao</p>
                    </div>
                    <br></br>
                    <p className="bold uppercase">Giá</p>
                    <div className="tagItem">
                        <span className="white tag sml-text hover">Dưới 70.000</span>
                    </div>
                    <div className="tagItem">
                        <span className="white tag sml-text hover">Từ 70.000 Đến 110.000</span>
                    </div>
                    <div className="tagItem">
                        <span className="white tag sml-text hover">Từ 110.000 Đến 220.000</span>
                    </div>
                    <div className="tagItem">
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

