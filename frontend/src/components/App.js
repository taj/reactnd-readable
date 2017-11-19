import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header'
import CategoriesList from './CategoriesList'
import PostsList from './PostsList'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />

          <Route exact path="/" render={() => (
            <div className="container">
              <CategoriesList />
              <PostsList />
            </div>
          )} />
          
          <Route exact path="/category/:category" render={(props) => (
            <div className="container">
              <PostsList {...props} />
            </div>
          )} />

        </div>
      </Router>
    );
  }
}

export default App
