export const LOAD_COMMENTS = 'LOAD_COMMENTS'
export const RE_LOAD_COMMENT = 'RE_LOAD_COMMENT'
export const ADD_COMMENT = 'ADD_COMMENT'

export const loadComments = (postId, comments) => ({
  type: LOAD_COMMENTS,
  postId,
  comments
})

export const reLoadComment = comment => ({
  type: RE_LOAD_COMMENT,
  comment
})

export const addComment = comment => ({
  type: ADD_COMMENT,
  comment
})
