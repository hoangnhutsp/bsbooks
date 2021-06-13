import { combineReducers} from 'redux';

import user from './user';
import cart from './cart';
import notification from './notification';
export default combineReducers({
    user,
    cart,
    notification,
})