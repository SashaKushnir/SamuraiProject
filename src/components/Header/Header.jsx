import React from 'react'
import s from './Header.module.css'
import UserDefaultPhoto from '../../images/DefaultAvatar.jpg'
import LoginNavLink from '../common/Navigation/LoginNavLink'
import LogoutNavLink from '../common/Navigation/LogoutNavLink'

const Header = (props) => {
  return (
    <header className={s.header}>
      <img className={s.groot} src="https://img4.goodfon.ru/wallpaper/nbig/9/b6/strazhi-galaktiki-grut-groot-marvel-marvel-baby-groot-guardi.jpg" />
      <div></div>

      {props.isFetching ? null :
        <div>
          {props.isAuthorised ? <div className={s.toRightSize}>
            <img className={s.myHeaderPhoto} src={props.authPhoto ? props.authPhoto : UserDefaultPhoto} alt="YourPhoto" />
            <div>
              <div className = { s.headerLogin } >{props.data.login}</div>
              <LogoutNavLink toLogOut = {props.toLogOut} />
            </div>
          </div> :
            <div className = {s.toRightSize}>
              <LoginNavLink />
            </div>
          }
        </div>
      }
    </header>
  )
}

export default Header