import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchPost } from '../actions/post'
import { readableDate } from '../utils/helpers'

class PostDetails extends Component {
	componentDidMount() {
		const postId = this.props.match !== undefined ? (
			this.props.match.params.postId || false
		) : false

		this.props.fetchPost(postId)
	}
	render() {
		const { post } = this.props.post

		return (
			<div className='jumbotron post-details'>
				{post && (
					<div className='jumbotron post-details'>
						<h4 className="card-title">{post.title}</h4>
						<h6 className="card-subtitle text-muted">
							{post.voteScore} points by {post.author} | {readableDate(post.timestamp)}
						</h6>
						<p className="card-text">
							{post.body}
						</p>
						<Link to={`/${post.category}`} className="card-link">{post.category}</Link>
					</div>
					)}
			</div>
		)
	}
}


const mapStateToProps = ({ post }) => ({
	post
})

export default connect(mapStateToProps, { fetchPost }) (PostDetails)