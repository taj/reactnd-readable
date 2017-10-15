import React, { Component } from 'react'

class Vote extends Component {
	constructor(props) {
		super(props)

		this.state = { onPostVote: this.props.onPostVote }

		this.handleVote = this.handleVote.bind(this)
	}

	handleVote = (option) => {
		this.props.onOrderChange(option)
	}

	render() {
		return (
			<div className="btn-voting">
				<span>Vote: </span>
				<div className="btn-group" role="group">
					<button type="button" className="btn btn-success btn-sm"
						onClick={ () => { this.handleVote('upVote')} }>
						<i className="fa fa-angle-up"></i>
					</button>
					<button type="button" className="btn btn-danger btn-sm"
						onClick={ () => { this.handleVote('downVote')} }>
						<i className="fa fa-angle-down"></i>
					</button>
				</div>
			</div>
		)
	}
}

export default Vote