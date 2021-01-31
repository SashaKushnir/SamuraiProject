import React from 'react'
import { NavLink } from 'react-router-dom'


const LogoutNavLink = ({toLogOut}) => {
    return (
        <NavLink to='/login'>
            <button onClick={toLogOut}>
                log out
            </button>
        </NavLink>
    )
}

export default LogoutNavLink