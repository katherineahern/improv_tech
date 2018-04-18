import React, { Component } from 'react';

var Socket;
class AudienceNewChoice extends Component {
	constructor() {
		super();
		this.newChoice = this.newChoice.bind(this);
	}
	componentDidMount() {
      	Socket = new WebSocket('ws://ec2-52-206-113-82.compute-1.amazonaws.com:4444/' );
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