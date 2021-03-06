import React, { useState, useEffect } from 'react'
import { Link, useParams, useLocation } from 'react-router-dom'
import '../../App.css'
import './styles.css'
// api
import  {getProductLists} from '../../api/product/product_list'
// custom component
import Rate from '../../components/rate'
import Item from '../../components/item'
import Breadcrumb from '../../components/Breadcrumb.js';
import RecentlyView from '../../components/product_list/RecentlyView'
//
import {queryStringSortType} from './constantQuery'

import Pagination from '../../components/Pagination'

const ProductPage = (props) => {
    const [fromValue, setFromValue] = useState()
    const [toValue, setToValue] = useState()
    const [rating, setRating] = useState(0)
    const [sortType, setSortType] = useState(0)
    const [curData, setCurData] = useState([])
    const [breadcrumb, setBreadcrumb] = useState()
    const [page, setPage] = useState(1)
    const [pageMax, setPageMax] = useState(1)
    const [size, setSize] = useState()
    const [raV, setRaV] = useState({minV: 0, maxV: 0});
    const { id_cate } = useParams();
    const location = useLocation();  


    const urlSearchParams = new URLSearchParams(window.location.search);
    const querySearch = Object.fromEntries(urlSearchParams.entries());
    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData();
    }, [sortType, page, id_cate, fromValue, toValue, rating])

    const getData = async () => {
        console.log('getData');
        let queryString = queryStringSortType[sortType].query;
        if (location.pathname==='/search' && querySearch.q !== ''){
            queryString += `&q=${querySearch.q.replace(" ", "%20")}`
        }
        if (id_cate){
            queryString += `&category=${id_cate}`
        }
        if (toValue || fromValue) {
            queryString += `&price=${fromValue},${toValue}`;
        }
        if (rating) {
            queryString += `&rating=${rating}`;
        }
        if (page){
            queryString += `&page=${page}`
        }
        

            const data = await getProductLists(queryString)
            setCurData(data.product)  
            setBreadcrumb(data.breadcrumb)
            setPageMax(data.pageMax)
            setSize(data.size)

            let queryPrice = data.queryPrice;
            if (!(queryPrice.minPrice === 0&&queryPrice.maxPrice===100000000)){
                setFromValue(queryPrice.minPrice);
                setToValue(queryPrice.maxPrice)
            }
            let queryRating = data.queryRating;
            if (queryRating >= 3){
                setRating(queryRating)
            }
        //window.location.reload();
        window.scrollTo(0, 0)
    }


    const getText = () => {
        if (fromValue === 0) return `Duoi ${toValue}`
        if (toValue === 0) return `Tren ${fromValue}`
        return `Tu ${fromValue} den ${toValue}`
    }

    const ResultNotFound = () => {

        return (
            <div>
                <h2>Kh??ng t??m th???y b???t k??? k???t qu??? ph?? h???p.</h2>
            </div>
        )
    }

    const titleBreadcrumb = (size) => {
        if (location.pathname==='/search') 
            return `K???t qu??? t??m ki???m cho \"${querySearch.q}\": ${size} k???t qu???`
        return `(${size} Quyen Sach)`
    }
    return breadcrumb&&setCurData?(
        <div className="productPage">
            <Breadcrumb breadcrumb={breadcrumb} title={titleBreadcrumb(size)}/>
            <div className="container-f90 row">

                <div className="col-2">
                    <p className="bold uppercase">????nh gi??</p>
                    <br></br>
                    <div className="row align-center hover" onClick={() => setRating(5)}>
                        <Rate number={5} />
                        <p>T??? 5 sao</p>
                    </div>
                    <div className="row align-center hover" onClick={() => setRating(4)}>
                        <Rate number={4} />
                        <p>T??? 4 sao</p>
                    </div>
                    <div className="row align-center hover" onClick={() => setRating(3)}>
                        <Rate number={3} />
                        <p>T??? 3 sao</p>
                    </div>
                    <br></br>
                    <p className="bold uppercase">Gi??</p>
                    <div className="tagItem" 
                        onClick={e => {
                            setFromValue(0);
                            setToValue(70000);
                        }}
                    >
                        <span className="white tag sml-text hover">D?????i 70.000</span>
                    </div>
                    <div className="tagItem"
                        onClick={e => {
                            setFromValue(70000);
                            setToValue(110000);
                        }}
                    >
                        <span className="white tag sml-text hover">T??? 70.000 ?????n 110.000</span>
                    </div>
                    <div className="tagItem"
                        onClick={e => {
                            setFromValue(110000);
                            setToValue(220000);
                        }}
                    >
                        <span className="white tag sml-text hover">T??? 110.000 ?????n 220.000</span>
                    </div>
                    <div className="tagItem"
                        onClick={e => {
                            setFromValue(220000);
                            setToValue(0);
                        }}
                    >
                        <span className="white tag sml-text hover">Tr??n 220.000</span>
                    </div>

                    <p className="sml-text">Ch???n kho???ng gi??</p>
                    <br></br>
                    <input className="input" placeholder={0} onChange={(event) => {
                        const value = event.target.value
                        if (!isNaN(parseFloat(value)) && isFinite(value)) {
                            setRaV({...raV, minV : value})
                        }
                    }}></input>
                    <span > - </span>
                    <input className="input" placeholder={0} onChange={(event) => {
                        const value = event.target.value
                        if (!isNaN(parseFloat(value)) && isFinite(value)) {
                            setRaV({...raV, maxV : value})
                        }
                    }}></input>

                    <div className="btn-find-product-price-rating"
                        onClick={e => {
                           let {minV, maxV} = raV;
                           console.log(minV, maxV);
                           if(minV&&maxV){
                            setFromValue(minV);
                            setToValue(maxV);  
                           } 
                        }}
                    >    
                   T??m ki???m
                    </div>       
                </div>

                <div className="col-10">
                    <div className="row">
                        <span className={sortType === 0 ? "sort-item hover selected" : "sort-item hover"}
                            onClick={() => setSortType(0)} >Ph??? bi???n</span>
                        <span className={sortType === 1 ? "sort-item hover selected" : "sort-item hover"}
                            onClick={() => setSortType(1)}>B??n ch???y</span>
                        <span className={sortType === 2 ? "sort-item hover selected" : "sort-item hover"}
                            onClick={() => setSortType(2)}>H??ng m???i</span>
                        <span className={sortType === 3 ? "sort-item hover selected" : "sort-item hover"}
                            onClick={() => setSortType(3)}>Gi?? th???p</span>
                        <span className={sortType === 4 ? "sort-item hover selected" : "sort-item hover"}
                            onClick={() => setSortType(4)}>Gi?? cao</span>
                    </div>
                    <div className="row margin-top-1rem">
                        <div className="container-filter-price-rating">
                        <span>Mi???n ph?? giao h??ng</span>
                        </div>
                        <div className="container-filter-price-rating-item">
                        
                        {    ((fromValue>0)||(toValue>0))&&<span>{getText()}
                        
                    
                        <i class="fas fa-times" onClick={() => {setFromValue(0); setToValue(0)}}></i>
                        </span>}
                        
                        </div>
                        <div className="container-filter-price-rating-item">
                        {(rating>2)&&<span>{`Tu ${rating} sao`}
                        <i class="fas fa-times" onClick={() => setRating(0)}></i>
                        </span>}
                        </div>
                        <div className="container-filter-price-rating-item">
                        {(fromValue>0||toValue>0||(rating>2))&&<span 
                            onClick={ () => {
                                 setFromValue(0);
                                 setToValue(0);
                                 setRating(0);
                            }}
                        >{`Xoa tat ca`}</span> }                       
                        </div>
                    </div>
                    <br></br>
                    <div className="row wrap justify-center">
                        {curData.length>0?curData.map(item=> {
                            return <Item data={item}></Item>
                        }):<ResultNotFound />}
                    </div>
                    <div className="row justify-content-flex-end margin-top-2-rem">
                        {(pageMax>1)&&<Pagination setPage={setPage} page={page} pageMax={pageMax} />}
                    </div>

                </div>
            </div>
            <RecentlyView />

        </div>
    ):null;
}


export default ProductPage

