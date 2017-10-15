import {
	GET_POSTS
} from '../actions/posts'


const posts = ( state = {}, action ) => {
	const { posts } = action
	switch (action.type) {
		case GET_POSTS:
			return {
				...state,
				posts
			}
		default:
			return state
	}
}

export default posts
