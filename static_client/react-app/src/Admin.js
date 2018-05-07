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
        <div className="flex-container">
          <div className="col-6">
             <div className="tile">
              <h3>Admin Music!</h3>
              <p><a href="AdminMusic" className = "button blur whitebg" >⚙️</a></p>
             </div>
          </div>

          <div className="col-6">
             <div className="tile">
              <h3>Admin New Choice</h3>
              <p><a href="adminNewChoice" className = "button whitebg" >⚙️</a></p>
             </div>
          </div>
          <div className="col-6">
             <div className="tile">
              <h3>Admin Lines</h3>
              <p><a href="hatAdmin" className = "button whitebg" >⚙️️</a></p>
             </div>
          </div>
          <div className="col-6">
             <div className="tile">
              <h3>Show all lines to audience</h3>
              <p><a href="showAllLines" className = "button whitebg" >⚙️️</a></p>
             </div>
          </div>
          </div>
        </div>
    </div>

    );
  }

}


export default Admin;