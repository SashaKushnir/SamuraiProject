

import {getUsersTK, unfollowCircle, followCircle, getUserByCursorTK} from '../Redux/UsersReducer'
import Users from './Users'
import { connect } from 'react-redux'

import React from 'react'
import loader from '../../images/VAyR.gif'
import { compose } from 'redux'
import { getUserListSel, getCurrentUserPageSel, getTotalUserPagesSel, getPageNumbersSel,
     getTotalUserItemsSel, getIsUserFetchingSel, getButtonIsEnableSel } from '../Redux/selectors/selectors'


class UserAPIContainer extends React.Component {
   
    componentDidMount = () => { 
        this.props.getUsersTK(this.props.currentUserPage, this.props.pageNumber)

    }

    changeCurrentPage_ = (index) => {
        this.props.getUserByCursorTK(index, this.props.pageNumber)
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
        UserList : getUserListSel(state),
        currentUserPage : getCurrentUserPageSel(state),
        totalUserPages : getTotalUserPagesSel(state),
        pageNumber : getPageNumbersSel(state),
        totalUserItems : getTotalUserItemsSel(state),
        isFetching : getIsUserFetchingSel(state),
        buttonIsEnable : getButtonIsEnableSel(state)
    }

}

export default compose ( 
 connect(mapStateToProps,
    {getUsersTK, unfollowCircle, followCircle, getUserByCursorTK})  
)(UserAPIContainer)



