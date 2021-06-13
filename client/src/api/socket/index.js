import { SocketContext } from '../../SocketContext.js'

export const addNotification = (data) => {
    const socket = useContext(SocketContext)
    socket.emit('addNotification', data)
}
