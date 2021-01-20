import {applyMiddleware, combineReducers, createStore} from "redux"
import authInfoReducer from "./authInfoReducer"
import dialogsInfoReducer from "./dialogsInfoReducer "
import profileInfoReducer from "./profileInfoReducer"
import usersInfoReducer from "./UsersReducer"
import appInfoReducer from './appReducer'
import thunkMW from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'

let reducersList = combineReducers({
    profileInfo : profileInfoReducer,
    dialogsInfo : dialogsInfoReducer,
    usersInfo : usersInfoReducer,
    authInfo : authInfoReducer,
    form : formReducer,
    appInfo : appInfoReducer
}) 

let store = createStore(reducersList, applyMiddleware(thunkMW))

export default store