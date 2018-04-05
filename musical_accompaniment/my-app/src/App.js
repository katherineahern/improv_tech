import React, { Component } from 'react';
import './App.css';
import Song from './Song';

class App extends Component {
  constructor(props) {

    super(props);
  }
  render() {
    return (
      <div className="App-cover">
        <h4>Improvisational Technology presents...</h4>
        <h1>A fistful of apps!</h1>

        <div class="col-6">
            <div class="tile">
            <h3>Project 3</h3>
        <p><a href="music" class = "button" >Single player musical accompaniment</a></p>

            </div>
          </div>
        <div class="col-6">
            <div class="tile">
            <h3>Project 4</h3>
            <p><a href="LineHat" class = "button" >Post line</a></p>

        </div>
          </div>
          <div class="col-6">
            <div class="tile">
            <h3>Project 1</h3>
            <p><a href="GetLine" class = "button" >Get line</a></p>

        </div>
          </div>

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
