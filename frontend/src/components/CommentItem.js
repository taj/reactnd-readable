import React, { Component } from 'react'
import { readableDate } from '../utils/helpers'

import Vote from './Vote'

class CommentItem extends Component {
  constructor(props) {
    super(props)

    this.onVote = this.onVote.bind(this)
  }

  onVote(id, type, option) {
    this.props.onVote(id, type, option)
  }

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
            <Vote onVote={this.onVote} id={comment.id} type={"comments"} />
          </div>
        )}
      </div>
    )
  }
}

export default CommentItem