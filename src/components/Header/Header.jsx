import React from 'react'
import s from './Header.module.css'
import UserDefaultPhoto from '../../images/DefaultAvatar.jpg'


const Header = (props) => {
  debugger
  return (
    <header className={s.header}>
      <img className={s.groot} src="https://img4.goodfon.ru/wallpaper/nbig/9/b6/strazhi-galaktiki-grut-groot-marvel-marvel-baby-groot-guardi.jpg" />
      <div></div>

      {props.isFetching ? null :
        <div>
          {props.isAuthorised ? <div className={s.toRightSize}>
            <img className={s.myHeaderPhoto} src={props.authPhoto ? props.authPhoto : UserDefaultPhoto} alt="YourPhoto" />
            <div>{props.data.login}</div>
          </div>:
         <div className={s.toRightSize}>
            log in
         </div>
          }
        </div>
      }
    </header>
  )
}

export default Header