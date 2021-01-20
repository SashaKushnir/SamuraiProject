
import React, { useEffect, useState } from 'react'



const ProfileStatusWithHooks = (props) =>  {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatusMode] = useState(props.status)
    
    useEffect(() => {
        setStatusMode(props.status)
    },[props.status])

    const onStatusChange = (e) => {
        console.log(e.target.value)
        setStatusMode(e.target.value)
    }   
    const deactivateeditmode = () => {
        setEditMode(false)
        props.updateProfileStatus(status)
    }
    const activateeditmode = () => {
        if(!props.cantChangeStatus)
        setEditMode(true)
    }

        return (
            <div>
                
                {!editMode &&
                <span onClick = {activateeditmode}>
                    {props.status || <div>Empty</div>}
                </span> }
                {editMode &&
                   <input autoFocus = {true} onChange = {onStatusChange}
                   onBlur = {deactivateeditmode} value = {status}
                    type="text" name ={'profilestatus'} component = {'input'}/>
                }
                </div>
        )
}


export default  ProfileStatusWithHooks
