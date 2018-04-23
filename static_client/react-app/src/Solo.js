import React, { Component } from 'react';
import './css/App.css';

class Solo extends Component {
  constructor(props) {

    super(props);
  }
  render() {
    return (
    <div>
      <div className="App-cover">

        <h4>Improvisational Technology presents...</h4>
        <h2>The Internet: Live!</h2>
        <div class="flex-container">
          <div class="col-6">
             <div class="tile">
              <h3>Improvise a Song!</h3>
              <p><a href="music" class = "button" >▶️</a></p>
             </div>
          </div>

          <div class="col-6">
             <div class="tile">
              <h3>Solo New Choice</h3>
              <p><a href="soloNewChoice" class = "button" >🤷</a></p>
             </div>
          </div>

          </div>

        </div>
    </div>

    );
  }

}


export default Solo;