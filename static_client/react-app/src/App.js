import React, { Component } from 'react';
import './css/App.css';

class App extends Component {
  constructor(props) {

    super(props);
  }
  render() {
    return (
    <div>
      <div className="App-cover">
        <h4>Improvisational Technology presents...</h4>
          <h2>The Internet: Live!</h2>
          <div className="flex-container">
            <div className="col-6">
              <div className="tile">
               <h3>Songmaster</h3>
               <p><a href="AudienceMusic" className= "button bluebg" >🎶</a></p>
              </div>
            </div>

           <div className="col-6">
              <div className="tile">
                <h3>Add a Line</h3>
                <p><a href="LineHat" className= "button bluebg" >🖋️</a></p>
              </div>
            </div>

            <div className="col-6">
              <div className="tile">
                <h3>New Choice</h3>
                <p><a href="audienceNewChoice" className= "button bluebg" >📣</a></p>
              </div>
            </div>
          </div>
        </div>
    </div>
    );
  }

}


export default App;
