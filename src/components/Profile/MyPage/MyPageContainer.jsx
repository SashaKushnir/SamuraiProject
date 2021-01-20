import { connect } from "react-redux";
import {friendsIn, addPost, setProfileStatus, updateProfileStatus} from '../../Redux/profileInfoReducer'
import React from 'react'
import { withRouter } from "react-router-dom";
import {withRedirect} from '../../../hoc/hoc'
import { compose } from "redux";
import { getDefAuthorisedUserIdSel, getIsAuthSel, getProfileByUserIdSel, getStatusSel } from "../../Redux/selectors/selectors";
import MyPage from "./MyPage";
  window.page = []
class MyPageContainer extends React.PureComponent {
    
    state = {
        userId : null
    }

    componentDidMount = () => {
        debugger
       let temp
        if(this.state.userId !== this.props.match.params.userId) 
        temp  = this.props.match.params.userId
        
      
        if(!temp){
            if(temp !== this.props.defAuthorisedUserId)
            temp = this.props.defAuthorisedUserId
            
                if(!temp)
                    this.props.history.push('/login')
        } 
        this.props.friendsIn(temp)  
        this.props.setProfileStatus(temp)
        if(this.state.userId !== temp){
            this.setState({
                userId : temp     
            })
        }
    }
    // componentDidUpdate = (prev) => {
    //     if(prev.status !== this.props.status){
    //         this.setState({
    //             status : this.props.status
    //         })
    //     }
    // }
    render (){ 
        debugger
        let cantChangeStatus = (this.state.userId && this.state.userId !== this.props.defAuthorisedUserId) ? true : false
        window.page.push(this.props)
        console.log("Render", this.props)
        return (
        <MyPage {...this.props} cantChangeStatus = {cantChangeStatus}/>
        )

    }
}
const mstp = (state) => {
    return {
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
)(MyPageContainer)