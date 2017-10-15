import * as ReadableAPI from '../utils/api';

export const GET_CATEGORIES = 'GET_CATEGORIES'

export const fetchCategories = () => dispatch => (
	ReadableAPI
	.fetchCategories()
	.then(res => dispatch(getCategories(res.categories)))
)

export const getCategories = categories => {
	return {
		type: GET_CATEGORIES,
		categories
	}
}