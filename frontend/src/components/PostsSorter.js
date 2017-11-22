import React, { Component } from 'react'

class PostsSorter extends Component {
  constructor(props) {
    super(props)

    this.state = { onOrderChange: this.props.onOrderChange }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (sort) => {
      this.props.onOrderChange(sort)
  }

  render() {
    return (
      <div className="posts-sorter">
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Order by
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <div className="dropdown-item" onClick={ () => { this.handleChange('score')} }>Vote Score</div>
            <div className="dropdown-item" onClick={ () => { this.handleChange('date')} }>Date</div>
          </div>
        </div>
      </div>
    )
  }
}

export default PostsSorter