import React, { useState, useEffect } from 'react'

import './Pagination.css'
function Pagination({ pagination, setPagination }) {
    let { page, pageMax } = pagination;

    const [arrPagination, setArrPagination] = useState([])
    const [currPage, setCurrPage] = useState(pagination.page)
    const [currPageMax, setCurrPageMax] = useState(pagination.pageMax)

    const creatListPage = (page, pageMax) => {
        let arr = [];
        let formPage = Math.max(page - 2, 1);
        let toPage = Math.min(formPage + 4, pageMax);
        formPage = Math.max(1, Math.min(formPage, toPage-4))
        for (let i = formPage; i <= toPage; i++) arr.push(i);
        return arr;
    }

    useEffect(() => {
        setArrPagination(creatListPage(page, pageMax));
    }, [])

    useEffect(() => {
        console.log(currPage, currPageMax);
        if (currPage && currPageMax) {
            setArrPagination(creatListPage(currPage, currPageMax))
            setPagination({ page: currPage, pageMax: currPageMax })
        }
    }, [currPage])

    const NumberPage = (x) => 
         <div
            className={(x === currPage)
                ? "pagination-item-number-select circle"
                : "pagination-item-number circle"}
            onClick={() => setCurrPage(x)}
        >{x}</div>
    
    return (pagination) && (
        <div>
            <link rel="https://cdnjs.cloudflare.com/ajax/libs/font-aweson/4.7.0/css/font-aweson.min.css" />
            <div className="pagination-list-item">
                <div 
                    className="pagination-item-number circle"
                    onClick={() => {
                        if (currPage > 1) setCurrPage(currPage-1);
                    }}
                ><i class="fas fa-caret-left"></i></div>
                {arrPagination.map((x) => NumberPage(x))}
                <div 
                    className="pagination-item-number circle"
                    onClick={() => {
                        if (currPage < currPageMax) setCurrPage(currPage+1);
                    }}
                ><i class="fas fa-caret-right"></i></div>

            </div>
        </div>
    )
}

export default Pagination
