import Reac, { useState, useEffect } from 'react'
import Item from './Item'
import { getUserLists } from '../../../api/other/user_list.js'

const ControlUser = () => {

    const [listUser, setListUser] = useState([])

    useEffect(async () => {
        const data = await getUserLists()
        console.log('data')
        console.log(data);
        setListUser(data)
    }, [])

    return (
        <div>
            {listUser.map(item => {
                return <Item item={item} ></Item>
            })}
        </div>
    )
}
export default ControlUser