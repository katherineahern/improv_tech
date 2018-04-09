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
    <div className="App-cover">

       <h4>Improvisational Technology presents...</h4>
       <h1>A fistful of apps!</h1>

          <div class="col-6">
             <div class="tile">
              <h3>Sing!</h3>
              <p><a href="music" class = "button" >Go!</a></p>
             </div>
          </div>
          <div class="col-6">
             <div class="tile">
              <h3>Add a Line!</h3>
              <p><a href="LineHat" class = "button" >Go!</a></p>
             </div>
          </div>
          <div class="col-6">
             <div class="tile">
              <h3>What is my line?!</h3>
              <p><a href="GetLine" class = "button" >Go!</a></p>
             </div>
          </div>
          <div class="col-6">
             <div class="tile">
              <h3>Make them SING!</h3>
              <p><a href="AudienceMusicmusic" class = "button" >Go!</a></p>
             </div>
          </div>
          <div class="col-6">
             <div class="tile">
              <h3>Admin Music!</h3>
              <p><a href="AdminMusic" class = "button" >Go!</a></p>
             </div>
         </div>
       </div>
    </div>

    );
  }

}


export default App;
