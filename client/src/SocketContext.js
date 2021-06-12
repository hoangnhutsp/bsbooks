import React, { createContext, useState, useEffect } from 'react'
import io from 'socket.io-client';


export const SocketContext = createContext()

export const SocketProvider = ({ children }) => {
    const [socket, setSocket] = useState(null)

    //connect với socket server

    useEffect(() => {
        const socket = io("localhost:5000", { transports: ["websocket"] })
        setSocket(socket)
        }, [])

        return (
            <SocketContext.Provider value={socket}>
                {children}
            </SocketContext.Provider>
        )
    }