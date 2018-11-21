import { combineReducers } from 'redux';

const authenticate = (state = { isAuth: false }, action) => {
    switch(action.type) {
        case 'LOGIN': 
            console.log('REDUCER --- Login')
            return { data: action.payload, isAuth: true };
        case 'LOGOUT':
            console.log('REDUCER --- Logout')
            return { isAuth: false }
        default:
            return state;
    }
}

export default combineReducers({
    auth: authenticate,
});