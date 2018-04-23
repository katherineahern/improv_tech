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
       <div class="flex-container">
        <div class="col-6">
          <div class="tile">
           <h3>Songmaster!</h3>
           <p><a href="AudienceMusic" class = "button bluebg" >🎶</a></p>
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
              <h3>Audience New Choice</h3>
              <p><a href="audienceNewChoice" class = "button bluebg" >📣</a></p>
             </div>
          </div>
          
          
          
         </div>
       </div>
    </div>

    );
  }

}


export default App;
