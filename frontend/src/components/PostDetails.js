import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import CommentsList from './CommentsList'
import Vote from './Vote'
import AddComment from './AddComment'
import DeletePost from './DeletePost'

import { loadPost, loadComments, reLoadComment, deletePost } from '../actions'

import * as API from '../utils/api'
import { readableDate } from '../utils/helpers'

class PostDetails extends Component {
  constructor(props) {
    super(props)

    this.state = {
      postDeleted: false
    }
  }
  componentDidMount() {
    const postId = this.props.match !== undefined ? (
      this.props.match.params.postId || false
    ) : false

    this.props.fetchPost(postId)
    this.props.fetchComments(postId)

    this.onVote = this.onVote.bind(this)
  }

  onVote(id, type, option) {
    if (type === "posts") {
      this.props.votePost(id, type, option)
    } else {
      this.props.voteComment(id, type, option)
    }
  }

  onDelete = (id) => {
    this.props.deletePost(id)
      .then(() => {
        this.setState({ postDeleted: true })
      })
  }

  render() {
    const { post } = this.props
    const { comments } = this.props
    const postComments = comments[post.id] || []

    console.log(post)

    return (
      <div>
        {this.state.postDeleted && (
          <div className='jumbotron post-details'>
            <div className="alert alert-primary" role="alert">
              Post deleted successfully!<br />
              <Link to="/">Go back to the Home page</Link>
            </div>
          </div>
        )}

        {this.state.postDeleted === false && (
          <div>
            {(post && post.error === undefined) && (
              <div>
                <div className='jumbotron post-details'>
                  <h4 className="card-title">{post.title}</h4>
                  <h6 className="card-subtitle text-muted">
                    {post.voteScore} points by {post.author} | {readableDate(post.timestamp)}
                  </h6>
                  <p className="card-text">
                    {post.body}
                  </p>
                  <Link to={`/category/${post.category}`} className="card-link">{post.category}</Link>
                  <Vote onVote={this.onVote} id={post.id} type={"posts"} />
                  <DeletePost id={post.id} onDelete={this.onDelete} />
                </div>
                <CommentsList comments={postComments} onVote={this.onVote} />
                <AddComment  {...this.props} />
              </div>
            )}

            {(post && post.error === "There was an error.") && (
              <div className='jumbotron post-details'>
                Post not found
                </div>
            )}
          </div>
        )}

        <Link to="/">Go back to the Home page</Link>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPost: (postId) => (
      API
        .fetchPost(postId)
        .then(post => dispatch(loadPost(post)))
    ),
    fetchComments: (postId) => (
      API
        .fetchComments(postId)
        .then(comments => dispatch(loadComments(postId, comments)))
    ),
    votePost: (id, type, option) => (
      API
        .vote(id, type, option)
        .then(post => dispatch(loadPost(post)))
    ),
    voteComment: (id, type, option) => (
      API
        .vote(id, type, option)
        .then(comment => dispatch(reLoadComment(comment)))
    ),
    deletePost: (id) => (
      API
        .deletePost(id)
        .then(post => dispatch(deletePost(post)))
    )
  }
}

const mapStateToProps = ({ post, comments }) => ({
  post: post.post ? post.post : post,
  comments
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetails)
