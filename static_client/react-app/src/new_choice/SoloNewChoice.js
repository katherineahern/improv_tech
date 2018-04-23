import React, { Component } from 'react';
import new_choice from '../music/songs/newChoice.mp3';

class SoloNewChoice extends Component {
	constructor() {
		super();
    	this.newChoice = this.newChoice.bind(this);
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
				<h1>Solo New Choice</h1>
				<button onClick={this.newChoice}>New Choice</button>
				<audio ref='audio' key={ Math.random() } > //key to rerender audio
            		<source src={new_choice} type="audio/mpeg" />
          		</audio>
			</div>
		);
	}
}

export default SoloNewChoice;