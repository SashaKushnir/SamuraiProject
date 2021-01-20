
let _idMessageMCount = ''
const SEND_MESSAGE = 'SEND_MESSAGE'
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
        case SEND_MESSAGE:
            _idMessageMCount = dialogsInfo.d_MessagesInfo.length + 1
            let newMessageD = { id: _idMessageMCount, message: action.message, me: true }
            return {
                ...dialogsInfo,
                d_MessagesInfo : [...dialogsInfo.d_MessagesInfo , newMessageD]
            }
        default:
            return dialogsInfo
    }
}
export const sendingM = (message) => ({ type: SEND_MESSAGE, message})



export default dialogsInfoReducer       
