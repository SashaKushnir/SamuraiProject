import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { compose } from 'redux'
import { Field, reduxForm } from 'redux-form'
import { Myinput } from '../common/Forms/Mytextarea'
import { requiredField, minLengthCreator, maxLengthCreator} from '../FormControl/Validators/Validators'
import { toLogIn } from '../Redux/authInfoReducer'
import loginFormBll from '../common/Forms/Mytextare.module.css'
import { getIsAuthSel } from '../Redux/selectors/selectors'


let minLength = minLengthCreator(6)
let maxLength = maxLengthCreator(15)

const Login = (props) => {
    const login = (val) => {
        props.toLogIn(val)
    }

    return (
        <div>
            {props.isAuthorised && <Redirect to = '/profile'/>}
            <h1>
                Login
            </h1>
            <div>
                <LoginFormComponent onSubmit={login} />
            </div>
        </div>
    )

}


const mstp = (state) => ({isAuthorised : getIsAuthSel(state)})
export default compose(
    connect( mstp ,{toLogIn})
)(Login)


let LoginFormComponent = (props) => {

    return (<form onSubmit={props.handleSubmit} >
        <div>
            <Field name='email' component={Myinput} placeholder={'login'} validate={requiredField} />
        </div>
        <div>
            <Field name='password' component={Myinput} validate={[requiredField, minLength, maxLength]} placeholder={'password'} />
        </div>
        <div>
            <Field id='rememberMe' name='rememberMe' type={'checkbox'} component={'input'} />
            <label htmlFor='rememberMe'>remember me</label>
        </div>
        {props.error && <div className = {loginFormBll.errorM}>
            {props.error}
        </div>
        }
        <button>Login</button>
    </form>
    )

}
LoginFormComponent = reduxForm({ form: 'login' })(LoginFormComponent)

