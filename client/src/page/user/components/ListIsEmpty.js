import React from 'react'
import './ListIsEmpty.css'

function ListIsEmpty({icon, title}) {
    return (
        <div className="list-is-empty">
            <img alt="icon" className="list-is-empty-icon" src={icon} />
            <p className="list-is-empty-content">{title}</p>
        </div>
    )
}

export default ListIsEmpty
