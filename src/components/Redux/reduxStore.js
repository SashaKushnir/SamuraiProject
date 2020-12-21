import {combineReducers, createStore} from "redux"
import authInfoReducer from "./authInfoReducer"
import dialogsInfoReducer from "./dialogsInfoReducer "
import profileInfoReducer from "./profileInfoReducer"
import usersInfoReducer from "./UsersReducer"

let reducersList = combineReducers({
    profileInfo : profileInfoReducer,
    dialogsInfo : dialogsInfoReducer,
    usersInfo : usersInfoReducer,
    authInfo : authInfoReducer
}) 

let store = createStore(reducersList)


export default store