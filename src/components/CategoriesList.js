import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect} from 'react-redux'
import { fetchCategories } from '../actions/categories'

class CategoriesList extends Component {
	componentDidMount() {
		this.props.fetchCategories();
	}

	render() {
		const { categories } = this.props.categories

		return (
			<div className='jumbotron category-list'>
				<h1>Categories</h1>
				{ categories !== undefined && (
					<ul className="list-group">
					{categories.map( category => (
						<li key={category.path} className="list-group-item">
						<Link
							className="nav-link"
							to={`/${category.path}`}
							>{category.name}</Link>
						</li>
					))}
					</ul>
				)}
			</div>
		)
	}
}

const mapStateToProps = ({ categories }) => ({
	categories
})

export default connect(mapStateToProps, { fetchCategories }) (CategoriesList)