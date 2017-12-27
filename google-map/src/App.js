import React, { Component } from 'react';
import './App.css';
import GoogleMap from './google_map';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Google Map?</p>
        <GoogleMap />
      </div>
    );
  }
}

export default App;
