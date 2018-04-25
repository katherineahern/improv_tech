import React, { Component } from 'react';
import './css/App.css';

class Admin extends Component {
  constructor(props) {

    super(props);
  }
  render() {
    return (
    <div>
      <div className="App-cover">

        <h4>Improvisational Technology presents...</h4>
        <h2>Admin Panel</h2>
        <div class="flex-container">
          <div class="col-6">
             <div class="tile">
              <h3>Admin Music!</h3>
              <p><a href="AdminMusic" class = "button blur whitebg" >⚙️</a></p>
             </div>
          </div>

          <div class="col-6">
             <div class="tile">
              <h3>Admin New Choice</h3>
              <p><a href="adminNewChoice" class = "button whitebg" >⚙️</a></p>
             </div>
          </div>
          <div class="col-6">
             <div class="tile">
              <h3>Admin Lines</h3>
              <p><a href="hatAdmin" class = "button whitebg" >⚙️️</a></p>
             </div>
          </div>
          <div class="col-6">
             <div class="tile">
              <h3>Show all lines to audience</h3>
              <p><a href="showAllLines" class = "button whitebg" >⚙️️</a></p>
             </div>
          </div>
          </div>
        </div>
    </div>

    );
  }

}


export default Admin;