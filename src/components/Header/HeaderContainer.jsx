import Axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import { settingAuthorisation, toFetch, stopFetching } from '../Redux/authInfoReducer'
import  Fetching from '../../images/VAyR.gif'

class HeaderContainer extends React.Component {
    componentDidMount = () => {
        Axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        }
        ).then(response => {
            debugger
            this.props.toFetch()
            if (!response.data.resultCode) {
                this.props.settingAuthorisation(response.data.data)
            }
            this.props.stopFetching()
        })


    }


    render() {
        console.log(this.props)
        //bad fetching
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
        data: state.authInfo.data,
        isFetching: state.authInfo.isFetching,
        isAuthorised: state.authInfo.isAuthorised
    }
}

export default connect(mstp,
    { settingAuthorisation, toFetch, stopFetching })
    (HeaderContainer)


