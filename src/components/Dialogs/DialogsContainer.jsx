import React from 'react'
import { sendingM } from '../Redux/dialogsInfoReducer.ts'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'
import { withRedirect } from '../../hoc/hoc'
import { compose } from 'redux'
import { getIsAuthSel, getD_MessagesInfoSel, getD_FriendsInfoSel } from '../Redux/selectors/selectors'


class DialogsContainer extends React.Component {
    render() {
        return (
            <div>
                <Dialogs {...this.props} />
            </div>
        )
    }
}

const mstp = (state) => {
    return {
        isAuth: getIsAuthSel(state),
        d_MessagesInfo: getD_MessagesInfoSel(state),
        d_FriendsInfo: getD_FriendsInfoSel(state),
       
    }
}

export default compose  (
    connect(mstp, { sendingM }),
    withRedirect
)(DialogsContainer)