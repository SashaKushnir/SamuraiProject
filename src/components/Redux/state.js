
import dialogsInfo from './dialogsInfo/dialogsInfo'
import dialogsInfoReducer from './dialogsInfoReducer '
import profileInfo from './profileInfo/profileInfo'
import profileInfoReducer from './profileInfoReducer'


let store = {


    _state: {
        dialogsInfo: dialogsInfo,
        profileInfo: profileInfo
    },

    _toRend() {
        console.log('State has changed')
    },


    getState() {
        return this._state
    },


    callToRend(callRend) {

        this._toRend = callRend
    },

    dispatch(action) {
        this._state.profileInfo = profileInfoReducer(this.getState().profileInfo, action)
        this._state.dialogsInfo = dialogsInfoReducer(this.getState().dialogsInfo, action)

        this._toRend()
    }

}
export default store        
