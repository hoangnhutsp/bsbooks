import Reac, { useState } from 'react'
import './Item.css'
import iconEdit from '../products/icon/edit.png'
import iconView from '../products/icon/view.png'
import iconDelete from '../products/icon/delete.png'
import { Link } from 'react-router-dom'

const datatest = {
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

const Item = (item) => {
    const [dataUserDelete, setDataUserDelete] = useState('');

    return (
        <div className="control-item-admin-user">
            <div className='control-form-admin-user'>
                <div className='admin-user-avatar-contain'>
                    <img alt="avatar user" className="admin-user-avatar" src={item.item.avatar} />
                </div>
                <p className="control-name-admin-user">{item.item.name}</p>
                <p className="control-price-sm-admin-user">{item.item.email}</p>
                {/* <small>x {item.count}</small> */}
                <div className="control-edit-container-admin-user">

                    <Link to={`users/${item.item._id}`}>
                        <img className="contro-edit-admin-user" src={iconView}></img>
                    </Link>

                    <Link to={`edit-users/${item.item._id}`}>
                        <img className="contro-edit-admin-user" src={iconEdit}></img>
                    </Link>

                    {/* <button className='control-remove-admin-user' onClick={() => setDataUserDelete(item.item._id)}>
                        <img className="control-delete-admin-user" src={iconDelete}></img>
                    </button> */}
                </div>
            </div>
        </div>
    )
}
export default Item