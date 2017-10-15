export function fetchCategories() {
	return fetch ('http://localhost:3001/categories', { headers: { 'Authorization': 'whatever-you-want' }})
			.then((res) => res.json())
}

export function fetchPosts(category) {
	const url = category ? `http://localhost:3001/${category}/posts` : `http://localhost:3001/posts`

	return fetch (url, { headers: { 'Authorization': 'whatever-you-want' }})
			.then((res) => res.json())
}

export function fetchPost(postId) {
	return fetch (`http://localhost:3001/posts/${postId}`, { headers: { 'Authorization': 'whatever-you-want' }})
			.then((res) => res.json())
}