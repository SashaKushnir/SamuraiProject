import React from 'react'
import s from './d_Friend.module.css'
import { NavLink } from 'react-router-dom'

const D_Friend = (props) => {
    const path = '/dialogs/' + props.id

    let func = () => {

        props.setNameToDialogs(props.id)
    }   

    return (
        <div className={s.d_Friend}>
            <NavLink activeClassName={s.ActiveFriend, onClick = {func}} to={path} >
                {props.name}
            </NavLink>
        </div>
    )
}

export default D_Friend
