
import dialogsInfo from './dialogsInfo/dialogsInfo'
import profileInfo from './profileInfo/profileInfo'

const addPostM = 'AddPostM'
const makeNewM = 'makeNewM'
const sendMessage = 'sendMessage'
const reloadMessage = 'reloadMessage'

let store = {


    _state: {
        dialogsInfo: dialogsInfo,
        profileInfo: profileInfo
    },
    _idPostMCount: '',
    _toRend() {
        console.log('State has changed')
    },
    _idMessageMCount: '',

    getState() {
        return this._state
    },

    addPost(message) {
        this._idPostMCount = this._state.profileInfo.postsObjects.length + 1
        let newPost = {
            id: this._idPostMCount, message: message, likesAm: 25
        }
        this._state.profileInfo.postsObjects.push(newPost)

        this._toRend()

    },

    makeNewM(message) {
        debugger
        this._state.profileInfo.newM = message
        this._toRend()
    },

    callToRend(callRend) {
        debugger
        this._toRend = callRend
    },


    sendMessage(message) {
        debugger
        this._idMessageMCount = this._state.dialogsInfo.d_MessagesInfo.length + 1
        let newMessageD = { id: this._idMessageMCount, message: message, me: true }
        this._state.dialogsInfo.d_MessagesInfo.push(newMessageD)
        debugger
        this._toRend()
    },
    reloadMessage(mes) {
        this._state.dialogsInfo.currentM = mes
        this._toRend()
    },
    dispatch(action) {
        switch (action.type) {
            case addPostM:
                this.addPost(action.addM)
                break
            case makeNewM:
                this.makeNewM(action.reloadPostM)
                break
            case sendMessage:
                this.sendMessage(action.sendM)
                break
            case reloadMessage:
                this.reloadMessage(action.reloadM)
                break
            default:
                this._toRend()
        }
    }

}
//Profile
export const addPostCreateAction = (addM) => ({ type: addPostM, addM: addM })
export const makeNewMCreateAction = (reloadPostM) => ({ type: makeNewM, reloadPostM: reloadPostM })
//Dialogs
export const sendingCreateAction = () => {
    debugger
    return ({ type: sendMessage, sendM: store._state.dialogsInfo.currentM })
}
export const currentChangingMAction = (mes) => ({ type: reloadMessage, reloadM: mes })


window.state = store._state
export default store        
