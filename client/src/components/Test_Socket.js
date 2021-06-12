import React, { useState, useContext } from 'react'
import { SocketContext } from '../SocketContext.js'

function TestSocket() {
    const socket = useContext(SocketContext)
    
    // thông báo mới
    const [data, setData] = useState({
        id_user: "60c2668bfb6e0089781ea2b8",
        title: "Test_Socket",
        description: "Test socket"
    })

    const Submit = () => {
        socket.emit('addNotification', data)
    }
    return (
        <div>
            <button onClick={() => Submit()}>Test_Socket</button>
        </div>
    )

}
export default TestSocket