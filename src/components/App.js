import React, { Component } from 'react';
import CategoriesList from './CategoriesList'
import PostsList from './PostsList'
import '../App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<nav className="navbar navbar-dark bg-dark">
					<div className="container">
						<a className="navbar-brand" href="/">Project Readable</a>
					</div>
				</nav>

				<div className="container">
					<CategoriesList />
					<PostsList />
				</div>
			</div>
		);
	}
}

export default App;
