import React from 'react'
import s from './Users.module.css'
import Paginator from './Paginator.jsx/Paginator'
import MapUserList from './MapUserList/MapUserList'
import DimasPaginator from './Paginator.jsx/DimasPaginator'
const Users = (props) => {

    return (
        <div>
            Total Employees : {props.totalUserItems}
            <div className={s.item}>
                <input type='buttom' />
            </div>
            <div>
                <MapUserList UserList = {props.UserList} followCircle = {props.followCircle} 
                unfollowCircle = {props.unfollowCircle} 
                 buttonIsEnable = {props.buttonIsEnable }/>
            </div>
            <div>
                <Paginator currentUserPage = {props.currentUserPage}
                pageNumber = {props.pageNumber} totalUserItems = {props.totalUserItems}
                changeCurrentPage_ = {props.changeCurrentPage_}
                />
            </div>
            <div>
                <DimasPaginator currentUserPage = {props.currentUserPage} currentArrayElement = {props.currentArrayElement}
                pageNumber = {props.pageNumber} totalUserItems = {props.totalUserItems}
                changeCurrentPage_ = {props.changeCurrentPage_} getLocalUsersByDimaTK = {props.getLocalUsersByDimaTK}
                setNonLocalUsersByDimaTK = {props.setNonLocalUsersByDimaTK}
                />
            </div>
        </div>
    )
}

export default Users
{/* <div>
{
    pageNumberItems.filter(val => val >= leftBorder && val <= rightBorder)
    .map((val, index) => <div onClick = {props.changeCurrentPage_(index)}>
        {val}
    </div>)
}
</div> */}