import React, { Component } from 'react'

import CommentItem from './CommentItem'

class CommentsList extends Component {
  constructor(props) {
    super(props)

    this.onVote = this.onVote.bind(this)
  }

  onVote(id, type, option) {
    this.props.onVote(id, type, option)
  }

  render() {
    const comments = this.props.comments.sort((a, b) => a.voteScore < b.voteScore)

    return (
      <div className="jumbotron comments-list">
        <h5>Comments:</h5>
        {comments && (
          comments.map(comment => (
            <CommentItem key={comment.id} comment={comment} onVote={this.onVote} />
          ))
        )}
      </div>
    )
  }
}

export default CommentsList