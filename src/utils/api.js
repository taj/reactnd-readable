export function fetchCategories() {
	return fetch ('http://localhost:3001/categories', { headers: { 'Authorization': 'whatever-you-want' }})
			.then((res) => res.json())
}

export function fetchPosts() {
	return fetch ('http://localhost:3001/posts', { headers: { 'Authorization': 'whatever-you-want' }})
			.then((res) => res.json())
}