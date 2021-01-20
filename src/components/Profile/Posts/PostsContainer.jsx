import { connect } from "react-redux";
import { addPost } from '../../Redux/profileInfoReducer'
import React from 'react'
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { getPostsObjectsSel } from "../../Redux/selectors/selectors";
import Posts from "./Posts";
window.posts = []
class PostsContainer extends React.PureComponent {
    render (){
        window.posts.push(this.props)
        console.log("Posts Render")
        return (
            <Posts {...this.props}/>
        )

    }
}
const mstp = (state) => {
    return {
        postsObjects : getPostsObjectsSel(state),
    }
}
export default compose  (
    withRouter,
    connect(mstp, {
        addPost
    })
   //withRedirect
)(PostsContainer)