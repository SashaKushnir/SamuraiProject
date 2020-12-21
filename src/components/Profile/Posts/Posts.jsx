
import React, { createRef } from 'react'
import Post from './Post/Post'
import s from './Posts.module.css'


const Posts =   (props) => {
  let mapPosts = props.postsObjects.map(obj => <Post postObj={obj} />)

  let textAreaRef = React.createRef()

  let addPost = () =>{
      props.addPost()
      props.makeNewM('')
  }

  let symbolChahged = () => {
    props.makeNewM(textAreaRef.current.value)
  }
 
  return (
    <div>
      <h3>Posts</h3>
      <textarea onChange = { symbolChahged} 
       value ={props.newM}
       ref = {textAreaRef}  name="" id="" cols="30" rows="4"
       placeholder = "Add your post"
       />
      <div className={s.button}>
        <button onClick={ addPost}>Add post</button>
      </div>
      <div className={s.posts} >
        {mapPosts}
      </div>
    </div>
  )
}

export default Posts