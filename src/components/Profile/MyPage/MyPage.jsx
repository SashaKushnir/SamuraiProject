
import React from 'react'
import Contacts from './Contacts/Contacts'
import Info from './Info'

const MyPage = React.memo (props => {
  
  let contacts = Object.keys(props.profileByUserId.contacts).map(key => 
      <Contacts key = {key} value= {props.profileByUserId.contacts[key]} key1= {key} showInputs = {false} />)

  return (
    <div>
      {!props.profileByUserId.userId ? null :
        <div>
          <Info {...props} contacts = {contacts}/>
        </div>
      }
    </div>
  )
})

export default MyPage