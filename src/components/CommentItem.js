import React, { Component } from 'react'
import Vote from './Vote'
import ItemControls from './ItemControls'
import { readableDate } from '../utils/helpers'

class CommentItem extends Component {
	constructor(props) {
		super(props)

		this.onItemControlClick = this.onItemControlClick.bind(this)
		this.onVote = this.onVote.bind(this)
	}

	onVote (option) {
		this.props.onVote(
			this.props.comment.id,
			option
		)
	}

	onItemControlClick = (action) => {
		this.props.onItemControlClick(action)
	}

	render() {
		const { comment } = this.props
		return (
			<div className='comment-item mt-2'>
				{comment && (
					<div>
						<h6 className="card-title">{comment.body}</h6>
						<h6 className="card-subtitle text-muted">
							{comment.voteScore} points by {comment.author} | {readableDate(comment.timestamp)}
						</h6>
						<Vote onVote={this.onVote}/>
						<ItemControls onItemControlClick={this.onItemControlClick}/>
					</div>
				)}
			</div>
		)
	}
}


export default CommentItem