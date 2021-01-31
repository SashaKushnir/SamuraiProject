import {applyMiddleware, combineReducers, createStore, compose} from "redux"
import authInfoReducer from "./authInfoReducer"
import dialogsInfoReducer from "./dialogsInfoReducer"
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

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunkMW)
);
let store = createStore(reducersList, enhancer)

export default store