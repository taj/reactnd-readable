import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addComment } from '../actions'

import uuid from 'uuid'
import * as API from '../utils/api'

class AddComment extends Component {
  constructor(props) {
    super(props)

    const postId = this.props.match !== undefined ? (
      this.props.match.params.postId || false
    ) : false

    this.state = {
      author: '',
      body: '',
      parentId: postId
    }
    this.handleAuthorChange = this.handleAuthorChange.bind(this)
    this.handleBodyChange = this.handleBodyChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleAuthorChange(event) {
    this.setState({ author: event.target.value })
  }
  handleBodyChange(event) {
    this.setState({ body: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log(this.state)

    this.props.createComment({
      ...this.state,
      id: uuid()
    })
    .then(() => {
      this.setState({
        author: '',
        body: ''
      })
    })
  }

  render() {
    return (
      <div className="jumbotron add-comment">
        <h5>Add Comment:</h5>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group row">
            <label htmlFor="author" className="col-sm-2 col-form-label">Author:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="author"
                placeholder="Author"
                value={this.state.author} onChange={this.handleAuthorChange} />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="body" className="col-sm-2 col-form-label">Body:</label>
            <div className="col-sm-10">
              <textarea type="text" className="form-control" id="body"
                placeholder="Body"
                value={this.state.body} onChange={this.handleBodyChange}>
              </textarea>
            </div>
          </div>

          <input type="submit" className="btn btn-primary" value="Submit" />
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createComment: (data) => (
      API
        .createComment(data)
        .then(comment => dispatch(addComment(comment)))
    )
  }
}

const mapStateToProps = () => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddComment)

// export default AddComment