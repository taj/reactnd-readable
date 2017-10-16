import {
	GET_COMMENTS,
	VOTE_COMMENT,
	GET_COMMENT
} from '../actions/comments'


const comments = ( state = {}, action ) => {
	const { comments } = action
	switch (action.type) {
		case GET_COMMENTS:
			return {
				...state,
				comments
			}
		case VOTE_COMMENT:
			return {
				...state,
				comments
			}
		case GET_COMMENT:
			return {
				...state,
				comments
			}
		default:
			return state
	}
}

export default comments
