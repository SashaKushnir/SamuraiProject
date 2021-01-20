import React from 'react'
import s from './Header.module.css'
import UserDefaultPhoto from '../../images/DefaultAvatar.jpg'
import { NavLink } from 'react-router-dom'


const Header = (props) => {
  

  return (
    <header className={s.header}>
      <img className={s.groot} src="https://img4.goodfon.ru/wallpaper/nbig/9/b6/strazhi-galaktiki-grut-groot-marvel-marvel-baby-groot-guardi.jpg" />
      <div></div>

      {props.isFetching ? null :
        <div>
          {props.isAuthorised ? <div className={s.toRightSize}>
            <img className={s.myHeaderPhoto} src={props.authPhoto ? props.authPhoto : UserDefaultPhoto} alt="YourPhoto" />
            <div>{props.data.login}
              <NavLink to='/login'>
                <button onClick={props.toLogOut}>
                  log out
                </button>
              </NavLink>
            </div>
          </div> :
            <NavLink to="login">
              <div className={s.toRightSize}>
                log in
              </div>
            </NavLink>
          }
        </div>
      }
    </header>
  )
}

export default Header