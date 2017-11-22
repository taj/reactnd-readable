import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadPosts } from '../actions'
import PostItem from './PostItem'
import PostsSorter from './PostsSorter'
import * as API from '../utils/api'

class PostsList extends Component {
  constructor(props) {
    super(props)

    this.state = { sort: 'date' }
  }

  componentDidMount() {
    const filter = this.props.match !== undefined ? (
      this.props.match.params.category || false
    ) : false

    this.props.fetchPosts(filter)
  }

  sortPosts = (posts, sort) => {
    if (posts === undefined)
      return posts;

    switch (sort) {
      case 'date':
        return posts.sort((a, b) => a.timestamp < b.timestamp)
      case 'score':
        return posts.sort((a, b) => a.voteScore < b.voteScore)
      default:
        return posts
    }
  }


  onOrderChange = (sort) => {
    this.setState({ sort: sort })
  }

  render() {
    const { posts } = this.props.posts
    const { sort } = this.state
    const sortedPosts = this.sortPosts( posts, sort )

    return (
      <div>
        <div className='jumbotron posts-list'>
          <h1>All Posts</h1>
          <PostsSorter onOrderChange={this.onOrderChange} />
          {sortedPosts !== undefined && posts.map(post => (
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
