import React, { Component } from 'react'

class AddComment extends Component {
	constructor(props) {
		super(props)

		this.state = {author: '', body: ''}

		this.handleAuthorChange = this.handleAuthorChange.bind(this)
		this.handleBodyChange = this.handleBodyChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this);
	
	}

	handleSubmit = ( event ) => {
		event.preventDefault()

		this.props.postComment({
			author: this.state.author,
			body: this.state.body
		})
		this.setState({author: '', body: ''})
	}

	handleAuthorChange(event) {
		this.setState({author: event.target.value});
	}

	handleBodyChange(event) {
		this.setState({body: event.target.value});
	}

	render() {
		return (
			<div className='add-comment mt-4'>
				<h5>Add a new comment here: </h5>
				<form onSubmit={ this.handleSubmit }>
					<div className="form-group">
						<input type="text" className="form-control" placeholder="Author	" required
							value={this.state.author}
							onChange={this.handleAuthorChange}/>
					</div>
					<div className="form-group">
						<textarea className="form-control" rows="3" placeholder="Body" required
							value={this.state.body}
							onChange={this.handleBodyChange}></textarea>
					</div>
					<button type="submit" className="btn btn-primary">Submit</button>
				</form>
			</div>
		)
	}
}

export default AddComment