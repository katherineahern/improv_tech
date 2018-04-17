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
           <h3>Songmaster!</h3>
           <p><a href="AudienceMusic" class = "button bluebg" >🎶</a></p>
          </div>
       </div>
       <div class="col-6">
            <div class="tile">
             <h3>What is my line?!</h3>
             <p><a href="GetLine" class = "button blur" >⁉️</a></p>
            </div>
        </div>
        <div class="col-6">
             <div class="tile">
              <h3>Add a Line!</h3>
              <p><a href="LineHat" class = "button bluebg" >🖋️</a></p>
             </div>
          </div>
          <div class="col-6">
             <div class="tile">
              <h3>Improvise a Song!</h3>
              <p><a href="music" class = "button" >▶️</a></p>
             </div>
          </div>
          <div class="col-6">
             <div class="tile">
              <h3>Audience New Choice</h3>
              <p><a href="audienceNewChoice" class = "button bluebg" >📣</a></p>
             </div>
          </div>
          <div class="col-6">
             <div class="tile">
              <h3>Solo New Choice</h3>
              <p><a href="soloNewChoice" class = "button" >🤷</a></p>
             </div>
          </div>
          <div class="col-6">
             <div class="tile">
              <h3>Admin Music!</h3>
              <p><a href="AdminMusic" class = "button blur whitebg" >⚙️</a></p>
             </div>
          </div>
          <div class="col-6">
             <div class="tile">
              <h3>Admin New Choice</h3>
              <p><a href="adminNewChoice" class = "button whitebg" >🛎️</a></p>
             </div>
          </div>
          <div class="col-6">
             <div class="tile">
              <h3>Admin Lines from a Hat</h3>
              <p><a href="hatAdmin" class = "button whitebg" >🛎️</a></p>
             </div>
          </div>
       </div>
    </div>

    );
  }

}


export default App;
