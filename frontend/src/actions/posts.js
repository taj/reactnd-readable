export const LOAD_POSTS = 'LOAD_POSTS'
export const RE_LOAD_POST = 'RE_LOAD_POST'

export const loadPosts = posts => ({
  type: LOAD_POSTS,
  posts
})

export const reLoadPost = post => ({
  type: RE_LOAD_POST,
  post
})
