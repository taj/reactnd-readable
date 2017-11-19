import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadPosts } from '../actions'
import PostItem from './PostItem'
import * as API from '../utils/api'

class PostsList extends Component {
  componentDidMount() {
    const filter = this.props.match !== undefined ? (
      this.props.match.params.category || false
    ) : false

    this.props.fetchPosts(filter)
  }

  render() {
    const { posts } = this.props.posts

    return (
      <div>
        <div className='jumbotron posts-list'>
          <h1>All Posts</h1>
          {posts !== undefined && posts.map(post => (
            <PostItem key={post.id} post={post} />
          ))}
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPosts: (filter) => (
      API
        .fetchPosts(filter)
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
