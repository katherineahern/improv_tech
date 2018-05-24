import React, { Component } from 'react';
import * as Constants from '../Constants';
import Header from '../Header';

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
  				<Header propsClass={'choice-header audience'} title={'New Choice!'} />
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
