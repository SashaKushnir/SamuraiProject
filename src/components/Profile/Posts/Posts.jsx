
import React  from 'react'
import { Field, reduxForm } from 'redux-form'
import Post from './Post/Post'
import s from './Posts.module.css'
import {maxLengthCreator, requiredField} from '../../FormControl/Validators/Validators'
import { Mytextarea } from '../../common/Forms/Mytextarea'
const  maxLength15 = maxLengthCreator(15)
const Posts =   (props) => {
  let mapPosts = props.postsObjects.map(obj => <Post postObj={obj} />)



  let addPost = (val) =>{
      props.addPost(val.postform)
  }

 
  return (
    <div>
      <h3><label for="post"> Posts</label></h3>
     
      <div className={s.button}>
        <div>
        </div>
      <PostTextAreaForm onSubmit = {addPost} /> 
      </div>
      <div className={s.posts} >
        {mapPosts}
      </div>
    </div>
  )
}

export default Posts

let PostTextAreaForm = (props) => {
  
  return (
    <form action="" onSubmit = {props.handleSubmit}>
         <Field id = "post"  name="postform" cols="30" rows="4"
       placeholder = "Add your post" component={Mytextarea}
       validate = {[requiredField, maxLength15]}
       />
          <div><button>Leave Post</button></div>
    </form>
  )
}
PostTextAreaForm = reduxForm({form : 'posttextarea'})(PostTextAreaForm)