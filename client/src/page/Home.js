import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../App.css'
import './Home.css'
// api
import  {getProductLists} from '../api/product/product_list'
// custom component

import ProductListCategory from '../components/product_list/ProductListCategory'
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
        <div>
            <ProductListCategory category={3}/>
            <ProductListCategory category={4}/>
            <ProductListCategory category={5}/>
            <ProductListCategory category={6}/>
            <ProductListCategory category={7}/>
        </div>
    )
}


export default Home;

