import React, { useState, useEffect } from 'react'

import './Pagination.css'
function Pagination({ page, pageMax, setPage }) {
    let arrPagination = [];
    let formPage = Math.max(page - 2, 1);
    let toPage = Math.min(formPage + 4, pageMax);
    formPage = Math.max(1, Math.min(formPage, toPage - 4))
    for (let i = formPage; i <= toPage; i++) arrPagination.push(i);

    const NumberPage = (x) =>
        <div
            className={(x === page)
                ? "pagination-item-number-select circle"
                : "pagination-item-number circle"}
            onClick={() => setCurrPage(x)}
        >{x}</div>

    const setCurrPage = (page) => {
        console.log('set page');
        setPage(page)
    }
    return (arrPagination.length>0) && (
        <div>
            <link rel="https://cdnjs.cloudflare.com/ajax/libs/font-aweson/4.7.0/css/font-aweson.min.css" />
            <div className="pagination-list-item">
                <div
                    className="pagination-item-number circle"
                    onClick={() => {
                        if (page > 1) setCurrPage(page - 1);
                    }}
                ><i class="fas fa-caret-left"></i></div>
                {arrPagination.map((x) => NumberPage(x))}
                <div
                    className="pagination-item-number circle"
                    onClick={() => {
                        if (page < pageMax) setCurrPage(page + 1);
                    }}
                ><i class="fas fa-caret-right"></i></div>

            </div>
        </div>
    )
}

export default Pagination
