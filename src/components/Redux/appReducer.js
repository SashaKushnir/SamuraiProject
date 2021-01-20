import { toAuthorise } from "./authInfoReducer"

const SET_INITIALIZED = 'SET_INITIALIZED'


let initialState = {
    isInitialized : false
}

const appInfoReducer = (appInfo = initialState, action) => {

    switch (action.type) {
        case SET_INITIALIZED: {
            
            return {
                ...appInfo,
                isInitialized : true
            }
        }
        default:
            return appInfo
    }
}

 const setInitialized = () =>  ({ type: SET_INITIALIZED})

export const initialization = () => (dispatch) =>  {
    
    let autorisePromise = dispatch(toAuthorise())

    Promise.all([autorisePromise])
    .then(() => {
        
        dispatch(setInitialized())
    })
}

export default appInfoReducer



