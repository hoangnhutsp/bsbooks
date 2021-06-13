import Reac, { useState, useEffect } from 'react'
import Item from './Item'
import { getUserLists } from '../../../api/other/user_list.js'

const ControlUser = () => {

    const [listUser, setListUser] = useState([])

    useEffect( async () => {
        const {data} = await getUserLists()
        if (data !==undefined)
            setListUser(data)
    }, [])

    useEffect(() => {
        console.log(listUser);    
    }, [listUser])

    return (
        <div>
            {listUser.length>0&&listUser.map(item => {
                return <Item item={item} ></Item>
            })}
        </div>
    )
}
export default ControlUser