import React, { Component } from 'react';
import new_choice from './songs/newChoice.mp3';

var Socket;
class AdminNewChoice extends Component {
	constructor() {
		super();
		this.newChoice = this.newChoice.bind(this);
	}
	componentDidMount() {
	    Socket = new WebSocket('ws://ec2-52-206-113-82.compute-1.amazonaws.com:4444/' );
	    Socket.onmessage = function(e) {
	      console.log("got new choice");
	      console.log(e.data);
	      this.newChoice();
	    }.bind(this); // you need to bind here
  	}
  	newChoice() {
  		console.log("New Choice");
  		var audio = this.refs['audio'];
	    audio.load();
	    audio.currentTime = 0;
	    audio.play();
  	}

	render() {
		return (
			<div>
				<h1>Admin New Choice</h1>
				<audio ref='audio' key={ Math.random() } > //key to rerender audio
            		<source src={new_choice} type="audio/mpeg" />
          		</audio>
			</div>
		);
	}
}

export default AdminNewChoice;