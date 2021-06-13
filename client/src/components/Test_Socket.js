import React, { useState, useContext } from 'react'
import { SocketContext } from '../SocketContext.js'
import {
    useSelector
} from 'react-redux';
function TestSocket() {
    const socket = useContext(SocketContext)
    const user = useSelector(state => state.user);
    // thông báo mới
    const [data, setData] = useState({
        id_user: user.infoUser._id,
        title: "Nhut",
        description: "TESE"
    })

    const Submit = () => {
        console.log(data);
        socket.emit('addNotification', data)
    }
    return (
        <div>
            <button onClick={() => Submit()}>Test_Socket</button>
        </div>
    )

}
export default TestSocket