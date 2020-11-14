import ProfileClass from './Profile.module.css'
import React from 'react'
import Posts from './Posts/Posts'
import MyPage from './MyPage/MyPage'

const Profile = (props) => {
  return (
    <div >
      <MyPage />
      <Posts  postsObjects = {props.profileInfo.postsObjects} dispatch = {props.dispatch} />
    </div>
  )
}

export default Profile