import counterReducer from "./counterReducer";
import signInReducer from "./signInReducer";
import {combineReducers} from 'redux';

const allReducers = combineReducers(
    {
        counter:counterReducer,
        signin:signInReducer
    }
)
export default allReducers;