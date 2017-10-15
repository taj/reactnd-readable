import * as ReadableAPI from '../utils/api';

export const GET_POST = 'GET_POST'

export const fetchPost = (postId) => dispatch => (
	ReadableAPI
		.fetchPost(postId)
		.then(res => dispatch(getPost(res)))
)

export const getPost = post => {
	return {
		type: GET_POST,
		post
	}
}