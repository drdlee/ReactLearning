import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostIndex extends Component {
	componentDidMount() {
		this.props.fetchPosts();
	}
	renderPosts() {
		return _.map(this.props.posts, post => {
			return (
				<li className="list-group-item" key={post.id}>
					<Link to={`/post/${post.id}`}>{post.title}</Link>
				</li>
			);
		});
	}
	render() {
		return (
			<div>
				<h3>Posts Index</h3>
				<div className="text-right">
					<Link to="/post/new" className="btn btn-primary">
						New Post
					</Link>
				</div>

				<ul className="list-group">{this.renderPosts()}</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		posts: state.posts
	};
}

export default connect(mapStateToProps, { fetchPosts })(PostIndex);
