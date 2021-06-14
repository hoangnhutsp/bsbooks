import Reac, { useState, useEffect } from 'react'
import Item from './Item'
import './UserList.css'
import { getUserLists } from '../../../api/other/user_list.js'
import { Link } from 'react-router-dom'
import iconAdd from '../products/icon/add.png'

const ControlUser = () => {

    const [listUser, setListUser] = useState([])

    useEffect(async () => {
        const { data } = await getUserLists()
        if (data !== undefined)
            setListUser(data)
    }, [])

    useEffect(() => {
        console.log(listUser);
    }, [listUser])

    return (
        <div>
            <div className='class-include-title-and-icon-add-admin'>
                <div className='class-for-title-control-user bold'>QUẢN LÝ NGƯỜI DÙNG</div>
                <Link to={`new-user`}>
                    <div className='class-include-add-icon'>
                        <img className="class-icon-add-product" src={iconAdd}></img>
                        <h4 className='class-text-form-product'>Thêm Admin</h4>
                    </div>
                </Link>
            </div>
            <div className='class-collection-user-list'>
            {listUser.length > 0 && listUser.map(item => {
                return <Item item={item} ></Item>
            })}
            </div>
        </div>
    )
}
export default ControlUser