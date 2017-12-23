import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { name: 'John'};
    this.flipName = this.flipName.bind(this);
  }

  flipName() {
    if(this.state.name === 'John') {
      this.setState({name: 'Dona'});
    } else {
      this.setState({name: 'John'})
    }
  }

  render() {
    return (
      <div>
        <div>{this.state.name}</div>
        <button onClick={this.flipName}>Change</button>
      </div>
    );
  }
}

export default App;
