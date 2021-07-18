import React, { Component } from 'react';
import './App.css';
import { Searchbar } from './Searchbar/Searchbar';

class App extends Component {
  state = { query: '' };

  formSubmit = (data) => {
    this.setState({query: data.query});
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState !==this.state) {
      
    }
  }

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.formSubmit}/>
      </div>
    );
  }
}

export default App;
