import React, { Component } from 'react';
import './App.css';
import Song from './Song';

class App extends Component {
  constructor(props) {

    super(props);
  }
  render() {
    return (
      <div>
        <h1>Home!</h1>
        <p><a href="music">Single player musical accompaniment</a></p>
        <p><a href="LineHat">Lines from a hat</a></p>
      </div>
    );
  }
  
}

class Home extends Component {
  render() {
    return (
      <h1>Home!</h1>
    );
  }
}




export default App;
