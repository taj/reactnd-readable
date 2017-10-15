import {
	GET_COMMENTS
} from '../actions/comments'


const comments = ( state = {}, action ) => {
	const { comments } = action
	switch (action.type) {
		case GET_COMMENTS:
			return {
				...state,
				comments
			}
		default:
			return state
	}
}

export default comments
