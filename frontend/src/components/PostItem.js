import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Vote from './Vote'
import DeletePost from './DeletePost'

import { readableDate } from '../utils/helpers'

class PostItem extends Component {
  constructor(props) {
    super(props)

    this.onVote = this.onVote.bind(this)
    this.onDelete = this.onDelete.bind(this)
  }

  onVote(id, type, option) {
    this.props.onVote(id, type, option)
  }

  onDelete(id) {
    this.props.onDelete(id)
  }

  render() {
    const { post } = this.props

    return (
      <div className="card mb-2">
        <div className="card-body">
          <h4 className="card-title">
            <Link to={`/post/${post.id}/show`}>{post.title}</Link>
          </h4>
          <h6 className="card-subtitle text-muted">
            {post.voteScore} points by {post.author} | {readableDate(post.timestamp)}
          </h6>
          <Link to={`/category/${post.category}`} className="card-link">{post.category}</Link>
          <Vote onVote={this.onVote} id={post.id} type={"posts"} />
          <DeletePost id={post.id} onDelete={this.onDelete} />
          <Link to={`/post/${post.id}/edit`} className="btn btn-editing btn-warning">Edit</Link>
        </div>
      </div>
    )
  }
}

export default PostItem
