import * as ReadableAPI from '../utils/api';

export const GET_POSTS = 'GET_POSTS'

export const fetchPosts = () => dispatch => (
	ReadableAPI
		.fetchPosts()
		.then(res => dispatch(getPosts(res)))
)

export const getPosts = posts => {
	return {
		type: GET_POSTS,
		posts
	}
}