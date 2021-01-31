import React, { createRef } from 'react'
import s from './Dialogs.module.css'
import D_FriendDialog from './d_FriendDialog/d_FriendDialog'
import  D_Friend from './d_Friend/d_Friend'
import { Field, reduxForm } from 'redux-form'
import { Mytextarea } from '../common/Forms/Mytextarea'
import { maxLengthCreator, requiredField } from '../FormControl/Validators/Validators'

let maxLength = maxLengthCreator(20)

const Dialogs = (props) => {
    
    
    let mapD_Friends = props.d_FriendsInfo.map(obj => <D_Friend name={obj.name} id={obj.id} key = {obj.id}  />)
 
    let mapD_Messages = props.d_MessagesInfo.map((obj) => {

        if (obj.me === true)
            return (
                <div key = {obj.id}  className = {s.RigthSide}>
                <D_FriendDialog  message={obj.message}  me={obj.me} who='me' />
                </div>
            )
        else
            return (
                <div key = {obj.id} className ={s.LeftSide}>
                <D_FriendDialog    message={obj.message} me={obj.me} who={"Mama"} />
                </div>
            )
    })

    const sending_ = (obj) => {
        props.sendingM(obj.message)
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
                <SendMessageForm onSubmit = {sending_}/>
                </div>
            </div>
        </div>
    )
}
export default Dialogs


let SendMessageForm = (props) => {
    return (
        <form action="" onSubmit = {props.handleSubmit}>
                    <Field component = {Mytextarea}
                    validate = {[requiredField, maxLength  ]}
                        name="message"  cols="30" rows="4"
                        placeholder="Enter your message"
                        />
                        <button>Send Message</button>
                    
        </form>
    )
}
SendMessageForm = reduxForm({form : 'dialogueMessage'})(SendMessageForm)