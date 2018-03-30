import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class LineHat extends Component {

	constructor () {
		super();
		this.state = {
	    	response: {}
	  	}
		this.handleClick = this.handleClick.bind(this)
	}
  	render() {
    	return (
      		<div className='button__container'>
      			<h1>Lines from a hat</h1>
      			<p>Username from maecapozzi</p>
		      	<button className='button' onClick={this.handleClick}>
		        	Click Me
		      	</button>
		      	<p>{JSON.stringify(this.state)}</p>
		      	
		    </div>
    	);
  	}

  	handleClick () {
  		let config = {
		  headers: {
		    	"Content-Type": "application/x-www-form-urlencoded"
		}
}
  		axios.get('http://ec2-54-237-240-235.compute-1.amazonaws.com:8080/api/lines', {}, config)
    		.then(response => this.setState({response: response }))

    		
  	}

}

export default LineHat;