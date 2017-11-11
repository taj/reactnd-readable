import React, { Component } from 'react'

class ItemControls extends Component {
	constructor(props) {
		super(props)

		this.state = { onItemControlClick: this.props.onItemControlClick }

		this.handleChoice = this.handleChoice.bind(this)
	}

	handleChoice = (action) => {
		this.props.onItemControlClick(action)
	}

	render() {
		return (
			<div className="btn-group btn-editing" role="group">
				<button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown">
				</button>
				<div className="dropdown-menu">
					<a className="dropdown-item"
						onClick={ () => { this.handleChoice('edit')} }
					>Edit</a>
					<a className="dropdown-item"
						onClick={ () => { this.handleChoice('delete')} }
					>Delete</a>
				</div>
			</div>
		)
	}
}

export default ItemControls