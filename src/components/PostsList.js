import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostItem from './PostItem'
import { fetchPosts } from '../actions/posts'

class PostsList extends Component {
	componentDidMount() {
		this.props.fetchPosts()
	}

	render() {
		const { posts } = this.props.posts
		return (
			<div className='jumbotron'>
				<h1>All Posts</h1>
				{ posts !== undefined && posts.map( post => (
					<PostItem key={post.id} post={post}/>
				))}
			</div>
		)
	}
}

const mapStateToProps = ({ posts }) => ({
	posts
})

export default connect(mapStateToProps, { fetchPosts }) (PostsList)