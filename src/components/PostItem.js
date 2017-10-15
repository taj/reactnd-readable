import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { readableDate } from '../utils/helpers'

class PostItem extends Component {
	render() {
		const { post } = this.props
		return (
			<div className="card mb-2">
				<div className="card-body">
					<h4 className="card-title">
					<Link to={`/${post.category}/${post.id}`}>{post.title}</Link>
					</h4>
					<h6 className="card-subtitle text-muted">
						{post.voteScore} points by {post.author} | {readableDate(post.timestamp)}
					</h6>
					<Link to={`/${post.category}`} className="card-link">{post.category}</Link>
				</div>
			</div>
		)
	}
}

export default PostItem