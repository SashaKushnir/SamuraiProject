import { connect } from "react-redux";
import {
    friendsIn, addPost, setProfileStatus, updateProfileStatus,
    savePhoto, updateProfileData
} from '../../Redux/profileInfoReducer'
import React from 'react'
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { getDefAuthorisedUserIdSel, getIsAuthSel, getProfileByUserIdSel, getStatusSel } from "../../Redux/selectors/selectors";
import MyPage from "./MyPage";
window.page = []
class MyPageContainer extends React.PureComponent {

    state = {
        userId: null
    }
    componentUpMounted = () => {
        let temp
        if (this.state.userId !== this.props.match.params.userId)
            temp = this.props.match.params.userId
        if (!temp)
            if (temp !== this.props.defAuthorisedUserId)
                temp = this.props.defAuthorisedUserId
        if (!temp)
            this.props.history.push('/login')

        this.props.friendsIn(temp)
        this.props.setProfileStatus(temp)
        if (this.state.userId !== temp)
            this.setState({
                userId: temp
            })
    }

    componentDidMount = () => {
        this.componentUpMounted()

    }
    componentDidUpdate = (prevProps, prevState) => {
        if (this.props.match.params.userId !== prevProps.match.params.userId)
            this.componentUpMounted()
    }
    render() {
        let cantChangeStatus = (this.state.userId && this.state.userId !== this.props.defAuthorisedUserId) ? true : false
        window.page.push(this.props)

        return (
            <div>
                <MyPage  {...this.props} cantChangeStatus={cantChangeStatus} />
            </div>
        )
    }
}
const mstp = (state) => {
    return {
        profileByUserId: getProfileByUserIdSel(state),
        isAuth: getIsAuthSel(state),
        status: getStatusSel(state),
        defAuthorisedUserId: getDefAuthorisedUserIdSel(state)
    }
}
export default compose(
    withRouter,
    connect(mstp, {
        addPost, friendsIn, updateProfileStatus,
        setProfileStatus, savePhoto, updateProfileData
    })
)(MyPageContainer)