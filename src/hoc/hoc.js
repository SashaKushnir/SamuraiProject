
import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'


let mstpForRedirect = (state) => ({isAuthorised : state.authInfo.isAuthorised})

export const withRedirect = (Component) => {
    
    class Outer extends React.Component{
        render () {
            if(!this.props.isAuthorised){
          
                return <Redirect to = '/login' />
            }
            else
            return <Component {...this.props} />
        }
    }
    

    let withOuter = connect (mstpForRedirect)(Outer)
    
    
    return withOuter 
}

