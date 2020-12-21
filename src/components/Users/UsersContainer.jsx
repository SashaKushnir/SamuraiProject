

import {changeCurrentPager, setUser, setTotalCounter, stopFetching, isFetchingA} from '../Redux/UsersReducer'
import Users from './Users'
import { connect } from 'react-redux'
import * as axios from 'axios'
import React from 'react'
import loader from '../../images/VAyR.gif'

class UserAPIContainer extends React.Component {
   
    componentDidMount = () => {
        this.props.isFetchingA()
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentUserPage}&count=${this.props.pageNumber}`)
            .then(response => {
                this.props.setTotalCounter(response.data.totalCount)
                this.props.setUser(response.data.items)
                this.props.stopFetching()
            })
    }

    changeCurrentPage_ = (index) => {
        this.props.isFetchingA()
        this.props.changeCurrentPager(index)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${index}&count=${this.props.pageNumber}`)
        .then(response => {
            this.props.setUser(response.data.items)
            this.props.stopFetching()
        })
    }

  

    render() {
        
        return (
        <>
            {this.props.isFetching ? <img src = {loader}/> : null }
            <Users  {...this.props} changeCurrentPage_ = {this.changeCurrentPage_}
            />
        </>
        )
    

    }

}

const mapStateToProps = (state) => {
    
    return {
        UserList : state.usersInfo.UserList,
        currentUserPage : state.usersInfo.currentUserPage,
        totalUserPages : state.usersInfo.totalUserPages,
        pageNumber : state.usersInfo.pageNumber,
        totalUserItems : state.usersInfo.totalUserItems,
        isFetching : state.usersInfo.isFetching
    }

}

export default  connect(mapStateToProps,
    {changeCurrentPager, setUser, setTotalCounter, stopFetching, isFetchingA})
    (UserAPIContainer)



