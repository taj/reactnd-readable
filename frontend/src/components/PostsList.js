import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadPosts } from '../actions'
import PostItem from './PostItem'
import * as API from '../utils/api'

class PostsList extends Component {
  componentDidMount() {
    this.props.fetchPosts()
  }

  render() {
    const { posts } = this.props.posts

    return (
      <div>
        <div className='jumbotron posts-list'>
          <h1>All Posts</h1>
          { posts !== undefined && posts.map( post => (
              <PostItem key={post.id} post={post}/>
          ))}
        </div>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchPosts: () => (
      API
        .fetchPosts()
        .then(posts => dispatch(loadPosts(posts)))
    )
  }
}

const mapStateToProps = ({ posts }) => ({
  posts
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsList)
