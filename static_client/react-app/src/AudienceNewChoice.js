import React, { Component } from 'react';

var Socket;
class AudienceNewChoice extends Component {
	constructor() {
		super();
		this.newChoice = this.newChoice.bind(this);
	}
	componentDidMount() {
      	Socket = new WebSocket('ws://localhost:4444/' );
  	}
  	newChoice() {
  		Socket.send("new choice");
  	}
	render() {
		return (
			<div>
				<h1>Audience New Choice</h1>
				<button onClick={this.newChoice}>New Choice</button>
			</div>
		);
	}
}

export default AudienceNewChoice;