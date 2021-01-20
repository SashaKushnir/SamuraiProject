import { connect } from "react-redux";
import {friendsIn, addPost, setProfileStatus, updateProfileStatus} from '../Redux/profileInfoReducer'
import React from 'react'
import Profile from './Profile'
import { withRouter } from "react-router-dom";
import {withRedirect} from '../../hoc/hoc'
import { compose } from "redux";
import { getDefAuthorisedUserIdSel, getIsAuthSel, getPostsObjectsSel, getProfileByUserIdSel, getStatusSel } from "../Redux/selectors/selectors";

class ProfileApiContainer extends React.Component {

    componentDidMount = () => {
        
        let userId = this.props.match.params.userId
       
        if(!userId){
            userId = this.props.defAuthorisedUserId
                if(!userId)
                    this.props.history.push('/login')
        }else{
        this.props.friendsIn(userId)
        }
        this.props.setProfileStatus(userId)
    }
    componentDidUpdate = (prev) => {
        if(prev.status !== this.props.status){
            this.setState({
                status : this.props.status
            })
        }
    }
    render (){


        return (
            <Profile {...this.props}/>
        )

    }
}
const mstp = (state) => {
    return {
        postsObjects : getPostsObjectsSel(state),
        profileByUserId : getProfileByUserIdSel(state),
        isAuth : getIsAuthSel(state),
        status : getStatusSel(state),
        defAuthorisedUserId : getDefAuthorisedUserIdSel(state)
    }
}
export default compose  (
    withRouter,
    connect(mstp, {
        addPost, friendsIn,updateProfileStatus,
        setProfileStatus
    })
   //withRedirect
)(ProfileApiContainer)