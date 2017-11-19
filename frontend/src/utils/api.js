const apiEnd = 'http://localhost:3001'

export function fetchCategories() {
  return fetch (`${apiEnd}/categories`, { headers: { 'Authorization': 'whatever-you-want' }})
    .then((res) => res.json())
    .then(data => data.categories)
}