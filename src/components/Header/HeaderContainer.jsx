
import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import {toLogOut} from '../Redux/authInfoReducer'
import  Fetching from '../../images/VAyR.gif'
import { getIsAuthFetchingSel , getAuthDataSel , getIsAuthSel } from '../Redux/selectors/selectors'


class HeaderContainer extends React.Component {
    render() {
        return (
            <div>
                { this.props.isFetching ?
                    <div>
                        <img  src={Fetching} alt="YourPhoto" />
                    </div>
                    : null}
                <Header {...this.props} />
            </div>
        )
    }

}

const mstp = (state) => {
    return {
        data: getAuthDataSel(state),
        isFetching: getIsAuthFetchingSel(state),
        isAuthorised: getIsAuthSel(state)
    }
}

export default connect(mstp,
    {toLogOut})
    (HeaderContainer)


