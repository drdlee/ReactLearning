import axios from 'axios';

import { FETCH_POSTS, CREATE_POST, FETCH_SINGLE, DELETE_POST } from './types';
const ROOT_URL = 'http://reduxblog.herokuapp.com/api/posts';
const API_KEY = '?key=551288';

export const fetchPosts = () => {
	const request = axios.get(`${ROOT_URL}${API_KEY}`);
	return {
		type: FETCH_POSTS,
		payload: request
	};
};

export const createPost = (values, callback) => {
	const request = axios.post(`${ROOT_URL}${API_KEY}`, values).then(() => callback());
	return {
		type: CREATE_POST,
		payload: request
	};
};

export const fetchSingle = id => {
	const request = axios.get(`${ROOT_URL}/${id}${API_KEY}`);
	return {
		type: FETCH_SINGLE,
		payload: request
	};
};

export const deletePost = (id, callback) => {
	axios.delete(`${ROOT_URL}/${id}${API_KEY}`).then(() => callback());
	return {
		type: DELETE_POST,
		payload: id
	};
};
