import { toRend } from '../../Render'
import dialogsInfo from './dialogsInfo/dialogsInfo'
import profileInfo from './profileInfo/profileInfo'


let state = {
    dialogsInfo: dialogsInfo,
    profileInfo: profileInfo,
   
}

let idMCount

window.state = state

export let addPost = ()     => {
    idMCount = state.profileInfo.postsObjects.length + 1
    let newPost = {
        id: idMCount, message: profileInfo.newM, likesAm: 25
    }
    state.profileInfo.postsObjects.push(newPost)
    debugger
    toRend(state)
    makeNewM('')
}

export let makeNewM = (message) => {
    state.profileInfo.newM = message
    toRend(state)
}









export default state