import React, { createRef } from 'react'
import s from './Dialogs.module.css'
import D_Friend from './d_Friend/d_Friend'
import D_FriendDialog from './d_FriendDialog/d_FriendDialog'


const Dialogs = (props) => {
    let mapD_Friends = props.dialogsInfo.d_FriendsInfo.map(obj => <D_Friend name={obj.name} id={obj.id} />)
 
    let mapD_Messages = props.dialogsInfo.d_MessagesInfo.map((obj) => {

        if (obj.me === true)
            return (
                <div className = {s.RigthSide}>
                <D_FriendDialog  message={obj.message}  me={obj.me} who='me' />
                </div>
            )
        else
            return (
                <div className ={s.LeftSide}>
                <D_FriendDialog  message={obj.message} me={obj.me} who={props.dialogsInfo.who} />
                </div>
            )
    })
    let messageRef = React.createRef()

    const sending = () => {
        props.sendMessage(messageRef.current.value)
    }
   

    return (

        <div className={s.dialogs_wrapper}>
            <div  className={s.d_Friends} >
                {mapD_Friends}
            </div>
            <div></div>
            <div > 
                <div>
                {mapD_Messages}
               </div>
                <div className={s.EnterMessage}>
                    <textarea ref = {messageRef}  name="" id="" cols="30" rows="1"></textarea>  <button onClick= {sending}>Send message</button>
                </div>
            </div>
        </div>
            
        
    )

}

export default Dialogs