import React from 'react'
import s from './MapUserList.module.css'
import UserDefaultPhoro from '../../../images/DefaultAvatar.jpg'
import { NavLink } from 'react-router-dom'
const MapUserList = (props) => {
  
    return (
        <div className={s.UserItemWrapper}>
            {
                props.UserList.map((e, index) => {
                    return (
                        <div key = {index}>
                        {e.id ?
                            <div className={s.UserItem}>
                                <NavLink to={'./profile/' + e.id}>
                                    <img className={s.imgItem} src={e.photos.large !== null ? e.photos.large : UserDefaultPhoro} alt='Avatar' />
                                    <div className={s.textItem}>
                                        {e.name}
                                        {e.status}
                                    </div>
                                </NavLink>
                                <div>
                                    <button disabled={props.buttonIsEnable.some(val => val === e.id)} onClick={() => {
                                        if (e.followed)
                                            props.unfollowCircle(e.id, index)
                                        else
                                            props.followCircle(e.id, index)

                                    }}> {e.followed ? 'followed' : 'unfollowed'}</button>
                                </div>
                            </div> : null}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MapUserList
