const apiEnd = 'http://localhost:3001'

export function fetchCategories() {
  return fetch(`${apiEnd}/categories`, { headers: { 'Authorization': 'whatever-you-want' } })
    .then((res) => res.json())
    .then(data => data.categories)
}

export function fetchPosts(category) {
  const url = category ? `${apiEnd}/${category}/posts` : `${apiEnd}/posts`

  return fetch(url, { headers: { 'Authorization': 'whatever-you-want' } })
    .then((res) => res.json())
}

export function fetchPost(postId) {
  return fetch(`${apiEnd}/posts/${postId}`, { headers: { 'Authorization': 'whatever-you-want' } })
    .then((res) => res.json())
}

export function fetchComments(postId) {
  return fetch(`${apiEnd}/posts/${postId}/comments`, { headers: { 'Authorization': 'whatever-you-want' } })
    .then((res) => res.json())
}

export function vote(id, type, option) {
  const data = { id: id, option: option }
  return fetch(`${apiEnd}/${type}/${id}/`, {
    method: 'POST',
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': 'whatever-you-want' },
    body: JSON.stringify(data)
  })
    .then((res) => res.json())
}

export function create(data) {
  return fetch(`${apiEnd}/posts`, {
    method: 'POST',
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': 'whatever-you-want' },
    body: JSON.stringify(data)
  })
    .then((res) => res.json())
}

export function updatePost(id, data) {
  return fetch(`${apiEnd}/posts/${id}/`, {
    method: 'PUT',
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': 'whatever-you-want' },
    body: JSON.stringify(data)
  })
    .then((res) => res.json())
}

export function createComment(data) {
  return fetch(`${apiEnd}/comments`, {
    method: 'POST',
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': 'whatever-you-want' },
    body: JSON.stringify(data)
  })
    .then((res) => res.json())
}

export function deletePost(id) {
  return fetch(`${apiEnd}/posts/${id}`, {
    method: 'DELETE',
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': 'whatever-you-want' },
  })
    .then((res) => res.json())
}

export function updateComment(id, data) {
  return fetch(`${apiEnd}/comments/${id}`, {
    method: 'PUT',
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': 'whatever-you-want' },
    body: JSON.stringify(data)
  })
    .then((res) => res.json())
}

export function deleteComment(id) {
  return fetch(`${apiEnd}/comments/${id}`, {
    method: 'DELETE',
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': 'whatever-you-want' },
  })
    .then((res) => res.json())
}