export default (user = [], action) => {
    switch (action.type) {
        case 'LOGIN':
            
            return user;
        case 'SIGNUP':

            return user;
        
        case 'GET_PROFILE':
            return action.payload;
        default:
            return user;
    }
}