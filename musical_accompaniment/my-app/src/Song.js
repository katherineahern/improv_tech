import React, { Component } from 'react';
import Sound from 'react-sound';
import happy from './songs/happy_cha_cha.m4a';
import sad from './songs/sad.m4a';
import angry from './songs/angry.m4a';
import fearful from './songs/fearful.m4a';

import funk_happy from './songs/funk_happy.m4a';
import jazz_happy from './songs/jazz_happy.m4a';
import latin_happy from './songs/latin_happy.m4a';
import rock_happy from './songs/rock_happy.m4a';

import funk_sad from './songs/funk_sad.m4a';
import jazz_sad from './songs/jazz_sad.m4a';
import latin_sad from './songs/latin_sad.m4a';
import rock_sad from './songs/rock_sad.m4a';

class Song extends React.Component {
	constructor(props) {
		super(props);
		this.state = {palette: this.props.palette};
		this.getSongSrc = this.getSongSrc.bind(this);	
	}
	getSongSrc() {
		console.log(this.props);
	 	var songSelection = {
			"happy": { "none": [rock_happy], "funk": [funk_happy], "jazz": [jazz_happy], "latin": [latin_happy] },
			"sad": {  "none": [rock_sad], "funk": [funk_sad], "jazz": [jazz_sad], "latin": [latin_sad] },
			//redo angry and fearful
			"angry": { "none": [rock_happy], "funk": [funk_happy], "jazz": [jazz_happy], "latin": [latin_happy] },
			"fearful": {  "none": [rock_sad], "funk": [funk_sad], "jazz": [jazz_sad], "latin": [latin_sad] }
		};
	 	console.log(songSelection[this.props.emotion][this.props.palette][0]);
	 	return songSelection[this.props.emotion][this.state.palette][0];
	 }

	render() { 
	 	return (
	    	<source src={this.getSongSrc()} type="audio/mpeg" />
	    );
	  	
	 }
}

// Must export!
export default Song;

