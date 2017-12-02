import {
  LOAD_COMMENTS,
  RE_LOAD_COMMENT,
  ADD_COMMENT,
  DELETE_COMMENT
} from '../actions'

const comments = (state = {}, action) => {
  const { postId, comments, comment } = action
  console.log(action)
  switch (action.type) {
    case LOAD_COMMENTS:
      return {
        ...state,
        [postId]: comments
      }
    case RE_LOAD_COMMENT:
      return {
        ...state,
        [comment.parentId]: state[comment.parentId].map((c) => {
          if (c.id === comment.id)
            return comment
          else return c
        })
      }
    case ADD_COMMENT:
      return {
        ...state,
        [comment.parentId]: state[comment.parentId].concat(comment)
      }
    case DELETE_COMMENT:
      return {
        ...state,
        [comment.parentId]: state[comment.parentId] !== undefined ?
          state[comment.parentId].filter((c) => c.id !== comment.id)
          : []
      }
    default:
      return state
  }
}

export default comments

