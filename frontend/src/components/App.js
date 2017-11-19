import React, { Component } from 'react'
import Header from './Header'
import CategoriesList from './CategoriesList'
import PostsList from './PostsList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <CategoriesList />
          <PostsList />
        </div>
      </div>
    );
  }
}

export default App
