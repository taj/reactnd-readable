import * as ReadableAPI from '../utils/api'

export const GET_COMMENTS = 'GET_COMMENTS'
export const VOTE_COMMENT = 'VOTE_COMMENT'
export const GET_COMMENT = 'GET_COMMENT'

export const getComments = comments => {
	return {
		type: GET_COMMENTS,
		comments
	}
}

export const voteComment = (id, score) => {
	return {
		type: VOTE_COMMENT,
		id,
		score
	}
}

export const getComment = (comment) => {
	return {
		type: GET_COMMENT,
		comment
	}
}

export const fetchComments = (postId) => dispatch => (
	ReadableAPI
		.fetchComments(postId)
		.then(res => dispatch(getComments(res)))
)

export const commentVote = (commentId, option) => dispatch => (
	ReadableAPI
		.vote(commentId, 'comments', option)
		.then(res => dispatch(voteComment(commentId, res.voteScore)))
)

export const addComment = (comment) => dispatch => (
	ReadableAPI
		.postComment(comment)
		.then(res => dispatch(getComment(res)))
)