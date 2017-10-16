import React, { Component } from 'react'
import CommentItem from './CommentItem'
import { connect} from 'react-redux'
import { fetchComments, commentVote } from '../actions/comments'

class CommentsList extends Component {
	componentDidMount() {
		const postId = this.getPostId()

		this.props.fetchComments(postId)
	}

	sortComments = (comments) => {
		if (comments === undefined)
			return comments;
		return	comments.sort((a, b) => a.voteScore < b.voteScore)
	}

	onVote = (commentId, option) => {
		const postId = this.getPostId()

		this.props.commentVote(commentId, option)
			.then( () => this.props.fetchComments(postId))
	}

	getPostId = () => {
		return this.props.match !== undefined ? (
			this.props.match.params.postId || false
		) : false
	}

	render() {
		const { comments } = this.props.comments
		const sortedComments = this.sortComments( comments );
		return (
			<div className="mt-4">
				<h5>Comments:</h5>
				{ sortedComments && (
					sortedComments.map( comment => (
						<CommentItem key={comment.id} comment={comment} onVote={this.onVote}/>
					))
				)}
			</div>
		)
	}
}

const mapStateToProps = ({ comments }) => ({
	comments
})

export default connect(mapStateToProps, { fetchComments, commentVote }) (CommentsList)