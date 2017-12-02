import { 
  LOAD_POST,
  DELETE_POST
} from '../actions'

const post = (state = {}, action) => {
  const { post } = action

  switch(action.type) {
    case LOAD_POST:
      return {
        ...state,
        post
      }
    case DELETE_POST:
      return {
        ...state,
        post: state.post !== undefined ?
                state.post.id === post.id ? {} : state.post
                : {}
      }
    default:
      return state
  }
}

export default post
