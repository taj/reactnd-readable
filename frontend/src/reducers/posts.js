import {
  LOAD_POSTS,
  RE_LOAD_POST
} from '../actions'

const posts = (state = {}, action) => {
  const { posts, post } = action
  console.log(action)
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
    default:
      return state
  }
}

export default posts