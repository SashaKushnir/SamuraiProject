
import React from 'react'
import Posts from './Posts/PostsContainer'
import MyPage from './MyPage/MyPageContainer'

const Profile = () => {
  
  return (
    <div className = "AllText">
      <MyPage />
      <Posts />
    </div>
  )
}

export default Profile