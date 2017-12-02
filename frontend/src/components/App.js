import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './Header'
import CategoriesList from './CategoriesList'
import PostsList from './PostsList'
import PostDetails from './PostDetails'
import AddPost from './AddPost'
import EditPost from './EditPost'

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

          <Route exact path="/post/new" render={(props) => (
            <div className="container">
              <AddPost {...props} />
            </div>
          )} />

          <Route exact path="/post/:postId/show" render={(props) => (
            <div className="container">
              <PostDetails {...props} />
            </div>
          )} />

          <Route exact path="/post/:postId/edit" render={(props) => (
            <div className="container">
              <EditPost {...props} />
            </div>
          )} />
        </div>
      </Router>
    );
  }
}

export default App
