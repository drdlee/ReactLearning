import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PostIndex from './PostIndex';
import PostNew from './PostNew';
import PostShow from './PostShow';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="container">
					<Switch>
						<Route path="/post/new" component={PostNew} />
						<Route path="/post/:id" component={PostShow} />
						<Route path="/" component={PostIndex} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
