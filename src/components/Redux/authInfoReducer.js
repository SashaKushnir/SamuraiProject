import { stopSubmit } from "redux-form"
import { auth } from "../../api/api"


const SET_AUTHORISATION = 'SET_AUTHORISATION'
const TO_FETCH = 'TO_FETCH'
const STOP_FETCHING = 'STOP_FETCHING'
const SET_CAPTCHA = 'SET_CAPTCHA'

let initialState = {
    data: {
         id: null,
        password: null,
        login: null,
        rememberMe : false
    },
    isFetching: false,
    isAuthorised: false,
    captchaUrl : null
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
        case SET_CAPTCHA : {
            return {
                ...authInfo,
                captchaUrl: action.captchaUrl
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
const setCaptcha = (captchaUrl) => ({type : SET_CAPTCHA , captchaUrl})
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

export const  toLogIn = (val) => dispatch => {
    console.log("Thunk", val)

    auth.logIn(val).then(response => {
        console.log("LOGIN RESPONSE" , response)
        if(response.resultCode === 0){
            dispatch(toAuthorise())
        }
        else {
            if(response.resultCode === 10){
                dispatch(setCaptchaUrlTK())
            }
            let error = response.messages.length > 0 ? response.messages[0] : 'Uncaught error'
            dispatch(stopSubmit('login', {_error : error}))
        }
    })
}
 const setCaptchaUrlTK = () => dispatch => {
    auth.getCaptchaUrl().then (response => {
        console.log("Captcha response", response)
        dispatch(setCaptcha(response.data.url))
    })
}
export const toLogOut = () => dispatch => {
    auth.logOut().then (response => {
        
        if(!response.data.resultCode){
            dispatch(settingAuthorisation(logoutedInfo, false))
        }
        else {
            console.warn('Failed!!!')
        }
      
    })
}
export default authInfoReducer



