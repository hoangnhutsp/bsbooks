const initUser = {
    infoUser: null,
    isLogged: false,
    isAdmin: false,
    token: null || localStorage.getItem('token'),
}

const User = (user = initUser, action) => {
    let data = action.payload;
    switch (action.type) {
        case 'LOGIN': 
            return data;
        case 'UPDATE_PROFILE':
            return {...user, infoUser: data};
        case 'GET_PROFILE':
            const newProfile = {
                infoUser: data,
                isLogged: true,
                isAdmin: data.role === 'ADMIN',
            }
            return newProfile;
        case 'SIGNUP':
            return data;
        default:
            return user;
    }
}

export default User;