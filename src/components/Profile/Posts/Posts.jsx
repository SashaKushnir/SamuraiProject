
import React, { createRef } from 'react'
import { addPostCreateAction, makeNewMCreateAction } from '../../Redux/state'
import Post from './Post/Post'

import s from './Posts.module.css'


const Posts =   (props) => {
  let mapPosts = props.postsObjects.map(obj => <Post postObj={obj} />)

  let textAreaRef = React.createRef()

  let addPost = () =>{
      props.dispatch(addPostCreateAction(textAreaRef.current.value))
      props.dispatch(makeNewMCreateAction(''))
  }

  let symbolChahged = () => {
    props.dispatch(makeNewMCreateAction(textAreaRef.current.value))
  }

  return (
    <div>
      <h3>Posts</h3>
      <textarea onChange = {symbolChahged} value ={props.newM} ref = {textAreaRef}  name="" id="" cols="30" rows="4"/>
      <div className={s.button}>
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={s.posts} >
        {mapPosts}
      </div>
    </div>
  )
}

export default Posts