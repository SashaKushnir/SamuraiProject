import React from 'react'
import s from './d_FriendDialog.module.css'

const D_FriendDialog = (props) => {

    return (
        <div >
            <div>
                {props.message} 
            </div>
            <div>
             {props.who}  
             </div>    
        </div>

    )
}

export default D_FriendDialog