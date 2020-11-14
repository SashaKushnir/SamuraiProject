
let _idMessageMCount = ''
const sendMessage = 'sendMessage'
const reloadMessage = 'reloadMessage'

const dialogsInfoReducer = (dialogsInfo, action) => {
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
