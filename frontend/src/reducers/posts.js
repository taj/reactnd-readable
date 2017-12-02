import {
  LOAD_POSTS,
  RE_LOAD_POST,
  ADD_POST,
  DELETE_POST
} from '../actions'

const posts = (state = {}, action) => {
  const { posts, post } = action

  switch (action.type) {
    case LOAD_POSTS:
      return {
        ...state,
        posts
      }
    case RE_LOAD_POST:
      return {
        ...state,
        posts: state.posts.map((p) => {
          if (p.id === post.id)
            return post
          else return p
        })
      }
    case ADD_POST:
      return {
        ...state,
        posts: state.posts !== undefined ?
          state.posts.concat(post)
          : [].concat(post)
      }
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts !== undefined ?
          state.posts.filter((p) => p.id !== post.id)
          : []
      }
    default:
      return state
  }
}

export default posts
