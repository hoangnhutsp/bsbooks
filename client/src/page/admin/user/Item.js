import Reac, { useState } from 'react'
import './Item.css'
import iconEdit from '../products/icon/edit.png'
import iconView from '../products/icon/view.png'
import iconDelete from '../products/icon/delete.png'
import { Link } from 'react-router-dom'


const Item = (item) => {
    const [dataUserDelete, setDataUserDelete] = useState('');

    return (
        <div className="control-item-admin-user">
            <div className='control-form-admin-user'>
                <div className='admin-user-avatar-contain'>
                    <img alt="avatar user" className="admin-user-avatar" src={item.item.avatar} />
                </div>
                <p className="control-name-admin-user">{item.item.name}</p>
                <p className="control-email-user-admin-user">{item.item.email}</p>
                <p className='control-role-user-in-control-admin'>{item.item.role}</p>
                {/* <small>x {item.count}</small> */}
                <div className="control-edit-container-admin-user">

                    <Link to={`users/${item.item._id}`}>
                        <img className="contro-edit-view-user-in-admin" src={iconView}></img>
                    </Link>

                    <Link to={`edit-users/${item.item._id}`}>
                        <img className="contro-edit-user-in-admin" src={iconEdit}></img>
                    </Link>

                </div>
            </div>
        </div>
    )
}
export default Item