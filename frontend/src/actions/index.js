import * as API from '../utils/api'

export const LOAD_CATEGORIES = 'LOAD_CATEGORIES'

// LOAD_CATEGORIES
export const loadCategories = categories => ({
  type: LOAD_CATEGORIES,
  categories
})

// Fetch categories from API
export const fetchCategories = () => dispatch => (
  API
    .fetchCategories()
    .then(categories => dispatch(loadCategories(categories)))
);