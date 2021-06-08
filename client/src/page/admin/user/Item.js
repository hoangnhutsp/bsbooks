import Reac, { useState } from 'react'
import './Item.css'
import iconEdit from '../products/icon/edit.png'
import iconView from '../products/icon/view.png'
import iconDelete from '../products/icon/delete.png'
import { Link } from 'react-router-dom'

const item = {
    "birthday": null,
    "avatar": "http://localhost:5000/default/images/default-avatar-profile.jpg",
    "role": "USER",
    "_id": "60ba52dd39a4485ed4f6f475",
    "resetLink": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYmE1MmRkMzlhNDQ4NWVkNGY2ZjQ3NSIsImlhdCI6MTYyMjk5MTc1MywiZXhwIjoxNjIyOTkyOTUzfQ.MorhdbabHtY77r4AMhUMNAX8KHI7MPA2mZObTcJh-_c",
    "name": "Như Minh",
    "phone": "",
    "email": "phuong322184@gmail.com",
    "password": "$2a$12$M4FVZXAQfCxt0XA.LFTTx.Z7TGsV6dLU7mcVImr70fDxJkNpplFE.",
    "address": "",
    "gender": "",
    "__v": 0
  }

const Item = () => {
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

                    <Link to=''>
                        <img className="contro-edit-product" src={iconView}></img>
                    </Link>

                    <Link to=''>
                        <img className="contro-edit-product" src={iconEdit}></img>
                    </Link>

                    <button className='control-product-remove' onClick={() => setDataProductDelete(item._id)}>
                        <img className="control-delete-product" src={iconDelete}></img>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Item