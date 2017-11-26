import React, { Component } from 'react'

import CommentItem from './CommentItem'

class CommentsList extends Component {
  render() {
    const comments = this.props.comments.sort((a, b) => a.voteScore < b.voteScore)

    return (
      <div className="jumbotron comments-list">
        <h5>Comments:</h5>
        {comments && (
          comments.map(comment => (
            <CommentItem key={comment.id} comment={comment} />
          ))
        )}
      </div>
    )
  }
}

export default CommentsList