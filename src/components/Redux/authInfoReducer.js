

const SET_AUTHORISATION = 'SET_AUTHORISATION'
const TO_FETCH = 'TO_FETCH'
const STOP_FETCHING = 'STOP_FETCHING'

let initialState = {
    data: {
        id: null,
        email: null,
        login: null,
    },
    isFetching: false,
    isAuthorised: false
}
const authInfoReducer = (authInfo = initialState, action) => {

    switch (action.type) {
        case SET_AUTHORISATION: {
            
            return {
                ...authInfo,
                data: { ...authInfo.data,
                id: action.mydata.id,
                login: action.mydata.login,
                email: action.mydata.email
                },
                isAuthorised: true
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

export const settingAuthorisation = (mydata) => ({ type: SET_AUTHORISATION, mydata})
export const toFetch = () => ({ type: TO_FETCH })
export const stopFetching = () => ({ type: STOP_FETCHING })

export default authInfoReducer



