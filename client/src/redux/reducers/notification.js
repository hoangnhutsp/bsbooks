
const initNotification = {
    count: 0,
    notis: [], // {_id, name, title, image, discription, seen}
}

const Notification = (notification = initNotification, action) => {
    switch (action.type) {
        case 'GET_NOTIFICATION':
            return  action.payload;
        case 'ADD_NOTIFICATION':
            let noti = notification;
            noti.count++;
            noti.notifications.push(action.payload);
            return noti;
        case 'UPDATE_NOTIFICATION':
            return {...notification, notis : notification.notis.map((val) => val.seen = 0)};
        case 'DELETE_NOTIFICATION':
            let _id = action.payload._id;
            return {...notification, notis : notification.notis.filter((val) => val._id != _id)};
        default:
            return notification;
    }
}

export default Notification;