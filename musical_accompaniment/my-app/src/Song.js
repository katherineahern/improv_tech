import React, { Component } from 'react';
import Sound from 'react-sound';
import happy from './songs/happy_cha_cha.m4a';
import sad from './songs/sad.m4a';
import angry from './songs/angry.m4a';
import fearful from './songs/fearful.m4a';

class Song extends React.Component {
	constructor(props) {

		super(props);
		
	}


	
	 render() { 
	 	console.log(this);
	  	switch(this.props.emotion) {
		    case 'happy':
		      return (
		        <source src={happy} type="audio/mpeg" />
		      );
		      break;
		    case 'sad':
		      return (
		        <source src={sad} type="audio/mpeg" />
		      );
		      break;
		    case 'angry':
		      return (
		        <source src={angry} type="audio/mpeg" />
		      );
		      break;
		    case 'fearful':
		      return (
		        <source src={fearful} type="audio/mpeg" />
		      );
		      break;
		    default:
		      return (
		        <source src={happy} type="audio/mpeg" />
		      );
		}
	 }
 
}

// Must export!
export default Song;

