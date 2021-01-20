import { stopSubmit } from "redux-form"
import { auth } from "../../api/api"


const SET_AUTHORISATION = 'SET_AUTHORISATION'
const TO_FETCH = 'TO_FETCH'
const STOP_FETCHING = 'STOP_FETCHING'

let initialState = {
    data: {
         id: null,
        password: null,
        login: null,
        rememberMe : false
    },
    isFetching: false,
    isAuthorised: false
}
const logoutedInfo = {
    id: null,
   password: null,
   login: null,
   rememberMe : false
       
}
const authInfoReducer = (authInfo = initialState, action) => {

    switch (action.type) {
        case SET_AUTHORISATION: {
            
            return {
                ...authInfo,
                data: { ...authInfo.data,
                id: action.mydata.id,
                login: action.mydata.login,
                password: action.mydata.password
                },
                isAuthorised: action.isAuthorised
            }
        }

        case TO_FETCH :
            return {
                ...authInfo,
                isFetching : true
            }

        case STOP_FETCHING :
            return {
                ...authInfo,
                isFetching : false
            }

        default:
            return authInfo
    }
}

export const settingAuthorisation = (mydata, isAuthorised) => ({ type: SET_AUTHORISATION, mydata, isAuthorised})
export const toFetch = () => ({ type: TO_FETCH })
export const stopFetching = () => ({ type: STOP_FETCHING })
export const toAuthorise = () => (dispatch) => {
    return auth.getAuthorisedData()
    .then(data => {     
    
        dispatch(toFetch())
        if (!data.resultCode) {
            dispatch(settingAuthorisation(data.data, true))
        }
        dispatch(stopFetching())
    })
}

export const  toLogIn = ({email, password, rememberMe = false, captcha = null}) => dispatch => {
    
    auth.logIn(email, password, rememberMe , captcha ).then(response => {
        
        if(!response.resultCode){
            dispatch(toAuthorise())
        }
        else {
            let error = response.messages.length > 0 ? response.messages[0] : 'Uncaught error'
            dispatch(stopSubmit('login', {_error : error}))
        }
    })
}

export const toLogOut = () => dispatch => {
    
    auth.logOut().then (response => {
        
        if(!response.resultCode){
            dispatch(settingAuthorisation(logoutedInfo, false))
        }
        else {
            console.warn('Failed!!!')
        }
      
    })
}
export default authInfoReducer



