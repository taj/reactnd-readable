import React, { Component } from 'react'

import { readableDate } from '../utils/helpers'

class PostItem extends Component {
  render() {
    const { post } = this.props
    return (
      <div className="card mb-2">
        <div className="card-body">
          <h4 className="card-title">
          {post.title}
          </h4>
          <h6 className="card-subtitle text-muted">
            {post.voteScore} points by {post.author} | {readableDate(post.timestamp)}
          </h6>
          {post.category}
        </div>
      </div>
    )
  }
}

export default PostItem
