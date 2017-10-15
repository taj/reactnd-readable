import * as ReadableAPI from '../utils/api';

export const GET_POST = 'GET_POST'
export const VOTE_POST = 'VOTE_POST'

export const votePost = (id, score) => {
	return {
		type: VOTE_POST,
		id,
		score
	}
}

export const getPost = post => {
	return {
		type: GET_POST,
		post
	}
}

export const fetchPost = (postId) => dispatch => (
	ReadableAPI
		.fetchPost(postId)
		.then(res => dispatch(getPost(res)))
)

export const postVote = (postId, option) => dispatch => (
	ReadableAPI
		.vote(postId, 'posts', option)
		.then(res => dispatch(votePost(postId, res.voteScore)))
)