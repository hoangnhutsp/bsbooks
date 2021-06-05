import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../App.css'
import './Home.css'
// api
import  {getProductLists} from '../api/product/product_list'
// custom component
import Rate from '../components/rate'
import Item from '../components/item'

//

const Home = () => {
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
        let queryString = '';
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
            <div className="container-f90 row justify-center">
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


export default Home;

