export const LOAD_COMMENTS = 'LOAD_COMMENTS'

export const loadComments = (postId, comments) => ({
  type: LOAD_COMMENTS,
  postId,
  comments
})
