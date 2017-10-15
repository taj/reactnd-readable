import * as ReadableAPI from '../utils/api'

export const GET_COMMENTS = 'GET_COMMENTS'

export const fetchComments = (postId) => dispatch => (
	ReadableAPI
		.fetchComments(postId)
		.then(res => dispatch(getComments(res)))
)

export const getComments = comments => {
	return {
		type: GET_COMMENTS,
		comments
	}
}