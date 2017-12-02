import React, { Component } from 'react'
import Modal from 'react-modal'

import Vote from './Vote'
import DeleteComment from './DeleteComment'

import { readableDate } from '../utils/helpers'


class CommentItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      commentModalOpen: false,
      commentBody: '',
      commentId: ''
    }

    this.onVote = this.onVote.bind(this)
    this.onCommentUpdate = this.onCommentUpdate.bind(this)
    this.onCommentDelete = this.onCommentDelete.bind(this)

    this.handleCommentBodyChange = this.handleCommentBodyChange.bind(this)
    this.handleCommentUpdate = this.handleCommentUpdate.bind(this)
  }

  onVote(id, type, option) {
    this.props.onVote(id, type, option)
  }

  onCommentUpdate(data) {
    this.props.onCommentUpdate(data)
  }

  onCommentDelete(id) {
    this.props.onCommentDelete(id)
  }

  handleCommentBodyChange(event) {
    this.setState({ commentBody: event.target.value })
  }


  handleCommentUpdate(event) {
    event.preventDefault()

    this.onCommentUpdate({
      id: this.state.commendId,
      body: this.state.commentBody,
      timestamp: new Date().getTime()
    })
    this.closeCommentModal()
  }

  openCommentModal = ({ comment }) => {
    this.setState(() => ({
      commentModalOpen: true,
      commentBody: comment.body,
      commendId: comment.id
    }))
  }

  closeCommentModal = () => this.setState(() => ({ commentModalOpen: false }))

  render() {
    const { comment } = this.props
    const { commentModalOpen } = this.state

    return (
      <div className="comment-item mt-2">
        {comment && (
          <div>
            <h6 className="card-title">{comment.body}</h6>
            <h6 className="card-subtitle text-muted">
              {comment.voteScore} points by {comment.author} | {readableDate(comment.timestamp)}
            </h6>
            <Vote onVote={this.onVote} id={comment.id} type={"comments"} />
            <DeleteComment onCommentDelete={this.onCommentDelete} id={comment.id} />
            <div className="btn btn-editing btn-warning" onClick={() => this.openCommentModal({ comment })}>Edit Comment</div>

            <Modal
              className='react-modal'
              overlayClassName='react-overlay'
              isOpen={commentModalOpen}
              onRequestClose={this.closeCommentModal}
              contentLabel='Modal'
            >
              {commentModalOpen && (
                <div>
                  <h1>Edit comment</h1>
                  <form onSubmit={this.handleCommentUpdate}>
                    <div className="form-group row">
                      <label htmlFor="body" className="col-sm-2 col-form-label">Body:</label>
                      <div className="col-sm-10">
                        <textarea type="text" className="form-control" id="body"
                          placeholder="Body"
                          value={this.state.commentBody} onChange={this.handleCommentBodyChange}>
                        </textarea>
                      </div>
                    </div>

                    <input type="submit" className="btn btn-primary" value="Submit" />
                  </form>
                </div>
              )}
            </Modal>
          </div>
        )}
      </div>
    )
  }
}

export default CommentItem