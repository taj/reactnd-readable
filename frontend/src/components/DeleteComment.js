import React, { Component } from 'react'

class DeleteComment extends Component {
  constructor(props) {
    super(props)

    this.state = { onDelete: this.props.onDelete }

    this.onCommentDelete = this.onCommentDelete.bind(this)
  }

  onCommentDelete = () => {
    this.props.onCommentDelete(this.props.id)
  }

  render() {
    return (
      <div className="btn-deleting">
        <button type="button" className="btn btn-danger"
          onClick={() => { this.onCommentDelete() }}>
          Delete Comment
        </button>
      </div>
    )
  }
}

export default DeleteComment