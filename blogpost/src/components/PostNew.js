import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createPost } from '../actions';
// import './PostNew.css';

class PostNew extends Component {
	renderField(field) {
		const { meta: { touched, error } } = field;
		const className = `form-group ${touched && error ? 'form-danger11' : ''}`; // ini css buat input text merah ngga berfungsi
		return (
			<div className={className}>
				<label>{field.label}</label>
				<input type="text" {...field.input} className="form-control" />
				<div className="text-danger">{touched ? error : ''}</div>
			</div>
		);
	}
	onSubmit(values) {
		this.props.createPost(values, () => {
			this.props.history.push('/');
		});
	}
	render() {
		const { handleSubmit } = this.props;
		return (
			<div>
				<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
					<Field label="Title" name="title" component={this.renderField} />
					<Field label="Categories" name="categories" component={this.renderField} />
					<Field label="Post Content" name="content" component={this.renderField} />
					<button type="submit" className="btn btn-primary">
						Submit
					</button>
					<Link to="/" className="btn btn-danger">
						Cancel
					</Link>
				</form>
			</div>
		);
	}
}

function validate(values) {
	const errors = {}; // pasti selalu ada error
	if (!values.title) {
		errors.title = 'Enter a title';
	}
	if (!values.categories) {
		errors.categories = 'Enter categories';
	}
	if (!values.content) {
		errors.content = 'Enter some content';
	}
	return errors;
}

export default reduxForm({
	validate, // singkatan dari ====== validate: validate
	form: 'PostNewForm' // form name
})(connect(null, { createPost })(PostNew));
