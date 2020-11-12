import d_FriendsInfo from './d_FriendsInfo/d_FriendsInfo'
import d_MessagesInfo from './d_MessagesInfo/messagesInfo'

let dialogsInfo = {
    d_FriendsInfo : d_FriendsInfo,
    d_MessagesInfo : d_MessagesInfo,
    who: '' 
}

let showMessages = () => {
let FriendIDArray = dialogsInfo.d_FriendsInfo.map(obj => obj.id)

for (let key in dialogsInfo.d_MessagesInfo) {
    if(obj.hasOwnProperty(key)){
        for (let keyMDB in key) {
            if(obj.hasOwnProperty(keyMDB)){
            keyMDB.forEach(element => {
                if(element.me == false){
                   if (FriendIDArray.includes(element.id)){
                       element.who = {dialogsInfo.d_FriendsInfo[element.id - 1].name}
                   }
                }
                }
            )}
        }
    }
}

}


let name
export let setNameToDialogs = (activeId) => {
     name = dialogsInfo.d_FriendsInfo.map(obj => {
        if (obj.id == activeId) 
        return obj.name
    })
    dialogsInfo.who = name

}


export default dialogsInfo