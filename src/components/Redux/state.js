
import dialogsInfo from './dialogsInfo/dialogsInfo'
import profileInfo from './profileInfo/profileInfo'

let store = {
 _state : {
    dialogsInfo: dialogsInfo,
    profileInfo: profileInfo
},
getState ()  {
    return this._state
},
_toRend () {
    console.log('State has changed')
},


_idPostMCount : '', 
  addPost  (message)  {
    this._idPostMCount = this._state.profileInfo.postsObjects.length + 1
    let newPost = {
        id: this._idPostMCount, message: message, likesAm: 25
    }
    this._state.profileInfo.postsObjects.push(newPost)
  
    this._toRend(this._state)

},

  makeNewM  (message)  {
    debugger
    this._state.profileInfo.newM = message
    this._toRend(this.state)
},

 callToRend  (callRend)  {
    debugger
    this._toRend = callRend
},

 _idMessageMCount : '',
sendMessage (message)  {
    debugger
    this._idMessageMCount = this._state.dialogsInfo.d_MessagesInfo.length + 1
    let newMessageD = {id : this._idMessageMCount, message : message, me : true}
    this._state.dialogsInfo.d_MessagesInfo.push(newMessageD)
    debugger
    this._toRend(this._state)
}
}
export default store