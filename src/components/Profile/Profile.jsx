
import React from 'react'
import Posts from './Posts/Posts'
import MyPage from './MyPage/MyPage'

const Profile = (props) => {
  
  return (
    <div >
      <MyPage {...props}/>
      <Posts  {...props} />
    </div>
  )
}

export default Profile