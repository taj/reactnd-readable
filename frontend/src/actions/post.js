export const LOAD_POST = "GET_POST"

export const loadPost = post => {
  return {
    type: LOAD_POST,
    post
  }
}