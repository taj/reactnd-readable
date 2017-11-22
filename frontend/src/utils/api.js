const apiEnd = 'http://localhost:3001'

export function fetchCategories() {
  return fetch (`${apiEnd}/categories`, { headers: { 'Authorization': 'whatever-you-want' }})
    .then((res) => res.json())
    .then(data => data.categories)
}

export function fetchPosts(category) {
  const url = category ? `${apiEnd}/${category}/posts` : `${apiEnd}/posts`

  return fetch (url, { headers: { 'Authorization': 'whatever-you-want' }})
    .then((res) => res.json())
}

export function fetchPost(postId) {
	return fetch (`${apiEnd}/posts/${postId}`, { headers: { 'Authorization': 'whatever-you-want' }})
			.then((res) => res.json())
}