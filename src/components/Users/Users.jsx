import React from 'react'
import s from './Users.module.css'
import UserDefaultPhoro from '../../images/DefaultAvatar.jpg'
import { NavLink } from 'react-router-dom'
const Users = (props) => {
    let pageNumberItems = []
    let curEmpP = props.currentUserPage

    let n = props.pageNumber
    let totEmpP = Math.ceil(props.totalUserItems / n)
    if (props.totalUserItems) {
        let i
        if (curEmpP < n + 1) {
            for (i = 1; i <= (curEmpP % n !== 0 ? curEmpP + n - curEmpP % n : curEmpP); i++) {
                pageNumberItems[i] = i
            }
            pageNumberItems[i] = '...'
        }
        else if ((totEmpP % n === 0) && (curEmpP === totEmpP - n)) {
            i = curEmpP % n === 0 ? curEmpP - n + 1 : curEmpP - curEmpP % n + 1
            pageNumberItems[i - 1] = '...'

            for (i; i <= (curEmpP % n !== 0 ? curEmpP + n - curEmpP % n : curEmpP); i++) {

                pageNumberItems[i] = i
            }
            pageNumberItems[i] = '...'
        }
        else if (curEmpP > ((totEmpP % n !== 0) ? (totEmpP - totEmpP % n) : (totEmpP - n - 1))) {


            for (i = totEmpP; i >= (curEmpP % n === 0 ? curEmpP - n + 1 : curEmpP - curEmpP % n + 1); i--) {
                pageNumberItems[i] = i
            }
            pageNumberItems[i] = '...'
        }
        else {
            i = curEmpP % n === 0 ? curEmpP - n + 1 : curEmpP - curEmpP % n + 1
            pageNumberItems[i - 1] = '...'

            for (i; i <= (curEmpP % n !== 0 ? curEmpP + n - curEmpP % n : curEmpP); i++) {

                pageNumberItems[i] = i
            }
            pageNumberItems[i] = '...'
        }
    }
    return (
        <div>
            Total Employees : {props.totalUserItems}
            <div className={s.item}>
                <input type='buttom' />
            </div>
            <div className={s.UserItemWrapper}>
                {
                    props.UserList.map((e, index) => {
                        return (
                            e.id ?
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
                                </div> : null
                        )
                    })
                }
            </div>
            <div>
                {curEmpP > n ? <span onClick={() => props.changeCurrentPage_(1)}>
                    {1}
                </span> : null
                }
                {pageNumberItems.map((elem, index) => {
                    return (
                        <span className={props.currentUserPage === index ? s.selectedItem : s.item}
                            onClick={() => props.changeCurrentPage_(index)}>
                            {elem}
                        </span>
                    )
                })}
                {curEmpP <= ((totEmpP % n === 0) ? totEmpP - n : totEmpP - totEmpP % n) ? <span onClick={() => props.changeCurrentPage_(totEmpP)}>
                    {totEmpP}
                </span> : null}
            </div>
        </div>
    )
}

export default Users