import React, { Component } from 'react'
import CommentsList from './CommentsList'
import Vote from './Vote'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchPost, postVote } from '../actions/post'
import { readableDate } from '../utils/helpers'

class PostDetails extends Component {
	componentDidMount() {
		const postId = this.props.match !== undefined ? (
			this.props.match.params.postId || false
		) : false

		this.props.fetchPost(postId)

		this.onPostVote = this.onPostVote.bind(this)
	}

	onPostVote (option) {
		this.props.postVote(this.props.post.post.id, option)
			.then ( () => this.props.fetchPost(this.props.post.post.id))
	}

	render() {
		const { post } = this.props.post

		return (
			<div className='jumbotron post-details'>
				{post && (
					<div>
						<h4 className="card-title">{post.title}</h4>
						<h6 className="card-subtitle text-muted">
							{post.voteScore} points by {post.author} | {readableDate(post.timestamp)}
						</h6>
						<Vote onPostVote={this.onPostVote}/>
						<p className="card-text">
							{post.body}
						</p>
						<Link to={`/${post.category}`} className="card-link">{post.category}</Link>

						<CommentsList {...this.props}/>
					</div>
				)}
			</div>
		)
	}
}


const mapStateToProps = ({ post }) => ({
	post
})

export default connect(mapStateToProps, { fetchPost, postVote }) (PostDetails)