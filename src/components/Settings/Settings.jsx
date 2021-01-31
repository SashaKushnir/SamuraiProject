import React from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import LogoutNavLink from '../common/Navigation/LogoutNavLink';
import {toLogOut} from '../Redux/authInfoReducer'
import SettingsClass from './Settings.module.css';


const Settings = (props) => {
    return (
        <div>
            <LogoutNavLink  {...props} />
        </div>
    )

}
const mstp = (state) => {

    return { isAuth : state.authInfo.isAuth}
}
export default compose(
   connect(mstp, {toLogOut})
)(Settings)