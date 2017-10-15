import {
	GET_POST
} from '../actions/post'

const post = ( state = {}, action ) => {
	const { post } = action
	switch (action.type) {
		case GET_POST:
			return {
				...state,
				post
			}
		default:
			return state
	}
}

export default post
