import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CategoriesList from './CategoriesList'
import PostsList from './PostsList'
import PostDetails from './PostDetails'
import '../App.css';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<nav className="navbar navbar-dark bg-dark">
						<div className="container">
							<Link className="navbar-brand" to="/">Project Readable</Link>
						</div>
					</nav>

					<Route exact path="/" render={() => (
						<div className="home-page">

							<div className="container">
								<CategoriesList />
								<PostsList />
							</div>
						</div>
					)} />

					<Route exact path="/:category" render={(props) => (
						<div className="container">
							<PostsList {...props}/>
						</div>
					)} />

					<Route exact path="/:category/:postId" render={(props) => (
						<div className="container">
							<PostDetails {...props}/>
						</div>
					)} />
				</div>
			</Router>
		);
	}
}

export default App;
