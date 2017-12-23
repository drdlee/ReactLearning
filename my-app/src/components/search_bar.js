import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {term: ''}
  }

  changeValue(term){
    this.setState({term});
    this.props.onSearch(term);
  }

  render(){
    return (
      <div>
        <input
          value={this.state.term}
          onChange={(event) => this.changeValue(event.target.value)} />
          <p><small>you are currently searching : <i>{this.state.term}</i></small></p>
      </div>
    );
  }
}

export default SearchBar;
