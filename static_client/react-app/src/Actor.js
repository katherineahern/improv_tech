import React, { Component } from 'react';
import './css/App.css';

class Actor extends Component {
  constructor(props) {

    super(props);
  }
  render() {
    return (
    <div>
      <div className="App-cover">
        <h4>Improvisational Technology presents...</h4>
        <h2>Actor Panel</h2>
        <div className="flex-container">
          <div className="col-6">
            <div className="tile">
              <h3>What is my line?!</h3>
              <p><a href="GetLine" className= "button blur" >⁉️</a></p>
            </div>
          </div>
          </div>
        </div>
    </div>

    );
  }

}


export default Actor;