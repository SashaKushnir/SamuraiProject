import React from 'react'
import { NavLink } from 'react-router-dom'
import NavbarClass from './Navbar.module.css'
const Navbar = () => {
  return (
    <nav className={NavbarClass.nav}>
      <div className={NavbarClass.item}>
        <NavLink to="/profile" activeClassName = {NavbarClass.active} >Profile </NavLink>
      </div>
      <div className={NavbarClass.item}>
        <NavLink to="/dialogs" activeClassName = {NavbarClass.active}>Message</NavLink>
      </div>
      <div className={NavbarClass.item}>
        <NavLink to="/news" activeClassName = {NavbarClass.active}> News</NavLink></div>
      <div className={NavbarClass.item}>
        <NavLink to="/music" activeClassName = {NavbarClass.active}>Music</NavLink>
      </div>
      <div className={NavbarClass.item}>
        <NavLink to="/settings" activeClassName = {NavbarClass.active}>Settings</NavLink>
      </div>
    </nav>
  )
}

export default Navbar