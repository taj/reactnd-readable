import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { loadPost } from '../actions'

import * as API from '../utils/api'

class EditPost extends Component {
  constructor(props) {
    super(props)

    this.state = {
      postUpdated: false,
      title: '',
      body: '',
      category: ''
    }

    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleBodyChange = this.handleBodyChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value })
  }
  handleBodyChange(event) {
    this.setState({ body: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()

    this.props.updatePost(this.state.id, this.state)
      .then(() => {
        this.setState({ postUpdated: true })
      })
      .then(() => {
        this.props.fetchPost(this.state.id)
      })
  }

  componentDidMount() {
    const postId = this.props.match !== undefined ? (
      this.props.match.params.postId || false
    ) : false

    this.props.fetchPost(postId)
      .then((post) => {

        this.setState({
          id: post.post.id,
          title: post.post.title,
          body: post.post.body,
          category: post.post.category
        })
      })
  }

  render() {
    const { post } = this.props
    return (
      <div>
        <div className='jumbotron'>
          {this.state.postUpdated && (
            <div className="alert alert-primary" role="alert">
              Post updated successfully!<br />
              <Link to="/">Go back to the Home page</Link> or <Link to={`/${this.state.category}/${this.state.id}`}>go back to this post's details page</Link>
            </div>
          )}

          <h1>Edit post </h1>
          {(post && post.error === undefined) && (
            <form onSubmit={this.handleSubmit}>
              <div className="form-group row">
                <label htmlFor="title" className="col-sm-2 col-form-label">Title:</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="title"
                    placeholder="Title"
                    value={this.state.title} onChange={this.handleTitleChange} />
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
          )}

          {(post && post.error === "There was an error.") && (
            <div>Post not found</div>
          )}
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPost: (postId) => (
      API
        .fetchPost(postId)
        .then(post => dispatch(loadPost(post)))
    ),
    updatePost: (postId, data) => (
      API
        .updatePost(postId, data)
        .then(post => dispatch(loadPost(post)))
    )
  }
}

const mapStateToProps = ({ post }) => ({
  post: post.post ? post.post : post,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPost)
