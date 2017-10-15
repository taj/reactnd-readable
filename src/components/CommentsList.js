import React, { Component } from 'react'
import CommentItem from './CommentItem'
import { connect} from 'react-redux'
import { fetchComments } from '../actions/comments'

class CommentsList extends Component {
	componentDidMount() {
		const postId = this.props.match !== undefined ? (
			this.props.match.params.postId || false
		) : false

		this.props.fetchComments(postId)
	}

	sortComments = (comments) => {
		if (comments === undefined)
			return comments;
		return	comments.sort((a, b) => a.voteScore < b.voteScore)
	}

	render() {
		const { comments } = this.props.comments

		return (
			<div className="mt-4">
				<h5>Comments:</h5>
				{ comments && (
					comments.map( comment => (
						<CommentItem key={comment.id} comment={comment}/>
					))
				)}
			</div>
		)
	}
}

const mapStateToProps = ({ comments }) => ({
	comments
})

export default connect(mapStateToProps, { fetchComments }) (CommentsList)