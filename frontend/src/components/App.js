import React, { Component } from 'react'
import Header from './Header'
import CategoriesList from './CategoriesList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <CategoriesList />
        </div>
      </div>
    );
  }
}

export default App
