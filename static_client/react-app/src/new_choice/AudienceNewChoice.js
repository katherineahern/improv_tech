import React, { Component } from 'react';
import * as Constants from '../Constants';

var Socket;
class AudienceNewChoice extends Component {
	constructor() {
		super();
		this.newChoice = this.newChoice.bind(this);
	}
	componentDidMount() {
      	Socket = new WebSocket('ws://' + Constants.URL + ':4444/' );
  	}
  	newChoice() {
  		Socket.send("new choice");
  	}
	render() {
		return (
			<div>
   			<div className="header-spacer"></div>
  			<header className="choice-header audience">
				  <a class="applogo" href="App">⬅️</a>
					<h1 className="App-title">New Choice!</h1>
  			</header>

				<div class="pad15">
  				<h2>You control the scene:</h2>
				  <p>When the actor says something you want them to change, tap the "New Choice" button.</p>
				  <p>They will come up with a new line and continue from there as though the last line never happened.</p>
				  <p>...</p>
				</div>
				<button onClick={this.newChoice}>📣 - New Choice! - ⏪</button>
			</div>
		);
	}
}

export default AudienceNewChoice;
