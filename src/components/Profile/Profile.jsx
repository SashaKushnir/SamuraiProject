import ProfileClass from './Profile.module.css'
import React from 'react'
import Posts from './Posts/Posts'
import MyPage from './MyPage/MyPage'

const Profile = (props) => {
  return (
    <div >
      <MyPage />
      <Posts  postsObjects = {props.profileInfo.postsObjects} addPost={props.addPost} makeNewM = {props.makeNewM} />
    </div>
  )
}

export default Profile