import React, { Component } from 'react'
import CommentItem from './CommentItem'
import AddComment from './AddComment'
import { fetchComments, commentVote, addComment } from '../actions/comments'
import { connect} from 'react-redux'
import uuid from 'uuid'
import Modal from 'react-modal'

class CommentsList extends Component {
	constructor(props) {
		super(props)

		this.state = {
			commentEditModalOpen: false
		}

		this.onItemControlClick = this.onItemControlClick.bind(this)
		this.openCommentEditModal = this.openCommentEditModal.bind(this)
		this.closeCommentEditModal = this.closeCommentEditModal.bind(this)
	}

	openCommentEditModal = () => {
		this.setState(() => ({
			commentEditModalOpen: true
		}))
	}

	closeCommentEditModal = () => {
		this.setState(() => ({
			commentEditModalOpen: false
		}))
	}

	onItemControlClick = (action) => {
		console.log(action)
		switch (action) {
			case 'edit':
				this.openCommentEditModal()
				break;
			default:
				break;
		}
	}

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

	postComment = (comment) => {
		const postId = this.getPostId()
		this.props.addComment({
			...comment,
			id: uuid(),
			parentId: postId,
			timestamp: new Date().getTime()
		}).then( () => this.props.fetchComments(postId))
	}

	render() {
		const { comments } = this.props.comments
		const { commentEditModalOpen } = this.state

		const sortedComments = this.sortComments( comments );
		return (
			<div className="mt-4">
				<h5>Comments:</h5>
				{ sortedComments && (
					sortedComments.map( comment => (
						<CommentItem key={comment.id} comment={comment} onVote={this.onVote} onItemControlClick={this.onItemControlClick}/>
					))
				)}
				<AddComment postComment={this.postComment}/>
				<Modal
					className='react-modal'
					overlayClassName='react-overlay'
					isOpen={commentEditModalOpen}
					onRequestClose={this.closeCommentEditModal}
					contentLabel='Modal'
					>
					<div>
						<h1>Editing comment modal</h1>
					</div>
				</Modal>
			</div>
		)
	}
}

const mapStateToProps = ({ comments }) => ({
	comments
})

export default connect(mapStateToProps, { fetchComments, commentVote, addComment }) (CommentsList)