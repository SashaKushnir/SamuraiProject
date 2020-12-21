import { connect } from "react-redux";
import {addPost, makeNewM,setProfile} from '../Redux/profileInfoReducer'
import React from 'react'
import Profile from './Profile'
import axios from "axios";
import { withRouter } from "react-router-dom";

class ProfileApiContainer extends React.Component {

    componentDidMount = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.match.params.userId}`)
        .then(response => {
            this.props.setProfile(response.data)

        })
    }

    render (){


        return (
            <Profile {...this.props}/>
        )

    }
}
const mstp = (state) => {
    return {
        postsObjects : state.profileInfo.postsObjects,
          newM : state.profileInfo.newM,
          profileByUserId : state.profileInfo.profileByUserId,
    }
}


let WithRouterProfile = withRouter(ProfileApiContainer)

export default connect(mstp, {
    addPost, 
    makeNewM,
    setProfile
})(WithRouterProfile)