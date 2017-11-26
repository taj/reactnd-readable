import React, { Component } from 'react'
import { readableDate } from '../utils/helpers'

class CommentItem extends Component {
  render() {
    const { comment } = this.props

    return (
      <div className="comment-item mt-2">
        {comment && (
          <div>
            <h6 className="card-title">{comment.body}</h6>
            <h6 className="card-subtitle text-muted">
              {comment.voteScore} points by {comment.author} | {readableDate(comment.timestamp)}
            </h6>
          </div>
        )}
      </div>
    )
  }
}

export default CommentItem