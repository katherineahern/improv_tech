import React, { Component } from 'react';

var Socket;
class AdminNewChoice extends Component {
	constructor() {
		super();
	}
	componentDidMount() {
	    Socket = new WebSocket('ws://localhost:4444/' );
	    Socket.onmessage = function(e) {
	      console.log("got new choice");
	      console.log(e.data);
	    }.bind(this); // you need to bind here
  	}

	render() {
		return (
			<div>
				<h1>Admin New Choice</h1>
			</div>
		);
	}
}

export default AdminNewChoice;