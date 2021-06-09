import Reac, { useState } from 'react'
import './Item.css'
import iconEdit from './icon/edit.png'
import iconView from './icon/view.png'
import iconDelete from './icon/delete.png'
import { Link } from 'react-router-dom'


const Item = (item) => {
    const [dataProductDelete, setDataProductDelete] = useState('');

    return (
        <div className="control-item">
            <div className='control-form'>
                <div className="control-image">
                    <img className="control-image" src={item.item.thumbnail_url}></img>
                </div>
                <p className="control-product-name">{item.item.name}</p>
                <p className="control-price-sm">{item.item.price}</p>
                {/* <small>x {item.count}</small> */}
                <div className="control-edit-container">

                    <Link to={`product-details/${item.item._id}`}>
                        <img className="contro-edit-product" src={iconView}></img>
                    </Link>

                    <Link to={`edit-product/${item.item._id}`}>
                        <img className="contro-edit-product" src={iconEdit}></img>
                    </Link>

                    <button className='control-product-remove' onClick={() => setDataProductDelete(item.item._id)}>
                        <img className="control-delete-product" src={iconDelete}></img>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Item