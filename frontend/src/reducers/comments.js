import {
  LOAD_COMMENTS
} from '../actions'

const comments = (state = {}, action) => {
  const { postId, comments } = action

  switch (action.type) {
    case LOAD_COMMENTS:
      return {
        ...state,
        [postId]: comments
      }
    default:
      return state
  }
}

export default comments

