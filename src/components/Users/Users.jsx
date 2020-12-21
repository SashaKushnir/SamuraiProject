import React from 'react'
import s from './Users.module.css'
import UserDefaultPhoro from '../../images/DefaultAvatar.jpg'
import {NavLink} from 'react-router-dom'

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
        else if ((totEmpP % n === 0) && (curEmpP === totEmpP - n )) {
            i = curEmpP % n === 0 ? curEmpP - n + 1 : curEmpP - curEmpP % n + 1
            pageNumberItems[i - 1] = '...'

            for (i; i <= (curEmpP % n !== 0 ? curEmpP + n - curEmpP % n : curEmpP); i++) {

                pageNumberItems[i] = i
            }
            pageNumberItems[i] = '...'
        }
    //    else if ((totEmpP % n === 0) && (curEmpP === totEmpP)) 
        else if (curEmpP > ((totEmpP % n !== 0) ? (totEmpP - totEmpP % n ) : (totEmpP - n - 1))) {


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

   

    //changeCurrentPager, setUser, setTotalCounter, stopFetching, isFetchingA
    
    return (

       
            <div  >
             
             
            Total Employees : {props.totalUserItems}
        <div className={s.item}>
        <input  type='buttom'/>
        </div>
        <div className={s.UserItemWrapper}>
            {
                props.UserList.map(e => {
                    return (
                    <NavLink to =  {'./profile/' + e.id}>
                    <div className={s.UserItem}>
                        <img  className = {s.imgItem} src = {e.photos.large !== null ? e.photos.large : UserDefaultPhoro} alt = 'Avatar'/> 
                        <div className={s.textItem}>
                        {e.name} 
                       {e.status}
                        </div>
                    </div>
                    </NavLink>
                  )})
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
            {curEmpP <= ((totEmpP % n === 0) ? totEmpP - n : totEmpP - totEmpP % n  )? <span onClick={() => props.changeCurrentPage_(totEmpP)}>
                {totEmpP}
            </span> : null}
            </div>
        </div>

    )
}

export default Users