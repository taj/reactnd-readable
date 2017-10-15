import React, { Component } from 'react'

class PostsOrder extends Component {
	constructor(props) {
		super(props)

		this.state = { onOrderChange: this.props.onOrderChange }

		this.handleChange = this.handleChange.bind(this)
	}

	handleChange = (sort) => {
		this.props.onOrderChange(sort)
	}

	render() {
		return (
			<div className="btn-group btn-posts-order">
				<button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					Order
				</button>
				<div className="dropdown-menu">
					<a className="dropdown-item" onClick={ () => { this.handleChange('score')} }>Vote Score</a>
					<a className="dropdown-item" onClick={ () => { this.handleChange('date')} }>Date</a>
				</div>
			</div>

		)
	}
}

export default PostsOrder