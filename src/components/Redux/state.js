
import dialogsInfo from './dialogsInfo/dialogsInfo'
import profileInfo from './profileInfo/profileInfo'


let state = {
    dialogsInfo: dialogsInfo,
    profileInfo: profileInfo
}

let toRend = () =>{
    console.log('State has changed')
}

window.state = state
let idPostMCount
export let addPost = (message) => {
    idPostMCount = state.profileInfo.postsObjects.length + 1
    let newPost = {
        id: idPostMCount, message: message, likesAm: 25
    }
    state.profileInfo.postsObjects.push(newPost)
  
    toRend(state)

}

export const makeNewM = (message) => {
    debugger
    state.profileInfo.newM = message
    toRend(state)
}

export  const callToRend = (callRend) => {
    debugger
    toRend = callRend
}

let idMessageMCount
export const sendMessage = (message) => {
    debugger
    idMessageMCount = state.dialogsInfo.d_MessagesInfo.length + 1
    let newMessageD = {id : idMessageMCount, message : message, me : true}
    state.dialogsInfo.d_MessagesInfo.push(newMessageD)
    debugger
    toRend(state)
}

export default state