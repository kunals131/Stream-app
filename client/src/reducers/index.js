import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
    authStatus : AuthReducer,
    form : formReducer,
})