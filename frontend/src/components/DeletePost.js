import React, { Component } from 'react'

class DeletePost extends Component {
  constructor(props) {
    super(props)

    this.state = { onDelete: this.props.onDelete }

    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete = () => {
    this.props.onDelete(this.props.id)
  }

  render() {
    return (
      <div className="btn-deleting">
        <button type="button" className="btn btn-danger"
          onClick={() => { this.handleDelete() }}>
          Delete Post
        </button>
      </div>
    )
  }
}

export default DeletePost