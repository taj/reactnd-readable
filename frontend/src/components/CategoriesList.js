import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadCategories } from '../actions'
import * as API from '../utils/api'

class CategoriesList extends Component {
  componentDidMount() {
    this.props.fetchCategories()
  }

  render() {
    const { categories } = this.props.categories
    return (
      <div className='jumbotron category-list'>
        <h1>Categories</h1>
        {categories !== undefined && (
          <ul className="list-group">
            {categories.map(category => (
              <li key={category.path} className="list-group-item">
                {category.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchCategories: () => (
      API
        .fetchCategories()
        .then(categories => dispatch(loadCategories(categories)))
    )
  }
}

const mapStateToProps = ({ categories }) => ({
  categories
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesList)