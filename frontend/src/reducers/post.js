import { 
  LOAD_POST
} from '../actions'

const post = (state = {}, action) => {
  const { post } = action

  switch(action.type) {
    case LOAD_POST:
      return {
        ...state,
        post
      }
    default:
      return state
  }
}

export default post