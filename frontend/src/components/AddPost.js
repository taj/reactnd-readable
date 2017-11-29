import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { loadCategories, addPost } from '../actions'

import uuid from 'uuid'
import * as API from '../utils/api'

class AddPost extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      body: '',
      author: '',
      category: '',
      showMessage: false
    }

    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleBodyChange = this.handleBodyChange.bind(this)
    this.handleAuthorChange = this.handleAuthorChange.bind(this)
    this.handleCategoryChange = this.handleCategoryChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value })
  }
  handleBodyChange(event) {
    this.setState({ body: event.target.value })
  }
  handleAuthorChange(event) {
    this.setState({ author: event.target.value })
  }
  handleCategoryChange(event) {
    this.setState({ category: event.target.value })
  }

  componentDidMount() {
    this.props.fetchCategories()
  }

  handleSubmit(event) {
    event.preventDefault()

    this.props.createPost({
      ...this.state,
      id: uuid()
    })
    .then(() => {
      this.setState({ showMessage: true })
    })
  }

  render() {
    const { categories } = this.props.categories

    return (
      <div className="jumbotron">
        {this.state.showMessage && (
          <div className="alert alert-primary" role="alert">
            New post added successfully!<br />
            <Link to="/">Go back to the Home page</Link>
          </div>
        )}
        {!this.state.showMessage && (
          <div>
            <h1> Add a new post </h1>
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

              <div className="form-group row">
                <label htmlFor="author" className="col-sm-2 col-form-label">Author:</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="author"
                    placeholder="Author"
                    value={this.state.author} onChange={this.handleAuthorChange} />
                </div>
              </div>
              {categories !== undefined && (
                <div className="form-group row">
                  <label htmlFor="category" className="col-sm-2 col-form-label">Category:</label>
                  <div className="col-sm-10">
                    <select id="category" className="form-control"
                      value={this.state.category}
                      onChange={this.handleCategoryChange}>
                      <option disabled value="">Choose...</option>
                      {categories.map(category => (
                        <option key={category.path} value={category.path}>{category.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
              )}
              <input type="submit" className="btn btn-primary" value="Submit" />
            </form>
          </div>
        )}
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCategories: () => (
      API
        .fetchCategories()
        .then(categories => dispatch(loadCategories(categories)))
    ),
    createPost: (data) => (
      API
        .create(data)
        .then(post => dispatch(addPost(post)))
    )
  }
}

const mapStateToProps = ({ categories }) => ({
  categories
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPost)