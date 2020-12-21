
let _idMessageMCount = ''
const sendMessage = 'sendMessage'
const reloadMessage = 'reloadMessage'
let dialogsPage = {
    d_MessagesInfo : [
    {id : 1, message : "Hello, Lets play something", me : true},    
    {id : 3, message : "Yeaaahhhhh", me : false},
    {id : 4, message : "Hello, Lets1111212 play something", me : true},
    {id : 5, message : "Hello, Lets play something", me : true}
  ],
   d_FriendsInfo : [
    { name: 'Ninzya', id: 1 },
    { name: 'Babe', id: 2 },
    { name: 'Mam', id: 3 },
    { name: 'Dad', id: 4 }
  ]
}
const dialogsInfoReducer = (dialogsInfo = dialogsPage, action) => {
    switch (action.type) {
        case sendMessage:
            _idMessageMCount = dialogsInfo.d_MessagesInfo.length + 1
            let newMessageD = { id: _idMessageMCount, message: dialogsInfo.currentM, me: true }
            dialogsInfo.d_MessagesInfo.push(newMessageD)
            return dialogsInfo
        case reloadMessage:
            dialogsInfo.currentM = action.reloadM
            return dialogsInfo
        default:
            return dialogsInfo
    }
}
export const sendingCreateAction = () => ({ type: sendMessage})

export const currentChangingMAction = (mes) => ({ type: reloadMessage, reloadM: mes })



export default dialogsInfoReducer       
