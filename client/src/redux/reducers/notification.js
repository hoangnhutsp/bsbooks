
const initNotification = {
    count: 0,
    notis: [], // {_id, name, title, image, discription, seen}
}

const Notification = (notification = initNotification, action) => {
    switch (action.type) {
        case 'GET_NOTIFICATION':
            let get_notification = {};
            get_notification.notis = action.payload;
            let get_count = 0;
            for (let x of action.payload){
                if (x.status === 0) get_count+=1; 
            }
            get_notification.count = get_count; 
            return  get_notification;
        case 'ADD_NOTIFICATION':
            console.log('ADD_NOTIFICATION');
            let noti = notification;
            noti.count++;
            noti.notis.unshift(action.payload);
            return {...notification, notis: noti.notis, count: noti.count};
        case 'UPDATE_NOTIFICATION':
            return {...notification, notis : notification.notis.map((val) => ({...val, status: 1})), count: 0};
        case 'DELETE_NOTIFICATION':
            let _id = action.payload;
            return {...notification, notis : notification.notis.filter((val) => val._id !== _id)};
        default:
            return notification;
    }
}

export default Notification;